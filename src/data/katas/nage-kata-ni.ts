import type { Kata } from '../types';

export const nageKataNi: Kata = {
  id: 'nage-kata-ni',
  japaneseCharacters: '投げの型 二',
  romaji: 'Nage no Kata — Sono Ni',
  name: {
    en: 'Throwing Form 2',
    da: 'Kasteform 2',
    ja: '投げの型 二',
  },
  requiredForKyu: [5, 4, 3, 2, 1],
  description: {
    en: 'The Nage no Kata are the throwing forms of Ashihara Karate — each block-and-clinch sequence ends in a throw. Sono Ichi and Sono Ni build the core throws (maki-komi-nage, ura-nage, kubi-nage); Sono San and Sono Yon add knee strikes, takedowns (hikitaoshi) and longer combinations. Sono Ni layers knee strikes (hiza-geri) into the foundational throws against an imagined opponent.',
    da: 'Nage no Kata er kasteformerne i Ashihara Karate — hver blok-og-clinch-sekvens ender i et kast. Sono Ichi og Sono Ni opbygger kernekastene (maki-komi-nage, ura-nage, kubi-nage); Sono San og Sono Yon tilføjer knæstød, nedtagninger (hikitaoshi) og længere kombinationer. Sono Ni føjer knæstød (hiza-geri) ind i de grundlæggende kast mod en forestillet modstander.',
    ja: '投げの型はアシハラ空手の投げ技の型であり、受けとクリンチの各連続技は投げで終わります。其の一と其の二は基本の投げ技（巻き込み投げ、裏投げ、首投げ）を構築し、其の三と其の四は膝蹴り、引き倒し、より長い連続技を加えます。其の二は想定した相手に対する基礎的な投げ技に膝蹴り（膝蹴り）を重ねます。',
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
        en: '2. Knee Strike & Wrap-Around Throw vs Right Roundhouse',
        da: '2. Knæstød og wrap-around-kast mod højre cirkelspark',
        ja: '二、右中段回し蹴りへの膝蹴り・巻き込み投げ',
      },
      attacker: {
        en: 'The opponent throws a right roundhouse kick to the mid-section (migi chudan mawashi-geri).',
        da: 'Modstanderen sparker et højre cirkelspark mod midtersektionen (migi chudan mawashi-geri).',
        ja: '相手が中段への右回し蹴り（右中段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Catch the kick with a left shin block (hidari sune-uke), flow into a circular block (mawashi-uke) to control the leg, drive in a right knee strike (migi hiza-geri), then finish with a wrap-around throw (maki-komi-nage).',
        da: 'Fang sparket med en venstre skinnebensblok (hidari sune-uke), gå over i en cirkulær blok (mawashi-uke) for at kontrollere benet, driv et højre knæstød ind (migi hiza-geri), og afslut med et wrap-around-kast (maki-komi-nage).',
        ja: '左の脛受け（左脛受け）で蹴りを受け止め、回し受けに流して脚を制し、右膝蹴り（右膝蹴り）を入れ、巻き込み投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi chudan mawashi-geri: Hidari sune-uke, mawashi-uke, migi hiza-geri, maki komi-nage." The added migi hiza-geri softens the opponent inside the clinch before the maki-komi-nage spins them down.',
        da: 'Source: "Migi chudan mawashi-geri: Hidari sune-uke, mawashi-uke, migi hiza-geri, maki komi-nage." Det tilføjede migi hiza-geri blødgør modstanderen inde i clinchen, før maki-komi-nage spinner dem ned.',
        ja: 'Source: "Migi chudan mawashi-geri: Hidari sune-uke, mawashi-uke, migi hiza-geri, maki komi-nage." 加えた右膝蹴りでクリンチ内の相手を崩してから、巻き込み投げで投げ落とします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Knee Strike & Back Throw vs Right Front Kick',
        da: '3. Knæstød og bagkast mod højre frontspark',
        ja: '三、右前蹴りへの膝蹴り・裏投げ',
      },
      attacker: {
        en: 'The opponent drives in with a right front kick (migi mae-geri).',
        da: 'Modstanderen presser ind med et højre frontspark (migi mae-geri).',
        ja: '相手が右前蹴り（右前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back, parry with a left outside block (hidari soto-uke), cross-step in to the right (migi cross okuri ashi), drive a left knee strike to the back of the head (hidari hiza-geri to the back of head), then finish with a back throw (ura-nage).',
        da: 'Træd tilbage, parér med en venstre udadblok (hidari soto-uke), kryds-træd ind mod højre (migi cross okuri ashi), driv et venstre knæstød mod baghovedet (hidari hiza-geri to the back of head), og afslut med et bagkast (ura-nage).',
        ja: '引いて左外受け（左外受け）でいなし、右へクロスして踏み込み（右クロス送り足）、左膝蹴りを後頭部へ（左膝蹴り、後頭部へ）入れ、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi mae-geri: Step back, hidari soto-uke, migi cross okuri ashi, hidari hiza-geri to the back of head, ura-nage." Drive the hidari hiza-geri to the back of head while entering so the ura-nage finishes off the opponent\'s broken balance.',
        da: 'Source: "Migi mae-geri: Step back, hidari soto-uke, migi cross okuri ashi, hidari hiza-geri to the back of head, ura-nage." Driv hidari hiza-geri mod baghovedet under indgangen, så ura-nage afslutter på modstanderens brudte balance.',
        ja: 'Source: "Migi mae-geri: Step back, hidari soto-uke, migi cross okuri ashi, hidari hiza-geri to the back of head, ura-nage." 入り込みながら左膝蹴りを後頭部へ入れ、崩れた相手のバランスを裏投げで締めます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Knee Strike & Wrap-Around Throw vs Left Roundhouse',
        da: '4. Knæstød og wrap-around-kast mod venstre cirkelspark',
        ja: '四、左中段回し蹴りへの膝蹴り・巻き込み投げ',
      },
      attacker: {
        en: 'The opponent throws a left roundhouse kick to the mid-section (hidari chudan mawashi-geri).',
        da: 'Modstanderen sparker et venstre cirkelspark mod midtersektionen (hidari chudan mawashi-geri).',
        ja: '相手が中段への左回し蹴り（左中段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Catch the kick with a left shin block (hidari sune-uke), flow into a circular block (mawashi-uke) to control the leg, drive in a left knee strike (hidari hiza-geri), then finish with a wrap-around throw (maki-komi-nage).',
        da: 'Fang sparket med en venstre skinnebensblok (hidari sune-uke), gå over i en cirkulær blok (mawashi-uke) for at kontrollere benet, driv et venstre knæstød ind (hidari hiza-geri), og afslut med et wrap-around-kast (maki-komi-nage).',
        ja: '左の脛受け（左脛受け）で蹴りを受け止め、回し受けに流して脚を制し、左膝蹴り（左膝蹴り）を入れ、巻き込み投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari chudan mawashi-geri: Hidari sune-uke, mawashi-uke, hidari hiza-geri, maki komi-nage." This mirrors step 2 with the hidari hiza-geri; the knee must land inside the clinch before the maki-komi-nage carries through.',
        da: 'Source: "Hidari chudan mawashi-geri: Hidari sune-uke, mawashi-uke, hidari hiza-geri, maki komi-nage." Dette spejler trin 2 med hidari hiza-geri; knæet skal lande inde i clinchen, før maki-komi-nage fører igennem.',
        ja: 'Source: "Hidari chudan mawashi-geri: Hidari sune-uke, mawashi-uke, hidari hiza-geri, maki komi-nage." これは左膝蹴りでの第二歩の鏡像です。膝はクリンチ内で当て、巻き込み投げへつなぎます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Knee Strike & Back Throw vs Left Front Kick',
        da: '5. Knæstød og bagkast mod venstre frontspark',
        ja: '五、左前蹴りへの膝蹴り・裏投げ',
      },
      attacker: {
        en: 'The opponent drives in with a left front kick (hidari mae-geri).',
        da: 'Modstanderen presser ind med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（左前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back, sweep the kick down with a left lower parry (hidari gedan-barai), cross-step in to the left (hidari cross okuri ashi), drive a right knee strike to the back of the head (migi hiza-geri to the back of head), then finish with a back throw (ura-nage).',
        da: 'Træd tilbage, fej sparket ned med en venstre lav parade (hidari gedan-barai), kryds-træd ind mod venstre (hidari cross okuri ashi), driv et højre knæstød mod baghovedet (migi hiza-geri to the back of head), og afslut med et bagkast (ura-nage).',
        ja: '引いて左下段払い（左下段払い）で蹴りを払い落とし、左へクロスして踏み込み（左クロス送り足）、右膝蹴りを後頭部へ（右膝蹴り、後頭部へ）入れ、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, migi hiza-geri to the back of head, ura-nage." The migi hiza-geri to the back of head pitches the opponent forward so the ura-nage can reverse them backward.',
        da: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, migi hiza-geri to the back of head, ura-nage." Migi hiza-geri mod baghovedet kaster modstanderen fremad, så ura-nage kan vende dem bagud.',
        ja: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, migi hiza-geri to the back of head, ura-nage." 後頭部への右膝蹴りで相手を前のめりにさせ、裏投げで後方へ返せるようにします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Knee Strike & Back Throw vs Right High Roundhouse',
        da: '6. Knæstød og bagkast mod højre høj cirkelspark',
        ja: '六、右上段回し蹴りへの膝蹴り・裏投げ',
      },
      attacker: {
        en: 'The opponent throws a right high roundhouse kick to the head (migi jodan mawashi-geri).',
        da: 'Modstanderen sparker et højre højt cirkelspark mod hovedet (migi jodan mawashi-geri).',
        ja: '相手が頭部への右上段回し蹴り（右上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back, enter (irimi) into the opponent moving to back position 1, drive in a right knee strike (migi hiza-geri), then finish with a back throw (ura-nage).',
        da: 'Træd tilbage, gå ind (irimi) på modstanderen til bagposition 1, driv et højre knæstød ind (migi hiza-geri), og afslut med et bagkast (ura-nage).',
        ja: '引いて入り身（irimi）で相手に入り、バックポジション1へ移動し、右膝蹴り（右膝蹴り）を入れ、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi jodan mawashi-geri: Step back, irimi (back pos. 1), migi hiza-geri, ura-nage." The irimi to back position 1 must close the gap under the high kick so the migi hiza-geri and ura-nage can finish from behind.',
        da: 'Source: "Migi jodan mawashi-geri: Step back, irimi (back pos. 1), migi hiza-geri, ura-nage." Irimi til bagposition 1 skal lukke afstanden under det høje spark, så migi hiza-geri og ura-nage kan afslutte bagfra.',
        ja: 'Source: "Migi jodan mawashi-geri: Step back, irimi (back pos. 1), migi hiza-geri, ura-nage." バックポジション1への入り身で高い蹴りの下へ間合いを詰め、右膝蹴りと裏投げで背後から締めます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Knee Strike & Back Throw vs Left Front Kick',
        da: '7. Knæstød og bagkast mod venstre frontspark',
        ja: '七、左前蹴りへの膝蹴り・裏投げ',
      },
      attacker: {
        en: 'The opponent drives in with a left front kick (hidari mae-geri).',
        da: 'Modstanderen presser ind med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（左前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back, sweep the kick down with a left lower parry (hidari gedan-barai), cross-step in to the left (hidari cross okuri ashi), drive in a right knee strike (migi hiza-geri), then finish with a back throw (ura-nage).',
        da: 'Træd tilbage, fej sparket ned med en venstre lav parade (hidari gedan-barai), kryds-træd ind mod venstre (hidari cross okuri ashi), driv et højre knæstød ind (migi hiza-geri), og afslut med et bagkast (ura-nage).',
        ja: '引いて左下段払い（左下段払い）で蹴りを払い落とし、左へクロスして踏み込み（左クロス送り足）、右膝蹴り（右膝蹴り）を入れ、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, migi hiza-geri, ura-nage." Unlike step 5, the migi hiza-geri here strikes into the body inside the clinch before the ura-nage takes the opponent back.',
        da: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, migi hiza-geri, ura-nage." I modsætning til trin 5 rammer migi hiza-geri her ind i kroppen i clinchen, før ura-nage tager modstanderen bagud.',
        ja: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, migi hiza-geri, ura-nage." 第五歩と異なり、ここでは右膝蹴りをクリンチ内で胴へ当ててから、裏投げで相手を後方へ運びます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Knee Strike & Back Throw vs Left High Roundhouse',
        da: '8. Knæstød og bagkast mod venstre høj cirkelspark',
        ja: '八、左上段回し蹴りへの膝蹴り・裏投げ',
      },
      attacker: {
        en: 'The opponent throws a left high roundhouse kick to the head (hidari jodan mawashi-geri).',
        da: 'Modstanderen sparker et venstre højt cirkelspark mod hovedet (hidari jodan mawashi-geri).',
        ja: '相手が頭部への左上段回し蹴り（左上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back from the high kick, cross-step in to the left (hidari cross okuri ashi) under the leg, drive in a right knee strike (migi hiza-geri), then finish with a back throw (ura-nage).',
        da: 'Træd tilbage fra det høje spark, kryds-træd ind mod venstre (hidari cross okuri ashi) under benet, driv et højre knæstød ind (migi hiza-geri), og afslut med et bagkast (ura-nage).',
        ja: '高い蹴りから引き、左へクロスして脚の下へ踏み込み（左クロス送り足）、右膝蹴り（右膝蹴り）を入れ、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari jodan mawashi-geri: Step back, hidari cross okuri ashi, migi hiza-geri, ura-nage." Against the high kick the cross okuri ashi enters directly under the leg, then the migi hiza-geri sets up the ura-nage.',
        da: 'Source: "Hidari jodan mawashi-geri: Step back, hidari cross okuri ashi, migi hiza-geri, ura-nage." Mod det høje spark går cross okuri ashi direkte ind under benet, hvorefter migi hiza-geri sætter ura-nage op.',
        ja: 'Source: "Hidari jodan mawashi-geri: Step back, hidari cross okuri ashi, migi hiza-geri, ura-nage." 高い蹴りに対してはクロス送り足が脚の下へ直接入り、右膝蹴りが裏投げへつなぎます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Knee Strike & Back Throw vs Right High Roundhouse (Kiba-dachi)',
        da: '9. Knæstød og bagkast mod højre høj cirkelspark (Kiba-dachi)',
        ja: '九、右上段回し蹴りへの膝蹴り・裏投げ（騎馬立ち）',
      },
      attacker: {
        en: 'The opponent throws a right high roundhouse kick to the head (migi jodan mawashi-geri).',
        da: 'Modstanderen sparker et højre højt cirkelspark mod hovedet (migi jodan mawashi-geri).',
        ja: '相手が頭部への右上段回し蹴り（右上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back, cross-step in to the right (migi cross okuri ashi), drive in a left knee strike (hidari hiza-geri), then finish with a back throw (ura-nage), holding the head onto the thigh as you settle into horse stance (kiba-dachi).',
        da: 'Træd tilbage, kryds-træd ind mod højre (migi cross okuri ashi), driv et venstre knæstød ind (hidari hiza-geri), og afslut med et bagkast (ura-nage), mens du holder hovedet mod låret og falder ned i hesteposition (kiba-dachi).',
        ja: '引いて右へクロスして踏み込み（右クロス送り足）、左膝蹴り（左膝蹴り）を入れ、裏投げで投げ切り、頭を太ももに押さえながら騎馬立ち（kiba-dachi）に落ち着きます。',
      },
      technicalNotes: {
        en: 'Source: "Migi jodan mawashi-geri: Step back, migi cross okuri ashi, hidari hiza-geri, ura-nage, hold the head onto the thigh, kiba dachi." The hidari hiza-geri precedes the ura-nage, then holding the head onto the thigh pins the opponent as you drop into kiba-dachi.',
        da: 'Source: "Migi jodan mawashi-geri: Step back, migi cross okuri ashi, hidari hiza-geri, ura-nage, hold the head onto the thigh, kiba dachi." Hidari hiza-geri går forud for ura-nage, hvorefter du holder hovedet mod låret for at fastlåse modstanderen, mens du falder ned i kiba-dachi.',
        ja: 'Source: "Migi jodan mawashi-geri: Step back, migi cross okuri ashi, hidari hiza-geri, ura-nage, hold the head onto the thigh, kiba dachi." 裏投げの前に左膝蹴りを入れ、頭を太ももに押さえて相手を固定しながら騎馬立ちに落ちます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 10,
      name: {
        en: '10. Knife-Hand & Elbow Finish (Return to Kamae)',
        da: '10. Knivhånd og albue-afslutning (tilbage til Kamae)',
        ja: '十、手刀打ち・肘落とし打ちから構えへ',
      },
      attacker: {
        en: 'No new committed attack — the downed opponent is finished off as the practitioner returns to guard.',
        da: 'Intet nyt egentligt angreb — den nedlagte modstander afsluttes, mens udøveren vender tilbage til garde.',
        ja: '新たな本格的な攻撃はありません。倒した相手にとどめを刺し、稽古者は構えに戻ります。',
      },
      defender: {
        en: 'Deliver a right knife-hand strike (migi shuto-uchi), follow with a right downward elbow strike (migi hiji oroshi uchi), then return to the fighting stance (kumite no kamae).',
        da: 'Lever et højre knivhåndsslag (migi shuto-uchi), følg op med et højre nedadgående albueslag (migi hiji oroshi uchi), og vend derefter tilbage til kampstillingen (kumite no kamae).',
        ja: '右手刀打ち（右手刀打ち）を放ち、続いて右の肘落とし打ち（右肘落とし打ち）を入れ、組手の構え（kumite no kamae）に戻ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi shuto-uchi, migi hiji oroshi uchi, kumite no kamae." The shuto-uchi and downward hiji oroshi uchi finish the grounded opponent before the kata resets to kamae.',
        da: 'Source: "Migi shuto-uchi, migi hiji oroshi uchi, kumite no kamae." Shuto-uchi og det nedadgående hiji oroshi uchi afslutter den nedlagte modstander, før kataen nulstilles til kamae.',
        ja: 'Source: "Migi shuto-uchi, migi hiji oroshi uchi, kumite no kamae." 手刀打ちと肘落とし打ちで倒した相手にとどめを刺してから、型は構えに戻ります。',
      },
      schoolVariations: [],
    },
  ],
};
