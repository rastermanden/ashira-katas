import type { Kata } from '../types';

export const kihonKataIchi: Kata = {
  id: 'kihon-kata-ichi',
  japaneseCharacters: '基本形一',
  romaji: 'Kihon Kata Ichi',
  name: {
    en: 'Basic Form 1',
    da: 'Grundform 1',
    ja: '基本形一',
  },
  requiredForKyu: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'Kihon Kata Ichi is the foundational kata of Ashihara Karate. It introduces the core principles of movement, distance control (maai), and the circular evasion philosophy that defines Ashihara style. This kata establishes the attacker-defender relationship that runs through all Ashihara kata.',
    da: 'Kihon Kata Ichi er den grundlæggende kata i Ashihara Karate. Den introducerer kerneprincipperne for bevægelse, afstandskontrol (maai) og den cirkulære undvigelsesstrategi, som definerer Ashihara-stilen. Denne kata etablerer det angriber-forsvarer-forhold, der gennemgår alle Ashihara kata.',
    ja: '基本形一はアシハラ空手の基礎となる型です。動き、間合い（距離感）、そしてアシハラスタイルを定義する円形の回避哲学の核心原則を紹介します。この型はすべてのアシハラ型を通じて流れる攻撃者と防御者の関係を確立します。',
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
        en: 'Attacker stands in natural stance (shizen-tai) facing the defender, at approximately one full step distance.',
        da: 'Angriberen står i naturlig stilling (shizen-tai) over for forsvareren i en afstand af ca. ét skridt.',
        ja: '攻撃者は自然体で防御者と向き合い、約一歩の距離を保って立ちます。',
      },
      defender: {
        en: 'Defender assumes the ready position (yoi): feet shoulder-width apart, weight evenly distributed, hands relaxed at sides. Eyes maintain soft focus (enzan-no-metsuke) on the attacker.',
        da: 'Forsvareren indtager startpositionen (yoi): Fødder i skulderbredde, vægten jævnt fordelt, hænder afslappet langs siden. Øjnene fastholder et blødt fokus (enzan-no-metsuke) på angriberen.',
        ja: '防御者は用意の姿勢をとります：両足を肩幅に開き、体重を均等に分散し、手を体の横でリラックスさせます。目は攻撃者に遠山の目付けを向けます。',
      },
      technicalNotes: {
        en: 'The soft gaze (enzan-no-metsuke) — literally "mountain-gazing eyes" — means looking at the attacker\'s entire body rather than one specific point. This allows peripheral vision to detect movement from any angle. Tension in the shoulders is a common beginner mistake; let them drop naturally.',
        da: 'Det bløde blik (enzan-no-metsuke) — bogstaveligt "bjergskuende øjne" — betyder at se på angriberens hele krop i stedet for ét bestemt punkt. Dette giver perifert syn til at opdage bevægelse fra enhver vinkel. Spænding i skuldrene er en almindelig begynderfejl; lad dem falde naturligt.',
        ja: '遠山の目付けは「遠くの山を眺める目」という意味で、特定の一点ではなく攻撃者の全身を見ることを指します。これにより周辺視野を使って、あらゆる方向からの動きを察知できます。肩の力みは初心者によくある誤りです。自然に落とすようにしましょう。',
      },
      schoolVariations: [
        {
          school: 'NFKO (Denmark)',
          description: {
            en: 'Hands are held slightly forward from the thighs, with a light clenching of the fists to signal readiness.',
            da: 'Hænderne holdes let foran lårene med let sammenklemte næver for at signalere parathed.',
            ja: 'NKFOデンマークでは、手を太ももの少し前に保ち、準備を示すために軽く握りこぶしを作ります。',
          },
        },
        {
          school: 'Ashihara International',
          description: {
            en: 'Hands remain open and relaxed, symbolizing an open approach before conflict begins.',
            da: 'Hænderne forbliver åbne og afslappede, som symbol på en åben tilgang inden konflikten begynder.',
            ja: 'アシハラインターナショナルでは、手を開いたままリラックスさせておきます。これは戦いが始まる前の開かれた姿勢を象徴します。',
          },
        },
      ],
    },
    {
      stepNumber: 2,
      name: {
        en: 'Step Forward & Right Lunge Punch (Oi Zuki)',
        da: 'Skridt frem og højre fremstødsstød (Oi Zuki)',
        ja: '前進右追い突き',
      },
      attacker: {
        en: 'Attacker steps forward with the right foot into right forward stance (migi zenkutsu-dachi) and delivers a right lunge punch (migi oi zuki) targeting the defender\'s face (jodan).',
        da: 'Angriberen træder frem med højre fod i højre fremadstilling (migi zenkutsu-dachi) og udfører et højre fremstødsstød (migi oi zuki) mod forsvararens ansigt (jodan).',
        ja: '攻撃者は右足を踏み出し、右前屈立ちになり、防御者の顔（上段）に向かって右追い突きを打ちます。',
      },
      defender: {
        en: 'Defender steps diagonally forward and to the outside (45°) with the left foot, rotating the hips to face the attacker\'s side. Simultaneously performs a left rising block (hidari age-uke) to redirect the punch upward and away.',
        da: 'Forsvareren træder diagonalt frem og ud til siden (45°) med venstre fod og roterer hofterne for at vende mod angriberens side. Udfører samtidigt et venstre opadgående blok (hidari age-uke) for at omdirigere støddet opad og væk.',
        ja: '防御者は左足を斜め前方外側（45度）に踏み出し、攻撃者の側面を向くように腰を回転させます。同時に左上げ受けを行い、突きを上方向にそらします。',
      },
      technicalNotes: {
        en: 'The diagonal step is central to Ashihara\'s "sabaki" (捌き) movement philosophy — moving off the line of attack rather than blocking head-on. The angle should be approximately 45°. The block and step must be simultaneous; a defender who steps first and then blocks has broken the continuous motion.',
        da: 'Det diagonale skridt er centralt for Ashiharas "sabaki" (捌き) bevægelsesfilosofi — at bevæge sig væk fra angrebslinjen i stedet for at blokere direkte. Vinklen bør være ca. 45°. Blokken og skridt skal ske simultant; en forsvarer der træder først og derefter blokerer har brudt den kontinuerlige bevægelse.',
        ja: 'この斜め踏み込みはアシハラの「捌き」の動きの哲学の核心です。攻撃の線上に正面から対峙するのではなく、線から外れて動きます。角度は約45度が適切です。受けと踏み込みは同時に行う必要があります。先に踏み込んでから受けると、連続した動きが途切れます。',
      },
      schoolVariations: [
        {
          school: 'Traditional interpretation',
          description: {
            en: 'Some schools teach the age-uke with the arm at approximately 45° from the body; others prefer a nearly vertical forearm.',
            da: 'Nogle skoler underviser i age-uke med armen i ca. 45° fra kroppen; andre foretrækker en næsten lodret underarm.',
            ja: '伝統的な解釈では、一部の流派が上げ受けの腕を体から約45度の角度に教えますが、ほぼ垂直の前腕を好む流派もあります。',
          },
        },
      ],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Counter — Right Middle Punch (Chudan Gyaku Zuki)',
        da: 'Kontra — Højre midterstød (Chudan Gyaku Zuki)',
        ja: 'カウンター — 右中段逆突き',
      },
      attacker: {
        en: 'Attacker is now in right forward stance after the lunge punch, right side exposed to the defender who has moved to the outside.',
        da: 'Angriberen er nu i højre fremadstilling efter fremstødsstøddet, med højre side eksponeret mod forsvareren, der er flyttet til siden.',
        ja: '攻撃者は追い突きの後、右前屈立ちに入り、外側に移動した防御者に対して右側面が露出しています。',
      },
      defender: {
        en: 'From the outside position, defender delivers a right reverse punch (migi gyaku zuki) to the attacker\'s mid-section (chudan — solar plexus level), driving from the hips with full hip rotation.',
        da: 'Fra ydersiden leverer forsvareren et højre omvendt stød (migi gyaku zuki) til angriberens midtersektion (chudan — solar plexus-niveau) med fuld hofterotation drevet fra hofterne.',
        ja: '外側の位置から、防御者は完全な腰の回転を使って、攻撃者の中段（みぞおちの高さ）に右逆突きを打ちます。',
      },
      technicalNotes: {
        en: 'Hip rotation (koshi no kaiten) generates the power of the reverse punch. The punching fist should finish at the center line of the defender\'s body with the elbow slightly bent — not fully extended — to preserve power and protect the elbow joint. The non-punching hand pulls back to the hip (hikite) simultaneously.',
        da: 'Hofterotation (koshi no kaiten) genererer kraften i det omvendte stød. Den slående næve bør afslutte på midterlinjen af forsvararens krop med albuen let bøjet — ikke fuldt strakt — for at bevare kraft og beskytte albueled. Den ikke-slående hånd trækkes samtidigt tilbage til hoften (hikite).',
        ja: '腰の回転（腰の回転）が逆突きの力を生み出します。突きこぶしは肘を少し曲げた状態で防御者の中心線に終点を持つべきです。完全に伸ばすのではなく、力を保ちながら肘関節を守ります。非打撃側の手は同時に腰に引き（引き手）ます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: 'Sweep & Throw (Ashi Barai to Nage)',
        da: 'Fej og kast (Ashi Barai til Nage)',
        ja: '足払いから投げ',
      },
      attacker: {
        en: 'Attacker is in right forward stance, exposed after the initial exchange. No specific action — attacker is in a compromised position.',
        da: 'Angriberen er i højre fremadstilling, eksponeret efter den indledende udveksling. Ingen specifik handling — angriberen er i en kompromitteret position.',
        ja: '攻撃者は右前屈立ちで、最初の打ち合いの後に露出しています。特定の動作はありません — 攻撃者は不利な状態にあります。',
      },
      defender: {
        en: 'Defender sweeps the attacker\'s right lead leg (migi ashi barai) inward with the left foot while simultaneously pulling the attacker\'s right arm forward and downward. This unbalances the attacker forward. Follow immediately by guiding the attacker down with a hip throw (o goshi) or a controlled push to the mat.',
        da: 'Forsvareren fejer angriberens højre forfod (migi ashi barai) indad med venstre fod, mens angriberens højre arm trækkes fremad og nedad. Dette ubalancerer angriberen fremad. Følg straks op med at guide angriberen ned med et hoftkast (o goshi) eller et kontrolleret skub til måtten.',
        ja: '防御者は左足で攻撃者の右前足を内側に払い（右足払い）、同時に攻撃者の右腕を前方と下方に引きます。これにより攻撃者を前方にバランスを崩させます。直ちに大腰（o goshi）や制御されたマットへの押し込みで攻撃者を地面に誘導します。',
      },
      technicalNotes: {
        en: 'Timing is critical: the sweep and arm pull must happen at the same instant. Sweeping without the arm control allows the attacker to step through and regain balance. The sweep targets the heel — not the ankle — to avoid joint injury. In competition application, this is often done as a "trip" rather than a full sweep.',
        da: 'Timing er afgørende: fejningen og armtrækket skal ske på præcis samme tidspunkt. En fejning uden armkontrol giver angriberen mulighed for at træde igennem og genvinde balance. Fejningen retter sig mod hælen — ikke anklen — for at undgå ledskader. I konkurrencesammenhæng udføres dette ofte som et "ben" frem for en fuld fejning.',
        ja: 'タイミングが重要です：払いと腕の引きは同時に行わなければなりません。腕のコントロールなしに払うと、攻撃者が踏み込んでバランスを取り戻せます。払いは足首ではなく踵を狙います。足首を狙うと関節を痛める可能性があります。競技の場面では、完全な払いではなく「引っかけ」として行われることがよくあります。',
      },
      schoolVariations: [
        {
          school: 'Some Ashihara branches',
          description: {
            en: 'Instead of a hip throw, the defender uses a forward leg reap (ko soto gari) — hooking the attacker\'s right heel from outside and pushing the shoulder simultaneously.',
            da: 'I stedet for et hoftkast bruger forsvareren en fremadgående benhouge (ko soto gari) — hager om angriberens højre hæl udefra og skubber til skulderen simultant.',
            ja: '一部のアシハラ支流では、大腰の代わりに小外刈りを使います。攻撃者の右踵を外側からかけながら、同時に肩を押します。',
          },
        },
      ],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Ground Control (Osae)',
        da: 'Nedkontrol (Osae)',
        ja: '押さえ',
      },
      attacker: {
        en: 'Attacker is on the ground after the throw, initially trying to recover.',
        da: 'Angriberen er på gulvet efter kastet og forsøger i første omgang at komme sig.',
        ja: '攻撃者は投げた後に地面にいて、最初は立ち直ろうとしています。',
      },
      defender: {
        en: 'Defender follows the attacker to the ground maintaining control of the right arm (armbar position — juji gatame). Apply controlled downward pressure to demonstrate dominance. The attacker taps (matte) to signal submission.',
        da: 'Forsvareren følger angriberen til gulvet og opretholder kontrol over højre arm (armlås-position — juji gatame). Anvend kontrolleret nedadgående tryk for at demonstrere dominans. Angriberen banker (matte) for at signalere overgivelse.',
        ja: '防御者は攻撃者を地面まで追い、右腕の制御を維持します（腕十字（juji gatame）の姿勢）。支配を示すために制御された下方への圧力をかけます。攻撃者は参ったのサインとしてタップ（まって）します。',
      },
      technicalNotes: {
        en: 'The arm control must transition smoothly from the throw without releasing the grip. Ashihara\'s newaza (ground techniques) are less common in other karate styles; this integration of stand-up to ground represents a defining characteristic of the style. Keep hips low throughout ground work.',
        da: 'Armkontrollen skal overgå jævnt fra kastet uden at slippe grebet. Ashiharas newaza (jordteknikker) er mindre almindelige i andre karate-stilarter; denne integration af stående til jordbundet kamp repræsenterer et definerende kendetegn ved stilen. Hold hofterne lave under hele jordarbejdet.',
        ja: '腕のコントロールは投げからグリップを離すことなく滑らかに移行する必要があります。アシハラの寝技は他の空手スタイルでは一般的でありません。立ち技から寝技への統合はこのスタイルの定義的な特徴です。寝技を通じて腰を低く保ちましょう。',
      },
      schoolVariations: [
        {
          school: 'Newaza-focused schools',
          description: {
            en: 'Some schools extend this step into a longer ground sequence including positional transitions (kami shiho gatame, yoko shiho gatame) before the armbar finish.',
            da: 'Nogle skoler udvider dette trin til en længere jordsekvens, der inkluderer positionelle overgange (kami shiho gatame, yoko shiho gatame) inden armslåsafslutningen.',
            ja: '一部の流派では、このステップを腕十字の終了前に姿勢の移行（上四方固め、横四方固め）を含む長い寝技の連続に発展させます。',
          },
        },
      ],
    },
  ],
};
