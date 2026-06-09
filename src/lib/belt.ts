import type { CSSProperties } from 'react';
import type { KyuLevel } from '@/data/types';

export function getBeltStyle(kyu: KyuLevel): CSSProperties {
  const isWhite = kyu.beltColor === '#FFFFFF';
  const border = isWhite ? '1px solid #e5e7eb' : 'none';

  if (kyu.stripeColor) {
    const b = kyu.beltColor;
    const s = kyu.stripeColor;
    return {
      background: `linear-gradient(to right, ${b} 28%, ${s} 28%, ${s} 38%, ${b} 38%, ${b} 62%, ${s} 62%, ${s} 72%, ${b} 72%)`,
      border,
    };
  }

  return { backgroundColor: kyu.beltColor, border };
}
