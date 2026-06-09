'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
  ];

  return (
    <header className="bg-ashihara-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" locale={locale as 'en' | 'da' | 'ja'} className="flex items-center gap-3 group">
          <span className="text-2xl font-bold japanese-text text-ashihara-gold">芦原</span>
          <span className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white transition-colors hidden sm:block">
            {t('siteTitle')}
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              locale={locale as 'en' | 'da' | 'ja'}
              className={`text-sm font-medium transition-colors hover:text-ashihara-gold ${
                pathname === '/' ? 'text-ashihara-gold' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
