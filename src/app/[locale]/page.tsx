import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { kyuLevels } from '@/data/kyu';
import { allKatas, getKatasForKyu } from '@/data/katas';
import { getKyusRequiringKata } from '@/data/requirements';
import type { Locale } from '@/data/types';
import { routing } from '@/i18n/routing';
import { getBeltStyle } from '@/lib/belt';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// The kyu grade where a kata is FIRST introduced (highest kyu number = earliest belt).
function firstKyuForKata(kataId: string): number | null {
  const requiringKyus = getKyusRequiringKata(kataId);
  return requiringKyus.length > 0 ? Math.max(...requiringKyus) : null;
}

// Group the pensum by grade: each grade lists the katas first introduced at it,
// so every belt is shown exactly once (no repeated swatches). kyuLevels is
// already ordered 12 → 1; grades that introduce no new kata are omitted.
function buildPensumByGrade() {
  return kyuLevels
    .map((kyu) => ({
      kyu,
      katas: allKatas.filter((kata) => firstKyuForKata(kata.id) === kyu.level),
    }))
    .filter((group) => group.katas.length > 0);
}


export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const l = locale as Locale;

  const pensum = buildPensumByGrade();

  return (
    <div>
      {/* Hero */}
      <div className="text-center mb-10 py-6">
        <p className="japanese-text text-5xl font-bold text-ashihara-dark mb-2 tracking-widest">芦原空手</p>
        <h1 className="text-2xl font-bold text-gray-700 mt-1">{t('title')}</h1>
        <p className="text-lg text-ashihara-gold font-semibold mt-1">{t('subtitle')}</p>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">{t('tagline')}</p>
      </div>

      {/* Pensum overview, grouped by grade (one belt per grade) */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{t('kyuOverview')}</h2>

        <div className="space-y-3">
          {pensum.map(({ kyu, katas }) => (
            <div
              key={kyu.level}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <Link
                href={`/kyu/${kyu.level}`}
                className="flex items-center gap-2 px-4 py-3 bg-stone-50 border-b border-gray-200 group"
              >
                <span
                  className="inline-block h-4 w-8 rounded-sm flex-shrink-0 shadow-sm"
                  style={getBeltStyle(kyu)}
                />
                <span className="font-semibold text-gray-700 group-hover:text-ashihara-red transition-colors text-sm">
                  {kyu.name[l]}
                </span>
              </Link>
              <ul>
                {katas.map((kata) => (
                  <li key={kata.id} className="border-b border-gray-100 last:border-0">
                    <Link
                      href={`/kata/${kata.id}`}
                      className="flex items-center justify-between gap-2 px-4 py-3 hover:bg-stone-50 transition-colors group"
                    >
                      <span className="min-w-0">
                        <span className="font-semibold text-gray-800 group-hover:text-ashihara-red transition-colors block leading-tight">
                          {kata.name[l]}
                        </span>
                        <span className="text-xs text-gray-400 italic">{kata.romaji}</span>
                        <span className="japanese-text text-xs text-gray-300 ml-2">{kata.japaneseCharacters}</span>
                      </span>
                      {kata.steps.length > 0 ? (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-gray-500 bg-stone-100 px-2 py-0.5 rounded-full">
                          {kata.steps.length}
                        </span>
                      ) : (
                        <span className="flex-shrink-0 text-xs text-gray-300">—</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Kyu level cards */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{t('selectKyu')}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kyuLevels.map((kyu) => {
            const katas = getKatasForKyu(kyu.level);
            return (
              <Link
                key={kyu.level}
                href={`/kyu/${kyu.level}`}
                className="group flex items-center gap-3 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-ashihara-gold hover:shadow-md transition-all duration-200 px-4 py-3 overflow-hidden"
              >
                <span
                  className="flex-shrink-0 h-8 w-3 rounded-sm shadow-sm"
                  style={getBeltStyle(kyu, 'vertical')}
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
