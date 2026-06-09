import type { LocalizedString } from './types';
import requirementsData from './requirements.json';

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
 * The data lives in `requirements.json` so it can be edited without touching
 * code; this re-exports it as a typed value. Cumulative: higher kyu numbers
 * (earlier belts) require fewer katas, and each step down the ranks adds the
 * next kata to the pensum.
 */
export const kataRequirements: KyuRequirement[] = requirementsData.kyuRequirements;

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
