const teamYears = [
  {
    team: "Fnatic",
    year: "2013",
    players: [
      { name: "JW", roles: ["AWPer"], firepower: 92, consistency: 86 },
      { name: "flusha", roles: ["Rifler"], firepower: 95, consistency: 95 },
      { name: "pronax", roles: ["IGL"], firepower: 60, consistency: 90, support: 88, igl: 93 },
      { name: "schneider", roles: ["Rifler"], firepower: 90, consistency: 88 },
      { name: "Devilwalk", roles: ["Support"], firepower: 83, consistency: 87, support: 90, igl: 30 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2014",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 82, consistency: 86, support: 88, igl: 90 },
      { name: "NEO", roles: ["Rifler"], firepower: 95, consistency: 90, igl: 40 },
      { name: "pashaBiceps", roles: ["AWPer"], firepower: 90, consistency: 84  },
      { name: "Snax", roles: ["Rifler"], firepower: 93, consistency: 89 },
      { name: "byali", roles: ["Rifler"], firepower: 90, consistency: 84 }
    ]
  },

  {
    team: "Ninjas in Pyjamas",
    year: "2014",
    players: [
      { name: "GeT_RiGhT", roles: ["Rifler"], firepower: 96, consistency: 96 },
      { name: "f0rest", roles: ["Rifler"], firepower: 95, consistency: 94 },
      { name: "Xizt", roles: ["IGL"], firepower: 82, consistency: 87, support: 86, igl: 91 },
      { name: "friberg", roles: ["Rifler"], firepower: 88, consistency: 89 },
      { name: "Fifflaren", roles: ["Support", "AWPer"], firepower: 75, consistency: 80, support: 90, igl: 40 }
    ]
  },

  {
    team: "Team LDLC",
    year: "2014",
    players: [
      { name: "Happy", roles: ["IGL"], firepower: 90, consistency: 91, support: 82, igl: 91 },
      { name: "shox", roles: ["Rifler"], firepower: 94, consistency: 90 },
      { name: "NBK-", roles: ["Support"], firepower: 89, consistency: 86, support: 92, igl: 40 },
      { name: "SmithZz", roles: ["AWPer"], firepower: 84, consistency: 82 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 88, consistency: 84 }
    ]
  },

  {
    team: "Fnatic",
    year: "2015",
    players: [
      { name: "olofmeister", roles: ["Rifler"], firepower: 99, consistency: 96 },
      { name: "JW", roles: ["AWPer"], firepower: 94, consistency: 88 },
      { name: "flusha", roles: ["Rifler"], firepower: 93, consistency: 95 },
      { name: "KRIMZ", roles: ["Support"], firepower: 90, consistency: 94, support: 98 },
      { name: "pronax", roles: ["IGL"], firepower: 70, consistency: 84, support: 89, igl: 95 }
    ]
  },

  {
    team: "Team EnVyUs",
    year: "2015",
    players: [
      { name: "kennyS", roles: ["AWPer"], firepower: 99, consistency: 90 },
      { name: "apEX", roles: ["Rifler"], firepower: 90, consistency: 84 },
      { name: "NBK-", roles: ["Support"], firepower: 88, consistency: 86, support: 93, igl: 30 },
      { name: "Happy", roles: ["IGL"], firepower: 88, consistency: 84, support: 80, igl: 90 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 87, consistency: 84 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2015",
    players: [
      { name: "GuardiaN", roles: ["AWPer"], firepower: 99, consistency: 93 },
      { name: "Edward", roles: ["Rifler"], firepower: 85, consistency: 80 },
      { name: "flamie", roles: ["Rifler"], firepower: 90, consistency: 89 },
      { name: "seized", roles: ["Support"], firepower: 84, consistency: 88, support: 90, igl: 40 },
      { name: "Zeus", roles: ["IGL"], firepower: 70, consistency: 82, support: 88, igl: 93 }
    ]
  },

  {
    team: "Luminosity Gaming",
    year: "2016",
    players: [
      { name: "coldzera", roles: ["Rifler"], firepower: 99, consistency: 97 },
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 97, consistency: 91, support: 86, igl: 96 },
      { name: "fer", roles: ["Rifler"], firepower: 93, consistency: 88 },
      { name: "TACO", roles: ["Support"], firepower: 78, consistency: 84, support: 96 },
      { name: "fnx", roles: ["Rifler"], firepower:90, consistency: 86 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2016",
    players: [
      { name: "coldzera", roles: ["Rifler"], firepower: 99, consistency: 97 },
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 97, consistency: 91, support: 86, igl: 96 },
      { name: "fer", roles: ["Rifler"], firepower: 93, consistency: 88 },
      { name: "TACO", roles: ["Support"], firepower: 78, consistency: 84, support: 96 },
      { name: "fnx", roles: ["Rifler"], firepower:90, consistency: 86 }
    ]
  },

  {
    team: "Astralis",
    year: "2017",
    players: [
      { name: "device", roles: ["AWPer"], firepower: 95, consistency: 98 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 90, consistency: 91 },
      { name: "Xyp9x", roles: ["Support"], firepower: 86, consistency: 94, support: 99 },
      { name: "gla1ve", roles: ["IGL"], firepower: 88, consistency: 90, support: 93, igl: 99 },
      { name: "Kjaerbye", roles: ["Rifler"], firepower: 92, consistency: 89 }
    ]
  },

  {
    team: "Gambit",
    year: "2017",
    players: [
      { name: "AdreN", roles: ["Rifler"], firepower: 92, consistency: 88 },
      { name: "HObbit", roles: ["Rifler"], firepower: 90, consistency: 86 },
      { name: "mou", roles: ["AWPer"], firepower: 87, consistency: 84 },
      { name: "Dosia", roles: ["Support"], firepower: 82, consistency: 84, support: 88 },
      { name: "Zeus", roles: ["IGL"], firepower: 70, consistency: 82, support: 88, igl: 93 }
    ]
  },

  {
    team: "Cloud9",
    year: "2018",
    players: [
      { name: "Skadoodle", roles: ["AWPer"], firepower: 90, consistency: 85 },
      { name: "Stewie2K", roles: ["Rifler"], firepower: 91, consistency: 84, igl: 20 },
      { name: "tarik", roles: ["IGL"], firepower: 89, consistency: 86, support: 84, igl: 88 },
      { name: "autimatic", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "RUSH", roles: ["Support"], firepower: 86, consistency: 88, support: 94 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2018",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 98, consistency: 94 },
      { name: "rain", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "GuardiaN", roles: ["AWPer"], firepower: 94, consistency: 90, support: 65 },
      { name: "karrigan", roles: ["IGL"], firepower: 70, consistency: 81, support: 65, igl: 97 },
      { name: "olofmeister", roles: ["Support"], firepower: 87, consistency: 87, support: 87 }
    ]
  },

  {
    team: "Astralis",
    year: "2018",
    players: [
      { name: "device", roles: ["AWPer"], firepower: 97, consistency: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 92, consistency: 92 },
      { name: "Xyp9x", roles: ["Support"], firepower: 91, consistency: 95, support: 100 },
      { name: "gla1ve", roles: ["IGL"], firepower: 90, consistency: 92, support: 95, igl: 100 },
      { name: "Magisk", roles: ["Rifler"], firepower: 94, consistency: 93 }
    ]
  },

  {
    team: "Team Liquid",
    year: "2019",
    players: [
      { name: "EliGE", roles: ["Rifler"], firepower: 97, consistency: 94 },
      { name: "NAF", roles: ["Rifler", "Support"], firepower: 94, consistency: 95, support: 84 },
      { name: "Twistzz", roles: ["Rifler", "Support"], firepower: 93, consistency: 91, support: 78 },
      { name: "nitr0", roles: ["IGL", "AWPer"], firepower: 86, consistency: 86, support: 88, igl: 89 },
      { name: "Stewie2K", roles: ["Rifler"], firepower: 88, consistency: 84, igl: 20 }
    ]
  },

  {
    team: "Astralis",
    year: "2019",
    players: [
      { name: "device", roles: ["AWPer"], firepower: 98, consistency: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 92, consistency: 92 },
      { name: "Xyp9x", roles: ["Support"], firepower: 91, consistency: 95, support: 100 },
      { name: "gla1ve", roles: ["IGL"], firepower: 89, consistency: 92, support: 95, igl: 100 },
      { name: "Magisk", roles: ["Rifler"], firepower: 94, consistency: 93 }
    ]
  },

  {
    team: "ENCE",
    year: "2019",
    players: [
      { name: "allu", roles: ["AWPer"], firepower: 88, consistency: 86 },
      { name: "Aerial", roles: ["Rifler"], firepower: 85, consistency: 84 },
      { name: "sergej", roles: ["Rifler"], firepower: 93, consistency: 86 },
      { name: "xseveN", roles: ["Support"], firepower: 81, consistency: 84, support: 92 },
      { name: "Aleksib", roles: ["IGL"], firepower: 78, consistency: 85, support: 90, igl: 90 }
    ]
  },

  {
    team: "AVANGAR",
    year: "2019",
    players: [
      { name: "Jame", roles: ["IGL", "AWPer"], firepower: 88, consistency: 91, support: 80, igl: 94 },
      { name: "buster", roles: ["Rifler"], firepower: 84, consistency: 84 },
      { name: "qikert", roles: ["Rifler"], firepower: 85, consistency: 84, igl: 35 },
      { name: "SANJI", roles: ["Support"], firepower: 70, consistency: 82, support: 96 },
      { name: "AdreN", roles: ["Rifler"], firepower: 87, consistency: 84 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2021",
    players: [
      { name: "s1mple", roles: ["AWPer"], firepower: 100, consistency: 99 },
      { name: "electroNic", roles: ["Rifler"], firepower: 95, consistency: 93 },
      { name: "b1t", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "Perfecto", roles: ["Support"], firepower: 88, consistency: 91, support: 98 },
      { name: "Boombl4", roles: ["IGL"], firepower: 72, consistency: 84, support: 90, igl: 93 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2021",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 100, consistency: 95, igl: 40 },
      { name: "huNter-", roles: ["Rifler"], firepower: 89, consistency: 89 },
      { name: "nexa", roles: ["IGL", "Support"], firepower: 82, consistency: 86, support: 88, igl: 90 },
      { name: "AmaNEk", roles: ["AWPer"], firepower: 89, consistency: 86 },
      { name: "JaCkz", roles: ["Rifler"], firepower: 87, consistency: 82 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2022",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 92, consistency: 92 },
      { name: "ropz", roles: ["Rifler"], firepower: 94, consistency: 96 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 92, consistency: 91 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 91, consistency: 93, support: 70 },
      { name: "karrigan", roles: ["IGL"], firepower: 71, consistency: 84, support: 92, igl: 99 }
    ]
  },

  {
    team: "Outsiders",
    year: "2022",
    players: [
      { name: "Jame", roles: ["IGL", "AWPer"], firepower: 90, consistency: 93, support: 82, igl: 95 },
      { name: "FL1T", roles: ["Rifler"], firepower: 89, consistency: 87 },
      { name: "fame", roles: ["Rifler"], firepower: 92, consistency: 86 },
      { name: "n0rb3r7", roles: ["Rifler"], firepower: 87, consistency: 82 },
      { name: "Qikert", roles: ["Support"], firepower: 80, consistency: 84, support: 90, igl: 45 }
    ]
  },

  {
    team: "Heroic",
    year: "2022",
    players: [
      { name: "cadiaN", roles: ["IGL", "AWPer"], firepower: 88, consistency: 89, support: 84, igl: 96 },
      { name: "stavn", roles: ["Rifler"], firepower: 88, consistency: 92 },
      { name: "TeSeS", roles: ["Rifler"], firepower: 86, consistency: 86 },
      { name: "sjuush", roles: ["Support"], firepower: 82, consistency: 87, support: 94 },
      { name: "jabbi", roles: ["Rifler"], firepower: 86, consistency: 84 }
    ]
  },

  {
    team: "Team Vitality",
    year: "2023",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "apEX", roles: ["IGL"], firepower: 77, consistency: 84, support: 90, igl: 95 },
      { name: "Magisk", roles: ["Rifler", "Support"], firepower: 90, consistency: 92, support: 90, igl: 40 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 88, consistency: 87 },
      { name: "Spinx", roles: ["Rifler"], firepower: 93, consistency: 92 }
    ]
  },

  {
    team: "GamerLegion",
    year: "2023",
    players: [
      { name: "iM", roles: ["Rifler"], firepower: 92, consistency: 84, igl: 35 },
      { name: "siuhy", roles: ["IGL"], firepower: 80, consistency: 86, support: 66, igl: 90 },
      { name: "acoR", roles: ["AWPer"], firepower: 87, consistency: 84 },
      { name: "Keoz", roles: ["Rifler"], firepower: 80, consistency: 82 },
      { name: "isak", roles: ["Support"], firepower: 78, consistency: 84, support: 92 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2024",
    players: [
      { name: "w0nderful", roles: ["AWPer"], firepower: 91, consistency: 91 },
      { name: "b1t", roles: ["Support"], firepower: 92, consistency: 90, support: 80 },
      { name: "iM", roles: ["Rifler"], firepower: 88, consistency: 86, igl: 30 },
      { name: "jL", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "Aleksib", roles: ["IGL"], firepower: 78, consistency: 86, support: 90, igl: 96 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2024",
    players: [
      { name: "donk", roles: ["Rifler"], firepower: 100, consistency: 99 },
      { name: "sh1ro", roles: ["AWPer"], firepower: 96, consistency: 97 },
      { name: "zont1x", roles: ["Rifler"], firepower: 88, consistency: 87 },
      { name: "magixx", roles: ["Support"], firepower: 86, consistency: 86, support: 92 },
      { name: "chopper", roles: ["IGL"], firepower: 70, consistency: 84, support: 88, igl: 94 }
    ]
  },

  {
    team: "Team Vitality",
    year: "2025",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "ropz", roles: ["Rifler"], firepower: 95, consistency: 96 },
      { name: "flameZ", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "mezii", roles: ["Support"], firepower: 90, consistency: 90, support: 94, igl: 45 },
      { name: "apEX", roles: ["IGL"], firepower: 79, consistency: 84, support: 90, igl: 100 }
    ]
  },

  {
    team: "The MongolZ",
    year: "2025",
    players: [
      { name: "910", roles: ["AWPer"], firepower: 90, consistency: 86 },
      { name: "bLitz", roles: ["IGL"], firepower: 84, consistency: 86, support: 88, igl: 90 },
      { name: "Techno4K", roles: ["Support"], firepower: 89, consistency: 84, support: 82 },
      { name: "mzinho", roles: ["Rifler"], firepower: 90, consistency: 86 },
      { name: "Senzu", roles: ["Rifler", "AWPer"], firepower: 90, consistency: 88 }
    ]
  },

    {
    team: "FaZe Clan",
    year: "2023",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 94, consistency: 93 },
      { name: "ropz", roles: ["Rifler"], firepower: 96, consistency: 97 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 93, consistency: 92 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 89, consistency: 89, support: 77 },
      { name: "karrigan", roles: ["IGL"], firepower: 69, consistency: 83, support: 92, igl: 99 }
    ]
  },

  {
    team: "ENCE",
    year: "2023",
    players: [
      { name: "SunPayus", roles: ["AWPer"], firepower: 94, consistency: 92 },
      { name: "NertZ", roles: ["Rifler"], firepower: 92, consistency: 89 },
      { name: "dycha", roles: ["Rifler"], firepower: 88, consistency: 87 },
      { name: "Maden", roles: ["Support", "Rifler"], firepower: 84, consistency: 84, support: 82 },
      { name: "Snappi", roles: ["IGL"], firepower: 68, consistency: 80, support: 88, igl: 92 }
    ]
  },

  {
    team: "Cloud9",
    year: "2022",
    players: [
      { name: "sh1ro", roles: ["AWPer"], firepower: 97, consistency: 96 },
      { name: "Ax1Le", roles: ["Rifler"], firepower: 91, consistency: 91 },
      { name: "HObbit", roles: ["Rifler"], firepower: 88, consistency: 88, support: 84 },
      { name: "interz", roles: ["Support"], firepower: 82, consistency: 90, support: 96 },
      { name: "nafany", roles: ["IGL", "Rifler"], firepower: 84, consistency: 89, support: 84, igl: 82 }
    ]
  },

  {
    team: "MOUZ",
    year: "2023",
    players: [
      { name: "torzsi", roles: ["AWPer"], firepower: 90, consistency: 88 },
      { name: "frozen", roles: ["Rifler"], firepower: 95, consistency: 94 },
      { name: "xertioN", roles: ["Rifler"], firepower: 90, consistency: 87 },
      { name: "Jimpphat", roles: ["Support", "Rifler"], firepower: 86, consistency: 89, support: 88 },
      { name: "siuhy", roles: ["IGL"], firepower: 78, consistency: 86, support: 88, igl: 92 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2024",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 88, consistency: 92 },
      { name: "ropz", roles: ["Rifler"], firepower: 95, consistency: 95 },
      { name: "frozen", roles: ["Rifler"], firepower: 94, consistency: 93 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 91, consistency: 88, support: 76 },
      { name: "karrigan", roles: ["IGL"], firepower: 67, consistency: 82, support: 92, igl: 96 }
    ]
  },

  {
    team: "MOUZ",
    year: "2024",
    players: [
      { name: "torzsi", roles: ["AWPer"], firepower: 91, consistency: 89 },
      { name: "xertioN", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "Brollan", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "Jimpphat", roles: ["Support", "Rifler"], firepower: 87, consistency: 91, support: 90 },
      { name: "siuhy", roles: ["IGL"], firepower: 78, consistency: 87, support: 89, igl: 94 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2024",
    players: [
      { name: "m0NESY", roles: ["AWPer"], firepower: 98, consistency: 96 },
      { name: "NiKo", roles: ["Rifler"], firepower: 97, consistency: 94 },
      { name: "huNter-", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "malbsMd", roles: ["Rifler", "Support"], firepower: 90, consistency: 87, support: 78 },
      { name: "Snax", roles: ["IGL"], firepower: 74, consistency: 82, support: 86, igl: 87 }
    ]
  },

  {
    team: "Team Falcons",
    year: "2025",
    players: [
      { name: "m0NESY", roles: ["AWPer"], firepower: 98, consistency: 96 },
      { name: "NiKo", roles: ["Rifler"], firepower: 96, consistency: 94 },
      { name: "Magisk", roles: ["Rifler"], firepower: 87, consistency: 91, support: 90 },
      { name: "kyxsan", roles: ["IGL"], firepower: 79, consistency: 84, support: 88, igl: 90 },
      { name: "TeSeS", roles: ["Rifler", "Support"], firepower: 89, consistency: 87, support: 84 }
    ]
  },

  {
    team: "MOUZ",
    year: "2025",
    players: [
      { name: "torzsi", roles: ["AWPer"], firepower: 91, consistency: 90 },
      { name: "xertioN", roles: ["Rifler"], firepower: 91, consistency: 89, igl: 68 },
      { name: "Brollan", roles: ["Rifler"], firepower: 90, consistency: 89 },
      { name: "Jimpphat", roles: ["Support", "Rifler"], firepower: 88, consistency: 92, support: 91 },
      { name: "siuhy", roles: ["IGL"], firepower: 78, consistency: 87, support: 89, igl: 94 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2025",
    players: [
      { name: "donk", roles: ["Rifler"], firepower: 100, consistency: 98 },
      { name: "sh1ro", roles: ["AWPer"], firepower: 97, consistency: 97 },
      { name: "zweih", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "magixx", roles: ["IGL"], firepower: 85, consistency: 87, support: 92, igl: 73 },
      { name: "tn1r", roles: ["Rifler", "Support"], firepower: 88, consistency: 84, support: 88 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2025",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 82, consistency: 91 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 94, consistency: 95 },
      { name: "frozen", roles: ["Rifler"], firepower: 94, consistency: 93 },
      { name: "jcobbb", roles: ["Rifler", "Support"], firepower: 84, consistency: 79, support: 76 },
      { name: "karrigan", roles: ["IGL"], firepower: 65, consistency: 81, support: 91, igl: 94 }
    ]
  }
];
