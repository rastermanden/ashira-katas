import type { Kata } from '../types';

export const kihonKataSan: Kata = {
  id: 'kihon-kata-san',
  japaneseCharacters: '基本の型 三',
  romaji: 'Kihon no Kata — Sono San',
  name: {
    en: 'Kihon no Kata — Sono San',
    da: 'Kihon no Kata — Sono San',
    ja: '基本の型 三',
  },
  description: {
    en: 'The Kihon no Kata are the basic solo forms of Ashihara Karate, performed against an imagined opponent. They drill sabaki footwork — including the directional quadrant positions (pos 1-4) and 45° diagonal side-steps — together with block-and-counter combinations and kicks. Sono San is the third of these forms, defending against advanced kicks and adding spinning kicks, hammer-fist strikes and cross-step footwork.',
    da: 'Kihon no Kata er Ashihara Karates grundlæggende soloformer, udført mod en forestillet modstander. De træner sabaki-fodarbejde — herunder de retningsbestemte kvadrantpositioner (pos 1-4) og 45° diagonale sidetrin — sammen med blok-og-kontra-kombinationer og spark. Sono San er den tredje af disse former og forsvarer mod avancerede spark samt tilføjer drejespark, hammerslag og krydstrin-fodarbejde.',
    ja: '基本の型はアシハラ空手の基本的な単独形で、想定した相手に対して行います。捌きの足さばき——方向別の四隅の位置（ポジション1〜4）と45度の斜め側方ステップを含む——とともに、受けからの反撃の組み合わせと蹴りを反復稽古します。其の三はこれらの型の三番目のもので、上級の蹴りに対処し、後ろ回し蹴り、鉄槌打ち、クロスステップの足さばきを加えます。',
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
        en: '2. Left Side Kick (Hidari Yoko-geri)',
        da: '2. Venstre sidespark (Hidari Yoko-geri)',
        ja: '2. 左横蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left side kick (hidari yoko-geri).',
        da: 'Modstanderen angriber med et venstre sidespark (hidari yoko-geri).',
        ja: '相手は左横蹴り（hidari yoko-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Step back and sweep the kick aside with a left low block (hidari gedan-barai) into position 4, then counter with a right upper punch (migi jodan tsuki), a right low roundhouse kick (migi gedan mawashi-geri) and a left upper roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Træd tilbage og fej sparket til side med en venstre lav blok (hidari gedan-barai) ind i position 4, kontr derefter med et højre overstød (migi jodan tsuki), et højre lavt roundhouse-spark (migi gedan mawashi-geri) og et venstre øvre roundhouse-spark (hidari jodan mawashi-geri).',
        ja: '後ろに下がり、左下段払い（hidari gedan-barai）でポジション4へ入って蹴りを払い、右上段突き（migi jodan tsuki）、右下段回し蹴り（migi gedan mawashi-geri）、左上段回し蹴り（hidari jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "2. Hidari yoko-geri: Step back, hidari gedan-barai (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri." Stepping back with the gedan-barai sweeps the side kick away, then the jodan tsuki, gedan and jodan mawashi-geri build a high-low counter chain.',
        da: 'Source: "2. Hidari yoko-geri: Step back, hidari gedan-barai (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri." At træde tilbage med gedan-barai fejer sidesparket væk, hvorefter jodan tsuki, gedan og jodan mawashi-geri opbygger en høj-lav-kontrakæde.',
        ja: 'Source: "2. Hidari yoko-geri: Step back, hidari gedan-barai (pos 4), migi jodan tsuki, migi gedan mawashi-geri, hidari jodan mawashi-geri." 後ろに下がりながらの下段払いが横蹴りを払い、続く上段突き・下段・上段回し蹴りが上下の反撃の連係を作ります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Right Upper Spinning Back Roundhouse Kick (Migi Jodan Ushiro Mawashi-geri)',
        da: '3. Højre øvre drejespark (Migi Jodan Ushiro Mawashi-geri)',
        ja: '3. 右上段後ろ回し蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a right upper spinning back (wheel) kick (migi jodan ushiro mawashi-geri).',
        da: 'Modstanderen angriber med et højre øvre drejespark (migi jodan ushiro mawashi-geri).',
        ja: '相手は右上段後ろ回し蹴り（migi jodan ushiro mawashi-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Move into back position 1 and counter with a right upper roundhouse kick (migi jodan mawashi-geri).',
        da: 'Bevæg dig ind i bagposition 1 og kontr med et højre øvre roundhouse-spark (migi jodan mawashi-geri).',
        ja: 'バックポジション1へ入り、右上段回し蹴り（migi jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "3. Migi jodan ushiro mawashi-geri: (Back position 1), migi jodan mawashi-geri." Taking back position 1 clears the spinning kick\'s arc, and the right jodan mawashi-geri answers immediately into the opening.',
        da: 'Source: "3. Migi jodan ushiro mawashi-geri: (Back position 1), migi jodan mawashi-geri." At indtage bagposition 1 rydder drejesparkets bue, og højre jodan mawashi-geri svarer straks ind i åbningen.',
        ja: 'Source: "3. Migi jodan ushiro mawashi-geri: (Back position 1), migi jodan mawashi-geri." バックポジション1を取ることで後ろ回し蹴りの弧をかわし、右上段回し蹴りが直ちに隙へ反撃します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Right Back Kick (Migi Ushiro-geri)',
        da: '4. Højre bagspark (Migi Ushiro-geri)',
        ja: '4. 右後ろ蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a right back kick (migi ushiro-geri).',
        da: 'Modstanderen angriber med et højre bagspark (migi ushiro-geri).',
        ja: '相手は右後ろ蹴り（migi ushiro-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Step back and block with a left outside block (hidari soto-uke) into position 3, then counter with a right inner-thigh kick (migi uchimomo-geri) and a right upper roundhouse kick (migi jodan mawashi-geri).',
        da: 'Træd tilbage og blokér med en venstre udvendig blok (hidari soto-uke) ind i position 3, kontr derefter med et højre indvendigt lårspark (migi uchimomo-geri) og et højre øvre roundhouse-spark (migi jodan mawashi-geri).',
        ja: '後ろに下がり、左外受け（hidari soto-uke）でポジション3へ入って受け、右内股蹴り（migi uchimomo-geri）と右上段回し蹴り（migi jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "4. Migi ushiro-geri: Step back, hidari soto-uke (pos 3), migi uchimomo-geri, migi jodan mawashi-geri." Stepping back with the soto-uke deflects the back kick, then the uchimomo-geri and jodan mawashi-geri counter low then high on the same right side.',
        da: 'Source: "4. Migi ushiro-geri: Step back, hidari soto-uke (pos 3), migi uchimomo-geri, migi jodan mawashi-geri." At træde tilbage med soto-uke afleder bagsparket, hvorefter uchimomo-geri og jodan mawashi-geri kontrer lavt og derefter højt på samme højre side.',
        ja: 'Source: "4. Migi ushiro-geri: Step back, hidari soto-uke (pos 3), migi uchimomo-geri, migi jodan mawashi-geri." 後ろに下がりながらの外受けが後ろ蹴りをそらし、続く内股蹴りと上段回し蹴りが同じ右側で下・上と反撃します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Left Upper Hook Kick (Hidari Jodan Kake-geri)',
        da: '5. Venstre øvre krogspark (Hidari Jodan Kake-geri)',
        ja: '5. 左上段掛け蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left upper hook kick (hidari jodan kake-geri).',
        da: 'Modstanderen angriber med et venstre øvre krogspark (hidari jodan kake-geri).',
        ja: '相手は左上段掛け蹴り（hidari jodan kake-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Block with a left upper block (hidari jodan-uke) into position 2, then counter with a left upper roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Blokér med en venstre øvre blok (hidari jodan-uke) ind i position 2, kontr derefter med et venstre øvre roundhouse-spark (hidari jodan mawashi-geri).',
        ja: '左上段受け（hidari jodan-uke）でポジション2へ入って受け、左上段回し蹴り（hidari jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "5. Hidari jodan kake-geri: Hidari jodan uke (pos 2), hidari jodan mawashi-geri." The jodan-uke catches the hooking kick high as you take position 2, and the left jodan mawashi-geri counters on the same side.',
        da: 'Source: "5. Hidari jodan kake-geri: Hidari jodan uke (pos 2), hidari jodan mawashi-geri." Jodan-uke fanger krogsparket højt, mens du indtager position 2, og venstre jodan mawashi-geri kontrer på samme side.',
        ja: 'Source: "5. Hidari jodan kake-geri: Hidari jodan uke (pos 2), hidari jodan mawashi-geri." ポジション2を取りながら上段受けで掛け蹴りを上方で捕らえ、左上段回し蹴りが同じ側で反撃します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Right Low Roundhouse Kick × 2 (Migi Gedan Mawashi-geri)',
        da: '6. Højre lavt roundhouse-spark × 2 (Migi Gedan Mawashi-geri)',
        ja: '6. 右下段回し蹴り × 2',
      },
      attacker: {
        en: 'The opponent attacks with two right low roundhouse kicks (migi gedan mawashi-geri) — a faint kick followed by the real kick.',
        da: 'Modstanderen angriber med to højre lave roundhouse-spark (migi gedan mawashi-geri) — et finte-spark efterfulgt af det rigtige spark.',
        ja: '相手は右下段回し蹴り（migi gedan mawashi-geri）を2回——フェイントの蹴りに続いて本命の蹴り——で攻撃してきます。',
      },
      defender: {
        en: 'Check with a left shin block (hidari sune-uke) into position 1, stopping the kick, then counter with a right upper punch (migi jodan tsuki) and a right upper roundhouse kick (migi jodan mawashi-geri), landing the kicking foot back (keri-ashi ushiro).',
        da: 'Tjek med en venstre skinnebensblok (hidari sune-uke) ind i position 1 og stop sparket, kontr derefter med et højre overstød (migi jodan tsuki) og et højre øvre roundhouse-spark (migi jodan mawashi-geri), hvor sparkefoden sættes tilbage (keri-ashi ushiro).',
        ja: '左脛受け（hidari sune-uke）でポジション1へ入って蹴りを止め、右上段突き（migi jodan tsuki）と右上段回し蹴り（migi jodan mawashi-geri）で反撃し、蹴り足を後ろに下ろします（keri-ashi ushiro）。',
      },
      technicalNotes: {
        en: 'Source: "6. Migi gedan mawashi-geri x 2 (faint kick + kick): Hidari sune-uke (pos 1), stopping, migi jodan tsuki, migi jodan mawashi-geri, keri ashi ushiro." Ride out the faint kick and check the real low kick on the shin (stopping), then counter with the jodan tsuki and jodan mawashi-geri, setting the foot down to the rear.',
        da: 'Source: "6. Migi gedan mawashi-geri x 2 (faint kick + kick): Hidari sune-uke (pos 1), stopping, migi jodan tsuki, migi jodan mawashi-geri, keri ashi ushiro." Læs finte-sparket og tjek det rigtige lave spark på skinnebenet (stop det), kontr derefter med jodan tsuki og jodan mawashi-geri, og sæt foden ned bagtil.',
        ja: 'Source: "6. Migi gedan mawashi-geri x 2 (faint kick + kick): Hidari sune-uke (pos 1), stopping, migi jodan tsuki, migi jodan mawashi-geri, keri ashi ushiro." フェイントの蹴りをいなし、本命の下段蹴りを脛で受け止め（stopping）、上段突きと上段回し蹴りで反撃して蹴り足を後方に下ろします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Left Triangle Kick (Hidari San Kaku-geri)',
        da: '7. Venstre trekantspark (Hidari San Kaku-geri)',
        ja: '7. 左三角蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left triangle kick (hidari san kaku-geri).',
        da: 'Modstanderen angriber med et venstre trekantspark (hidari san kaku-geri).',
        ja: '相手は左三角蹴り（hidari san kaku-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Step back and sweep with a left low block (hidari gedan-barai), take a left cross step (hidari cross step) into position 4, then counter with a right spinning hammer-fist (migi ushiro mawari tettsui) and a right spinning back roundhouse kick (migi ushiro mawashi-geri).',
        da: 'Træd tilbage og fej med en venstre lav blok (hidari gedan-barai), tag et venstre krydstrin (hidari cross step) ind i position 4, kontr derefter med et højre drejende hammerslag (migi ushiro mawari tettsui) og et højre drejespark (migi ushiro mawashi-geri).',
        ja: '後ろに下がって左下段払い（hidari gedan-barai）で払い、左クロスステップ（hidari cross step）でポジション4へ入り、右後ろ回り鉄槌（migi ushiro mawari tettsui）と右後ろ回し蹴り（migi ushiro mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "7. Hidari san kaku-geri: Step back, hidari gedan-barai, hidari cross step (pos 4), migi ushiro mawari tettsui, migi ushiro mawashi-geri." The step back and gedan-barai clear the triangle kick; the cross step into position 4 winds up the body so the spinning tettsui and ushiro mawashi-geri unload together.',
        da: 'Source: "7. Hidari san kaku-geri: Step back, hidari gedan-barai, hidari cross step (pos 4), migi ushiro mawari tettsui, migi ushiro mawashi-geri." Trinet tilbage og gedan-barai rydder trekantsparket; krydstrinet ind i position 4 vrider kroppen op, så det drejende tettsui og ushiro mawashi-geri udløses sammen.',
        ja: 'Source: "7. Hidari san kaku-geri: Step back, hidari gedan-barai, hidari cross step (pos 4), migi ushiro mawari tettsui, migi ushiro mawashi-geri." 後退と下段払いで三角蹴りをかわし、ポジション4へのクロスステップで体を溜め、回転する鉄槌と後ろ回し蹴りを一緒に放ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Left Upper Roundhouse Kick (Hidari Jodan Mawashi-geri)',
        da: '8. Venstre øvre roundhouse-spark (Hidari Jodan Mawashi-geri)',
        ja: '8. 左上段回し蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left upper roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Modstanderen angriber med et venstre øvre roundhouse-spark (hidari jodan mawashi-geri).',
        ja: '相手は左上段回し蹴り（hidari jodan mawashi-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Block with a right upper block (migi jodan-uke) combined with a kyushu step, then counter with a left-then-right upper double punch (hidari-migi jodan nihon-tsuki), a right pivot-leg kick (migi jikuashi-geri) and a left upper roundhouse kick (hidari jodan mawashi-geri), landing the kicking foot back (keri-ashi ushiro) and turning 180°.',
        da: 'Blokér med en højre øvre blok (migi jodan-uke) kombineret med et kyushu-trin, kontr derefter med et venstre-derefter-højre øvre dobbeltstød (hidari-migi jodan nihon-tsuki), et højre pivotbensspark (migi jikuashi-geri) og et venstre øvre roundhouse-spark (hidari jodan mawashi-geri), hvor sparkefoden sættes tilbage (keri-ashi ushiro), og vend 180°.',
        ja: '右上段受け（migi jodan-uke）をキューシューステップと合わせて受け、左右の上段二本突き（hidari-migi jodan nihon-tsuki）、右軸足蹴り（migi jikuashi-geri）、左上段回し蹴り（hidari jodan mawashi-geri）で反撃し、蹴り足を後ろに下ろし（keri-ashi ushiro）、180度回転します。',
      },
      technicalNotes: {
        en: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke + kyushu step, hidari-migi jodan nihon-tsuki, migi jikuashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, turn (180)" The jodan-uke with kyushu step covers the high kick and closes in; the nihon-tsuki, jikuashi-geri and jodan mawashi-geri counter before the rear-landing foot drives the 180° turn.',
        da: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke + kyushu step, hidari-migi jodan nihon-tsuki, migi jikuashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, turn (180)" Jodan-uke med kyushu-trin dækker det høje spark og lukker ind; nihon-tsuki, jikuashi-geri og jodan mawashi-geri kontrer, inden den bagudlandende fod driver 180°-drejningen.',
        ja: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke + kyushu step, hidari-migi jodan nihon-tsuki, migi jikuashi-geri, hidari jodan mawashi-geri, keri ashi ushiro, turn (180)" キューシューステップを伴う上段受けが上段蹴りを防いで踏み込み、二本突き・軸足蹴り・上段回し蹴りで反撃した後、後方に下ろした足が180度の回転を生みます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Right Upper Roundhouse Kick (Migi Jodan Mawashi-geri)',
        da: '9. Højre øvre roundhouse-spark (Migi Jodan Mawashi-geri)',
        ja: '9. 右上段回し蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a right upper roundhouse kick (migi jodan mawashi-geri).',
        da: 'Modstanderen angriber med et højre øvre roundhouse-spark (migi jodan mawashi-geri).',
        ja: '相手は右上段回し蹴り（migi jodan mawashi-geri）で攻撃してきます。',
      },
      defender: {
        en: 'Block with a left upper block (hidari jodan-uke) combined with a kyushu step, then counter with a right upper punch (migi jodan tsuki) and a right inner-thigh kick (migi uchimomo-geri), landing the kicking foot forward (keri-ashi mae) and pressing the head down.',
        da: 'Blokér med en venstre øvre blok (hidari jodan-uke) kombineret med et kyushu-trin, kontr derefter med et højre overstød (migi jodan tsuki) og et højre indvendigt lårspark (migi uchimomo-geri), hvor sparkefoden sættes frem (keri-ashi mae), og pres hovedet ned.',
        ja: '左上段受け（hidari jodan-uke）をキューシューステップと合わせて受け、右上段突き（migi jodan tsuki）と右内股蹴り（migi uchimomo-geri）で反撃し、蹴り足を前に下ろし（keri-ashi mae）、頭を押さえ込みます。',
      },
      technicalNotes: {
        en: 'Source: "9. Migi jodan mawashi-geri: Hidari jodan-uke + kyushu step, migi jodan tsuki, migi uchimomo-geri, keri ashi mae, press the head." This mirrors movement 8 on the other side; the jodan-uke and kyushu step cover the kick, then the jodan tsuki and uchimomo-geri counter before landing forward and pressing the head down.',
        da: 'Source: "9. Migi jodan mawashi-geri: Hidari jodan-uke + kyushu step, migi jodan tsuki, migi uchimomo-geri, keri ashi mae, press the head." Dette spejler bevægelse 8 på den anden side; jodan-uke og kyushu-trin dækker sparket, hvorefter jodan tsuki og uchimomo-geri kontrer, inden der landes fremad og hovedet presses ned.',
        ja: 'Source: "9. Migi jodan mawashi-geri: Hidari jodan-uke + kyushu step, migi jodan tsuki, migi uchimomo-geri, keri ashi mae, press the head." これは動作8を反対側で鏡写しにしたもので、上段受けとキューシューステップで蹴りを防ぎ、上段突きと内股蹴りで反撃してから前へ下ろし、頭を押さえ込みます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: '10. Low Spinning Back Roundhouse Kick & Return to Fighting Stance',
        da: '10. Lavt drejespark og tilbage til kampstilling',
        ja: '10. 下段後ろ回し蹴りから組手の構えへ',
      },
      attacker: {
        en: 'No new committed attack — the practitioner finishes the form against the imagined opponent and returns to guard.',
        da: 'Intet nyt egentligt angreb — udøveren afslutter formen mod den forestillede modstander og vender tilbage til garde.',
        ja: '新たな本格的な攻撃はありません——稽古者は想定した相手に対して型を締めくくり、構えに戻ります。',
      },
      defender: {
        en: 'Deliver a left low spinning back roundhouse kick (hidari gedan ushiro mawashi-geri), land the kicking foot forward (keri-ashi mae), and return to the fighting stance (kumite no kamae).',
        da: 'Lever et venstre lavt drejespark (hidari gedan ushiro mawashi-geri), sæt sparkefoden frem (keri-ashi mae), og vend tilbage til kampstillingen (kumite no kamae).',
        ja: '左下段後ろ回し蹴り（hidari gedan ushiro mawashi-geri）を放ち、蹴り足を前に下ろし（keri-ashi mae）、組手の構え（kumite no kamae）に戻ります。',
      },
      technicalNotes: {
        en: 'Source: "10. Hidari gedan ushiro mawashi-geri, keri ashi mae, kumite no kamae." The closing low spinning back roundhouse kick lands the foot forward before resetting to the kamae that opened the form.',
        da: 'Source: "10. Hidari gedan ushiro mawashi-geri, keri ashi mae, kumite no kamae." Det afsluttende lave drejespark sætter foden frem, inden der nulstilles til den kamae, der åbnede formen.',
        ja: 'Source: "10. Hidari gedan ushiro mawashi-geri, keri ashi mae, kumite no kamae." 締めの下段後ろ回し蹴りが蹴り足を前に下ろし、型を開始した構えへと戻します。',
      },
      schoolVariations: [],
    },
  ],
};
