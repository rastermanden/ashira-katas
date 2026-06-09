import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { kyuLevels } from '@/data/kyu';
import { allKatas } from '@/data/katas';
import type { Locale } from '@/data/types';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Map each kata to the kyu level where it is FIRST introduced (highest kyu number = earliest).
function buildPensumTable() {
  return allKatas
    .map((kata) => {
      const firstKyu = Math.max(...kata.requiredForKyu);
      const kyu = kyuLevels.find((k) => k.level === firstKyu)!;
      return { kata, kyu, firstKyu };
    })
    .sort((a, b) => b.firstKyu - a.firstKyu); // 10 → 9 → … → 1
}

const beltColorHex: Record<string, string> = {
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

  const pensum = buildPensumTable();

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-10 py-6">
        <p className="japanese-text text-5xl font-bold text-ashihara-dark mb-2 tracking-widest">芦原空手</p>
        <h1 className="text-2xl font-bold text-gray-700 mt-1">{t('title')}</h1>
        <p className="text-lg text-ashihara-gold font-semibold mt-1">{t('subtitle')}</p>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">{t('tagline')}</p>
      </div>

      {/* Pensum overview table */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t('kyuOverview')}</h2>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs w-8">#</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs">{t('belt')}</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs">{t('requiredKata')}</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-500 uppercase tracking-wider text-xs hidden sm:table-cell">Steps</th>
              </tr>
            </thead>
            <tbody>
              {pensum.map(({ kata, kyu }, i) => {
                const hex = beltColorHex[kyu.beltTailwindColor] ?? '#888';
                const isComplete = kata.steps.length > 0;
                return (
                  <tr
                    key={kata.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-stone-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-400 text-xs font-mono">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/kyu/${kyu.level}`} className="flex items-center gap-2 group">
                        <span
                          className="inline-block h-4 w-8 rounded-sm flex-shrink-0 shadow-sm"
                          style={{
                            backgroundColor: hex,
                            border: hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none',
                          }}
                        />
                        <span className="text-gray-600 group-hover:text-ashihara-red transition-colors whitespace-nowrap text-xs">
                          {kyu.name[l]}
                        </span>
                      </Link>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/kata/${kata.id}`} className="group">
                        <span className="font-semibold text-gray-800 group-hover:text-ashihara-red transition-colors block leading-tight">
                          {kata.name[l]}
                        </span>
                        <span className="text-xs text-gray-400 italic">{kata.romaji}</span>
                        <span className="japanese-text text-xs text-gray-300 ml-2">{kata.japaneseCharacters}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right hidden sm:table-cell">
                      {isComplete ? (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-stone-100 px-2 py-0.5 rounded-full">
                          {kata.steps.length}
                        </span>
                      ) : (
                        <span className="text-xs text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Kyu level cards */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{t('selectKyu')}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kyuLevels.map((kyu) => {
            const hex = beltColorHex[kyu.beltTailwindColor] ?? '#888';
            const katas = allKatas.filter((k) => k.requiredForKyu.includes(kyu.level));
            return (
              <Link
                key={kyu.level}
                href={`/kyu/${kyu.level}`}
                className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-ashihara-gold hover:shadow-md transition-all duration-200 px-4 py-3 overflow-hidden"
              >
                <span
                  className="flex-shrink-0 h-8 w-3 rounded-sm shadow-sm"
                  style={{ backgroundColor: hex, border: hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-800 text-sm japanese-text">{kyu.name[l]}</p>
                  <p className="text-xs text-gray-400">{katas.length} kata</p>
                </div>
                <span className="text-gray-300 group-hover:text-ashihara-gold transition-colors">→</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
