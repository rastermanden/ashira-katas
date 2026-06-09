import type { Kata } from '../types';

export const kumiteKataIchi: Kata = {
  id: 'kumite-kata-ichi',
  japaneseCharacters: '組手の型 一',
  romaji: 'Kumite no Kata — Sono Ichi',
  name: {
    en: 'Kumite Kata 1',
    da: 'Kumite Kata 1',
    ja: '組手の型 一',
  },
  requiredForKyu: [7, 6, 5, 4, 3, 2, 1],
  description: {
    en: 'The Kumite no Kata are the sparring forms of Ashihara Karate — flowing defence-and-counter sequences performed solo against an imagined opponent. They emphasise mawashi-geri (roundhouse) exchanges, knee strikes (hiza-geri), throws and the closing fumikomi stamp. Kumite no Kata — Sono Ichi is the first of these forms.',
    da: 'Kumite no Kata er Ashihara Karates sparringsformer — flydende forsvars- og kontrasekvenser udført solo mod en forestillet modstander. De lægger vægt på mawashi-geri (cirkelspark) udvekslinger, knæstød (hiza-geri), kast og det afsluttende fumikomi-stamp. Kumite no Kata — Sono Ichi er den første af disse former.',
    ja: '組手の型はアシハラ空手の組手形であり、想定した相手に対して単独で行う流れるような防御と反撃の連続です。回し蹴りの応酬、膝蹴り（膝蹴り）、投げ、そして締めくくりの踏み込みを重視します。組手の型 一はこれらの型の最初のものです。',
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
        en: 'Check the kick with a left shin block (hidari sune-uke), then counter with a right low roundhouse kick (migi gedan mawashi-geri) followed by a left high roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Stop sparket med en venstre skinnebensblokering (hidari sune-uke), og kontr derefter med et højre lavt cirkelspark (migi gedan mawashi-geri) efterfulgt af et venstre højt cirkelspark (hidari jodan mawashi-geri).',
        ja: '左の脛受け（hidari sune-uke）で蹴りを受け、続いて右下段回し蹴り（migi gedan mawashi-geri）、さらに左上段回し蹴り（hidari jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "2. Migi gedan mawashi-geri: Hidari sune-uke, migi gedan mawashi-geri, hidari jodan mawashi-geri." The shin block absorbs the incoming gedan mawashi-geri before the same-line low kick and the rising jodan mawashi-geri chain off it in one flow.',
        da: 'Source: "2. Migi gedan mawashi-geri: Hidari sune-uke, migi gedan mawashi-geri, hidari jodan mawashi-geri." Skinnebensblokeringen absorberer det indkommende gedan mawashi-geri, før det lave spark på samme linje og det stigende jodan mawashi-geri kæder sig på i ét flow.',
        ja: 'Source: "2. Migi gedan mawashi-geri: Hidari sune-uke, migi gedan mawashi-geri, hidari jodan mawashi-geri." 脛受けが入ってくる下段回し蹴りを吸収し、その後に同じ線上の下段蹴りと上段への回し蹴りが一つの流れで連鎖します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: 'Step 3 — Defence vs Right Front Kick',
        da: 'Trin 3 — Forsvar mod højre frontspark',
        ja: '第三 — 右前蹴りへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a right front kick (migi mae-geri).',
        da: 'Modstanderen angriber med et højre frontspark (migi mae-geri).',
        ja: '相手が右前蹴り（migi mae-geri）で攻撃します。',
      },
      defender: {
        en: 'Step back, receive with a left outside block (hidari soto-uke), flow into a circular block (mawashi-uke) at position 1, then drive in a right knee strike (migi hiza-geri).',
        da: 'Træd tilbage, modtag med en venstre udvendig blokering (hidari soto-uke), flyd over i en cirkulær blokering (mawashi-uke) på position 1, og driv derefter et højre knæstød (migi hiza-geri) ind.',
        ja: '後ろへ下がり、左外受け（hidari soto-uke）で受け、位置1で回し受け（mawashi-uke）へと流れ、右膝蹴り（migi hiza-geri）を打ち込みます。',
      },
      technicalNotes: {
        en: 'Source: "3. Migi mae-geri: Step back, hidari soto-uke, mawashi-uke (pos 1), migi hiza-geri." Stepping back creates the distance for the soto-uke; the mawashi-uke wraps the limb so the closing hiza-geri lands from the entered position.',
        da: 'Source: "3. Migi mae-geri: Step back, hidari soto-uke, mawashi-uke (pos 1), migi hiza-geri." At træde tilbage skaber afstanden til soto-uke; mawashi-uke omslutter lemmen, så det afsluttende hiza-geri lander fra den indtrådte position.',
        ja: 'Source: "3. Migi mae-geri: Step back, hidari soto-uke, mawashi-uke (pos 1), migi hiza-geri." 後ろへ下がることで外受けの間合いが生まれます。回し受けが相手の手足を包み込み、踏み込んだ位置から締めの膝蹴りが入ります。',
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
        en: 'The opponent attacks with a left low roundhouse kick (hidari gedan mawashi-geri) to the leg.',
        da: 'Modstanderen angriber med et venstre lavt cirkelspark (hidari gedan mawashi-geri) mod benet.',
        ja: '相手が左下段回し蹴り（hidari gedan mawashi-geri）で脚を攻撃します。',
      },
      defender: {
        en: 'Check the kick with a left shin block (hidari sune-uke), then counter with a right low roundhouse kick (migi gedan mawashi-geri) followed by a left high roundhouse kick (hidari jodan mawashi-geri).',
        da: 'Stop sparket med en venstre skinnebensblokering (hidari sune-uke), og kontr derefter med et højre lavt cirkelspark (migi gedan mawashi-geri) efterfulgt af et venstre højt cirkelspark (hidari jodan mawashi-geri).',
        ja: '左の脛受け（hidari sune-uke）で蹴りを受け、続いて右下段回し蹴り（migi gedan mawashi-geri）、さらに左上段回し蹴り（hidari jodan mawashi-geri）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "4. Hidari gedan mawashi-geri: Hidari sune-uke, migi gedan mawashi-geri, hidari jodan mawashi-geri." This mirrors step 2 against the opposite-side low kick; the same sune-uke check sets up the low-then-high mawashi-geri counter chain.',
        da: 'Source: "4. Hidari gedan mawashi-geri: Hidari sune-uke, migi gedan mawashi-geri, hidari jodan mawashi-geri." Dette spejler trin 2 mod det modsatte lave spark; samme sune-uke-stop sætter den lave-derefter-høje mawashi-geri kontrakæde op.',
        ja: 'Source: "4. Hidari gedan mawashi-geri: Hidari sune-uke, migi gedan mawashi-geri, hidari jodan mawashi-geri." これは第二を反対側の下段蹴りに対して鏡映ししたものです。同じ脛受けが下段から上段への回し蹴りの反撃連鎖を準備します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: 'Step 5 — Defence vs Left Front Kick',
        da: 'Trin 5 — Forsvar mod venstre frontspark',
        ja: '第五 — 左前蹴りへの対応',
      },
      attacker: {
        en: 'The opponent attacks with a left front kick (hidari mae-geri).',
        da: 'Modstanderen angriber med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（hidari mae-geri）で攻撃します。',
      },
      defender: {
        en: 'Step back, sweep the kick aside with a left low sweep block (hidari gedan-barai), flow into a circular block (mawashi-uke) at position 2, then drive in a left knee strike (hidari hiza-geri).',
        da: 'Træd tilbage, fej sparket til side med en venstre lav fejeblokering (hidari gedan-barai), flyd over i en cirkulær blokering (mawashi-uke) på position 2, og driv derefter et venstre knæstød (hidari hiza-geri) ind.',
        ja: '後ろへ下がり、左下段払い（hidari gedan-barai）で蹴りを払い、位置2で回し受け（mawashi-uke）へと流れ、左膝蹴り（hidari hiza-geri）を打ち込みます。',
      },
      technicalNotes: {
        en: 'Source: "5. Hidari mae-geri: Step back, hidari gedan-barai, mawashi-uke (pos 2), hidari hiza-geri." The gedan-barai sweeps the front kick downward; the mawashi-uke at position 2 closes the angle so the hiza-geri finishes the entry.',
        da: 'Source: "5. Hidari mae-geri: Step back, hidari gedan-barai, mawashi-uke (pos 2), hidari hiza-geri." Gedan-barai fejer frontsparket nedad; mawashi-uke på position 2 lukker vinklen, så hiza-geri afslutter indgangen.',
        ja: 'Source: "5. Hidari mae-geri: Step back, hidari gedan-barai, mawashi-uke (pos 2), hidari hiza-geri." 下段払いが前蹴りを下方へ払います。位置2の回し受けが角度を詰め、膝蹴りが入りを締めくくります。',
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
        en: 'Receive with a left upper block (hidari jodan-uke) while simultaneously delivering a left joint (knee) kick (hidari kansetsu-geri).',
        da: 'Modtag med en venstre øvre blokering (hidari jodan-uke) samtidig med, at du udfører et venstre ledspark (hidari kansetsu-geri).',
        ja: '左上段受け（hidari jodan-uke）で受けると同時に、左関節蹴り（hidari kansetsu-geri）を膝へ打ち込みます。',
      },
      technicalNotes: {
        en: 'Source: "6. Migi jodan mawashi-geri: Hidari jodan-uke + hidari kansetsu-geri." The block and the kansetsu-geri are simultaneous: the jodan-uke covers the head while the joint kick attacks the supporting leg in the same beat.',
        da: 'Source: "6. Migi jodan mawashi-geri: Hidari jodan-uke + hidari kansetsu-geri." Blokeringen og kansetsu-geri er samtidige: jodan-uke dækker hovedet, mens ledsparket angriber støttebenet i samme takt.',
        ja: 'Source: "6. Migi jodan mawashi-geri: Hidari jodan-uke + hidari kansetsu-geri." 受けと関節蹴りは同時です。上段受けが頭部を守り、同じ拍子で関節蹴りが支え脚を攻めます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: 'Step 7 — Defence vs Left Front Kick (Cross Step & Back Kick)',
        da: 'Trin 7 — Forsvar mod venstre frontspark (krydstrin og bagspark)',
        ja: '第七 — 左前蹴りへの対応（交差足と後ろ蹴り）',
      },
      attacker: {
        en: 'The opponent attacks with a left front kick (hidari mae-geri).',
        da: 'Modstanderen angriber med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（hidari mae-geri）で攻撃します。',
      },
      defender: {
        en: 'Step back, sweep the kick aside with a left low sweep block (hidari gedan barai) using a left cross step (hidari cross step), then turn and deliver a right back kick (migi ushiro-geri).',
        da: 'Træd tilbage, fej sparket til side med en venstre lav fejeblokering (hidari gedan barai) med et venstre krydstrin (hidari cross step), vend dig derefter og udfør et højre bagspark (migi ushiro-geri).',
        ja: '後ろへ下がり、左交差足（hidari cross step）を使って左下段払い（hidari gedan barai）で蹴りを払い、振り向いて右後ろ蹴り（migi ushiro-geri）を放ちます。',
      },
      technicalNotes: {
        en: 'Source: "7. Hidari mae-geri: Step back, hidari gedan barai (hidari cross step), migi ushiro-geri." The cross step loads the rotation so the gedan barai flows directly into the turning ushiro-geri without a pause.',
        da: 'Source: "7. Hidari mae-geri: Step back, hidari gedan barai (hidari cross step), migi ushiro-geri." Krydstrinet lader rotationen, så gedan barai flyder direkte over i det drejende ushiro-geri uden pause.',
        ja: 'Source: "7. Hidari mae-geri: Step back, hidari gedan barai (hidari cross step), migi ushiro-geri." 交差足が回転を溜め、下段払いがそのまま間を置かずに回転する後ろ蹴りへと流れます。',
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
        en: 'Receive with a right upper block (migi jodan-uke), flow into a circular block (mawashi-uke) while stepping in to the right (migi okuri ashi) at position 2, then deliver a left knee strike (hidari hiza-geri) and finish with a right elbow strike (migi hiji-uchi).',
        da: 'Modtag med en højre øvre blokering (migi jodan-uke), flyd over i en cirkulær blokering (mawashi-uke), mens du træder ind til højre (migi okuri ashi) på position 2, udfør derefter et venstre knæstød (hidari hiza-geri) og afslut med et højre albuestød (migi hiji-uchi).',
        ja: '右上段受け（migi jodan-uke）で受け、右へ送り足（migi okuri ashi）で踏み込みながら位置2で回し受け（mawashi-uke）へと流れ、左膝蹴り（hidari hiza-geri）を打ち、右肘打ち（migi hiji-uchi）で締めくくります。',
      },
      technicalNotes: {
        en: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri, migi hiji-uchi." The okuri ashi closes the distance under the high kick so the hiza-geri and the finishing hiji-uchi land at close range.',
        da: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri, migi hiji-uchi." Okuri ashi lukker afstanden under det høje spark, så hiza-geri og det afsluttende hiji-uchi lander på kort hold.',
        ja: 'Source: "8. Hidari jodan mawashi-geri: Migi jodan-uke, mawashi-uke + migi okuri ashi (pos 2), hidari hiza-geri, migi hiji-uchi." 送り足が上段蹴りの下で間合いを詰め、近い距離で膝蹴りと締めの肘打ちが入ります。',
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
        en: 'Receive with a left upper block (hidari jodan-uke), flow into a circular block (mawashi-uke), drive in a right knee strike (migi hiza-geri), then execute a wrap-around throw (maki komi nage) and settle into horse stance (kiba dachi).',
        da: 'Modtag med en venstre øvre blokering (hidari jodan-uke), flyd over i en cirkulær blokering (mawashi-uke), driv et højre knæstød (migi hiza-geri) ind, udfør derefter et omsluttende kast (maki komi nage) og sæt dig i hesteposition (kiba dachi).',
        ja: '左上段受け（hidari jodan-uke）で受け、回し受け（mawashi-uke）へと流れ、右膝蹴り（migi hiza-geri）を打ち込み、巻き込み投げ（maki komi nage）を行い、騎馬立ち（kiba dachi）に収まります。',
      },
      technicalNotes: {
        en: 'Source: "9. Migi jodan mawashi-geri: Hidari jodan-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi." After the jodan-uke and hiza-geri break the balance, the maki komi nage wraps the opponent down and the kiba dachi anchors the finish.',
        da: 'Source: "9. Migi jodan mawashi-geri: Hidari jodan-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi." Efter at jodan-uke og hiza-geri har brudt balancen, omslutter maki komi nage modstanderen nedad, og kiba dachi forankrer afslutningen.',
        ja: 'Source: "9. Migi jodan mawashi-geri: Hidari jodan-uke, (mawashi-uke), migi hiza-geri, maki komi nage, kiba dachi." 上段受けと膝蹴りで崩した後、巻き込み投げが相手を巻き込んで倒し、騎馬立ちが締めを固定します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: 'Step 10 — Finishing Punch, Stamp & Return to Kamae',
        da: 'Trin 10 — Afsluttende stød, stamp og tilbage til kamae',
        ja: '第十 — 締めの突き、踏み込み、構えへ戻る',
      },
      attacker: {
        en: 'The opponent is downed; no new committed attack — the practitioner finishes on the grounded opponent and resets.',
        da: 'Modstanderen er nede; intet nyt egentligt angreb — udøveren afslutter på den nedlagte modstander og nulstiller.',
        ja: '相手は倒れています。新たな本格的な攻撃はありません。実践者は倒れた相手に止めを行い、構えに戻ります。',
      },
      defender: {
        en: 'Deliver a right punch (migi tsuki), drive a right heel stamping kick (migi kakato-fumikomi) downward, then return to the fighting stance (kumite no kamae).',
        da: 'Udfør et højre stød (migi tsuki), driv et højre hælestamp-spark (migi kakato-fumikomi) nedad, og vend derefter tilbage til kampstillingen (kumite no kamae).',
        ja: '右突き（migi tsuki）を放ち、右踵踏み込み（migi kakato-fumikomi）を下方へ打ち込み、組手の構え（kumite no kamae）に戻ります。',
      },
      technicalNotes: {
        en: 'Source: "10. Migi tsuki, migi kakato-fumikomi, kumite no kamae." The tsuki and the stamping kakato-fumikomi finish the downed opponent before the form resets to the opening kamae.',
        da: 'Source: "10. Migi tsuki, migi kakato-fumikomi, kumite no kamae." Tsuki og det stampende kakato-fumikomi afslutter den nedlagte modstander, før formen nulstilles til åbningens kamae.',
        ja: 'Source: "10. Migi tsuki, migi kakato-fumikomi, kumite no kamae." 突きと踏み込みの踵蹴りが倒れた相手に止めを刺し、型は最初の構えへと戻ります。',
      },
      schoolVariations: [],
    },
  ],
};
