const CHARACTERS = [
  {
    id: 'ulquiorra-resurreccion',
    category: 'espada',
    type: 'Spirit',
    role: 'Dps',
    upcoming: 'Yes',
    name: 'Ulquiorra - Resurreccion',
    nameJP: 'Upcoming',
    divisionLabel: 'Upcoming Character',
    color: '#58d8c8',
    quote: 'Upcoming character - records are not available yet.',
    zanpakuto: {
      name: 'Upcoming',
      release: 'Coming soon',
      desc: 'This character is not in the game yet.'
    },
    bio: 'This character is not in the game yet.',
    instructions: '',
    customAvatar: 'images/ulq res.webp',
    panelImage: '',
    avatarWidth: 210,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -2,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs: [],
    statsAngles: [],
    statsGaps: [],
    statsHeights: [],

    coreStampImgs: [],
    coreStampAngles: [],
    coreStampGaps: [],
    coreStampPopupData: [],
    coreStampPopupWidths: [],

    setStampBeforeText: '',
    setStampImgs: [],
    setStampAngles: [],
    setStampGaps: [],
    setStampInfos: [],
    setStampPopupWidths: [],
    setStampAfterText: '',

    weaponStampImgs: [],
    weaponStampAngles: [],
    weaponStampGaps: [],
    weaponStampPopupData: [],
    weaponStampPopupWidths: [],

    bonds1Imgs: [],
    bonds1Info: '',
    bonds1OffsetX: 0,
    bonds1Height: null,
    bonds1PopupWidth: null,

    bonds2Imgs: [],
    bonds2Info: '',
    bonds2OffsetX: 0,
    bonds2Height: null,
    bonds2PopupWidth: null
  },
  {
    id: 'white-ichigo',
    category: 'hollow',
    type: 'Slash',
    role: 'Tactic',
    upcoming: 'Yes',
    name: 'White Ichigo',
    nameJP: 'Upcoming',
    divisionLabel: 'Upcoming Character',
    color: '#e8eaf0',
    quote: 'Upcoming character - records are not available yet.',
    zanpakuto: {
      name: 'Upcoming',
      release: 'Coming soon',
      desc: 'This character is not in the game yet.'
    },
    bio: 'This character is not in the game yet.',
    instructions: '',
    customAvatar: 'images/white.webp',
    panelImage: '',
    avatarWidth: 220,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -2,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs: [],
    statsAngles: [],
    statsGaps: [],
    statsHeights: [],

    coreStampImgs: [],
    coreStampAngles: [],
    coreStampGaps: [],
    coreStampPopupData: [],
    coreStampPopupWidths: [],

    setStampBeforeText: '',
    setStampImgs: [],
    setStampAngles: [],
    setStampGaps: [],
    setStampInfos: [],
    setStampPopupWidths: [],
    setStampAfterText: '',

    weaponStampImgs: [],
    weaponStampAngles: [],
    weaponStampGaps: [],
    weaponStampPopupData: [],
    weaponStampPopupWidths: [],

    bonds1Imgs: [],
    bonds1Info: '',
    bonds1OffsetX: 0,
    bonds1Height: null,
    bonds1PopupWidth: null,

    bonds2Imgs: [],
    bonds2Info: '',
    bonds2OffsetX: 0,
    bonds2Height: null,
    bonds2PopupWidth: null
  },
  {
    id: 'grimmjow-resurreccion',
    category: 'espada',
    type: 'Strike',
    role: 'Dps',
    upcoming: 'No',
    name: 'Grimmjow - Resurreccion',
    nameJP: 'グリムジョー・ジャガージャック',
    divisionLabel: 'Sexta Espada - Resurreccion',
    color: '#4488ff',
    quote: '"Grind, Pantera."',
    stats: { Reiatsu: 88, Swordsmanship: 88, Kidō: 60, Speed: 90, Strength: 90 },
    zanpakuto: {
      name: 'Pantera',
      release: '"Grind, Pantera"',
      desc: 'Grimmjow\'s release transforms him into a sleek, feline warrior with enhanced speed, agility, and devastating claw attacks. His signature technique, Desgarrón, creates massive energy slashes from his fingertips.'
    },
    bio: 'Grimmjow in his released Pantera form, a faster and more savage version of the Sexta Espada built around close-range pressure, destructive claws, and relentless instinct.',
    instructions: '',
    customAvatar: 'images/grimm res.webp',
    panelImage: 'images/grimm res panel.webp',
    avatarWidth: 190,
    avatarHeight: 210,
    avatarOffsetX: 0,
    avatarOffsetY: -4,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/espada.webp','images/strike.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/grimm res core.webp','images/gin core 2.webp','images/gin core 3.webp'],
    coreStampAngles: [-2, 1, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'The Path of Instinct',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Strike DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases Ultimate Charge Rate by  <span style="color: #52C394;">15%</span>.<br>-Damage dealt by Ultimate, Gran Rey Cero, and Enhanced Basic Attack, Form of Destruction, increases by  <span style="color: #52C394;">37.5%</span>.<br>-Each point of Spiritual Pressure Reserve increases Grimmjow\'s Crit Rate by  <span style="color: #52C394;">4%</span> and Crit DMG by  <span style="color: #52C394;">8%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Strike DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases Ultimate Charge Rate by  <span style="color: #52C394;">30%</span>.<br>-Damage dealt by Ultimate, Gran Rey Cero, and Enhanced Basic Attack, Form of Destruction, increases by  <span style="color: #52C394;">75%</span>.<br>-Each point of Spiritual Pressure Reserve increases Grimmjow\'s Crit Rate by  <span style="color: #52C394;">8%</span> and Crit DMG by  <span style="color: #52C394;">16%</span>.</p>'
        }
      },
      {
        name: 'Complicated Mood',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">65%</span> of the current Technique.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">130%</span> of the current Technique.</p>'
        }
      },
      {
        name: 'Still Want To Fight?',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">33%</span> of the current Technique.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">66%</span> of the current Technique.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p>No Data :).</p>',
    setStampImgs: ['images/yoru set 1.webp', 'images/yoru set 2.webp', 'images/yoru set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Stats are:</span><br>1) Ult Charge Rate%<br>2) Crit Rate%<br>3) Crit DMG%</p></p>', '<p><span style="color: #EA4A86;">-The recommended Stats are:</span><br>1) Ult Charge Rate%<br>2) Crit Rate%<br>3) Crit DMG%</p></p>', '<p><span style="color: #EA4A86;">-The recommended Stats are:</span><br>1) Ult Charge Rate%<br>2) Crit Rate%<br>3) Crit DMG%</p></p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Midnight Specter (3/3) </span><br>2-Piece: Increases Strike DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece: Increases Ultimate DMG by <span style="color: #52C394;">30%</span>. Each time a basic attack is released, increases special attack DMG by <span style="color: #52C394;">5.5%</span> for 10s. Stacks up to 5 times.</p>',

    weaponStampImgs: ['images/grimm weapon.webp','images/sajin weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'At Long Last',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Grimmjow Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-In battle, increases ATK by an amount equal to  <span style="color: #52C394;">9%</span> of the character\'s Ultimate Charge Rate.<br>-When detonating <span style="color: #EA4A86; text-decoration: underline;">Destruction Mark</span>, deals additional damage equal to  <span style="color: #52C394;">100%</span> of ATK to the enemy. For every  <span style="color: #52C394;">1%</span> Ultimate Charge Rate, the damage is further increased by  <span style="color: #52C394;">0.5%</span>.<br>-Each time Grimmjow\'s attack hits an enemy, slightly reduces the cooldown of technique and Perfect Dodge.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Grimmjow Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-In battle, increases ATK by an amount equal to  <span style="color: #52C394;">18%</span> of the character\'s Ultimate Charge Rate.<br>-When detonating <span style="color: #EA4A86; text-decoration: underline;">Destruction Mark</span>, deals additional damage equal to  <span style="color: #52C394;">100%</span> of ATK to the enemy. For every  <span style="color: #52C394;">1%</span> Ultimate Charge Rate, the damage is further increased by  <span style="color: #52C394;">1%</span>.<br>-Each time Grimmjow\'s attack hits an enemy, slightly reduces the cooldown of technique and Perfect Dodge.</p></p>'
        }
      },
      {
        name: 'Power Strike',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/grimm bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases All-Skill Mastery by  <span style="color: #52C394;">3.5% (Next: 7%)</span> and Ailment Mastery by  <span style="color: #52C394;">3.5% (Next: 7%)</span> during battle. When equipped by a <span style="color: #ffaa00;">Full Assault</span> character, increases Strike Mastery by an extra  <span style="color: #52C394;">7.5% (Next: 15%)</span>.</div>`,
    bonds1OffsetX: 15,
    bonds1Height: 120,
    bonds1PopupWidth: 490,

    bonds2Imgs: ['images/sajin bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases All-Type DMG during battle by <span style="color: #52C394;">15%</span>.</div>`,
    bonds2OffsetX: 14,
    bonds2OffsetX: 14,
    bonds2Height: 122,
    bonds2PopupWidth: 430
  },
  {
    id: 'gin',
    category: 'captain',
    type: 'Thrust',
    role: 'Dps',
    name: 'Ichimaru Gin',
    nameJP: '市丸ギン',
    division: '3',
    divisionLabel: 'Former Captain · 3rd Division',
    color: '#c0d0e0',
    quote: '"It\'s a snake. A snake that swallows people whole. It doesn\'t bite. It just gently swallows them."',
    zanpakuto: {
      name: 'Shinsō',
      release: '"Shoot to kill, Shinsō"',
      desc: 'A wakizashi that extends at tremendous speed to impale distant opponents. Its bankai, Kamishini no Yari, can stretch up to 13 kilometers and retract almost instantaneously, making it the fastest zanpakutō.'
    },
    bio: 'The perpetually smiling captain of the 3rd Division. Gin hides his true intentions behind an unreadable grin, manipulating events from the shadows. Despite his cold exterior, his actions are driven by a deep personal vendetta and a promise he made long ago.',
    instructions: '',
    customAvatar: 'images/gin.webp',
    panelImage: 'images/gin panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -4,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/thrust.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/gin core.webp', 'images/gin core 2.webp', 'images/gin core 3.webp'],
    coreStampAngles: [-2, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Buto: Renjin',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Thrust DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases Technique DMG by <span style="color: #52C394;">50%</span>.<br>-Increases Ultimate DMG by <span style="color: #52C394;">75%</span>.<br>-Increases Ailment Mastery by <span style="color: #52C394;">20%</span> in battle. If the target already has an <span style="color: #EA4A86; text-decoration: underline;">ongoing debuff</span>, Ailment DMG dealt by Gin is increased by an extra <span style="color: #52C394;">30%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Thrust DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases Technique DMG by <span style="color: #52C394;">100%</span>.<br>-Increases Ultimate DMG by <span style="color: #52C394;">150%</span>.<br>-Increases Ailment Mastery by <span style="color: #52C394;">40%</span> in battle. If the target already has an <span style="color: #EA4A86; text-decoration: underline;">ongoing debuff</span>, Ailment DMG dealt by Gin is increased by an extra <span style="color: #52C394;">60%</span>.</p>'
        }
      },
      {
        name: 'Complicated Mood',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">65%</span> of the current Technique.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">130%</span> of the current Technique.</p>'
        }
      },
      {
        name: 'Still Want To Fight?',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">33%</span> of the current Technique.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">66%</span> of the current Technique.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86; font-weight: bold">-The recommended passives for Gin Ichimaru - Thrust are:</span><br>1) Overdrive - Full Assault<br>2) Enhanced Damage<br>3) Enhanced Technique - Full Assault<br>4) Enhanced Ultimate</p><p><span style="color: #EA4A86; font-weight: bold">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes.</p>',
    setStampImgs: ['images/gin set 1.webp', 'images/gin set 2.webp', 'images/gin set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 60],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Thrust DMG Bonus%<br>2) ATK% (Better for B4 and Higher)</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR%=CDMG% > Ailment DMG Bonus > ATK% > Ult Charge Rate%</p>', '<p><span style="color: #EA4A86;">The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit Dmg%</p><p><span style="color: #EA4A86;">Substats:</span><br>CR%=CDMG% > Ailment DMG Bonus > ATK% > Ult Charge Rate%</p>', '<p><span style="color: #EA4A86;">The recommended Mainstats are:</span><br>1) Ailment DMG%</p><p><span style="color: #EA4A86;">Substats:</span><br>CR%=CDMG% > Ailment DMG Bonus > ATK% > Ult Charge Rate%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Mocking Visage (3/3) </span><br>2-Piece: Increases Ailment DMG by <span style="color: #52C394;">50%</span>.<br>3-Piece: Each time a debuff on an enemy is triggered, the character\'s Thrust DMG is increased by <span style="color: #52C394;">1.5%</span> for 10 seconds. Stacks up to 10 times. Upon reaching 10 stacks, Technique DMG and Ultimate DMG are increased by <span style="color: #52C394;">25%</span> and <span style="color: #52C394;">25%</span>, respectively.</p>',

    weaponStampImgs: ['images/gin weapon.webp', 'images/gin weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'The Fastest Zanpakuto',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Gin Ichimaru Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-When <span style="color: #EA4A86;">Impale</span> is triggered a certain number of times, Gin gains the following buffs:<br>-Triggered 1 time: Gin\'s technique deals <span style="color: #52C394;">12.5%</span> more DMG for 15s. Stacks up to 5 times.<br>-Triggered 2 times: Gin\'s Crit Rate increases by <span style="color: #52C394;">15%</span> for 20s. Unstackable.<br>-Triggered 3 times: Gin can actively perform a special counterattack once, dealing DMG equal to <span style="color: #52C394;">800%</span> of ATK, inflicting 50 <span style="color: #EA4A86; text-decoration: underline">Impale Scale</span>, and gaining 1 <span style="color: #EA4A86; text-decoration: underline">Technique Point(s)</span>.<br>-Attacks from Gin\'s team inflict <span style="color: #EA4A86; text-decoration: underline">Impale Scale</span> at a <span style="color: #52C394;">30%</span> higher rate.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Gin Ichimaru Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-When <span style="color: #EA4A86;">Impale</span> is triggered a certain number of times, Gin gains the following buffs:<br>-Triggered 1 time: Gin\'s technique deals <span style="color: #52C394;">25%</span> more DMG for 15s. Stacks up to 5 times.<br>-Triggered 2 times: Gin\'s Crit Rate increases by <span style="color: #52C394;">30%</span> for 20s. Unstackable.<br>-Triggered 3 times: Gin can actively perform a special counterattack once, dealing DMG equal to <span style="color: #52C394;">1600%</span> of ATK, inflicting 50 <span style="color: #EA4A86; text-decoration: underline">Impale Scale</span>, and gaining 1 <span style="color: #EA4A86; text-decoration: underline">Technique Point(s)</span>.<br>-Attacks from Gin\'s team inflict <span style="color: #EA4A86; text-decoration: underline">Impale Scale</span> at a <span style="color: #52C394;">60%</span> higher rate</p>'
        }
      },
      {
        name: 'Piercing Thrust',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/gin bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;"><p>Increases Technique DMG by <span style="color: #52C394;">32%</span> during battle. When <span style="color: #ffaa00;">Ailment</span><br><span style="color: #ffaa00;">DMG Bonus</span> is equal or higher than <span style="color: #52C394;">80%</span>, <span style="color: #ffaa00;">Ailment DMG Bonus</span> is<br>increased by extra <span style="color: #52C394;">80%</span>.</p>`,
    bonds1OffsetX: 10,
    bonds1Height: 120,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/aizen bond 1.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: #52C394;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: #52C394;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: #52C394;">20% / 40% / 60%</span>.</div>`,
    bonds2OffsetX: 15,
    bonds2Height: 109,
    bonds2PopupWidth: 490
  },
  {
    id: 'soi-fon',
    category: 'captain',
    type: 'Strike',
    role: 'Tactic',
    name: 'Soi-Fon',
    nameJP: '砕蜂',
    division: '2',
    divisionLabel: 'Captain · 2nd Division',
    color: '#44ccaa',
    quote: '"Speed is not merely a technique — it is everything. If the enemy sees you, you have already failed."',
    stats: { Reiatsu:84, Swordsmanship:90, Kidō:70, Speed:98, Strength:80 },
    zanpakuto: {
      name: 'Suzumebachi',
      release: '"Sting all enemies to death" — 尽敵螫殺',
      desc: 'Takes the form of a stinger on the middle finger. A target struck twice in the same location will die — the first leaves a butterfly mark (Hōmonka), the second destroys the marked point. Bankai: Jakuhō Raikōben — a massive armored cannon of immense destructive power.'
    },
    bio: 'Commander of the Onmitsukidō and captain of the 2nd Division, Suì-Fēng is a master of assassination and Shunpo. Devoted to the way of the shinobi, she holds speed as the highest virtue and carries complex feelings about her former mentor, Yoruichi Shihōin.',
    instructions: '',
    customAvatar: 'images/soi fon.webp',
    panelImage: 'images/soi fon panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1.2,

    statsImgs:    ['images/shini.webp','images/strike.webp','images/tactic.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/soi core.webp', 'images/aizen core 2.webp', 'images/aizen core 3.webp'],
    coreStampAngles: [-2, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Punishment Force Commander\'s Outfit',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Strike DMG Bonus', value: '8.0%' }
          ],
          text: '<p>Each time 1 point of <span style="color: #EA4A86; text-decoration: underline;">Deathmark</span> is consumed, Soi Fon gains 1 stack of intuition, increasing her Technique DMG by <span style="color: #52C394;">2.5%</span>. This effect stacks up to 10 times, and upon reaching 10 stacks, her Ultimate also gains a <span style="color: #52C394;">150%</span> Crit DMG Bonus.<br>When her Ultimate lands a critical hit, it immediately triggers an extra <span style="color: #EA4A86; text-decoration: underline;">Sting</span> equal to <span style="color: #52C394;">750%</span> of Soi Fon\'s ATK.<br>After her Ultimate hits an enemy, all damage the target takes afterward is increases by <span style="color: #52C394;">10%</span> for 30 seconds.<br>Increases Ultimate DMG by <span style="color: #52C394;">30%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Strike DMG Bonus', value: '20.0%' }
          ],
          text: '<p>Each time 1 point of <span style="color: #EA4A86; text-decoration: underline;">Deathmark</span> is consumed, Soi Fon gains 1 stack of intuition, increasing her Technique DMG by <span style="color: #52C394;">5%</span>. This effect stacks up to 10 times, and upon reaching 10 stacks, her Ultimate also gains a <span style="color: #52C394;">300%</span> Crit DMG Bonus.<br>When her Ultimate lands a critical hit, it immediately triggers an extra <span style="color: #EA4A86; text-decoration: underline;">Sting</span> equal to <span style="color: #52C394;">1,500%</span> of Soi Fon\'s ATK.<br>After her Ultimate hits an enemy, all damage the target takes afterward is increases by <span style="color: #52C394;">20%</span> for 30 seconds.<br>Increases Ultimate DMG by <span style="color: #52C394;">60%</span>.</p>'
        }
      },
      {
        name: 'Lesson Three Cleared!',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">8%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">16%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        }
      },
      {
        name: 'Back-to-Back Combat',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Battlefield Skill.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Battlefield Skill.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Soi Fon - Strike are:</span><br>1) Overdrive - Tactic<br>2) Enhanced Ultimate<br>3) Enhanced Damage</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>B0 use charge rate slot 3 while B1-B5 use atk%. B1-B6 you dont need charge rate at all (0%) from stamps [ optional : by having 128 ucr. You can use a faster rotation] , and the weapon gives 30% at A1. For B6 Soi Fon, if used with a B4 Mayuri, Soi Fon\'s slot 3 must change to aliment dmg bonus %, else use atk%. Don\'t forget that weapon dupes are also important especially for giving crit rate stats and being able to use a crit dmg main stat for slot 2.</p>',
    setStampImgs: ['images/soi set 1.webp', 'images/soi set 2.webp', 'images/soi set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [20, 50],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK% = Strike DMG Bonus%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR>>CDMG>ATK%>Ailment%>Ult%<br>◆B6A5: CR%(need 25%)>Ailment%>CD>ATK%>Ult%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit Dmg%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR>>CDMG>ATK%>Ailment%>Ult%<br>◆B6A5: CR%(need 25%)>Ailment%>CD>ATK%>Ult%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ult Charge Rate%(B0)<br>2) ATK%(B1+) / Ailment DMG Bonus(B6)</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR>>CDMG>ATK%>Ailment%>Ult%<br>◆B6A5: CR%(need 25%)>Ailment%>CD>ATK%>Ult%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Stealth Force (3/3) </span><br>2-Piece: Increases Base ATK by <span style="color: #52C394;">20%</span>.<br>3-Piece: After each Battlefield Skill is released, increases Strike DMG by <span style="color: #52C394;">30%</span> and Ailment Mastery by <span style="color: #52C394;">15%</span> for 20 seconds. These effects are not stackable.</p>',

    weaponStampImgs: ['images/soi weapon.webp', 'images/gin weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Against The Restraint',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Soi Fon Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>The Spiritual Pressure and <span style="color: #EA4A86; text-decoration: underline">Deathmark</span> Soi Fon gains from technique, counter, Special Attack - Back Strike, and Special Attack - Windmill are increased by an extra <span style="color: #52C394;">50%</span>.<br>Each time Soi Fon is switched in, she gains 1 stack of Conviction, with each stack increasing her Crit Rate by <span style="color: #52C394;">10%</span> for 25 seconds, stacking up to 3 times.<br>Increases the damage dealt by <span style="color: #EA4A86; text-decoration: underline">Sting</span> by <span style="color: #52C394;">25%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Soi Fon Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>The Spiritual Pressure and <span style="color: #EA4A86; text-decoration: underline">Deathmark</span> Soi Fon gains from technique, counter, Special Attack - Back Strike, and Special Attack - Windmill are increased by an extra <span style="color: #52C394;">50%</span>.<br>Each time Soi Fon is switched in, she gains 1 stack of Conviction, with each stack increasing her Crit Rate by <span style="color: #52C394;">20%</span> for 25 seconds, stacking up to 3 times.<br>Increases the damage dealt by <span style="color: #EA4A86; text-decoration: underline">Sting</span> by <span style="color: #52C394;">50%</span>.</p>'
        }
      },
      {
        name: 'Piercing Thrust',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/soi bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases Strike DMG by <span style="color: #52C394;">9%</span> during battle and Ultimate DMG by <span style="color: #52C394;">5%</span>. When equipped by a <span style="color: #ffaa00;">Tactic</span> character, increases the above effects by an extra <span style="color: #52C394;">100%</span>.</div>`,
    bonds1OffsetX: 20,
    bonds1Height: 120,
    bonds1PopupWidth: 440,

    bonds2Imgs: ['images/aizen bond 1.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds2OffsetX: 25,
    bonds2Height: 106,
    bonds2PopupWidth: 490
  },
  {
    id: 'aizen',
    category: 'captain',
    type: 'Spirit',
    role: 'Tactic',
    name: 'Sōsuke Aizen',
    nameJP: '藍染惣右介',
    division: '5',
    divisionLabel: 'Former Captain · 5th Division',
    color: '#cc44ff',
    quote: '"From the moment of birth, all living creatures are set on a path toward death. Even the sun will eventually burn out... but I shall not."',
    stats: { Reiatsu:100, Swordsmanship:99, Kidō:100, Speed:97, Strength:95 },
    zanpakuto: {
      name: 'Kyōka Suigetsu',
      release: '"Shatter" — 砕けろ',
      desc: 'Creates a "perfect hypnosis" that controls all five senses of anyone who witnesses its release. Aizen used this ability for over 100 years to hide his true plans. The only defence is to touch the blade before release. Combined with the Hōgyoku, Aizen attained an unprecedented form beyond any known category.'
    },
    bio: 'Once considered the most respected captain of the Gotei 13, Aizen orchestrated a century-long conspiracy from behind a mask of perfect benevolence. His intellect, spiritual power, and manipulative genius set him in a category entirely his own. He sought to transcend the limits placed on all beings by fate itself.',
    instructions: 'Aizen is one of the best units in the current meta, however there are certain features of his kit that you must be aware of. A mistake many players make is assuming "I Will Stand Atop The Heavens" is Aizens Ultimate, however this is classified as his Battlefield Skill, therefore Enhanced Battlefield Passives provide more value than Enhanced Ultimate Passives. Overdrive passives alongside Toshiros bond should be used for those who plan to use Aizen as a solo DPS (with Momo/Kisuke and Szayelaporro), whereas Enhanced Battlefields along with Aizens bond are recommended for players who plan to use Aizen as a Tactic accompanied by a Full Assault unit. ',
    customAvatar: 'images/aizen.webp',
    panelImage: 'images/aizen panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/spirit.webp','images/tactic.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/aizen core.webp', 'images/aizen core 2.webp', 'images/aizen core 3.webp'],
    coreStampAngles: [-2, 1, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Unrivaled',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Spirit DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Upon releasing the Ultimate, the on-field character gains 1 stack of Illusion. Each time that character lands a hit, they gain another stack of Illusion.</p><p>Each stack of Illusion increases their Spirit DMG by <span style="color: #52C394;">0.5%</span>, up to 10 stacks, lasting until <span style="color: #EA4A86; text-decoration: underline;">Kyokasuigetsu</span> ends.</p><p>-When a counterattack from switching characters is triggered by the passive Battle of Spiritual Pressure, the new on-field character inherits all Illusion stacks, and the cap is doubled, up to 40 stacks. Upon reaching full stacks, Illusion also grants an extra <span style="color: #52C394;">25%</span> Crit DMG bonus.</p><p>-While under the <span style="color: #EA4A86; text-decoration: underline;">Spiritual Domination</span>, Aizen\'s Basic Attacks, techniques, and counterattacks deal <span style="color: #52C394; ">300%</span> more damage.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Spirit DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Upon releasing the Ultimate, the on-field character gains 1 stack of Illusion. Each time that character lands a hit, they gain another stack of Illusion.</p><p>Each stack of Illusion increases their Spirit DMG by <span style="color: #52C394;">1%</span>, up to 10 stacks, lasting until <span style="color: #EA4A86; text-decoration: underline;">Kyokasuigetsu</span> ends.</p><p>-When a counterattack from switching characters is triggered by the passive Battle of Spiritual Pressure, the new on-field character inherits all Illusion stacks, and the cap is doubled, up to 40 stacks. Upon reaching full stacks, Illusion also grants an extra <span style="color: #52C394;">50%</span> Crit DMG bonus.</p><p>-While under the <span style="color: #EA4A86; text-decoration: underline;">Spiritual Domination</span>, Aizen\'s Basic Attacks, techniques, and counterattacks deal <span style="color: #52C394; ">500%</span> more damage.</p>'
        }
      },
      {
        name: 'Lesson Three Cleared!',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">8%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">16%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        }
      },
      {
        name: 'Back-to-Back Combat',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Battlefield Skill.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Battlefield Skill.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86; font-weight: bold">-The recommended passives for Sosuke Aizen - Spirit are:</span><br>1) Overdrive - Tactic<br>2) Enhanced Damage<br>3) Enhanced Battlefield Skill II</p><p> <span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>At B6, Aizen doubles the crit rate of his battlefield skills. Thus, a CRIT DMG slot 2 is preferred with only a few crit rate substats.</p>',
    setStampImgs: ['images/aizen set 1.webp', 'images/aizen set 2.webp', 'images/aizen set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">The recommended Mainstats are:</span><br>1) Spirit DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">Substats:</span><br>CR=CDMG > ATK% > ULT% > ATK</p>', '<p><span style="color: #EA4A86;">The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit Dmg%</p><p><span style="color: #EA4A86;">Substats:</span><br>CR=CDMG > ATK% > ULT% > ATK</p>', '<p><span style="color: #EA4A86;">The recommended Mainstats are:</span><br>1) ATK%</p><p><span style="color: #EA4A86;">Substats:</span><br>CR=CDMG > ATK% > ULT% > ATK</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Immeasurable Gap (3/3) </span><br>2-Piece: Increases Spirit DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece:  Increases Battlefield Skill DMG by <span style="color: #52C394;">30%</span>. Each time a Battlefield Skill is released, increases all damage by <span style="color: #52C394;">10%</span> and the damage of the next two counterattacks from any teammates is increased by <span style="color: #52C394;">20%</span>. Lasts 10 seconds. Unstackable.</p>',

    weaponStampImgs: ['images/aizen weapon.webp', 'images/aizen weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Before We Realized',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Sosuke Aizen Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Increases Crit Rate by <span style="color: #52C394;">25%</span>.</p><p>-Increases the damage of counterattacks triggered by the passive battle of Spiritual Pressure by <span style="color: #52C394;">12.5%</span>.</p><p>-Increases the cap of <span style="color: #EA4A86; text-decoration: underline">Enhanced Pressure Stacks</span> to 6. If the Battlefield Skill Hado 90: Kurohitsugi consumes all 6 stacks at once, an extra counterattack from switching teammates will be triggered.</p><p>-Each stack of <span style="color: #EA4A86; text-decoration: underline">Ravage</span> reduces the enemy\'s Spirit Resistance by an extra <span style="color: #52C394;">1%</span>.</p><p>-Releasing any Battlefield Skill grants 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span>. While not under <span style="color: #EA4A86; text-decoration: underline">Spiritual Domination</span>, if fewer than 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span> are possesed, obtaining them immediatly activates the <span style="color: #EA4A86; text-decoration: underline">Spiritual Domination</span>. if exactly 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span> are possessed, entering <span style="color: #EA4A86; text-decoration: underline">Spiritual Domination</span> grants another 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span>.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Sosuke Aizen Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Increases Crit Rate by <span style="color: #52C394;">50%</span>.</p><p>-Increases the damage of counterattacks triggered by the passive battle of Spiritual Pressure by <span style="color: #52C394;">25%</span>.</p><p>-Increases the cap of <span style="color: #EA4A86; text-decoration: underline">Enhanced Pressure Stacks</span> to 6. If the Battlefield Skill Hado 90: Kurohitsugi consumes all 6 stacks at once, an extra counterattack from switching teammates will be triggered.</p><p>-Each stack of <span style="color: #EA4A86; text-decoration: underline">Ravage</span> reduces the enemy\'s Spirit Resistance by an extra <span style="color: #52C394;">2%</span>.</p><p>-Releasing any Battlefield Skill grants 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span>. While not under <span style="color: #EA4A86; text-decoration: underline">Spiritual Domination</span>, if fewer than 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span> are possesed, obtaining them immediatly activates the <span style="color: #EA4A86; text-decoration: underline">Spiritual Domination</span>. if exactly 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span> are possessed, entering <span style="color: #EA4A86; text-decoration: underline">Spiritual Domination</span> grants another 3 <span style="color: #EA4A86; text-decoration: underline">Pressure Stacks</span>.</p></p>'
        }
      },
      {
        name: 'Chanting Spirit',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Spirit DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Spirit DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/aizen bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds1OffsetX: 20,
    bonds1Height: 112,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/aizen bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases all damage by <span style="color: green;">10%</span> during battle. When equipped by a <span style="color: #ffaa00;">Tactic</span> character, increases an extra <span style="color: green;">25%</span> Battlefield Skill DMG.</div>`,
    bonds2OffsetX: 14,
    bonds2Height: 124,
    bonds2PopupWidth: 430
  },
  {
    id: 'byakuya',
    category: 'captain',
    type: 'Slash',
    role: 'Tactic',
    name: 'Byakuya Kuchiki',
    nameJP: '朽木白哉',
    division: '6',
    divisionLabel: 'Captain · 6th Division',
    color: '#cc88ff',
    quote: '"The nobility must uphold the law above all else — even if it means sacrificing those dearest to us."',
    stats: { Reiatsu:90, Swordsmanship:95, Kidō:85, Speed:95, Strength:82 },
    zanpakuto: {
      name: 'Senbonzakura',
      release: '"Scatter" — 散れ',
      desc: 'Shatters the blade into a thousand tiny blades like cherry blossom petals, controlled entirely by the will of the wielder. Bankai: Senbonzakura Kageyoshi — millions of blade-petals fill the air, capable of slicing targets to pieces from any angle.'
    },
    bio: 'The 28th head of the noble Kuchiki clan and captain of the 6th Division, Byakuya embodies aristocratic pride, composure, and unwavering duty. His early conflict with Ichigo — defending the execution of his own sister Rukia — reveals the painful tension between law, love, and personal honour that defines his journey.',
    instructions: '',
    customAvatar: 'images/byakuya.webp',
    panelImage: 'images/byakuya panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -4,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/slash.webp','images/tactic.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/byakuya core.webp', 'images/aizen core 2.webp', 'images/aizen core 3.webp'],
    coreStampAngles: [0, 1, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'All Turn To Dust',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Slash DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-When Byakuya is off-field, his Ultimate Energy Charge Rate increases by <span style="color: #52C394;">25%</span>.<br>-Increases DMG dealt by Battlefield Skills by <span style="color: #52C394;">50%</span>.<br>-The passive skill Senka reduces enemy Slash Resistance by an extra <span style="color: #52C394;">15%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Slash DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-When Byakuya is off-field, his Ultimate Energy Charge Rate increases by <span style="color: #52C394;">25%</span>.<br>-Increases DMG dealt by Battlefield Skills by <span style="color: #52C394;">100%</span>.<br>-The passive skill Senka reduces enemy Slash Resistance by an extra <span style="color: #52C394;">30%</span>.</p>'
        }
      },
      {
        name: 'Lesson Three Cleared!',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">8%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">16%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        }
      },
      {
        name: 'Back-to-Back Combat',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Battlefield Skill.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Battlefield Skill.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Byakuya Kuchiki - Slash are:</span><br>1) Overdrive - Tactic<br>2) Enhanced Damage<br>3) Enhanced Battlefield Skill</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes.</p>',
    setStampImgs: ['images/byakuya set 1.webp', 'images/byakuya set 2.webp', 'images/byakuya set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 60],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Slash DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>Ult%>CR%>CDMG%>ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit DMG%</p><p><span style="color: #EA4A86;">-Substats:</span><br>Ult%>CR%>CDMG%>ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ultimate Charge Rate%%</p><p><span style="color: #EA4A86;">-Substats:</span><br>Ult%>CR%>CDMG%>ATK%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Blooming Sakura (3/3) </span><br>2-Piece: Increases Ultimate Charge Rate by <span style="color: #52C394;">22%</span>.<br>3-Piece: Increases Battlefield Skill DMG by <span style="color: #52C394;">30%</span>. Each time a Battlefield Skill is released, increases basic attack DMG by <span style="color: #52C394;">6%</span> for 15s. Stacks up to 6 times.</p>',

    weaponStampImgs: ['images/byakuya weapon.webp', 'images/byakuya weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Shukei Hakuteiken',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Byakuya Kuchiki Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Byakuya gains 2 extra Battlefield Skill Energy every time he releases his technique.<br>-Increases the maximum number of stacks for the passive skills Flawless and Peerless to 6.<br>-When Byakuya releases Piercing Blade, its DMG increases by <span style="color: #52C394;">10%</span> every 0.5s, up to <span style="color: #52C394;">70%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Byakuya Kuchiki Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Byakuya gains 2 extra Battlefield Skill Energy every time he releases his technique.<br>-Increases the maximum number of stacks for the passive skills Flawless and Peerless to 6.<br>-When Byakuya releases Piercing Blade, its DMG increases by <span style="color: #52C394;">40%</span> every 0.5s, up to <span style="color: #52C394;">280%</span>.</p>'
        }
      },
      {
        name: 'Method',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">6%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">12%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/aizen bond 2.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases all damage by <span style="color: green;">10%</span> during battle. When equipped by a <span style="color: #ffaa00;">Tactic</span> character, increases an extra <span style="color: green;">25%</span> Battlefield Skill DMG.</div>`,
    bonds1OffsetX: 12,
    bonds1Height: 120,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/byakuya bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases Battlefield Skill DMG by <span style="color: #52C394;">37.5%</span> during battle. Only effective on <span style="color: #ffaa00;">Tactic</span> characters.</div>`,
    bonds2OffsetX: 14,
    bonds2Height: 117,
    bonds2PopupWidth: 430
  },
  {
    id: 'mayuri',
    category: 'captain',
    type: 'Thrust',
    role: 'Support',
    name: 'Kurotsuchi Mayuri',
    nameJP: '涅マユリ',
    division: '12',
    divisionLabel: 'Captain · 12th Division',
    color: '#aa44ff',
    quote: '"A scientist is nothing without his data. Even a failed experiment is a success — as long as you learn from it."',
    stats: { Reiatsu: 88, Swordsmanship: 75, Kidō: 95, Speed: 80, Strength: 70 },
    zanpakuto: {
      name: 'Ashisogi Jizō',
      release: '"Rip, Ashisogi Jizō"',
      desc: 'A grotesque zanpakutō that paralyses its victims with a neurotoxin. Its bankai, Konjiki Ashisogi Jizō, produces a giant caterpillar-like creature that exhales a deadly poison capable of dissolving organic matter and even reconfiguring its own genetic structure.'
    },
    bio: 'The twisted genius of the 12th Division and president of the Shinigami Research and Development Institute. Mayuri is a ruthless scientist who views everything — allies, enemies, even himself — as test subjects. His biotechnology and chemical warfare are unmatched, as is his utter lack of ethical boundaries.',
    instructions: 'When using Mayuri it is important to note that he does not require much onfield time. With both iterations of the current Thrust and Strike team, ensure that you swap out of Mayuri instantly after using either his Ultimate or summoning Nemu after his Technique. This will allow for more onfield time with other units while still ensuring all available buffs are active.',
    customAvatar: 'images/mayuri.webp',
    panelImage: 'images/mayuri panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1.2,

    statsImgs:    ['images/shini.webp','images/thrust.webp','images/support.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/mayuri core.webp', 'images/mayuri core 2.webp'],
    coreStampAngles: [-2, 1, 3],
    coreStampGaps: [150, 80],
    coreStampPopupData: [
      {
        name: 'Curious About You',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Thrust DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases Ultimate DMG by <span style="color: #52C394;">75%</span>.<br>-Each stack of <span style="color: #EA4A86; text-decoration: underline;">Excitement</span> grants an extra <span style="color: #52C394;">5%</span> ATK to the entire team.<br>-The Crit DMG granted by Terror is additionally increased by <span style="color: #52C394;">80%</span>.<br>-When receiving fatal damage, transforms into a puddle of green liquid and revives after a short while with full Spiritual Pressure and Ultimate Energy.<br>Cooldown: 120 seconds.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Thrust DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases Ultimate DMG by <span style="color: #52C394;">150%</span>.<br>-Each stack of <span style="color: #EA4A86; text-decoration: underline;">Excitement</span> grants an extra <span style="color: #52C394;">10%</span> ATK to the entire team.<br>-The Crit DMG granted by Terror is additionally increased by <span style="color: #52C394;">160%</span>.<br>-When receiving fatal damage, transforms into a puddle of green liquid and revives after a short while with full Spiritual Pressure and Ultimate Energy.<br>Cooldown: 120 seconds.</p>'
        }
      },
      {
        name: 'It\'s My Turn Now',
		dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'HP', value: '9.6%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">6%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'HP', value: '16.8%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">12%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        }
      },
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Mayuri Kurotsuchi - Thrust are:</span><br>1) Invigorate - Support<br>2) Invigorate - Tactic<br>3) Restrain<br>4) Invigorate</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>At B4 Mayuri wants <span style="color: #52C394;">250%</span> ultimate charge rate to max his passive to provide <span style="color: #52C394;">50%</span> more ailment bonus.</p>',
    setStampImgs: ['images/mayuri set 1.webp', 'images/mayuri set 2.webp', 'images/mayuri set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>Stats here do not matter, follow Substats for Priority.</p><p><span style="color: #EA4A86;">-Substats:</span><br>Ult%(Up to <span style="color: #52C394;">230%+</span>)>Ailment%>Anything</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>Stats here do not matter, follow Substats for Priority.</p><p><span style="color: #EA4A86;">-Substats:</span><br>Ult%(Up to <span style="color: #52C394;">230%+</span>)>Ailment%>Anything</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ult Charge Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>Ult%(Up to <span style="color: #52C394;">230%+</span>)>Ailment%>Anything</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Sample Collection (3/3) </span><br>2-Piece: Increases Ultimate Charge Rate by <span style="color: #52C394;">22%</span>.<br>3-Piece: Each time Poison is inflicted on an enemy, the entire team\'s ATK is increased by <span style="color: #52C394;">5%</span> for 30 seconds, stacking up to 3 times.</p>',

    weaponStampImgs: ['images/mayuri weapon.webp', 'images/byakuya weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Wipe Out',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kurotsuchi Mayuri Exclusive Effect',
          text: '<p>-When the battle begins, increases Ultimate Energy and Spiritual Pressure to the maximum.<br>-Increases Technique DMG by <span style="color: #52C394;">50%</span> and healing effects by <span style="color: #52C394;">25%</span>.<br>-When releasing the Ultimate, increases the entire team\'s <span style="color: #EA4A86; text-decoration: underline;">All-Skill Mastery</span> by an extra <span style="color: #52C394;">5%</span> and Ailment Mastery by <span style="color: #52C394;">10%</span></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kurotsuchi Mayuri Exclusive Effect',
          text: '<p>-When the battle begins, increases Ultimate Energy and Spiritual Pressure to the maximum.<br>-Increases Technique DMG by <span style="color: #52C394;">100%</span> and healing effects by <span style="color: #52C394;">50%</span>.<br>-When releasing the Ultimate, increases the entire team\'s <span style="color: #EA4A86; text-decoration: underline;">All-Skill Mastery</span> by an extra <span style="color: #52C394;">10%</span> and Ailment Mastery by <span style="color: #52C394;">20%</span></p>'
        }
      },
      {
        name: 'Method',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">6%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">12%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/mayuri bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, teammates other than yourself gain <span style="color: #52C394;">16%</span> Crit DMG.<br>Unstackable.</div>`,
    bonds1OffsetX: 14,
    bonds1Height: 120,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/mayuri bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases ATK of all team characters during battle by <span style="color: #52C394;">6%</span>.</div>`,
    bonds2OffsetX: 14,
    bonds2Height: 119,
    bonds2PopupWidth: 430
  },
  {
    id: 'komamura',
    category: 'captain',
    type: 'Strike',
    role: 'Tactic',
    name: 'Sajin Komamura',
    nameJP: '狛村左陣',
    division: '7',
    divisionLabel: 'Captain · 7th Division',
    color: '#8b5a2b',
    quote: '"A warrior who cannot bear to show his face has no place on the battlefield. But I have learned... that true strength comes from the heart, not the visage."',
    stats: { Reiatsu: 88, Swordsmanship: 92, Kidō: 70, Speed: 75, Strength: 95 },
    zanpakuto: {
      name: 'Tenken',
      release: '"Roar, Tenken"',
      desc: 'A colossal zanpakutō that manifests a giant spectral warrior mimicking Komamura\'s movements. Its bankai, Kokujō Tengen Myō\'ō, summons an enormous armored titan that deals earth-shattering blows but is linked to the wielder — any damage the titan takes is reflected onto Komamura.'
    },
    bio: 'A towering, wolf-like shinigami who once hid his bestial face behind a bamboo helmet. Komamura embodies unwavering loyalty and a deep sense of honor, dedicating his blade to the defense of Soul Society. His kind heart and immense physical power make him both a gentle soul and a terrifying combatant.',
    instructions: '',
    customAvatar: 'images/sajin.webp',
    panelImage: 'images/sajin panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/strike.webp','images/tactic.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/sajin core.webp', 'images/aizen core 2.webp', 'images/gin core 3.webp'],
    coreStampAngles: [-2, 1, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Devoted Valor',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Strike DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Releasing the Battlefield Skill Tenken Ascension - Charged Strike reduces the Strike Resistance of all enemies by <span style="color: #52C394;">6%</span>, and by an extra <span style="color: #52C394;">6%</span> if at least 10 stacks of <span style="color: #EA4A86; text-decoration: underline;">Build Up</span> are consumed. Lasts for 20s.<br>-Increases all Battlefield Skill DMG by <span style="color: #52C394;">50%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Strike DMG Bonus', value: '20.0%' }
          ],
          text: '<p>No Data.</p>'
        }
      },
      {
        name: 'Lesson Three Cleared!',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">8%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">16%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        }
      },
      {
        name: 'Still Want To Fight?',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">33%</span> of the current Technique.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Technique is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">66%</span> of the current Technique.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-NOTE:</span> Please do not six star the stamps of Sajin Komammura - Strike, just wait for a worthy character to six star.<p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes..</p></p>',
    setStampImgs: ['images/sajin set 1.webp', 'images/sajin set 2.webp', 'images/sajin set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Strike DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ult Charge Rate% > ATK% > HP%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crite Rate%<br>2) Crit DMG%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ult Charge Rate% > ATK% > HP%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ult Charge Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ult Charge Rate% > ATK% > HP%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Inner Fang (3/3) </span><br>2-Piece: Increases Base ATK by <span style="color: #52C394;">16%</span>.<br>3-Piece: Each time a Battlefield Skill deals DMG, increases the next Battlefield Skill DMG by <span style="color: #52C394;">12%</span> for <span style="color: #52C394;">10</span>s. Stacks up to 5 times.</p>',

    weaponStampImgs: ['images/sajin weapon.webp', 'images/sajin weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Dark Armor',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Sajin Komamura Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-After Komamura releases his technique, quickly tap the basic attack button for a follow-up attack which deals DMG equal to <span style="color: #52C394;">400%</span> of ATK and grants 1 stack of <span style="color: #EA4A86; text-decoration: underline;">Build Up</span>. This attack counts as a technique.<br>-When the follow-up attack hits an enemy, their Strike Resistance is reduced y an extra <span style="color: #52C394;">10%</span>. Lasts for 30s.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Sajin Komamura Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-After Komamura releases his technique, quickly tap the basic attack button for a follow-up attack which deals DMG equal to <span style="color: #52C394;">800%</span> of ATK and grants 1 stack of <span style="color: #EA4A86; text-decoration: underline;">Build Up</span>. This attack counts as a technique.<br>-When the follow-up attack hits an enemy, their Strike Resistance is reduced y an extra <span style="color: #52C394;">20%</span>. Lasts for 30s.</p>'
        }
      },
      {
        name: 'Power Strike',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/byakuya bond 2.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases Battlefield Skill DMG by <span style="color: #52C394;">37.5%</span> during battle. Only effective on <span style="color: #ffaa00;">Tactic</span> characters.</div>`,
    bonds1OffsetX: 10,
    bonds1Height: 121,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/sajin bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases All-Type DMG during battle by <span style="color: #52C394;">15%</span>.</div>`,
    bonds2OffsetX: 14,
    bonds2Height: 122,
    bonds2PopupWidth: 430
  },
  {
    id: 'tosen',
    category: 'captain',
    type: 'Thrust',
    role: 'Tactic',
    name: 'Kaname Tōsen',
    nameJP: '東仙要',
    division: '9',
    divisionLabel: 'Former Captain · 9th Division',
    color: '#88ff88',
    quote: '"The path with the least bloodshed — that is the path of justice."',
    stats: { Reiatsu:86, Swordsmanship:84, Kidō:88, Speed:88, Strength:80 },
    zanpakuto: {
      name: 'Suzumushi',
      release: '"Cry" — 鳴け',
      desc: 'Creates a sound-based confusion field. Bankai: Suzumushi Tsuishiki Enma Kōrogi — generates a sensory deprivation dome that removes all senses of those within it except touch, while leaving Tōsen\'s own spiritual perception active — an overwhelming advantage.'
    },
    bio: 'A blind man who could still sense the beauty of the world through spiritual energy, Tōsen followed Aizen in pursuit of "the least bloody path." His unwavering belief in justice and peace ultimately led him to betray Soul Society alongside Aizen. His sincerity was real — only his methods were tragically misled.',
    instructions: '',
    customAvatar: 'images/tosen.webp',
    panelImage: 'images/tosen panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/thrust.webp','images/tactic.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/tosen core.webp', 'images/aizen core 2.webp', 'images/tosen core 3.webp'],
    coreStampAngles: [-1, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Way Of Justice',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Thrust DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases Ultimate DMG by <span style="color: #52C394;">30%</span>.<br>-When the Ultimate is released, all enemies within the domain immediately receive <span style="color: #52C394;">10%</span> more Thrust DMG. Each stack of <span style="color: #EA4A86; text-decoration: underline;">Wound</span> on the enemy increases this effect by an extra <span style="color: #52C394;">1%</span>, up to <span style="color: #52C394;">20%</span>. Lasts for 25s.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Thrust DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases Ultimate DMG by <span style="color: #52C394;">60%</span>.<br>-When the Ultimate is released, all enemies within the domain immediately receive <span style="color: #52C394;">20%</span> more Thrust DMG. Each stack of <span style="color: #EA4A86; text-decoration: underline;">Wound</span> on the enemy increases this effect by an extra <span style="color: #52C394;">1%</span>, up to <span style="color: #52C394;">20%</span>. Lasts for 25s.</p>'
        }
      },
      {
        name: 'Lesson Three Cleared!',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">8%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">16%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        }
      },
      {
        name: 'Rushing Into Danger',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Ultimate.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Ultimate.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Kaname Tosen - Thrust are:</span><br>1) Overdrive - Tactic<br>2) Enhanced Damage<br>3) Enhanced Tachnique<br>4) Enhanced Ultimate</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes.</p>',
    setStampImgs: ['images/gin set 1.webp', 'images/gin set 2.webp', 'images/gin set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK%<br>2) Thrust DMG Bonus%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR = CDMG > Ailment DMG Bonus > ATK% > ATK > Ult%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit Dmg%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR = CDMG > Ailment DMG Bonus > ATK% > ATK > Ult%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ailment DMG Bonus%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR = CDMG > Ailment DMG Bonus > ATK% > ATK > Ult%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Mocking Visage (3/3) </span><br>2-Piece: Increases Ailment DMG by <span style="color: #52C394;">50%</span>.<br>3-Piece: Each time a debuff on an enemy is triggered, the character\'s Thrust DMG is increased by <span style="color: #52C394;">1.5%</span> for 10 seconds. Stacks up to 10 times. Upon reaching 10 stacks, Technique DMG and Ultimate DMG are increased by <span style="color: #52C394;">25%</span> and <span style="color: #52C394;">25%</span>, respectively.</p>',

    weaponStampImgs: ['images/tosen weapon.webp', 'images/aizen weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Unforgivable',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kaname Tosen Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Increases the stacks of <span style="color: #EA4A86; text-decoration: underline;">Wound</span> inflicted from the technique of Suzumushi Thrust by 2, and from Tsuishiki - Suzumushi Thrust by 3.<br>-After releasing the Ultimate, the Ultimate button becomes active again. Tap it to release a follow-up attack, dealing DMG equal to <span style="color: #52C394;">2,400%</span> of ATK and instantly inflicting 6 stacks of <span style="color: #EA4A86; text-decoration: underline;">Wound</span>.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kaname Tosen Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Increases the stacks of <span style="color: #EA4A86; text-decoration: underline;">Wound</span> inflicted from the technique of Suzumushi Thrust by 2, and from Tsuishiki - Suzumushi Thrust by 3.<br>-After releasing the Ultimate, the Ultimate button becomes active again. Tap it to release a follow-up attack, dealing DMG equal to <span style="color: #52C394;">4,800%</span> of ATK and instantly inflicting 6 stacks of <span style="color: #EA4A86; text-decoration: underline;">Wound</span>.</p></p>'
        }
      },
      {
        name: 'Chanting Spirit',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Spirit DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Spirit DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/gin bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;"><p>Increases Technique DMG by <span style="color: #52C394;">32%</span> during battle. When <span style="color: #ffaa00;">Ailment</span><br><span style="color: #ffaa00;">DMG Bonus</span> is equal or higher than <span style="color: #52C394;">80%</span>, <span style="color: #ffaa00;">Ailment DMG Bonus</span> is<br>increased by extra <span style="color: #52C394;">80%</span>.</p>`,
    bonds1OffsetX: 21,
    bonds1Height: 120,
    bonds1PopupWidth: 490,

    bonds2Imgs: ['images/aizen bond 1.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: #52C394;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: #52C394;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches<span style="color: #52C394;">20% / 40% / 60%</span>.</div>`,
    bonds2OffsetX: 25,
    bonds2Height: 110,
    bonds2PopupWidth: 490
  },
  {
    id: 'hitsugaya',
    category: 'captain',
    type: 'Spirit',
    role: 'Dps',
    name: 'Tōshirō Hitsugaya',
    nameJP: '日番谷冬獅郎',
    division: '10',
    divisionLabel: 'Captain · 10th Division',
    color: '#88ddff',
    quote: '"Don\'t call me \'boy\'. I have a name — learn it."',
    stats: { Reiatsu:90, Swordsmanship:90, Kidō:72, Speed:90, Strength:80 },
    zanpakuto: {
      name: 'Hyōrinmaru',
      release: '"Sit upon the frozen heavens" — 霜天に坐せ',
      desc: 'The strongest ice-type Zanpakutō in Soul Society. Controls ice and water across the sky. A single wave of the blade creates a massive ice dragon. Bankai: Daiguren Hyōrinmaru — encases Hitsugaya in a dragon of ice, granting flight and devastating freezing attacks that expand with his maturity.'
    },
    bio: 'The youngest captain ever to achieve his rank through his own power, Hitsugaya is a prodigy whose potential is said to eventually surpass even Yamamoto. Serious and mature beyond his appearance, he is deeply protective of those close to him — especially his childhood friend Momo Hinamori.',
    instructions: '',
    customAvatar: 'images/toshiro.webp',
    panelImage: 'images/toshiro panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1.2,

    statsImgs:    ['images/shini.webp','images/spirit.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/toshiro core.webp', 'images/toshiro core 2.webp', 'images/tosen core 3.webp'],
    coreStampAngles: [-2, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Floating Ice Bloom',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Spirit DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases the cap of <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms</span> to 12, with each <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms</span> increasing the DMG and Crit DMG of the Ultimate Hyoten Hyakkaso by <span style="color: #52C394;">2%</span> and <span style="color: #52C394;">5%</span>. Releasing Hyoten Hyakkaso with 12 <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms</span> grants an extra damage bonus by <span style="color: #52C394;">20%</span> of Ultimate Mastery.<br>-Basic Attacks deal <span style="color: #52C394;">20%</span> more DMG to targets affected by <span style="color: #EA4A86; text-decoration: underline;">Freeze Points</span>, and hitting targets charges <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms<span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Spirit DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases the cap of <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms</span> to 12, with each <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms</span> increasing the DMG and Crit DMG of the Ultimate Hyoten Hyakkaso by <span style="color: #52C394;">6%</span> and <span style="color: #52C394;">15%</span>. Releasing Hyoten Hyakkaso with 12 <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms</span> grants an extra damage bonus by <span style="color: #52C394;">50%</span> of Ultimate Mastery.<br>-Basic Attacks deal <span style="color: #52C394;">80%</span> more DMG to targets affected by <span style="color: #EA4A86; text-decoration: underline;">Freeze Points</span>, and hitting targets charges <span style="color: #EA4A86; text-decoration: underline;">Ice Blossoms<span>.</p>'
        }
      },
      {
        name: 'To Reach Higher Places',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>As the combo count goes up, the on-field character\'s basic attack DMG increases by <span style="color: #52C394;">6.5%</span>, up to 10 times. This effect disappears when the combo count resets to zero.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>As the combo count goes up, the on-field character\'s basic attack DMG increases by <span style="color: #52C394;">13%</span>, up to 10 times. This effect disappears when the combo count resets to zero.</p>'
        }
      },
      {
        name: 'Rushing Into Danger',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Ultimate.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Ultimate.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Toshiro Hitsugaya - Spirit are:</span><br>1) Overdrive - Full Assault<br>2) Enhanced Damage<br>3) Enhanced Basic Attack - Full Assault<br>4) Enhanced Ultimate</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>At B2, Toshiro gains <span style="color: #52C394;">40%</span> Crit Rate (<span style="color: #52C394;">20%</span> stacking 2x). Paired with his weapon stamp providing <span style="color: #52C394;">30%</span>, his slot 2 now favors CRIT DMG over CRIT RATE.</p>',
    setStampImgs: ['images/toshiro set 1.webp', 'images/toshiro set 2.webp', 'images/toshiro set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 50],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Spirit DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR = CDMG > ATK% > ATK > Ult%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit Dmg%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR = CDMG > ATK% > ATK > Ult%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR = CDMG > ATK% > ATK > Ult%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">World Conquest (3/3) </span><br>2-Piece: Increases Spirit DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece: Increases Ultimate DMG by <span style="color: #52C394;">30%</span>. Each time a technique is released, increases basic attack DMG by <span style="color: #52C394;">36%</span> for 8s. Unstackable.</p>',

    weaponStampImgs: ['images/toshiro weapon.webp', 'images/aizen weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Crimson Ice Dragon',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Toshiro Hitsugaya Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Crit Rate increases by <span style="color: #52C394;">30%</span>.<br>-During <span style="color: #EA4A86; text-decoration: underline;">Tenso Jyurin</span>, basic attack damage is increased by <span style="color: #52C394;">50%</span>, damage taken is reduced by <span style="color: #52C394;">25%</span> while using basic attacks, and they cannot be interrupted.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Toshiro Hitsugaya Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Crit Rate increases by <span style="color: #52C394;">60%</span>.<br>-During <span style="color: #EA4A86; text-decoration: underline;">Tenso Jyurin</span>, basic attack damage is increased by <span style="color: #52C394;">100%</span>, damage taken is reduced by <span style="color: #52C394;">50%</span> while using basic attacks, and they cannot be interrupted.</p></p>'
        }
      },
      {
        name: 'Chanting Spirit',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Spirit DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Spirit DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/aizen bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds1OffsetX: 20,
    bonds1Height: 113,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/toshiro bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases Crit DMG during battle by <span style="color: #52C394;">30%</span>.</div>`,
    bonds2OffsetX: 18,
    bonds2Height: 118,
    bonds2PopupWidth: 430
  },
  {
    id: 'kenpachi',
    category: 'captain',
    type: 'Slash',
    role: 'Dps',
    name: 'Kenpachi Zaraki',
    nameJP: '更木剣八',
    division: '11',
    divisionLabel: 'Captain · 11th Division',
    color: '#ff4444',
    quote: '"If I swing my sword with all my hatred behind it... can I cut even God?"',
    stats: { Reiatsu:97, Swordsmanship:100, Kidō:0, Speed:85, Strength:100 },
    zanpakuto: {
      name: 'Nozarashi',
      release: '"Drink" — 飲め',
      desc: 'An unnamed blade for most of his life — Zaraki never bothered to learn its name. Shikai: Nozarashi takes a massive cleaver form capable of splitting meteorites. Bankai: Nozarashi (Bankai) — Zaraki transforms into a beast of pure killing intent, his body mutating to unleash unbridled destruction.'
    },
    bio: 'Named after the district he slaughtered his way out of, Zaraki Kenpachi is the embodiment of battle lust and raw power. He willingly handicaps himself by wearing bells and an eye patch to make fights last longer. A warrior who lived only for the thrill of battle, he eventually found something worth protecting — his lieutenant, Yachiru.',
    instructions: '',
    customAvatar: 'images/kenpachi.webp',
    panelImage: 'images/kenpachi panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1.1,

    statsImgs:    ['images/shini.webp','images/slash.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/kenpachi core.webp', 'images/kenpachi core 2.webp', 'images/tosen core 3.webp'],
    coreStampAngles: [-2, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Fight To The Death',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Slash DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-When casting the Ultimate, Full Power, all enemies are inflicted with <span style="color: #EA4A86; text-decoration: underline;">Cleave</span>. If enemies are already affected by <span style="color: #EA4A86; text-decoration: underline;">Cleave</span>, its duration is extended by 8 seconds.<br>While War Wraith is active, each basic attack hit increases the damage of the next Ultimate, "Kendo", by <span style="color: #52C394;">10%</span>, stacking up to 10 times.<br>Releasing the technique, Spiritual Pressure Burst, and its follow-up attacks grants 1 stack of buff that increases Technique DMG by <span style="color: #52C394;">25%</span> for 5 seconds, stacking up to 2 times.<br>When casting the Special Attack, Rampage Raid, gain 1 stack of a buff that increases Crit Rate by <span style="color: #52C394;">10%</span> for 30 seconds, stacking up to 2 times.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Slash DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-When casting the Ultimate, Full Power, all enemies are inflicted with <span style="color: #EA4A86; text-decoration: underline;">Cleave</span>. If enemies are already affected by <span style="color: #EA4A86; text-decoration: underline;">Cleave</span>, its duration is extended by 8 seconds.<br>While War Wraith is active, each basic attack hit increases the damage of the next Ultimate, "Kendo", by <span style="color: #52C394;">20%</span>, stacking up to 10 times.<br>Releasing the technique, Spiritual Pressure Burst, and its follow-up attacks grants 1 stack of buff that increases Technique DMG by <span style="color: #52C394;">50%</span> for 5 seconds, stacking up to 2 times.<br>When casting the Special Attack, Rampage Raid, gain 1 stack of a buff that increases Crit Rate by <span style="color: #52C394;">10%</span> for 30 seconds, stacking up to 2 times.</p>'
        }
      },
      {
        name: 'I\'ve Noticed You For A While',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">25%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">12.5%</span>, up to <span style="color: #52C394;">25%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">50%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">25%</span>, up to <span style="color: #52C394;">50%</span>.</p>'
        }
      },
      {
        name: 'Rushing Into Danger',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Ultimate.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Ultimate.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Kenpachi Zaraki - Slash are:</span><br>1) Overdrive - Full Assault<br>2) Enhanced Damage<br>3) Enhanced Ultimate<br>4) Enhanced Technique</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Zaraki Kenpachi at B2 gets a <span style="color: #52C394;">30%</span> crit rate boost (requiring <span style="color: #52C394;">60%</span> Ailment Bonus), and his core stamp provides <span style="color: #52C394;">20%</span>. Thus, at b2, you should be using a CRIT DMG slot 2 mainstat, and aim to get the remaining <span style="color: #52C394;">50%</span> through substats.</p>',
    setStampImgs: ['images/kenpachi set 1.webp', 'images/kenpachi set 2.webp', 'images/kenpachi set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 70],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Slash DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ailment DMG Bonus% > Ult Charge Rate% > ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit DMG%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ailment DMG Bonus% > Ult Charge Rate% > ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ultimate Charge Rate%(For B0 and B1)<br>2) Ailment DMG%(For B2 and Higher)</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ailment DMG Bonus% > Ult Charge Rate% > ATK%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Ready To GO (3/3) </span><br>2-Piece: Increases Base ATK by <span style="color: #52C394;">20%</span>.<br>3-Piece: Increases Crit DMG by <span style="color: #52C394;">50%</span>. Each time Cleave is applied to an enemy, the Ailment DMG dealt by your Sever Attacks is increased by <span style="color: #52C394;">12%</span>. This effect lasts for 30 seconds and stacks up to 3 times.</p>',

    weaponStampImgs: ['images/kenpachi weapon.webp', 'images/kenpachi weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Blade Of Lament',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kenpachi Zaraki Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Releasing the final hit of a Special Attack returns 1 point of <span style="color: #EA4A86; text-decoration: underline;">Frenzy</span>.<br>-Increases the damage dealt by every technique by <span style="color: #52C394;">50%</span>.<br>-When any of Kenpachi\'s attacks lands a critical hit, it triggers an additional hit dealing damage equal to <span style="color: #52C394;">20%</span> of that attack.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kenpachi Zaraki Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Releasing the final hit of a Special Attack returns 1 point of <span style="color: #EA4A86; text-decoration: underline;">Frenzy</span>.<br>-Increases the damage dealt by every technique by <span style="color: #52C394;">100%</span>.<br>-When any of Kenpachi\'s attacks lands a critical hit, it triggers an additional hit dealing damage equal to <span style="color: #52C394;">40%</span> of that attack.</p></p>'
        }
      },
      {
        name: 'Sundering Slash',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Slash DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Slash DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/aizen bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds1OffsetX: 15,
    bonds1Height: 115,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/gin bond 1.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;"><p>Increases Technique DMG by <span style="color: #52C394;">32%</span> during battle. When <span style="color: #ffaa00;">Ailment</span><br><span style="color: #ffaa00;">DMG Bonus</span> is equal or higher than <span style="color: #52C394;">80%</span>, <span style="color: #ffaa00;">Ailment DMG Bonus</span> is<br>increased by extra <span style="color: #52C394;">80%</span>.</p>`,
    bonds2OffsetX: 14,
    bonds2Height: 124,
    bonds2PopupWidth: 430
  },
  {
    id: 'ikkaku',
    category: 'lieutenant',
    type: 'Thrust',
    role: 'Dps',
    name: 'Ikkaku Madarame',
    nameJP: '斑目一角',
    division: '11',
    divisionLabel: 'Lieutenant · 11th Division',
    color: '#ff6644',
    quote: '"A fight isn\'t about winning or losing. It\'s about putting your life on the line and seeing who\'s left standing."',
    stats: { Reiatsu: 78, Swordsmanship: 90, Kidō: 10, Speed: 80, Strength: 85 },
    zanpakuto: {
      name: 'Hōzukimaru',
      release: '"Extend, Hōzukimaru"',
      desc: 'A spear-like zanpakutō that splits into a three-section staff, offering versatile close-range attacks. Its bankai, Ryūmon Hōzukimaru, is a massive dragon-shaped weapon that grows stronger the more it is damaged — a fitting reflection of Ikkaku\'s relentless fighting spirit.'
    },
    bio: 'The bald, battle-hungry lieutenant of the 11th Division. Ikkaku lives for the thrill of combat and follows Kenpachi Zaraki\'s warrior code to the letter. He hides his bankai from most, wanting to fight and die under the same sky as his captain. His loyalty and ferocity make him one of the toughest fighters in the Gotei 13.',
    instructions: '',
    customAvatar: 'images/ikkaku.webp',
    panelImage: 'images/ikkaku panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1.2,

    statsImgs:    ['images/shini.webp','images/thrust.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/ikkaku core.webp', 'images/kenpachi core 2.webp', 'images/ikkaku core 3.webp'],
    coreStampAngles: [-2, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Fight Till End',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Thrust DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-While in Bankai, eachi time a special Attack\'s Follow-up Attack is triggered, the next <span style="color: #EA4A86; text-decoration: underline;">Slow Hozukimaru</span> gains a  <span style="color: #52C394;">50%</span> DMG Bonus.<br>-After entering Bankai, all DMG dealt by Ikkaku increases by  <span style="color: #52C394;">30%</span> for 15s.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Thrust DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-While in Bankai, eachi time a special Attack\'s Follow-up Attack is triggered, the next <span style="color: #EA4A86; text-decoration: underline;">Slow Hozukimaru</span> gains a  <span style="color: #52C394;">100%</span> DMG Bonus.<br>-After entering Bankai, all DMG dealt by Ikkaku increases by  <span style="color: #52C394;">60%</span> for 15s.</p>'
        }
      },
      {
        name: 'I\'ve Noticed You For A While',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">25%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">12.5%</span>, up to <span style="color: #52C394;">25%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">50%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">25%</span>, up to <span style="color: #52C394;">50%</span>.</p>'
        }
      },
      {
        name: 'Gather Up! Thirteen Court Guard Squads',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a special attack is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current special attack.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a special attack is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current special attack.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">NOTE:</span> Please do not six star the stamps of Ikkaku Madarame - Thrust, just wait for a worthy character to six star.</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes.</p>',
    setStampImgs: ['images/ikkaku set 1.webp', 'images/ikkaku set 2.webp', 'images/ikkaku set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Thrust DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ult Charge Rate% > ATK% > Ailment Bonus%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit Dmg%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ult Charge Rate% > ATK% > Ailment Bonus%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ult Charge Rate%<br>2) Ailment Bonus%(To improve the damage of his wound Debuff)</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR% = CDMG% > Ult Charge Rate% > ATK% > Ailment Bonus%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Unyielding Light (3/3) </span><br>2-Piece: Increases Thrust DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece: Increases special attack DMG by <span style="color: #52C394;">30%</span>. Each time a special attack is released, increases Ultimate DMG by <span style="color: #52C394;">14%</span> for 15s. Stacks up to 2 times.</p>',

    weaponStampImgs: ['images/ikkaku weapon.webp', 'images/gin weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'When The Ryumon Turns Red',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Ikkaku Madarame Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Upon entering Bankai, ikkau\'s Spiritual Pressure is instantly filled to the maximum.<br>-While in Bankai state, special attack DMG increases by  <span style="color: #52C394;">100%</span>.<br>-While in Bankai state, each basic attack increases the ASPD of the next basic attack by  <span style="color: #52C394;">15%</span> for 8s. Stacks up to 4 times.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Ikkaku Madarame Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Upon entering Bankai, ikkau\'s Spiritual Pressure is instantly filled to the maximum.<br>-While in Bankai state, special attack DMG increases by  <span style="color: #52C394;">300%</span>.<br>-While in Bankai state, each basic attack increases the ASPD of the next basic attack by  <span style="color: #52C394;">15%</span> for 8s. Stacks up to 4 times.</p></p>'
        }
      },
      {
        name: 'Piercing Thrust',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/toshiro bond 2.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases Crit DMG during battle by <span style="color: #52C394;">30%</span>.</div>`,
    bonds1OffsetX: 22,
    bonds1Height: 120,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/aizen bond 1.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds2OffsetX: 24,
    bonds2Height: 115,
    bonds2PopupWidth: 490
  },
  {
    id: 'grimmjow',
    category: 'espada',
    type: 'Strike',
    role: 'Dps',
    name: 'Grimmjow Jaegerjaquez',
    nameJP: 'グリムジョー・ジャガージャック',
    divisionLabel: 'Sexta Espada · 6th',
    color: '#4488ff',
    quote: '"I am the king. I don\'t need anyone else to tell me who I am."',
    stats: { Reiatsu: 88, Swordsmanship: 88, Kidō: 60, Speed: 90, Strength: 90 },
    zanpakuto: {
      name: 'Pantera',
      release: '"Grind, Pantera"',
      desc: 'Grimmjow\'s release transforms him into a sleek, feline warrior with enhanced speed, agility, and devastating claw attacks. His signature technique, Desgarrón, creates massive energy slashes from his fingertips.'
    },
    bio: 'The Sexta (6th) Espada, a battle-crazed panther who lives solely for the thrill of combat. Proud and fiercely independent, Grimmjow answers to no one, often clashing with his fellow Espada and even his own master. His rivalry with Ichigo pushes both to their absolute limits.',
    instructions: '',
    customAvatar: 'images/grimm.webp',
    panelImage: 'images/grimm panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/espada.webp','images/strike.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/grimm core.webp','images/tosen core 3.webp'],
    coreStampAngles: [-2, 1, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'The Path of Instinct',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Strike DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases Ultimate Charge Rate by  <span style="color: #52C394;">15%</span>.<br>-Damage dealt by Ultimate, Gran Rey Cero, and Enhanced Basic Attack, Form of Destruction, increases by  <span style="color: #52C394;">37.5%</span>.<br>-Each point of Spiritual Pressure Reserve increases Grimmjow\'s Crit Rate by  <span style="color: #52C394;">4%</span> and Crit DMG by  <span style="color: #52C394;">8%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Strike DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases Ultimate Charge Rate by  <span style="color: #52C394;">30%</span>.<br>-Damage dealt by Ultimate, Gran Rey Cero, and Enhanced Basic Attack, Form of Destruction, increases by  <span style="color: #52C394;">75%</span>.<br>-Each point of Spiritual Pressure Reserve increases Grimmjow\'s Crit Rate by  <span style="color: #52C394;">8%</span> and Crit DMG by  <span style="color: #52C394;">16%</span>.</p>'
        }
      },
      {
        name: 'Rushing Into Danger',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current Ultimate.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a Battlefield Skill is released, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current Ultimate.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p>No Data :).</p>',
    setStampImgs: ['images/yoru set 1.webp', 'images/yoru set 2.webp', 'images/yoru set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Stats are:</span><br>1) Ult Charge Rate%<br>2) Crit Rate%<br>3) Crit DMG%</p></p>', '<p><span style="color: #EA4A86;">-The recommended Stats are:</span><br>1) Ult Charge Rate%<br>2) Crit Rate%<br>3) Crit DMG%</p></p>', '<p><span style="color: #EA4A86;">-The recommended Stats are:</span><br>1) Ult Charge Rate%<br>2) Crit Rate%<br>3) Crit DMG%</p></p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Midnight Specter (3/3) </span><br>2-Piece: Increases Strike DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece: Increases Ultimate DMG by <span style="color: #52C394;">30%</span>. Each time a basic attack is released, increases special attack DMG by <span style="color: #52C394;">5.5%</span> for 10s. Stacks up to 5 times.</p>',

    weaponStampImgs: ['images/grimm weapon.webp','images/sajin weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'At Long Last',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Grimmjow Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-In battle, increases ATK by an amount equal to  <span style="color: #52C394;">9%</span> of the character\'s Ultimate Charge Rate.<br>-When detonating <span style="color: #EA4A86; text-decoration: underline;">Destruction Mark</span>, deals additional damage equal to  <span style="color: #52C394;">100%</span> of ATK to the enemy. For every  <span style="color: #52C394;">1%</span> Ultimate Charge Rate, the damage is further increased by  <span style="color: #52C394;">0.5%</span>.<br>-Each time Grimmjow\'s attack hits an enemy, slightly reduces the cooldown of technique and Perfect Dodge.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Grimmjow Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-In battle, increases ATK by an amount equal to  <span style="color: #52C394;">18%</span> of the character\'s Ultimate Charge Rate.<br>-When detonating <span style="color: #EA4A86; text-decoration: underline;">Destruction Mark</span>, deals additional damage equal to  <span style="color: #52C394;">100%</span> of ATK to the enemy. For every  <span style="color: #52C394;">1%</span> Ultimate Charge Rate, the damage is further increased by  <span style="color: #52C394;">1%</span>.<br>-Each time Grimmjow\'s attack hits an enemy, slightly reduces the cooldown of technique and Perfect Dodge.</p></p>'
        }
      },
      {
        name: 'Power Strike',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/grimm bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases All-Skill Mastery by  <span style="color: #52C394;">3.5% (Next: 7%)</span> and Ailment Mastery by  <span style="color: #52C394;">3.5% (Next: 7%)</span> during battle. When equipped by a <span style="color: #ffaa00;">Full Assault</span> character, increases Strike Mastery by an extra  <span style="color: #52C394;">7.5% (Next: 15%)</span>.</div>`,
    bonds1OffsetX: 15,
    bonds1Height: 120,
    bonds1PopupWidth: 490,

    bonds2Imgs: ['images/sajin bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases All-Type DMG during battle by <span style="color: #52C394;">15%</span>.</div>`,
    bonds2OffsetX: 14,
    bonds2OffsetX: 14,
    bonds2Height: 122,
    bonds2PopupWidth: 430
  },
  {
    id: 'szayel',
    category: 'espada',
    type: 'Spirit',
    role: 'Support',
    name: 'Szayelaporro Granz',
    nameJP: 'ザエルアポロ・グランツ',
    divisionLabel: 'Octava Espada · 8th',
    color: '#ff66aa',
    quote: '"Perfection is not something you achieve. It is something you refine... and I am its ultimate practitioner."',
    stats: { Reiatsu: 82, Swordsmanship: 75, Kidō: 90, Speed: 85, Strength: 70 },
    zanpakuto: {
      name: 'Fornicarás',
      release: '"Sip, Fornicarás"',
      desc: 'A parasitic zanpakutō that allows Szayelaporro to absorb and analyze his opponents\' spiritual energy, creating voodoo-like dolls that disable or even kill them remotely. His release also grants him the ability to regenerate from fatal wounds.'
    },
    bio: 'The Octava (8th) Espada and a mad scientist obsessed with perfection. Szayelaporro treats his battles as experiments, deriving sick pleasure from dissecting his enemies\' abilities. His arrogance and meticulous planning are matched only by his grotesque methods.',
    instructions: '',
    customAvatar: 'images/sza.webp',
    panelImage: 'images/sza panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/espada.webp','images/spirit.webp','images/support.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/sza core.webp', 'images/sza core 2.webp', 'images/mayuri core 2.webp'],
    coreStampAngles: [-2, 1, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Call Me Genuis',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Spirit DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-At the start of battle, the entire team gains 3 stacks of <span style="color: #EA4A86; text-decoration: underline;">Intel Control</span>.<br>-When Resurreccion is released, immediately grants all Spirit characters <span style="color: #EA4A86; text-decoration: underline;">Sample Analysis</span> equal to the current number of <span style="color: #EA4A86; text-decoration: underline;">Intel Control</span> stacks.<br>-Within 20 seconds after using a Special Attack, all Spirit characters gain  <span style="color: #52C394;">40%</span> increased Crit DMG, and the on-field character gains  <span style="color: #52C394;">15%</span> increased Ultimate Charge Rate.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Spirit DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-At the start of battle, the entire team gains 3 stacks of <span style="color: #EA4A86; text-decoration: underline;">Intel Control</span>.<br>-When Resurreccion is released, immediately grants all Spirit characters <span style="color: #EA4A86; text-decoration: underline;">Sample Analysis</span> equal to the current number of <span style="color: #EA4A86; text-decoration: underline;">Intel Control</span> stacks.<br>-Within 20 seconds after using a Special Attack, all Spirit characters gain  <span style="color: #52C394;">80%</span> increased Crit DMG, and the on-field character gains  <span style="color: #52C394;">15%</span> increased Ultimate Charge Rate.</p>'
        }
      },
      {
        name: 'You\'re Not Worthy',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'HP', value: '10.8%' }
          ],
          text: '<p>Increases <span style="color: #52C394;">8%</span> of the damage dealt by other characters in the team who share the same attack type as the wearer. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'HP', value: '22.9%' }
          ],
          text: '<p>Increases <span style="color: #52C394;">16%</span> of the damage dealt by other characters in the team who share the same attack type as the wearer. Unstackable.</p>'
        }
      },
      {
        name: 'It\'s My Turn Now',
		dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'HP', value: '9.6%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">6%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'HP', value: '16.8%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">12%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Szayelaporro Granz - Spirit are:</span><br>1) Invigorate - Support<br>2) Restrain<br>3) Enhanced Ultimate</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br> <span style="color: #52C394;">5280</span> ATK +  <span style="color: #52C394;">175</span> Crit Dmg +  <span style="color: #52C394;">109%</span> Ultimate Charge Rate(1 ucr roll). When paired with Aizen and Kisuke , use ATK% bond (the SR bond ) on Kisuke. When paired with Toshiro , Toshiro needs some ucr stats , but having Szayel core max duped fix this problem.</p>',
    setStampImgs: ['images/sza set 1.webp', 'images/sza set 2.webp', 'images/sza set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK%.</p><p><span style="color: #EA4A86;">-Substats:</span><br>ATK%>Crit Dmg%>>>>Ultimate Charge Rate%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit DMG%.</p><p><span style="color: #EA4A86;">-Substats:</span><br>ATK%>Crit Dmg%>>>>Ultimate Charge Rate%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK%.</p><p><span style="color: #EA4A86;">-Substats:</span><br>ATK%>Crit Dmg%>>>>Ultimate Charge Rate%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Curtain Falls (3/3) </span><br>2-Piece: Increases Base ATK by <span style="color: #52C394;">20%</span>.<br>3-Piece: Releasing counterattack each time increases the entire team\'s Spirit DMG by <span style="color: #52C394;">10%</span>. Releasing Ultimate increases the entire team\'s Spirit Mastery by  <span style="color: #52C394;">4%</span>. These effects last 30 seconds. Unstackable.</p>',

    weaponStampImgs: ['images/sza weapon.webp', 'images/byakuya weapon 2.webp'],
    weaponStampAngles: [-3, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Where to Wreck Next',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Szayelaporro Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Using a technique immediately generates 3 <span style="color: #EA4A86; text-decoration: underline;">Sacrificial Materials</span>.<br>-Releasing the second strike of the Ultimate, Control of the Five Senses, increases the entire team\'s ATK by  <span style="color: #52C394;">15%</span> for 35 seconds.<br>-Increases Crit DMG by  <span style="color: #52C394;">22.5%</span>.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Szayelaporro Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Using a technique immediately generates 3 <span style="color: #EA4A86; text-decoration: underline;">Sacrificial Materials</span>.<br>-Releasing the second strike of the Ultimate, Control of the Five Senses, increases the entire team\'s ATK by  <span style="color: #52C394;">30%</span> for 35 seconds.<br>-Increases Crit DMG by  <span style="color: #52C394;">45%</span>.</p></p>'
        }
      },
      {
        name: 'Method',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">6%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">12%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/mayuri bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, teammates other than yourself gain <span style="color: #52C394;">16%</span> Crit DMG.<br>Unstackable.</div>`,
    bonds1OffsetX: 15,
    bonds1Height: 120,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/mayuri bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases ATK of all team characters during battle by <span style="color: #52C394;">6%</span>.</div>`,
    bonds2OffsetX: 14,
    bonds2Height: 117,
    bonds2PopupWidth: 430
  },
  {
    id: 'nelliel',
    category: 'espada',
    type: 'Thrust',
    role: 'Tactic',
    name: 'Nelliel Tu Odelschwanck',
    nameJP: 'ネリエル・トゥ・オーデルシュヴァンク',
    divisionLabel: 'Former Tres Espada · 3rd',
    color: '#44cc88',
    quote: '"I don\'t like fighting. But if it means protecting those who matter to me... I will not hesitate."',
    stats: { Reiatsu: 90, Swordsmanship: 92, Kidō: 80, Speed: 88, Strength: 85 },
    zanpakuto: {
      name: 'Gamuza',
      release: '"Declare, Gamuza"',
      desc: 'Nelliel\'s release transforms her into a centaur-like knight with immense speed and a double-ended lance. Her signature Cero Doble can absorb an opponent\'s Cero and fire it back with multiplied power, making her a formidable counter-fighter.'
    },
    bio: 'A former Tres (3rd) Espada who rejected the violent ways of Hueco Mundo and was cast out for her pacifist beliefs. Now a childlike arrancar living in the deserts of Hueco Mundo, she retains her loyal and protective nature, especially towards those she considers family.',
    instructions: '',
    customAvatar: 'images/nelliel.webp',
    panelImage: 'images/nel panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/espada.webp','images/thrust.webp','images/tactic.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/nelliel core.webp', 'images/aizen core 2.webp', 'images/mayuri core 2.webp'],
    coreStampAngles: [0, 0, 0],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'I Will Protect You This Time',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Thrust DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Increases the direct damage of the Ultimate by <span style="color: #52C394;">30%</span>.<br>-During Resurreccion, every 1 point of <span style="color: #EA4A86; text-decoration: underline;">Battle Will</span> consumed increases the damage of the Ultimate, Lanzador Verde, by  <span style="color: #52C394;">5%</span>, stacking up to 9 time(s) and lasts until Resurreccion ends.<br>-Increases Ailment Mastery by <span style="color: #52C394;">20%</span> during battle.<br>-Enemies hit by the Ultimate, Lanzador Verde, are inflicted with Armor Shatter for 30 seconds, reducing their All-Type Resistance by <span style="color: #52C394;">15%</span>.<br>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Thrust DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Increases the direct damage of the Ultimate by <span style="color: #52C394;">30%</span>.<br>-During Resurreccion, every 1 point of <span style="color: #EA4A86; text-decoration: underline;">Battle Will</span> consumed increases the damage of the Ultimate, Lanzador Verde, by  <span style="color: #52C394;">10%</span>, stacking up to 9 time(s) and lasts until Resurreccion ends.<br>-Increases Ailment Mastery by <span style="color: #52C394;">40%</span> during battle.<br>-Enemies hit by the Ultimate, Lanzador Verde, are inflicted with Armor Shatter for 30 seconds, reducing their All-Type Resistance by <span style="color: #52C394;">30%</span>.<br>Unstackable.</p>'
        }
      },
      {
        name: 'Lesson Three Cleared!',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">8%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>After releasing a Battlefield Skill, the entire team gains a <span style="color: #52C394;">16%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25</span>s.</p><p>Unstackable.</p>'
        }
      },
      {
        name: 'It\'s My Turn Now',
		dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'HP', value: '9.6%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">6%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'HP', value: '16.8%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">12%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Nelliel Tu Odelschwanck - Thrust are:</span><br>1) Overdrive - Tactic<br>2) Enhanced Damage<br>3) Enhanced Ultimate<br>4) Enhanced Technique</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>At B6, Nelliel thrives way more with an ultimate charge rate % slot 3, and substats to achieve a total of <span style="color: #52C394;">148.5%</span> ultimate charge rate. This (alongside the correct rotation changes) provide an insane damage bonus as you can use more ultimates which means more damage nukes.</p>',
    setStampImgs: ['images/nelliel set 1.webp', 'images/nelliel set 2.webp', 'images/nelliel set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK% = Thrust DMG Bonus%.</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR >>CD >ATK% >ULT% >Ailment%<br>B6" ULT%(To <span style="color: #52C394;">148.5%</span>) > CR >CD >ATK% >Ailment%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit DMG%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR >>CD >ATK% >ULT% >Ailment%<br>B6" ULT%(To <span style="color: #52C394;">148.5%</span>) > CR >CD >ATK% >Ailment%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ult Charge Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR >>CD >ATK% >ULT% >Ailment%<br>B6" ULT%(To <span style="color: #52C394;">148.5%</span>) > CR >CD >ATK% >Ailment%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Knight\'s Anthem (3/3) </span><br>2-Piece: Increases Crit DMG by <span style="color: #52C394;">40%</span>.<br>3-Piece: After each Ultimate is released, increases Thrust DMG by <span style="color: #52C394;">15%</span> for 30 seconds. After each Battlefield Skill is released, all character\'s Ailment DMG Bonus is increased by <span style="color: #52C394;">40%</span> for 30 seconds. These effects are not stackable.</p>',

    weaponStampImgs: ['images/nelliel weapon.webp', 'images/gin weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Reason To Fight',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Nelliel Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-The number of <span style="color: #EA4A86; text-decoration: underline;">Verde Rush</span> applied and the efficiency of <span style="color: #EA4A86; text-decoration: underline;">Verde Rush Points</span> are increased by <span style="color: #52C394;">25%</span>. The maximum stacks of <span style="color: #EA4A86;">Verde Rush Mark</span> are increased to 20.<br>-Damage dealt by all Techniques and Batttlefield Skills are increased by <span style="color: #52C394;">100%</span>.<br>-When the Battlefield Skill, Cero Sincretico, hits, it triggers an additional <span style="color: #EA4A86; text-decoration: underline;">Verde Rush</span>. The Base DMG of this <span style="color: #EA4A86; text-decoration: underline;">Verde Rush</span> equals to <span style="color: #52C394;">200%</span> of Nelliel\'s ATK. For each different debuff previously triggered on the enemy, this damage is doubled, up to a maximum of 8 times.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Nelliel Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-The number of <span style="color: #EA4A86; text-decoration: underline;">Verde Rush</span> applied and the efficiency of <span style="color: #EA4A86; text-decoration: underline;">Verde Rush Points</span> are increased by <span style="color: #52C394;">50%</span>. The maximum stacks of <span style="color: #EA4A86;">Verde Rush Mark</span> are increased to 20.<br>-Damage dealt by all Techniques and Batttlefield Skills are increased by <span style="color: #52C394;">200%</span>.<br>-When the Battlefield Skill, Cero Sincretico, hits, it triggers an additional <span style="color: #EA4A86; text-decoration: underline;">Verde Rush</span>. The Base DMG of this <span style="color: #EA4A86; text-decoration: underline;">Verde Rush</span> equals to <span style="color: #52C394;">400%</span> of Nelliel\'s ATK. For each different debuff previously triggered on the enemy, this damage is doubled, up to a maximum of 8 times.</p></p>'
        }
      },
      {
        name: 'Piercing Thrust',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Thrust DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/nelliel bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases Ailment DMG Bonus by  <span style="color: #52C394;">60%</span> during battle. When equipped by a  <span style="color: #ffaa00;">Tactic</span>, increases an extra  <span style="color: #52C394;">60%</span> Crit DMG.</div>`,
    bonds1OffsetX: 20,
    bonds1Height: 120,
    bonds1PopupWidth: 490,

    bonds2Imgs: ['images/aizen bond 1.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds2OffsetX: 20,
    bonds2Height: 119,
    bonds2PopupWidth: 490
  },
  {
    id: 'ichigo-bankai',
    category: 'karakura',
    type: 'Slash',
    role: 'Dps',
    name: 'Kurosaki Ichigo (Bankai)',
    nameJP: '黒崎一護 (卍解)',
    divisionLabel: 'Substitute Shinigami · Karakura Town',
    color: '#ff8c00',
    quote: '"If fate is a millstone, then we are the grist. There is nothing we can do. So I wish for strength. If I cannot protect them from the wheel, then give me a strong blade, and enough strength... to shatter fate."',
    stats: { Reiatsu: 100, Swordsmanship: 92, Kidō: 30, Speed: 95, Strength: 95 },
    zanpakuto: {
      name: 'Tensa Zangetsu',
      release: 'Bankai',
      desc: 'Ichigo\'s Bankai compresses his immense spiritual pressure into a sleek black blade, granting him incredible speed and the ability to fire a super-enhanced Getsuga Tenshō. The form is the pinnacle of his shinigami power, balancing raw offense with lightning-fast movement.'
    },
    bio: 'A human teenager turned Substitute Shinigami, Ichigo unlocked his Bankai in just three days. In this state, he moves faster than the eye can see and cuts with the force of a hurricane. His unwavering resolve and protective instincts make him a force that even gods respect.',
    instructions: '',
    customAvatar: 'images/ichigo-bankai.webp',
    panelImage: 'images/ichi panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/slash.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/ichi core.webp', 'images/kenpachi core 2.webp', 'images/ikkaku core 3.webp'],
    coreStampAngles: [-1, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Getsuga Tangle',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Slash DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-While <span style="color: #EA4A86; text-decoration: underline;">Hollowfied</span>, the counter button can be manually tapped to launch counterattacks.<br>-While <span style="color: #EA4A86; text-decoration: underline;">Hollowfied</span>, Ichigo\'s Crit Rate increases by <span style="color: #52C394;">15%</span>.<br>Manually releasing counterattacks increases the Crit Rate Bonus to <span style="color: #52C394;">25%</span>.<br>-Increases counterattacks DMG by <span style="color: #52C394;">60%</span>.<br>-Increases Ultimate Energy Charge Rate by <span style="color: #52C394;">20%</span> and gains full Ultimate Energy upon the battle begins.<br>-For 20 seconds after <span style="color: #EA4A86; text-decoration: underline;">Hollowfied</span> state ends, Technique cooldown is reduced by <span style="color: #52C394;">70%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Slash DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-While <span style="color: #EA4A86; text-decoration: underline;">Hollowfied</span>, the counter button can be manually tapped to launch counterattacks.<br>-While <span style="color: #EA4A86; text-decoration: underline;">Hollowfied</span>, Ichigo\'s Crit Rate increases by <span style="color: #52C394;">30%</span>.<br>Manually releasing counterattacks increases the Crit Rate Bonus to <span style="color: #52C394;">50%</span>.<br>-Increases counterattacks DMG by <span style="color: #52C394;">120%</span>.<br>-Increases Ultimate Energy Charge Rate by <span style="color: #52C394;">40%</span> and gains full Ultimate Energy upon the battle begins.<br>-For 20 seconds after <span style="color: #EA4A86; text-decoration: underline;">Hollowfied</span> state ends, Technique cooldown is reduced by <span style="color: #52C394;">70%</span>.</p>'
        }
      },
      {
        name: 'I\'ve Noticed You For A While',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">25%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">12.5%</span>, up to <span style="color: #52C394;">25%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">50%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">25%</span>, up to <span style="color: #52C394;">50%</span>.</p>'
        }
      },
      {
        name: 'Gather Up! Thirteen Court Guard Squads',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a special attack is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current special attack.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a special attack is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current special attack.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Ichigo Kurosaki (Bankai) - Slash are:</span><br>1) Overdrive - Full Assault<br>2) Enhanced Damage<br>3) Enhanced Special Attack - Full Assault<br>4) Enhanced Ultimate</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Bankai Ichigo at B1 gets a <span style="color: #52C394;">60%</span> crit rate boost (<span style="color: #52C394;">30%</span> stacking 2x). However, as he converts excess crit rate at a 1:2 ratio anyways, the build does not change.</p>',
    setStampImgs: ['images/ichi set 1.webp', 'images/ichi set 2.webp', 'images/ichi set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 70],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Slash DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR=CDMG >Ult% >ATK% >ATK</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit DMG%<br>2) Crit Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR=CDMG >Ult% >ATK% >ATK</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ultimate Charge Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR=CDMG >Ult% >ATK% >ATK</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Rising Black Moon (3/3) </span><br>2-Piece: Increases Slash DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece: Increases Base ATK by <span style="color: #52C394;">18%</span>. Each time a Technique is released, increases special attack DMG by <span style="color: #52C394;">28%</span> for 10s. Unstackable.</p>',

    weaponStampImgs: ['images/ichi weapon.webp', 'images/kenpachi weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Power Of Hollowfication',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Ichigo Kurosaki - Bankai Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Increases Crit Rate by <span style="color: #52C394;">15%</span>.</p><p>-When releasing special attacks, Ichigo summons two afterimages to attack the target, dealing total DMG equal to <span style="color: #52C394;">100%</span> of the special attack ATK. This also counts as a special attack.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Ichigo Kurosaki - Bankai Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Increases Crit Rate by <span style="color: #52C394;">30%</span>.</p><p>-When releasing special attacks, Ichigo summons two afterimages to attack the target, dealing total DMG equal to <span style="color: #52C394;">200%</span> of the special attack ATK. This also counts as a special attack.</p></p>'
        }
      },
      {
        name: 'Sundering Slash',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Slash DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Slash DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/aizen bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds1OffsetX: 17,
    bonds1Height: 118,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/toshiro bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases Crit DMG during battle by <span style="color: #52C394;">30%</span>.</div>`,
    bonds2OffsetX: 17,
    bonds2Height: 117,
    bonds2PopupWidth: 430
  },
  {
    id: 'kisuke',
    category: 'karakura',
    type: 'Slash',
    role: 'Support',
    name: 'Urahara Kisuke',
    nameJP: '浦原喜助',
    divisionLabel: 'Former Captain · 12th Division',
    color: '#44aa44',
    quote: '"I cannot protect anyone unless I understand every possible outcome. That is why I carry so many plans."',
    stats: { Reiatsu: 94, Swordsmanship: 90, Kidō: 95, Speed: 92, Strength: 80 },
    zanpakuto: {
      name: 'Benihime',
      release: '"Awaken, Benihime"',
      desc: 'A versatile zanpakutō that can create powerful crimson energy blasts, shields, and even a restorative technique. Its bankai, Kannonbiraki Benihime Aratame, can restructure anything it cuts, making it capable of both healing and destruction.'
    },
    bio: 'The enigmatic proprietor of the Urahara Shop. Once a captain of the 12th Division and founder of the Shinigami Research and Development Institute, Kisuke was exiled to the human world. His genius intellect and foresight have repeatedly turned the tide in Soul Society\'s darkest hours.',
    instructions: '',
    customAvatar: 'images/urahara.webp',
    panelImage: 'images/urahara panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/slash.webp','images/support.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/urahara core.webp', 'images/sza core 2.webp', 'images/mayuri core 2.webp'],
    coreStampAngles: [-2, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Scheme Under Hat',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Crit DMG Bonus', value: '16.0%' }
          ],
          text: '<p>-Enters stealth for 5s after releasing the Ultimte, during which the technique button will be activated and replaced with Bakudo Number 4: Hainawa. Tapping the technique button or switching characters instantly releases this technique. Bakudo Number 4: Hainawa: Pulls enemies within range toward the center for 6s, dealing DMG equal to <span style="color: #52C394;">560%</span> of ATK. When it ends, further DMG is dealt to affected enemies equal to <span style="color: #52C394;">25%</span> of DMG received during the technique, up to Urahara\'s Base ATK x <span style="color: #52C394;">20,000%</span>.<br>-Releasing Bakudo Number 4: Hainawa also grants 1 stack of <span style="color: #EA4A86; text-decoration: underline;">Reishi Analysis</span> to the entire team.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Crit DMG Bonus', value: '40.0%' }
          ],
          text: '<p>-Enters stealth for 5s after releasing the Ultimte, during which the technique button will be activated and replaced with Bakudo Number 4: Hainawa. Tapping the technique button or switching characters instantly releases this technique. Bakudo Number 4: Hainawa: Pulls enemies within range toward the center for 6s, dealing DMG equal to <span style="color: #52C394;">1,120%</span> of ATK. When it ends, further DMG is dealt to affected enemies equal to <span style="color: #52C394;">50%</span> of DMG received during the technique, up to Urahara\'s Base ATK x <span style="color: #52C394;">40,000%</span>.<br>-Releasing Bakudo Number 4: Hainawa also grants 1 stack of <span style="color: #EA4A86; text-decoration: underline;">Reishi Analysis</span> to the entire team.</p>'
        }
      },
      {
        name: 'You\'re Not Worthy',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'HP', value: '10.8%' }
          ],
          text: '<p>Increases <span style="color: #52C394;">8%</span> of the damage dealt by other characters in the team who share the same attack type as the wearer. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'HP', value: '22.9%' }
          ],
          text: '<p>Increases <span style="color: #52C394;">16%</span> of the damage dealt by other characters in the team who share the same attack type as the wearer. Unstackable.</p>'
        }
      },
      {
        name: 'It\'s My Turn Now',
		dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'HP', value: '9.6%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">6%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'HP', value: '16.8%' }
          ],
          text: '<p>After releasing an Ultimate, the entire team gain a <span style="color: #52C394;">12%</span> boost for Base ATK that lasts for <span style="color: #52C394;">25</span>s. Unstackable.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Kisuke Urahara - Slash are:</span><br>1) Invigorate - Support<br>2) Restrain<br>3) Stack three Invigorates</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes.</p>',
    setStampImgs: ['images/urahara set 1.webp', 'images/urahara set 2.webp', 'images/urahara set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 90],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Slash DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CDMG% >Ult% >CR% >ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit DMG%<br>2) Crit Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CDMG% >Ult% >CR% >ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Ult Charge Rate%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CDMG% >Ult% >CR% >ATK%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Hidden Wisdom (3/3) </span><br>2-Piece: Increases Base HP by <span style="color: #52C394;">16%</span>.<br>3-Piece: After releasing a Technique, the entire team gains a <span style="color: #52C394;">10%</span> boost for all damage dealt that lasts for <span style="color: #52C394;">25%</span>s.<br>Unstackable.</p>',

    weaponStampImgs: ['images/urahara weapon.webp', 'images/byakuya weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Sorry I\'m Late',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kisuke Urahara Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Releasing special attacks generates an additional sword wave which also grants 1 stack of <span style="color: #EA4A86; text-decoration: underline;">Reishi Analysis</span> to the entire team.<br>-Increases maximum <span style="color: #EA4A86; text-decoration: underline;">Reishi Analysis</span> stacks to 6.<br>-Increases special attack DMG by <span style="color: #52C394;">15%</span>.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Kisuke Urahara Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Releasing special attacks generates an additional sword wave which also grants 1 stack of <span style="color: #EA4A86; text-decoration: underline;">Reishi Analysis</span> to the entire team.<br>-Increases maximum <span style="color: #EA4A86; text-decoration: underline;">Reishi Analysis</span> stacks to 6.<br>-Increases special attack DMG by <span style="color: #52C394;">40%</span>.</p></p>'
        }
      },
      {
        name: 'Method',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">6%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After releasing a technique, the entire team is buffed with a <span style="color: #52C394;">12%</span> increase in Base ATK that lasts for 25s.<br>Unstackable.</p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/mayuri bond 2.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">Increases ATK of all team characters during battle by <span style="color: #52C394;">6%</span>.</div>`,
    bonds1OffsetX: 15,
    bonds1Height: 120,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/toshiro bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases Crit DMG during battle by <span style="color: #52C394;">30%</span>.</div>`,
    bonds2OffsetX: 14,
    bonds2Height: 124,
    bonds2PopupWidth: 430
  },
  {
    id: 'yoruichi',
    category: 'karakura',
    type: 'Strike',
    role: 'Dps',
    name: 'Shihōin Yoruichi',
    nameJP: '四楓院夜一',
    divisionLabel: 'Former Captain · 2nd Division',
    color: '#ddaa44',
    quote: '"A cat is a cat, whether it walks on four legs or two. And a warrior is a warrior, whether they swing a sword or a claw."',
    stats: { Reiatsu: 92, Swordsmanship: 90, Kidō: 80, Speed: 100, Strength: 88 },
    zanpakuto: {
      name: 'Shunkō',
      release: '"Flash War Cry"',
      desc: 'Yoruichi does not rely on a zanpakutō, instead mastering the ancient technique of Shunkō — combining hand-to-hand combat with condensed kidō energy around her body. Her speed is unmatched, earning her the title "Flash Goddess," and she can shift between human and cat forms at will.'
    },
    bio: 'The former captain of the 2nd Division and head of the Shihōin noble family, Yoruichi is the most gifted Shunpo practitioner in Soul Society history. Playful yet deadly, she acted as Ichigo\'s mentor and remains a wild card — as likely to tease you as to end a fight in the blink of an eye.',
    instructions: '',
    customAvatar: 'images/yoruichi.webp',
    panelImage: 'images/yoru panel.webp',
    avatarWidth: 200,
    avatarHeight: 212,
    avatarOffsetX: 0,
    avatarOffsetY: -5,
    avatarFit: 'contain',
    panelScale: 1,

    statsImgs:    ['images/shini.webp','images/strike.webp','images/dps.webp'],
    statsAngles:  [0,0,0],
    statsGaps:    [80,80],
    statsHeights: [80,80,80],

    coreStampImgs: ['images/yoru core.webp', 'images/kenpachi core 2.webp', 'images/ikkaku core 3.webp'],
    coreStampAngles: [-1, 0, 3],
    coreStampGaps: [80, 80],
    coreStampPopupData: [
      {
        name: 'Raging Thunder',
		dividerColor: 'null',
        stars: 6,
        base: {
          rows: [
            { label: 'ATK', value: '125' },
            { label: 'DEF', value: '105' },
            { label: 'HP', value: '629' },
            { label: 'Strike DMG Bonus', value: '8.0%' }
          ],
          text: '<p>-Upon entering battle, immediately gain full Ultimate Energy.<br>-increases duration of Shunko by 5s.<br>=Increases Spiritual Pressure Charge Rate of Shunko by an extra <span style="color: #52C394;">40%</span>.<br>-Increases Ultimate DMG by <span style="color: #52C394;">200%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '630' },
            { label: 'DEF', value: '525' },
            { label: 'HP', value: '3150' },
            { label: 'Strike DMG Bonus', value: '20.0%' }
          ],
          text: '<p>-Upon entering battle, immediately gain full Ultimate Energy.<br>-increases duration of Shunko by 5s.<br>=Increases Spiritual Pressure Charge Rate of Shunko by an extra <span style="color: #52C394;">40%</span>.<br>-Increases Ultimate DMG by <span style="color: #52C394;">400%</span>.</p>'
        }
      },
      {
        name: 'I\'ve Noticed You For A While',
		dividerColor: 'null',
        stars: 5,
        base: {
          rows: [
            { label: 'ATK', value: '113' },
            { label: 'DEF', value: '94' },
            { label: 'HP', value: '566' },
            { label: 'All-Type DMG Bonus', value: '7.2%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">25%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">12.5%</span>, up to <span style="color: #52C394;">25%</span>.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '488' },
            { label: 'DEF', value: '407' },
            { label: 'HP', value: '2443' },
            { label: 'All-Type DMG Bonus', value: '15.3%' }
          ],
          text: '<p>Increases the damage dealt by the special attack by <span style="color: #52C394;">50%</span>. Each time a Technique is released, increases the special attack DMG by an additional <span style="color: #52C394;">25%</span>, up to <span style="color: #52C394;">50%</span>.</p>'
        }
      },
      {
        name: 'Gather Up! Thirteen Court Guard Squads',
        dividerColor: '#8f5cff',
        stars: 4,
        base: {
          rows: [
            { label: 'ATK', value: '100' },
            { label: 'DEF', value: '83' },
            { label: 'HP', value: '503' },
            { label: 'All-Type DMG Bonus', value: '6.4%' }
          ],
          text: '<p>Each time a special attack is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">25%</span> of the current special attack.</p>'
        },
        max: {
          rows: [
            { label: 'ATK', value: '365' },
            { label: 'DEF', value: '304' },
            { label: 'HP', value: '1824' },
            { label: 'All-Type DMG Bonus', value: '11.2%' }
          ],
          text: '<p>Each time a special attack is dealt, triggers one additional attack of the same type, dealing damage equal to <span style="color: #52C394;">50%</span> of the current special attack.</p>'
        }
      }
    ],
    coreStampPopupWidths: [null, null, null],

    setStampBeforeText: '<p><span style="color: #EA4A86;">-The recommended passives for Yoruichi Shihouin - Strike are:</span><br>1) Overdrive - Full Assault<br>2) Enhanced Damage<br>3) Enhanced Special Attack - Full Assault<br>4) Enhanced Ultimate</p><p><span style="color: #EA4A86;">-Boundary Dependant Build Changes:</span><br>Build does not change with dupes.</p>',
    setStampImgs: ['images/yoru set 1.webp', 'images/yoru set 2.webp', 'images/yoru set 3.webp'],
    setStampAngles: [0, 0, -3],
    setStampGaps: [30, 80],
    setStampInfos: ['<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Strike DMG Bonus%<br>2) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR%=CDMG% >Ult% >ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) Crit Rate%<br>2) Crit DMG%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR%=CDMG% >Ult% >ATK%</p>', '<p><span style="color: #EA4A86;">-The recommended Mainstats are:</span><br>1) ATK%</p><p><span style="color: #EA4A86;">-Substats:</span><br>CR%=CDMG% >Ult% >ATK%</p>'],
    setStampPopupWidths: [380, 380, 380],
    setStampAfterText: '<p><span style="color: #EA4A86;">Midnight Specter (3/3) </span><br>2-Piece: Increases Strike DMG by <span style="color: #52C394;">11%</span>.<br>3-Piece: Increases Ultimate DMG by <span style="color: #52C394;">30%</span>. Each time a basic attack is released, increases special attack DMG by <span style="color: #52C394;">5.5%</span> for 10s. Stacks up to 5 times.</p>',

    weaponStampImgs: ['images/yoru weapon.webp', 'images/sajin weapon 2.webp'],
    weaponStampAngles: [0, 5],
    weaponStampGaps: [90],
    weaponStampPopupData: [
      {
        name: 'Hakuda and Kido',
		dividerColor: 'null',
        stars: 0,
        base: {
          rows: [
			{ label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Yoruichi Shihoin Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>-Using counterattack instantly maxes out your Spiritual Pressure. After each Ultimate, you can actively release a counterattack once.<br>-When Shunko is active, you gain half of the max stacks of <span style="color: #EA4A86; text-decoration: underline;">Lightning Seal</span> instantly.<br>-Each stack of <span style="color: #EA4A86; text-decoration: underline;">Lightning Seal</span> increases Yoruichi\'s Crit Rate by an extra <span style="color: #52C394;">5%</span>, up to <span style="color: #52C394;">20%</span>.<br>-Increases the DMG of the special attack Hakuda - Blitz by <span style="color: #52C394;">60%</span>.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '50%' },
          ],
          note: 'Yoruichi Shihoin Exclusive Effect',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>-Using counterattack instantly maxes out your Spiritual Pressure. After each Ultimate, you can actively release a counterattack once.<br>-When Shunko is active, you gain half of the max stacks of <span style="color: #EA4A86; text-decoration: underline;">Lightning Seal</span> instantly.<br>-Each stack of <span style="color: #EA4A86; text-decoration: underline;">Lightning Seal</span> increases Yoruichi\'s Crit Rate by an extra <span style="color: #52C394;">12%</span>, up to <span style="color: #52C394;">48%</span>.<br>-Increases the DMG of the special attack Hakuda - Blitz by <span style="color: #52C394;">100%</span>.</p></p>'
        }
      },
      {
        name: 'Power Strike',
		dividerColor: '#8f5cff',
        stars: 0,
        base: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 1</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">15%</span> for 12s. Unstackable.</p></p>'
        },
        max: {
          rows: [
            { label: 'Weapon Stats Boost', value: '25.0%' },
          ],
          note: 'Applicable to all characters',
          text: '<p><span style="color: #EA4A86;">Ascencion Stage 5</span><p>After dealing Strike DMG, Base ATK increases by <span style="color: #52C394;">30%</span> for 12s. Unstackable.</p></p>'
        }
      },
    ],
    weaponStampPopupWidths: [null, null],

    bonds1Imgs: ['images/aizen bond 1.webp'],
    bonds1Info: `<div style="text-align: center; font-weight: bold;">During battle, DMG dealt increases by <span style="color: green;">5.6% (Next: 8%)</span>.<br>This increases to <span style="color: green;">8.4% (Next: 12%) / 11.2% (Next: 16%) / 14% (Next: 20%)</span><br>if Crit Rate reaches <span style="color: green;">20% / 40% / 60%</span>.</div>`,
    bonds1OffsetX: 20,
    bonds1Height: 117,
    bonds1PopupWidth: 480,

    bonds2Imgs: ['images/sajin bond 2.webp'],
    bonds2Info: `<div style="text-align: center; font-weight: bold;">Increases All-Type DMG during battle by <span style="color: #52C394;">15%</span>.</div>`,
    bonds2OffsetX: 20,
    bonds2Height: 117,
    bonds2PopupWidth: 430
  },
];

const SECTION_SELECTOR_CHARACTER = {
  src: 'images/sit.webp',
  width: 210,
  height: 'auto',
  x: 49,
  y: -92,
  angle: 0,
  scale: 0.55
};

const CHARACTER_ORDER = [
  'ulquiorra-resurreccion',
  'white-ichigo',
  'grimmjow-resurreccion',
  'grimmjow',
  'szayel',
  'soi-fon',
  'mayuri',
  'nelliel',
  'kenpachi',
  'gin',
  'aizen',
  'hitsugaya',
  'ichigo-bankai',
  'kisuke',
  'yoruichi',
  'byakuya',
  'tosen',
  'komamura',
  'ikkaku'
];

function buildCharacterRoster() {
  const byId = new Map();
  CHARACTERS.map(char => ({ ...char, upcoming: char.upcoming || 'No' }))
    .forEach(char => byId.set(char.id, char));

  const ordered = CHARACTER_ORDER.map(id => byId.get(id)).filter(Boolean);
  const orderedIds = new Set(ordered.map(char => char.id));
  return [
    ...ordered,
    ...Array.from(byId.values()).filter(char => !orderedIds.has(char.id))
  ];
}

const ROSTER = buildCharacterRoster();
let initialGridMinHeight = null;

function isUpcomingCharacter(char) {
  return String(char && char.upcoming || 'No').toLowerCase() === 'yes';
}

function getCharacterUrl(id) {
  const url = new URL(window.location.href);
  url.searchParams.set('character', id);
  return url.href;
}

function applySectionSelectorCharacterSettings(settings = {}) {
  Object.assign(SECTION_SELECTOR_CHARACTER, settings);
  const bar = document.querySelector('.division-bar');
  const image = document.querySelector('.selector-character');
  if (!bar || !image) return;

  image.src = SECTION_SELECTOR_CHARACTER.src;
  bar.style.setProperty('--selector-character-width', `${SECTION_SELECTOR_CHARACTER.width}px`);
  bar.style.setProperty('--selector-character-height',
    typeof SECTION_SELECTOR_CHARACTER.height === 'number' ? `${SECTION_SELECTOR_CHARACTER.height}px` : SECTION_SELECTOR_CHARACTER.height
  );
  bar.style.setProperty('--selector-character-x', `${SECTION_SELECTOR_CHARACTER.x}px`);
  bar.style.setProperty('--selector-character-y', `${SECTION_SELECTOR_CHARACTER.y}px`);
  bar.style.setProperty('--selector-character-angle', `${SECTION_SELECTOR_CHARACTER.angle}deg`);
  bar.style.setProperty('--selector-character-scale', SECTION_SELECTOR_CHARACTER.scale);
}

window.sectionSelectorCharacterSettings = SECTION_SELECTOR_CHARACTER;
window.updateSectionSelectorCharacter = applySectionSelectorCharacterSettings;
function getAvatarHTML(char) {
  if (char.customAvatar && char.customAvatar.trim()) {
    const src = char.customAvatar.trim();
    const fit = char.avatarFit || 'cover';
    if (src.startsWith('<')) return `<div class="custom-avatar-container">${src}</div>`;
    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(src);
    if (isVideo) {
      return `<div class="custom-avatar-container"><video src="${src}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:${fit}"></video></div>`;
    }
    return `<div class="custom-avatar-container"><img src="${src}" alt="${char.name}" style="width:100%;height:100%;object-fit:${fit}"></div>`;
  }
  return `<div class="custom-avatar-container" style="color:var(--text-dim); font-size:0.6em; text-align:center; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.03);">
    <svg width="80" height="100" viewBox="0 0 80 100" style="opacity:0.3;">
      <circle cx="40" cy="35" r="25" fill="none" stroke="#888" stroke-width="2"/>
      <path d="M15 85 Q40 65 65 85" stroke="#888" stroke-width="2" fill="none"/>
      <text x="40" y="55" text-anchor="middle" fill="#888" font-size="8">No Image</text>
    </svg>
  </div>`;
}

function getSingleBondSrc(bondImgs) {
  if (!bondImgs) return null;
  if (Array.isArray(bondImgs) && bondImgs.length > 0) return bondImgs[0];
  if (typeof bondImgs === 'string') return bondImgs;
  return null;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getDefaultCoreStampRows() {
  return [
    { label: 'ATK', value: '--' },
    { label: 'DEF', value: '--' },
    { label: 'HP', value: '--' },
    { label: 'Effect', value: '--' }
  ];
}

function cloneRows(rows) {
  return rows.map(row => ({
    label: row && row.label ? String(row.label) : '',
    value: row && row.value ? String(row.value) : ''
  }));
}

function normalizeCoreStampPopupData(char) {
  const imgs = Array.isArray(char.coreStampImgs) ? char.coreStampImgs : [];
  const structured = Array.isArray(char.coreStampPopupData) ? char.coreStampPopupData : [];

  return imgs.map((_, i) => {
    const popup = structured[i] || {};
    const popupWidth = popup.popupWidth != null
      ? popup.popupWidth
      : (char.coreStampPopupWidths && char.coreStampPopupWidths[i] != null ? char.coreStampPopupWidths[i] : null);
    const baseText = popup.base && popup.base.text !== undefined
      ? popup.base.text
      : (char.coreStampInfos && char.coreStampInfos[i] ? char.coreStampInfos[i] : `<p>Add the base description for Stamp ${i + 1} here.</p>`);
    const maxText = popup.max && popup.max.text !== undefined
      ? popup.max.text
      : (char.coreStampInfos2 && char.coreStampInfos2[i] ? char.coreStampInfos2[i] : `<p>Add the max level description for Stamp ${i + 1} here.</p>`);
    const baseRows = popup.base && Array.isArray(popup.base.rows) && popup.base.rows.length
      ? cloneRows(popup.base.rows)
      : getDefaultCoreStampRows();
    const maxRows = popup.max && Array.isArray(popup.max.rows) && popup.max.rows.length
      ? cloneRows(popup.max.rows)
      : cloneRows(baseRows);

    return {
      name: popup.name || `Stamp ${i + 1}`,
      stars: Number.isFinite(Number(popup.stars)) ? Math.max(0, Math.round(Number(popup.stars))) : 6,
      dividerColor: popup.dividerColor || null,
      popupWidth,
      base: { rows: baseRows, text: baseText },
      max: { rows: maxRows, text: maxText }
    };
  });
}

function normalizeWeaponStampPopupData(char) {
  const imgs = Array.isArray(char.weaponStampImgs) ? char.weaponStampImgs : [];
  const structured = Array.isArray(char.weaponStampPopupData) ? char.weaponStampPopupData : [];

  return imgs.map((_, i) => {
    const popup = structured[i] || {};
    const popupWidth = popup.popupWidth != null
      ? popup.popupWidth
      : (char.weaponStampPopupWidths && char.weaponStampPopupWidths[i] != null ? char.weaponStampPopupWidths[i] : null);
    const baseText = popup.base && popup.base.text !== undefined
      ? popup.base.text
      : (char.weaponStampInfos && char.weaponStampInfos[i] ? char.weaponStampInfos[i] : `<p>Add the base description for Weapon ${i + 1} here.</p>`);
    const maxText = popup.max && popup.max.text !== undefined
      ? popup.max.text
      : (char.weaponStampInfos2 && char.weaponStampInfos2[i] ? char.weaponStampInfos2[i] : `<p>Add the max level description for Weapon ${i + 1} here.</p>`);
    const baseNote = popup.base && popup.base.note !== undefined ? popup.base.note : '';
    const maxNote = popup.max && popup.max.note !== undefined ? popup.max.note : '';
    const baseRows = popup.base && Array.isArray(popup.base.rows) && popup.base.rows.length
      ? cloneRows(popup.base.rows)
      : getDefaultCoreStampRows();
    const maxRows = popup.max && Array.isArray(popup.max.rows) && popup.max.rows.length
      ? cloneRows(popup.max.rows)
      : cloneRows(baseRows);

    return {
      name: popup.name || `Weapon ${i + 1}`,
      stars: Number.isFinite(Number(popup.stars)) ? Math.max(0, Math.round(Number(popup.stars))) : 6,
      dividerColor: popup.dividerColor || null,
      popupWidth,
      base: { rows: baseRows, note: baseNote, text: baseText },
      max: { rows: maxRows, note: maxNote, text: maxText }
    };
  });
}

function buildCoreStampStateHTML(state) {
  const rows = Array.isArray(state.rows) ? state.rows : [];
  const rowsHTML = rows.map(row => `
    <div class="core-popup-stat-row">
      <span class="core-popup-stat-label">${escapeAttr(row.label || '')}</span>
      <span class="core-popup-stat-value">${escapeAttr(row.value || '')}</span>
    </div>
  `).join('');
  const noteHTML = state.note ? `<div class="weapon-popup-note">${state.note}</div>` : '';

  return `
    <div class="core-popup-stat-list">${rowsHTML}</div>
    ${noteHTML}
    <div class="core-popup-info-rule"></div>
    <div class="core-popup-copy">${state.text || ''}</div>
  `;
}

function buildStampHTML(imgs, angles, gaps, infos, popupWidths = [], infos2 = [], options = {}) {
  if (!imgs || !imgs.length) return '';
  let html = '';
  const defaultGap = 30;
  const corePopupData = Array.isArray(options.corePopupData) ? options.corePopupData : [];
  if (options.beforeText) {
    html += `<div class="stamp-section-text">${options.beforeText}</div>`;
  }
  imgs.forEach((src, i) => {
    const angle = angles && angles[i] !== undefined ? angles[i] : 0;
    let marginRight = 0;
    if (i < imgs.length - 1) {
      marginRight = (gaps && gaps[i] !== undefined) ? gaps[i] : defaultGap;
    }
    const infoText = infos && infos[i] ? infos[i] : '';
    const infoText2 = infos2 && infos2[i] ? infos2[i] : '';
    const corePopup = corePopupData[i] || null;
    const stampTypeAttr = options.isWeapon ? 'data-stamp-type="weapon"' : '';
    const popupWidthValue = corePopup && corePopup.popupWidth != null
      ? corePopup.popupWidth
      : (popupWidths && popupWidths[i] ? popupWidths[i] : null);
    const popupWidth = popupWidthValue ? `data-popup-width="${popupWidthValue}"` : '';
    const page2Attr = infoText2 ? `data-info-page2="${infoText2.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"` : '';
    const corePopupAttr = corePopup ? `data-core-popup="${encodeURIComponent(JSON.stringify(corePopup))}"` : '';
    html += `<div class="stamp-image-wrapper" style="display:inline-block; margin-right:${marginRight}px;">
      <img src="${src}" alt="stamp" style="transform: rotate(${angle}deg); display:block; max-width:200px; max-height:200px;">
      <div class="stamp-info-icon" data-info="${infoText.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" ${popupWidth} ${page2Attr} ${corePopupAttr} ${stampTypeAttr}>ⓘ</div>
    </div>`;
  });
  if (options.afterText) {
    html += `<div class="stamp-section-text">${options.afterText}</div>`;
  }
  return html;
}

function buildBondsHTML(imgSrc, rectangleInfo, offsetX = 0, height = null, popupWidth = null) {
  if (!imgSrc && !rectangleInfo) return '';
  let html = '';
  if (rectangleInfo) {
    const popupWidthAttr = popupWidth ? `data-popup-width="${popupWidth}"` : '';
    html += `<div class="stamp-info-icon bond-info-icon" style="top:8px; left:8px;" data-info="${rectangleInfo.replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" ${popupWidthAttr}>ⓘ</div>`;
  }
  if (!imgSrc) {
    html += '<div class="stamp-placeholder" style="width:100%;">No Bonds image</div>';
  } else {
    const heightStyle = height ? `height:${height}px; max-height:none;` : '';
    html += `<img src="${imgSrc}" alt="bond" style="display:block; max-width:100%; object-fit:contain; margin-left:${offsetX}px; ${heightStyle}">`;
  }
  return html;
}
let activeCategory = 'all';
let activeType = null;
let activeRole = null;
let selectedId = null;

function applyFilters() {
  const filtered = ROSTER.filter(c => {
    if (activeCategory !== 'all' && c.category !== activeCategory) return false;
    if (activeType && c.type !== activeType) return false;
    if (activeRole && c.role !== activeRole) return false;
    return true;
  });
  renderGrid(filtered);
}

function renderGrid(filtered) {
  const grid = document.getElementById('char-grid');
  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-prompt">No warriors found with these filters.</div>`;
    return;
  }
  filtered.forEach((char, idx) => {
    const card = document.createElement('a');
    const isUpcoming = isUpcomingCharacter(char);
    card.className = 'char-card' + (selectedId === char.id ? ' selected' : '') + (isUpcoming ? ' upcoming' : '');
    card.href = isUpcoming ? `#${char.id}` : getCharacterUrl(char.id);
    card.setAttribute('aria-label', isUpcoming ? `${char.name} is upcoming` : `Open ${char.name} records`);
    card.style.setProperty('--char-color', char.color);
    card.style.animationDelay = `${idx * 0.05}s`;
    card.onclick = event => {
      event.preventDefault();
      openPanel(char.id);
    };
    const illStyles = [
      `width:${char.avatarWidth || 200}px`,
      `height:${char.avatarHeight || 212}px`,
      `margin-left:${char.avatarOffsetX || 0}px`,
      `margin-top:${char.avatarOffsetY || 0}px`
    ].join(';');
    card.innerHTML = `<div class="card-frame"><div class="char-illustration" style="${illStyles}">${getAvatarHTML(char)}</div></div>`;
    grid.appendChild(card);
  });
  if (initialGridMinHeight === null) {
    initialGridMinHeight = grid.offsetHeight;
    grid.style.minHeight = `${initialGridMinHeight}px`;
  }
}

