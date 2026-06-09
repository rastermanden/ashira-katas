import type { Kata } from '../types';

export const kihonKataNi: Kata = {
  id: 'kihon-kata-ni',
  japaneseCharacters: '基本形二',
  romaji: 'Kihon Kata Ni',
  name: {
    en: 'Basic Form 2',
    da: 'Grundform 2',
    ja: '基本形二',
  },
  requiredForKyu: [9, 8, 7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'Kihon Kata Ni builds upon the first kata, introducing kicks (keri waza) into the defensive repertoire. The defender now uses leg techniques in combination with hand techniques, developing the coordination between upper and lower body that characterises advanced Ashihara movement.',
    da: 'Kihon Kata Ni bygger videre på den første kata og introducerer spark (keri waza) i forsvarsrepertoiret. Forsvareren bruger nu benteknikker i kombination med håndteknikker og udvikler koordinationen mellem over- og underkrop, der kendetegner avanceret Ashihara-bevægelse.',
    ja: '基本形二は最初の型の上に構築され、防御のレパートリーに蹴り技（蹴り技）を導入します。防御者は上肢と下肢の技を組み合わせるようになり、高度なアシハラの動きの特徴である上半身と下半身の協調性を発展させます。',
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
        en: 'Attacker stands in natural stance facing the defender at approximately one full step distance.',
        da: 'Angriberen står i naturlig stilling over for forsvareren i en afstand af ca. ét skridt.',
        ja: '攻撃者は自然体で防御者と向き合い、約一歩の距離を保って立ちます。',
      },
      defender: {
        en: 'Defender assumes ready position (yoi), feet shoulder-width apart, weight centered, soft gaze on attacker.',
        da: 'Forsvareren indtager startpositionen (yoi), fødder i skulderbredde, vægten centreret, blødt blik på angriberen.',
        ja: '防御者は用意の姿勢をとります。両足を肩幅に開き、体重を中心に置き、攻撃者に柔らかい視線を向けます。',
      },
      technicalNotes: {
        en: 'Same as Kihon Kata Ichi. Review the mental preparation aspect — the defender should be calm and alert, not tense. Tension reduces reaction speed.',
        da: 'Samme som Kihon Kata Ichi. Gennemgå den mentale forberedelses aspekt — forsvareren bør være rolig og årvågen, ikke anspændt. Spænding reducerer reaktionshastighed.',
        ja: '基本形一と同じです。精神的な準備の側面を確認してください。防御者は緊張せず、落ち着きと警戒心を持っているべきです。緊張すると反応速度が低下します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: 'Attacker Middle Punch — Outside Step & Block',
        da: 'Angribers midterstød — ydre skridt og blok',
        ja: '攻撃者の中段突き — 外側へのさばきとブロック',
      },
      attacker: {
        en: 'Attacker steps forward in right forward stance and delivers a right middle punch (migi chudan oi zuki) targeting the defender\'s solar plexus.',
        da: 'Angriberen træder frem i højre fremadstilling og udfører et højre midterstød (migi chudan oi zuki) mod forsvararens solar plexus.',
        ja: '攻撃者は右前屈立ちで踏み込み、防御者の水月に向かって右中段追い突きを打ちます。',
      },
      defender: {
        en: 'Defender steps to the outside (45° diagonal), performs a right outside forearm block (migi soto uke) to redirect the punch outward while simultaneously rotating the torso.',
        da: 'Forsvareren træder til ydersiden (45° diagonal) og udfører et højre ydre underarmsblok (migi soto uke) for at omdirigere støddet udad, mens torso roteres simultant.',
        ja: '防御者は外側（45度の斜め）に踏み込み、胴体を同時に回転させながら右外受けを行って突きを外方向にそらします。',
      },
      technicalNotes: {
        en: 'The soto uke (outside block) redirects the punch by making contact on the outer edge of the attacker\'s forearm, not by stopping the force directly. Think of deflection, not collision.',
        da: 'Soto uke (ydre blok) omdirigerer støddet ved at gøre kontakt på yderkanten af angriberens underarm, ikke ved at stoppe kraften direkte. Tænk på afledning, ikke kollision.',
        ja: '外受けは、力を直接止めるのではなく、攻撃者の前腕の外縁に接触することで突きをそらします。衝突ではなく偏向として考えましょう。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Front Kick Counter (Mae Geri)',
        da: 'Forsparkskontra (Mae Geri)',
        ja: 'カウンター前蹴り',
      },
      attacker: {
        en: 'Attacker is in right forward stance, midsection open after the blocked punch.',
        da: 'Angriberen er i højre fremadstilling, med midtersektion åben efter det blokerede stød.',
        ja: '攻撃者は右前屈立ちで、受けられた突きの後に中段が開いています。',
      },
      defender: {
        en: 'Defender delivers a left front kick (hidari mae geri) to the attacker\'s midsection (chudan), using the instep or ball of foot. The supporting leg is slightly bent. The kicking knee rises first before the kick extends — this is the "snap kick" (keage) technique.',
        da: 'Forsvareren udfører et venstre fordspark (hidari mae geri) til angriberens midtersektion (chudan) med vristen eller fodballen. Det støttende ben er let bøjet. Det sparkende knæ løftes først, inden sparket strækkes ud — dette er "snap spark" (keage) teknikken.',
        ja: '防御者は甲または母指球を使って、攻撃者の中段（腹部）に左前蹴りを打ちます。支持脚は少し曲げます。蹴り脚の膝は蹴りを伸ばす前に最初に上げます。これが「蹴り上げ」技術です。',
      },
      technicalNotes: {
        en: 'The mae geri is a penetrating technique — it should push through the target, not just touch it. The hip drive behind the kick is what delivers power; without hip extension, the kick lacks penetration. Retract the kick immediately after impact to prevent the leg being grabbed.',
        da: 'Mae geri er en penetrerende teknik — den bør trænge igennem målet, ikke blot berøre det. Hoftefremdriften bag sparket er det, der leverer kraf; uden hofteforlængelse mangler sparket penetration. Træk sparket øjeblikkeligt tilbage efter impact for at forhindre, at benet bliver grebet.',
        ja: '前蹴りは貫通する技術です。ただ触れるだけでなく、目標を突き抜けるべきです。蹴りの背後にある腰の推進力が力を生み出します。腰の伸展がなければ、蹴りに貫通力がありません。脚を掴まれないよう、着地後すぐに蹴りを引き戻してください。',
      },
      schoolVariations: [
        {
          school: 'Competition-oriented schools',
          description: {
            en: 'The kick targets the floating ribs or liver (slightly lower and to the side) rather than the solar plexus, which is a higher-percentage knockdown target.',
            da: 'Sparket retter sig mod de svømmende ribben eller leveren (lidt lavere og til siden) frem for solar plexus, som er et mål med højere chance for nedtagning.',
            ja: '競技志向の流派では、水月よりも浮き肋骨や肝臓（少し低めで側面）を狙います。これはよりノックダウンしやすいターゲットです。',
          },
        },
      ],
    },
  ],
};
