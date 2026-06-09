import type { Kata } from '../types';

export const shoshinshaKataIchi: Kata = {
  id: 'shoshinsha-kata-ichi',
  japaneseCharacters: '初心者の形一',
  romaji: 'Shoshinsha no Kata Sono Ichi',
  name: {
    en: 'Beginner Form 1',
    da: 'Begynderform 1',
    ja: '初心者の形一',
  },
  requiredForKyu: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'Shoshinsha no Kata Sono Ichi is the first kata of Ashihara Karate. Emphasis is placed on stepping back, judging distance and nagashi type parrying. The kata introduces the fundamental attack-defense relationship using basic punches and front kicks.',
    da: 'Shoshinsha no Kata Sono Ichi er den første kata i Ashihara Karate. Der lægges vægt på at træde tilbage, bedømme afstand og nagashi-type afværgning. Kataen introducerer det grundlæggende angriber-forsvarer-forhold med basale slag og frontspark.',
    ja: '初心者の形一はアシハラ空手の最初の型です。後退、間合いの判断、流し型の受けが強調されます。この型は基本的な突きと前蹴りを用いた攻撃と防御の基本的な関係を紹介します。',
  },
  youtubeLinks: [],
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
        en: 'Step back, hidari chudan soto-uke, migi chudan tsuki.',
        da: 'Træd tilbage, hidari chudan soto-uke, migi chudan tsuki.',
        ja: '後退して、左中段外受け、右中段突き。',
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
        en: 'Step back, hidari jodan soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi mae, turn (180°).',
        da: 'Træd tilbage, hidari jodan soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi mae, drej (180°).',
        ja: '後退して、左上段外受け、右上段突き、右中段回し蹴り、蹴り足前、転換（180度）。',
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
        en: 'Step back, hidari gedan-barai, migi chudan tsuki.',
        da: 'Træd tilbage, hidari gedan-barai, migi chudan tsuki.',
        ja: '後退して、左下段払い、右中段突き。',
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
        en: 'Step back, hidari uchi-uke shuto, migi jodan tsuki, foot switch, hidari chudan mawashi-geri, turn (90°).',
        da: 'Træd tilbage, hidari uchi-uke shuto, migi jodan tsuki, fod-skift, hidari chudan mawashi-geri, drej (90°).',
        ja: '後退して、左内受け手刀、右上段突き、フットスイッチ、左中段回し蹴り、転換（90度）。',
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
        en: 'Step back, hidari soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi ushiro. (Back to normal fighting stance.)',
        da: 'Træd tilbage, hidari soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi ushiro. (Tilbage til normal kampstilling.)',
        ja: '後退して、左外受け、右上段突き、右中段回し蹴り、蹴り足後ろ。（通常の組手構えに戻る。）',
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
        en: 'Step back, hidari gedan-barai, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi mae.',
        da: 'Træd tilbage, hidari gedan-barai, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi mae.',
        ja: '後退して、左下段払い、右下段回し蹴り、左上段回し蹴り、蹴り足前。',
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
        en: 'Hidari sune-uke, migi okuri ashi, hidari hiza-geri, maki komi nage.',
        da: 'Hidari sune-uke, migi okuri ashi, hidari hiza-geri, maki komi nage.',
        ja: '左脛受け、右送り足、左膝蹴り、巻き込み投げ。',
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
        en: 'Hidari sune-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi.',
        da: 'Hidari sune-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi.',
        ja: '左脛受け、（回し受け）、右膝蹴り、巻き込み投げ、騎馬立ち。',
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
        en: 'Migi tsuki, kumite no kamae.',
        da: 'Migi tsuki, kumite no kamae.',
        ja: '右突き、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
