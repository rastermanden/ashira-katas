import type { Kata } from '../types';

export const kihonKataSan: Kata = {
  id: 'kihon-kata-san',
  japaneseCharacters: '基本形三',
  romaji: 'Kihon Kata San',
  name: {
    en: 'Basic Form 3',
    da: 'Grundform 3',
    ja: '基本形三',
  },
  requiredForKyu: [8, 7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'Kihon Kata San introduces combination attacks and multiple attacker scenarios. The defender must now chain defensive and offensive techniques in fluid sequences, developing the concept of continuous motion that Ashihara calls "sabaki no nagare" — the flow of evasion.',
    da: 'Kihon Kata San introducerer kombinationsangreb og scenarier med flere angribere. Forsvareren skal nu sammenkoble defensive og offensive teknikker i flydende sekvenser og udvikle konceptet om kontinuerlig bevægelse, som Ashihara kalder "sabaki no nagare" — undvigelsens strøm.',
    ja: '基本形三はコンビネーション攻撃と複数の攻撃者のシナリオを導入します。防御者はこれからは流れるような連続した動作で防御技と攻撃技を連結しなければなりません。アシハラが「捌きの流れ」と呼ぶ継続的な動きの概念を発展させます。',
  },
  youtubeLinks: [],
  steps: [
    {
      stepNumber: 1,
      name: {
        en: 'Ready Position (Yoi)',
        da: 'Startposition (Yoi)',
        ja: '用意',
      },
      attacker: {
        en: 'Attacker stands in natural stance at engagement distance.',
        da: 'Angriberen står i naturlig stilling i kampafstand.',
        ja: '攻撃者は交戦距離で自然体に立ちます。',
      },
      defender: {
        en: 'Defender in ready position (yoi).',
        da: 'Forsvareren i startposition (yoi).',
        ja: '防御者は用意の姿勢をとります。',
      },
      technicalNotes: {
        en: 'At this level the student should be transitioning from thinking about individual techniques to thinking about the sequence as a whole. Visualise the entire kata before beginning.',
        da: 'På dette niveau bør studerende gå fra at tænke på individuelle teknikker til at tænke på sekvensen som en helhed. Visualiser hele kataen inden du begynder.',
        ja: 'このレベルでは、学習者は個々の技について考えることから、全体として連続を考えることへと移行すべきです。始める前に型全体を視覚化しましょう。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: 'Double Punch Attack — Parry & Counter',
        da: 'Dobbelt stød — afparering og kontra',
        ja: 'ダブルパンチ攻撃 — 受けとカウンター',
      },
      attacker: {
        en: 'Attacker steps in and delivers a two-punch combination: right jab (migi kizami zuki) to the face, immediately followed by left cross (hidari gyaku zuki) to the body.',
        da: 'Angriberen træder ind og udfører en to-stødskombination: højre jab (migi kizami zuki) til ansigtet, umiddelbart efterfulgt af venstre kryds (hidari gyaku zuki) til kroppen.',
        ja: '攻撃者は踏み込み、2連打のコンビネーションを繰り出します：顔に右刻み突き（migi kizami zuki）、直ちに続けて体に左逆突き（hidari gyaku zuki）。',
      },
      defender: {
        en: 'Defender uses a slip and parry on the jab — leaning slightly offline while batting the punch aside with the left hand. For the follow-up cross, the defender pivots on the right foot, turning hips 90° to clear the punch, and counters immediately with a right elbow strike (migi empi uchi) to the attacker\'s temple.',
        da: 'Forsvareren bruger et slip og afparering på jabbet — læner sig let til siden, mens støddet slås til side med venstre hånd. For opfølgningskrydset drejer forsvareren på højre fod, roterer hofterne 90° for at komme fri af støddet, og kontraerer straks med et højre albuestød (migi empi uchi) til angriberens tinding.',
        ja: '防御者はジャブに対してスリップとパリーを使います。左手で突きを払いながら少しオフラインに傾きます。続く逆突きに対しては、右足を軸に90度腰を回転させて突きをかわし、直ちに右肘打ち（migi empi uchi）を攻撃者のこめかみに打ち込みます。',
      },
      technicalNotes: {
        en: 'The elbow strike (empi uchi) is one of the most powerful close-range weapons in karate. The movement is compact — elbow travels on a horizontal plane through the target. Do not overextend. The pivot that avoids the cross simultaneously loads the hip for the elbow counter.',
        da: 'Albuestødet (empi uchi) er et af de mest kraftfulde nærkampsvåben i karate. Bevægelsen er kompakt — albuen bevæger sig på et vandret plan gennem målet. Overruk ikke. Drejet, der undgår krydset, loader simultant hoften til albuekontraen.',
        ja: '肘打ち（empi uchi）は空手における最も強力な近距離武器の一つです。動きはコンパクトです。肘は水平面上でターゲットを通り抜けます。伸ばしすぎないようにしてください。逆突きをかわすためのピボットが同時に肘のカウンターのために腰を準備します。',
      },
      schoolVariations: [],
    },
  ],
};
