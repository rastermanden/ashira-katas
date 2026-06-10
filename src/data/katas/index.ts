import type { Kata } from '../types';
import { getRequiredKataIds } from '../requirements';
import { getVideosForKata } from '../videos';
import { shoshinshaKataIchi } from './shoshinsha-kata-ichi';
import { shoshinshaKataNi } from './shoshinsha-kata-ni';
import { shoshinshaKataSan } from './shoshinsha-kata-san';
import { kihonKataIchi } from './kihon-kata-ichi';
import { kihonKataNi } from './kihon-kata-ni';
import { kihonKataSan } from './kihon-kata-san';
import { nageKataIchi } from './nage-kata-ichi';
import { nageKataNi } from './nage-kata-ni';
import { nageKataSan } from './nage-kata-san';
import { nageKataYon } from './nage-kata-yon';
import { kumiteKataIchi } from './kumite-kata-ichi';
import { kumiteKataNi } from './kumite-kata-ni';
import { kumiteKataSan } from './kumite-kata-san';
import { kumiteKataYon } from './kumite-kata-yon';
import { kumiteKataGo } from './kumite-kata-go';
import { jissenKataIchi } from './jissen-kata-ichi';
import { jissenKataNi } from './jissen-kata-ni';

// All 17 katas of the Ashihara Karate København pensum, in curriculum order.
const pensumKatas: Kata[] = [
  kihonKataIchi,
  shoshinshaKataIchi,
  shoshinshaKataNi,
  nageKataIchi,
  kumiteKataIchi,
  shoshinshaKataSan,
  kihonKataNi,
  nageKataNi,
  kumiteKataNi,
  kihonKataSan,
  nageKataSan,
  kumiteKataSan,
  jissenKataIchi,
  nageKataYon,
  kumiteKataYon,
  kumiteKataGo,
  jissenKataNi,
];

// Video references live in videos.json (the editable single source of truth).
// Populate each kata's youtubeLinks from there, falling back to any links
// defined inline on the kata itself.
export const allKatas: Kata[] = pensumKatas.map((kata) => {
  const videos = getVideosForKata(kata.id);
  return videos.length > 0 ? { ...kata, youtubeLinks: videos } : kata;
});

export function getKataById(id: string): Kata | undefined {
  return allKatas.find((k) => k.id === id);
}

export function getKatasForKyu(kyuLevel: number): Kata[] {
  return getRequiredKataIds(kyuLevel)
    .map((id) => getKataById(id))
    .filter((k): k is Kata => k !== undefined);
}
