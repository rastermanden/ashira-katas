import type { CSSProperties } from 'react';
import type { KyuLevel, DanLevel } from '@/data/types';

type BeltLevel = KyuLevel | DanLevel;

export function getBeltStyle(belt: BeltLevel): CSSProperties {
  const isWhite = belt.beltColor === '#FFFFFF';
  const border = isWhite ? '1px solid #e5e7eb' : 'none';

  if ('kohaku' in belt && belt.kohaku) {
    return {
      background: 'repeating-linear-gradient(to right, #FFFFFF 0, #FFFFFF 20%, #DC2626 20%, #DC2626 40%)',
      border: 'none',
    };
  }

  if (belt.stripeColor) {
    const b = belt.beltColor;
    const s = belt.stripeColor;
    return {
      background: `linear-gradient(to right, ${b} 28%, ${s} 28%, ${s} 38%, ${b} 38%, ${b} 62%, ${s} 62%, ${s} 72%, ${b} 72%)`,
      border,
    };
  }

  return { backgroundColor: belt.beltColor, border };
}
