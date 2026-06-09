import type { LocalizedString } from './types';

/**
 * A single kata that a kyu grading requires, with an optional annotation
 * (e.g. "both sides", "from guard"). The optional note keeps the model
 * richer than a bare list of ids without forcing every entry to fill it in.
 */
export interface KataRequirement {
  kataId: string;
  note?: LocalizedString;
}

/**
 * The full set of katas a given kyu level requires for grading. A kyu can
 * require multiple katas — the requirements are cumulative, so each level
 * lists every kata that must be demonstrated to grade at that belt.
 */
export interface KyuRequirement {
  kyuLevel: number;
  katas: KataRequirement[];
}

/**
 * Single source of truth for which katas each kyu grading requires.
 * Cumulative: higher kyu numbers (earlier belts) require fewer katas, and
 * each step down the ranks adds the next kata to the pensum.
 */
export const kataRequirements: KyuRequirement[] = [
  {
    kyuLevel: 10,
    katas: [{ kataId: 'kihon-kata-ichi' }],
  },
  {
    kyuLevel: 9,
    katas: [{ kataId: 'kihon-kata-ichi' }, { kataId: 'kihon-kata-ni' }],
  },
  {
    kyuLevel: 8,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
    ],
  },
  {
    kyuLevel: 7,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
    ],
  },
  {
    kyuLevel: 6,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
      { kataId: 'kata-2' },
    ],
  },
  {
    kyuLevel: 5,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
      { kataId: 'kata-2' },
      { kataId: 'kata-3' },
    ],
  },
  {
    kyuLevel: 4,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
      { kataId: 'kata-2' },
      { kataId: 'kata-3' },
      { kataId: 'kata-4' },
    ],
  },
  {
    kyuLevel: 3,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
      { kataId: 'kata-2' },
      { kataId: 'kata-3' },
      { kataId: 'kata-4' },
      { kataId: 'kata-5' },
    ],
  },
  {
    kyuLevel: 2,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
      { kataId: 'kata-2' },
      { kataId: 'kata-3' },
      { kataId: 'kata-4' },
      { kataId: 'kata-5' },
      { kataId: 'kata-6' },
    ],
  },
  {
    kyuLevel: 1,
    katas: [
      { kataId: 'kihon-kata-ichi' },
      { kataId: 'kihon-kata-ni' },
      { kataId: 'kihon-kata-san' },
      { kataId: 'kata-1' },
      { kataId: 'kata-2' },
      { kataId: 'kata-3' },
      { kataId: 'kata-4' },
      { kataId: 'kata-5' },
      { kataId: 'kata-6' },
      { kataId: 'kata-7' },
    ],
  },
];

/** The requirement entry for a single kyu level, if it exists. */
export function getRequirementForKyu(level: number): KyuRequirement | undefined {
  return kataRequirements.find((r) => r.kyuLevel === level);
}

/** The kata ids a given kyu grading requires, in pensum order. */
export function getRequiredKataIds(level: number): string[] {
  return getRequirementForKyu(level)?.katas.map((k) => k.kataId) ?? [];
}

/**
 * All kyu levels whose grading requires the given kata, sorted from the
 * earliest belt it appears at (highest kyu number) down to 1st kyu. This is
 * what powers the "Påkrævet til" / "Required for" section on a kata page.
 */
export function getKyusRequiringKata(kataId: string): number[] {
  return kataRequirements
    .filter((r) => r.katas.some((k) => k.kataId === kataId))
    .map((r) => r.kyuLevel)
    .sort((a, b) => b - a);
}
