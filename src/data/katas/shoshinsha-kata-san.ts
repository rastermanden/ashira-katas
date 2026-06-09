import type { Kata } from '../types';

export const shoshinshaKataSan: Kata = {
  id: 'shoshinsha-kata-san',
  japaneseCharacters: '初心者の型 三',
  romaji: 'Shoshinsha no Kata — Sono San',
  name: {
    en: 'Beginner\'s Kata 3',
    da: 'Begynderens Kata 3',
    ja: '初心者の型 三',
  },
  requiredForKyu: [6, 5, 4, 3, 2, 1],
  description: {
    en: 'Shoshinsha no Kata are the beginner\'s solo forms of Ashihara Karate, performed alone against an imagined opponent. This third form teaches the basic block-and-counter sabaki sequences, emphasising kick-against-kick exchanges with joint kicks, inner-thigh kicks, spinning roundhouse kicks, and a closing throw. It rounds out the timing and distance foundation built across the beginner forms.',
    da: 'Shoshinsha no Kata er Ashihara Karates begynder-soloformer, der udføres alene mod en forestillet modstander. Denne tredje form lærer de grundlæggende blok-og-kontra sabaki-sekvenser og lægger vægt på spark-mod-spark-udvekslinger med ledspark, indvendige lårspark, drejende cirkelspark og et afsluttende kast. Den fuldender det fundament af timing og afstand, der bygges gennem begynderformerne.',
    ja: '初心者の型はアシハラ空手の初心者用の単独形で、想定した相手に対して一人で行います。この三番目の型は基本的な受けと反撃の捌きの連続を教え、関節蹴り、内股蹴り、後ろ回し蹴り、締めの投げを用いた蹴り対蹴りのやり取りを重視します。初心者形を通じて築いたタイミングと間合いの基礎を仕上げます。',
  },
  youtubeLinks: [],
  steps: [
    {
      stepNumber: 1,
      name: {
        en: '1. Fighting stance (Kumite no kamae)',
        da: '1. Kampstilling (Kumite no kamae)',
        ja: '1. 組手の構え',
      },
      attacker: {
        en: 'No committed attack: the imagined opponent simply faces off in fighting stance.',
        da: 'Intet egentligt angreb: den forestillede modstander står blot over for dig i kampstilling.',
        ja: '本格的な攻撃はありません。想定した相手は組手の構えで対峙しているだけです。',
      },
      defender: {
        en: 'The practitioner assumes the fighting stance (kumite no kamae), ready to respond.',
        da: 'Udøveren indtager kampstillingen (kumite no kamae), klar til at reagere.',
        ja: '修行者は組手の構えをとり、対応する準備をします。',
      },
      technicalNotes: {
        en: 'Source: 1. Kumite no kamae. The kamae sets weight distribution and guard before any exchange; keep the hands up and the gaze on the imagined opponent.',
        da: 'Source: 1. Kumite no kamae. Kamae fastlægger vægtfordeling og garde inden enhver udveksling; hold hænderne oppe og blikket rettet mod den forestillede modstander.',
        ja: 'Source: 1. Kumite no kamae. 構えはやり取りの前に体重配分とガードを定めます。手を上げ、想定した相手に視線を向け続けます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: '2. Defence vs. right mae-geri',
        da: '2. Forsvar mod højre mae-geri',
        ja: '2. 右前蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right front kick (migi mae-geri).',
        da: 'Den forestillede modstander angriber med et højre frontspark (migi mae-geri).',
        ja: '想定した相手が右前蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left outside block (hidari soto-uke), then counter with a right upper-level roundhouse kick (migi jodan mawashi-geri) and a right middle-level knee strike (migi chudan hiza-geri).',
        da: 'Træd tilbage, udfør en venstre udadgående blok (hidari soto-uke), og kontra derefter med et højre cirkelspark mod hovedhøjde (migi jodan mawashi-geri) og et højre knæstød mod mellemhøjde (migi chudan hiza-geri).',
        ja: '後ろに下がり、左外受けを行い、右上段回し蹴り、右中段膝蹴りで反撃します。',
      },
      technicalNotes: {
        en: 'Source: 2. Migi mae-geri: Step back, hidari soto-uke, migi jodan mawashi-geri, migi chudan hiza-geri. The soto-uke deflects the kicking leg; the high mawashi-geri draws the guard up so the same-side hiza-geri can drive in close once distance is closed.',
        da: 'Source: 2. Migi mae-geri: Step back, hidari soto-uke, migi jodan mawashi-geri, migi chudan hiza-geri. Soto-uke afleder sparkebenet; det høje mawashi-geri trækker garden op, så hiza-geri på samme side kan drive ind tæt på, når afstanden er lukket.',
        ja: 'Source: 2. Migi mae-geri: Step back, hidari soto-uke, migi jodan mawashi-geri, migi chudan hiza-geri. 外受けで蹴り足をそらします。上段回し蹴りでガードを上げさせ、間合いを詰めてから同じ側の膝蹴りを懐に入れます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Defence vs. left yoko-geri',
        da: '3. Forsvar mod venstre yoko-geri',
        ja: '3. 左横蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left side kick (hidari yoko-geri).',
        da: 'Den forestillede modstander angriber med et venstre sidespark (hidari yoko-geri).',
        ja: '想定した相手が左横蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left low sweeping block (hidari gedan-barai), then a left joint (knee) kick (hidari kansetsu-geri), followed by a right upper-level roundhouse kick (migi jodan mawashi-geri); the kicking foot lands forward (keri-ashi mae), then turn 180°.',
        da: 'Træd tilbage, udfør en venstre lav fejeblok (hidari gedan-barai), derefter et venstre ledspark (hidari kansetsu-geri), efterfulgt af et højre cirkelspark mod hovedhøjde (migi jodan mawashi-geri); sparkefoden lander fremme (keri-ashi mae), og vend så 180°.',
        ja: '後ろに下がり、左下段払いを行い、左関節蹴り、続けて右上段回し蹴りを放ちます。蹴り足は前に着地し（蹴り足前）、180度転身します。',
      },
      technicalNotes: {
        en: 'Source: 3. Hidari yoko-geri: Step back, hidari gedan-barai, hidari kansetsu-geri, migi jodan mawashi-geri, keri ashi mae, turn (180). The gedan-barai sweeps the side kick down; the kansetsu-geri attacks the supporting leg low before the jodan mawashi-geri comes high, landing forward into the 180° turn.',
        da: 'Source: 3. Hidari yoko-geri: Step back, hidari gedan-barai, hidari kansetsu-geri, migi jodan mawashi-geri, keri ashi mae, turn (180). Gedan-barai fejer sidesparket ned; kansetsu-geri angriber støttebenet lavt, før jodan mawashi-geri kommer højt og lander fremme ind i 180°-vendingen.',
        ja: 'Source: 3. Hidari yoko-geri: Step back, hidari gedan-barai, hidari kansetsu-geri, migi jodan mawashi-geri, keri ashi mae, turn (180). 下段払いで横蹴りを下方へ払います。関節蹴りで軸足を低く攻めてから上段回し蹴りを高く放ち、前に着地して180度転身します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Defence vs. left mae-geri',
        da: '4. Forsvar mod venstre mae-geri',
        ja: '4. 左前蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left front kick (hidari mae-geri).',
        da: 'Den forestillede modstander angriber med et venstre frontspark (hidari mae-geri).',
        ja: '想定した相手が左前蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left low sweeping block (hidari gedan-barai), step forward into southpaw stance (migi okuri-ashi, South paw stance), then a left middle-level knee strike (hidari chudan hiza-geri) and a left upper-level roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Træd tilbage, udfør en venstre lav fejeblok (hidari gedan-barai), træd frem til southpaw-stilling (migi okuri-ashi, South paw-stilling), derefter et venstre knæstød mod mellemhøjde (hidari chudan hiza-geri) og et venstre cirkelspark mod hovedhøjde (hidari jodan mawashi-geri).',
        ja: '後ろに下がり、左下段払いを行い、右で踏み込んでサウスポーの構えに入り（送り足、サウスポー）、左中段膝蹴り、左上段回し蹴りを放ちます。',
      },
      technicalNotes: {
        en: 'Source: 4. Hidari mae-geri: Step back, hidari gedan-barai, migi okuri ashi (South paw stance), hidari chudan hiza-geri, hidari jodan mawashi-geri. The gedan-barai clears the kick; the okuri-ashi into southpaw closes the gap for the hiza-geri, then the same-side leg fires the jodan mawashi-geri off that lead.',
        da: 'Source: 4. Hidari mae-geri: Step back, hidari gedan-barai, migi okuri ashi (South paw stance), hidari chudan hiza-geri, hidari jodan mawashi-geri. Gedan-barai rydder sparket; okuri-ashi ind i southpaw lukker afstanden til hiza-geri, hvorefter benet på samme side affyrer jodan mawashi-geri fra den føring.',
        ja: 'Source: 4. Hidari mae-geri: Step back, hidari gedan-barai, migi okuri ashi (South paw stance), hidari chudan hiza-geri, hidari jodan mawashi-geri. 下段払いで蹴りを払います。送り足でサウスポーに入って間合いを詰め、膝蹴りを放ち、その前足側の脚から上段回し蹴りを放ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Defence vs. right yoko-geri',
        da: '5. Forsvar mod højre yoko-geri',
        ja: '5. 右横蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right side kick (migi yoko-geri).',
        da: 'Den forestillede modstander angriber med et højre sidespark (migi yoko-geri).',
        ja: '想定した相手が右横蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left outside block (hidari soto-uke), then a left joint (knee) kick (hidari kansetsu-geri), followed by a right upper-level roundhouse kick (migi jodan mawashi-geri), then a step back (hiki-ashi) and turn 90°.',
        da: 'Træd tilbage, udfør en venstre udadgående blok (hidari soto-uke), derefter et venstre ledspark (hidari kansetsu-geri), efterfulgt af et højre cirkelspark mod hovedhøjde (migi jodan mawashi-geri), derefter et skridt tilbage (hiki-ashi) og vend 90°.',
        ja: '後ろに下がり、左外受けを行い、左関節蹴り、続けて右上段回し蹴りを放ち、引き足で下がり、90度転身します。',
      },
      technicalNotes: {
        en: 'Source: 5. Migi yoko-geri: Step back, hidari soto-uke, hidari kansetsu-geri, migi jodan mawashi-geri, hiki ashi turn (90). The soto-uke deflects the side kick; the kansetsu-geri attacks low before the jodan mawashi-geri goes high, then the hiki-ashi carries the 90° turn back to safe distance.',
        da: 'Source: 5. Migi yoko-geri: Step back, hidari soto-uke, hidari kansetsu-geri, migi jodan mawashi-geri, hiki ashi turn (90). Soto-uke afleder sidesparket; kansetsu-geri angriber lavt, før jodan mawashi-geri går højt, hvorefter hiki-ashi bærer 90°-vendingen tilbage til sikker afstand.',
        ja: 'Source: 5. Migi yoko-geri: Step back, hidari soto-uke, hidari kansetsu-geri, migi jodan mawashi-geri, hiki ashi turn (90). 外受けで横蹴りをそらします。関節蹴りで低く攻めてから上段回し蹴りを高く放ち、引き足で90度転身して安全な間合いに戻ります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Defence vs. right jodan tsuki',
        da: '6. Forsvar mod højre jodan tsuki',
        ja: '6. 右上段突きへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right upper-level punch (migi jodan tsuki).',
        da: 'Den forestillede modstander angriber med et højre stød mod hovedhøjde (migi jodan tsuki).',
        ja: '想定した相手が右上段突きで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left outside block (hidari soto-uke), then a right inner-thigh kick (migi uchimomo-geri), a circular block (mawashi-uke), and a right middle-level roundhouse kick (migi chudan mawashi-geri).',
        da: 'Træd tilbage, udfør en venstre udadgående blok (hidari soto-uke), derefter et højre indvendigt lårspark (migi uchimomo-geri), en cirkulær blok (mawashi-uke) og et højre cirkelspark mod mellemhøjde (migi chudan mawashi-geri).',
        ja: '後ろに下がり、左外受けを行い、右内股蹴り、回し受け、右中段回し蹴りを放ちます。',
      },
      technicalNotes: {
        en: 'Source: 6. Migi jodan tsuki: Step back, hidari soto-uke, migi uchimomo-geri, (mawashi-uke), migi chudan mawashi-geri. The soto-uke deflects the punch; the uchimomo-geri attacks the inner thigh to unbalance, then the mawashi-uke controls the line before the chudan mawashi-geri lands.',
        da: 'Source: 6. Migi jodan tsuki: Step back, hidari soto-uke, migi uchimomo-geri, (mawashi-uke), migi chudan mawashi-geri. Soto-uke afleder støddet; uchimomo-geri angriber det indvendige lår for at ubalancere, hvorefter mawashi-uke kontrollerer linjen, før chudan mawashi-geri lander.',
        ja: 'Source: 6. Migi jodan tsuki: Step back, hidari soto-uke, migi uchimomo-geri, (mawashi-uke), migi chudan mawashi-geri. 外受けで突きをそらします。内股蹴りで内ももを攻めて崩し、回し受けで線を制してから中段回し蹴りを当てます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Defence vs. left jodan tsuki',
        da: '7. Forsvar mod venstre jodan tsuki',
        ja: '7. 左上段突きへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left upper-level punch (hidari jodan tsuki).',
        da: 'Den forestillede modstander angriber med et venstre stød mod hovedhøjde (hidari jodan tsuki).',
        ja: '想定した相手が左上段突きで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left inner knife-hand block (hidari uchi-uke shuto), then a right low-level roundhouse kick (migi gedan mawashi-geri), followed by a left upper-level roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Træd tilbage, udfør en venstre indadgående knivhåndsblok (hidari uchi-uke shuto), derefter et højre cirkelspark mod lav højde (migi gedan mawashi-geri), efterfulgt af et venstre cirkelspark mod hovedhøjde (hidari jodan mawashi-geri).',
        ja: '後ろに下がり、左内受け手刀を行い、右下段回し蹴り、続けて左上段回し蹴りを放ちます。',
      },
      technicalNotes: {
        en: 'Source: 7. Hidari jodan tsuki: Step back, hidari uchi-uke shuto, migi gedan mawashi-geri, hidari jodan mawashi-geri. The uchi-uke shuto deflects across the body; the low gedan mawashi-geri draws the guard down so the hidari jodan mawashi-geri can arc over the top.',
        da: 'Source: 7. Hidari jodan tsuki: Step back, hidari uchi-uke shuto, migi gedan mawashi-geri, hidari jodan mawashi-geri. Uchi-uke shuto afleder på tværs af kroppen; det lave gedan mawashi-geri trækker garden ned, så hidari jodan mawashi-geri kan bue over toppen.',
        ja: 'Source: 7. Hidari jodan tsuki: Step back, hidari uchi-uke shuto, migi gedan mawashi-geri, hidari jodan mawashi-geri. 内受け手刀で体を横切ってそらします。下段回し蹴りでガードを下げさせ、左上段回し蹴りを上から被せます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Defence vs. right jodan mawashi-geri',
        da: '8. Forsvar mod højre jodan mawashi-geri',
        ja: '8. 右上段回し蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right upper-level roundhouse kick (migi jodan mawashi-geri).',
        da: 'Den forestillede modstander angriber med et højre cirkelspark mod hovedhøjde (migi jodan mawashi-geri).',
        ja: '想定した相手が右上段回し蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a right inner-thigh kick (migi uchimomo-geri), then a left upper-level spinning back roundhouse kick (hidari jodan ushiro mawashi-geri); the kicking foot lands back (keri-ashi ushiro), then turn 180°.',
        da: 'Træd tilbage, udfør et højre indvendigt lårspark (migi uchimomo-geri), derefter et venstre drejende baglæns cirkelspark mod hovedhøjde (hidari jodan ushiro mawashi-geri); sparkefoden lander bagved (keri-ashi ushiro), og vend så 180°.',
        ja: '後ろに下がり、右内股蹴りを行い、続けて左上段後ろ回し蹴りを放ちます。蹴り足は後ろに着地し（蹴り足後ろ）、180度転身します。',
      },
      technicalNotes: {
        en: 'Source: 8. Migi jodan mawashi-geri: Step back, migi uchimomo-geri, hidari jodan ushiro mawashi geri, keri ashi ushiro, turn (180). The uchimomo-geri checks and unbalances; the spinning ushiro mawashi-geri carries the rotation high, and recovering the foot to the rear sets the 180° turn.',
        da: 'Source: 8. Migi jodan mawashi-geri: Step back, migi uchimomo-geri, hidari jodan ushiro mawashi geri, keri ashi ushiro, turn (180). Uchimomo-geri standser og ubalancerer; det drejende ushiro mawashi-geri bærer rotationen højt, og at trække foden bagud klargør 180°-vendingen.',
        ja: 'Source: 8. Migi jodan mawashi-geri: Step back, migi uchimomo-geri, hidari jodan ushiro mawashi geri, keri ashi ushiro, turn (180). 内股蹴りで止めて崩します。後ろ回し蹴りで回転を高く運び、蹴り足を後ろに戻して180度の転身を整えます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Defence vs. left jodan mawashi-geri',
        da: '9. Forsvar mod venstre jodan mawashi-geri',
        ja: '9. 左上段回し蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left upper-level roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Den forestillede modstander angriber med et venstre cirkelspark mod hovedhøjde (hidari jodan mawashi-geri).',
        ja: '想定した相手が左上段回し蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a right low-level kick (migi gedan geri), then a left low-level kick (hidari gedan geri), step back (hiki-ashi) turning 180°, step into the throw (step no nage) and settle into horse stance (kiba-dachi), holding the head onto the thigh.',
        da: 'Træd tilbage, udfør et højre spark mod lav højde (migi gedan geri), derefter et venstre spark mod lav højde (hidari gedan geri), træk tilbage (hiki-ashi) og vend 180°, træd ind i kastet (step no nage) og fald til ro i hesteståelse (kiba-dachi), mens du holder hovedet mod låret.',
        ja: '後ろに下がり、右下段蹴り、左下段蹴りを行い、引き足で下がりながら180度転身し、投げに踏み込み（ステップの投げ）、騎馬立ちに収まり、頭を太ももに押さえます。',
      },
      technicalNotes: {
        en: 'Source: 9. Hidari jodan mawashi-geri: Step back, migi gedan geri, hidari gedan geri, hiki ashi (180), (step no nage) kiba dachi. (Hold the head on to the thigh) The two gedan geri attack the low line in succession; the hiki-ashi with 180° turn feeds the stepping throw, finishing in a stable kiba-dachi with the head pinned to the thigh.',
        da: 'Source: 9. Hidari jodan mawashi-geri: Step back, migi gedan geri, hidari gedan geri, hiki ashi (180), (step no nage) kiba dachi. (Hold the head on to the thigh) De to gedan geri angriber den lave linje efter hinanden; hiki-ashi med 180°-vending fører ind i trinkastet og afslutter i en stabil kiba-dachi med hovedet holdt mod låret.',
        ja: 'Source: 9. Hidari jodan mawashi-geri: Step back, migi gedan geri, hidari gedan geri, hiki ashi (180), (step no nage) kiba dachi. (Hold the head on to the thigh) 二つの下段蹴りで下段を連続して攻めます。180度転身を伴う引き足が踏み込みの投げにつながり、頭を太ももに押さえたまま安定した騎馬立ちで終わります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: '10. Right downward elbow strike, return to fighting stance',
        da: '10. Højre nedadgående albuestød, tilbage til kampstilling',
        ja: '10. 右肘落とし打ち、組手の構えに戻る',
      },
      attacker: {
        en: 'No new committed attack: the sequence closes and the imagined opponent is no longer pressing.',
        da: 'Intet nyt egentligt angreb: sekvensen afsluttes, og den forestillede modstander presser ikke længere.',
        ja: '新たな本格的な攻撃はありません。一連の動きが終わり、想定した相手はもう攻めてきません。',
      },
      defender: {
        en: 'Deliver a final right downward elbow strike (migi hiji oroshi uchi), then return to the fighting stance (kumite no kamae).',
        da: 'Lever et afsluttende højre nedadgående albuestød (migi hiji oroshi uchi), og vend derefter tilbage til kampstillingen (kumite no kamae).',
        ja: '最後に右肘落とし打ちを放ち、組手の構えに戻ります。',
      },
      technicalNotes: {
        en: 'Source: 10. Migi hiji oroshi uchi, kumite no kamae. The downward elbow strike drops body weight into the finish from above; resettle into kumite no kamae with composure to close the form.',
        da: 'Source: 10. Migi hiji oroshi uchi, kumite no kamae. Det nedadgående albuestød lader kropsvægten falde ind i afslutningen ovenfra; fald tilbage i kumite no kamae med ro for at lukke formen.',
        ja: 'Source: 10. Migi hiji oroshi uchi, kumite no kamae. 肘落とし打ちは体重を上から締めに落とし込みます。落ち着いて組手の構えに戻り、型を締めくくります。',
      },
      schoolVariations: [],
    },
  ],
};
