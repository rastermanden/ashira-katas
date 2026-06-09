import type { Kata } from '../types';

export const kihonKataNi: Kata = {
  id: 'kihon-kata-ni',
  japaneseCharacters: '基本形二',
  romaji: 'Kihon no Kata Sono Ni',
  name: {
    en: 'Basic Form 2',
    da: 'Grundform 2',
    ja: '基本形二',
  },
  requiredForKyu: [6, 5, 4, 3, 2, 1],
  description: {
    en: 'Kihon no Kata Sono Ni builds on the first basic form by introducing yoko-geri (side kick) and further expanding counter combinations. The kata develops the use of the foot switch and close-range combination follow-ups after blocking.',
    da: 'Kihon no Kata Sono Ni bygger videre på den første grundform ved at introducere yoko-geri (sidekick) og yderligere udvide kontra-kombinationer. Kataen udvikler brugen af fod-skift og nærkamps kombinationsopfølgninger efter blokering.',
    ja: '基本形二は最初の基本形の上に構築され、横蹴り（側面蹴り）を導入し、カウンターの組み合わせをさらに拡張します。この型はフットスイッチの使い方とブロック後の接近戦での連続技を発展させます。',
  },
  youtubeLinks: [{ label: 'Kihon no Kata Sono Ni — Sensei Mazz', url: 'https://youtu.be/WDJ1XaF7T28' }],
  steps: [
    {
      stepNumber: 1,
      name: {
        en: 'Fighting Stance (Kumite no Kamae)',
        da: 'Kampstilling (Kumite no Kamae)',
        ja: '組手の構え',
      },
      attacker: {
        en: 'Both partners take fighting stance.',
        da: 'Begge partnere indtager kampstilling.',
        ja: '両者は組手の構えをとります。',
      },
      defender: {
        en: 'Assume fighting guard (kumite no kamae).',
        da: 'Indtag kampberedskab (kumite no kamae).',
        ja: '組手の構えをとります。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: 'Right Middle Punch (Migi Chudan Tsuki)',
        da: 'Højre midterstød (Migi Chudan Tsuki)',
        ja: '右中段突き',
      },
      attacker: {
        en: 'Attacker delivers a right middle punch (migi chudan tsuki) to the defender\'s midsection.',
        da: 'Angriberen udfører et højre midterstød (migi chudan tsuki) mod forsvararens midte.',
        ja: '攻撃者は防御者の中段に右中段突きを打ちます。',
      },
      defender: {
        en: 'Migi hiki ashi, hidari soto-uke (pos 3), migi chudan mawashi-geri, keri ashi ushiro.',
        da: 'Migi hiki ashi, hidari soto-uke (pos 3), migi chudan mawashi-geri, keri ashi ushiro.',
        ja: '右引き足、左外受け（位置3）、右中段回し蹴り、蹴り足後ろ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Right Front Kick — Turn (Migi Mae-geri)',
        da: 'Højre frontspark — drej (Migi Mae-geri)',
        ja: '右前蹴り（転換）',
      },
      attacker: {
        en: 'Attacker delivers a right front kick (migi mae-geri) to the defender.',
        da: 'Angriberen udfører et højre frontspark (migi mae-geri) mod forsvareren.',
        ja: '攻撃者は防御者に右前蹴りを蹴ります。',
      },
      defender: {
        en: 'Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi chudan/jodan mawashi-geri, keri ashi mae, turn (180°).',
        da: 'Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi chudan/jodan mawashi-geri, keri ashi mae, drej (180°).',
        ja: '右引き足、左外受け（位置3）、右上段突き、右中段/上段回し蹴り、蹴り足前、転換（180度）。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: 'Left Middle Punch (Hidari Chudan Tsuki)',
        da: 'Venstre midterstød (Hidari Chudan Tsuki)',
        ja: '左中段突き',
      },
      attacker: {
        en: 'Attacker delivers a left middle punch (hidari chudan tsuki) to the defender\'s midsection.',
        da: 'Angriberen udfører et venstre midterstød (hidari chudan tsuki) mod forsvararens midte.',
        ja: '攻撃者は防御者の中段に左中段突きを打ちます。',
      },
      defender: {
        en: 'Migi side step (45°), hidari gedan-barai (pos 4), foot switch, hidari chudan mawashi-geri.',
        da: 'Migi sideskridt (45°), hidari gedan-barai (pos 4), fod-skift, hidari chudan mawashi-geri.',
        ja: '右サイドステップ（45度）、左下段払い（位置4）、フットスイッチ、左中段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Left Front Kick (Hidari Mae-geri)',
        da: 'Venstre frontspark (Hidari Mae-geri)',
        ja: '左前蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left front kick (hidari mae-geri) to the defender.',
        da: 'Angriberen udfører et venstre frontspark (hidari mae-geri) mod forsvareren.',
        ja: '攻撃者は防御者に左前蹴りを蹴ります。',
      },
      defender: {
        en: 'Migi side step (45°), hidari gedan-barai (pos 4), migi jodan tsuki, foot switch, hidari chudan mawashi-geri.',
        da: 'Migi sideskridt (45°), hidari gedan-barai (pos 4), migi jodan tsuki, fod-skift, hidari chudan mawashi-geri.',
        ja: '右サイドステップ（45度）、左下段払い（位置4）、右上段突き、フットスイッチ、左中段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: 'Right Upper Punch (Migi Jodan Tsuki)',
        da: 'Højre øvrestød (Migi Jodan Tsuki)',
        ja: '右上段突き',
      },
      attacker: {
        en: 'Attacker delivers a right upper punch (migi jodan tsuki) to the defender\'s head.',
        da: 'Angriberen udfører et højre øvrestød (migi jodan tsuki) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に右上段突きを打ちます。',
      },
      defender: {
        en: 'Hidari yoko-geri (pos 3), migi chudan tsuki, migi chudan mawashi-geri.',
        da: 'Hidari yoko-geri (pos 3), migi chudan tsuki, migi chudan mawashi-geri.',
        ja: '左横蹴り（位置3）、右中段突き、右中段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: 'Left Upper Punch (Hidari Jodan Tsuki)',
        da: 'Venstre øvrestød (Hidari Jodan Tsuki)',
        ja: '左上段突き',
      },
      attacker: {
        en: 'Attacker delivers a left upper punch (hidari jodan tsuki) to the defender\'s head.',
        da: 'Angriberen udfører et venstre øvrestød (hidari jodan tsuki) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に左上段突きを打ちます。',
      },
      defender: {
        en: 'Migi side step (45°), hidari uchi-uke shuto (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri.',
        da: 'Migi sideskridt (45°), hidari uchi-uke shuto (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri.',
        ja: '右サイドステップ（45度）、左内受け手刀（位置4）、右上段突き、右下段回し蹴り、左上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: 'Left Middle Roundhouse Kick — Turn (Hidari Chudan Mawashi-geri)',
        da: 'Venstre midtre rundkick — drej (Hidari Chudan Mawashi-geri)',
        ja: '左中段回し蹴り（転換）',
      },
      attacker: {
        en: 'Attacker delivers a left middle roundhouse kick (hidari chudan mawashi-geri) to the defender\'s midsection.',
        da: 'Angriberen udfører et venstre midtre rundkick (hidari chudan mawashi-geri) mod forsvararens midte.',
        ja: '攻撃者は防御者の中段に左中段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari sune-uke (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, turn (180°).',
        da: 'Hidari sune-uke (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, drej (180°).',
        ja: '左脛受け（位置4）、右上段突き、右下段回し蹴り、左上段回し蹴り、蹴り足後ろ、転換（180度）。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: 'Right Middle Roundhouse Kick (Migi Chudan Mawashi-geri)',
        da: 'Højre midtre rundkick (Migi Chudan Mawashi-geri)',
        ja: '右中段回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right middle roundhouse kick (migi chudan mawashi-geri) to the defender\'s midsection.',
        da: 'Angriberen udfører et højre midtre rundkick (migi chudan mawashi-geri) mod forsvararens midte.',
        ja: '攻撃者は防御者の中段に右中段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari sune-uke (pos 3), migi jodan tsuki, migi uchimomo-geri, keri ashi ushiro.',
        da: 'Hidari sune-uke (pos 3), migi jodan tsuki, migi uchimomo-geri, keri ashi ushiro.',
        ja: '左脛受け（位置3）、右上段突き、右内腿蹴り、蹴り足後ろ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: 'Finish & Return (Kumite no Kamae)',
        da: 'Afslutning og tilbage (Kumite no Kamae)',
        ja: '終わり・組手の構えへ',
      },
      attacker: {
        en: 'Attacker initiates a right knee strike and pulling retreat to signal the finish.',
        da: 'Angriberen udfører et højre knæspark og trækkende tilbagetrækning for at signalere afslutningen.',
        ja: '攻撃者は終わりを示すために右膝蹴りと引きながらの後退を行います。',
      },
      defender: {
        en: 'Migi hiza-geri, hiki ashi (90°), migi mawashi-geri, kumite no kamae.',
        da: 'Migi hiza-geri, hiki ashi (90°), migi mawashi-geri, kumite no kamae.',
        ja: '右膝蹴り、引き足（90度）、右回し蹴り、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
