import type { DanLevel } from './types';

export const danLevels: DanLevel[] = [
  {
    level: 1,
    japaneseNumeral: '初段',
    beltColor: '#111827',
    beltTailwindColor: 'bg-gray-900',
    beltTextColor: 'text-white',
    name: { en: '1st Dan', da: '1. dan', ja: '初段' },
  },
  {
    level: 2,
    japaneseNumeral: '二段',
    beltColor: '#111827',
    beltTailwindColor: 'bg-gray-900',
    beltTextColor: 'text-white',
    name: { en: '2nd Dan', da: '2. dan', ja: '二段' },
  },
  {
    level: 3,
    japaneseNumeral: '三段',
    beltColor: '#111827',
    beltTailwindColor: 'bg-gray-900',
    beltTextColor: 'text-white',
    name: { en: '3rd Dan', da: '3. dan', ja: '三段' },
  },
  {
    level: 4,
    japaneseNumeral: '四段',
    beltColor: '#111827',
    beltTailwindColor: 'bg-gray-900',
    beltTextColor: 'text-white',
    name: { en: '4th Dan', da: '4. dan', ja: '四段' },
  },
  {
    level: 5,
    japaneseNumeral: '五段',
    beltColor: '#111827',
    beltTailwindColor: 'bg-gray-900',
    beltTextColor: 'text-white',
    name: { en: '5th Dan', da: '5. dan', ja: '五段' },
  },
  {
    level: 6,
    japaneseNumeral: '六段',
    beltColor: '#DC2626',
    kohaku: true,
    beltTailwindColor: 'bg-red-600',
    beltTextColor: 'text-white',
    name: { en: '6th Dan', da: '6. dan', ja: '六段' },
  },
  {
    level: 7,
    japaneseNumeral: '七段',
    beltColor: '#DC2626',
    kohaku: true,
    beltTailwindColor: 'bg-red-600',
    beltTextColor: 'text-white',
    name: { en: '7th Dan', da: '7. dan', ja: '七段' },
  },
  {
    level: 8,
    japaneseNumeral: '八段',
    beltColor: '#DC2626',
    kohaku: true,
    beltTailwindColor: 'bg-red-600',
    beltTextColor: 'text-white',
    name: { en: '8th Dan', da: '8. dan', ja: '八段' },
  },
  {
    level: 9,
    japaneseNumeral: '九段',
    beltColor: '#DC2626',
    beltTailwindColor: 'bg-red-600',
    beltTextColor: 'text-white',
    name: { en: '9th Dan', da: '9. dan', ja: '九段' },
  },
  {
    level: 10,
    japaneseNumeral: '十段',
    beltColor: '#DC2626',
    beltTailwindColor: 'bg-red-600',
    beltTextColor: 'text-white',
    name: { en: '10th Dan', da: '10. dan', ja: '十段' },
  },
];

export function getDanByLevel(level: number): DanLevel | undefined {
  return danLevels.find((d) => d.level === level);
}
