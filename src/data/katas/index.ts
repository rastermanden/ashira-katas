import type { Kata } from '../types';
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
export const allKatas: Kata[] = [
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

export function getKataById(id: string): Kata | undefined {
  return allKatas.find((k) => k.id === id);
}

export function getKatasForKyu(kyuLevel: number): Kata[] {
  return allKatas.filter((k) => k.requiredForKyu.includes(kyuLevel));
}