function setCategoryFilter(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.division-bar .div-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function setTypeFilter(type, btn) {
  if (activeType === type) {
    activeType = null;
    btn.classList.remove('active-slash', 'active-spirit', 'active-thrust', 'active-strike');
  } else {
    activeType = type;
    document.querySelectorAll('#type-filter-bar .filter-type-btn').forEach(t => {
      t.classList.remove('active-slash', 'active-spirit', 'active-thrust', 'active-strike');
    });
    btn.classList.add(`active-${type.toLowerCase()}`);
  }
  applyFilters();
}

function setRoleFilter(role, btn) {
  if (activeRole === role) {
    activeRole = null;
    btn.classList.remove('active-role');
  } else {
    activeRole = role;
    document.querySelectorAll('#role-filter-bar .filter-role-btn').forEach(t => t.classList.remove('active-role'));
    btn.classList.add('active-role');
  }
  applyFilters();
}
let currentPopup = null, popupHideTimeout = null;
let termInfoPopup = null;
let activeInfoIcon = null;

const TERM_GLOSSARY = {
  Kyokasuigetsu: 'After releasing his ultimate, Aizen enters Kyokasuigetsu, enhancing his basic attacks and backline Battlefield Skills.',
  'Spiritual Domination': 'Releasing Ultimate, or any Battlefield Skills or landing the last strike of the basic attack upon reaching 3 Pressure Stacks, will activate Spiritual Pressure Intimidation. During which, interruption resistance is increased, and Perfect Dodge is auto-triggered on most imminent attacks. All Pressure Stacks gained are converted into Enhanced Pressure Stacks.',
  'Enhanced Pressure Stacks': 'During Spiritual Domination, all Pressure Stacks gained by Aizen are converted into Enhanced Pressure Stacks. Releasing the Battlefield Skill Hado 90: Kurohitsugi consumes all Enhanced Pressure Stacks, granting shields to the team and counterattack effects when switching characters.',
  Ravage: 'Releasing the Battlefield Skill Hado 90: Kurohitsugi ir counterattacks inflicts Ravage to the enemy, reducing their All-Type Resistance for 18 seconds.',
  'ongoing debuff': 'Ongoing debuffs include Freeze, Wound, Cleave and Verde Rush',
  'Impale Scale': '<p>Every time 100 Impale Scale are applied to an enemy, Impale is triggered once, dealing damage equal to <span style="color: #52C394;">500%</span> of Gin\'s ATK.</p>',
  'Technique Point(s)': '<p>When Gin charges and releases his Technique, he constantly consumes Technique Points to boost its power.<br>Recovers 1 Techinque Point every 10 seconds.<br>Can be stacked up to 3 points.</p>',
  Deathmark: 'When another character in the team lands an attack, Deathmark is automatically consumed to trigger the combo attack, which is one of the Battlefield Skills.',
  Sting: 'Deals Ailment DMG based on Soi Fon\'s ATK.',
  Excitement: 'Each time Poison is triggered, the entire team gains Excitement, which increases Ailment Mastery.',
  'All-Skill Mastery': 'Increases all skill damage by a certain percentage, including damage dealt by Basic Attacks, Special Attacks, Techniques, Battlefield Skills, Ultimates and Counters.',
  'Build Up': 'When Komamura releases the Battlefield Skill Tenken Ascension - Charged Strike, extra attacks are launched according to the number of Build Up stacks.',
  Wound: 'Deals DMG equal to <span style="color: #52C394;">2%</span> of the character\'s ATK every second. The more stacks, the higher the DMG. Lasts for 10s and can be stacked up to 30 times.',
  'Ice Blossoms': 'Ultimate Hyuoten Hyakkaso\'s DMG increases based on Ice Blossoms consumed.',
  'Freeze Points': 'At 100, the enemy will be frozen and become immovable for 2s.',
  'Tenso Jyurin': 'After releasing the Technique Ice Dragon Dive, Toshiro enters Tenso Jyurin, during which his basic attacks are replaced by Ice Dragon Lunge.',
  Cleave: 'Sever Attacks apply Sever Points to the enemy. Upon reaching 100 Sever Points, the enemy is inflicted with the debuff, Cleave.<br>Applying Sever Attacks to enemies affected by Cleave deals extra Ailment DMG.',
  Frenzy: 'Some of Kenpachi\'s attacks generate Frenzy.<br>When Frenzy reaches 2 points,tap and hold Basic Attack to release a Special Attack.',
  'Slow Hozukimaru': 'The second phase of Ikkaku\'s Ultimate deals huge DMG and removes Bankai state.',
  'Destruction Mark': 'Certain attacks apply Destruction Mark to enemies. It can be detonated by basic attacks during the Ultimate, counterattacks, or basic attacks chained after a technique, granting Spiritual Pressure Reserve.',
  'Sacrificial Materials': 'After attacking, summoned Fracciones are converted into 1 Sacrificial Material.<br>Szayelaporro can use Special Attacks to detonate them and grant buffs to teammates.<br>Up to 6 can be accumulated.',
  'Intel Control': 'Each time a Special Attack is released, grants all Spirit characters corresponding stacks of Intel Control based on the number of detonated Sacrificial Materials, increasing their damage dealt.',
  'Sample Analysis': 'When an Ultimate is released, all Spirit characters gain 1 stack of Sample Analysis.<br>Whenever a character with this state deals damage, all Spirit characters gain another stack of Sample Analysis, increasing their Crit DMG.',
  'Battle Will': 'Generated through various attack types.<br>While in Resurreccion, consume these points to release Enhanced Techniques, and Manual Counterattacks.',
  'Verde Rush': 'Upon triggering, deals Ailment DMG to the enemy and applies one stack of Verde Rush Mark. Each stack of Verde Rush Mark reduces the target\'s Ailment Resistance.',
  'Verde Rush Points': 'Every 100 points of Verde Rush accumulated on an enemy will trigger a Verde Rush effect, dealing Ailment DMG and applying a stack of Verde Rush Mark reduces the target\'s Ailment Resistance.',
  Hollowfied: 'After releasing his Ultimate, Ichigo becomes Hollowified, during which all his abilities are greatly enhanced',
  'Lightning Seal': 'Yoruichi gains 1 stack of Lightning Seal that increases her Strike DMG each time she releases a technique , counterattack, or special attack. After equipping a Weapon Stamp, it also increases her Crit Rate by an extra amount. This effect is stackable.',
  'Reishi Analysis': 'Each use of Urahara\'s special attack, Technique, Ultimate, or counterattack grants 1 stack of Reishi Analysis that increases ATK to the team.',
};

function normalizeTermName(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

function isRoseUnderlinedTerm(span) {
  const style = span.style;
  const color = style.color.replace(/\s+/g, '').toLowerCase();
  const hasRose = color === '#ea4a86' || color === 'rgb(234,74,134)';
  const hasUnderline = style.textDecoration.includes('underline') || style.textDecorationLine.includes('underline');
  return hasRose && hasUnderline;
}

function closeTermInfoPopup() {
  if (termInfoPopup) {
    termInfoPopup.remove();
    termInfoPopup = null;
  }
}

function isPointerInsideTermPopup() {
  return Boolean(termInfoPopup && termInfoPopup.matches(':hover'));
}

function isPointerInsideInfoTerritory() {
  return Boolean(
    (activeInfoIcon && activeInfoIcon.matches(':hover')) ||
    (currentPopup && currentPopup.matches(':hover')) ||
    (termInfoPopup && termInfoPopup.matches(':hover'))
  );
}

function scheduleInfoTerritoryClose() {
  clearTimeout(popupHideTimeout);
  popupHideTimeout = setTimeout(() => {
    if (isPointerInsideInfoTerritory()) return;
    closeTermInfoPopup();
    if (currentPopup) {
      currentPopup.remove();
      currentPopup = null;
    }
    activeInfoIcon = null;
  }, 120);
}

function positionTermInfoPopup(popup, anchor) {
  const rect = anchor.getBoundingClientRect();
  let left = rect.right + 6;
  let top = rect.top + rect.height / 2 - popup.offsetHeight / 2;
  const maxLeft = window.innerWidth - popup.offsetWidth - 5;
  if (left > maxLeft) left = rect.left - popup.offsetWidth - 6;
  if (left < 5) left = 5;
  if (top < 5) top = 5;
  if (top + popup.offsetHeight > window.innerHeight - 5) {
    top = window.innerHeight - popup.offsetHeight - 5;
  }
  if (top < 5) top = 5;
  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
}

function showTermInfo(term, anchor) {
  closeTermInfoPopup();
  const description = TERM_GLOSSARY[term] || `Add an explanation for ${term} here.`;
  termInfoPopup = document.createElement('div');
  termInfoPopup.className = 'term-info-popup';
  termInfoPopup.innerHTML = `
    <div class="term-info-title">&#9670; ${escapeAttr(term)}</div>
    <div>${description}</div>
  `;
  termInfoPopup.addEventListener('mouseenter', () => clearTimeout(popupHideTimeout));
  termInfoPopup.addEventListener('mouseleave', scheduleInfoTerritoryClose);
  document.body.appendChild(termInfoPopup);
  positionTermInfoPopup(termInfoPopup, anchor);
}

function enhanceGlossaryTerms(root) {
  if (!root) return;
  root.querySelectorAll('span').forEach(span => {
    if (span.dataset.termEnhanced === 'true' || !isRoseUnderlinedTerm(span)) return;
    const term = normalizeTermName(span.textContent);
    if (!term) return;

    const icon = document.createElement('button');
    icon.type = 'button';
    icon.className = 'term-info-icon';
    icon.textContent = 'i';
    icon.setAttribute('aria-label', `Info about ${term}`);
    icon.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      showTermInfo(term, icon);
    });

    span.dataset.termEnhanced = 'true';
    span.insertAdjacentElement('afterend', icon);
  });
}

