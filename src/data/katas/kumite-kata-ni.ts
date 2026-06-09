import type { Kata } from '../types';

export const kumiteKataNi: Kata = {
  id: 'kumite-kata-ni',
  japaneseCharacters: '組手の形二',
  romaji: 'Kumite no Kata Sono Ni',
  name: {
    en: 'Sparring Form 2',
    da: 'Kampeform 2',
    ja: '組手の形二',
  },
  requiredForKyu: [5, 4, 3, 2, 1],
  description: {
    en: 'Kumite no Kata Sono Ni builds on the first sparring form by adding extended counter sequences including double knee strikes and spinning back kicks. The kata develops flow and continuity after the initial defensive response.',
    da: 'Kumite no Kata Sono Ni bygger videre på den første kampform ved at tilføje udvidede kontrasekvenser inklusive dobbelt knæspark og spinning-bagspark. Kataen udvikler flow og kontinuitet efter den første defensive reaktion.',
    ja: '組手の形二は最初の組手型の上に構築され、二連膝蹴りや回転後ろ蹴りを含む長い連続カウンターを加えます。この型は最初の防御反応の後のフローと連続性を発展させます。',
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
        en: 'Right Low Roundhouse Kick (Migi Gedan Mawashi-geri)',
        da: 'Højre nedre rundkick (Migi Gedan Mawashi-geri)',
        ja: '右下段回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right low roundhouse kick (migi gedan mawashi-geri) to the defender\'s lead leg.',
        da: 'Angriberen udfører et højre nedre rundkick (migi gedan mawashi-geri) mod forsvararens forsteben.',
        ja: '攻撃者は防御者の前足に右下段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari sune-uke, migi gedan mawashi-geri, migi-hidari jodan nihon-tsuki, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Hidari sune-uke, migi gedan mawashi-geri, migi-hidari jodan nihon-tsuki, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '左脛受け、右下段回し蹴り、右左上段二本突き、左上段回し蹴り、右上段後ろ回し蹴り。',
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
        en: 'Step back, hidari soto-uke, mawashi-uke (pos 1), migi hiza-geri, kuzushite migi hiza-geri.',
        da: 'Træd tilbage, hidari soto-uke, mawashi-uke (pos 1), migi hiza-geri, kuzushite migi hiza-geri.',
        ja: '後退して、左外受け、回し受け（位置1）、右膝蹴り、崩して右膝蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: 'Left Low Roundhouse Kick (Hidari Gedan Mawashi-geri)',
        da: 'Venstre nedre rundkick (Hidari Gedan Mawashi-geri)',
        ja: '左下段回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left low roundhouse kick (hidari gedan mawashi-geri) to the defender\'s lead leg.',
        da: 'Angriberen udfører et venstre nedre rundkick (hidari gedan mawashi-geri) mod forsvararens forsteben.',
        ja: '攻撃者は防御者の前足に左下段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari sune-uke, migi gedan mawashi-geri, migi-hidari jodan nihon-tsuki, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Hidari sune-uke, migi gedan mawashi-geri, migi-hidari jodan nihon-tsuki, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '左脛受け、右下段回し蹴り、右左上段二本突き、左上段回し蹴り、右上段後ろ回し蹴り。',
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
        en: 'Step back, hidari gedan-barai, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri x 2.',
        da: 'Træd tilbage, hidari gedan-barai, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri x 2.',
        ja: '後退して、左下段払い、回し受け＋右送り足（位置2）、左膝蹴り×2。',
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
        en: 'Hidari jodan-uke + hidari kansetsu-geri.',
        da: 'Hidari jodan-uke + hidari kansetsu-geri.',
        ja: '左上段受け＋左関節蹴り。',
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
        en: 'Step back, hidari gedan-barai, hidari kansetsu-geri, migi mawashi-geri jodan ushiro.',
        da: 'Træd tilbage, hidari gedan-barai, hidari kansetsu-geri, migi mawashi-geri jodan ushiro.',
        ja: '後退して、左下段払い、左関節蹴り、右上段後ろ回し蹴り。',
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
        en: 'Migi jodan-uke, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri x 2, migi hiji-uchi.',
        da: 'Migi jodan-uke, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri x 2, migi hiji-uchi.',
        ja: '右上段受け、回し受け＋右送り足（位置2）、左膝蹴り×2、右肘打ち。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
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
        en: 'Hidari jodan-uke, (mawashi-uke) (pos 1), migi hiza-geri x 2, maki komi nage, kiba dachi.',
        da: 'Hidari jodan-uke, (mawashi-uke) (pos 1), migi hiza-geri x 2, maki komi nage, kiba dachi.',
        ja: '左上段受け、（回し受け）（位置1）、右膝蹴り×2、巻き込み投げ、騎馬立ち。',
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
