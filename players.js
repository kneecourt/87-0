const teamYears = [
  {
    team: "Fnatic",
    year: "2013",
    players: [
      { name: "pronax", roles: ["IGL"], firepower: 72, consistency: 85, support: 88, igl: 94 },
      { name: "JW", roles: ["AWPer"], firepower: 95, consistency: 88 },
      { name: "flusha", roles: ["Rifler"], firepower: 90, consistency: 94, support: 95 },
      { name: "schneider", roles: ["Rifler"], firepower: 92, consistency: 95 },
      { name: "Devilwalk", roles: ["Support", "Rifler"], firepower: 75, consistency: 82, support: 98 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2014",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 76, consistency: 88, support: 92, igl: 93 },
      { name: "pashaBiceps", roles: ["AWPer", "Rifler"], firepower: 89, consistency: 88 },
      { name: "NEO", roles: ["Rifler"], firepower: 90, consistency: 90 },
      { name: "Snax", roles: ["Rifler"], firepower: 92, consistency: 91 },
      { name: "byali", roles: ["Rifler"], firepower: 87, consistency: 84 }
    ]
  },

  {
    team: "Ninjas in Pyjamas",
    year: "2014",
    players: [
      { name: "Xizt", roles: ["IGL", "Support"], firepower: 72, consistency: 87, support: 88, igl: 90 },
      { name: "f0rest", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "GeT_RiGhT", roles: ["Rifler"], firepower: 94, consistency: 96, support: 97 },
      { name: "friberg", roles: ["Rifler"], firepower: 84, consistency: 84 },
      { name: "Fifflaren", roles: ["AWPer", "Support"], firepower: 71, consistency: 82, support: 90 },
      { name: "Maikelele", roles: ["AWPer"], firepower: 82, consistency: 82 }
    ]
  },

  {
    team: "LDLC",
    year: "2014",
    players: [
      { name: "Happy", roles: ["IGL"], firepower: 84, consistency: 87, support: 86, igl: 92 },
      { name: "shox", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "apEX", roles: ["Rifler"], firepower: 96, consistency: 90 },
      { name: "NBK-", roles: ["Support", "Rifler"], firepower: 81, consistency: 90, support: 93 },
      { name: "Maniac", roles: ["Support", "Rifler"], firepower: 85, consistency: 88, support: 90 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 88, consistency: 88, support: 91 },
      { name: "Uzzziii", roles: ["Rifler"], firepower: 76, consistency: 88, support: 91 },
      { name: "KQLY", roles: ["Rifler", "AWPer"], firepower: 88, consistency: 85 },
      { name: "SmithZz", roles: ["AWPer"], firepower: 84, consistency: 85 }
    ]
  },

  {
    team: "Fnatic",
    year: "2015",
    players: [
      { name: "pronax", roles: ["IGL"], firepower: 71, consistency: 86, support: 88, igl: 95 },
      { name: "JW", roles: ["AWPer"], firepower: 97, consistency: 90 },
      { name: "flusha", roles: ["Rifler"], firepower: 92, consistency: 95, support: 95 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 91, consistency: 97, support: 99 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 99, consistency: 96 },
      { name: "dennis", roles: ["Rifler"], firepower: 90, consistency: 96 }
    ]
  },

  {
    team: "EnVyUs",
    year: "2015",
    players: [
      { name: "Happy", roles: ["IGL", "AWPer"], firepower: 84, consistency: 86, support: 85, igl: 92 },
      { name: "kennyS", roles: ["AWPer"], firepower: 100, consistency: 90 },
      { name: "SmithZz", roles: ["AWPer"], firepower: 77, consistency: 85 },
      { name: "apEX", roles: ["Rifler"], firepower: 95, consistency: 86 },
      { name: "NBK-", roles: ["Support"], firepower: 87, consistency: 89, support: 94 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 81, consistency: 88, support: 92 },
      { name: "shox", roles: ["Rifler"], firepower: 93, consistency: 92 }
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
    { name: "TACO", roles: ["Support"], firepower: 73, consistency: 84, support: 96 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2016",
    players: [
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 94, consistency: 93, support: 88, igl: 97 },
      { name: "fox", roles: ["AWPer"], firepower: 89, consistency: 88 },
      { name: "coldzera", roles: ["Rifler"], firepower: 100, consistency: 99 },
      { name: "fer", roles: ["Rifler"], firepower: 95, consistency: 90 },
      { name: "fnx", roles: ["Rifler"], firepower: 87, consistency: 84 },
      { name: "TACO", roles: ["Support"], firepower: 73, consistency: 84, support: 96 }
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
      { name: "Xyp9x", roles: ["Support"], firepower: 84, consistency: 94, support: 99 }
    ]
  },

  {
    team: "Gambit",
    year: "2017",
    players: [
      { name: "Dosia", roles: ["Support"], firepower: 80, consistency: 83, support: 92, igl: 81 },
      { name: "AdreN", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "mou", roles: ["AWPer"], firepower: 88, consistency: 85 },
      { name: "fitch", roles: ["Rifler"], firepower: 72, consistency: 85 },
      { name: "HObbit", roles: ["Rifler"], firepower: 93, consistency: 88 },
      { name: "Zeus", roles: ["IGL"], firepower: 65, consistency: 84, support: 90, igl: 95 }
    ]
  },

  {
    team: "Cloud9",
    year: "2018",
    players: [
      { name: "tarik", roles: ["IGL", "Rifler"], firepower: 88, consistency: 86, support: 82, igl: 89 },
      { name: "FNS", roles: ["IGL"], firepower: 70, consistency: 81, support: 84, igl: 80 },
      { name: "Golden", roles: ["IGL"], firepower: 71, consistency: 84, support: 89, igl: 85 },
      { name: "Skadoodle", roles: ["AWPer"], firepower: 84, consistency: 83 },
      { name: "Stewie2k", roles: ["Rifler"], firepower: 91, consistency: 84 },
      { name: "autimatic", roles: ["Rifler", "AWPer"], firepower: 94, consistency: 91 },
      { name: "kioShiMa", roles: ["Rifler"], firepower: 83, consistency: 91 },
      { name: "STYKO", roles: ["Support"], firepower: 73, consistency: 91, support: 90 },
      { name: "RUSH", roles: ["Support"], firepower: 80, consistency: 85, support: 90 }
    ]
  },

  {
    team: "Astralis",
    year: "2018",
    players: [
      { name: "gla1ve", roles: ["IGL"], firepower: 86, consistency: 92, support: 91, igl: 99 },
      { name: "device", roles: ["AWPer"], firepower: 99, consistency: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "Kjaerbye", roles: ["Rifler"], firepower: 90, consistency: 87 },
      { name: "Magisk", roles: ["Rifler", "Support"], firepower: 94, consistency: 91, support: 88 },
      { name: "Xyp9x", roles: ["Support"], firepower: 83, consistency: 95, support: 100 }
    ]
  },

  {
    team: "Astralis",
    year: "2019",
    players: [
      { name: "gla1ve", roles: ["IGL"], firepower: 82, consistency: 93, support: 92, igl: 100 },
      { name: "device", roles: ["AWPer"], firepower: 99, consistency: 99 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "Magisk", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "Xyp9x", roles: ["Support"], firepower: 83, consistency: 96, support: 100 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2021",
    players: [
      { name: "s1mple", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "electroNic", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "b1t", roles: ["Rifler", "Support"], firepower: 94, consistency: 93, support: 80 },
      { name: "Perfecto", roles: ["Support"], firepower: 79, consistency: 91, support: 98 },
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
      { name: "fame", roles: ["Rifler"], firepower: 92, consistency: 85 },
      { name: "YEKINDAR", roles: ["Rifler"], firepower: 94, consistency: 83 },
      { name: "n0rb3r7", roles: ["Rifler"], firepower: 78, consistency: 82, support: 92 },
      { name: "Qikert", roles: ["Rifler", "Support"], firepower: 82, consistency: 84, support: 88 }
    ]
  },

  {
    team: "Vitality",
    year: "2023",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "Spinx", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "flameZ", roles: ["Rifler"], firepower: 95, consistency: 93 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 88, consistency: 89 },
      { name: "Magisk", roles: ["Support", "Rifler"], firepower: 88, consistency: 91, support: 90 },
      { name: "apEX", roles: ["IGL"], firepower: 82, consistency: 86, support: 88, igl: 96 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2024",
    players: [
      { name: "w0nderful", roles: ["AWPer"], firepower: 89, consistency: 90 },
      { name: "jL", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "b1t", roles: ["Rifler", "Support"], firepower: 93, consistency: 91, support: 80 },
      { name: "iM", roles: ["Rifler"], firepower: 78, consistency: 80 },
      { name: "Aleksib", roles: ["IGL"], firepower: 72, consistency: 84, support: 90, igl: 95 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2024",
    players: [
      { name: "sh1ro", roles: ["AWPer"], firepower: 97, consistency: 97 },
      { name: "donk", roles: ["Rifler"], firepower: 100, consistency: 98 },
      { name: "zont1x", roles: ["Rifler"], firepower: 84, consistency: 88 },
      { name: "magixx", roles: ["Support"], firepower: 84, consistency: 87, support: 92 },
      { name: "chopper", roles: ["IGL"], firepower: 67, consistency: 84, support: 88, igl: 94 }
    ]
  },

  {
    team: "Vitality",
    year: "2025",
    players: [
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "ropz", roles: ["Rifler"], firepower: 96, consistency: 97 },
      { name: "flameZ", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "mezii", roles: ["Support"], firepower: 84, consistency: 88, support: 92 },
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
    { name: "GeT_RiGhT", roles: ["Rifler"], firepower: 97, consistency: 99, support: 99 },
    { name: "friberg", roles: ["Rifler"], firepower: 89, consistency: 85 },
    { name: "Fifflaren", roles: ["AWPer", "Support"], firepower: 72, consistency: 81, support: 89 }
    ]
  },

  {
    team: "Fnatic",
    year: "2014",
    players: [
      { name: "pronax", roles: ["IGL"], firepower: 71, consistency: 84, support: 88, igl: 94 },
      { name: "JW", roles: ["AWPer"], firepower: 94, consistency: 88 },
      { name: "flusha", roles: ["Rifler"], firepower: 89, consistency: 93, support: 94 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 87, consistency: 93, support: 98 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "schneider", roles: ["Rifler"], firepower: 87, consistency: 88 },
      { name: "Devilwalk", roles: ["Support", "Rifler"], firepower: 76, consistency: 82, support: 98 }
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
      { name: "Guardian", roles: ["AWPer"], firepower: 96, consistency: 94 },
      { name: "flamie", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "Edward", roles: ["Rifler"], firepower: 80, consistency: 88 },
      { name: "seized", roles: ["Support"], firepower: 80, consistency: 86, support: 92 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2016",
    players: [
      { name: "Zeus", roles: ["IGL"], firepower: 66, consistency: 84, support: 89, igl: 95 },
      { name: "Guardian", roles: ["AWPer"], firepower: 95, consistency: 94 },
      { name: "flamie", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "Edward", roles: ["Support", "Rifler"], firepower: 79, consistency: 88, support: 87 },
      { name: "seized", roles: ["Rifler", "IGL"], firepower: 85, consistency: 86, igl: 86 },
      { name: "s1mple", roles: ["Rifler", "AWPer"], firepower: 98, consistency: 94 },
    ]
  },

  {
    team: "Team Liquid",
    year: "2016",
    players: [
      { name: "s1mple", roles: ["Rifler", "AWPer"], firepower: 99, consistency: 94 },
      { name: "EliGE", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "nitr0", roles: ["Rifler", "IGL"], firepower: 84, consistency: 84, support: 84, igl: 84 },
      { name: "adreN", roles: ["AWPer", "IGL"], firepower: 85, consistency: 82, igl: 82 },
      { name: "koosta", roles: ["AWPer"], firepower: 87, consistency: 84 },
      { name: "jdm64", roles: ["AWPer"], firepower: 89, consistency: 82 },
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
      { name: "horvy", roles: ["IGL"], firepower: 64, consistency: 84, support: 77, igl: 76 },
      { name: "HEN1", roles: ["AWPer"], firepower: 91, consistency: 87 },
      { name: "zqk", roles: ["AWPer"], firepower: 71, consistency: 85 },
      { name: "LUCAS1", roles: ["Rifler", "Support"], firepower: 89, consistency: 84, support: 86 },
      { name: "shz", roles: ["Rifler", "Support"], firepower: 69, consistency: 84, support: 65 },
      { name: "boltz", roles: ["Rifler"], firepower: 88, consistency: 87 },
      { name: "fnx", roles: ["Rifler"], firepower: 90, consistency: 89 },
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
    team: "Natus Vincere",
    year: "2018",
    players: [
      { name: "Zeus", roles: ["IGL"], firepower: 66, consistency: 84, support: 89, igl: 94 },
      { name: "s1mple", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "electroNic", roles: ["Rifler"], firepower: 96, consistency: 94 },
      { name: "flamie", roles: ["Rifler"], firepower: 88, consistency: 86 },
      { name: "Edward", roles: ["Support", "Rifler"], firepower: 82, consistency: 86, support: 90 }
    ]
  },

  {
    team: "ENCE",
    year: "2019",
    players: [
      { name: "allu", roles: ["AWPer", "IGL"], firepower: 91, consistency: 89, igl: 67 },
      { name: "sergej", roles: ["Rifler"], firepower: 94, consistency: 92 },
      { name: "Aerial", roles: ["Rifler"], firepower: 84, consistency: 83 },
      { name: "xseveN", roles: ["Support"], firepower: 75, consistency: 84, support: 92 },
      { name: "Aleksib", roles: ["IGL"], firepower: 72, consistency: 85, support: 89, igl: 94 },
      { name: "sunNy", roles: ["Rifler"], firepower: 89, consistency: 83 }
    ]
  },

  {
    team: "AVANGAR",
    year: "2019",
    players: [
      { name: "Jame", roles: ["IGL", "AWPer"], firepower: 90, consistency: 94, support: 85, igl: 95 },
      { name: "qikert", roles: ["Rifler", "Support"], firepower: 85, consistency: 86, support: 88 },
      { name: "buster", roles: ["Rifler"], firepower: 87, consistency: 88 },
      { name: "KrizzeN", roles: ["Rifler"], firepower: 82, consistency: 86 },
      { name: "fitch", roles: ["Rifler"], firepower: 81, consistency: 88 },
      { name: "SANJI", roles: ["Support"], firepower: 68, consistency: 82, support: 98 },
      { name: "AdreN", roles: ["Rifler"], firepower: 88, consistency: 86 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2021",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 100, consistency: 97 },
      { name: "huNter-", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "AmaNEk", roles: ["AWPer"], firepower: 75, consistency: 85, support: 91 },
      { name: "JaCkz", roles: ["Rifler"], firepower: 82, consistency: 82 },
      { name: "nexa", roles: ["IGL", "Support"], firepower: 76, consistency: 84, support: 89, igl: 88 }
    ]
  },

  {
    team: "Heroic",
    year: "2022",
    players: [
      { name: "cadiaN", roles: ["IGL", "AWPer"], firepower: 89, consistency: 91, support: 86, igl: 95 },
      { name: "stavn", roles: ["Rifler"], firepower: 93, consistency: 89 },
      { name: "jabbi", roles: ["Rifler"], firepower: 90, consistency: 86 },
      { name: "refrezh", roles: ["Rifler"], firepower: 88, consistency: 86 },
      { name: "TeSeS", roles: ["Support", "Rifler"], firepower: 86, consistency: 87, support: 84 },
      { name: "sjuush", roles: ["Support"], firepower: 78, consistency: 89, support: 94 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2022",
    players: [
      { name: "s1mple", roles: ["AWPer"], firepower: 100, consistency: 99 },
      { name: "electroNic", roles: ["Rifler", "IGL"], firepower: 97, consistency: 95, igl: 89 },
      { name: "b1t", roles: ["Rifler"], firepower: 93, consistency: 93, support: 80 },
      { name: "Perfecto", roles: ["Support"], firepower: 79, consistency: 91, support: 98 },
      { name: "Boombl4", roles: ["IGL"], firepower: 78, consistency: 84, support: 86, igl: 93 },
      { name: "sdy", roles: ["Rifler"], firepower: 83, consistency: 93, support: 80 },
    ]
  },

  {
    team: "GamerLegion",
    year: "2023",
    players: [
      { name: "acoR", roles: ["AWPer"], firepower: 88, consistency: 85 },
      { name: "iM", roles: ["Rifler"], firepower: 95, consistency: 89 },
      { name: "Keoz", roles: ["Support"], firepower: 76, consistency: 82, support: 88 },
      { name: "isak", roles: ["Rifler"], firepower: 84, consistency: 84 },
      { name: "volt", roles: ["Rifler"], firepower: 82, consistency: 84 },
      { name: "Snax", roles: ["IGL"], firepower: 70, consistency: 86, support: 88, igl: 89 },
      { name: "siuhy", roles: ["IGL"], firepower: 78, consistency: 86, support: 88, igl: 92 },
      { name: "neaLaN", roles: ["IGL"], firepower: 69, consistency: 86, support: 88, igl: 83 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2024",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 93, consistency: 92 },
      { name: "ropz", roles: ["Rifler"], firepower: 95, consistency: 96 },
      { name: "frozen", roles: ["Rifler"], firepower: 93, consistency: 93 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 88, consistency: 88, support: 76 },
      { name: "karrigan", roles: ["IGL"], firepower: 70, consistency: 82, support: 92, igl: 98 }
      ]
  },

  {
    team: "The MongolZ",
    year: "2025",
    players: [
      { name: "910", roles: ["AWPer"], firepower: 91, consistency: 88 },
      { name: "Senzu", roles: ["Rifler", "AWPer"], firepower: 94, consistency: 92 },
      { name: "Techno", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "mzinho", roles: ["Support", "Rifler"], firepower: 85, consistency: 87, support: 90 },
      { name: "bLitz", roles: ["IGL"], firepower: 80, consistency: 87, support: 88, igl: 92 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2025",
    players: [
      { name: "broky", roles: ["AWPer"], firepower: 88, consistency: 82 },
      { name: "s1mple", roles: ["AWPer"], firepower: 77, consistency: 70 },
      { name: "EliGE", roles: ["Rifler"], firepower: 92, consistency: 91 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 95, consistency: 91 },
      { name: "frozen", roles: ["Rifler"], firepower: 94, consistency: 93 },
      { name: "rain", roles: ["Rifler", "Support"], firepower: 87, consistency: 86, support: 76 },
      { name: "jcobbb", roles: ["Rifler", "Support"], firepower: 84, consistency: 91, support: 73  },
      { name: "karrigan", roles: ["IGL"], firepower: 68, consistency: 80, support: 91, igl: 97 }
    ]
  },
//semifinalists
  {
    team: "VeryGames",
    year: "2013",
    players: [
      { name: "Ex6TenZ", roles: ["IGL"], firepower: 70, consistency: 86, support: 88, igl: 94 },
      { name: "ScreaM", roles: ["Rifler"], firepower: 91, consistency: 86 },
      { name: "shox", roles: ["Rifler"], firepower: 91, consistency: 90 },
      { name: "NBK-", roles: ["Support", "Rifler"], firepower: 83, consistency: 88, support: 92 },
      { name: "SmithZz", roles: ["AWPer"], firepower: 80, consistency: 84 },
      { name: "kennyS", roles: ["AWPer"], firepower: 90, consistency: 84 }
    ]
  },

  {
    team: "compLexity",
    year: "2013",
    players: [
      { name: "n0thing", roles: ["Rifler"], firepower: 84, consistency: 89 },
      { name: "swag", roles: ["Rifler"], firepower: 89, consistency: 86 },
      { name: "Hiko", roles: ["Support"], firepower: 78, consistency: 90, support: 95 },
      { name: "Semphis", roles: ["AWPer"], firepower: 77, consistency: 84 },
      { name: "sgares", roles: ["IGL"], firepower: 70, consistency: 80, support: 85, igl: 82 }
    ]
  },

  {
    team: "LGB eSports",
    year: "2014",
    players: [
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 86, consistency: 92, support: 98 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "dennis", roles: ["Rifler"], firepower: 84, consistency: 82 },
      { name: "cype", roles: ["AWPer"], firepower: 76, consistency: 78 },
      { name: "twist", roles: ["IGL"], firepower: 70, consistency: 78, support: 82, igl: 80 }
    ]
  },

  {
    team: "Dignitas",
    year: "2014",
    players: [
      { name: "FeTiSh", roles: ["IGL"], firepower: 66, consistency: 78, support: 85, igl: 83 },
      { name: "device", roles: ["AWPer", "Rifler"], firepower: 88, consistency: 92 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 84, consistency: 86 },
      { name: "aizy", roles: ["Rifler"], firepower: 79, consistency: 86 },
      { name: "cajunb", roles: ["Rifler", "AWPer"], firepower: 84, consistency: 84 },
      { name: "Xyp9x", roles: ["Support"], firepower: 80, consistency: 90, support: 98 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2014",
    players: [
      { name: "Zeus", roles: ["IGL"], firepower: 65, consistency: 84, support: 89, igl: 95 },
      { name: "GuardiaN", roles: ["AWPer"], firepower: 95, consistency: 93 },
      { name: "Edward", roles: ["Rifler"], firepower: 80, consistency: 87 },
      { name: "seized", roles: ["Rifler"], firepower: 84, consistency: 86, support: 87 },
      { name: "starix", roles: ["Support"], firepower: 68, consistency: 82, support: 90 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2015",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 84, consistency: 88, support: 92, igl: 93 },
      { name: "pashaBiceps", roles: ["AWPer", "Rifler"], firepower: 91, consistency: 88 },
      { name: "NEO", roles: ["Rifler"], firepower: 88, consistency: 89 },
      { name: "Snax", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "byali", roles: ["Rifler"], firepower: 90, consistency: 85 }
    ]
  },

  {
    team: "Team SoloMid",
    year: "2015",
    players: [
      { name: "karrigan", roles: ["IGL", "AWPer"], firepower: 70, consistency: 83, support: 90, igl: 95 },
      { name: "device", roles: ["Rifler"], firepower: 93, consistency: 94 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "cajunb", roles: ["Rifler", "AWPer"], firepower: 85, consistency: 85 },
      { name: "Xyp9x", roles: ["Support"], firepower: 80, consistency: 92, support: 92 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2015",
    players: [
      { name: "Maikelele", roles: ["AWPer", "Rifler"], firepower: 87, consistency: 85 },
      { name: "rain", roles: ["Rifler", "IGL"], firepower: 89, consistency: 87, igl: 65 },
      { name: "jkaem", roles: ["Rifler", "Support"], firepower: 81, consistency: 85, support: 84 },
      { name: "dennis", roles: ["Rifler"], firepower: 88, consistency: 86 },
      { name: "aizy", roles: ["Rifler"], firepower: 80, consistency: 86 },
      { name: "fox", roles: ["AWPer"], firepower: 87, consistency: 82 }
    ]
  },

  {
    team: "Astralis",
    year: "2016",
    players: [
      { name: "karrigan", roles: ["IGL"], firepower: 71, consistency: 83, support: 90, igl: 90 },
      { name: "gla1ve", roles: ["IGL"], firepower: 87, consistency: 86, support: 90, igl: 87 },
      { name: "device", roles: ["AWPer"], firepower: 96, consistency: 89 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "Kjaerbye", roles: ["Rifler"], firepower: 91, consistency: 90 },
      { name: "Xyp9x", roles: ["Support"], firepower: 82, consistency: 87, support: 96 },
      { name: "cajunb", roles: ["Rifler", "AWPer"], firepower: 84, consistency: 84 }
    ]
  },

  {
    team: "Fnatic",
    year: "2016",
    players: [
      { name: "dennis", roles: ["Rifler", "IGL"], firepower: 90, consistency: 85, igl: 72 },
      { name: "JW", roles: ["AWPer"], firepower: 93, consistency: 89 },
      { name: "flusha", roles: ["Rifler", "IGL"], firepower: 90, consistency: 92, support: 95, igl: 77 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 89, consistency: 94, support: 99 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 96, consistency: 95 },
      { name: "PlesseN", roles: ["Rifler"], firepower: 77, consistency: 83 },
      { name: "wenton", roles: ["Rifler"], firepower: 79, consistency: 84 },
      { name: "twist", roles: ["Rifler", "AWPer"], firepower: 87, consistency: 89 },
      { name: "disco doplan", roles: ["Rifler"], firepower: 76, consistency: 85 },
      { name: "Lekr0", roles: ["Rifler"], firepower: 88, consistency: 89 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2016",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 77, consistency: 87, support: 92, igl: 92 },
      { name: "Snax", roles: ["Rifler"], firepower: 93, consistency: 92 },
      { name: "NEO", roles: ["Rifler"], firepower: 88, consistency: 89 },
      { name: "pashaBiceps", roles: ["AWPer", "Rifler"], firepower: 90, consistency: 86 },
      { name: "byali", roles: ["Rifler"], firepower: 88, consistency: 83 }
    ]
  },

  {
    team: "Fnatic",
    year: "2017",
    players: [
      { name: "dennis", roles: ["IGL", "Rifler"], firepower: 87, consistency: 85, support: 84, igl: 85 },
      { name: "JW", roles: ["AWPer"], firepower: 89, consistency: 88 },
      { name: "KRIMZ", roles: ["Support", "Rifler"], firepower: 90, consistency: 97, support: 99 },
      { name: "flusha", roles: ["Support", "Rifler"], firepower: 90, consistency: 94, support: 95 },
      { name: "olofmeister", roles: ["Rifler"], firepower: 85, consistency: 93 },
      { name: "twist", roles: ["Rifler", "AWPer"], firepower: 82, consistency: 90 },
      { name: "disco doplan", roles: ["Rifler"], firepower: 76, consistency: 85 },
      { name: "Golden", roles: ["IGL"], firepower: 82, consistency: 85, support: 84, igl: 89 },
      { name: "Lekr0", roles: ["Rifler"], firepower: 89, consistency: 90 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2017",
    players: [
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 94, consistency: 93, support: 88, igl: 97 },
      { name: "coldzera", roles: ["Rifler"], firepower: 96, consistency: 99 },
      { name: "fer", roles: ["Rifler"], firepower: 95, consistency: 90 },
      { name: "felps", roles: ["Rifler"], firepower: 94, consistency: 90 },
      { name: "boltz", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "TACO", roles: ["Support"], firepower: 73, consistency: 84, support: 96 },
      { name: "fox", roles: ["AWPer"], firepower: 87, consistency: 84 },
    ]
  },

  {
    team: "Virtus.pro",
    year: "2017",
    players: [
      { name: "TaZ", roles: ["IGL", "Support"], firepower: 80, consistency: 86, support: 91, igl: 92 },
      { name: "Snax", roles: ["Rifler"], firepower: 95, consistency: 91 },
      { name: "NEO", roles: ["Rifler"], firepower: 87, consistency: 88 },
      { name: "pashaBiceps", roles: ["AWPer", "Rifler"], firepower: 89, consistency: 85 },
      { name: "byali", roles: ["Rifler"], firepower: 87, consistency: 82 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2018",
    players: [
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 92, consistency: 91, support: 88, igl: 96 },
      { name: "coldzera", roles: ["Rifler"], firepower: 94, consistency: 97 },
      { name: "fer", roles: ["Rifler"], firepower: 88, consistency: 89 },
      { name: "TACO", roles: ["Support"], firepower: 73, consistency: 84, support: 96 },
      { name: "boltz", roles: ["Rifler"], firepower: 86, consistency: 86 },
      { name: "Stewie2k", roles: ["Rifler", "Support"], firepower: 86, consistency: 84, support: 80 },
    ]
  },

  {
    team: "Team Liquid",
    year: "2018",
    players: [
      { name: "nitr0", roles: ["IGL", "AWPer", "Rifler"], firepower: 82, consistency: 86, support: 88, igl: 90 },
      { name: "stanislaw", roles: ["IGL"], firepower: 76, consistency: 86, support: 88, igl: 87 },
      { name: "jdm64", roles: ["AWPer"], firepower: 85, consistency: 86 },
      { name: "EliGE", roles: ["Rifler"], firepower: 95, consistency: 92 },
      { name: "NAF", roles: ["Rifler"], firepower: 93, consistency: 94 },
      { name: "Twistzz", roles: ["Rifler"], firepower: 92, consistency: 89 },
      { name: "steel", roles: ["Support"], firepower: 72, consistency: 82, support: 94 },
      { name: "TACO", roles: ["Support"], firepower: 73, consistency: 84, support: 96 }
    ]
  },

  {
    team: "MIBR",
    year: "2018",
    players: [
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 91, consistency: 90, support: 88, igl: 95 },
      { name: "coldzera", roles: ["Rifler"], firepower: 96, consistency: 96 },
      { name: "fer", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "boltz", roles: ["Rifler"], firepower: 86, consistency: 86 },
      { name: "Stewie2k", roles: ["Rifler", "Support"], firepower: 86, consistency: 84, support: 82 },
      { name: "tarik", roles: ["Rifler"], firepower: 88, consistency: 84, support: 82 }
    ]
  },

  {
    team: "MIBR",
    year: "2019",
    players: [
      { name: "FalleN", roles: ["IGL", "AWPer"], firepower: 90, consistency: 89, support: 88, igl: 94 },
      { name: "kNgV-", roles: ["AWPer"], firepower: 87, consistency: 89, igl: 94 },
      { name: "coldzera", roles: ["Rifler"], firepower: 94, consistency: 94 },
      { name: "fer", roles: ["Rifler"], firepower: 89, consistency: 86 },
      { name: "TACO", roles: ["Support"], firepower: 70, consistency: 84, support: 96 },
      { name: "felps", roles: ["Rifler"], firepower: 87, consistency: 83 },
      { name: "LUCAS1", roles: ["Rifler"], firepower: 84, consistency: 88 },
      { name: "meyern", roles: ["Rifler"], firepower: 79, consistency: 80 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2019",
    players: [
      { name: "Zeus", roles: ["IGL"], firepower: 66, consistency: 84, support: 89, igl: 94 },
      { name: "s1mple", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "GuardiaN", roles: ["AWPer"], firepower: 88, consistency: 86 },
      { name: "electroNic", roles: ["Rifler"], firepower: 96, consistency: 94 },
      { name: "flamie", roles: ["Rifler"], firepower: 85, consistency: 86 },
      { name: "Boombl4", roles: ["Rifler", "IGL"], firepower: 88, consistency: 86, igl: 89 },
      { name: "Edward", roles: ["Support", "Rifler"], firepower: 82, consistency: 86, support: 90 }
    ]
  },

  {
    team: "NRG Esports",
    year: "2019",
    players: [
      { name: "stanislaw", roles: ["IGL", "Support"], firepower: 76, consistency: 84, support: 86, igl: 88 },
      { name: "CeRq", roles: ["AWPer"], firepower: 90, consistency: 88 },
      { name: "Brehze", roles: ["Rifler"], firepower: 91, consistency: 92 },
      { name: "Ethan", roles: ["Rifler"], firepower: 87, consistency: 90 },
      { name: "tarik", roles: ["Rifler"], firepower: 88, consistency: 85 },
      { name: "FugLy", roles: ["Rifler"], firepower: 77, consistency: 89 },
    ]
  },

  {
    team: "Renegades",
    year: "2019",
    players: [
      { name: "AZR", roles: ["IGL"], firepower: 76, consistency: 84, support: 86, igl: 87 },
      { name: "Gratisfaction", roles: ["AWPer"], firepower: 84, consistency: 83 },
      { name: "jks", roles: ["Rifler"], firepower: 91, consistency: 91 },
      { name: "jkaem", roles: ["Rifler"], firepower: 87, consistency: 86 },
      { name: "Liazz", roles: ["Support", "Rifler"], firepower: 79, consistency: 85, support: 86 }
    ]
  },

  {
    team: "Heroic",
    year: "2021",
    players: [
      { name: "cadiaN", roles: ["IGL", "AWPer"], firepower: 87, consistency: 89, support: 86, igl: 94 },
      { name: "stavn", roles: ["Rifler"], firepower: 88, consistency: 90 },
      { name: "TeSeS", roles: ["Rifler", "Support"], firepower: 87, consistency: 87, support: 84 },
      { name: "sjuush", roles: ["Support"], firepower: 81, consistency: 89, support: 94 },
      { name: "refrezh", roles: ["Rifler"], firepower: 86, consistency: 85 }
    ]
  },

  {
    team: "Gambit",
    year: "2021",
    players: [
      { name: "nafany", roles: ["IGL"], firepower: 76, consistency: 85, support: 88, igl: 90 },
      { name: "sh1ro", roles: ["AWPer"], firepower: 97, consistency: 97 },
      { name: "Ax1Le", roles: ["Rifler"], firepower: 93, consistency: 93 },
      { name: "HObbit", roles: ["Rifler"], firepower: 90, consistency: 91 },
      { name: "interz", roles: ["Support"], firepower: 74, consistency: 86, support: 84 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2022",
    players: [
      { name: "chopper", roles: ["IGL"], firepower: 70, consistency: 84, support: 88, igl: 91 },
      { name: "degster", roles: ["AWPer"], firepower: 88, consistency: 89 },
      { name: "w0nderful", roles: ["AWPer"], firepower: 87, consistency: 86 },
      { name: "Patsi", roles: ["Rifler"], firepower: 86, consistency: 86 },
      { name: "magixx", roles: ["Support", "Rifler"], firepower: 84, consistency: 86, support: 90 },
      { name: "s1ren", roles: ["Rifler"], firepower: 82, consistency: 84 }
    ]
  },

  {
    team: "ENCE",
    year: "2022",
    players: [
      { name: "Snappi", roles: ["IGL"], firepower: 66, consistency: 81, support: 88, igl: 91 },
      { name: "hades", roles: ["AWPer"], firepower: 86, consistency: 84 },
      { name: "SunPayus", roles: ["AWPer"], firepower: 88, consistency: 89 },
      { name: "Spinx", roles: ["Rifler", "Support"], firepower: 91, consistency: 91, support: 84 },
      { name: "dycha", roles: ["Rifler"], firepower: 85, consistency: 87 },
      { name: "valde", roles: ["Rifler"], firepower: 85, consistency: 89 },
      { name: "Maden", roles: ["Rifler"], firepower: 84, consistency: 84}
    ]
  },

  {
    team: "MOUZ",
    year: "2022",
    players: [
      { name: "dexter", roles: ["IGL"], firepower: 65, consistency: 82, support: 86, igl: 86 },
      { name: "torzsi", roles: ["AWPer"], firepower: 88, consistency: 85 },
      { name: "frozen", roles: ["Rifler"], firepower: 91, consistency: 93 },
      { name: "xertioN", roles: ["Rifler"], firepower: 85, consistency: 85 },
      { name: "NBK-", roles: ["Support"], firepower: 80, consistency: 79, support: 84 },
      { name: "JDC", roles: ["Support"], firepower: 76, consistency: 82, support: 86 }
    ]
  },

  {
    team: "FURIA",
    year: "2022",
    players: [
      { name: "arT", roles: ["IGL"], firepower: 76, consistency: 80, support: 84, igl: 87 },
      { name: "saffee", roles: ["AWPer"], firepower: 86, consistency: 84 },
      { name: "KSCERATO", roles: ["Rifler"], firepower: 93, consistency: 94 },
      { name: "yuurih", roles: ["Rifler"], firepower: 88, consistency: 91 },
      { name: "drop", roles: ["Support"], firepower: 76, consistency: 82, support: 86 }
    ]
  },

  {
    team: "Apeks",
    year: "2023",
    players: [
      { name: "STYKO", roles: ["Support"], firepower: 73, consistency: 86, support: 92 },
      { name: "jkaem", roles: ["Rifler"], firepower: 88, consistency: 86 },
      { name: "nawwk", roles: ["AWPer"], firepower: 89, consistency: 87 },
      { name: "jL", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "CacaNito", roles: ["Rifler"], firepower: 80, consistency: 88 },
      { name: "kyxsan", roles: ["IGL"], firepower: 73, consistency: 84, support: 88, igl: 88 },
      { name: "sense", roles: ["IGL"], firepower: 70, consistency: 82, support: 85, igl: 82 }
    ]
  },

  {
    team: "Heroic",
    year: "2023",
    players: [
      { name: "cadiaN", roles: ["IGL", "AWPer"], firepower: 89, consistency: 91, support: 86, igl: 95 },
      { name: "stavn", roles: ["Rifler"], firepower: 90, consistency: 91 },
      { name: "jabbi", roles: ["Rifler"], firepower: 87, consistency: 87 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 89, consistency: 87 },
      { name: "TeSeS", roles: ["Rifler", "Support"], firepower: 86, consistency: 87, support: 84 },
      { name: "sjuush", roles: ["Support"], firepower: 80, consistency: 89, support: 94 },
    ]
  },

  {
    team: "G2 Esports",
    year: "2024",
    players: [
      { name: "HooXi", roles: ["IGL"], firepower: 62, consistency: 78, support: 90, igl: 89 },
      { name: "Snax", roles: ["IGL"], firepower: 72, consistency: 82, support: 86, igl: 86 },
      { name: "m0NESY", roles: ["AWPer"], firepower: 98, consistency: 96 },
      { name: "NiKo", roles: ["Rifler"], firepower: 98, consistency: 94 },
      { name: "huNter-", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "malbsMd", roles: ["Rifler", "Support"], firepower: 86, consistency: 87, support: 78 },
      { name: "nexa", roles: ["Support"], firepower: 78, consistency: 84, support: 88 }
    ]
  },

  {
    team: "Vitality",
    year: "2024",
    players: [
      { name: "apEX", roles: ["IGL"], firepower: 78, consistency: 84, support: 88, igl: 96 },
      { name: "ZywOo", roles: ["AWPer", "Rifler"], firepower: 100, consistency: 99 },
      { name: "Spinx", roles: ["Rifler"], firepower: 93, consistency: 92 },
      { name: "flameZ", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "mezii", roles: ["Support"], firepower: 82, consistency: 88, support: 92 }
    ]
  },

  {
    team: "MOUZ",
    year: "2024",
    players: [
      { name: "siuhy", roles: ["IGL"], firepower: 78, consistency: 87, support: 89, igl: 94 },
      { name: "torzsi", roles: ["AWPer"], firepower: 91, consistency: 89 },
      { name: "xertioN", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "Brollan", roles: ["Rifler"], firepower: 85, consistency: 88 },
      { name: "Jimpphat", roles: ["Support", "Rifler"], firepower: 87, consistency: 91, support: 90 }
    ]
  },

  {
    team: "MOUZ",
    year: "2025",
    players: [
      { name: "Brollan", roles: ["IGL"], firepower: 84, consistency: 87, support: 89, igl: 86 },
      { name: "torzsi", roles: ["AWPer"], firepower: 91, consistency: 90 },
      { name: "xertioN", roles: ["Rifler"], firepower: 91, consistency: 89 },
      { name: "Spinx", roles: ["Rifler"], firepower: 93, consistency: 89 },
      { name: "Jimpphat", roles: ["Support", "Rifler"], firepower: 88, consistency: 92, support: 91 }
    ]
  },

  {
    team: "paiN Gaming",
    year: "2025",
    players: [
      { name: "biguzera", roles: ["IGL", "Rifler"], firepower: 82, consistency: 88, support: 86, igl: 88 },
      { name: "nqz", roles: ["AWPer"], firepower: 84, consistency: 85 },
      { name: "snow", roles: ["Rifler"], firepower: 84, consistency: 84 },
      { name: "lux", roles: ["Support", "Rifler"], firepower: 89, consistency: 84, support: 86 },
      { name: "dgt", roles: ["Rifler"], firepower: 78, consistency: 83 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2025",
    players: [
      { name: "chopper", roles: ["IGL"], firepower: 70, consistency: 84, support: 88, igl: 94 },
      { name: "sh1ro", roles: ["AWPer"], firepower: 97, consistency: 97 },
      { name: "donk", roles: ["Rifler"], firepower: 100, consistency: 98 },
      { name: "zont1x", roles: ["Rifler"], firepower: 88, consistency: 88 },
      { name: "zweih", roles: ["Rifler"], firepower: 92, consistency: 86 },
      { name: "tN1R", roles: ["Rifler"], firepower: 90, consistency: 85 },
      { name: "magixx", roles: ["Support"], firepower: 84, consistency: 87, support: 92 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2025",
    players: [
      { name: "Aleksib", roles: ["IGL"], firepower: 71, consistency: 85, support: 90, igl: 96 },
      { name: "w0nderful", roles: ["AWPer"], firepower: 91, consistency: 91 },
      { name: "b1t", roles: ["Rifler", "Support"], firepower: 94, consistency: 92, support: 82 },
      { name: "iM", roles: ["Rifler"], firepower: 89, consistency: 87 },
      { name: "jL", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "makazze", roles: ["Rifler"], firepower: 94, consistency: 92 }
    ]
  },
//outliers/historic rosters
  {
    team: "Team Liquid",
    year: "2019",
    players: [
      { name: "nitr0", roles: ["IGL", "AWPer"], firepower: 82, consistency: 90, support: 87, igl: 91 },
      { name: "NAF", roles: ["Rifler", "Support"], firepower: 94, consistency: 96, support: 82 },
      { name: "Twistzz", roles: ["Rifler", "Support"], firepower: 95, consistency: 94, support: 80 },
      { name: "EliGE", roles: ["Rifler"], firepower: 98, consistency: 95 },
      { name: "Stewie2k", roles: ["Rifler"], firepower: 86, consistency: 88 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2023",
    players: [
      { name: "HooXi", roles: ["IGL"], firepower: 58, consistency: 82, igl: 88 },
      { name: "NiKo", roles: ["Rifler"], firepower: 100, consistency: 95 },
      { name: "huNter-", roles: ["Rifler", "Support"], firepower: 87, consistency: 91, support: 95 },
      { name: "m0NESY", roles: ["AWPer"], firepower: 99, consistency: 94 },
      { name: "jks", roles: ["Rifler"], firepower: 87, consistency: 91 }
    ]
  },

  {
    team: "BIG",
    year: "2020",
    players: [
      { name: "tabseN", roles: ["IGL", "Rifler"], firepower: 88, consistency: 92, igl: 94 },
      { name: "syrsoN", roles: ["AWPer"], firepower: 94, consistency: 91 },
      { name: "XANTARES", roles: ["Rifler"], firepower: 97, consistency: 88 },
      { name: "tiziaN", roles: ["Support"], firepower: 74, consistency: 89, support: 93 },
      { name: "k1to", roles: ["Rifler"], firepower: 84, consistency: 83 }
    ]
  },

  {
    team: "Evil Geniuses",
    year: "2020",
    players: [
      { name: "stanislaw", roles: ["IGL", "Support"], firepower: 70, consistency: 87, support: 89, igl: 92 },
      { name: "CeRq", roles: ["AWPer"], firepower: 93, consistency: 86 },
      { name: "Brehze", roles: ["Rifler"], firepower: 96, consistency: 89 },
      { name: "Ethan", roles: ["Rifler"], firepower: 92, consistency: 90 },
      { name: "tarik", roles: ["Rifler"], firepower: 89, consistency: 87 }
    ]
  },

  {
    team: "Team Falcons",
    year: "2024",
    players: [
      { name: "Snappi", roles: ["IGL", "Support"], firepower: 64, consistency: 86, support: 93, igl: 91 },
      { name: "SunPayus", roles: ["AWPer"], firepower: 89, consistency: 85 },
      { name: "s1mple", roles: ["AWPer", "Rifler"], firepower: 87, consistency: 88 },
      { name: "Magisk", roles: ["Rifler"], firepower: 92, consistency: 94 },
      { name: "dupreeh", roles: ["Rifler"], firepower: 82, consistency: 92 },
      { name: "Maden", roles: ["Rifler"], firepower: 86, consistency: 84 },
      { name: "BOROS", roles: ["Rifler"], firepower: 89, consistency: 76 }
    ]
  },

  {
    team: "Team Falcons",
    year: "2025",
    players: [
      { name: "NiKo", roles: ["Rifler"], firepower: 97, consistency: 95 },
      { name: "degster", roles: ["AWPer"], firepower: 92, consistency: 89 },
      { name: "m0NESY", roles: ["AWPer"], firepower: 100, consistency: 95 },
      { name: "TeSeS", roles: ["Rifler", "Support"], firepower: 90, consistency: 88, support: 88 },
      { name: "kyousuke", roles: ["Rifler"], firepower: 94, consistency: 80 },
      { name: "kyxsan", roles: ["IGL"], firepower: 68, consistency: 86, igl: 88 },
      { name: "Magisk", roles: ["Support", "Rifler"], firepower: 89, consistency: 93, support: 90 }
    ]
  },

  {
    team: "Splyce",
    year: "2016",
    players: [
      { name: "arya", roles: ["Rifler", "Support"], firepower: 76, consistency: 79, support: 84  },
      { name: "abE", roles: ["Rifler"], firepower: 67, consistency: 82 },
      { name: "jasonR", roles: ["Rifler"], firepower: 82, consistency: 80 },
      { name: "AcilioN", roles: ["Rifler"], firepower: 86, consistency: 80 },
      { name: "fREAKAZOID", roles: ["Rifler"], firepower: 80, consistency: 80 },
      { name: "summit1g", roles: ["Rifler", "Support"], firepower: 67, consistency: 80, support: 78 },
      { name: "Machinegun", roles: ["Rifler"], firepower: 88, consistency: 79 },
      { name: "Davey", roles: ["AWPer", "IGL"], firepower: 75, consistency: 78, igl: 76 },
      { name: "Professor_Chaos", roles: ["IGL"], firepower: 65, consistency: 79, igl: 70 },
      { name: "CRUC1AL", roles: ["AWPer"], firepower: 78, consistency: 78 },
    ]
  },

  {
    team: "North",
    year: "2017",
    players: [
      { name: "MSL", roles: ["IGL", "Support"], firepower: 71, consistency: 87, support: 84, igl: 93 },
      { name: "k0nfig", roles: ["Rifler"], firepower: 91, consistency: 87 },
      { name: "Magisk", roles: ["Rifler"], firepower: 90, consistency: 89 },
      { name: "cajunb", roles: ["AWPer"], firepower: 84, consistency: 88 },
      { name: "aizy", roles: ["Rifler", "Support"], firepower: 87, consistency: 86, support: 86 },
      { name: "RUBINO", roles: ["Rifler"], firepower: 87, consistency: 86 }
    ]
  },

  {
    team: "North",
    year: "2018",
    players: [
      { name: "MSL", roles: ["IGL", "AWPer"], firepower: 72, consistency: 88, igl: 93 },
      { name: "valde", roles: ["Rifler"], firepower: 96, consistency: 91 },
      { name: "Kjaerbye", roles: ["Rifler"], firepower: 89, consistency: 88 },
      { name: "k0nfig", roles: ["Rifler"], firepower: 87, consistency: 87 },
      { name: "aizy", roles: ["Rifler", "Support"], firepower: 86, consistency: 86,  support: 76  },
      { name: "mertz", roles: ["AWPer"], firepower: 80, consistency: 84 },
      { name: "niko", roles: ["Rifler"], firepower: 84, consistency: 91 },
      { name: "mixwell", roles: ["AWPer"], firepower: 87, consistency: 88 },
      { name: "cajunb", roles: ["AWPer"], firepower: 83, consistency: 88 }
    ]
  },

  {
    team: "Counter Logic Gaming",
    year: "2016",
    players: [
      { name: "FugLy", roles: ["Rifler"], firepower: 87, consistency: 84 },
      { name: "pita", roles: ["IGL"], firepower: 61, consistency: 84, igl: 75 },
      { name: "jdm64", roles: ["AWPer"], firepower: 91, consistency: 87 },
      { name: "koosta", roles: ["AWPer"], firepower: 87, consistency: 84 },
      { name: "tarik", roles: ["Rifler"], firepower: 90, consistency: 86 },
      { name: "cutler", roles: ["Support"], firepower: 69, consistency: 82, support: 85 },
      { name: "hazed", roles: ["Rifler", "IGL"], firepower: 76, consistency: 82, igl: 78 }
    ]
  },

  {
    team: "OpTic Gaming",
    year: "2016",
    players: [
      { name: "stanislaw", roles: ["IGL"], firepower: 72, consistency: 87, igl: 93 },
      { name: "mixwell", roles: ["AWPer", "Rifler"], firepower: 92, consistency: 89 },
      { name: "tarik", roles: ["Rifler"], firepower: 91, consistency: 88 },
      { name: "RUSH", roles: ["Support", "Rifler"], firepower: 84, consistency: 88, support: 90 },
      { name: "NAF", roles: ["Rifler", "AWPer"], firepower: 89, consistency: 90 },
      { name: "ShahZaM", roles: ["AWPer"], firepower: 87, consistency: 84 },
      { name: "daps", roles: ["IGL"], firepower: 60, consistency: 84, igl: 89 }
    ]
  },

  {
    team: "Titan",
    year: "2014",
    players: [
      { name: "Ex6TenZ", roles: ["IGL"], firepower: 68, consistency: 90, igl: 97 },
      { name: "kennyS", roles: ["AWPer"], firepower: 100, consistency: 91 },
      { name: "shox", roles: ["Rifler"], firepower: 97, consistency: 93 },
      { name: "apEX", roles: ["Rifler"], firepower: 95, consistency: 86 },
      { name: "NBK-", roles: ["Support", "Rifler"], firepower: 88, consistency: 91, support: 92 },
      { name: "SmithZz", roles: ["AWPer", "Support"], firepower: 80, consistency: 87, support: 88 },
      { name: "KQLY", roles: ["AWPer", "Rifler"], firepower: 91, consistency: 84 }
    ]
  },

  {
    team: "Cloud9",
    year: "2015",
    players: [
      { name: "seang@res", roles: ["IGL"], firepower: 66, consistency: 86, igl: 92 },
      { name: "Skadoodle", roles: ["AWPer"], firepower: 90, consistency: 91 },
      { name: "shroud", roles: ["Rifler"], firepower: 93, consistency: 79 },
      { name: "n0thing", roles: ["Support", "Rifler"], firepower: 84, consistency: 90, support: 91 },
      { name: "fREAKAZOiD", roles: ["Rifler"], firepower: 84, consistency: 82 },
      { name: "Stewie2k", roles: ["Rifler"], firepower: 88, consistency: 79 },
    ]
  },

  {
    team: "Complexity",
    year: "2020",
    players: [
      { name: "blameF", roles: ["IGL", "Rifler"], firepower: 94, consistency: 95, igl: 93 },
      { name: "poizon", roles: ["AWPer"], firepower: 89, consistency: 86 },
      { name: "k0nfig", roles: ["Rifler"], firepower: 95, consistency: 84 },
      { name: "jks", roles: ["Support", "Rifler"], firepower: 89, consistency: 93, support: 91 },
      { name: "RUSH", roles: ["Support", "Rifler"], firepower: 79, consistency: 87, support: 89 },
      { name: "oBo", roles: ["Rifler"], firepower: 88, consistency: 84 }
    ]
  },

  {
    team: "OG",
    year: "2020",
    players: [
      { name: "Aleksib", roles: ["IGL"], firepower: 67, consistency: 92, igl: 95 },
      { name: "mantuu", roles: ["AWPer"], firepower: 89, consistency: 88 },
      { name: "valde", roles: ["Rifler"], firepower: 92, consistency: 92 },
      { name: "ISSAA", roles: ["Rifler"], firepower: 87, consistency: 84 },
      { name: "NBK-", roles: ["Support", "Rifler"], firepower: 84, consistency: 91, support: 93 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2016",
    players: [
      { name: "shox", roles: ["IGL", "Rifler"], firepower: 97, consistency: 93, igl: 90 },
      { name: "ScreaM", roles: ["Rifler"], firepower: 98, consistency: 84 },
      { name: "bodyy", roles: ["Support", "Rifler"], firepower: 81, consistency: 87, support: 89 },
      { name: "RpK", roles: ["Support", "Rifler"], firepower: 84, consistency: 89, support: 90 },
      { name: "SmithZz", roles: ["AWPer", "Support"], firepower: 79, consistency: 87, support: 88 },
      { name: "Ex6tenZ", roles: ["IGL"], firepower: 78, consistency: 93, igl: 90 },
    ]
  },

  {
    team: "G2 Esports",
    year: "2017",
    players: [
      { name: "shox", roles: ["IGL", "Rifler"], firepower: 97, consistency: 93, igl: 90 },
      { name: "ScreaM", roles: ["Rifler"], firepower: 98, consistency: 84 },
      { name: "apEX", roles: ["Rifler"], firepower: 92, consistency: 83 },
      { name: "bodyy", roles: ["Support", "Rifler"], firepower: 81, consistency: 87, support: 85 },
      { name: "NBK-", roles: ["Support", "Rifler"], firepower: 86, consistency: 87, support: 89 },
      { name: "RpK", roles: ["Support", "Rifler"], firepower: 84, consistency: 89, support: 90 },
      { name: "SmithZz", roles: ["AWPer", "Support"], firepower: 79, consistency: 87, support: 88 },
      { name: "kennyS", roles: ["AWPer"], firepower: 94, consistency: 89 },
      { name: "Ex6tenZ", roles: ["IGL"], firepower: 78, consistency: 93, igl: 90 },
    ]
  },

  {
    team: "mousesports",
    year: "2018",
    players: [
      { name: "oskar", roles: ["AWPer"], firepower: 95, consistency: 90 },
      { name: "ropz", roles: ["Rifler"], firepower: 91, consistency: 92 },
      { name: "suNny", roles: ["Rifler"], firepower: 95, consistency: 87 },
      { name: "STYKO", roles: ["Support", "Rifler"], firepower: 74, consistency: 87, support: 93 },
      { name: "chrisJ", roles: ["IGL", "AWPer"], firepower: 82, consistency: 88, igl: 86 },
      { name: "Snax", roles: ["Rifler"], firepower: 84, consistency: 85 },
    ]
  },

  {
    team: "mousesports",
    year: "2019",
    players: [
      { name: "karrigan", roles: ["IGL"], firepower: 68, consistency: 89, igl: 98 },
      { name: "woxic", roles: ["AWPer"], firepower: 94, consistency: 87 },
      { name: "ropz", roles: ["Rifler"], firepower: 91, consistency: 94 },
      { name: "frozen", roles: ["Rifler"], firepower: 88, consistency: 86 },
      { name: "chrisJ", roles: ["AWPer", "Support", "Rifler"], firepower: 82, consistency: 87, support: 88 },
      { name: "suNny", roles: ["Rifler"], firepower: 87, consistency: 85 },
      { name: "STYKO", roles: ["Support", "Rifler"], firepower: 74, consistency: 87, support: 93 },
      { name: "oskar", roles: ["AWPer"], firepower: 92, consistency: 88 }
    ]
  },

  {
    team: "Content Creators",
    year: "Wildcard",
    players: [
      { name: "fl0m", roles: ["Wildcard"], firepower: 73, consistency: 85, support: 84, igl: 75 },
      { name: "WarOwl", roles: ["Wildcard"], firepower: 65, consistency: 88, support: 90, igl: 80 },
      { name: "ohnePixel", roles: ["Wildcard"], firepower: 25, consistency: 43, support: 14, igl: 0 },
      { name: "Anomaly", roles: ["Wildcard"], firepower: 54, consistency: 80, support: 20, igl: 2 },
      { name: "Sparkles", roles: ["Wildcard"], firepower: 55, consistency: 84, support: 82, igl: 43 },
      { name: "Arrow", roles: ["Wildcard"], firepower: 43, consistency: 85, support: 38, igl: 44 },
      { name: "iiTzTimmy", roles: ["Wildcard"], firepower: 66, consistency: 85, support: 50, igl: 0 },
      { name: "dona", roles: ["Wildcard"], firepower: 34, consistency: 45, support: 53, igl: 23 },
      { name: "psp1g", roles: ["Wildcard"], firepower: 44, consistency: 75, support: 45, igl: 42 },
      { name: "dima_wallhacks", roles: ["Wildcard"], firepower: 65, consistency: 85, support: 45, igl: 39 },
      { name: "d0cc", roles: ["Wildcard"], firepower: 71, consistency: 68, support: 60, igl: 24 },
      { name: "dona", roles: ["Wildcard"], firepower: 54, consistency: 45, support: 23, igl: 23 },
      { name: "FURIOUS", roles: ["Wildcard"], firepower: 60, consistency: 67, support: 56, igl: 34 },
      { name: "nocries", roles: ["Wildcard"], firepower: 89, consistency: 87, support: 73, igl: 20 },
      { name: "olofmeister", roles: ["Wildcard"], firepower: 80, consistency: 82, support: 57, igl: 34 },
      { name: "DemeNishiki", roles: ["Wildcard"], firepower: 44, consistency: 31, support: 40, igl: 10 },
      { name: "HOUNGOUNGAGNE", roles: ["Wildcard"], firepower: 52, consistency: 43, support: 23, igl: 23 },
    ]
  }
];