function attachInfoHover() {
  document.querySelectorAll('.stamp-info-icon[data-info], .stamp-info-icon[data-core-popup]').forEach(icon => {
    const infoText = icon.getAttribute('data-info');
    const corePopupRaw = icon.getAttribute('data-core-popup');
    if (!infoText && !corePopupRaw) return;
    icon.addEventListener('mouseenter', (e) => {
      clearTimeout(popupHideTimeout);
      closeTermInfoPopup();
      if (currentPopup) currentPopup.remove();
      activeInfoIcon = icon;

      currentPopup = document.createElement('div');
      currentPopup.className = 'stamp-info-popup';
      const customWidth = icon.getAttribute('data-popup-width');
      if (customWidth) {
        currentPopup.style.maxWidth = customWidth + 'px';
        currentPopup.style.width = 'auto';
      }

      if (corePopupRaw) {
        let popupData = null;
        try {
          popupData = JSON.parse(decodeURIComponent(corePopupRaw));
        } catch (error) {
          popupData = null;
        }

        if (popupData) {
          currentPopup.classList.add('core-stamp-popup');
          if (icon.getAttribute('data-stamp-type') === 'weapon') {
            currentPopup.classList.add('weapon-stamp-popup');
          }

          const heading = document.createElement('div');
          heading.className = 'core-popup-heading';

          const nameDiv = document.createElement('div');
          nameDiv.className = 'core-popup-name';
          nameDiv.textContent = popupData.name || 'Stamp';

          const starsDiv = document.createElement('div');
          starsDiv.className = 'core-popup-stars';
          starsDiv.textContent = '\u2605'.repeat(Math.max(0, Math.round(Number(popupData.stars) || 0)));

          const topDivider = document.createElement('div');
          topDivider.className = 'core-popup-divider';
          const glowColor = (popupData.dividerColor && popupData.dividerColor !== 'null') 
            ? popupData.dividerColor 
            : 'rgba(236, 210, 58, 0.6)';
          if (popupData.dividerColor && popupData.dividerColor !== 'null') {
            topDivider.style.background = popupData.dividerColor;
          }
          topDivider.style.boxShadow = `0 -1px 0 rgba(255,255,255,0.15), 0 -6px 12px ${glowColor}`;

          const mainScroll = document.createElement('div');
          mainScroll.className = 'core-popup-main';

          const stateHost = document.createElement('div');
          stateHost.className = 'core-popup-state';

          const toggleDiv = document.createElement('div');
          toggleDiv.className = 'core-popup-toggle';
          toggleDiv.innerHTML = `
            <div class="core-popup-toggle-title">Max Level Effect</div>
            <div class="core-popup-toggle-track">
              <button type="button" class="core-popup-toggle-btn active" data-core-state="base">OFF</button>
              <button type="button" class="core-popup-toggle-btn" data-core-state="max">ON</button>
            </div>
          `;

          let currentCoreMode = 'base';

          function renderCoreState(mode, preserveScroll = true) {
            const previousScrollTop = preserveScroll ? mainScroll.scrollTop : 0;
            currentCoreMode = mode;
            const state = mode === 'max' ? popupData.max : popupData.base;
            stateHost.innerHTML = buildCoreStampStateHTML(state || { rows: [], text: '' });
            enhanceGlossaryTerms(stateHost);
            mainScroll.scrollTop = previousScrollTop;
            toggleDiv.classList.toggle('max-active', mode === 'max');
            toggleDiv.querySelectorAll('.core-popup-toggle-btn').forEach(btn => {
              btn.classList.toggle('active', btn.getAttribute('data-core-state') === mode);
            });
            positionPopupLeft(currentPopup, icon);
          }

          toggleDiv.querySelectorAll('.core-popup-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const requestedMode = btn.getAttribute('data-core-state');
              const nextMode = requestedMode === currentCoreMode
                ? (currentCoreMode === 'max' ? 'base' : 'max')
                : requestedMode;
              renderCoreState(nextMode);
            });
          });

          heading.appendChild(nameDiv);
          heading.appendChild(starsDiv);
          mainScroll.appendChild(heading);
          mainScroll.appendChild(topDivider);
          mainScroll.appendChild(stateHost);
          currentPopup.appendChild(mainScroll);
          currentPopup.appendChild(toggleDiv);
          renderCoreState('base', false);
        }
      } else {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'popup-scroll-content';
        contentDiv.innerHTML = infoText;
        enhanceGlossaryTerms(contentDiv);
        currentPopup.appendChild(contentDiv);

        const page2Info = icon.getAttribute('data-info-page2');
        if (page2Info) {
          currentPopup.classList.add('has-toggle-switch');
          const toggleDiv = document.createElement('div');
          toggleDiv.className = 'popup-toggle-switch';
          toggleDiv.innerHTML = `
            <div class="toggle-title">Max Level Effect</div>
            <label class="switch">
              <input type="checkbox" class="popup-toggle-checkbox">
              <span class="slider"></span>
            </label>
          `;
          const checkbox = toggleDiv.querySelector('input');

          checkbox.addEventListener('change', function() {
            contentDiv.innerHTML = this.checked ? page2Info : infoText;
            enhanceGlossaryTerms(contentDiv);
            contentDiv.scrollTop = 0;
            positionPopupLeft(currentPopup, icon);
          });

          currentPopup.appendChild(toggleDiv);
        }
      }

      document.body.appendChild(currentPopup);
      currentPopup.classList.add('show');
      positionPopupLeft(currentPopup, icon);

      currentPopup.addEventListener('mouseenter', () => clearTimeout(popupHideTimeout));
      currentPopup.addEventListener('mouseleave', scheduleInfoTerritoryClose);
    });
    icon.addEventListener('mouseleave', scheduleInfoTerritoryClose);
  });
}

