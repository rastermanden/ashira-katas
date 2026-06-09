import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import LocaleHtmlSetter from '@/components/LocaleHtmlSetter';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  const siteTitle = t('siteTitle');

  // On PR preview builds the workflow passes the PR number (and title) so the
  // browser tab is distinguishable from the production site. See preview.yml.
  const prNumber = process.env.PR_NUMBER;
  const prTitle = process.env.PR_TITLE;
  const title = prNumber
    ? `[PR #${prNumber}] ${prTitle ? `${prTitle} · ` : ''}${siteTitle}`
    : siteTitle;

  return {
    title,
    description: 'Ashihara Karate Kata Guide — multilingual step-by-step reference',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'da' | 'ja')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleHtmlSetter locale={locale} />
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      <footer className="border-t border-gray-200 mt-16 py-6 text-center text-xs text-gray-400 bg-white">
        <p>Ashihara Karate Kata Guide</p>
      </footer>
    </NextIntlClientProvider>
  );
}
