import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getKataById, allKatas } from '@/data/katas';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import type { Locale } from '@/data/types';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  const params = [];
  for (const locale of routing.locales) {
    for (const kata of allKatas) {
      for (const step of kata.steps) {
        params.push({
          locale,
          kataId: kata.id,
          stepNumber: String(step.stepNumber),
        });
      }
    }
  }
  return params;
}

export default async function StepPage({
  params,
}: {
  params: Promise<{ locale: string; kataId: string; stepNumber: string }>;
}) {
  const { locale, kataId, stepNumber } = await params;
  setRequestLocale(locale);

  const kata = getKataById(kataId);
  if (!kata) notFound();

  const stepNum = parseInt(stepNumber, 10);
  const step = kata.steps.find((s) => s.stepNumber === stepNum);
  if (!step) notFound();

  const t = await getTranslations('step');
  const l = locale as Locale;

  const prevStep = kata.steps.find((s) => s.stepNumber === stepNum - 1);
  const nextStep = kata.steps.find((s) => s.stepNumber === stepNum + 1);

  return (
    <div>
      {/* Back link */}
      <Link
        href={`/kata/${kata.id}`}
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ashihara-red transition-colors mb-6"
      >
        {t('backToKata')}
      </Link>

      {/* Kata + step header */}
      <div className="mb-6">
        <p className="text-xs text-gray-400 mb-1">
          <span className="japanese-text">{kata.japaneseCharacters}</span>
          <span className="mx-1">—</span>
          <span className="italic">{kata.romaji}</span>
        </p>
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{step.name[l]}</h1>
          <span className="text-sm text-gray-400">{t('stepOf', { current: stepNum, total: kata.steps.length })}</span>
        </div>
      </div>

      {/* Step navigation — top */}
      <StepNav
        kataId={kata.id}
        prevStep={prevStep?.stepNumber}
        nextStep={nextStep?.stepNumber}
        prevLabel={prevStep ? prevStep.name[l] : undefined}
        nextLabel={nextStep ? nextStep.name[l] : undefined}
        tPrev={t('previous')}
        tNext={t('next')}
      />

      {/* Content grid */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Attacker */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
            {t('attacker')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">{step.attacker[l]}</p>
        </section>

        {/* Defender */}
        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
            {t('defender')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">{step.defender[l]}</p>
        </section>
      </div>

      {/* Illustration placeholder */}
      <section className="mt-6 bg-white border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
        <svg className="w-12 h-12 mx-auto text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {step.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={step.imageUrl} alt={step.name[l]} className="max-w-full mx-auto rounded" />
        ) : (
          <p className="text-sm text-gray-400 italic">{t('noImage')}</p>
        )}
      </section>

      {/* Technical notes */}
      <section className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-amber-800 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          {t('technicalNotes')}
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm">{step.technicalNotes[l]}</p>
      </section>

      {/* School variations */}
      {step.schoolVariations.length > 0 && (
        <section className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-sm font-bold text-purple-800 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {t('schoolVariations')}
          </h2>
          <div className="space-y-4">
            {step.schoolVariations.map((variation, i) => (
              <div key={i} className="border-l-4 border-purple-300 pl-4">
                <p className="text-xs font-bold text-purple-700 mb-1">{variation.school}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{variation.description[l]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Video section */}
      {kata.youtubeLinks.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold text-gray-600 mb-3">{t('video')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {kata.youtubeLinks.map((link) => (
              <YouTubeEmbed
                key={link.url}
                url={link.url}
                label={link.label}
                timestamp={step.videoTimestamp}
              />
            ))}
          </div>
        </section>
      )}

      {/* Step navigation — bottom */}
      <div className="mt-10 pt-6 border-t border-gray-200">
        <StepNav
          kataId={kata.id}
          prevStep={prevStep?.stepNumber}
          nextStep={nextStep?.stepNumber}
          prevLabel={prevStep ? prevStep.name[l] : undefined}
          nextLabel={nextStep ? nextStep.name[l] : undefined}
          tPrev={t('previous')}
          tNext={t('next')}
        />
      </div>
    </div>
  );
}

function StepNav({
  kataId,
  prevStep,
  nextStep,
  prevLabel,
  nextLabel,
  tPrev,
  tNext,
}: {
  kataId: string;
  prevStep?: number;
  nextStep?: number;
  prevLabel?: string;
  nextLabel?: string;
  tPrev: string;
  tNext: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        {prevStep !== undefined ? (
          <Link
            href={`/kata/${kataId}/step/${prevStep}`}
            className="group inline-flex flex-col items-start bg-white border border-gray-200 hover:border-ashihara-gold rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all duration-200 max-w-xs"
          >
            <span className="text-xs text-gray-400 group-hover:text-ashihara-gold transition-colors">
              {tPrev}
            </span>
            <span className="text-sm font-semibold text-gray-800 mt-0.5 line-clamp-1">
              {prevLabel}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="flex-1 flex justify-end">
        {nextStep !== undefined ? (
          <Link
            href={`/kata/${kataId}/step/${nextStep}`}
            className="group inline-flex flex-col items-end bg-ashihara-gold hover:bg-yellow-500 border border-ashihara-gold rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all duration-200 max-w-xs"
          >
            <span className="text-xs text-ashihara-dark/70">
              {tNext}
            </span>
            <span className="text-sm font-bold text-ashihara-dark mt-0.5 line-clamp-1">
              {nextLabel}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
