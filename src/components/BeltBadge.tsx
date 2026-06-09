import type { KyuLevel } from '@/data/types';

interface BeltBadgeProps {
  kyu: KyuLevel;
  size?: 'sm' | 'md' | 'lg';
}

export default function BeltBadge({ kyu, size = 'md' }: BeltBadgeProps) {
  const sizeClasses = {
    sm: 'h-3 w-16 text-xs',
    md: 'h-4 w-24 text-xs',
    lg: 'h-6 w-32 text-sm',
  };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${sizeClasses[size]} rounded-sm ${kyu.beltTailwindColor} shadow-sm`}
        title={`Belt colour for ${kyu.name.en}`}
      />
      <span className={`font-semibold ${size === 'lg' ? 'text-base' : 'text-sm'} text-gray-700`}>
        {kyu.name.en}
      </span>
    </div>
  );
}
