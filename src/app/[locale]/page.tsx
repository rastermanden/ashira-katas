import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { kyuLevels } from '@/data/kyu';
import { getKatasForKyu } from '@/data/katas';
import type { Locale } from '@/data/types';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const beltColorMap: Record<string, string> = {
  'bg-white border border-gray-300': '#FFFFFF',
  'bg-yellow-400': '#FACC15',
  'bg-orange-500': '#F97316',
  'bg-blue-500': '#3B82F6',
  'bg-green-500': '#22C55E',
  'bg-purple-500': '#A855F7',
  'bg-amber-800': '#92400E',
  'bg-amber-900': '#78350F',
  'bg-stone-700': '#44403C',
  'bg-stone-800': '#292524',
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const l = locale as Locale;

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-12 py-8">
        <p className="japanese-text text-5xl font-bold text-ashihara-dark mb-2 tracking-widest">芦原空手</p>
        <h1 className="text-2xl font-bold text-gray-700 mt-1">{t('title')}</h1>
        <p className="text-lg text-ashihara-gold font-semibold mt-1">{t('subtitle')}</p>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">{t('tagline')}</p>
      </div>

      {/* Kyu grid */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{t('kyuOverview')}</h2>
        <p className="text-sm text-gray-500 mb-6">{t('selectKyu')}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {kyuLevels.map((kyu) => {
            const katas = getKatasForKyu(kyu.level);
            const beltHex = beltColorMap[kyu.beltTailwindColor] ?? '#888';

            return (
              <Link
                key={kyu.level}
                href={`/${locale}/kyu/${kyu.level}`}
                locale={l}
                className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-ashihara-gold transition-all duration-200 overflow-hidden"
              >
                {/* Belt colour stripe */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: beltHex, borderBottom: beltHex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-gray-900 japanese-text">
                        {kyu.name[l]}
                      </span>
                      <span className="ml-2 text-xs text-gray-400">{kyu.japaneseNumeral}</span>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-ashihara-gold transition-colors">
                      {katas.length} kata →
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {katas.map((kata) => (
                      <span
                        key={kata.id}
                        className="inline-block bg-stone-100 text-stone-600 text-xs px-2 py-0.5 rounded-full"
                      >
                        {kata.romaji}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
