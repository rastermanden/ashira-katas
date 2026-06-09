import type { Kata } from '../types';

export const shoshinshaKataIchi: Kata = {
  id: 'shoshinsha-kata-ichi',
  japaneseCharacters: '初心者の型 一',
  romaji: 'Shoshinsha no Kata — Sono Ichi',
  name: {
    en: 'Beginner\'s Kata 1',
    da: 'Begynderens Kata 1',
    ja: '初心者の型 一',
  },
  description: {
    en: 'Shoshinsha no Kata are the beginner\'s solo forms of Ashihara Karate, performed alone against an imagined opponent. This first form teaches the basic block-and-counter sabaki sequences, pairing stepping evasions with blocks, punches, and roundhouse kicks. It builds the foundation of timing and distance that the later beginner forms develop.',
    da: 'Shoshinsha no Kata er Ashihara Karates begynder-soloformer, der udføres alene mod en forestillet modstander. Denne første form lærer de grundlæggende blok-og-kontra sabaki-sekvenser og kombinerer trinundvigelser med blokke, stød og cirkelspark. Den bygger det fundament af timing og afstand, som de senere begynderformer videreudvikler.',
    ja: '初心者の型はアシハラ空手の初心者用の単独形で、想定した相手に対して一人で行います。この最初の型は基本的な受けと反撃の捌きの連続を教え、踏み込みの回避と受け、突き、回し蹴りを組み合わせます。後の初心者形が発展させるタイミングと間合いの基礎を築きます。',
  },
  youtubeLinks: [
    { label: 'Shoshinsha no Kata Sono Ichi — Sensei Mazz', url: 'https://youtu.be/npTj8t4i8wU' },
    { label: 'Shoshinsha no Kata Sono Ichi (attacker) — Sensei Mazz', url: 'https://youtu.be/FI3STJZynlU' },
  ],
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
        en: '2. Defence vs. right chudan tsuki',
        da: '2. Forsvar mod højre chudan tsuki',
        ja: '2. 右中段突きへの対応',
      },
      attacker: {
        en: 'The imagined opponent drives in with a right middle-level punch (migi chudan tsuki).',
        da: 'Den forestillede modstander stormer ind med et højre stød mod mellemhøjde (migi chudan tsuki).',
        ja: '想定した相手が右中段突きで踏み込んできます。',
      },
      defender: {
        en: 'Step back, perform a left middle-level outside block (hidari chudan soto-uke), then counter with a right middle-level punch (migi chudan tsuki).',
        da: 'Træd tilbage, udfør en venstre udadgående blok mod mellemhøjde (hidari chudan soto-uke), og kontra derefter med et højre stød mod mellemhøjde (migi chudan tsuki).',
        ja: '後ろに下がり、左中段外受けを行い、右中段突きで反撃します。',
      },
      technicalNotes: {
        en: 'Source: 2. Migi chudan tsuki: Step back, hidari chudan soto-uke, migi chudan tsuki. The step back creates the distance for the soto-uke to deflect the line of attack; let the counter punch flow immediately off the block.',
        da: 'Source: 2. Migi chudan tsuki: Step back, hidari chudan soto-uke, migi chudan tsuki. Skridtet tilbage skaber afstanden, så soto-uke kan aflede angrebslinjen; lad kontrastøddet flyde umiddelbart efter blokken.',
        ja: 'Source: 2. Migi chudan tsuki: Step back, hidari chudan soto-uke, migi chudan tsuki. 後退で外受けが攻撃線をそらす間合いを作ります。受けから反撃の突きを途切れなく繋げます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Defence vs. right jodan tsuki',
        da: '3. Forsvar mod højre jodan tsuki',
        ja: '3. 右上段突きへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right upper-level punch (migi jodan tsuki).',
        da: 'Den forestillede modstander angriber med et højre stød mod hovedhøjde (migi jodan tsuki).',
        ja: '想定した相手が右上段突きで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left upper-level outside block (hidari jodan soto-uke), counter with a right upper-level punch (migi jodan tsuki), then a right middle-level roundhouse kick (migi chudan mawashi-geri); the kicking foot lands forward (keri-ashi mae), then turn 180°.',
        da: 'Træd tilbage, udfør en venstre udadgående blok mod hovedhøjde (hidari jodan soto-uke), kontra med et højre stød mod hovedhøjde (migi jodan tsuki) og derefter et højre cirkelspark mod mellemhøjde (migi chudan mawashi-geri); sparkefoden lander fremme (keri-ashi mae), og vend så 180°.',
        ja: '後ろに下がり、左上段外受けを行い、右上段突きで反撃し、続けて右中段回し蹴りを放ちます。蹴り足は前に着地し（蹴り足前）、180度転身します。',
      },
      technicalNotes: {
        en: 'Source: 3. Migi jodan tsuki: Step back, hidari jodan soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi (the kicking foot in the air) mae, turn (180). Landing the mawashi-geri foot forward sets up the 180° turn smoothly; keep the guard up through the rotation.',
        da: 'Source: 3. Migi jodan tsuki: Step back, hidari jodan soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi (the kicking foot in the air) mae, turn (180). At lande mawashi-geri-foden fremme klargør den 180° vending jævnt; hold garden oppe gennem rotationen.',
        ja: 'Source: 3. Migi jodan tsuki: Step back, hidari jodan soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi (the kicking foot in the air) mae, turn (180). 回し蹴りの足を前に着地させると180度の転身が滑らかになります。回転中もガードを保ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Defence vs. left chudan tsuki',
        da: '4. Forsvar mod venstre chudan tsuki',
        ja: '4. 左中段突きへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left middle-level punch (hidari chudan tsuki).',
        da: 'Den forestillede modstander angriber med et venstre stød mod mellemhøjde (hidari chudan tsuki).',
        ja: '想定した相手が左中段突きで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left low sweeping block (hidari gedan-barai), then counter with a right middle-level punch (migi chudan tsuki).',
        da: 'Træd tilbage, udfør en venstre lav fejeblok (hidari gedan-barai), og kontra derefter med et højre stød mod mellemhøjde (migi chudan tsuki).',
        ja: '後ろに下がり、左下段払いを行い、右中段突きで反撃します。',
      },
      technicalNotes: {
        en: 'Source: 4. Hidari chudan tsuki: Step back, hidari gedan-barai, migi chudan tsuki. The gedan-barai sweeps the punch down and across; rotate the hips into the counter punch to add power.',
        da: 'Source: 4. Hidari chudan tsuki: Step back, hidari gedan-barai, migi chudan tsuki. Gedan-barai fejer støddet ned og på tværs; rotér hofterne ind i kontrastøddet for at tilføje kraft.',
        ja: 'Source: 4. Hidari chudan tsuki: Step back, hidari gedan-barai, migi chudan tsuki. 下段払いが突きを下方へ横切るように払います。腰を回して反撃の突きに力を加えます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Defence vs. left jodan tsuki',
        da: '5. Forsvar mod venstre jodan tsuki',
        ja: '5. 左上段突きへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left upper-level punch (hidari jodan tsuki).',
        da: 'Den forestillede modstander angriber med et venstre stød mod hovedhøjde (hidari jodan tsuki).',
        ja: '想定した相手が左上段突きで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left inner knife-hand block (hidari uchi-uke shuto), counter with a right upper-level punch (migi jodan tsuki), switch the feet, then deliver a left middle-level roundhouse kick (hidari chudan mawashi-geri), and turn 90° to the left.',
        da: 'Træd tilbage, udfør en venstre indadgående knivhåndsblok (hidari uchi-uke shuto), kontra med et højre stød mod hovedhøjde (migi jodan tsuki), skift fødderne, og lever derefter et venstre cirkelspark mod mellemhøjde (hidari chudan mawashi-geri), og vend 90° til venstre.',
        ja: '後ろに下がり、左内受け手刀を行い、右上段突きで反撃し、足を入れ替え、左中段回し蹴りを放ち、左へ90度転身します。',
      },
      technicalNotes: {
        en: 'Source: 5. Hidari jodan tsuki: Step back, hidari uchi-uke shuto, migi jodan tsuki, foot switch, hidari chudan mawashi-geri, turn to the left (90). The foot switch loads the rear leg so the hidari mawashi-geri fires without telegraphing; finish facing the new 90° angle.',
        da: 'Source: 5. Hidari jodan tsuki: Step back, hidari uchi-uke shuto, migi jodan tsuki, foot switch, hidari chudan mawashi-geri, turn to the left (90). Fodskiftet lader det bagerste ben for at affyre hidari mawashi-geri uden at varsle det; afslut vendt mod den nye 90°-vinkel.',
        ja: 'Source: 5. Hidari jodan tsuki: Step back, hidari uchi-uke shuto, migi jodan tsuki, foot switch, hidari chudan mawashi-geri, turn to the left (90). 足の入れ替えで後ろ足に力を溜め、左回し蹴りを予備動作なく放ちます。新しい90度の方向を向いて終わります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Defence vs. right mae-geri',
        da: '6. Forsvar mod højre mae-geri',
        ja: '6. 右前蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right front kick (migi mae-geri).',
        da: 'Den forestillede modstander angriber med et højre frontspark (migi mae-geri).',
        ja: '想定した相手が右前蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left outside block (hidari soto-uke), counter with a right upper-level punch (migi jodan tsuki), then a right middle-level roundhouse kick (migi chudan mawashi-geri); the kicking foot lands back (keri-ashi ushiro), returning to normal fighting stance.',
        da: 'Træd tilbage, udfør en venstre udadgående blok (hidari soto-uke), kontra med et højre stød mod hovedhøjde (migi jodan tsuki) og derefter et højre cirkelspark mod mellemhøjde (migi chudan mawashi-geri); sparkefoden lander bagved (keri-ashi ushiro) og vender tilbage til normal kampstilling.',
        ja: '後ろに下がり、左外受けを行い、右上段突きで反撃し、続けて右中段回し蹴りを放ちます。蹴り足は後ろに着地し（蹴り足後ろ）、通常の組手の構えに戻ります。',
      },
      technicalNotes: {
        en: 'Source: 6. Migi mae-geri: Step back, hidari soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi ushiro. (Back to normal fighting stance) Use the soto-uke to deflect the kicking leg, then chain the punch into the mawashi-geri; recovering the kicking foot to the rear resets the kamae.',
        da: 'Source: 6. Migi mae-geri: Step back, hidari soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi ushiro. (Back to normal fighting stance) Brug soto-uke til at aflede sparkebenet, og kæd derefter støddet ind i mawashi-geri; at trække sparkefoden bagud nulstiller kamae.',
        ja: 'Source: 6. Migi mae-geri: Step back, hidari soto-uke, migi jodan tsuki, migi chudan mawashi-geri, keri ashi ushiro. (Back to normal fighting stance) 外受けで蹴り足をそらし、突きから回し蹴りへ繋げます。蹴り足を後ろに戻して構えを整えます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Defence vs. left mae-geri',
        da: '7. Forsvar mod venstre mae-geri',
        ja: '7. 左前蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left front kick (hidari mae-geri).',
        da: 'Den forestillede modstander angriber med et venstre frontspark (hidari mae-geri).',
        ja: '想定した相手が左前蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Step back, perform a left low sweeping block (hidari gedan-barai), then a right low-level roundhouse kick (migi gedan mawashi-geri), followed by a left upper-level roundhouse kick (hidari jodan mawashi-geri); the kicking foot lands forward (keri-ashi mae).',
        da: 'Træd tilbage, udfør en venstre lav fejeblok (hidari gedan-barai), derefter et højre cirkelspark mod lav højde (migi gedan mawashi-geri), efterfulgt af et venstre cirkelspark mod hovedhøjde (hidari jodan mawashi-geri); sparkefoden lander fremme (keri-ashi mae).',
        ja: '後ろに下がり、左下段払いを行い、右下段回し蹴りを放ち、続けて左上段回し蹴りを放ちます。蹴り足は前に着地します（蹴り足前）。',
      },
      technicalNotes: {
        en: 'Source: 7. Hidari mae-geri: Step back, hidari gedan-barai, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi mae. The low and high mawashi-geri form a combination — the gedan kick draws the guard down before the jodan kick comes over the top; land forward to keep the pressure.',
        da: 'Source: 7. Hidari mae-geri: Step back, hidari gedan-barai, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi mae. Det lave og høje mawashi-geri danner en kombination — gedan-sparket trækker garden ned, før jodan-sparket kommer over toppen; land fremme for at bevare presset.',
        ja: 'Source: 7. Hidari mae-geri: Step back, hidari gedan-barai, migi gedan mawashi-geri, hidari jodan mawashi-geri, keri ashi mae. 下段と上段の回し蹴りで連携を作ります。下段蹴りでガードを下げさせ、上段蹴りを上から被せます。前に着地して圧力を保ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Defence vs. left chudan mawashi-geri',
        da: '8. Forsvar mod venstre chudan mawashi-geri',
        ja: '8. 左中段回し蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a left middle-level roundhouse kick (hidari chudan mawashi-geri).',
        da: 'Den forestillede modstander angriber med et venstre cirkelspark mod mellemhøjde (hidari chudan mawashi-geri).',
        ja: '想定した相手が左中段回し蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Perform a left shin block (hidari sune-uke), step forward (migi okuri-ashi), then a left knee strike (hidari hiza-geri), and finish with a wrap-around throw (maki-komi-nage).',
        da: 'Udfør en venstre skinnebensblok (hidari sune-uke), træd frem (migi okuri-ashi), derefter et venstre knæstød (hidari hiza-geri), og afslut med et omsvøbskast (maki-komi-nage).',
        ja: '左脛受けを行い、右で踏み込み（送り足）、左膝蹴りを放ち、巻き込み投げで終わります。',
      },
      technicalNotes: {
        en: 'Source: 8. Hidari chudan mawashi-geri: Hidari sune-uke, migi okuri ashi, hidari hiza-geri, maki komi nage. The sune-uke checks the kick with the shin; closing distance with okuri-ashi puts you inside for the hiza-geri and the wrap-around throw.',
        da: 'Source: 8. Hidari chudan mawashi-geri: Hidari sune-uke, migi okuri ashi, hidari hiza-geri, maki komi nage. Sune-uke standser sparket med skinnebenet; at lukke afstanden med okuri-ashi bringer dig inden for til hiza-geri og omsvøbskastet.',
        ja: 'Source: 8. Hidari chudan mawashi-geri: Hidari sune-uke, migi okuri ashi, hidari hiza-geri, maki komi nage. 脛受けで蹴りを脛で止めます。送り足で間合いを詰めて懐に入り、膝蹴りと巻き込み投げにつなげます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Defence vs. right chudan mawashi-geri',
        da: '9. Forsvar mod højre chudan mawashi-geri',
        ja: '9. 右中段回し蹴りへの対応',
      },
      attacker: {
        en: 'The imagined opponent attacks with a right middle-level roundhouse kick (migi chudan mawashi-geri).',
        da: 'Den forestillede modstander angriber med et højre cirkelspark mod mellemhøjde (migi chudan mawashi-geri).',
        ja: '想定した相手が右中段回し蹴りで攻撃してきます。',
      },
      defender: {
        en: 'Perform a left shin block (hidari sune-uke), then a circular block (mawashi-uke), a right knee strike (migi hiza-geri), and finish with a wrap-around throw (maki-komi-nage) into horse stance (kiba-dachi).',
        da: 'Udfør en venstre skinnebensblok (hidari sune-uke), derefter en cirkulær blok (mawashi-uke), et højre knæstød (migi hiza-geri), og afslut med et omsvøbskast (maki-komi-nage) i hesteståelse (kiba-dachi).',
        ja: '左脛受けを行い、回し受けを行い、右膝蹴りを放ち、巻き込み投げで終わり、騎馬立ちになります。',
      },
      technicalNotes: {
        en: 'Source: 9. Migi chudan mawashi-geri: Hidari sune-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi. The mawashi-uke wraps the kicking leg to control it; the hiza-geri and maki-komi-nage follow, settling into a stable kiba-dachi.',
        da: 'Source: 9. Migi chudan mawashi-geri: Hidari sune-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi. Mawashi-uke svøber om sparkebenet for at kontrollere det; hiza-geri og maki-komi-nage følger og lander i en stabil kiba-dachi.',
        ja: 'Source: 9. Migi chudan mawashi-geri: Hidari sune-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi. 回し受けで蹴り足を巻き込んで制します。膝蹴りと巻き込み投げが続き、安定した騎馬立ちに落ち着きます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: '10. Right punch, return to fighting stance',
        da: '10. Højre stød, tilbage til kampstilling',
        ja: '10. 右突き、組手の構えに戻る',
      },
      attacker: {
        en: 'No new committed attack: the sequence closes and the imagined opponent is no longer pressing.',
        da: 'Intet nyt egentligt angreb: sekvensen afsluttes, og den forestillede modstander presser ikke længere.',
        ja: '新たな本格的な攻撃はありません。一連の動きが終わり、想定した相手はもう攻めてきません。',
      },
      defender: {
        en: 'Deliver a final right punch (migi tsuki), then return to the fighting stance (kumite no kamae).',
        da: 'Lever et afsluttende højre stød (migi tsuki), og vend derefter tilbage til kampstillingen (kumite no kamae).',
        ja: '最後に右突きを放ち、組手の構えに戻ります。',
      },
      technicalNotes: {
        en: 'Source: 10. Migi tsuki, kumite no kamae. The closing migi tsuki punctuates the form; resettle into kumite no kamae with composure to finish.',
        da: 'Source: 10. Migi tsuki, kumite no kamae. Det afsluttende migi tsuki sætter punktum for formen; fald tilbage i kumite no kamae med ro for at afslutte.',
        ja: 'Source: 10. Migi tsuki, kumite no kamae. 締めの右突きが型に句読点を打ちます。落ち着いて組手の構えに戻り、終わります。',
      },
      schoolVariations: [],
    },
  ],
};
