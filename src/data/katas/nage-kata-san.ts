import type { Kata } from '../types';

export const nageKataSan: Kata = {
  id: 'nage-kata-san',
  japaneseCharacters: '投げの型 三',
  romaji: 'Nage no Kata — Sono San',
  name: {
    en: 'Throwing Form 3',
    da: 'Kasteform 3',
    ja: '投げの型 三',
  },
  description: {
    en: 'The Nage no Kata are the throwing forms of Ashihara Karate — each block-and-clinch sequence ends in a throw. Sono Ichi and Sono Ni build the core throws (maki-komi-nage, ura-nage, kubi-nage); Sono San and Sono Yon add knee strikes, takedowns (hikitaoshi) and longer combinations. Sono San adds repeated knee strikes, pull-down takedowns (hikitaoshi) and longer kicking combinations against an imagined opponent.',
    da: 'Nage no Kata er kasteformerne i Ashihara Karate — hver blok-og-clinch-sekvens ender i et kast. Sono Ichi og Sono Ni opbygger kernekastene (maki-komi-nage, ura-nage, kubi-nage); Sono San og Sono Yon tilføjer knæstød, nedtagninger (hikitaoshi) og længere kombinationer. Sono San tilføjer gentagne knæstød, nedtræknings-nedtagninger (hikitaoshi) og længere sparkekombinationer mod en forestillet modstander.',
    ja: '投げの型はアシハラ空手の投げ技の型であり、受けとクリンチの各連続技は投げで終わります。其の一と其の二は基本の投げ技（巻き込み投げ、裏投げ、首投げ）を構築し、其の三と其の四は膝蹴り、引き倒し、より長い連続技を加えます。其の三は想定した相手に対し、連続膝蹴り、引き倒しのテイクダウン（引き倒し）、より長い蹴りの連続技を加えます。',
  },
  youtubeLinks: [],
  steps: [
    {
      stepNumber: 1,
      name: {
        en: '1. Fighting Stance (Kumite no Kamae)',
        da: '1. Kampstilling (Kumite no Kamae)',
        ja: '一、組手の構え',
      },
      attacker: {
        en: 'The imagined opponent faces off opposite the practitioner; no committed attack is launched yet.',
        da: 'Den forestillede modstander står over for udøveren; intet egentligt angreb er endnu indledt.',
        ja: '想定した相手が稽古者と向き合います。まだ本格的な攻撃は仕掛けられていません。',
      },
      defender: {
        en: 'The practitioner assumes the fighting stance (kumite no kamae), settling into a balanced guard ready to read and respond to the opponent.',
        da: 'Udøveren indtager kampstillingen (kumite no kamae) og falder til ro i en balanceret garde, klar til at aflæse og reagere på modstanderen.',
        ja: '稽古者は組手の構えをとり、相手の動きを読んで対応できるよう、バランスの取れた構えに落ち着きます。',
      },
      technicalNotes: {
        en: 'Source: "Kumite no kamae." This is the opening guard from which every subsequent throw flows; keep the weight mobile and the hands ready to bridge into the first block.',
        da: 'Source: "Kumite no kamae." Dette er den indledende garde, hvorfra hvert efterfølgende kast udspringer; hold vægten mobil og hænderne klar til at gå over i den første blok.',
        ja: 'Source: "Kumite no kamae." これは続くすべての投げが流れ出す最初の構えです。体重を機動的に保ち、最初の受けへ移れるよう手を準備しておきます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 2,
      name: {
        en: '2. Double Knee Strike & Wrap-Around Throw vs Right Low Roundhouse',
        da: '2. Dobbelt knæstød og wrap-around-kast mod højre lavt cirkelspark',
        ja: '二、右下段回し蹴りへの二段膝蹴り・巻き込み投げ',
      },
      attacker: {
        en: 'The opponent throws a right low roundhouse kick to the leg (migi gedan mawashi-geri).',
        da: 'Modstanderen sparker et højre lavt cirkelspark mod benet (migi gedan mawashi-geri).',
        ja: '相手が脚への右下段回し蹴り（右下段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Catch the kick with a left shin block (hidari sune-uke), flow into a circular block (mawashi-uke, position 1) to control the leg, drive in two right knee strikes (migi hiza-geri x 2), then finish with a wrap-around throw (maki-komi-nage).',
        da: 'Fang sparket med en venstre skinnebensblok (hidari sune-uke), gå over i en cirkulær blok (mawashi-uke, position 1) for at kontrollere benet, driv to højre knæstød ind (migi hiza-geri x 2), og afslut med et wrap-around-kast (maki-komi-nage).',
        ja: '左の脛受け（左脛受け）で蹴りを受け止め、回し受け（mawashi-uke、ポジション1）に流して脚を制し、右膝蹴りを二回（右膝蹴り×2）入れ、巻き込み投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi gedan mawashi-geri: Hidari sune-uke, mawashi-uke (pos 1), migi hiza-geri x 2, maki komi nage." Land both migi hiza-geri inside the mawashi-uke clinch before the maki-komi-nage spins the opponent down.',
        da: 'Source: "Migi gedan mawashi-geri: Hidari sune-uke, mawashi-uke (pos 1), migi hiza-geri x 2, maki komi nage." Land begge migi hiza-geri inde i mawashi-uke-clinchen, før maki-komi-nage spinner modstanderen ned.',
        ja: 'Source: "Migi gedan mawashi-geri: Hidari sune-uke, mawashi-uke (pos 1), migi hiza-geri x 2, maki komi nage." 回し受けのクリンチ内で右膝蹴りを二回当ててから、巻き込み投げで相手を投げ落とします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Double Knee Strike & Pull-Down Takedown vs Right Front Kick and High Punch',
        da: '3. Dobbelt knæstød og nedtræknings-nedtagning mod højre frontspark og høj stød',
        ja: '三、右前蹴り・右上段突きへの二段膝蹴り・引き倒し',
      },
      attacker: {
        en: 'The opponent attacks with a right front kick (migi mae-geri) followed by a right high punch (migi jodan tsuki).',
        da: 'Modstanderen angriber med et højre frontspark (migi mae-geri) efterfulgt af et højre højt stød (migi jodan tsuki).',
        ja: '相手が右前蹴り（右前蹴り）に続いて右上段突き（右上段突き）で攻めてきます。',
      },
      defender: {
        en: 'Step back, parry the kick with a left outside block (hidari soto-uke), block the punch with a left high outside block (hidari jodan soto uke), cross-step in to the right (migi cross okuri-ashi), drive a left knee strike (hidari hiza-geri), move to back position 1, drive a right knee strike (migi hiza-geri), then finish with a pull-down takedown (hikitaoshi).',
        da: 'Træd tilbage, parér sparket med en venstre udadblok (hidari soto-uke), blokér stødet med en venstre høj udadblok (hidari jodan soto uke), kryds-træd ind mod højre (migi cross okuri-ashi), driv et venstre knæstød (hidari hiza-geri), gå til bagposition 1, driv et højre knæstød (migi hiza-geri), og afslut med en nedtræknings-nedtagning (hikitaoshi).',
        ja: '引いて蹴りを左外受け（左外受け）でいなし、突きを左上段外受け（左上段外受け）で受け、右へクロスして踏み込み（右クロス送り足）、左膝蹴り（左膝蹴り）を入れ、バックポジション1へ移動し、右膝蹴り（右膝蹴り）を入れ、引き倒しで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi mae-geri, migi jodan tsuki: Step back, hidari soto-uke, hidari jodan soto uke, migi cross okuri-ashi, hidari hiza-geri, (back pos 1), migi hiza-geri, hikitaoshi (take down/throw down)." The two soto-uke handle kick then punch; the hidari and migi hiza-geri bend the opponent over before the hikitaoshi pulls them down.',
        da: 'Source: "Migi mae-geri, migi jodan tsuki: Step back, hidari soto-uke, hidari jodan soto uke, migi cross okuri-ashi, hidari hiza-geri, (back pos 1), migi hiza-geri, hikitaoshi (take down/throw down)." De to soto-uke håndterer spark og derefter stød; hidari og migi hiza-geri bøjer modstanderen forover, før hikitaoshi trækker dem ned.',
        ja: 'Source: "Migi mae-geri, migi jodan tsuki: Step back, hidari soto-uke, hidari jodan soto uke, migi cross okuri-ashi, hidari hiza-geri, (back pos 1), migi hiza-geri, hikitaoshi (take down/throw down)." 二つの外受けで蹴りと突きをさばき、左右の膝蹴りで相手を折り曲げてから、引き倒しで引き落とします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Double Knee Strike & Wrap-Around Throw vs Left Low Roundhouse',
        da: '4. Dobbelt knæstød og wrap-around-kast mod venstre lavt cirkelspark',
        ja: '四、左下段回し蹴りへの二段膝蹴り・巻き込み投げ',
      },
      attacker: {
        en: 'The opponent throws a left low roundhouse kick to the leg (hidari gedan mawashi-geri).',
        da: 'Modstanderen sparker et venstre lavt cirkelspark mod benet (hidari gedan mawashi-geri).',
        ja: '相手が脚への左下段回し蹴り（左下段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Catch the kick with a left shin block (hidari sune-uke), flow into a circular block (mawashi-uke, position 2) to control the leg, drive in two left knee strikes (hidari hiza-geri x 2), then finish with a wrap-around throw (maki-komi-nage).',
        da: 'Fang sparket med en venstre skinnebensblok (hidari sune-uke), gå over i en cirkulær blok (mawashi-uke, position 2) for at kontrollere benet, driv to venstre knæstød ind (hidari hiza-geri x 2), og afslut med et wrap-around-kast (maki-komi-nage).',
        ja: '左の脛受け（左脛受け）で蹴りを受け止め、回し受け（mawashi-uke、ポジション2）に流して脚を制し、左膝蹴りを二回（左膝蹴り×2）入れ、巻き込み投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari gedan mawashi-geri: Hidari sune-uke, mawashi-uke (pos 2), hidari hiza-geri x 2, maki komi nage." This mirrors step 2 from mawashi-uke position 2; land both hidari hiza-geri before the maki-komi-nage.',
        da: 'Source: "Hidari gedan mawashi-geri: Hidari sune-uke, mawashi-uke (pos 2), hidari hiza-geri x 2, maki komi nage." Dette spejler trin 2 fra mawashi-uke-position 2; land begge hidari hiza-geri før maki-komi-nage.',
        ja: 'Source: "Hidari gedan mawashi-geri: Hidari sune-uke, mawashi-uke (pos 2), hidari hiza-geri x 2, maki komi nage." これは回し受けポジション2からの第二歩の鏡像です。左膝蹴りを二回当ててから巻き込み投げに入ります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Double Knee Strike vs Left Front Kick and High Punch',
        da: '5. Dobbelt knæstød mod venstre frontspark og høj stød',
        ja: '五、左前蹴り・左上段突きへの二段膝蹴り',
      },
      attacker: {
        en: 'The opponent attacks with a left front kick (hidari mae-geri) followed by a left high punch (hidari jodan tsuki).',
        da: 'Modstanderen angriber med et venstre frontspark (hidari mae-geri) efterfulgt af et venstre højt stød (hidari jodan tsuki).',
        ja: '相手が左前蹴り（左前蹴り）に続いて左上段突き（左上段突き）で攻めてきます。',
      },
      defender: {
        en: 'Step back, sweep the kick down with a left lower parry (hidari gedan-barai), deflect the punch with a left knife-hand block (hidari shuto-uke), cross-step in to the left (hidari cross okuri ashi), then drive a left knee strike (hidari hiza-geri) followed by a right knee strike (migi hiza-geri).',
        da: 'Træd tilbage, fej sparket ned med en venstre lav parade (hidari gedan-barai), afvis stødet med en venstre knivhåndsblok (hidari shuto-uke), kryds-træd ind mod venstre (hidari cross okuri ashi), og driv derefter et venstre knæstød (hidari hiza-geri) efterfulgt af et højre knæstød (migi hiza-geri).',
        ja: '引いて左下段払い（左下段払い）で蹴りを払い落とし、左手刀受け（左手刀受け）で突きをさばき、左へクロスして踏み込み（左クロス送り足）、左膝蹴り（左膝蹴り）に続いて右膝蹴り（右膝蹴り）を入れます。',
      },
      technicalNotes: {
        en: 'Source: "Hidari mae-geri, hidari jodan tsuki: Step back, hidari gedan-barai, hidari shuto-uke, hidari cross okuri ashi, hidari hiza-geri, migi hiza-geri." The gedan-barai and shuto-uke handle the kick then punch; the alternating hidari then migi hiza-geri drive the combination home in the clinch.',
        da: 'Source: "Hidari mae-geri, hidari jodan tsuki: Step back, hidari gedan-barai, hidari shuto-uke, hidari cross okuri ashi, hidari hiza-geri, migi hiza-geri." Gedan-barai og shuto-uke håndterer spark og derefter stød; de skiftende hidari og migi hiza-geri driver kombinationen hjem i clinchen.',
        ja: 'Source: "Hidari mae-geri, hidari jodan tsuki: Step back, hidari gedan-barai, hidari shuto-uke, hidari cross okuri ashi, hidari hiza-geri, migi hiza-geri." 下段払いと手刀受けで蹴りと突きをさばき、左右交互の膝蹴りでクリンチ内に連続技を打ち込みます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Kicking Combination vs Right High Roundhouse',
        da: '6. Sparkekombination mod højre høj cirkelspark',
        ja: '六、右上段回し蹴りへの蹴り連続技',
      },
      attacker: {
        en: 'The opponent throws a right high roundhouse kick to the head (migi jodan mawashi-geri).',
        da: 'Modstanderen sparker et højre højt cirkelspark mod hovedet (migi jodan mawashi-geri).',
        ja: '相手が頭部への右上段回し蹴り（右上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step in (instep), block high with a high block (jodan-uke), then counter with a right roundhouse kick (migi mawashi-geri), a left high roundhouse kick (hidari jodan mawashi-geri), and a right high spinning back kick (migi jodan ushiro mawashi-geri).',
        da: 'Træd ind (instep), blokér højt med en høj blok (jodan-uke), og kontrér derefter med et højre cirkelspark (migi mawashi-geri), et venstre højt cirkelspark (hidari jodan mawashi-geri) og et højre højt baglæns hjulspark (migi jodan ushiro mawashi-geri).',
        ja: '踏み込み（instep）、上段受け（上段受け）で高く受け、右回し蹴り（右回し蹴り）、左上段回し蹴り（左上段回し蹴り）、右上段後ろ回し蹴り（右上段後ろ回し蹴り）で反撃します。',
      },
      technicalNotes: {
        en: 'Source: "Migi jodan mawashi-geri: Instep, jodan-uke, migi mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." This is a pure kicking counter — after the jodan-uke, chain the migi mawashi-geri, hidari jodan mawashi-geri and migi jodan ushiro mawashi-geri without resetting the base.',
        da: 'Source: "Migi jodan mawashi-geri: Instep, jodan-uke, migi mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." Dette er en ren sparkekontring — efter jodan-uke kædes migi mawashi-geri, hidari jodan mawashi-geri og migi jodan ushiro mawashi-geri uden at nulstille basen.',
        ja: 'Source: "Migi jodan mawashi-geri: Instep, jodan-uke, migi mawashi-geri, hidari jodan mawashi-geri, migi jodan ushiro mawashi-geri." これは純粋な蹴りの反撃です。上段受けの後、右回し蹴り、左上段回し蹴り、右上段後ろ回し蹴りを支持基底を崩さずにつなぎます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Low Kick, Knee Strike & Elbow vs Left Front Kick',
        da: '7. Lavt spark, knæstød og albue mod venstre frontspark',
        ja: '七、左前蹴りへの下段蹴り・膝蹴り・肘打ち',
      },
      attacker: {
        en: 'The opponent drives in with a left front kick (hidari mae-geri).',
        da: 'Modstanderen presser ind med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（左前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back, sweep the kick down with a left lower parry (hidari gedan-barai), counter with a right low roundhouse kick (migi gedan mawashi-geri) moving to back position 2, drive in a left knee strike (hidari hiza-geri), then finish with a right elbow strike (migi hiji uchi).',
        da: 'Træd tilbage, fej sparket ned med en venstre lav parade (hidari gedan-barai), kontrér med et højre lavt cirkelspark (migi gedan mawashi-geri) til bagposition 2, driv et venstre knæstød ind (hidari hiza-geri), og afslut med et højre albueslag (migi hiji uchi).',
        ja: '引いて左下段払い（左下段払い）で蹴りを払い落とし、右下段回し蹴り（右下段回し蹴り）で反撃しながらバックポジション2へ移動し、左膝蹴り（左膝蹴り）を入れ、右肘打ち（右肘打ち）で締めます。',
      },
      technicalNotes: {
        en: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, migi gedan mawashi-geri (back pos 2), hidari hiza-geri, migi hiji uchi." After the gedan-barai, the migi gedan mawashi-geri sets up back position 2 so the hidari hiza-geri and migi hiji uchi finish at close range.',
        da: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, migi gedan mawashi-geri (back pos 2), hidari hiza-geri, migi hiji uchi." Efter gedan-barai sætter migi gedan mawashi-geri bagposition 2 op, så hidari hiza-geri og migi hiji uchi afslutter på kort afstand.',
        ja: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, migi gedan mawashi-geri (back pos 2), hidari hiza-geri, migi hiji uchi." 下段払いの後、右下段回し蹴りでバックポジション2に入り、左膝蹴りと右肘打ちで接近戦を締めます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Low Kick, Double Knee & Pull-Down Takedown vs Left High Roundhouse',
        da: '8. Lavt spark, dobbelt knæ og nedtræknings-nedtagning mod venstre høj cirkelspark',
        ja: '八、左上段回し蹴りへの下段蹴り・二段膝・引き倒し',
      },
      attacker: {
        en: 'The opponent throws a left high roundhouse kick to the head (hidari jodan mawashi-geri).',
        da: 'Modstanderen sparker et venstre højt cirkelspark mod hovedet (hidari jodan mawashi-geri).',
        ja: '相手が頭部への左上段回し蹴り（左上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back, step in (instep), counter with a right low roundhouse kick (migi gedan mawashi-geri) moving to back position 2, drive in a left knee strike (hidari hiza-geri) and a right knee strike (migi hiza-geri), then finish with a pull-down takedown (hikitaoshi).',
        da: 'Træd tilbage, træd ind (instep), kontrér med et højre lavt cirkelspark (migi gedan mawashi-geri) til bagposition 2, driv et venstre knæstød (hidari hiza-geri) og et højre knæstød (migi hiza-geri) ind, og afslut med en nedtræknings-nedtagning (hikitaoshi).',
        ja: '引いて踏み込み（instep）、右下段回し蹴り（右下段回し蹴り）で反撃しながらバックポジション2へ移動し、左膝蹴り（左膝蹴り）と右膝蹴り（右膝蹴り）を入れ、引き倒しで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari jodan mawashi-geri: Step back, instep, migi gedan mawashi-geri (back pos. 2), hidari hiza-geri, migi hiza-geri, hikitaoshi (take down/throw down)." The migi gedan mawashi-geri to back position 2 sets up both hiza-geri before the hikitaoshi pulls the opponent down.',
        da: 'Source: "Hidari jodan mawashi-geri: Step back, instep, migi gedan mawashi-geri (back pos. 2), hidari hiza-geri, migi hiza-geri, hikitaoshi (take down/throw down)." Migi gedan mawashi-geri til bagposition 2 sætter begge hiza-geri op, før hikitaoshi trækker modstanderen ned.',
        ja: 'Source: "Hidari jodan mawashi-geri: Step back, instep, migi gedan mawashi-geri (back pos. 2), hidari hiza-geri, migi hiza-geri, hikitaoshi (take down/throw down)." バックポジション2への右下段回し蹴りで両膝蹴りを準備し、引き倒しで相手を引き落とします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Low Kick, Double Knee & Pull-Down Takedown vs Right High Roundhouse (Kiba-dachi)',
        da: '9. Lavt spark, dobbelt knæ og nedtræknings-nedtagning mod højre høj cirkelspark (Kiba-dachi)',
        ja: '九、右上段回し蹴りへの下段蹴り・二段膝・引き倒し（騎馬立ち）',
      },
      attacker: {
        en: 'The opponent throws a right high roundhouse kick to the head (migi jodan mawashi-geri).',
        da: 'Modstanderen sparker et højre højt cirkelspark mod hovedet (migi jodan mawashi-geri).',
        ja: '相手が頭部への右上段回し蹴り（右上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back, step in to the right (migi okuri ashi), counter with a left low roundhouse kick (hidari gedan mawashi-geri) moving to back position 1, drive in a right knee strike (migi hiza-geri) and a left knee strike (hidari hiza-geri), finish with a pull-down takedown (hikitaoshi), holding the head onto the thigh as you settle into horse stance (kiba-dachi).',
        da: 'Træd tilbage, træd ind mod højre (migi okuri ashi), kontrér med et venstre lavt cirkelspark (hidari gedan mawashi-geri) til bagposition 1, driv et højre knæstød (migi hiza-geri) og et venstre knæstød (hidari hiza-geri) ind, afslut med en nedtræknings-nedtagning (hikitaoshi), mens du holder hovedet mod låret og falder ned i hesteposition (kiba-dachi).',
        ja: '引いて右へ踏み込み（右送り足）、左下段回し蹴り（左下段回し蹴り）で反撃しながらバックポジション1へ移動し、右膝蹴り（右膝蹴り）と左膝蹴り（左膝蹴り）を入れ、引き倒しで投げ切り、頭を太ももに押さえながら騎馬立ち（kiba-dachi）に落ち着きます。',
      },
      technicalNotes: {
        en: 'Source: "Migi jodan mawashi-geri: Step back, migi okuri ashi, hidari gedan mawashi-geri (back pos. 1), migi hiza-geri, hidari hiza-geri, hikitaoshi (take down/throw down), hold the head onto the thigh, kiba dachi." The hidari gedan mawashi-geri to back position 1 sets up both hiza-geri; holding the head onto the thigh pins the opponent as you drop into kiba-dachi after the hikitaoshi.',
        da: 'Source: "Migi jodan mawashi-geri: Step back, migi okuri ashi, hidari gedan mawashi-geri (back pos. 1), migi hiza-geri, hidari hiza-geri, hikitaoshi (take down/throw down), hold the head onto the thigh, kiba dachi." Hidari gedan mawashi-geri til bagposition 1 sætter begge hiza-geri op; at holde hovedet mod låret fastlåser modstanderen, mens du falder ned i kiba-dachi efter hikitaoshi.',
        ja: 'Source: "Migi jodan mawashi-geri: Step back, migi okuri ashi, hidari gedan mawashi-geri (back pos. 1), migi hiza-geri, hidari hiza-geri, hikitaoshi (take down/throw down), hold the head onto the thigh, kiba dachi." バックポジション1への左下段回し蹴りで両膝蹴りを準備し、引き倒しの後、頭を太ももに押さえて相手を固定しながら騎馬立ちに落ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: '10. Knife-Hand & Roundhouse Finish (Return to Kamae)',
        da: '10. Knivhånd og cirkelspark-afslutning (tilbage til Kamae)',
        ja: '十、手刀打ち・回し蹴りから構えへ',
      },
      attacker: {
        en: 'No new committed attack — the downed opponent is finished off as the practitioner returns to guard.',
        da: 'Intet nyt egentligt angreb — den nedlagte modstander afsluttes, mens udøveren vender tilbage til garde.',
        ja: '新たな本格的な攻撃はありません。倒した相手にとどめを刺し、稽古者は構えに戻ります。',
      },
      defender: {
        en: 'Deliver a right knife-hand strike (migi shuto-uchi), step back, throw a right roundhouse kick (migi mawashi-geri), then return to the fighting stance (kumite no kamae).',
        da: 'Lever et højre knivhåndsslag (migi shuto-uchi), træd tilbage, spark et højre cirkelspark (migi mawashi-geri), og vend derefter tilbage til kampstillingen (kumite no kamae).',
        ja: '右手刀打ち（右手刀打ち）を放ち、引いて右回し蹴り（右回し蹴り）を放ち、組手の構え（kumite no kamae）に戻ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi shuto-uchi, step back, migi mawashi-geri, kumite no kamae." The migi shuto-uchi finishes the grounded opponent, then the step-back migi mawashi-geri covers the withdrawal before resetting to kamae.',
        da: 'Source: "Migi shuto-uchi, step back, migi mawashi-geri, kumite no kamae." Migi shuto-uchi afslutter den nedlagte modstander, hvorefter det tilbagetrukne migi mawashi-geri dækker tilbagetrækningen, før der nulstilles til kamae.',
        ja: 'Source: "Migi shuto-uchi, step back, migi mawashi-geri, kumite no kamae." 右手刀打ちで倒した相手にとどめを刺し、引きながらの右回し蹴りで退きをカバーしてから構えに戻ります。',
      },
      schoolVariations: [],
    },
  ],
};
