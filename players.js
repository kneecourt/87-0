const teamYears = [
  {
    team: "Fnatic",
    year: "2013",
    players: [
      { name: "pronax", roles: ["IGL"], firepower: 72, consistency: 85, support: 88, igl: 94 },
      { name: "JW", roles: ["AWPer"], firepower: 95, consistency: 88 },
      { name: "flusha", roles: ["Rifler"], firepower: 90, consistency: 94, support: 95 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 88, consistency: 95, support: 98 },
      { name: "Devilwalk", roles: ["Rifler"], firepower: 78, consistency: 82 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2014",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 82, consistency: 88, support: 92, igl: 93 },
      { name: "pashaBiceps", roles: ["AWPer", "Rifler"], firepower: 92, consistency: 88 },
      { name: "NEO", roles: ["Rifler"], firepower: 90, consistency: 90 },
      { name: "Snax", roles: ["Rifler"], firepower: 95, consistency: 91 },
      { name: "byali", roles: ["Rifler"], firepower: 90, consistency: 84 }
    ]
  },

  {
    team: "Ninjas in Pyjamas",
    year: "2014",
    players: [
      { name: "Xizt", roles: ["IGL"], firepower: 75, consistency: 87, support: 88, igl: 90 },
      { name: "f0rest", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "GeT_RiGhT", roles: ["Rifler"], firepower: 94, consistency: 96, support: 97 },
      { name: "friberg", roles: ["Rifler"], firepower: 84, consistency: 84 },
      { name: "Fifflaren", roles: ["AWPer", "Support"], firepower: 75, consistency: 82, support: 90 }
    ]
  },

  {
    team: "LDLC",
    year: "2014",
    players: [
      { name: "Happy", roles: ["IGL"], firepower: 85, consistency: 87, support: 86, igl: 92 },
      { name: "shox", roles: ["Rifler"], firepower: 97, consistency: 92 },
      { name: "NBK-", roles: ["Support", "Rifler"], firepower: 88, consistency: 90, support: 93 },
      { name: "kioShiMa", roles: ["Support"], firepower: 82, consistency: 88, support: 91 },
      { name: "SmithZz", roles: ["AWPer"], firepower: 84, consistency: 85 }
    ]
  },

  {
    team: "Fnatic",
    year: "2015",
    players: [
      { name: "pronax", roles: ["IGL"], firepower: 73, consistency: 86, support: 88, igl: 95 },
      { name: "JW", roles: ["AWPer"], firepower: 97, consistency: 90 },
      { name: "flusha", roles: ["Rifler"], firepower: 92, consistency: 95, support: 95 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 91, consistency: 97, support: 99 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 99, consistency: 96 }
    ]
  },

  {
    team: "EnVyUs",
    year: "2015",
    players: [
      { name: "Happy", roles: ["IGL"], firepower: 84, consistency: 86, support: 85, igl: 92 },
      { name: "kennyS", roles: ["AWPer"], firepower: 100, consistency: 90 },
      { name: "apEX", roles: ["Rifler"], firepower: 95, consistency: 86 },
      { name: "NBK-", roles: ["Support"], firepower: 87, consistency: 89, support: 94 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 81, consistency: 88, support: 92 }
    ]
  },
  
  {
  team: "Luminosity Gaming",
  year: "2016",
  players: [
    { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 93, consistency: 92, support: 88, igl: 96 },
    { name: "coldzera", roles: ["Rifler"], firepower: 99, consistency: 98 },
    { name: "fer", roles: ["Rifler"], firepower: 95, consistency: 89 },
    { name: "fnx", roles: ["Rifler"], firepower: 87, consistency: 84 },
    { name: "TACO", roles: ["Support"], firepower: 74, consistency: 84, support: 96 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2016",
    players: [
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 94, consistency: 93, support: 88, igl: 97 },
      { name: "coldzera", roles: ["Rifler"], firepower: 100, consistency: 99 },
      { name: "fer", roles: ["Rifler"], firepower: 95, consistency: 90 },
      { name: "fnx", roles: ["Rifler"], firepower: 87, consistency: 84 },
      { name: "TACO", roles: ["Support"], firepower: 74, consistency: 84, support: 96 }
    ]
  },

  {
    team: "Astralis",
    year: "2017",
    players: [
      { name: "gla1ve", roles: ["IGL"], firepower: 80, consistency: 90, support: 90, igl: 98 },
      { name: "device", roles: ["AWPer"], firepower: 97, consistency: 98 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 93, consistency: 91 },
      { name: "Kjaerbye", roles: ["Rifler"], firepower: 91, consistency: 87 },
      { name: "Xyp9x", roles: ["Support"], firepower: 83, consistency: 94, support: 99 }
    ]
  },

  {
    team: "Gambit",
    year: "2017",
    players: [
      { name: "Dosia", roles: ["Support"], firepower: 80, consistency: 83, support: 92 },
      { name: "AdreN", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "mou", roles: ["AWPer"], firepower: 88, consistency: 85 },
      { name: "HObbit", roles: ["Rifler"], firepower: 93, consistency: 88 },
      { name: "Zeus", roles: ["IGL"], firepower: 65, consistency: 84, support: 90, igl: 95 }
    ]
  },

  {
    team: "Cloud9",
    year: "2018",
    players: [
      { name: "tarik", roles: ["IGL"], firepower: 88, consistency: 86, support: 82, igl: 89 },
      { name: "Skadoodle", roles: ["AWPer"], firepower: 84, consistency: 83 },
      { name: "Stewie2K", roles: ["Rifler"], firepower: 91, consistency: 84 },
      { name: "autimatic", roles: ["Rifler"], firepower: 94, consistency: 91 },
      { name: "RUSH", roles: ["Support"], firepower: 80, consistency: 85, support: 90 }
    ]
  },

  {
    team: "Astralis",
    year: "2018",
    players: [
      { name: "gla1ve", roles: ["IGL"], firepower: 82, consistency: 92, support: 91, igl: 99 },
      { name: "device", roles: ["AWPer"], firepower: 98, consistency: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "Magisk", roles: ["Rifler", "Support"], firepower: 94, consistency: 91, support: 88 },
      { name: "Xyp9x", roles: ["Support"], firepower: 84, consistency: 95, support: 100 }
    ]
  },

  {
    team: "Astralis",
    year: "2019",
    players: [
      { name: "gla1ve", roles: ["IGL"], firepower: 82, consistency: 93, support: 92, igl: 100 },
      { name: "device", roles: ["AWPer"], firepower: 98, consistency: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "Magisk", roles: ["Rifler", "Support"], firepower: 95, consistency: 92, support: 89 },
      { name: "Xyp9x", roles: ["Support"], firepower: 84, consistency: 96, support: 100 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2021",
    players: [
      { name: "s1mple", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "electroNic", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "b1t", roles: ["Rifler", "Support"], firepower: 94, consistency: 93, support: 80 },
      { name: "Perfecto", roles: ["Support"], firepower: 82, consistency: 91, support: 98 },
      { name: "Boombl4", roles: ["IGL"], firepower: 78, consistency: 84, support: 86, igl: 93 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2022",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 95, consistency: 93 },
      { name: "ropz", roles: ["Rifler"], firepower: 96, consistency: 97 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 91, consistency: 89, support: 75 },
      { name: "karrigan", roles: ["IGL"], firepower: 70, consistency: 83, support: 92, igl: 99 }
    ]
  },

  {
    team: "Outsiders",
    year: "2022",
    players: [
      { name: "Jame", roles: ["IGL", "AWPer"], firepower: 90, consistency: 95, support: 85, igl: 95 },
      { name: "FL1T", roles: ["Rifler"], firepower: 88, consistency: 87 },
      { name: "fame", roles: ["Rifler"], firepower: 86, consistency: 85 },
      { name: "n0rb3r7", roles: ["Support"], firepower: 78, consistency: 82, support: 92 },
      { name: "Qikert", roles: ["Rifler", "Support"], firepower: 82, consistency: 84, support: 88 }
    ]
  },

  {
    team: "Vitality",
    year: "2023",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "Spinx", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "flameZ", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "Magisk", roles: ["Support", "Rifler"], firepower: 88, consistency: 91, support: 90 },
      { name: "apEX", roles: ["IGL"], firepower: 82, consistency: 86, support: 88, igl: 96 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2024",
    players: [
      { name: "w0nderful", roles: ["AWPer"], firepower: 91, consistency: 90 },
      { name: "jL", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "b1t", roles: ["Rifler", "Support"], firepower: 93, consistency: 91, support: 80 },
      { name: "iM", roles: ["Rifler"], firepower: 90, consistency: 86 },
      { name: "Aleksib", roles: ["IGL"], firepower: 72, consistency: 84, support: 90, igl: 95 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2024",
    players: [
      { name: "sh1ro", roles: ["AWPer"], firepower: 97, consistency: 97 },
      { name: "donk", roles: ["Rifler"], firepower: 100, consistency: 98 },
      { name: "zont1x", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "magixx", roles: ["Support"], firepower: 84, consistency: 87, support: 92 },
      { name: "chopper", roles: ["IGL"], firepower: 70, consistency: 84, support: 88, igl: 94 }
    ]
  },

  {
    team: "Vitality",
    year: "2025",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "ropz", roles: ["Rifler"], firepower: 96, consistency: 97 },
      { name: "flameZ", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "mezii", roles: ["Support"], firepower: 82, consistency: 88, support: 92 },
      { name: "apEX", roles: ["IGL"], firepower: 82, consistency: 87, support: 88, igl: 97 }
    ]
  },

//finalists

  {
  team: "Ninjas in Pyjamas",
  year: "2013",
  players: [
    { name: "Xizt", roles: ["IGL"], firepower: 76, consistency: 88, support: 88, igl: 90 },
    { name: "f0rest", roles: ["Rifler"], firepower: 96, consistency: 95 },
    { name: "GeT_RiGhT", roles: ["Support", "Rifler"], firepower: 97, consistency: 99, support: 99 },
    { name: "friberg", roles: ["Rifler"], firepower: 85, consistency: 85 },
    { name: "Fifflaren", roles: ["AWPer", "Support"], firepower: 74, consistency: 81, support: 89 }
    ]
  },

  {
    team: "Fnatic",
    year: "2014",
    players: [
      { name: "pronax", roles: ["IGL"], firepower: 71, consistency: 84, support: 88, igl: 94 },
      { name: "JW", roles: ["AWPer"], firepower: 95, consistency: 88 },
      { name: "flusha", roles: ["Rifler"], firepower: 89, consistency: 93, support: 94 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 87, consistency: 94, support: 98 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 95, consistency: 92 }
    ]
  },

  {
    team: "Ninjas in Pyjamas",
    year: "2015",
    players: [
      { name: "Xizt", roles: ["IGL", "Support"], firepower: 75, consistency: 87, support: 89, igl: 90 },
      { name: "f0rest", roles: ["Rifler"], firepower: 95, consistency: 94 },
      { name: "GeT_RiGhT", roles: ["Rifler"], firepower: 93, consistency: 96, support: 98 },
      { name: "friberg", roles: ["Rifler"], firepower: 82, consistency: 83 },
      { name: "allu", roles: ["AWPer"], firepower: 88, consistency: 86 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2015",
    players: [
      { name: "Zeus", roles: ["IGL"], firepower: 66, consistency: 84, support: 89, igl: 95 },
      { name: "Guardian", roles: ["AWPer"], firepower: 97, consistency: 95 },
      { name: "flamie", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "Edward", roles: ["Rifler"], firepower: 82, consistency: 88, support: 92 },
      { name: "seized", roles: ["Support"], firepower: 85, consistency: 86 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2016",
    players: [
      { name: "Zeus", roles: ["IGL"], firepower: 66, consistency: 84, support: 89, igl: 95 },
      { name: "Guardian", roles: ["AWPer"], firepower: 97, consistency: 95 },
      { name: "flamie", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "Edward", roles: ["Support"], firepower: 82, consistency: 88, support: 92 },
      { name: "seized", roles: ["Rifler", "IGL"], firepower: 85, consistency: 86 },
      { name: "s1mple", roles: ["Rifler", "AWPer"], firepower: 99, consistency: 94 },
    ]
  },

  {
    team: "Team Liquid",
    year: "2016",
    players: [
      { name: "s1mple", roles: ["Rifler", "AWPer"], firepower: 99, consistency: 94 },
      { name: "EliGE", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "nitr0", roles: ["IGL"], firepower: 84, consistency: 84, support: 84, igl: 88 },
      { name: "jdm64", roles: ["AWPer"], firepower: 85, consistency: 82 },
      { name: "Hiko", roles: ["Support"], firepower: 80, consistency: 90, support: 94 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2017",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 80, consistency: 85, support: 90, igl: 91 },
      { name: "NEO", roles: ["Rifler"], firepower: 86, consistency: 88 },
      { name: "pashaBiceps", roles: ["Rifler"], firepower: 87, consistency: 84 },
      { name: "Snax", roles: ["Rifler", "AWPer"], firepower: 92, consistency: 90 },
      { name: "byali", roles: ["Rifler"], firepower: 85, consistency: 83 }
    ]
  },

  {
    team: "Immortals",
    year: "2017",
    players: [
      { name: "steel", roles: ["IGL", "Support"], firepower: 78, consistency: 84, support: 88, igl: 86 },
      { name: "HEN1", roles: ["AWPer"], firepower: 91, consistency: 87 },
      { name: "LUCAS1", roles: ["Rifler", "Support"], firepower: 83, consistency: 84, support: 86 },
      { name: "boltz", roles: ["Rifler"], firepower: 88, consistency: 87 },
      { name: "kNgV-", roles: ["Rifler", "AWPer"], firepower: 90, consistency: 84 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2018",
    players: [
      { name: "karrigan", roles: ["IGL"], firepower: 72, consistency: 84, support: 92, igl: 99 },
      { name: "NiKo", roles: ["Rifler", "IGL"], firepower: 99, consistency: 95, igl: 88 },
      { name: "rain", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "GuardiaN", roles: ["AWPer"], firepower: 95, consistency: 92 },
      { name: "olofmeister", roles: ["Support", "Rifler"], firepower: 89, consistency: 92, support: 88 }
    ]
  },

  {
    team: "ENCE",
    year: "2019",
    players: [
      { name: "allu", roles: ["AWPer", "IGL"], firepower: 91, consistency: 89, igl: 67 },
      { name: "sergej", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "Aerial", roles: ["Rifler"], firepower: 84, consistency: 83 },
      { name: "xseveN", roles: ["Support"], firepower: 76, consistency: 84, support: 92 },
      { name: "Aleksib", roles: ["IGL"], firepower: 72, consistency: 85, support: 89, igl: 94 },
      { name: "sunNy", roles: ["Rifler"], firepower: 89, consistency: 83 }
    ]
  },

  {
    team: "AVANGAR",
    year: "2019",
    players: [
      { name: "Jame", roles: ["IGL", "AWPer"], firepower: 90, consistency: 95, support: 85, igl: 95 },
      { name: "qikert", roles: ["Rifler", "Support"], firepower: 85, consistency: 86, support: 88 },
      { name: "buster", roles: ["Rifler"], firepower: 87, consistency: 88 },
      { name: "SANJI", roles: ["Support"], firepower: 70, consistency: 82, support: 98 },
      { name: "AdreN", roles: ["Rifler"], firepower: 88, consistency: 86 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2021",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 100, consistency: 97 },
      { name: "huNter-", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "AmaNEk", roles: ["Support"], firepower: 75, consistency: 85, support: 91 },
      { name: "JaCkz", roles: ["Rifler"], firepower: 82, consistency: 82 },
      { name: "nexa", roles: ["IGL", "Support"], firepower: 78, consistency: 84, support: 89, igl: 88 }
    ]
  },

  {
    team: "Heroic",
    year: "2022",
    players: [
      { name: "cadiaN", roles: ["IGL", "AWPer"], firepower: 89, consistency: 91, support: 86, igl: 95 },
      { name: "stavn", roles: ["Rifler"], firepower: 93, consistency: 90 },
      { name: "jabbi", roles: ["Rifler"], firepower: 88, consistency: 86 },
      { name: "TeSeS", roles: ["Support", "Rifler"], firepower: 86, consistency: 87, support: 84 },
      { name: "sjuush", roles: ["Support"], firepower: 80, consistency: 89, support: 94 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2022",
    players: [
      { name: "s1mple", roles: ["AWPer"], firepower: 100, consistency: 99 },
      { name: "electroNic", roles: ["Rifler", "IGL"], firepower: 97, consistency: 95, igl: 89 },
      { name: "b1t", roles: ["Rifler"], firepower: 94, consistency: 93, support: 80 },
      { name: "Perfecto", roles: ["Support"], firepower: 82, consistency: 91, support: 98 },
      { name: "Boombl4", roles: ["IGL"], firepower: 78, consistency: 84, support: 86, igl: 93 },
      { name: "sdy", roles: ["Rifler"], firepower: 84, consistency: 93, support: 80 },
    ]
  },

  {
    team: "GamerLegion",
    year: "2023",
    players: [
      { name: "acoR", roles: ["AWPer"], firepower: 88, consistency: 85 },
      { name: "iM", roles: ["Rifler"], firepower: 96, consistency: 89 },
      { name: "Keoz", roles: ["Support"], firepower: 78, consistency: 82, support: 88 },
      { name: "isak", roles: ["Rifler"], firepower: 84, consistency: 84 },
      { name: "siuhy", roles: ["IGL"], firepower: 78, consistency: 86, support: 88, igl: 92 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2024",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 93, consistency: 92 },
      { name: "ropz", roles: ["Rifler"], firepower: 95, consistency: 96 },
      { name: "frozen", roles: ["Rifler"], firepower: 94, consistency: 93 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 88, consistency: 88, support: 76 },
      { name: "karrigan", roles: ["IGL"], firepower: 70, consistency: 82, support: 92, igl: 98 }
      ]
  },

  {
    team: "The MongolZ",
    year: "2025",
    players: [
      { name: "910", roles: ["AWPer"], firepower: 91, consistency: 88 },
      { name: "Senzu", roles: ["Rifler", "AWPer"], firepower: 95, consistency: 92 },
      { name: "Techno", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "mzinho", roles: ["Support", "Rifler"], firepower: 85, consistency: 87, support: 90 },
      { name: "bLitz", roles: ["IGL"], firepower: 82, consistency: 87, support: 88, igl: 92 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2025",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 88, consistency: 82 },
      { name: "s1mple", roles: ["AWPer"], firepower: 77, consistency: 70 },
      { name: "EliGE", roles: ["Rifler"], firepower: 95, consistency: 91 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 95, consistency: 91 },
      { name: "frozen", roles: ["Rifler"], firepower: 94, consistency: 93 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 87, consistency: 86, support: 76 },
      { name: "jcobbb", roles: ["Rifler", "Support"], firepower: 84, consistency: 91 },
      { name: "karrigan", roles: ["IGL"], firepower: 68, consistency: 80, support: 91, igl: 97 }
    ]
  },
];
