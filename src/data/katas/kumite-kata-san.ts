import type { Kata } from '../types';

export const kumiteKataSan: Kata = {
  id: 'kumite-kata-san',
  japaneseCharacters: '組手の形三',
  romaji: 'Kumite no Kata Sono San',
  name: {
    en: 'Sparring Form 3',
    da: 'Kampeform 3',
    ja: '組手の形三',
  },
  requiredForKyu: [3, 2, 1],
  description: {
    en: 'Kumite no Kata Sono San introduces stopping techniques against low kicks and combination attacks (mae-geri + tsuki). Throwing techniques such as ura-nage (back throw) appear prominently, and the kata develops the use of pivot-leg (jikuashi) counters.',
    da: 'Kumite no Kata Sono San introducerer stopping-teknikker mod nedre spark og kombinationsangreb (mae-geri + tsuki). Kastteknikker som ura-nage (bagkast) optræder fremtrædende, og kataen udvikler brugen af akselbens-kontraer (jikuashi).',
    ja: '組手の形三は下段蹴りや連続攻撃（前蹴り＋突き）に対するストッピング技術を導入します。裏投げ（後ろ投げ）などの投げ技が多く登場し、軸足カウンターの使い方を発展させます。',
  },
  youtubeLinks: [{ label: 'Kumite no Kata Sono San — Sensei Mazz', url: 'https://youtu.be/4o0EoCJ6aBY' }],
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
        en: 'Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '左ストッピング、右下段回し蹴り、左上段回し蹴り、右上段後ろ回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Right Front Kick & Right Punch (Migi Mae-geri, Migi Tsuki)',
        da: 'Højre frontspark og højre stød (Migi Mae-geri, Migi Tsuki)',
        ja: '右前蹴り・右突き',
      },
      attacker: {
        en: 'Attacker delivers a right front kick (migi mae-geri) followed by a right punch (migi tsuki).',
        da: 'Angriberen udfører et højre frontspark (migi mae-geri) efterfulgt af et højre stød (migi tsuki).',
        ja: '攻撃者は右前蹴り（migi mae-geri）に続けて右突き（migi tsuki）を打ちます。',
      },
      defender: {
        en: 'Step back, hidari soto-uke, hidari soto-uke + stopping, migi chudan mawashi-geri (to the face).',
        da: 'Træd tilbage, hidari soto-uke, hidari soto-uke + stopping, migi chudan mawashi-geri (til ansigtet).',
        ja: '後退して、左外受け、左外受け＋ストッピング、右中段回し蹴り（顔へ）。',
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
        en: 'Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '左ストッピング、右下段回し蹴り、左上段回し蹴り、右上段後ろ回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Left Front Kick & Left Punch (Hidari Mae-geri, Hidari Tsuki)',
        da: 'Venstre frontspark og venstre stød (Hidari Mae-geri, Hidari Tsuki)',
        ja: '左前蹴り・左突き',
      },
      attacker: {
        en: 'Attacker delivers a left front kick (hidari mae-geri) followed by a left punch (hidari tsuki).',
        da: 'Angriberen udfører et venstre frontspark (hidari mae-geri) efterfulgt af et venstre stød (hidari tsuki).',
        ja: '攻撃者は左前蹴りに続けて左突きを打ちます。',
      },
      defender: {
        en: 'Step back, hidari gedan-barai, migi soto-uke + migi gedan mawashi-geri (pos 4), hidari chudan mawashi-geri.',
        da: 'Træd tilbage, hidari gedan-barai, migi soto-uke + migi gedan mawashi-geri (pos 4), hidari chudan mawashi-geri.',
        ja: '後退して、左下段払い、右外受け＋右下段回し蹴り（位置4）、左中段回し蹴り。',
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
        en: 'Hidari jodan-uke, hidari yoko-geri, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri.',
        da: 'Hidari jodan-uke, hidari yoko-geri, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri.',
        ja: '左上段受け、左横蹴り、右中段回し蹴り、左上段後ろ回し蹴り、左上段回し蹴り。',
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
        en: 'Step back, hidari gedan-barai, irimi (pos 4), ura-nage, migi hiza-geri to the back of head.',
        da: 'Træd tilbage, hidari gedan-barai, irimi (pos 4), ura-nage, migi hiza-geri til bagsiden af hovedet.',
        ja: '後退して、左下段払い、入り身（位置4）、裏投げ、右膝蹴りで頭の後部を打つ。',
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
        en: 'Migi jodan-uke + migi jikuashi-geri, (mawashi-uke) (pos 2), hidari hiza-geri, migi hiji-uchi.',
        da: 'Migi jodan-uke + migi jikuashi-geri, (mawashi-uke) (pos 2), hidari hiza-geri, migi hiji-uchi.',
        ja: '右上段受け＋右軸足蹴り、（回し受け）（位置2）、左膝蹴り、右肘打ち。',
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
        en: 'Jikuashi (pivot leg) stopping, migi uchimomo-geri, migi chudan mawashi-geri, maki komi nage, kiba dachi.',
        da: 'Jikuashi (akselbenstopping), migi uchimomo-geri, migi chudan mawashi-geri, maki komi nage, kiba dachi.',
        ja: '軸足ストッピング、右内腿蹴り、右中段回し蹴り、巻き込み投げ、騎馬立ち。',
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
        en: 'Attacker initiates a right lower punch to signal the finish.',
        da: 'Angriberen udfører et højre nedrestød for at signalere afslutningen.',
        ja: '攻撃者は終わりを示すために右下段突きを打ちます。',
      },
      defender: {
        en: 'Migi gedan tsuki, migi kakato-fumikomi, kumite no kamae.',
        da: 'Migi gedan tsuki, migi kakato-fumikomi, kumite no kamae.',
        ja: '右下段突き、右踵踏み込み、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
