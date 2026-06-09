import type { Kata } from '../types';

export const nageKataIchi: Kata = {
  id: 'nage-kata-ichi',
  japaneseCharacters: '投げの形一',
  romaji: 'Nage no Kata Sono Ichi',
  name: {
    en: 'Throwing Form 1',
    da: 'Kasteteknikform 1',
    ja: '投げの形一',
  },
  requiredForKyu: [],
  description: {
    en: 'Nage no Kata Sono Ichi introduces the fundamental throwing principles of Ashihara Karate. The core techniques are maki komi nage (wrapping throw) against roundhouse kicks and ura-nage (back throw) against front kicks using a cross-step (cross okuri ashi) entry. Kubi-nage (neck throw) is also introduced.',
    da: 'Nage no Kata Sono Ichi introducerer de grundlæggende kasteteknikprincipper i Ashihara Karate. Kerneteknikken er maki komi nage (omviklingskast) mod rundkick og ura-nage (bagkast) mod frontspark ved brug af krydstrin (cross okuri ashi) indgang. Kubi-nage (halskast) introduceres også.',
    ja: '投げの形一はアシハラ空手の基本的な投げの原則を導入します。核心技術は回し蹴りに対する巻き込み投げと、クロスステップ（クロス送り足）の入り身を使った前蹴りに対する裏投げです。首投げも導入されます。',
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
        en: 'Hidari sune-uke, mawashi-uke, maki komi nage.',
        da: 'Hidari sune-uke, mawashi-uke, maki komi nage.',
        ja: '左脛受け、回し受け、巻き込み投げ。',
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
        en: 'Step back, hidari soto-uke, migi cross okuri ashi, ura-nage.',
        da: 'Træd tilbage, hidari soto-uke, migi cross okuri ashi, ura-nage.',
        ja: '後退して、左外受け、右クロス送り足、裏投げ。',
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
        en: 'Hidari sune-uke, mawashi-uke, maki komi nage.',
        da: 'Hidari sune-uke, mawashi-uke, maki komi nage.',
        ja: '左脛受け、回し受け、巻き込み投げ。',
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
        en: 'Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (320°).',
        da: 'Træd tilbage, hidari gedan-barai, hidari cross okuri ashi, ura-nage (320°).',
        ja: '後退して、左下段払い、左クロス送り足、裏投げ（320度）。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: 'Right Roundhouse Kick (Migi Mawashi-geri)',
        da: 'Højre rundkick (Migi Mawashi-geri)',
        ja: '右回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right roundhouse kick (migi mawashi-geri) to the defender.',
        da: 'Angriberen udfører et højre rundkick (migi mawashi-geri) mod forsvareren.',
        ja: '攻撃者は防御者に右回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Step back, irimi (back pos 1), kubi-nage. (kubi: neck)',
        da: 'Træd tilbage, irimi (bagside pos 1), kubi-nage. (kubi: hals)',
        ja: '後退して、入り身（後方位置1）、首投げ。（kubi：首）',
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
        en: 'Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (360°).',
        da: 'Træd tilbage, hidari gedan-barai, hidari cross okuri ashi, ura-nage (360°).',
        ja: '後退して、左下段払い、左クロス送り足、裏投げ（360度）。',
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
        en: 'Step back, hidari cross okuri ashi, ura-nage.',
        da: 'Træd tilbage, hidari cross okuri ashi, ura-nage.',
        ja: '後退して、左クロス送り足、裏投げ。',
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
        en: 'Step back, migi cross okuri ashi, ura-nage, (hold the head onto the thigh), kiba dachi.',
        da: 'Træd tilbage, migi cross okuri ashi, ura-nage, (hold hovedet mod låret), kiba dachi.',
        ja: '後退して、右クロス送り足、裏投げ、（頭を太ももに押さえる）、騎馬立ち。',
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
        en: 'Attacker initiates a right knife-hand strike and elbow drop to signal the finish.',
        da: 'Angriberen udfører et højre håndkantslag og albue-nedslag for at signalere afslutningen.',
        ja: '攻撃者は終わりを示すために右手刀打ちと右肘落とし打ちを行います。',
      },
      defender: {
        en: 'Migi shuto-uchi, migi hiji oroshi uchi, kumite no kamae.',
        da: 'Migi shuto-uchi, migi hiji oroshi uchi, kumite no kamae.',
        ja: '右手刀打ち、右肘落とし打ち、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
