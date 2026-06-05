const teamYears = [
  {
    team: "Fnatic",
    year: "2013",
    players: [
      { name: "JW", role: "AWPer", firepower: 92, consistency: 86, support: 65, igl: 35, chemistry: 88 },
      { name: "flusha", role: "Rifler", firepower: 91, consistency: 92, support: 82, igl: 70, chemistry: 92 },
      { name: "pronax", role: "IGL", firepower: 76, consistency: 84, support: 88, igl: 94, chemistry: 91 },
      { name: "MODDII", role: "Rifler", firepower: 86, consistency: 82, support: 72, igl: 35, chemistry: 84 },
      { name: "Devilwalk", role: "Support", firepower: 78, consistency: 80, support: 90, igl: 45, chemistry: 86 }
    ]
  },

  {
    team: "Virtus.pro",
    year: "2014",
    players: [
      { name: "TaZ", role: "IGL", firepower: 82, consistency: 86, support: 88, igl: 90, chemistry: 96 },
      { name: "NEO", role: "Rifler", firepower: 88, consistency: 90, support: 85, igl: 78, chemistry: 96 },
      { name: "pashaBiceps", role: "AWPer", firepower: 90, consistency: 84, support: 70, igl: 35, chemistry: 94 },
      { name: "Snax", role: "Lurker", firepower: 91, consistency: 89, support: 82, igl: 55, chemistry: 95 },
      { name: "byali", role: "Entry", firepower: 86, consistency: 84, support: 76, igl: 35, chemistry: 92 }
    ]
  },

  {
    team: "Ninjas in Pyjamas",
    year: "2014",
    players: [
      { name: "GeT_RiGhT", role: "Lurker", firepower: 96, consistency: 96, support: 82, igl: 45, chemistry: 98 },
      { name: "f0rest", role: "Rifler", firepower: 95, consistency: 94, support: 78, igl: 45, chemistry: 97 },
      { name: "Xizt", role: "IGL", firepower: 82, consistency: 87, support: 86, igl: 91, chemistry: 96 },
      { name: "friberg", role: "Entry", firepower: 86, consistency: 84, support: 80, igl: 35, chemistry: 94 },
      { name: "Fifflaren", role: "Support", firepower: 75, consistency: 80, support: 90, igl: 40, chemistry: 92 }
    ]
  },

  {
    team: "Team LDLC",
    year: "2014",
    players: [
      { name: "Happy", role: "IGL", firepower: 89, consistency: 87, support: 82, igl: 91, chemistry: 90 },
      { name: "shox", role: "Rifler", firepower: 94, consistency: 90, support: 76, igl: 60, chemistry: 90 },
      { name: "NBK-", role: "Support", firepower: 84, consistency: 86, support: 92, igl: 65, chemistry: 89 },
      { name: "SmithZz", role: "AWPer", firepower: 82, consistency: 82, support: 80, igl: 40, chemistry: 86 },
      { name: "kioShiMa", role: "Rifler", firepower: 85, consistency: 84, support: 86, igl: 45, chemistry: 88 }
    ]
  },

  {
    team: "Fnatic",
    year: "2015",
    players: [
      { name: "olofmeister", role: "Rifler", firepower: 99, consistency: 96, support: 84, igl: 40, chemistry: 97 },
      { name: "JW", role: "AWPer", firepower: 94, consistency: 88, support: 68, igl: 35, chemistry: 94 },
      { name: "flusha", role: "Rifler", firepower: 93, consistency: 95, support: 86, igl: 75, chemistry: 97 },
      { name: "KRIMZ", role: "Support", firepower: 88, consistency: 94, support: 98, igl: 50, chemistry: 98 },
      { name: "pronax", role: "IGL", firepower: 76, consistency: 84, support: 89, igl: 95, chemistry: 95 }
    ]
  },

  {
    team: "Team EnVyUs",
    year: "2015",
    players: [
      { name: "kennyS", role: "AWPer", firepower: 98, consistency: 90, support: 60, igl: 35, chemistry: 88 },
      { name: "apEX", role: "Entry", firepower: 90, consistency: 84, support: 78, igl: 60, chemistry: 88 },
      { name: "NBK-", role: "Support", firepower: 84, consistency: 86, support: 93, igl: 65, chemistry: 89 },
      { name: "Happy", role: "IGL", firepower: 88, consistency: 84, support: 80, igl: 90, chemistry: 85 },
      { name: "kioShiMa", role: "Rifler", firepower: 84, consistency: 84, support: 87, igl: 45, chemistry: 87 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2015",
    players: [
      { name: "GuardiaN", role: "AWPer", firepower: 97, consistency: 93, support: 65, igl: 35, chemistry: 88 },
      { name: "Edward", role: "Entry", firepower: 86, consistency: 84, support: 82, igl: 40, chemistry: 86 },
      { name: "flamie", role: "Rifler", firepower: 89, consistency: 85, support: 76, igl: 35, chemistry: 84 },
      { name: "seized", role: "Support", firepower: 82, consistency: 84, support: 90, igl: 60, chemistry: 85 },
      { name: "Zeus", role: "IGL", firepower: 76, consistency: 82, support: 88, igl: 92, chemistry: 88 }
    ]
  },

  {
    team: "Luminosity Gaming",
    year: "2016",
    players: [
      { name: "coldzera", role: "Rifler", firepower: 98, consistency: 97, support: 82, igl: 45, chemistry: 96 },
      { name: "FalleN", role: "IGL", firepower: 91, consistency: 91, support: 86, igl: 96, chemistry: 97 },
      { name: "fer", role: "Entry", firepower: 93, consistency: 88, support: 78, igl: 40, chemistry: 95 },
      { name: "TACO", role: "Support", firepower: 78, consistency: 84, support: 96, igl: 35, chemistry: 95 },
      { name: "fnx", role: "Rifler", firepower: 88, consistency: 86, support: 82, igl: 40, chemistry: 94 }
    ]
  },

  {
    team: "SK Gaming",
    year: "2016",
    players: [
      { name: "coldzera", role: "Rifler", firepower: 99, consistency: 97, support: 82, igl: 45, chemistry: 96 },
      { name: "FalleN", role: "IGL", firepower: 92, consistency: 92, support: 86, igl: 97, chemistry: 97 },
      { name: "fer", role: "Entry", firepower: 94, consistency: 89, support: 78, igl: 40, chemistry: 95 },
      { name: "TACO", role: "Support", firepower: 78, consistency: 84, support: 96, igl: 35, chemistry: 95 },
      { name: "fnx", role: "Rifler", firepower: 88, consistency: 86, support: 82, igl: 40, chemistry: 94 }
    ]
  },

  {
    team: "Astralis",
    year: "2017",
    players: [
      { name: "device", role: "AWPer", firepower: 96, consistency: 97, support: 78, igl: 45, chemistry: 96 },
      { name: "dupreeh", role: "Entry", firepower: 90, consistency: 91, support: 84, igl: 50, chemistry: 96 },
      { name: "Xyp9x", role: "Support", firepower: 84, consistency: 94, support: 99, igl: 55, chemistry: 97 },
      { name: "gla1ve", role: "IGL", firepower: 81, consistency: 90, support: 93, igl: 99, chemistry: 98 },
      { name: "Kjaerbye", role: "Rifler", firepower: 88, consistency: 84, support: 78, igl: 35, chemistry: 90 }
    ]
  },

  {
    team: "Gambit",
    year: "2017",
    players: [
      { name: "AdreN", role: "Rifler", firepower: 92, consistency: 88, support: 80, igl: 45, chemistry: 88 },
      { name: "HObbit", role: "Rifler", firepower: 89, consistency: 86, support: 78, igl: 35, chemistry: 86 },
      { name: "mou", role: "AWPer", firepower: 86, consistency: 84, support: 70, igl: 35, chemistry: 84 },
      { name: "Dosia", role: "Support", firepower: 82, consistency: 84, support: 88, igl: 45, chemistry: 86 },
      { name: "Zeus", role: "IGL", firepower: 76, consistency: 82, support: 88, igl: 93, chemistry: 88 }
    ]
  },

  {
    team: "Cloud9",
    year: "2018",
    players: [
      { name: "Skadoodle", role: "AWPer", firepower: 90, consistency: 86, support: 70, igl: 35, chemistry: 90 },
      { name: "Stewie2K", role: "Entry", firepower: 88, consistency: 84, support: 82, igl: 65, chemistry: 90 },
      { name: "tarik", role: "IGL", firepower: 88, consistency: 86, support: 84, igl: 88, chemistry: 91 },
      { name: "autimatic", role: "Rifler", firepower: 91, consistency: 90, support: 80, igl: 40, chemistry: 91 },
      { name: "RUSH", role: "Support", firepower: 78, consistency: 84, support: 94, igl: 35, chemistry: 90 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2018",
    players: [
      { name: "NiKo", role: "Rifler", firepower: 98, consistency: 94, support: 72, igl: 70, chemistry: 84 },
      { name: "rain", role: "Entry", firepower: 91, consistency: 88, support: 82, igl: 35, chemistry: 87 },
      { name: "GuardiaN", role: "AWPer", firepower: 94, consistency: 90, support: 65, igl: 35, chemistry: 86 },
      { name: "karrigan", role: "IGL", firepower: 76, consistency: 84, support: 92, igl: 97, chemistry: 90 },
      { name: "olofmeister", role: "Support", firepower: 88, consistency: 88, support: 88, igl: 45, chemistry: 88 }
    ]
  },

  {
    team: "Astralis",
    year: "2018",
    players: [
      { name: "device", role: "AWPer", firepower: 97, consistency: 99, support: 80, igl: 45, chemistry: 99 },
      { name: "dupreeh", role: "Entry", firepower: 91, consistency: 92, support: 86, igl: 50, chemistry: 99 },
      { name: "Xyp9x", role: "Support", firepower: 85, consistency: 95, support: 100, igl: 55, chemistry: 100 },
      { name: "gla1ve", role: "IGL", firepower: 82, consistency: 92, support: 95, igl: 100, chemistry: 100 },
      { name: "Magisk", role: "Rifler", firepower: 92, consistency: 93, support: 88, igl: 45, chemistry: 99 }
    ]
  },

  {
    team: "Team Liquid",
    year: "2019",
    players: [
      { name: "EliGE", role: "Rifler", firepower: 97, consistency: 94, support: 82, igl: 45, chemistry: 92 },
      { name: "NAF", role: "Lurker", firepower: 94, consistency: 95, support: 84, igl: 45, chemistry: 92 },
      { name: "Twistzz", role: "Rifler", firepower: 93, consistency: 91, support: 78, igl: 35, chemistry: 91 },
      { name: "nitr0", role: "IGL", firepower: 82, consistency: 86, support: 88, igl: 92, chemistry: 91 },
      { name: "Stewie2K", role: "Entry", firepower: 87, consistency: 84, support: 82, igl: 65, chemistry: 90 }
    ]
  },

  {
    team: "Astralis",
    year: "2019",
    players: [
      { name: "device", role: "AWPer", firepower: 97, consistency: 99, support: 80, igl: 45, chemistry: 100 },
      { name: "dupreeh", role: "Entry", firepower: 91, consistency: 92, support: 86, igl: 50, chemistry: 100 },
      { name: "Xyp9x", role: "Support", firepower: 85, consistency: 95, support: 100, igl: 55, chemistry: 100 },
      { name: "gla1ve", role: "IGL", firepower: 82, consistency: 92, support: 95, igl: 100, chemistry: 100 },
      { name: "Magisk", role: "Rifler", firepower: 92, consistency: 93, support: 88, igl: 45, chemistry: 100 }
    ]
  },

  {
    team: "ENCE",
    year: "2019",
    players: [
      { name: "allu", role: "AWPer", firepower: 88, consistency: 86, support: 70, igl: 65, chemistry: 88 },
      { name: "Aerial", role: "Entry", firepower: 85, consistency: 84, support: 78, igl: 35, chemistry: 87 },
      { name: "sergej", role: "Rifler", firepower: 90, consistency: 86, support: 75, igl: 35, chemistry: 87 },
      { name: "xseveN", role: "Support", firepower: 80, consistency: 84, support: 92, igl: 35, chemistry: 87 },
      { name: "Aleksib", role: "IGL", firepower: 78, consistency: 85, support: 90, igl: 93, chemistry: 89 }
    ]
  },

  {
    team: "AVANGAR",
    year: "2019",
    players: [
      { name: "Jame", role: "IGL", firepower: 89, consistency: 91, support: 80, igl: 94, chemistry: 90 },
      { name: "buster", role: "Rifler", firepower: 84, consistency: 84, support: 78, igl: 35, chemistry: 86 },
      { name: "qikert", role: "Entry", firepower: 85, consistency: 84, support: 80, igl: 45, chemistry: 87 },
      { name: "SANJI", role: "Support", firepower: 74, consistency: 82, support: 96, igl: 35, chemistry: 88 },
      { name: "AdreN", role: "Rifler", firepower: 82, consistency: 84, support: 82, igl: 55, chemistry: 86 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2021",
    players: [
      { name: "s1mple", role: "AWPer", firepower: 100, consistency: 98, support: 65, igl: 40, chemistry: 95 },
      { name: "electroNic", role: "Rifler", firepower: 95, consistency: 93, support: 80, igl: 60, chemistry: 94 },
      { name: "b1t", role: "Rifler", firepower: 92, consistency: 90, support: 78, igl: 35, chemistry: 93 },
      { name: "Perfecto", role: "Support", firepower: 82, consistency: 91, support: 98, igl: 35, chemistry: 94 },
      { name: "Boombl4", role: "IGL", firepower: 78, consistency: 84, support: 90, igl: 93, chemistry: 93 }
    ]
  },

  {
    team: "G2 Esports",
    year: "2021",
    players: [
      { name: "NiKo", role: "Rifler", firepower: 99, consistency: 95, support: 72, igl: 60, chemistry: 88 },
      { name: "huNter-", role: "Rifler", firepower: 90, consistency: 89, support: 82, igl: 45, chemistry: 89 },
      { name: "nexa", role: "IGL", firepower: 82, consistency: 86, support: 88, igl: 90, chemistry: 88 },
      { name: "AmaNEk", role: "AWPer", firepower: 80, consistency: 82, support: 84, igl: 40, chemistry: 86 },
      { name: "JaCkz", role: "Entry", firepower: 82, consistency: 82, support: 84, igl: 35, chemistry: 88 }
    ]
  },

  {
    team: "FaZe Clan",
    year: "2022",
    players: [
      { name: "broky", role: "AWPer", firepower: 92, consistency: 92, support: 72, igl: 35, chemistry: 95 },
      { name: "ropz", role: "Lurker", firepower: 94, consistency: 96, support: 84, igl: 45, chemistry: 97 },
      { name: "Twistzz", role: "Rifler", firepower: 92, consistency: 91, support: 80, igl: 35, chemistry: 95 },
      { name: "rain", role: "Entry", firepower: 91, consistency: 88, support: 84, igl: 35, chemistry: 95 },
      { name: "karrigan", role: "IGL", firepower: 76, consistency: 84, support: 92, igl: 99, chemistry: 98 }
    ]
  },

  {
    team: "Outsiders",
    year: "2022",
    players: [
      { name: "Jame", role: "IGL", firepower: 90, consistency: 93, support: 82, igl: 96, chemistry: 94 },
      { name: "FL1T", role: "Rifler", firepower: 87, consistency: 87, support: 82, igl: 35, chemistry: 90 },
      { name: "fame", role: "Rifler", firepower: 86, consistency: 86, support: 80, igl: 35, chemistry: 90 },
      { name: "n0rb3r7", role: "Entry", firepower: 82, consistency: 82, support: 82, igl: 35, chemistry: 88 },
      { name: "Qikert", role: "Support", firepower: 80, consistency: 84, support: 90, igl: 45, chemistry: 90 }
    ]
  },

  {
    team: "Heroic",
    year: "2022",
    players: [
      { name: "cadiaN", role: "IGL", firepower: 88, consistency: 89, support: 84, igl: 96, chemistry: 95 },
      { name: "stavn", role: "Rifler", firepower: 93, consistency: 92, support: 82, igl: 35, chemistry: 93 },
      { name: "TeSeS", role: "Entry", firepower: 86, consistency: 86, support: 84, igl: 35, chemistry: 92 },
      { name: "sjuush", role: "Support", firepower: 82, consistency: 87, support: 94, igl: 35, chemistry: 92 },
      { name: "jabbi", role: "Rifler", firepower: 86, consistency: 84, support: 80, igl: 35, chemistry: 90 }
    ]
  },

  {
    team: "Team Vitality",
    year: "2023",
    players: [
      { name: "ZywOo", role: "AWPer", firepower: 100, consistency: 99, support: 75, igl: 40, chemistry: 96 },
      { name: "apEX", role: "IGL", firepower: 78, consistency: 84, support: 90, igl: 96, chemistry: 95 },
      { name: "Magisk", role: "Rifler", firepower: 90, consistency: 92, support: 90, igl: 55, chemistry: 95 },
      { name: "dupreeh", role: "Entry", firepower: 86, consistency: 87, support: 86, igl: 50, chemistry: 94 },
      { name: "Spinx", role: "Lurker", firepower: 93, consistency: 92, support: 80, igl: 35, chemistry: 94 }
    ]
  },

  {
    team: "GamerLegion",
    year: "2023",
    players: [
      { name: "iM", role: "Rifler", firepower: 92, consistency: 88, support: 78, igl: 35, chemistry: 88 },
      { name: "siuhy", role: "IGL", firepower: 80, consistency: 86, support: 90, igl: 94, chemistry: 90 },
      { name: "acoR", role: "AWPer", firepower: 84, consistency: 84, support: 70, igl: 35, chemistry: 86 },
      { name: "Keoz", role: "Entry", firepower: 80, consistency: 82, support: 84, igl: 35, chemistry: 86 },
      { name: "isak", role: "Support", firepower: 78, consistency: 84, support: 92, igl: 35, chemistry: 86 }
    ]
  },

  {
    team: "Natus Vincere",
    year: "2024",
    players: [
      { name: "w0nderful", role: "AWPer", firepower: 91, consistency: 91, support: 72, igl: 35, chemistry: 93 },
      { name: "b1t", role: "Rifler", firepower: 92, consistency: 90, support: 80, igl: 35, chemistry: 93 },
      { name: "iM", role: "Rifler", firepower: 88, consistency: 86, support: 78, igl: 35, chemistry: 91 },
      { name: "jL", role: "Entry", firepower: 91, consistency: 89, support: 84, igl: 35, chemistry: 94 },
      { name: "Aleksib", role: "IGL", firepower: 78, consistency: 86, support: 90, igl: 95, chemistry: 94 }
    ]
  },

  {
    team: "Team Spirit",
    year: "2024",
    players: [
      { name: "donk", role: "Entry", firepower: 100, consistency: 96, support: 78, igl: 35, chemistry: 94 },
      { name: "sh1ro", role: "AWPer", firepower: 96, consistency: 97, support: 72, igl: 35, chemistry: 94 },
      { name: "zont1x", role: "Rifler", firepower: 86, consistency: 87, support: 82, igl: 35, chemistry: 91 },
      { name: "magixx", role: "Support", firepower: 82, consistency: 86, support: 92, igl: 35, chemistry: 91 },
      { name: "chopper", role: "IGL", firepower: 78, consistency: 84, support: 88, igl: 93, chemistry: 92 }
    ]
  },

  {
    team: "Team Vitality",
    year: "2025",
    players: [
      { name: "ZywOo", role: "AWPer", firepower: 100, consistency: 99, support: 75, igl: 40, chemistry: 97 },
      { name: "ropz", role: "Lurker", firepower: 95, consistency: 96, support: 84, igl: 45, chemistry: 96 },
      { name: "flameZ", role: "Entry", firepower: 91, consistency: 89, support: 82, igl: 35, chemistry: 94 },
      { name: "mezii", role: "Support", firepower: 84, consistency: 88, support: 94, igl: 65, chemistry: 94 },
      { name: "apEX", role: "IGL", firepower: 78, consistency: 84, support: 90, igl: 96, chemistry: 96 }
    ]
  },

  {
    team: "The MongolZ",
    year: "2025",
    players: [
      { name: "910", role: "AWPer", firepower: 89, consistency: 88, support: 70, igl: 35, chemistry: 92 },
      { name: "bLitz", role: "IGL", firepower: 84, consistency: 86, support: 88, igl: 91, chemistry: 93 },
      { name: "Techno4K", role: "Entry", firepower: 88, consistency: 87, support: 82, igl: 35, chemistry: 92 },
      { name: "mzinho", role: "Support", firepower: 84, consistency: 86, support: 92, igl: 35, chemistry: 91 },
      { name: "Senzu", role: "Rifler", firepower: 90, consistency: 88, support: 80, igl: 35, chemistry: 92 }
    ]
  }
];