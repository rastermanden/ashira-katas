'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'en' | 'da' | 'ja' });
  };

  const labels: Record<string, string> = {
    en: 'EN',
    da: 'DA',
    ja: '日本語',
  };

  return (
    <div className="flex items-center gap-1 border border-gray-600 rounded-md overflow-hidden text-xs font-medium">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          title={t(l as 'en' | 'da' | 'ja')}
          className={`px-2 py-1 transition-colors ${
            locale === l
              ? 'bg-ashihara-gold text-ashihara-dark'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
