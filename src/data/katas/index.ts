import type { Kata } from '../types';
import { getRequiredKataIds } from '../requirements';
import { kihonKataIchi } from './kihon-kata-ichi';
import { kihonKataNi } from './kihon-kata-ni';
import { kihonKataSan } from './kihon-kata-san';

export const allKatas: Kata[] = [
  kihonKataIchi,
  kihonKataNi,
  kihonKataSan,
  // Placeholder stubs for higher katas — content to be filled in
  {
    id: 'kata-1',
    japaneseCharacters: '形一',
    romaji: 'Kata Ichi',
    name: { en: 'Kata 1', da: 'Kata 1', ja: '形一' },
    description: {
      en: 'Content coming soon. This kata is required from 7th kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 7. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は7級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
  {
    id: 'kata-2',
    japaneseCharacters: '形二',
    romaji: 'Kata Ni',
    name: { en: 'Kata 2', da: 'Kata 2', ja: '形二' },
    description: {
      en: 'Content coming soon. This kata is required from 6th kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 6. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は6級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
  {
    id: 'kata-3',
    japaneseCharacters: '形三',
    romaji: 'Kata San',
    name: { en: 'Kata 3', da: 'Kata 3', ja: '形三' },
    description: {
      en: 'Content coming soon. This kata is required from 5th kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 5. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は5級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
  {
    id: 'kata-4',
    japaneseCharacters: '形四',
    romaji: 'Kata Shi',
    name: { en: 'Kata 4', da: 'Kata 4', ja: '形四' },
    description: {
      en: 'Content coming soon. This kata is required from 4th kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 4. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は4級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
  {
    id: 'kata-5',
    japaneseCharacters: '形五',
    romaji: 'Kata Go',
    name: { en: 'Kata 5', da: 'Kata 5', ja: '形五' },
    description: {
      en: 'Content coming soon. This kata is required from 3rd kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 3. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は3級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
  {
    id: 'kata-6',
    japaneseCharacters: '形六',
    romaji: 'Kata Roku',
    name: { en: 'Kata 6', da: 'Kata 6', ja: '形六' },
    description: {
      en: 'Content coming soon. This kata is required from 2nd kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 2. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は2級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
  {
    id: 'kata-7',
    japaneseCharacters: '形七',
    romaji: 'Kata Shichi',
    name: { en: 'Kata 7', da: 'Kata 7', ja: '形七' },
    description: {
      en: 'Content coming soon. This kata is required from 1st kyu onwards.',
      da: 'Indhold kommer snart. Denne kata kræves fra 1. kyu og frem.',
      ja: 'コンテンツは近日公開予定です。この型は1級以上で必要です。',
    },
    youtubeLinks: [],
    steps: [],
  },
];

export function getKataById(id: string): Kata | undefined {
  return allKatas.find((k) => k.id === id);
}

export function getKatasForKyu(kyuLevel: number): Kata[] {
  return getRequiredKataIds(kyuLevel)
    .map((id) => getKataById(id))
    .filter((k): k is Kata => k !== undefined);
}
