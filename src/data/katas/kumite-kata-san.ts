import type { Kata } from '../types';

export const kumiteKataSan: Kata = {
  id: 'kumite-kata-san',
  japaneseCharacters: '組手の型 三',
  romaji: 'Kumite no Kata — Sono San',
  name: {
    en: 'Kumite Kata 3',
    da: 'Kumite Kata 3',
    ja: '組手の型 三',
  },
  requiredForKyu: [3, 2, 1],
  description: {
    en: 'The Kumite no Kata are the sparring forms of Ashihara Karate — flowing defence-and-counter sequences performed solo against an imagined opponent. They emphasise mawashi-geri (roundhouse) exchanges, knee strikes (hiza-geri), throws and the closing fumikomi stamp. Kumite no Kata — Sono San is the third of these forms.',
    da: 'Kumite no Kata er Ashihara Karates sparringsformer — flydende forsvars- og kontrasekvenser udført solo mod en forestillet modstander. De lægger vægt på mawashi-geri (cirkelspark) udvekslinger, knæstød (hiza-geri), kast og det afsluttende fumikomi-stamp. Kumite no Kata — Sono San er den tredje af disse former.',
    ja: '組手の型はアシハラ空手の組手形であり、想定した相手に対して単独で行う流れるような防御と反撃の連続です。回し蹴りの応酬、膝蹴り（膝蹴り）、投げ、そして締めくくりの踏み込みを重視します。組手の型 三はこれらの型の三番目のものです。',
  },
  youtubeLinks: [],
  steps: [
    {
      stepNumber: 1,
      name: {
        en: 'Step 1 — Fighting Stance (Kumite no Kamae)',
        da: 'Trin 1 — Kampstilling (Kumite no Kamae)',
        ja: '第一 — 組手の構え',
      },
      attacker: {
        en: 'The imagined opponent faces off in fighting distance; no committed attack is launched yet.',
        da: 'Den forestillede modstander stiller sig op på kampafstand; intet egentligt angreb er endnu indledt.',
        ja: '想定した相手が組手の間合いで対峙します。まだ本格的な攻撃は仕掛けられていません。',
      },
      defender: {
        en: 'The practitioner assumes the fighting stance (kumite no kamae), ready to receive the opponent.',
        da: 'Udøveren indtager kampstillingen (kumite no kamae), klar til at modtage modstanderen.',
        ja: '実践者は組手の構えをとり、相手を迎える準備を整えます。',
      },
      technicalNotes: {
        en: 'Source: "1. Kumite no kamae." This opening position sets the guard and distance from which the entire form unfolds; weight stays mobile so the first defence can flow immediately.',
        da: 'Source: "1. Kumite no kamae." Denne åbningsposition sætter garde og afstand, hvorfra hele formen udfolder sig; vægten holdes mobil, så det første forsvar kan flyde med det samme.',
        ja: 'Source: "1. Kumite no kamae." この始まりの姿勢が、型全体が展開する構えと間合いを定めます。最初の防御がすぐに流れ出せるよう、体重は動けるように保ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: 'Step 2 — Defence vs Right Low Roundhouse Kick',
        da: 'Trin 2 — Forsvar mod højre lavt cirkelspark',
        ja: '第二 — 右下段回し蹴りへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a right low roundhouse kick (migi gedan mawashi-geri) to the leg.',
        da: 'Modstanderen angriber med et højre lavt cirkelspark (migi gedan mawashi-geri) mod benet.',
        ja: '相手が右下段回し蹴り（migi gedan mawashi-geri）で脚を攻撃します。',
      },
      defender: {
        en: 'Check the kick with a left stop-kick (hidari stopping), counter with a right low roundhouse kick (migi gedan mawashi geri), then a left high roundhouse kick (hidari jodan mawashi-geri), finishing with a right high spinning back kick (migi jodan ushiro mawashi-geri).',
        da: 'Stop sparket med et venstre stop-spark (hidari stopping), kontr med et højre lavt cirkelspark (migi gedan mawashi geri), derefter et venstre højt cirkelspark (hidari jodan mawashi-geri), og afslut med et højre højt drejende baghjulsspark (migi jodan ushiro mawashi-geri).',
        ja: '左の止め蹴り（hidari stopping）で蹴りを止め、右下段回し蹴り（migi gedan mawashi geri）で反撃し、続いて左上段回し蹴り（hidari jodan mawashi-geri）、右上段後ろ回し蹴り（migi jodan ushiro mawashi-geri）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "2. Migi gedan mawashi-geri: Hidari stopping, migi gedan mawashi geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." The stopping check jams the low kick before the counter chain runs from the gedan mawashi geri up to the two finishing jodan-level kicks.',
        da: 'Source: "2. Migi gedan mawashi-geri: Hidari stopping, migi gedan mawashi geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." Stop-sparket blokerer det lave spark, før kontrakæden løber fra gedan mawashi geri op til de to afsluttende jodan-spark.',
        ja: 'Source: "2. Migi gedan mawashi-geri: Hidari stopping, migi gedan mawashi geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." 止め蹴りが下段蹴りを押さえた後、反撃連鎖が下段回し蹴りから締めの二つの上段蹴りへと流れます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Step 3 — Defence vs Right Front Kick & Right Punch',
        da: 'Trin 3 — Forsvar mod højre frontspark og højre stød',
        ja: '第三 — 右前蹴りと右突きへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a right front kick (migi mae-geri) followed by a right punch (migi tsuki).',
        da: 'Modstanderen angriber med et højre frontspark (migi mae-geri) efterfulgt af et højre stød (migi tsuki).',
        ja: '相手が右前蹴り（migi mae-geri）に続いて右突き（migi tsuki）で攻撃します。',
      },
      defender: {
        en: 'Step back, receive with a left outside block (hidari soto-uke), then a second left outside block combined with a stop-kick (hidari soto-uke + stopping), and counter with a right mid-level roundhouse kick to the face (migi chudan mawashi-geri, to the face).',
        da: 'Træd tilbage, modtag med en venstre udvendig blokering (hidari soto-uke), derefter en anden venstre udvendig blokering kombineret med et stop-spark (hidari soto-uke + stopping), og kontr med et højre mellemhøjt cirkelspark mod ansigtet (migi chudan mawashi-geri, mod ansigtet).',
        ja: '後ろへ下がり、左外受け（hidari soto-uke）で受け、続いて止め蹴りを伴う二度目の左外受け（hidari soto-uke + stopping）を行い、右中段回し蹴り（migi chudan mawashi-geri）を顔面へ（to the face）反撃します。',
      },
      technicalNotes: {
        en: 'Source: "3. Migi mae-geri, migi tsuki: Step back, hidari soto-uke, hidari soto-uke + stopping, migi chudan mawashi-geri (to the face)." The first soto-uke meets the front kick and the second soto-uke with the stopping check covers the follow-up punch before the chudan mawashi-geri counters to the face.',
        da: 'Source: "3. Migi mae-geri, migi tsuki: Step back, hidari soto-uke, hidari soto-uke + stopping, migi chudan mawashi-geri (to the face)." Det første soto-uke møder frontsparket, og det andet soto-uke med stop-sparket dækker det efterfølgende stød, før chudan mawashi-geri kontrerer mod ansigtet.',
        ja: 'Source: "3. Migi mae-geri, migi tsuki: Step back, hidari soto-uke, hidari soto-uke + stopping, migi chudan mawashi-geri (to the face)." 最初の外受けが前蹴りを受け、止め蹴りを伴う二度目の外受けが続く突きを押さえてから、中段回し蹴りが顔面へ反撃します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: 'Step 4 — Defence vs Left Low Roundhouse Kick',
        da: 'Trin 4 — Forsvar mod venstre lavt cirkelspark',
        ja: '第四 — 左下段回し蹴りへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a left low roundhouse kick (hidari gedan mawashi geri) to the leg.',
        da: 'Modstanderen angriber med et venstre lavt cirkelspark (hidari gedan mawashi geri) mod benet.',
        ja: '相手が左下段回し蹴り（hidari gedan mawashi geri）で脚を攻撃します。',
      },
      defender: {
        en: 'Check the kick with a left stop-kick (hidari stopping), counter with a right low roundhouse kick (migi gedan mawashi-geri), then a left high roundhouse kick (hidari jodan mawashi-geri), finishing with a right high spinning back kick (migi jodan ushiro mawashi-geri).',
        da: 'Stop sparket med et venstre stop-spark (hidari stopping), kontr med et højre lavt cirkelspark (migi gedan mawashi-geri), derefter et venstre højt cirkelspark (hidari jodan mawashi-geri), og afslut med et højre højt drejende baghjulsspark (migi jodan ushiro mawashi-geri).',
        ja: '左の止め蹴り（hidari stopping）で蹴りを止め、右下段回し蹴り（migi gedan mawashi-geri）で反撃し、続いて左上段回し蹴り（hidari jodan mawashi-geri）、右上段後ろ回し蹴り（migi jodan ushiro mawashi-geri）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "4. Hidari gedan mawashi geri: Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." This mirrors step 2 against the opposite-side low kick; the same stopping check feeds the gedan mawashi-geri and the two finishing jodan kicks.',
        da: 'Source: "4. Hidari gedan mawashi geri: Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." Dette spejler trin 2 mod det modsatte lave spark; samme stop-spark fører til gedan mawashi-geri og de to afsluttende jodan-spark.',
        ja: 'Source: "4. Hidari gedan mawashi geri: Hidari stopping, migi gedan mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." これは第二を反対側の下段蹴りに対して鏡映ししたものです。同じ止め蹴りが下段回し蹴りと締めの二つの上段蹴りへと繋がります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Step 5 — Defence vs Left Front Kick & Left Punch',
        da: 'Trin 5 — Forsvar mod venstre frontspark og venstre stød',
        ja: '第五 — 左前蹴りと左突きへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a left front kick (hidari mae-geri) followed by a left punch (hidari tsuki).',
        da: 'Modstanderen angriber med et venstre frontspark (hidari mae-geri) efterfulgt af et venstre stød (hidari tsuki).',
        ja: '相手が左前蹴り（hidari mae-geri）に続いて左突き（hidari tsuki）で攻撃します。',
      },
      defender: {
        en: 'Step back, sweep the kick aside with a left low sweep block (hidari gedan-barai), then a right outside block combined with a right low roundhouse kick (migi soto-uke + migi gedan mawashi-geri) at position 4, finishing with a left mid-level roundhouse kick (hidari chudan mawashi-geri).',
        da: 'Træd tilbage, fej sparket til side med en venstre lav fejeblokering (hidari gedan-barai), derefter en højre udvendig blokering kombineret med et højre lavt cirkelspark (migi soto-uke + migi gedan mawashi-geri) på position 4, og afslut med et venstre mellemhøjt cirkelspark (hidari chudan mawashi-geri).',
        ja: '後ろへ下がり、左下段払い（hidari gedan-barai）で蹴りを払い、位置4で右外受けと右下段回し蹴り（migi soto-uke + migi gedan mawashi-geri）を組み合わせ、左中段回し蹴り（hidari chudan mawashi-geri）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "5. Hidari mae-geri, hidari tsuki: Step back, hidari gedan-barai, migi soto-uke + migi gedan mawashi-geri (pos 4), hidari chudan mawashi-geri." The gedan-barai sweeps the front kick down, the soto-uke covers the punch while the simultaneous gedan mawashi-geri counters low, and the chudan mawashi-geri finishes from position 4.',
        da: 'Source: "5. Hidari mae-geri, hidari tsuki: Step back, hidari gedan-barai, migi soto-uke + migi gedan mawashi-geri (pos 4), hidari chudan mawashi-geri." Gedan-barai fejer frontsparket nedad, soto-uke dækker stødet, mens det samtidige gedan mawashi-geri kontrerer lavt, og chudan mawashi-geri afslutter fra position 4.',
        ja: 'Source: "5. Hidari mae-geri, hidari tsuki: Step back, hidari gedan-barai, migi soto-uke + migi gedan mawashi-geri (pos 4), hidari chudan mawashi-geri." 下段払いが前蹴りを下方へ払い、外受けが突きを押さえつつ同時の下段回し蹴りが下段で反撃し、中段回し蹴りが位置4から締めくくります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: 'Step 6 — Defence vs Right High Roundhouse Kick',
        da: 'Trin 6 — Forsvar mod højre højt cirkelspark',
        ja: '第六 — 右上段回し蹴りへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a right high roundhouse kick (migi jodan mawashi-geri) to the head.',
        da: 'Modstanderen angriber med et højre højt cirkelspark (migi jodan mawashi-geri) mod hovedet.',
        ja: '相手が右上段回し蹴り（migi jodan mawashi-geri）で頭部を攻撃します。',
      },
      defender: {
        en: 'Receive with a left upper block (hidari jodan-uke), deliver a left side kick (hidari yoko-geri), then a right mid-level roundhouse kick (migi chudan mawashi-geri), a left high spinning back kick (hidari jodan ushiro mawashi-geri), finishing with a left high roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Modtag med en venstre øvre blokering (hidari jodan-uke), udfør et venstre sidespark (hidari yoko-geri), derefter et højre mellemhøjt cirkelspark (migi chudan mawashi-geri), et venstre højt drejende baghjulsspark (hidari jodan ushiro mawashi-geri), og afslut med et venstre højt cirkelspark (hidari jodan mawashi-geri).',
        ja: '左上段受け（hidari jodan-uke）で受け、左横蹴り（hidari yoko-geri）を放ち、続いて右中段回し蹴り（migi chudan mawashi-geri）、左上段後ろ回し蹴り（hidari jodan ushiro mawashi-geri）、左上段回し蹴り（hidari jodan mawashi-geri）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "6. Migi jodan mawashi-geri: Hidari jodan-uke, hidari yoko-geri, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri." The jodan-uke covers the head, then the yoko-geri opens a long kicking chain that flows through the chudan mawashi-geri and the two finishing jodan kicks.',
        da: 'Source: "6. Migi jodan mawashi-geri: Hidari jodan-uke, hidari yoko-geri, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri." Jodan-uke dækker hovedet, derefter åbner yoko-geri en lang sparkekæde, der flyder gennem chudan mawashi-geri og de to afsluttende jodan-spark.',
        ja: 'Source: "6. Migi jodan mawashi-geri: Hidari jodan-uke, hidari yoko-geri, migi chudan mawashi-geri, hidari jodan ushiro mawashi-geri, hidari jodan mawashi-geri." 上段受けが頭部を守り、横蹴りが長い蹴りの連鎖を開き、中段回し蹴りと締めの二つの上段蹴りへと流れます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: 'Step 7 — Defence vs Left Front Kick (Entering & Back Throw)',
        da: 'Trin 7 — Forsvar mod venstre frontspark (indtrængen og bagudkast)',
        ja: '第七 — 左前蹴りへの対応（入り身と裏投げ）',
      },
      attacker: {
        en: 'The opponent attacks with a left front kick (hidari mae-geri).',
        da: 'Modstanderen angriber med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（hidari mae-geri）で攻撃します。',
      },
      defender: {
        en: 'Step back, sweep the kick aside with a left low sweep block (hidari gedan-barai), enter (irimi) at position 4, execute a back throw (ura-nage), then drive a right knee strike to the back of the head (migi hiza-geri, to the back of head).',
        da: 'Træd tilbage, fej sparket til side med en venstre lav fejeblokering (hidari gedan-barai), træng ind (irimi) på position 4, udfør et bagudkast (ura-nage), og driv derefter et højre knæstød mod baghovedet (migi hiza-geri, mod baghovedet).',
        ja: '後ろへ下がり、左下段払い（hidari gedan-barai）で蹴りを払い、位置4で入り身（irimi）し、裏投げ（ura-nage）を行い、右膝蹴り（migi hiza-geri）を後頭部へ（to the back of head）打ち込みます。',
      },
      technicalNotes: {
        en: 'Source: "7. Hidari mae-geri: Step back, hidari gedan-barai, irimi (pos 4), ura-nage, migi hiza-geri to the back of head." The gedan-barai clears the kick, the irimi at position 4 sets the entry for the ura-nage, and the hiza-geri finishes on the downed opponent at the back of the head.',
        da: 'Source: "7. Hidari mae-geri: Step back, hidari gedan-barai, irimi (pos 4), ura-nage, migi hiza-geri to the back of head." Gedan-barai rydder sparket, irimi på position 4 sætter indgangen til ura-nage, og hiza-geri afslutter på den nedlagte modstander i baghovedet.',
        ja: 'Source: "7. Hidari mae-geri: Step back, hidari gedan-barai, irimi (pos 4), ura-nage, migi hiza-geri to the back of head." 下段払いが蹴りを払い、位置4での入り身が裏投げへの入りを作り、膝蹴りが倒れた相手の後頭部に止めを刺します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: 'Step 8 — Defence vs Left High Roundhouse Kick',
        da: 'Trin 8 — Forsvar mod venstre højt cirkelspark',
        ja: '第八 — 左上段回し蹴りへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a left high roundhouse kick (hidari jodan mawashi-geri) to the head.',
        da: 'Modstanderen angriber med et venstre højt cirkelspark (hidari jodan mawashi-geri) mod hovedet.',
        ja: '相手が左上段回し蹴り（hidari jodan mawashi-geri）で頭部を攻撃します。',
      },
      defender: {
        en: 'Receive with a right upper block combined with a right pivot-leg kick (migi jodan-uke + migi jikuashi-geri), flow into a circular block (mawashi-uke) at position 2, deliver a left knee strike (hidari hiza-geri), then finish with a right elbow strike (migi hiji-uchi).',
        da: 'Modtag med en højre øvre blokering kombineret med et højre pivotbensspark (migi jodan-uke + migi jikuashi-geri), flyd over i en cirkulær blokering (mawashi-uke) på position 2, udfør et venstre knæstød (hidari hiza-geri), og afslut med et højre albuestød (migi hiji-uchi).',
        ja: '右上段受けと右軸足蹴り（migi jodan-uke + migi jikuashi-geri）を組み合わせて受け、位置2で回し受け（mawashi-uke）へと流れ、左膝蹴り（hidari hiza-geri）を打ち、右肘打ち（migi hiji-uchi）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke + migi jikuashi-geri, (mawashi-uke) (pos 2), hidari hiza-geri, migi hiji-uchi." The jodan-uke covers the head while the simultaneous jikuashi-geri attacks the pivot leg; the mawashi-uke then closes the angle so the hiza-geri and finishing hiji-uchi land at close range.',
        da: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke + migi jikuashi-geri, (mawashi-uke) (pos 2), hidari hiza-geri, migi hiji-uchi." Jodan-uke dækker hovedet, mens det samtidige jikuashi-geri angriber pivotbenet; mawashi-uke lukker derefter vinklen, så hiza-geri og det afsluttende hiji-uchi lander på kort hold.',
        ja: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke + migi jikuashi-geri, (mawashi-uke) (pos 2), hidari hiza-geri, migi hiji-uchi." 上段受けが頭部を守りつつ同時の軸足蹴りが軸足を攻め、回し受けが角度を詰めるので、近い距離で膝蹴りと締めの肘打ちが入ります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: 'Step 9 — Defence vs Right High Roundhouse Kick (Throw)',
        da: 'Trin 9 — Forsvar mod højre højt cirkelspark (kast)',
        ja: '第九 — 右上段回し蹴りへの対応（投げ）',
      },
      attacker: {
        en: 'The opponent attacks with a right high roundhouse kick (migi jodan mawashi-geri) to the head.',
        da: 'Modstanderen angriber med et højre højt cirkelspark (migi jodan mawashi-geri) mod hovedet.',
        ja: '相手が右上段回し蹴り（migi jodan mawashi-geri）で頭部を攻撃します。',
      },
      defender: {
        en: 'Check with a pivot-leg stop-kick (jikuashi (pivot leg) stopping), deliver a right inner-thigh kick (migi uchimomo-geri), then a right mid-level roundhouse kick (migi chudan mawashi-geri), execute a wrap-around throw (maki komi nage), and settle into horse stance (kiba dachi).',
        da: 'Stop med et pivotbens-stop-spark (jikuashi (pivotben) stopping), udfør et højre inderlårsspark (migi uchimomo-geri), derefter et højre mellemhøjt cirkelspark (migi chudan mawashi-geri), udfør et omsluttende kast (maki komi nage), og sæt dig i hesteposition (kiba dachi).',
        ja: '軸足の止め蹴り（jikuashi（軸足）stopping）で押さえ、右内腿蹴り（migi uchimomo-geri）を放ち、続いて右中段回し蹴り（migi chudan mawashi-geri）、巻き込み投げ（maki komi nage）を行い、騎馬立ち（kiba dachi）に収まります。',
      },
      technicalNotes: {
        en: 'Source: "9. Migi jodan mawashi-geri: Jikuashi (pivot leg) stopping, migi uchimomo-geri, migi chudan mawashi-geri, maki komi nage, kiba dachi." The pivot-leg stopping jams the kick, the uchimomo-geri and chudan mawashi-geri break the balance, and the maki komi nage wraps the opponent down before the kiba dachi anchors the finish.',
        da: 'Source: "9. Migi jodan mawashi-geri: Jikuashi (pivot leg) stopping, migi uchimomo-geri, migi chudan mawashi-geri, maki komi nage, kiba dachi." Pivotbens-stop-sparket blokerer sparket, uchimomo-geri og chudan mawashi-geri bryder balancen, og maki komi nage omslutter modstanderen nedad, før kiba dachi forankrer afslutningen.',
        ja: 'Source: "9. Migi jodan mawashi-geri: Jikuashi (pivot leg) stopping, migi uchimomo-geri, migi chudan mawashi-geri, maki komi nage, kiba dachi." 軸足の止め蹴りが蹴りを押さえ、内腿蹴りと中段回し蹴りが体勢を崩し、巻き込み投げが相手を巻き込んで倒した後、騎馬立ちが締めを固定します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: 'Step 10 — Finishing Low Punch, Stamp & Return to Kamae',
        da: 'Trin 10 — Afsluttende lavt stød, stamp og tilbage til kamae',
        ja: '第十 — 締めの下段突き、踏み込み、構えへ戻る',
      },
      attacker: {
        en: 'The opponent is downed; no new committed attack — the practitioner finishes on the grounded opponent and resets.',
        da: 'Modstanderen er nede; intet nyt egentligt angreb — udøveren afslutter på den nedlagte modstander og nulstiller.',
        ja: '相手は倒れています。新たな本格的な攻撃はありません。実践者は倒れた相手に止めを行い、構えに戻ります。',
      },
      defender: {
        en: 'Deliver a right low punch (migi gedan tsuki), drive a right heel stamping kick (migi kakato-fumikomi) downward, then return to the fighting stance (kumite no kamae).',
        da: 'Udfør et højre lavt stød (migi gedan tsuki), driv et højre hælestamp-spark (migi kakato-fumikomi) nedad, og vend derefter tilbage til kampstillingen (kumite no kamae).',
        ja: '右下段突き（migi gedan tsuki）を放ち、右踵踏み込み（migi kakato-fumikomi）を下方へ打ち込み、組手の構え（kumite no kamae）に戻ります。',
      },
      technicalNotes: {
        en: 'Source: "10. Migi gedan tsuki, migi kakato-fumikomi, kumite no kamae." The gedan tsuki and the stamping kakato-fumikomi finish the downed opponent before the form resets to the opening kamae.',
        da: 'Source: "10. Migi gedan tsuki, migi kakato-fumikomi, kumite no kamae." Gedan tsuki og det stampende kakato-fumikomi afslutter den nedlagte modstander, før formen nulstilles til åbningens kamae.',
        ja: 'Source: "10. Migi gedan tsuki, migi kakato-fumikomi, kumite no kamae." 下段突きと踏み込みの踵蹴りが倒れた相手に止めを刺し、型は最初の構えへと戻ります。',
      },
      schoolVariations: [],
    },
  ],
};