document.addEventListener('click', event => {
  if (event.target.closest('.term-info-icon') || event.target.closest('.term-info-popup')) return;
  closeTermInfoPopup();
});

window.addEventListener('scroll', closeTermInfoPopup, true);

function positionPopupLeft(popup, icon) {
  const rect = icon.getBoundingClientRect();
  let left = rect.left - popup.offsetWidth - 8;
  let top = rect.top + rect.height / 2 - popup.offsetHeight / 2;
  if (left < 5) left = rect.right + 8;
  const maxLeft = window.innerWidth - popup.offsetWidth - 5;
  if (left > maxLeft) left = Math.max(5, maxLeft);
  if (top < 5) top = 5;
  if (top + popup.offsetHeight > window.innerHeight - 5) {
    top = window.innerHeight - popup.offsetHeight - 5;
  }
  if (top < 5) top = 5;
  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
}
function openPanel(id) {
  const char = ROSTER.find(c => c.id === id);
  if (!char || isUpcomingCharacter(char)) return;
  selectedId = id;
  applyFilters();

  const panel = document.getElementById('info-panel');
  panel.style.setProperty('--char-color', char.color);
  const panelArt = document.getElementById('panel-art');
  const panelImgSrc = char.panelImage || null;
  if (panelImgSrc) {
    const fit = char.panelFit || char.avatarFit || 'cover';
    panelArt.innerHTML = `<div class="custom-avatar-container"><img src="${panelImgSrc}" alt="${char.name}" style="width:100%;height:100%;object-fit:${fit}"></div>`;
  } else {
    panelArt.innerHTML = getAvatarHTML(char);
  }
  panelArt.style.transform = `scale(${char.panelScale || 1.6})`;

  document.getElementById('panel-division-label').textContent = char.divisionLabel;
  document.getElementById('panel-char-name').textContent = char.name;
  document.getElementById('panel-char-jp').textContent = char.nameJP;
  document.getElementById('panel-quote').textContent = char.quote;
  const statsContainer = document.getElementById('panel-stats');
  if (char.statsImgs && char.statsImgs.length) {
    let statsHTML = '';
    const defaultGap = 20;
    char.statsImgs.forEach((src, i) => {
      const angle = char.statsAngles && char.statsAngles[i] !== undefined ? char.statsAngles[i] : 0;
      const heightVal = char.statsHeights && char.statsHeights[i] != null ? char.statsHeights[i] : null;
      let marginRight = 0;
      if (i < char.statsImgs.length - 1) {
        marginRight = (char.statsGaps && char.statsGaps[i] !== undefined) ? char.statsGaps[i] : defaultGap;
      }
      const heightStyle = heightVal ? `height:${heightVal}px;` : '';
      statsHTML += `<div class="stat-img-wrapper" style="display:inline-flex; margin-right:${marginRight}px;">
        <img src="${src}" style="transform: rotate(${angle}deg); max-width:140px; max-height:200px; object-fit:contain; ${heightStyle}">
      </div>`;
    });
    statsContainer.innerHTML = statsHTML;
  } else {
    statsContainer.innerHTML = '';
  }

  document.getElementById('panel-zanpakuto').innerHTML = `
    <div class="zanpaku-name">${char.zanpakuto.name}</div>
    <div class="zanpaku-release">${char.zanpakuto.release}</div>
    <div class="zanpaku-desc">${char.zanpakuto.desc}</div>
  `;

  const instructionsBlock = document.getElementById('panel-instructions');
  const instructions = String(char.instructions || '').trim();
  instructionsBlock.innerHTML = instructions || '<p class="instructions-empty">uuh notes here :) </p>';
  enhanceGlossaryTerms(instructionsBlock);
  const bond1Src = getSingleBondSrc(char.bonds1Imgs);
  document.getElementById('panel-bonds1').innerHTML = buildBondsHTML(
    bond1Src, char.bonds1Info, char.bonds1OffsetX || 0, char.bonds1Height || null, char.bonds1PopupWidth
  );

  const bond2Src = getSingleBondSrc(char.bonds2Imgs);
  document.getElementById('panel-bonds2').innerHTML = buildBondsHTML(
    bond2Src, char.bonds2Info, char.bonds2OffsetX || 0, char.bonds2Height || null, char.bonds2PopupWidth
  );
  const coreBlock = document.getElementById('panel-core-stamp');
  coreBlock.classList.remove('has-content');
  if (char.coreStampImgs && char.coreStampImgs.some(img => img)) {
    coreBlock.classList.add('has-content');
    coreBlock.innerHTML = buildStampHTML(
      char.coreStampImgs, char.coreStampAngles, char.coreStampGaps,
      char.coreStampInfos, char.coreStampPopupWidths, char.coreStampInfos2,
      { corePopupData: normalizeCoreStampPopupData(char) }
    );
  } else {
    coreBlock.innerHTML = '<div class="stamp-placeholder">Core Stamp — Add Animated Media</div>';
  }

  const setBlock = document.getElementById('panel-set-stamps');
  setBlock.classList.remove('has-content');
  if (char.setStampImgs && char.setStampImgs.some(img => img)) {
    setBlock.classList.add('has-content');
    setBlock.innerHTML = buildStampHTML(
      char.setStampImgs, char.setStampAngles, char.setStampGaps,
      char.setStampInfos, char.setStampPopupWidths, [],
      { beforeText: char.setStampBeforeText || '', afterText: char.setStampAfterText || '' }
    );
  } else {
    setBlock.innerHTML = '<div class="stamp-placeholder">Set Stamps — Add Animated Media</div>';
  }

  const weaponBlock = document.getElementById('panel-weapon-stamp');
  weaponBlock.classList.remove('has-content');
  if (char.weaponStampImgs && char.weaponStampImgs.some(img => img)) {
    weaponBlock.classList.add('has-content');
    weaponBlock.innerHTML = buildStampHTML(
      char.weaponStampImgs, char.weaponStampAngles, char.weaponStampGaps,
      char.weaponStampInfos, char.weaponStampPopupWidths, char.weaponStampInfos2,
      { corePopupData: normalizeWeaponStampPopupData(char), isWeapon: true, }
    );
  } else {
    weaponBlock.innerHTML = '<div class="stamp-placeholder">Weapon Stamp — Add Animated Media</div>';
  }

  attachInfoHover();
  enhanceGlossaryTerms(panel);
  panel.classList.add('open');
  document.getElementById('overlay').classList.add('show');
}

