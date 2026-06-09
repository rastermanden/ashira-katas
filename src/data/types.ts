export type Locale = 'en' | 'da' | 'ja';
export type LocalizedString = Record<Locale, string>;

export interface SchoolVariation {
  school: string;
  description: LocalizedString;
}

export interface KataStep {
  stepNumber: number;
  name: LocalizedString;
  attacker: LocalizedString;
  defender: LocalizedString;
  technicalNotes: LocalizedString;
  schoolVariations: SchoolVariation[];
  imageUrl?: string;
  videoTimestamp?: string;
}

export interface Kata {
  id: string;
  name: LocalizedString;
  japaneseCharacters: string;
  romaji: string;
  description: LocalizedString;
  youtubeLinks: { label: string; url: string }[];
  steps: KataStep[];
}

export interface KyuLevel {
  level: number;
  japaneseNumeral: string;
  beltColor: string;
  stripeColor?: string;
  beltTailwindColor: string;
  beltTextColor: string;
  name: LocalizedString;
}

export interface DanLevel {
  level: number;
  japaneseNumeral: string;
  beltColor: string;
  stripeColor?: string;
  kohaku?: boolean;
  beltTailwindColor: string;
  beltTextColor: string;
  name: LocalizedString;
}
