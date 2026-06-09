import type { Kata } from '../types';

export const kihonKataSan: Kata = {
  id: 'kihon-kata-san',
  japaneseCharacters: '基本形三',
  romaji: 'Kihon no Kata Sono San',
  name: {
    en: 'Basic Form 3',
    da: 'Grundform 3',
    ja: '基本形三',
  },
  requiredForKyu: [4, 3, 2, 1],
  description: {
    en: 'Kihon no Kata Sono San introduces advanced kick attacks including jodan ushiro mawashi-geri (upper back roundhouse kick), ushiro-geri (back kick) and san kaku-geri (triangle kick). The kata develops kyushu-step entries against kicks and extends counter sequences with ushiro mawari tettsui (spinning hammer fist).',
    da: 'Kihon no Kata Sono San introducerer avancerede spark-angreb inklusive jodan ushiro mawashi-geri (øvre bagkick), ushiro-geri (bagspark) og san kaku-geri (trekantspark). Kataen udvikler kyushu-skridt-indgange mod spark og udvider kontra-sekvenser med ushiro mawari tettsui (spinninghammernæve).',
    ja: '基本形三は上段後ろ回し蹴り、後ろ蹴り、三角蹴りなどの高度な蹴り攻撃を導入します。この型は蹴りに対するキュウシュウステップの入り方を発展させ、後ろ回り鉄槌によるカウンター連続を拡張します。',
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
        en: 'Left Side Kick (Hidari Yoko-geri)',
        da: 'Venstre sidekick (Hidari Yoko-geri)',
        ja: '左横蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left side kick (hidari yoko-geri) to the defender.',
        da: 'Angriberen udfører et venstre sidekick (hidari yoko-geri) mod forsvareren.',
        ja: '攻撃者は防御者に左横蹴りを蹴ります。',
      },
      defender: {
        en: 'Step back, hidari gedan-barai (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri.',
        da: 'Træd tilbage, hidari gedan-barai (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri.',
        ja: '後退して、左下段払い（位置4）、右上段突き、右下段回し蹴り、左上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Right Upper Back Roundhouse Kick (Migi Jodan Ushiro Mawashi-geri)',
        da: 'Højre øvre bagkick rundkick (Migi Jodan Ushiro Mawashi-geri)',
        ja: '右上段後ろ回し蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right upper back roundhouse kick (migi jodan ushiro mawashi-geri) to the defender\'s head.',
        da: 'Angriberen udfører et højre øvre bagkick rundkick (migi jodan ushiro mawashi-geri) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に右上段後ろ回し蹴りを蹴ります。',
      },
      defender: {
        en: '(Back position 1), migi jodan mawashi-geri.',
        da: '(Bagside position 1), migi jodan mawashi-geri.',
        ja: '（後方位置1）、右上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: 'Right Back Kick (Migi Ushiro-geri)',
        da: 'Højre bagspark (Migi Ushiro-geri)',
        ja: '右後ろ蹴り',
      },
      attacker: {
        en: 'Attacker delivers a right back kick (migi ushiro-geri) to the defender.',
        da: 'Angriberen udfører et højre bagspark (migi ushiro-geri) mod forsvareren.',
        ja: '攻撃者は防御者に右後ろ蹴りを蹴ります。',
      },
      defender: {
        en: 'Step back, hidari soto-uke (pos 3), migi uchimomo-geri, migi jodan mawashi-geri.',
        da: 'Træd tilbage, hidari soto-uke (pos 3), migi uchimomo-geri, migi jodan mawashi-geri.',
        ja: '後退して、左外受け（位置3）、右内腿蹴り、右上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Left Upper Hook Kick (Hidari Jodan Kake-geri)',
        da: 'Venstre øvre krogkick (Hidari Jodan Kake-geri)',
        ja: '左上段かけ蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left upper hook kick (hidari jodan kake-geri) to the defender\'s head.',
        da: 'Angriberen udfører et venstre øvre krogkick (hidari jodan kake-geri) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に左上段かけ蹴りを蹴ります。',
      },
      defender: {
        en: 'Hidari jodan uke (pos 2), hidari jodan mawashi-geri.',
        da: 'Hidari jodan uke (pos 2), hidari jodan mawashi-geri.',
        ja: '左上段受け（位置2）、左上段回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: 'Right Low Roundhouse Kick x2 — Faint & Kick (Migi Gedan Mawashi-geri)',
        da: 'Højre nedre rundkick x2 — finte og spark (Migi Gedan Mawashi-geri)',
        ja: '右下段回し蹴り×2（フェイント＋蹴り）',
      },
      attacker: {
        en: 'Attacker delivers a right low roundhouse kick faint followed by a real right low roundhouse kick (migi gedan mawashi-geri x 2).',
        da: 'Angriberen udfører et højre nedre rundkick-finte efterfulgt af et rigtigt højre nedre rundkick (migi gedan mawashi-geri x 2).',
        ja: '攻撃者は右下段回し蹴りのフェイントに続いて本物の右下段回し蹴りを行います（migi gedan mawashi-geri×2）。',
      },
      defender: {
        en: 'Hidari sune-uke (pos 1), stopping, migi jodan tsuki, migi jodan mawashi-geri, keri ashi ushiro.',
        da: 'Hidari sune-uke (pos 1), stopping, migi jodan tsuki, migi jodan mawashi-geri, keri ashi ushiro.',
        ja: '左脛受け（位置1）、ストッピング、右上段突き、右上段回し蹴り、蹴り足後ろ。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: 'Left Triangle Kick (Hidari San Kaku-geri)',
        da: 'Venstre trekantspark (Hidari San Kaku-geri)',
        ja: '左三角蹴り',
      },
      attacker: {
        en: 'Attacker delivers a left triangle kick (hidari san kaku-geri) — a spinning kick — to the defender.',
        da: 'Angriberen udfører et venstre trekantspark (hidari san kaku-geri) — et spinningkick — mod forsvareren.',
        ja: '攻撃者は防御者に左三角蹴り（スピニングキック）を蹴ります。',
      },
      defender: {
        en: 'Step back, hidari gedan-barai, hidari cross step (pos 4), migi ushiro mawari tettsui, migi ushiro mawashi-geri.',
        da: 'Træd tilbage, hidari gedan-barai, hidari krydstrin (pos 4), migi ushiro mawari tettsui, migi ushiro mawashi-geri.',
        ja: '後退して、左下段払い、左クロスステップ（位置4）、右後ろ回り鉄槌、右後ろ回し蹴り。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: 'Left Upper Roundhouse Kick — Turn (Hidari Jodan Mawashi-geri)',
        da: 'Venstre øvre rundkick — drej (Hidari Jodan Mawashi-geri)',
        ja: '左上段回し蹴り（転換）',
      },
      attacker: {
        en: 'Attacker delivers a left upper roundhouse kick (hidari jodan mawashi-geri) to the defender\'s head.',
        da: 'Angriberen udfører et venstre øvre rundkick (hidari jodan mawashi-geri) mod forsvararens hoved.',
        ja: '攻撃者は防御者の上段に左上段回し蹴りを蹴ります。',
      },
      defender: {
        en: 'Migi jodan-uke + kyushu step, hidari-migi jodan nihon-tsuki, migi jikuashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, turn (180°).',
        da: 'Migi jodan-uke + kyushu skridt, hidari-migi jodan nihon-tsuki, migi jikuashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, drej (180°).',
        ja: '右上段受け＋キュウシュウステップ、左右上段二本突き、右軸足蹴り、左上段回し蹴り、蹴り足後ろ、転換（180度）。',
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
        en: 'Hidari jodan-uke + kyushu step, migi jodan tsuki, migi uchimomo-geri, keri ashi mae, press the head.',
        da: 'Hidari jodan-uke + kyushu skridt, migi jodan tsuki, migi uchimomo-geri, keri ashi mae, pres hovedet.',
        ja: '左上段受け＋キュウシュウステップ、右上段突き、右内腿蹴り、蹴り足前、頭を押さえる。',
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
        en: 'Attacker initiates a left lower back roundhouse kick advancing forward to signal the finish.',
        da: 'Angriberen udfører et venstre nedre bagkick rundkick fremad for at signalere afslutningen.',
        ja: '攻撃者は終わりを示すために左下段後ろ回し蹴りで前進します。',
      },
      defender: {
        en: 'Hidari gedan ushiro mawashi-geri, keri ashi mae, kumite no kamae.',
        da: 'Hidari gedan ushiro mawashi-geri, keri ashi mae, kumite no kamae.',
        ja: '左下段後ろ回し蹴り、蹴り足前、組手の構え。',
      },
      technicalNotes: { en: '', da: '', ja: '' },
      schoolVariations: [],
    },
  ],
};
