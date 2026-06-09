import type { Kata } from '../types';

export const kihonKataIchi: Kata = {
  id: 'kihon-kata-ichi',
  japaneseCharacters: '基本の型 一',
  romaji: 'Kihon no Kata — Sono Ichi',
  name: {
    en: 'Kihon no Kata — Sono Ichi',
    da: 'Kihon no Kata — Sono Ichi',
    ja: '基本の型 一',
  },
  requiredForKyu: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'The Kihon no Kata are the basic solo forms of Ashihara Karate, performed against an imagined opponent. They drill sabaki footwork — including the directional quadrant positions (pos 1-4) and 45° diagonal side-steps — together with block-and-counter combinations and kicks. Sono Ichi is the first of these forms and establishes the core hiki-ashi retreat, side-step evasion and roundhouse counters.',
    da: 'Kihon no Kata er Ashihara Karates grundlæggende soloformer, udført mod en forestillet modstander. De træner sabaki-fodarbejde — herunder de retningsbestemte kvadrantpositioner (pos 1-4) og 45° diagonale sidetrin — sammen med blok-og-kontra-kombinationer og spark. Sono Ichi er den første af disse former og etablerer det centrale hiki-ashi-tilbagetræk, sidetrins-undvigelse og roundhouse-kontraer.',
    ja: '基本の型はアシハラ空手の基本的な単独形で、想定した相手に対して行います。捌きの足さばき——方向別の四隅の位置（ポジション1〜4）と45度の斜め側方ステップを含む——とともに、受けからの反撃の組み合わせと蹴りを反復稽古します。其の一はこれらの型の最初のもので、基本となる引き足、側方ステップによる回避、回し蹴りでの反撃を確立します。',
  },
  youtubeLinks: [],
  steps: [
    {
      stepNumber: 1,
      name: {
        en: '1. Fighting Stance (Kumite no Kamae)',
        da: '1. Kampstilling (Kumite no Kamae)',
        ja: '1. 組手の構え',
      },
      attacker: {
        en: 'No committed attack yet — the imagined opponent simply faces off against the practitioner.',
        da: 'Endnu intet egentligt angreb — den forestillede modstander stiller sig blot over for udøveren.',
        ja: 'まだ本格的な攻撃はありません——想定した相手はただ稽古者と向かい合うだけです。',
      },
      defender: {
        en: 'The practitioner assumes the fighting stance (kumite no kamae), ready to respond.',
        da: 'Udøveren indtager kampstillingen (kumite no kamae), klar til at reagere.',
        ja: '稽古者は組手の構えをとり、応じる準備をします。',
      },
      technicalNotes: {
        en: 'Source: "1. Kumite no kamae." This opening posture sets guard and distance before any movement; stay relaxed and balanced, ready to read the opponent.',
        da: 'Source: "1. Kumite no kamae." Denne åbningsstilling sætter garde og afstand inden enhver bevægelse; forbliv afslappet og i balance, klar til at aflæse modstanderen.',
        ja: 'Source: "1. Kumite no kamae." この最初の構えは、動き出す前に防御と間合いを定めます。リラックスして balance を保ち、相手を読む準備をします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: '2. Right Middle Punch (Migi Chudan Tsuki)',
        da: '2. Højre midterstød (Migi Chudan Tsuki)',
        ja: '2. 右中段突き',
      },
      attacker: {
        en: 'The opponent attacks with a right middle-level punch (migi chudan tsuki).',
        da: 'Modstanderen angriber med et højre stød i midterhøjde (migi chudan tsuki).',
        ja: '相手は右中段突きで攻撃してきます。',
      },
      defender: {
        en: 'Draw the right foot back (migi hiki-ashi) and meet the punch with a left outside block (hidari soto-uke) into position 3, then counter with a right middle punch (migi chudan tsuki).',
        da: 'Træk højre fod tilbage (migi hiki-ashi) og mød støddet med en venstre udvendig blok (hidari soto-uke) ind i position 3, og kontr derefter med et højre midterstød (migi chudan tsuki).',
        ja: '右足を引き（右引き足）、左外受け（hidari soto-uke）でポジション3へ入りながら突きを受け、右中段突き（migi chudan tsuki）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "2. Migi chudan tsuki: Migi hiki ashi, hidari soto-uke (pos 3), migi chudan tsuki." The hiki-ashi retreat opens distance so the soto-uke can deflect, and the right chudan tsuki follows immediately into the gap created.',
        da: 'Source: "2. Migi chudan tsuki: Migi hiki ashi, hidari soto-uke (pos 3), migi chudan tsuki." Hiki-ashi-tilbagetrækket åbner afstand, så soto-uke kan aflede, og højre chudan tsuki følger straks ind i det skabte hul.',
        ja: 'Source: "2. Migi chudan tsuki: Migi hiki ashi, hidari soto-uke (pos 3), migi chudan tsuki." 引き足で間合いを開き、外受けでそらした直後に、生まれた隙へ右中段突きを入れます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Right Upper Punch (Migi Jodan Tsuki)',
        da: '3. Højre overstød (Migi Jodan Tsuki)',
        ja: '3. 右上段突き',
      },
      attacker: {
        en: 'The opponent attacks with a right upper-level punch (migi jodan tsuki).',
        da: 'Modstanderen angriber med et højre stød i overhøjde (migi jodan tsuki).',
        ja: '相手は右上段突きで攻撃してきます。',
      },
      defender: {
        en: 'Draw the right foot back (migi hiki-ashi) and block with a left outside block (hidari soto-uke) into position 3, then counter with a right upper punch (migi jodan tsuki), follow with a right upper roundhouse kick (migi jodan mawashi-geri) landing the kicking foot forward (keri-ashi mae), and turn 180°.',
        da: 'Træk højre fod tilbage (migi hiki-ashi) og blokér med en venstre udvendig blok (hidari soto-uke) ind i position 3, kontr derefter med et højre overstød (migi jodan tsuki), følg op med et højre øvre roundhouse-spark (migi jodan mawashi-geri), hvor sparkefoden sættes frem (keri-ashi mae), og vend 180°.',
        ja: '右足を引き（右引き足）、左外受け（hidari soto-uke）でポジション3へ入って受け、右上段突き（migi jodan tsuki）で反撃し、続けて右上段回し蹴り（migi jodan mawashi-geri）を蹴り足を前に下ろし（keri-ashi mae）、180度回転します。',
      },
      technicalNotes: {
        en: 'Source: "3. Migi jodan tsuki: Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi jodan mawashi-geri, keri ashi mae, turn (180)" The jodan tsuki sets up the jodan mawashi-geri on the same right side; landing the kicking foot forward feeds directly into the 180° turn to face the next attack.',
        da: 'Source: "3. Migi jodan tsuki: Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi jodan mawashi-geri, keri ashi mae, turn (180)" Jodan tsuki forbereder jodan mawashi-geri på samme højre side; at sætte sparkefoden frem fører direkte over i 180°-drejningen for at møde det næste angreb.',
        ja: 'Source: "3. Migi jodan tsuki: Migi hiki ashi, hidari soto-uke (pos 3), migi jodan tsuki, migi jodan mawashi-geri, keri ashi mae, turn (180)" 上段突きが同じ右側での上段回し蹴りへの布石となり、蹴り足を前に下ろすことで次の攻撃に向き直る180度の回転へ直接つながります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Left Middle Punch (Hidari Chudan Tsuki)',
        da: '4. Venstre midterstød (Hidari Chudan Tsuki)',
        ja: '4. 左中段突き',
      },
      attacker: {
        en: 'The opponent attacks with a left middle-level punch (hidari chudan tsuki).',
        da: 'Modstanderen angriber med et venstre stød i midterhøjde (hidari chudan tsuki).',
        ja: '相手は左中段突きで攻撃してきます。',
      },
      defender: {
        en: 'Take a right 45° diagonal side-step (migi side step) and sweep the punch aside with a left low block (hidari gedan-barai) into position 4, then counter with a right middle punch (migi chudan tsuki).',
        da: 'Tag et højre 45° diagonalt sidetrin (migi side step) og fej støddet til side med en venstre lav blok (hidari gedan-barai) ind i position 4, og kontr derefter med et højre midterstød (migi chudan tsuki).',
        ja: '右へ45度の斜め側方ステップ（migi side step）を取り、左下段払い（hidari gedan-barai）でポジション4へ入って突きを払い、右中段突き（migi chudan tsuki）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "4. Hidari chudan tsuki: Migi side step (45), hidari gedan-barai (pos 4), migi chudan tsuki." The 45° side-step takes you off the attack line so the gedan-barai clears the punch low, and the right chudan tsuki lands from the new angle.',
        da: 'Source: "4. Hidari chudan tsuki: Migi side step (45), hidari gedan-barai (pos 4), migi chudan tsuki." 45°-sidetrinet bringer dig væk fra angrebslinjen, så gedan-barai rydder støddet lavt, og højre chudan tsuki lander fra den nye vinkel.',
        ja: 'Source: "4. Hidari chudan tsuki: Migi side step (45), hidari gedan-barai (pos 4), migi chudan tsuki." 45度の側方ステップで攻撃線から外れ、下段払いで突きを下方へ払い、新たな角度から右中段突きを入れます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Left Upper Punch (Hidari Jodan Tsuki)',
        da: '5. Venstre overstød (Hidari Jodan Tsuki)',
        ja: '5. 左上段突き',
      },
      attacker: {
        en: 'The opponent attacks with a left upper-level punch (hidari jodan tsuki).',
        da: 'Modstanderen angriber med et venstre stød i overhøjde (hidari jodan tsuki).',
        ja: '相手は左上段突きで攻撃してきます。',
      },
      defender: {
        en: 'Take a right 45° diagonal side-step (migi side step) and block with a left inner knife-hand block (hidari uchi-uke shuto) into position 4, then counter with a right upper punch (migi jodan tsuki), switch the lead leg (foot switch) and finish with a left upper roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Tag et højre 45° diagonalt sidetrin (migi side step) og blokér med en venstre indvendig knivhåndsblok (hidari uchi-uke shuto) ind i position 4, kontr derefter med et højre overstød (migi jodan tsuki), skift forreste ben (foot switch) og afslut med et venstre øvre roundhouse-spark (hidari jodan mawashi-geri).',
        ja: '右へ45度の斜め側方ステップ（migi side step）を取り、左内受け手刀（hidari uchi-uke shuto）でポジション4へ入って受け、右上段突き（migi jodan tsuki）で反撃し、前足を入れ替えて（foot switch）左上段回し蹴り（hidari jodan mawashi-geri）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "5. Hidari jodan tsuki: Migi side step (45), hidari uchi-uke shuto (pos 4), migi jodan tsuki, foot switch, hidari jodan mawashi-geri." The uchi-uke shuto deflects the high punch as you side-step; the foot switch reloads the rear leg so the left jodan mawashi-geri can follow the right jodan tsuki.',
        da: 'Source: "5. Hidari jodan tsuki: Migi side step (45), hidari uchi-uke shuto (pos 4), migi jodan tsuki, foot switch, hidari jodan mawashi-geri." Uchi-uke shuto afleder det høje stød, mens du sidetrin; fodskiftet lader bagbenet op, så venstre jodan mawashi-geri kan følge højre jodan tsuki.',
        ja: 'Source: "5. Hidari jodan tsuki: Migi side step (45), hidari uchi-uke shuto (pos 4), migi jodan tsuki, foot switch, hidari jodan mawashi-geri." 側方ステップしながら内受け手刀で上段突きをそらし、足の入れ替えで後ろ足を準備して、右上段突きに続けて左上段回し蹴りを放ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Right Front Kick (Migi Mae-geri)',
        da: '6. Højre frontspark (Migi Mae-geri)',
        ja: '6. 右前蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a right front kick (migi mae-geri).',
        da: 'Modstanderen angriber med et højre frontspark (migi mae-geri).',
        ja: '相手は右前蹴り（migi mae-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Draw the right foot back (migi hiki-ashi) and block the kick with a left outside block (hidari soto-uke) into position 3, then counter with a right upper roundhouse kick (migi jodan mawashi-geri).',
        da: 'Træk højre fod tilbage (migi hiki-ashi) og blokér sparket med en venstre udvendig blok (hidari soto-uke) ind i position 3, og kontr derefter med et højre øvre roundhouse-spark (migi jodan mawashi-geri).',
        ja: '右足を引き（右引き足）、左外受け（hidari soto-uke）でポジション3へ入って蹴りを受け、右上段回し蹴り（migi jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "6. Migi mae-geri: Migi hiki ashi, hidari soto-uke (pos 3), migi jodan mawashi-geri." Here the soto-uke is used to deflect a kick rather than a punch; the hiki-ashi creates the spacing for the right jodan mawashi-geri counter.',
        da: 'Source: "6. Migi mae-geri: Migi hiki ashi, hidari soto-uke (pos 3), migi jodan mawashi-geri." Her bruges soto-uke til at aflede et spark frem for et stød; hiki-ashi skaber afstanden til højre jodan mawashi-geri-kontraen.',
        ja: 'Source: "6. Migi mae-geri: Migi hiki ashi, hidari soto-uke (pos 3), migi jodan mawashi-geri." ここでは外受けを突きではなく蹴りをそらすのに用います。引き足が右上段回し蹴りの反撃のための間合いを作ります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Left Front Kick (Hidari Mae-geri)',
        da: '7. Venstre frontspark (Hidari Mae-geri)',
        ja: '7. 左前蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left front kick (hidari mae-geri).',
        da: 'Modstanderen angriber med et venstre frontspark (hidari mae-geri).',
        ja: '相手は左前蹴り（hidari mae-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Take a right 45° diagonal side-step (migi side step) and sweep the kick aside with a left low block (hidari gedan-barai), then switch the lead leg (foot switch) into position 2 and finish with a left upper roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Tag et højre 45° diagonalt sidetrin (migi side step) og fej sparket til side med en venstre lav blok (hidari gedan-barai), skift derefter forreste ben (foot switch) ind i position 2 og afslut med et venstre øvre roundhouse-spark (hidari jodan mawashi-geri).',
        ja: '右へ45度の斜め側方ステップ（migi side step）を取り、左下段払い（hidari gedan-barai）で蹴りを払い、前足を入れ替えて（foot switch）ポジション2へ入り、左上段回し蹴り（hidari jodan mawashi-geri）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "7. Hidari mae-geri: Migi side step (45), hidari gedan-barai, foot switch (pos 2), hidari jodan mawashi-geri." The 45° side-step takes you outside the kick so the gedan-barai sweeps it down; the foot switch into position 2 sets the left leg free for the jodan mawashi-geri.',
        da: 'Source: "7. Hidari mae-geri: Migi side step (45), hidari gedan-barai, foot switch (pos 2), hidari jodan mawashi-geri." 45°-sidetrinet bringer dig udenfor sparket, så gedan-barai fejer det ned; fodskiftet ind i position 2 frigør venstre ben til jodan mawashi-geri.',
        ja: 'Source: "7. Hidari mae-geri: Migi side step (45), hidari gedan-barai, foot switch (pos 2), hidari jodan mawashi-geri." 45度の側方ステップで蹴りの外側へ入り、下段払いで蹴りを払い下げ、ポジション2への足の入れ替えで左足を上段回し蹴りのために解放します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Left Middle Roundhouse Kick (Hidari Chudan Mawashi-geri)',
        da: '8. Venstre midter-roundhouse-spark (Hidari Chudan Mawashi-geri)',
        ja: '8. 左中段回し蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left middle-level roundhouse kick (hidari chudan mawashi-geri).',
        da: 'Modstanderen angriber med et venstre roundhouse-spark i midterhøjde (hidari chudan mawashi-geri).',
        ja: '相手は左中段回し蹴り（hidari chudan mawashi-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Check the kick with a left shin block (hidari sune-uke), step across with the right foot using a sliding step and circular block (migi okuri-ashi, mawashi-uke) into position 2, then drive in a left knee strike (hidari hiza-geri) and finish with a wrap-around throw (maki-komi-nage).',
        da: 'Tjek sparket med en venstre skinnebensblok (hidari sune-uke), træd over med højre fod i et glidende trin og cirkulær blok (migi okuri-ashi, mawashi-uke) ind i position 2, driv derefter et venstre knæstød ind (hidari hiza-geri) og afslut med et indsvøbende kast (maki-komi-nage).',
        ja: '左脛受け（hidari sune-uke）で蹴りを受け止め、右足で送り足と回し受け（migi okuri-ashi, mawashi-uke）を使ってポジション2へ踏み込み、左膝蹴り（hidari hiza-geri）を入れ、巻き込み投げ（maki-komi-nage）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "8. Hidari chudan mawashi-geri: Hidari sune-uke, migi okuri ashi (mawashi uke) (pos 2), hidari hiza-geri, maki komi-nage." The sune-uke absorbs the kick on the shin; the okuri-ashi with mawashi-uke closes distance so the hiza-geri and maki-komi-nage finish at grappling range.',
        da: 'Source: "8. Hidari chudan mawashi-geri: Hidari sune-uke, migi okuri ashi (mawashi uke) (pos 2), hidari hiza-geri, maki komi-nage." Sune-uke absorberer sparket på skinnebenet; okuri-ashi med mawashi-uke lukker afstanden, så hiza-geri og maki-komi-nage afsluttes på greb-afstand.',
        ja: 'Source: "8. Hidari chudan mawashi-geri: Hidari sune-uke, migi okuri ashi (mawashi uke) (pos 2), hidari hiza-geri, maki komi-nage." 脛受けが蹴りを脛で吸収し、回し受けを伴う送り足で間合いを詰め、膝蹴りと巻き込み投げを組み技の間合いで決めます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Right Middle Roundhouse Kick (Migi Chudan Mawashi-geri)',
        da: '9. Højre midter-roundhouse-spark (Migi Chudan Mawashi-geri)',
        ja: '9. 右中段回し蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a right middle-level roundhouse kick (migi chudan mawashi-geri).',
        da: 'Modstanderen angriber med et højre roundhouse-spark i midterhøjde (migi chudan mawashi-geri).',
        ja: '相手は右中段回し蹴り（migi chudan mawashi-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Check the kick with a left shin block (hidari sune-uke), bring it round with a circular block (mawashi-uke) into position 1, drive in a right knee strike (migi hiza-geri), then draw the foot back turning 180° (hiki-ashi) and pull the opponent down (hikikuzushi).',
        da: 'Tjek sparket med en venstre skinnebensblok (hidari sune-uke), før det rundt med en cirkulær blok (mawashi-uke) ind i position 1, driv et højre knæstød ind (migi hiza-geri), træk derefter foden tilbage med en 180°-drejning (hiki-ashi) og træk modstanderen ned (hikikuzushi).',
        ja: '左脛受け（hidari sune-uke）で蹴りを受け止め、回し受け（mawashi-uke）でポジション1へ回し込み、右膝蹴り（migi hiza-geri）を入れ、足を引いて180度回転し（hiki-ashi）、相手を引き崩します（hikikuzushi）。',
      },
      technicalNotes: {
        en: 'Source: "9. Migi chudan mawashi-geri: Hidari sune-uke, (mawashi-uke) (pos 1), migi hiza-geri, hiki ashi (180), hikikuzushi (pull down)" This mirrors movement 8 on the right side; after the hiza-geri, the 180° hiki-ashi feeds the hikikuzushi that breaks the opponent\'s balance downward.',
        da: 'Source: "9. Migi chudan mawashi-geri: Hidari sune-uke, (mawashi-uke) (pos 1), migi hiza-geri, hiki ashi (180), hikikuzushi (pull down)" Dette spejler bevægelse 8 på højre side; efter hiza-geri fører 180° hiki-ashi over i hikikuzushi, der bryder modstanderens balance nedad.',
        ja: 'Source: "9. Migi chudan mawashi-geri: Hidari sune-uke, (mawashi-uke) (pos 1), migi hiza-geri, hiki ashi (180), hikikuzushi (pull down)" これは動作8を右側で鏡写しにしたもので、膝蹴りの後、180度の引き足が相手の balance を下へ崩す引き崩しへとつながります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: '10. Punch, Roundhouse & Return to Fighting Stance',
        da: '10. Stød, roundhouse og tilbage til kampstilling',
        ja: '10. 突き・回し蹴りから組手の構えへ',
      },
      attacker: {
        en: 'No new committed attack — the practitioner finishes the form against the imagined opponent and returns to guard.',
        da: 'Intet nyt egentligt angreb — udøveren afslutter formen mod den forestillede modstander og vender tilbage til garde.',
        ja: '新たな本格的な攻撃はありません——稽古者は想定した相手に対して型を締めくくり、構えに戻ります。',
      },
      defender: {
        en: 'Deliver a right punch (migi tsuki), follow with a right roundhouse kick (migi mawashi-geri), and return to the fighting stance (kumite no kamae).',
        da: 'Lever et højre stød (migi tsuki), følg op med et højre roundhouse-spark (migi mawashi-geri), og vend tilbage til kampstillingen (kumite no kamae).',
        ja: '右突き（migi tsuki）を放ち、右回し蹴り（migi mawashi-geri）を続け、組手の構え（kumite no kamae）に戻ります。',
      },
      technicalNotes: {
        en: 'Source: "10. Migi tsuki, migi mawashi-geri, kumite no kamae." The closing combination of right tsuki and right mawashi-geri caps the form before resetting to the kamae that opened it.',
        da: 'Source: "10. Migi tsuki, migi mawashi-geri, kumite no kamae." Den afsluttende kombination af højre tsuki og højre mawashi-geri runder formen af, inden der nulstilles til den kamae, der åbnede den.',
        ja: 'Source: "10. Migi tsuki, migi mawashi-geri, kumite no kamae." 右突きと右回し蹴りの締めの組み合わせが型を仕上げ、開始時の構えへと戻します。',
      },
      schoolVariations: [],
    },
  ],
};
