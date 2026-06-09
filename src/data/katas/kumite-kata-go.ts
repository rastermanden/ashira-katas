import type { Kata } from '../types';

export const kumiteKataGo: Kata = {
  id: 'kumite-kata-go',
  japaneseCharacters: '組手の形五',
  romaji: 'Kumite no Kata Sono Go',
  name: {
    en: 'Sparring Form 5',
    da: 'Kampeform 5',
    ja: '組手の形五',
  },
  requiredForKyu: [],
  description: {
    en: 'Kumite no Kata Sono Go is the most advanced sparring form, featuring complex multi-kick combinations, hook kicks (kake-geri), and the integration of instep blocks with simultaneous counter kicks. The kata includes ura-nage against front kick entries with okuri ashi advancement.',
    da: 'Kumite no Kata Sono Go er den mest avancerede kampform med komplekse fler-spark-kombinationer, kroglekick (kake-geri) og integration af vristen-blokke med samtidige kontra-spark. Kataen inkluderer ura-nage mod frontspark-indgange med okuri ashi fremrykning.',
    ja: '組手の形五は最も高度な組手型で、複雑な複数蹴り連続技、フック蹴り（かけ蹴り）、甲受けと同時カウンター蹴りの統合が特徴です。前蹴り入り身に対する裏投げと送り足を伴う前進が含まれます。',
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
        en: 'Step back, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Træd tilbage, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '後退して、右中段回し蹴り、左上段後ろ回し蹴り、左上段回し蹴り、右上段後ろ回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
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
        en: 'Step back, hidari soto-uke, migi okuri ashi, hidari hiza-geri, ura-nage.',
        da: 'Træd tilbage, hidari soto-uke, migi okuri ashi, hidari hiza-geri, ura-nage.',
        ja: '後退して、左外受け、右送り足、左膝蹴り、裏投げ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
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
        en: 'Step back, migi okuri ashi, hidari chudan mawashi-geri, migi jodan ushiro mawashi-geri, migi jodan mawashi-geri, hidari jodan ushiro mawashi-geri.',
        da: 'Træd tilbage, migi okuri ashi, hidari chudan mawashi-geri, migi jodan ushiro mawashi-geri, migi jodan mawashi-geri, hidari jodan ushiro mawashi-geri.',
        ja: '後退して、右送り足、左中段回し蹴り、右上段後ろ回し蹴り、右上段回し蹴り、左上段後ろ回し蹴り。',
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
        en: 'Step back, hidari gedan-barai, hidari okuri ashi, migi hiza-geri to the back of head.',
        da: 'Træd tilbage, hidari gedan-barai, hidari okuri ashi, migi hiza-geri til bagsiden af hovedet.',
        ja: '後退して、左下段払い、左送り足、右膝蹴りで頭の後部を打つ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: 'Right Upper Roundhouse Kick (Migi Jodan Mawashi-geri)',
        da: 'Højre øvre rundkick (Migi Jodan Mawashi-geri)',
        ja: '右上段回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right upper roundhouse kick (migi jodan mawashi-geri) to the defender\'s head.',
        da: 'Angriberen udfører et højre øvre rundkick (migi jodan mawashi-geri) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に右上段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari yoko-geri, hidari jodan kake-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Hidari yoko-geri, hidari jodan kake-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '左横蹴り、左上段かけ蹴り、左上段後ろ回し蹴り、左上段回し蹴り、右上段後ろ回し蹴り。',
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
        en: 'Step back, hidari gedan-barai, hidari kansetsu-geri, hidari jodan kake-geri, keri ashi mae, migi jodan ushiro mawashi-geri.',
        da: 'Træd tilbage, hidari gedan-barai, hidari kansetsu-geri, hidari jodan kake-geri, keri ashi mae, migi jodan ushiro mawashi-geri.',
        ja: '後退して、左下段払い、左関節蹴り、左上段かけ蹴り、蹴り足前、右上段後ろ回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: 'Left Upper Roundhouse Kick (Hidari Jodan Mawashi-geri)',
        da: 'Venstre øvre rundkick (Hidari Jodan Mawashi-geri)',
        ja: '左上段回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left upper roundhouse kick (hidari jodan mawashi-geri) to the defender\'s head.',
        da: 'Angriberen udfører et venstre øvre rundkick (hidari jodan mawashi-geri) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に左上段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Step back, instep + migi gedan mawashi-geri, hidari jodan mawashi-geri (to the opponent coming from behind), hidari ushiro-geri.',
        da: 'Træd tilbage, vristen + migi gedan mawashi-geri, hidari jodan mawashi-geri (mod modstanderen der kommer bagfra), hidari ushiro-geri.',
        ja: '後退して、甲＋右下段回し蹴り、左上段回し蹴り（後ろから来る相手へ）、左後ろ蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: 'Right Upper Roundhouse Kick & Right Upper Punch (Migi Jodan Mawashi-geri, Migi Jodan Tsuki)',
        da: 'Højre øvre rundkick og højre øvrestød (Migi Jodan Mawashi-geri, Migi Jodan Tsuki)',
        ja: '右上段回し蹴り・右上段突き',
      },
      attacker: {
        en: 'Attacker delivers a right upper roundhouse kick (migi jodan mawashi-geri) followed by a right upper punch (migi jodan tsuki).',
        da: 'Angriberen udfører et højre øvre rundkick (migi jodan mawashi-geri) efterfulgt af et højre øvrestød (migi jodan tsuki).',
        ja: '攻撃者は右上段回し蹴りに続けて右上段突きを打ちます。',
      },
      defender: {
        en: 'Step back, migi okuri ashi + hidari soto-uke, ura-nage + hidari hiza-geri, kiba dachi.',
        da: 'Træd tilbage, migi okuri ashi + hidari soto-uke, ura-nage + hidari hiza-geri, kiba dachi.',
        ja: '後退して、右送り足＋左外受け、裏投げ＋左膝蹴り、騎馬立ち。',
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
        en: 'Migi tsuki, migi kakato-fumikomi, kumite no kamae.',
        da: 'Migi tsuki, migi kakato-fumikomi, kumite no kamae.',
        ja: '右突き、右踵踏み込み、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
