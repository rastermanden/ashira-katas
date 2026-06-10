import type { CSSProperties } from 'react';
import type { KyuLevel, DanLevel } from '@/data/types';

type BeltLevel = KyuLevel | DanLevel;
type BeltOrientation = 'horizontal' | 'vertical';

export function getBeltStyle(
  belt: BeltLevel,
  orientation: BeltOrientation = 'horizontal',
): CSSProperties {
  const isWhite = belt.beltColor === '#FFFFFF';
  const border = isWhite ? '1px solid #e5e7eb' : 'none';

  // Stripes run across the short axis of the swatch, so the gradient
  // direction has to follow the swatch orientation. A horizontal belt
  // (wider than tall) stripes `to right`; a vertical belt (taller than
  // wide) stripes `to bottom`. Using the wrong direction on a thin bar
  // crushes the stripes to sub-pixel width and they disappear.
  const direction = orientation === 'vertical' ? 'to bottom' : 'to right';

  if ('kohaku' in belt && belt.kohaku) {
    return {
      background: `repeating-linear-gradient(${direction}, #FFFFFF 0, #FFFFFF 20%, #DC2626 20%, #DC2626 40%)`,
      border: 'none',
    };
  }

  if (belt.stripeColor) {
    const b = belt.beltColor;
    const s = belt.stripeColor;
    // Two snipper sitting near the two ends of the belt (the colour tabs sit
    // on the belt's tips, not its middle), with the base colour filling the
    // centre and the very edges.
    return {
      background: `linear-gradient(${direction}, ${b} 14%, ${s} 14%, ${s} 22%, ${b} 22%, ${b} 78%, ${s} 78%, ${s} 86%, ${b} 86%)`,
      border,
    };
  }

  return { backgroundColor: belt.beltColor, border };
}
