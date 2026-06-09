import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getKyuByLevel, kyuLevels } from '@/data/kyu';
import { getKatasForKyu } from '@/data/katas';
import type { Locale } from '@/data/types';
import { routing } from '@/i18n/routing';
import { getBeltStyle } from '@/lib/belt';

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const kyu of kyuLevels) {
      params.push({ locale, kyuLevel: String(kyu.level) });
    }
  }
  return params;
}

export default async function KyuPage({
  params,
}: {
  params: Promise<{ locale: string; kyuLevel: string }>;
}) {
  const { locale, kyuLevel } = await params;
  setRequestLocale(locale);

  const level = parseInt(kyuLevel, 10);
  const kyu = getKyuByLevel(level);
  if (!kyu) notFound();

  const t = await getTranslations('kyu');
  const l = locale as Locale;
  const katas = getKatasForKyu(level);

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ashihara-red transition-colors mb-6"
      >
        {t('backToHome')}
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-10 w-4 rounded-sm shadow-md flex-shrink-0" style={getBeltStyle(kyu)} />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 japanese-text">{kyu.name[l]}</h1>
          <p className="text-sm text-gray-500">{kyu.japaneseNumeral}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-4">{t('kataRequired')}</h2>

      {katas.length === 0 ? (
        <p className="text-gray-400 italic">No kata assigned yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {katas.map((kata) => {
            const isComplete = kata.steps.length > 0;
            return (
              <Link
                key={kata.id}
                href={`/kata/${kata.id}`}
                className={`group block bg-white rounded-xl border shadow-sm transition-all duration-200 overflow-hidden ${
                  isComplete
                    ? 'border-gray-200 hover:border-ashihara-gold hover:shadow-md'
                    : 'border-gray-100 opacity-70'
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="japanese-text text-2xl font-bold text-ashihara-dark">
                        {kata.japaneseCharacters}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 mt-0.5">{kata.name[l]}</p>
                      <p className="text-xs text-gray-400 mt-0.5 italic">{kata.romaji}</p>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-ashihara-gold transition-colors whitespace-nowrap">
                      {isComplete
                        ? t('steps', { count: kata.steps.length })
                        : '—'}{' '}
                      →
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 line-clamp-2">{kata.description[l]}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
