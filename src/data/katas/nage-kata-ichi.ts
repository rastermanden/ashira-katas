import type { Kata } from '../types';

export const nageKataIchi: Kata = {
  id: 'nage-kata-ichi',
  japaneseCharacters: '投げの型 一',
  romaji: 'Nage no Kata — Sono Ichi',
  name: {
    en: 'Throwing Form 1',
    da: 'Kasteform 1',
    ja: '投げの型 一',
  },
  description: {
    en: 'The Nage no Kata are the throwing forms of Ashihara Karate — each block-and-clinch sequence ends in a throw. Sono Ichi and Sono Ni build the core throws (maki-komi-nage, ura-nage, kubi-nage); Sono San and Sono Yon add knee strikes, takedowns (hikitaoshi) and longer combinations. Sono Ichi establishes the foundational throwing repertoire against an imagined opponent.',
    da: 'Nage no Kata er kasteformerne i Ashihara Karate — hver blok-og-clinch-sekvens ender i et kast. Sono Ichi og Sono Ni opbygger kernekastene (maki-komi-nage, ura-nage, kubi-nage); Sono San og Sono Yon tilføjer knæstød, nedtagninger (hikitaoshi) og længere kombinationer. Sono Ichi etablerer det grundlæggende kasterepertoire mod en forestillet modstander.',
    ja: '投げの型はアシハラ空手の投げ技の型であり、受けとクリンチの各連続技は投げで終わります。其の一と其の二は基本の投げ技（巻き込み投げ、裏投げ、首投げ）を構築し、其の三と其の四は膝蹴り、引き倒し、より長い連続技を加えます。其の一は想定した相手に対する基礎的な投げ技の体系を確立します。',
  },
  youtubeLinks: [{ label: 'Nage no Kata Sono Ichi — Sensei Mazz', url: 'https://youtu.be/HiKglOIGow8' }],
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
        en: '2. Wrap-Around Throw vs Right Roundhouse',
        da: '2. Wrap-around-kast mod højre cirkelspark',
        ja: '二、右中段回し蹴りへの巻き込み投げ',
      },
      attacker: {
        en: 'The opponent throws a right roundhouse kick to the mid-section (migi chudan mawashi-geri).',
        da: 'Modstanderen sparker et højre cirkelspark mod midtersektionen (migi chudan mawashi-geri).',
        ja: '相手が中段への右回し蹴り（右中段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Catch the kick with a left shin block (hidari sune-uke), flow into a circular block (mawashi-uke) to control the leg, then finish with a wrap-around throw (maki-komi-nage).',
        da: 'Fang sparket med en venstre skinnebensblok (hidari sune-uke), gå over i en cirkulær blok (mawashi-uke) for at kontrollere benet, og afslut med et wrap-around-kast (maki-komi-nage).',
        ja: '左の脛受け（左脛受け）で蹴りを受け止め、回し受けに流して脚を制し、巻き込み投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi chudan mawashi-geri: Hidari sune-uke, mawashi-uke, maki komi nage." The shin block must absorb the kick before the mawashi-uke wraps the leg, so the maki-komi-nage spins the opponent down off their own momentum.',
        da: 'Source: "Migi chudan mawashi-geri: Hidari sune-uke, mawashi-uke, maki komi nage." Skinnebensblokken skal absorbere sparket, før mawashi-uke vikler benet ind, så maki-komi-nage spinner modstanderen ned på deres egen fart.',
        ja: 'Source: "Migi chudan mawashi-geri: Hidari sune-uke, mawashi-uke, maki komi nage." 脛受けで蹴りを吸収してから回し受けで脚を巻き込み、巻き込み投げが相手自身の勢いを利用して投げ落とすようにします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 3,
      name: {
        en: '3. Back Throw vs Right Front Kick',
        da: '3. Bagkast mod højre frontspark',
        ja: '三、右前蹴りへの裏投げ',
      },
      attacker: {
        en: 'The opponent drives in with a right front kick (migi mae-geri).',
        da: 'Modstanderen presser ind med et højre frontspark (migi mae-geri).',
        ja: '相手が右前蹴り（右前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back off the line, parry with a left outside block (hidari soto-uke), then cross-step in to the right (migi cross okuri ashi) to enter behind the opponent and finish with a back throw (ura-nage).',
        da: 'Træd tilbage væk fra linjen, parér med en venstre udadblok (hidari soto-uke), og kryds-træd derefter ind mod højre (migi cross okuri ashi) for at komme bag modstanderen og afslut med et bagkast (ura-nage).',
        ja: 'ラインから外れて引き、左外受け（左外受け）でいなし、右へクロスして踏み込み（右クロス送り足）相手の背後に入り、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi mae-geri: Step back, hidari soto-uke, migi cross okuri ashi, ura-nage." The cross okuri ashi must carry you behind the opponent\'s base so the ura-nage lifts and drops them backward over your hips.',
        da: 'Source: "Migi mae-geri: Step back, hidari soto-uke, migi cross okuri ashi, ura-nage." Cross okuri ashi skal føre dig bag modstanderens base, så ura-nage løfter og taber dem bagud over dine hofter.',
        ja: 'Source: "Migi mae-geri: Step back, hidari soto-uke, migi cross okuri ashi, ura-nage." クロス送り足で相手の支持基底の背後まで入り込み、裏投げで持ち上げて腰越しに後方へ落とせるようにします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 4,
      name: {
        en: '4. Wrap-Around Throw vs Left Roundhouse',
        da: '4. Wrap-around-kast mod venstre cirkelspark',
        ja: '四、左中段回し蹴りへの巻き込み投げ',
      },
      attacker: {
        en: 'The opponent throws a left roundhouse kick to the mid-section (hidari chudan mawashi-geri).',
        da: 'Modstanderen sparker et venstre cirkelspark mod midtersektionen (hidari chudan mawashi-geri).',
        ja: '相手が中段への左回し蹴り（左中段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Catch the kick with a left shin block (hidari sune-uke), flow into a circular block (mawashi-uke) to control the leg, then finish with a wrap-around throw (maki-komi-nage).',
        da: 'Fang sparket med en venstre skinnebensblok (hidari sune-uke), gå over i en cirkulær blok (mawashi-uke) for at kontrollere benet, og afslut med et wrap-around-kast (maki-komi-nage).',
        ja: '左の脛受け（左脛受け）で蹴りを受け止め、回し受けに流して脚を制し、巻き込み投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari chudan mawashi-geri: Hidari sune-uke, mawashi-uke, maki komi nage." This mirrors step 2 against the opposite-side kick; the sune-uke and mawashi-uke must chain smoothly so the maki-komi-nage stays continuous.',
        da: 'Source: "Hidari chudan mawashi-geri: Hidari sune-uke, mawashi-uke, maki komi nage." Dette spejler trin 2 mod sparket fra den modsatte side; sune-uke og mawashi-uke skal kæde glat sammen, så maki-komi-nage forbliver kontinuerligt.',
        ja: 'Source: "Hidari chudan mawashi-geri: Hidari sune-uke, mawashi-uke, maki komi nage." これは反対側からの蹴りに対する第二歩の鏡像です。脛受けと回し受けを滑らかにつなぎ、巻き込み投げを途切れさせないようにします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 5,
      name: {
        en: '5. Back Throw vs Left Front Kick (320)',
        da: '5. Bagkast mod venstre frontspark (320)',
        ja: '五、左前蹴りへの裏投げ（320）',
      },
      attacker: {
        en: 'The opponent drives in with a left front kick (hidari mae-geri).',
        da: 'Modstanderen presser ind med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（左前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back, sweep the kick down with a left lower parry (hidari gedan-barai), then cross-step in to the left (hidari cross okuri ashi) and finish with a back throw (ura-nage), rotating through the (320) turn.',
        da: 'Træd tilbage, fej sparket ned med en venstre lav parade (hidari gedan-barai), kryds-træd derefter ind mod venstre (hidari cross okuri ashi) og afslut med et bagkast (ura-nage) gennem (320)-drejningen.',
        ja: '引いて左下段払い（左下段払い）で蹴りを払い落とし、左へクロスして踏み込み（左クロス送り足）、（320）の回転を通して裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (320)." Keep the (320) turn driving the hips around so the ura-nage uses your full rotation rather than arm strength alone.',
        da: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (320)." Lad (320)-drejningen drive hofterne rundt, så ura-nage bruger din fulde rotation frem for armstyrke alene.',
        ja: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (320)." （320）の回転で腰を回し続け、裏投げが腕の力だけでなく全身の回転を使うようにします。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 6,
      name: {
        en: '6. Neck Throw vs Right Roundhouse',
        da: '6. Halskast mod højre cirkelspark',
        ja: '六、右回し蹴りへの首投げ',
      },
      attacker: {
        en: 'The opponent throws a right roundhouse kick (migi mawashi-geri).',
        da: 'Modstanderen sparker et højre cirkelspark (migi mawashi-geri).',
        ja: '相手が右回し蹴り（右回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back, then enter (irimi) into the opponent moving to back position 1, wrapping the head to finish with a neck throw (kubi-nage, kubi = neck).',
        da: 'Træd tilbage, gå derefter ind (irimi) på modstanderen til bagposition 1, omslut hovedet og afslut med et halskast (kubi-nage, kubi = hals).',
        ja: '引いてから入り身（irimi）で相手に入り、バックポジション1へ移動し、首を巻き込んで首投げ（kubi-nage、首＝kubi）で投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Migi mawashi-geri: Step back, irimi (back pos. 1), kubi-nage. (kubi: neck)" The irimi to back position 1 must close the gap deeply so the kubi-nage controls the head before the opponent recovers the kicking leg.',
        da: 'Source: "Migi mawashi-geri: Step back, irimi (back pos. 1), kubi-nage. (kubi: neck)" Irimi til bagposition 1 skal lukke afstanden dybt, så kubi-nage kontrollerer hovedet, før modstanderen genvinder sparkebenet.',
        ja: 'Source: "Migi mawashi-geri: Step back, irimi (back pos. 1), kubi-nage. (kubi: neck)" バックポジション1への入り身で深く間合いを詰め、相手が蹴り足を戻す前に首投げで頭を制します。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 7,
      name: {
        en: '7. Back Throw vs Left Front Kick (360)',
        da: '7. Bagkast mod venstre frontspark (360)',
        ja: '七、左前蹴りへの裏投げ（360）',
      },
      attacker: {
        en: 'The opponent drives in with a left front kick (hidari mae-geri).',
        da: 'Modstanderen presser ind med et venstre frontspark (hidari mae-geri).',
        ja: '相手が左前蹴り（左前蹴り）で踏み込んできます。',
      },
      defender: {
        en: 'Step back, sweep the kick down with a left lower parry (hidari gedan-barai), then cross-step in to the left (hidari cross okuri ashi) and finish with a back throw (ura-nage), carrying the full (360) turn.',
        da: 'Træd tilbage, fej sparket ned med en venstre lav parade (hidari gedan-barai), kryds-træd derefter ind mod venstre (hidari cross okuri ashi) og afslut med et bagkast (ura-nage) gennem den fulde (360)-drejning.',
        ja: '引いて左下段払い（左下段払い）で蹴りを払い落とし、左へクロスして踏み込み（左クロス送り足）、（360）の完全な回転を伴って裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (360)." Unlike the (320) version in step 5, the full (360) rotation carries the ura-nage all the way around, demanding tight balance through the spin.',
        da: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (360)." I modsætning til (320)-versionen i trin 5 fører den fulde (360)-rotation ura-nage hele vejen rundt, hvilket kræver stram balance gennem drejningen.',
        ja: 'Source: "Hidari mae-geri: Step back, hidari gedan-barai, hidari cross okuri ashi, ura-nage (360)." 第五歩の（320）版と異なり、（360）の完全な回転は裏投げを一周分回し切るため、回転を通して緊密なバランスが求められます。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 8,
      name: {
        en: '8. Back Throw vs Left High Roundhouse',
        da: '8. Bagkast mod venstre høj cirkelspark',
        ja: '八、左上段回し蹴りへの裏投げ',
      },
      attacker: {
        en: 'The opponent throws a left high roundhouse kick to the head (hidari jodan mawashi-geri).',
        da: 'Modstanderen sparker et venstre højt cirkelspark mod hovedet (hidari jodan mawashi-geri).',
        ja: '相手が頭部への左上段回し蹴り（左上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back from the high kick, then cross-step in to the left (hidari cross okuri ashi) under the leg and finish with a back throw (ura-nage).',
        da: 'Træd tilbage fra det høje spark, kryds-træd derefter ind mod venstre (hidari cross okuri ashi) under benet og afslut med et bagkast (ura-nage).',
        ja: '高い蹴りから引き、左へクロスして脚の下へ踏み込み（左クロス送り足）、裏投げで投げ切ります。',
      },
      technicalNotes: {
        en: 'Source: "Hidari jodan mawashi-geri: Step back, hidari cross okuri ashi, ura-nage." Against the high kick there is no preliminary block — the cross okuri ashi enters directly under the raised leg before the ura-nage.',
        da: 'Source: "Hidari jodan mawashi-geri: Step back, hidari cross okuri ashi, ura-nage." Mod det høje spark er der ingen indledende blok — cross okuri ashi går direkte ind under det løftede ben før ura-nage.',
        ja: 'Source: "Hidari jodan mawashi-geri: Step back, hidari cross okuri ashi, ura-nage." 高い蹴りに対しては予備の受けはありません。クロス送り足が裏投げの前に上がった脚の下へ直接入ります。',
      },
      schoolVariations: [],
    },
    {
      stepNumber: 9,
      name: {
        en: '9. Back Throw vs Right High Roundhouse (Kiba-dachi)',
        da: '9. Bagkast mod højre høj cirkelspark (Kiba-dachi)',
        ja: '九、右上段回し蹴りへの裏投げ（騎馬立ち）',
      },
      attacker: {
        en: 'The opponent throws a right high roundhouse kick to the head (migi jodan mawashi-geri).',
        da: 'Modstanderen sparker et højre højt cirkelspark mod hovedet (migi jodan mawashi-geri).',
        ja: '相手が頭部への右上段回し蹴り（右上段回し蹴り）を放ちます。',
      },
      defender: {
        en: 'Step back, cross-step in to the right (migi cross okuri ashi), and finish with a back throw (ura-nage), holding the head onto the thigh as you settle into horse stance (kiba-dachi).',
        da: 'Træd tilbage, kryds-træd ind mod højre (migi cross okuri ashi) og afslut med et bagkast (ura-nage), mens du holder hovedet mod låret og falder ned i hesteposition (kiba-dachi).',
        ja: '引いて右へクロスして踏み込み（右クロス送り足）、裏投げで投げ切り、頭を太ももに押さえながら騎馬立ち（kiba-dachi）に落ち着きます。',
      },
      technicalNotes: {
        en: 'Source: "Migi jodan mawashi-geri: Step back, migi cross okuri ashi, ura-nage, (hold the head onto the thigh) kiba dachi." Holding the head onto the thigh pins the opponent as you drop into kiba-dachi, giving the ura-nage a controlled, grounded finish.',
        da: 'Source: "Migi jodan mawashi-geri: Step back, migi cross okuri ashi, ura-nage, (hold the head onto the thigh) kiba dachi." At holde hovedet mod låret fastlåser modstanderen, mens du falder ned i kiba-dachi, hvilket giver ura-nage en kontrolleret, jordet afslutning.',
        ja: 'Source: "Migi jodan mawashi-geri: Step back, migi cross okuri ashi, ura-nage, (hold the head onto the thigh) kiba dachi." 頭を太ももに押さえることで騎馬立ちに落ちる間に相手を固定し、裏投げを制御された安定した形で締めます。',
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
