import type { Kata } from '../types';

export const kihonKataIchi: Kata = {
  id: 'kihon-kata-ichi',
  japaneseCharacters: '基本形一',
  romaji: 'Kihon no Kata Sono Ichi',
  name: {
    en: 'Basic Form 1',
    da: 'Grundform 1',
    ja: '基本形一',
  },
  requiredForKyu: [9, 8, 7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'Kihon no Kata Sono Ichi emphasises stepping out to the side (hiki ashi and side step). The concepts of Irimi (entering) and Kyushu (absorbing) are introduced. Techniques build on the Shoshinsha kata, now incorporating more dynamic counters.',
    da: 'Kihon no Kata Sono Ichi lægger vægt på at træde til siden (hiki ashi og sideskridt). Begreberne Irimi (indgang) og Kyushu (absorption) introduceres. Teknikker bygger videre på Shoshinsha-kataen og inkorporerer nu mere dynamiske kontraer.',
    ja: '基本形一は横への足踏み（引き足とサイドステップ）を強調します。入り身（Irimi）と吸収（Kyushu）の概念が導入されます。技術は初心者の形の上に構築され、より動的なカウンターを組み込みます。',
  },
  youtubeLinks: [{ label: 'Kata playlist — Sensei Mazz', url: 'https://www.youtube.com/playlist?list=PL70F81BEA6E5A5663' }],
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
        en: 'Migi hiki ashi, hidari soto-uke (pos 3), migi chudan tsuki.',
        da: 'Migi hiki ashi, hidari soto-uke (pos 3), migi chudan tsuki.',
        ja: '右引き足、左外受け（位置3）、右中段突き。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Right Upper Punch — Turn (Migi Jodan Tsuki)',
        da: 'Højre øvrestød — drej (Migi Jodan Tsuki)',
        ja: '右上段突き（転換）',
      },
      attacker: {
        en: 'Attacker delivers a right upper punch (migi jodan tsuki) to the defender\'s head.',
        da: 'Angriberen udfører et højre øvrestød (migi jodan tsuki) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に右上段突きを打ちます。',
      },
      defender: {
        en: 'Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi jodan mawashi-geri, keri ashi mae, turn (180°).',
        da: 'Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi jodan mawashi-geri, keri ashi mae, drej (180°).',
        ja: '右引き足、左外受け（位置3）、右上段突き、右上段回し蹴り、蹴り足前、転換（180度）。',
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
        en: 'Migi side step (45°), hidari gedan-barai (pos 4), migi chudan tsuki.',
        da: 'Migi sideskridt (45°), hidari gedan-barai (pos 4), migi chudan tsuki.',
        ja: '右サイドステップ（45度）、左下段払い（位置4）、右中段突き。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
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
        en: 'Migi side step (45°), hidari uchi-uke shuto (pos 4), migi jodan tsuki, foot switch, hidari jodan mawashi-geri.',
        da: 'Migi sideskridt (45°), hidari uchi-uke shuto (pos 4), migi jodan tsuki, fod-skift, hidari jodan mawashi-geri.',
        ja: '右サイドステップ（45度）、左内受け手刀（位置4）、右上段突き、フットスイッチ、左上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: 'Right Front Kick (Migi Mae-geri)',
        da: 'Højre frontspark (Migi Mae-geri)',
        ja: '右前蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right front kick (migi mae-geri) to the defender.',
        da: 'Angriberen udfører et højre frontspark (migi mae-geri) mod forsvareren.',
        ja: '攻撃者は防御者に右前蹴りを蹴ります。',
      },
      defender: {
        en: 'Migi hiki ashi, hidari soto-uke (pos 3), migi jodan mawashi-geri.',
        da: 'Migi hiki ashi, hidari soto-uke (pos 3), migi jodan mawashi-geri.',
        ja: '右引き足、左外受け（位置3）、右上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
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
        en: 'Migi side step (45°), hidari gedan-barai, foot switch (pos 2), hidari jodan mawashi-geri.',
        da: 'Migi sideskridt (45°), hidari gedan-barai, fod-skift (pos 2), hidari jodan mawashi-geri.',
        ja: '右サイドステップ（45度）、左下段払い、フットスイッチ（位置2）、左上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: 'Left Middle Roundhouse Kick (Hidari Chudan Mawashi-geri)',
        da: 'Venstre midtre rundkick (Hidari Chudan Mawashi-geri)',
        ja: '左中段回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left middle roundhouse kick (hidari chudan mawashi-geri) to the defender\'s midsection.',
        da: 'Angriberen udfører et venstre midtre rundkick (hidari chudan mawashi-geri) mod forsvararens midte.',
        ja: '攻撃者は防御者の中段に左中段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari sune-uke, migi okuri ashi (mawashi uke) (pos 2), hidari hiza-geri, maki komi-nage.',
        da: 'Hidari sune-uke, migi okuri ashi (mawashi uke) (pos 2), hidari hiza-geri, maki komi-nage.',
        ja: '左脛受け、右送り足（回し受け）（位置2）、左膝蹴り、巻き込み投げ。',
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
        en: 'Hidari sune-uke, (mawashi-uke) (pos 1), migi hiza-geri, hiki ashi (180°), hikikuzushi (pull down).',
        da: 'Hidari sune-uke, (mawashi-uke) (pos 1), migi hiza-geri, hiki ashi (180°), hikikuzushi (træk ned).',
        ja: '左脛受け、（回し受け）（位置1）、右膝蹴り、引き足（180度）、引き崩し（引き倒し）。',
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
        en: 'Attacker initiates a right punch to signal the finish.',
        da: 'Angriberen udfører et højre stød for at signalere afslutningen.',
        ja: '攻撃者は終わりを示すために右突きを打ちます。',
      },
      defender: {
        en: 'Migi tsuki, migi mawashi-geri, kumite no kamae.',
        da: 'Migi tsuki, migi mawashi-geri, kumite no kamae.',
        ja: '右突き、右回し蹴り、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
