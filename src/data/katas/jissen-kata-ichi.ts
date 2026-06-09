import type { Kata } from '../types';

export const jissenKataIchi: Kata = {
  id: 'jissen-kata-ichi',
  japaneseCharacters: '実戦の形一',
  romaji: 'Jissen no Kata Sono Ichi',
  name: {
    en: 'Real Fight Form 1',
    da: 'Kampform 1',
    ja: '実戦の形一',
  },
  requiredForKyu: [3, 2, 1],
  description: {
    en: 'Jissen no Kata Sono Ichi emphasises close-range fighting with inside (irimi) blocks and immediate elbow or punch counters. The kata develops rapid combinations after entering inside the opponent\'s guard, incorporating shin/elbow blocks (hiji/sune-uke) against kicks and finishing with maki komi nage or hikikuzushi.',
    da: 'Jissen no Kata Sono Ichi lægger vægt på nærkamp med indvendige (irimi) blokke og øjeblikkelige albue- eller stødkontraer. Kataen udvikler hurtige kombinationer efter at være trængt ind bag modstanderens forsvar, med shinelbue-blokke (hiji/sune-uke) mod spark og afslutning med maki komi nage eller hikikuzushi.',
    ja: '実戦の形一は内側（入り身）ブロックと即時の肘打ちや突きカウンターによる接近戦を強調します。この型は相手のガードの内側に入った後の素早い連続技を発展させ、蹴りに対する肘/脛受け（hiji/sune-uke）を組み込み、巻き込み投げや引き崩しで締めくくります。',
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
        en: 'Hidari soto-uke (inside), migi jodan tsuki, migi hiji uchi.',
        da: 'Hidari soto-uke (indvendig), migi jodan tsuki, migi hiji uchi.',
        ja: '左外受け（内側）、右上段突き、右肘打ち。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
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
        en: 'Hidari soto-uke (inside), migi hiza-geri, migi jodan mawashi-geri.',
        da: 'Hidari soto-uke (indvendig), migi hiza-geri, migi jodan mawashi-geri.',
        ja: '左外受け（内側）、右膝蹴り、右上段回し蹴り。',
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
        en: 'Hidari gedan-barai (inside), migi jodan tsuki, migi hiji uchi.',
        da: 'Hidari gedan-barai (indvendig), migi jodan tsuki, migi hiji uchi.',
        ja: '左下段払い（内側）、右上段突き、右肘打ち。',
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
        en: 'Hidari uchi-uke shuto (inside), foot switch, hidari hiza-geri, hidari jodan mawashi-geri.',
        da: 'Hidari uchi-uke shuto (indvendig), fod-skift, hidari hiza-geri, hidari jodan mawashi-geri.',
        ja: '左内受け手刀（内側）、フットスイッチ、左膝蹴り、左上段回し蹴り。',
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
        en: 'Hidari soto-uke (side step), migi uppercut, hidari hook, migi hook, migi jodan mawashi-geri.',
        da: 'Hidari soto-uke (sideskridt), migi uppercut, hidari hook, migi hook, migi jodan mawashi-geri.',
        ja: '左外受け（サイドステップ）、右アッパーカット、左フック、右フック、右上段回し蹴り。',
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
        en: 'Hidari gedan-barai (side step), migi hook, hidari uppercut, migi jodan tsuki, migi jodan mawashi-geri.',
        da: 'Hidari gedan-barai (sideskridt), migi hook, hidari uppercut, migi jodan tsuki, migi jodan mawashi-geri.',
        ja: '左下段払い（サイドステップ）、右フック、左アッパーカット、右上段突き、右上段回し蹴り。',
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
        en: 'Hidari hiji/sune-uke, migi gedan mawashi-geri, hidari hiza-geri, maki komi nage.',
        da: 'Hidari hiji/sune-uke, migi gedan mawashi-geri, hidari hiza-geri, maki komi nage.',
        ja: '左肘/脛受け、右下段回し蹴り、左膝蹴り、巻き込み投げ。',
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
        en: 'Hidari soto hiji/sune-uke, mawashi-uke, migi hiza-geri, (pos 1), hikikuzushi.',
        da: 'Hidari soto hiji/sune-uke, mawashi-uke, migi hiza-geri, (pos 1), hikikuzushi.',
        ja: '左外肘/脛受け、回し受け、右膝蹴り、（位置1）、引き崩し。',
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
        en: 'Attacker initiates a right punch and elbow drop to signal the finish.',
        da: 'Angriberen udfører et højre stød og albue-nedslag for at signalere afslutningen.',
        ja: '攻撃者は終わりを示すために右突きと右肘落とし打ちを行います。',
      },
      defender: {
        en: 'Migi tsuki, migi hiji oroshi uchi, kumite no kamae.',
        da: 'Migi tsuki, migi hiji oroshi uchi, kumite no kamae.',
        ja: '右突き、右肘落とし打ち、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