function closePanel() {
  if (currentPopup) { currentPopup.remove(); currentPopup = null; }
  closeTermInfoPopup();
  clearTimeout(popupHideTimeout);
  document.getElementById('info-panel').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  selectedId = null;
  applyFilters();
}
(function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
        const isSmallScreen = window.matchMedia && window.matchMedia('(max-width: 820px)').matches;
    const motionReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = motionReduced ? 0 : Math.min(isSmallScreen ? 35 : 180, Math.floor((W * H) / (isSmallScreen ? 28000 : 12000)));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -(Math.random() * 0.15 + 0.03),
        alpha: Math.random() * 0.3 + 0.03,
        hue: 40 + Math.random() * 20,
        sat: 40 + Math.random() * 20
      });
    }
  }

  function tick() {
    if (document.hidden) {
      requestAnimationFrame(tick);
      return;
    }
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -5) p.y = H + 5;
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, 70%, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => { resize(); createParticles(); });
  resize();
  createParticles();
  tick();
})();

(function initAtmosphere() {
  const streamContainer = document.getElementById('energy-streams');
  streamContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;';
  const streamColors = [
    ['rgba(200,151,42,0.06)', 'rgba(200,151,42,0.03)'],
    ['rgba(180,130,30,0.04)', 'rgba(180,130,30,0.02)']
  ];
    const streamCount = window.matchMedia && window.matchMedia('(max-width: 820px)').matches ? 4 : 12;
  for (let i = 0; i < streamCount; i++) {
    const div = document.createElement('div');
    div.className = 'energy-stream';
    div.style.cssText = `
      left:${5 + i * 8}%;
      width:${Math.random() * 2 + 0.5}px;
      height:130%; top:-15%;
      --stream-color:${streamColors[i % 2][0]};
      --dur:${8 + Math.random() * 10}s;
      --delay:${Math.random() * 12}s;
      --angle:${-10 + Math.random() * 20}deg;
      --max-op:0.3;
    `;
    streamContainer.appendChild(div);
  }
})();

applySectionSelectorCharacterSettings();
applyFilters();

const initialCharacterId = new URLSearchParams(window.location.search).get('character');
if (initialCharacterId) {
  openPanel(initialCharacterId);
}
