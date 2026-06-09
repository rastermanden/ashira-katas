import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getKataById, allKatas } from '@/data/katas';
import { kyuLevels } from '@/data/kyu';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import type { Locale } from '@/data/types';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const kata of allKatas) {
      params.push({ locale, kataId: kata.id });
    }
  }
  return params;
}

export default async function KataPage({
  params,
}: {
  params: Promise<{ locale: string; kataId: string }>;
}) {
  const { locale, kataId } = await params;
  setRequestLocale(locale);

  const kata = getKataById(kataId);
  if (!kata) notFound();

  const t = await getTranslations('kata');
  const l = locale as Locale;

  const requiredForKyu = kyuLevels.filter((k) => kata.requiredForKyu.includes(k.level));
  const hasSteps = kata.steps.length > 0;

  return (
    <div>
      <Link
        href={`/${locale}`}
        locale={l}
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ashihara-red transition-colors mb-6"
      >
        {t('backToKyu')}
      </Link>

      {/* Kata header */}
      <div className="mb-8">
        <p className="japanese-text text-5xl font-bold text-ashihara-dark tracking-widest mb-1">
          {kata.japaneseCharacters}
        </p>
        <h1 className="text-2xl font-bold text-gray-800">{kata.name[l]}</h1>
        <p className="text-sm text-gray-400 italic mt-0.5">{kata.romaji}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">
              {t('overview')}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{kata.description[l]}</p>
          </section>

          {/* Steps list */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              {t('steps')}{' '}
              {hasSteps && (
                <span className="text-sm font-normal text-gray-400">
                  ({t('stepCount', { count: kata.steps.length })})
                </span>
              )}
            </h2>

            {!hasSteps ? (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
                <p className="text-amber-700 text-sm">{t('comingSoon')}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {kata.steps.map((step) => (
                  <Link
                    key={step.stepNumber}
                    href={`/${locale}/kata/${kata.id}/step/${step.stepNumber}`}
                    locale={l}
                    className="group flex items-center gap-4 bg-white rounded-xl border border-gray-200 hover:border-ashihara-gold hover:shadow-md transition-all duration-200 p-4"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center font-bold text-sm group-hover:bg-ashihara-gold group-hover:text-white transition-colors">
                      {step.stepNumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm">{step.name[l]}</p>
                      <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                        {step.attacker[l].substring(0, 80)}…
                      </p>
                    </div>
                    <span className="text-gray-300 group-hover:text-ashihara-gold transition-colors text-lg">→</span>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Required for */}
          <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              {t('required')}
            </h3>
            <div className="space-y-2">
              {requiredForKyu.map((kyu) => (
                <Link
                  key={kyu.level}
                  href={`/${locale}/kyu/${kyu.level}`}
                  locale={l}
                  className="flex items-center gap-2 group"
                >
                  <div className={`h-3 w-12 rounded-sm ${kyu.beltTailwindColor} flex-shrink-0`} />
                  <span className="text-sm text-gray-600 group-hover:text-ashihara-red transition-colors">
                    {kyu.name[l]}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Videos */}
          <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              {t('youtubeLinks')}
            </h3>
            {kata.youtubeLinks.length === 0 ? (
              <p className="text-xs text-gray-400 italic">{t('noVideo')}</p>
            ) : (
              <div className="space-y-4">
                {kata.youtubeLinks.map((link) => (
                  <YouTubeEmbed key={link.url} url={link.url} label={link.label} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
