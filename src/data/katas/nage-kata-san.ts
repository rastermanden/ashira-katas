import type { Kata } from '../types';

export const nageKataSan: Kata = {
  id: 'nage-kata-san',
  japaneseCharacters: '投げの形三',
  romaji: 'Nage no Kata Sono San',
  name: {
    en: 'Throwing Form 3',
    da: 'Kasteteknikform 3',
    ja: '投げの形三',
  },
  requiredForKyu: [4, 3, 2, 1],
  description: {
    en: 'Nage no Kata Sono San introduces hikitaoshi (take-down/throw-down) as an alternative to the ura-nage, and incorporates multi-kick counters before the throw. Step 3 and 8 both feature complex entry sequences using back-position approaches before the final hikitaoshi.',
    da: 'Nage no Kata Sono San introducerer hikitaoshi (nedtagning/nedkastning) som et alternativ til ura-nage og inkorporerer fler-spark-kontraer inden kastet. Trin 3 og 8 inkluderer begge komplekse indgangsekvenser ved hjælp af bagsidepositons-tilgange inden den endelige hikitaoshi.',
    ja: '投げの形三は裏投げの代替として引き倒し（テイクダウン/投げ倒し）を導入し、投げの前に複数の蹴りカウンターを組み込みます。ステップ3と8はどちらも最終的な引き倒しの前に後方位置アプローチを使った複雑な入り身連続を特徴とします。',
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
        en: 'Hidari sune-uke, mawashi-uke (pos 1), migi hiza-geri x 2, maki komi nage.',
        da: 'Hidari sune-uke, mawashi-uke (pos 1), migi hiza-geri x 2, maki komi nage.',
        ja: '左脛受け、回し受け（位置1）、右膝蹴り×2、巻き込み投げ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Right Front Kick & Right Upper Punch (Migi Mae-geri, Migi Jodan Tsuki)',
        da: 'Højre frontspark og højre øvrestød (Migi Mae-geri, Migi Jodan Tsuki)',
        ja: '右前蹴り・右上段突き',
      },
      attacker: {
        en: 'Attacker delivers a right front kick (migi mae-geri) followed by a right upper punch (migi jodan tsuki).',
        da: 'Angriberen udfører et højre frontspark (migi mae-geri) efterfulgt af et højre øvrestød (migi jodan tsuki).',
        ja: '攻撃者は右前蹴りに続けて右上段突きを打ちます。',
      },
      defender: {
        en: 'Step back, hidari soto-uke, hidari jodan soto-uke, migi cross okuri-ashi, hidari hiza-geri, (back pos 1), migi hiza-geri, hikitaoshi (take down/throw down).',
        da: 'Træd tilbage, hidari soto-uke, hidari jodan soto-uke, migi cross okuri-ashi, hidari hiza-geri, (bagside pos 1), migi hiza-geri, hikitaoshi (nedtagning/nedkastning).',
        ja: '後退して、左外受け、左上段外受け、右クロス送り足、左膝蹴り、（後方位置1）、右膝蹴り、引き倒し（テイクダウン/投げ倒し）。',
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
        en: 'Hidari sune-uke, mawashi-uke (pos 2), hidari hiza-geri x 2, maki komi nage.',
        da: 'Hidari sune-uke, mawashi-uke (pos 2), hidari hiza-geri x 2, maki komi nage.',
        ja: '左脛受け、回し受け（位置2）、左膝蹴り×2、巻き込み投げ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Left Front Kick & Left Upper Punch (Hidari Mae-geri, Hidari Jodan Tsuki)',
        da: 'Venstre frontspark og venstre øvrestød (Hidari Mae-geri, Hidari Jodan Tsuki)',
        ja: '左前蹴り・左上段突き',
      },
      attacker: {
        en: 'Attacker delivers a left front kick (hidari mae-geri) followed by a left upper punch (hidari jodan tsuki).',
        da: 'Angriberen udfører et venstre frontspark (hidari mae-geri) efterfulgt af et venstre øvrestød (hidari jodan tsuki).',
        ja: '攻撃者は左前蹴りに続けて左上段突きを打ちます。',
      },
      defender: {
        en: 'Step back, hidari gedan-barai, hidari shuto-uke, hidari cross okuri ashi, hidari hiza-geri, migi hiza-geri.',
        da: 'Træd tilbage, hidari gedan-barai, hidari shuto-uke, hidari cross okuri ashi, hidari hiza-geri, migi hiza-geri.',
        ja: '後退して、左下段払い、左手刀受け、左クロス送り足、左膝蹴り、右膝蹴り。',
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
        en: 'Instep, jodan-uke, migi mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        da: 'Vristen, jodan-uke, migi mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri.',
        ja: '甲、上段受け、右回し蹴り、左上段回し蹴り、右上段後ろ回し蹴り。',
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
        en: 'Step back, hidari gedan-barai, migi gedan mawashi-geri (back pos 2), hidari hiza-geri, migi hiji uchi.',
        da: 'Træd tilbage, hidari gedan-barai, migi gedan mawashi-geri (bagside pos 2), hidari hiza-geri, migi hiji uchi.',
        ja: '後退して、左下段払い、右下段回し蹴り（後方位置2）、左膝蹴り、右肘打ち。',
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
        en: 'Step back, instep, migi gedan mawashi-geri (back pos 2), hidari hiza-geri, migi hiza-geri, hikitaoshi (take down/throw down).',
        da: 'Træd tilbage, vristen, migi gedan mawashi-geri (bagside pos 2), hidari hiza-geri, migi hiza-geri, hikitaoshi (nedtagning/nedkastning).',
        ja: '後退して、甲、右下段回し蹴り（後方位置2）、左膝蹴り、右膝蹴り、引き倒し（テイクダウン/投げ倒し）。',
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
        en: 'Step back, migi okuri ashi, hidari gedan mawashi-geri (back pos 1), migi hiza-geri, hidari hiza-geri, hikitaoshi (take down/throw down), hold the head onto the thigh, kiba dachi.',
        da: 'Træd tilbage, migi okuri ashi, hidari gedan mawashi-geri (bagside pos 1), migi hiza-geri, hidari hiza-geri, hikitaoshi (nedtagning/nedkastning), hold hovedet mod låret, kiba dachi.',
        ja: '後退して、右送り足、左下段回し蹴り（後方位置1）、右膝蹴り、左膝蹴り、引き倒し（テイクダウン/投げ倒し）、頭を太ももに押さえる、騎馬立ち。',
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
        en: 'Attacker initiates a right knife-hand strike, then steps back for a right roundhouse kick to signal the finish.',
        da: 'Angriberen udfører et højre håndkantslag, træder derefter tilbage for et højre rundkick for at signalere afslutningen.',
        ja: '攻撃者は右手刀打ちを行い、次に右回し蹴りのために後退して終わりを示します。',
      },
      defender: {
        en: 'Migi shuto-uchi, step back, migi mawashi-geri, kumite no kamae.',
        da: 'Migi shuto-uchi, træd tilbage, migi mawashi-geri, kumite no kamae.',
        ja: '右手刀打ち、後退して、右回し蹴り、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
