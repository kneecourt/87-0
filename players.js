const teamYears = [
  {
    team: "Fnatic",
    year: "2013",
    players: [
      { name: "JW", roles: ["AWPer"], firepower: 92, consistency: 86, support: 65, igl: 35, chemistry: 88 },
      { name: "flusha", roles: ["Rifler"], firepower: 91, consistency: 92, support: 82, igl: 70, chemistry: 92 },
      { name: "pronax", roles: ["IGL"], firepower: 76, consistency: 84, support: 88, igl: 94, chemistry: 91 },
      { name: "MODDII", roles: ["Rifler"], firepower: 86, consistency: 82, support: 72, igl: 35, chemistry: 84 },
      { name: "Devilwalk", roles: ["Support"], firepower: 78, consistency: 80, support: 90, igl: 45, chemistry: 86 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2014",
    players: [
      { name: "TaZ", roles: ["IGL"], firepower: 82, consistency: 86, support: 88, igl: 90, chemistry: 96 },
      { name: "NEO", roles: ["Rifler"], firepower: 88, consistency: 90, support: 85, igl: 78, chemistry: 96 },
      { name: "pashaBiceps", roles: ["AWPer"], firepower: 90, consistency: 84, support: 70, igl: 35, chemistry: 94 },
      { name: "Snax", roles: ["Rifler"], firepower: 91, consistency: 89, support: 82, igl: 55, chemistry: 95 },
      { name: "byali", roles: ["Rifler"], firepower: 86, consistency: 84, support: 76, igl: 35, chemistry: 92 }
    ]
  },

  {
    team: "Ninjas in Pyjamas",
    year: "2014",
    players: [
      { name: "GeT_RiGhT", roles: ["Rifler"], firepower: 96, consistency: 96, support: 82, igl: 45, chemistry: 98 },
      { name: "f0rest", roles: ["Rifler"], firepower: 95, consistency: 94, support: 78, igl: 45, chemistry: 97 },
      { name: "Xizt", roles: ["IGL"], firepower: 82, consistency: 87, support: 86, igl: 91, chemistry: 96 },
      { name: "friberg", roles: ["Rifler"], firepower: 86, consistency: 84, support: 80, igl: 35, chemistry: 94 },
      { name: "Fifflaren", roles: ["Support", "AWPer"], firepower: 75, consistency: 80, support: 90, igl: 40, chemistry: 92 }
    ]
  },

  {
    team: "Team LDLC",
    year: "2014",
    players: [
      { name: "Happy", roles: ["IGL"], firepower: 89, consistency: 87, support: 82, igl: 91, chemistry: 90 },
      { name: "shox", roles: ["Rifler"], firepower: 94, consistency: 90, support: 76, igl: 60, chemistry: 90 },
      { name: "NBK-", roles: ["Support"], firepower: 84, consistency: 86, support: 92, igl: 65, chemistry: 89 },
      { name: "SmithZz", roles: ["AWPer"], firepower: 82, consistency: 82, support: 80, igl: 40, chemistry: 86 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 85, consistency: 84, support: 86, igl: 45, chemistry: 88 }
    ]
  },

  {
    team: "Fnatic",
    year: "2015",
    players: [
      { name: "olofmeister", roles: ["Rifler"], firepower: 99, consistency: 96, support: 84, igl: 40, chemistry: 97 },
      { name: "JW", roles: ["AWPer"], firepower: 94, consistency: 88, support: 68, igl: 35, chemistry: 94 },
      { name: "flusha", roles: ["Rifler"], firepower: 93, consistency: 95, support: 86, igl: 75, chemistry: 97 },
      { name: "KRIMZ", roles: ["Support"], firepower: 88, consistency: 94, support: 98, igl: 50, chemistry: 98 },
      { name: "pronax", roles: ["IGL"], firepower: 76, consistency: 84, support: 89, igl: 95, chemistry: 95 }
    ]
  },

  {
    team: "Team EnVyUs",
    year: "2015",
    players: [
      { name: "kennyS", roles: ["AWPer"], firepower: 98, consistency: 90, support: 60, igl: 35, chemistry: 88 },
      { name: "apEX", roles: ["Rifler"], firepower: 90, consistency: 84, support: 78, igl: 60, chemistry: 88 },
      { name: "NBK-", roles: ["Support"], firepower: 84, consistency: 86, support: 93, igl: 65, chemistry: 89 },
      { name: "Happy", roles: ["IGL"], firepower: 88, consistency: 84, support: 80, igl: 90, chemistry: 85 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 84, consistency: 84, support: 87, igl: 45, chemistry: 87 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2015",
    players: [
      { name: "GuardiaN", roles: ["AWPer"], firepower: 97, consistency: 93, support: 65, igl: 35, chemistry: 88 },
      { name: "Edward", roles: ["Rifler"], firepower: 86, consistency: 84, support: 82, igl: 40, chemistry: 86 },
      { name: "flamie", roles: ["Rifler"], firepower: 89, consistency: 85, support: 76, igl: 35, chemistry: 84 },
      { name: "seized", roles: ["Support"], firepower: 82, consistency: 84, support: 90, igl: 60, chemistry: 85 },
      { name: "Zeus", roles: ["IGL"], firepower: 76, consistency: 82, support: 88, igl: 92, chemistry: 88 }
    ]
  },

  {
    team: "Luminosity Gaming",
    year: "2016",
    players: [
      { name: "coldzera", roles: ["Rifler"], firepower: 98, consistency: 97, support: 82, igl: 45, chemistry: 96 },
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 91, consistency: 91, support: 86, igl: 96, chemistry: 97 },
      { name: "fer", roles: ["Rifler"], firepower: 93, consistency: 88, support: 78, igl: 40, chemistry: 95 },
      { name: "TACO", roles: ["Support"], firepower: 78, consistency: 84, support: 96, igl: 35, chemistry: 95 },
      { name: "fnx", roles: ["Rifler"], firepower: 88, consistency: 86, support: 82, igl: 40, chemistry: 94 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2016",
    players: [
      { name: "coldzera", roles: ["Rifler"], firepower: 99, consistency: 97, support: 82, igl: 45, chemistry: 96 },
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 92, consistency: 92, support: 86, igl: 97, chemistry: 97 },
      { name: "fer", roles: ["Rifler"], firepower: 94, consistency: 89, support: 78, igl: 40, chemistry: 95 },
      { name: "TACO", roles: ["Support"], firepower: 78, consistency: 84, support: 96, igl: 35, chemistry: 95 },
      { name: "fnx", roles: ["Rifler"], firepower: 88, consistency: 86, support: 82, igl: 40, chemistry: 94 }
    ]
  },

  {
    team: "Astralis",
    year: "2017",
    players: [
      { name: "device", roles: ["AWPer"], firepower: 96, consistency: 97, support: 78, igl: 45, chemistry: 96 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 90, consistency: 91, support: 84, igl: 50, chemistry: 96 },
      { name: "Xyp9x", roles: ["Support"], firepower: 84, consistency: 94, support: 99, igl: 55, chemistry: 97 },
      { name: "gla1ve", roles: ["IGL"], firepower: 81, consistency: 90, support: 93, igl: 99, chemistry: 98 },
      { name: "Kjaerbye", roles: ["Rifler"], firepower: 88, consistency: 84, support: 78, igl: 35, chemistry: 90 }
    ]
  },

  {
    team: "Gambit",
    year: "2017",
    players: [
      { name: "AdreN", roles: ["Rifler"], firepower: 92, consistency: 88, support: 80, igl: 45, chemistry: 88 },
      { name: "HObbit", roles: ["Rifler"], firepower: 89, consistency: 86, support: 78, igl: 35, chemistry: 86 },
      { name: "mou", roles: ["AWPer"], firepower: 86, consistency: 84, support: 70, igl: 35, chemistry: 84 },
      { name: "Dosia", roles: ["Support"], firepower: 82, consistency: 84, support: 88, igl: 45, chemistry: 86 },
      { name: "Zeus", roles: ["IGL"], firepower: 76, consistency: 82, support: 88, igl: 93, chemistry: 88 }
    ]
  },

  {
    team: "Cloud9",
    year: "2018",
    players: [
      { name: "Skadoodle", roles: ["AWPer"], firepower: 90, consistency: 86, support: 70, igl: 35, chemistry: 90 },
      { name: "Stewie2K", roles: ["Rifler"], firepower: 88, consistency: 84, support: 82, igl: 65, chemistry: 90 },
      { name: "tarik", roles: ["IGL"], firepower: 88, consistency: 86, support: 84, igl: 88, chemistry: 91 },
      { name: "autimatic", roles: ["Rifler"], firepower: 91, consistency: 90, support: 80, igl: 40, chemistry: 91 },
      { name: "RUSH", roles: ["Support"], firepower: 78, consistency: 84, support: 94, igl: 35, chemistry: 90 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2018",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 98, consistency: 94, support: 72, igl: 70, chemistry: 84 },
      { name: "rain", roles: ["Rifler"], firepower: 91, consistency: 88, support: 82, igl: 35, chemistry: 87 },
      { name: "GuardiaN", roles: ["AWPer"], firepower: 94, consistency: 90, support: 65, igl: 35, chemistry: 86 },
      { name: "karrigan", roles: ["IGL"], firepower: 76, consistency: 84, support: 92, igl: 97, chemistry: 90 },
      { name: "olofmeister", roles: ["Support"], firepower: 88, consistency: 88, support: 88, igl: 45, chemistry: 88 }
    ]
  },

  {
    team: "Astralis",
    year: "2018",
    players: [
      { name: "device", roles: ["AWPer"], firepower: 97, consistency: 99, support: 80, igl: 45, chemistry: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 91, consistency: 92, support: 86, igl: 50, chemistry: 99 },
      { name: "Xyp9x", roles: ["Support"], firepower: 85, consistency: 95, support: 100, igl: 55, chemistry: 100 },
      { name: "gla1ve", roles: ["IGL"], firepower: 82, consistency: 92, support: 95, igl: 100, chemistry: 100 },
      { name: "Magisk", roles: ["Rifler"], firepower: 92, consistency: 93, support: 88, igl: 45, chemistry: 99 }
    ]
  },

  {
    team: "Team Liquid",
    year: "2019",
    players: [
      { name: "EliGE", roles: ["Rifler"], firepower: 97, consistency: 94, support: 82, igl: 45, chemistry: 92 },
      { name: "NAF", roles: ["Rifler"], firepower: 94, consistency: 95, support: 84, igl: 45, chemistry: 92 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 93, consistency: 91, support: 78, igl: 35, chemistry: 91 },
      { name: "nitr0", roles: ["IGL", "AWPer"], firepower: 82, consistency: 86, support: 88, igl: 92, chemistry: 91 },
      { name: "Stewie2K", roles: ["Rifler"], firepower: 87, consistency: 84, support: 82, igl: 65, chemistry: 90 }
    ]
  },

  {
    team: "Astralis",
    year: "2019",
    players: [
      { name: "device", roles: ["AWPer"], firepower: 97, consistency: 99, support: 80, igl: 45, chemistry: 100 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 91, consistency: 92, support: 86, igl: 50, chemistry: 100 },
      { name: "Xyp9x", roles: ["Support"], firepower: 85, consistency: 95, support: 100, igl: 55, chemistry: 100 },
      { name: "gla1ve", roles: ["IGL"], firepower: 82, consistency: 92, support: 95, igl: 100, chemistry: 100 },
      { name: "Magisk", roles: ["Rifler"], firepower: 92, consistency: 93, support: 88, igl: 45, chemistry: 100 }
    ]
  },

  {
    team: "ENCE",
    year: "2019",
    players: [
      { name: "allu", roles: ["AWPer"], firepower: 88, consistency: 86, support: 70, igl: 65, chemistry: 88 },
      { name: "Aerial", roles: ["Rifler"], firepower: 85, consistency: 84, support: 78, igl: 35, chemistry: 87 },
      { name: "sergej", roles: ["Rifler"], firepower: 90, consistency: 86, support: 75, igl: 35, chemistry: 87 },
      { name: "xseveN", roles: ["Support"], firepower: 80, consistency: 84, support: 92, igl: 35, chemistry: 87 },
      { name: "Aleksib", roles: ["IGL"], firepower: 78, consistency: 85, support: 90, igl: 93, chemistry: 89 }
    ]
  },

  {
    team: "AVANGAR",
    year: "2019",
    players: [
      { name: "Jame", roles: ["IGL", "AWPer"], firepower: 89, consistency: 91, support: 80, igl: 94, chemistry: 90 },
      { name: "buster", roles: ["Rifler"], firepower: 84, consistency: 84, support: 78, igl: 35, chemistry: 86 },
      { name: "qikert", roles: ["Rifler"], firepower: 85, consistency: 84, support: 80, igl: 45, chemistry: 87 },
      { name: "SANJI", roles: ["Support"], firepower: 74, consistency: 82, support: 96, igl: 35, chemistry: 88 },
      { name: "AdreN", roles: ["Rifler"], firepower: 82, consistency: 84, support: 82, igl: 55, chemistry: 86 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2021",
    players: [
      { name: "s1mple", roles: ["AWPer"], firepower: 100, consistency: 98, support: 65, igl: 40, chemistry: 95 },
      { name: "electroNic", roles: ["Rifler"], firepower: 95, consistency: 93, support: 80, igl: 60, chemistry: 94 },
      { name: "b1t", roles: ["Rifler"], firepower: 92, consistency: 90, support: 78, igl: 35, chemistry: 93 },
      { name: "Perfecto", roles: ["Support"], firepower: 82, consistency: 91, support: 98, igl: 35, chemistry: 94 },
      { name: "Boombl4", roles: ["IGL"], firepower: 78, consistency: 84, support: 90, igl: 93, chemistry: 93 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2021",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 99, consistency: 95, support: 72, igl: 60, chemistry: 88 },
      { name: "huNter-", roles: ["Rifler"], firepower: 90, consistency: 89, support: 82, igl: 45, chemistry: 89 },
      { name: "nexa", roles: ["IGL"], firepower: 82, consistency: 86, support: 88, igl: 90, chemistry: 88 },
      { name: "AmaNEk", roles: ["AWPer"], firepower: 80, consistency: 82, support: 84, igl: 40, chemistry: 86 },
      { name: "JaCkz", roles: ["Rifler"], firepower: 82, consistency: 82, support: 84, igl: 35, chemistry: 88 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2022",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 92, consistency: 92, support: 72, igl: 35, chemistry: 95 },
      { name: "ropz", roles: ["Rifler"], firepower: 94, consistency: 96, support: 84, igl: 45, chemistry: 97 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 92, consistency: 91, support: 80, igl: 35, chemistry: 95 },
      { name: "rain", roles: ["Rifler"], firepower: 91, consistency: 88, support: 84, igl: 35, chemistry: 95 },
      { name: "karrigan", roles: ["IGL"], firepower: 76, consistency: 84, support: 92, igl: 99, chemistry: 98 }
    ]
  },

  {
    team: "Outsiders",
    year: "2022",
    players: [
      { name: "Jame", roles: ["IGL"], firepower: 90, consistency: 93, support: 82, igl: 96, chemistry: 94 },
      { name: "FL1T", roles: ["Rifler"], firepower: 87, consistency: 87, support: 82, igl: 35, chemistry: 90 },
      { name: "fame", roles: ["Rifler"], firepower: 86, consistency: 86, support: 80, igl: 35, chemistry: 90 },
      { name: "n0rb3r7", roles: ["Rifler"], firepower: 82, consistency: 82, support: 82, igl: 35, chemistry: 88 },
      { name: "Qikert", roles: ["Support"], firepower: 80, consistency: 84, support: 90, igl: 45, chemistry: 90 }
    ]
  },

  {
    team: "Heroic",
    year: "2022",
    players: [
      { name: "cadiaN", roles: ["IGL", "AWPer"], firepower: 88, consistency: 89, support: 84, igl: 96, chemistry: 95 },
      { name: "stavn", roles: ["Rifler"], firepower: 93, consistency: 92, support: 82, igl: 35, chemistry: 93 },
      { name: "TeSeS", roles: ["Rifler"], firepower: 86, consistency: 86, support: 84, igl: 35, chemistry: 92 },
      { name: "sjuush", roles: ["Support"], firepower: 82, consistency: 87, support: 94, igl: 35, chemistry: 92 },
      { name: "jabbi", roles: ["Rifler"], firepower: 86, consistency: 84, support: 80, igl: 35, chemistry: 90 }
    ]
  },

  {
    team: "Team Vitality",
    year: "2023",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99, support: 75, igl: 40, chemistry: 96 },
      { name: "apEX", roles: ["IGL"], firepower: 78, consistency: 84, support: 90, igl: 96, chemistry: 95 },
      { name: "Magisk", roles: ["Rifler"], firepower: 90, consistency: 92, support: 90, igl: 55, chemistry: 95 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 86, consistency: 87, support: 86, igl: 50, chemistry: 94 },
      { name: "Spinx", roles: ["Rifler"], firepower: 93, consistency: 92, support: 80, igl: 35, chemistry: 94 }
    ]
  },

  {
    team: "GamerLegion",
    year: "2023",
    players: [
      { name: "iM", roles: ["Rifler"], firepower: 92, consistency: 88, support: 78, igl: 35, chemistry: 88 },
      { name: "siuhy", roles: ["IGL"], firepower: 80, consistency: 86, support: 90, igl: 94, chemistry: 90 },
      { name: "acoR", roles: ["AWPer"], firepower: 84, consistency: 84, support: 70, igl: 35, chemistry: 86 },
      { name: "Keoz", roles: ["Rifler"], firepower: 80, consistency: 82, support: 84, igl: 35, chemistry: 86 },
      { name: "isak", roles: ["Support"], firepower: 78, consistency: 84, support: 92, igl: 35, chemistry: 86 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2024",
    players: [
      { name: "w0nderful", roles: ["AWPer"], firepower: 91, consistency: 91, support: 72, igl: 35, chemistry: 93 },
      { name: "b1t", roles: ["Rifler"], firepower: 92, consistency: 90, support: 80, igl: 35, chemistry: 93 },
      { name: "iM", roles: ["Rifler"], firepower: 88, consistency: 86, support: 78, igl: 35, chemistry: 91 },
      { name: "jL", roles: ["Rifler"], firepower: 91, consistency: 89, support: 84, igl: 35, chemistry: 94 },
      { name: "Aleksib", roles: ["IGL"], firepower: 78, consistency: 86, support: 90, igl: 95, chemistry: 94 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2024",
    players: [
      { name: "donk", roles: ["Rifler"], firepower: 100, consistency: 96, support: 78, igl: 35, chemistry: 94 },
      { name: "sh1ro", roles: ["AWPer"], firepower: 96, consistency: 97, support: 72, igl: 35, chemistry: 94 },
      { name: "zont1x", roles: ["Rifler"], firepower: 86, consistency: 87, support: 82, igl: 35, chemistry: 91 },
      { name: "magixx", roles: ["Support"], firepower: 82, consistency: 86, support: 92, igl: 35, chemistry: 91 },
      { name: "chopper", roles: ["IGL"], firepower: 78, consistency: 84, support: 88, igl: 93, chemistry: 92 }
    ]
  },

  {
    team: "Team Vitality",
    year: "2025",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99, support: 75, igl: 40, chemistry: 97 },
      { name: "ropz", roles: ["Rifler"], firepower: 95, consistency: 96, support: 84, igl: 45, chemistry: 96 },
      { name: "flameZ", roles: ["Rifler"], firepower: 91, consistency: 89, support: 82, igl: 35, chemistry: 94 },
      { name: "mezii", roles: ["Support"], firepower: 84, consistency: 88, support: 94, igl: 65, chemistry: 94 },
      { name: "apEX", roles: ["IGL"], firepower: 78, consistency: 84, support: 90, igl: 96, chemistry: 96 }
    ]
  },

  {
    team: "The MongolZ",
    year: "2025",
    players: [
      { name: "910", roles: ["AWPer"], firepower: 89, consistency: 88, support: 70, igl: 35, chemistry: 92 },
      { name: "bLitz", roles: ["IGL"], firepower: 84, consistency: 86, support: 88, igl: 91, chemistry: 93 },
      { name: "Techno4K", roles: ["Rifler"], firepower: 88, consistency: 87, support: 82, igl: 35, chemistry: 92 },
      { name: "mzinho", roles: ["Support"], firepower: 84, consistency: 86, support: 92, igl: 35, chemistry: 91 },
      { name: "Senzu", roles: ["Rifler", "AWPer"], firepower: 90, consistency: 88, support: 80, igl: 35, chemistry: 92 }
    ]
  }
];
