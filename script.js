let team = [];
let currentTeamYear = null;

const requiredRoles = [
  { slot: "IGL", role: "IGL" },
  { slot: "AWPer", role: "AWPer" },
  { slot: "Support", role: "Support" },
  { slot: "Rifler 1", role: "Rifler" },
  { slot: "Rifler 2", role: "Rifler" }
];

function showPlayers() {
  const optionsDiv = document.getElementById("player-options");
  const title = document.getElementById("draft-title");
  const roleNeeded = document.getElementById("role-needed");

  optionsDiv.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * teamYears.length);
  currentTeamYear = teamYears[randomIndex];

  title.textContent = currentTeamYear.team + " - " + currentTeamYear.year;

  if (roleNeeded) {
    roleNeeded.textContent =
      "Remaining Roles: " + getRemainingRoles().map(role => role.slot).join(", ");
  }

  for (let i = 0; i < currentTeamYear.players.length; i++) {
    const player = currentTeamYear.players[i];

    const button = document.createElement("button");
    button.textContent = player.name + " | " + player.roles.join(" / ");

    button.onclick = function () {
      draftPlayer(player, currentTeamYear);
    };

    optionsDiv.appendChild(button);
  }
}

function getRemainingRoles() {
  let remainingRoles = [];

  for (let i = 0; i < requiredRoles.length; i++) {
    let slotTaken = false;

    for (let j = 0; j < team.length; j++) {
      if (team[j].draftedSlot === requiredRoles[i].slot) {
        slotTaken = true;
      }
    }

    if (slotTaken === false) {
      remainingRoles.push(requiredRoles[i]);
    }
  }

  return remainingRoles;
}

function draftPlayer(player, teamYear) {
  if (team.length >= 5) {
    alert("Your team already has 5 players.");
    return;
  }

  for (let i = 0; i < team.length; i++) {
    if (team[i].name === player.name) {
      alert("You already drafted " + player.name + " from another year.");
      return;
    }
  }

  const remainingRoles = getRemainingRoles();
  let availableRoles = [];

  for (let i = 0; i < remainingRoles.length; i++) {
    if (player.roles.includes(remainingRoles[i].role)) {
    availableRoles.push(remainingRoles[i]);
    }
  }

  if (availableRoles.length === 0) {
    alert(player.name + " does not fit any remaining role slot.");
    return;
  }

  let chosenSlot = null;

  if (availableRoles.length === 1) {
    chosenSlot = availableRoles[0];
  }

  // Auto-assign if all available slots are the same role
  else if (
    availableRoles.every(role => role.role === availableRoles[0].role)
  ) {
    chosenSlot = availableRoles[0];
  }

  // Otherwise ask the user
  else {
    const choice = prompt(
      player.name + " can fit multiple roles. Choose one: " +
      availableRoles.map(role => role.slot).join(", ")
    );

    for (let i = 0; i < availableRoles.length; i++) {
      if (availableRoles[i].slot === choice) {
        chosenSlot = availableRoles[i];
      }
    }

    if (chosenSlot === null) {
      alert("Invalid role choice.");
      return;
    }
  }

  const draftedPlayer = {
    ...player,
    team: teamYear.team,
    year: teamYear.year,
    draftedRole: chosenSlot.role,
    draftedSlot: chosenSlot.slot
  };

  team.push(draftedPlayer);
  updateTeam();

  if (team.length < 5) {
    showPlayers();
  } else {
    document.getElementById("player-options").innerHTML = "";
    document.getElementById("draft-title").textContent = "Team complete";

    const roleNeeded = document.getElementById("role-needed");
    if (roleNeeded) {
      roleNeeded.textContent = "All roles filled";
    }
  }
}

function updateTeam() {
  const teamList = document.getElementById("team-list");
  teamList.innerHTML = "";

  for (let i = 0; i < team.length; i++) {
    const item = document.createElement("li");

    item.textContent =
      team[i].draftedSlot + ": " +
      team[i].name + " - " +
      team[i].team + " " +
      team[i].year;

    teamList.appendChild(item);
  }
}

function getCohesionScore() {
  let teamCounts = {};

  for (let i = 0; i < team.length; i++) {
    const key = team[i].team + " " + team[i].year;

    if (teamCounts[key] === undefined) {
      teamCounts[key] = 1;
    } else {
      teamCounts[key]++;
    }
  }

  let largestCore = 0;

  for (let key in teamCounts) {
    if (teamCounts[key] > largestCore) {
      largestCore = teamCounts[key];
    }
  }

  if (largestCore >= 5) {
    return 5;
  } else if (largestCore === 4) {
    return 3;
  } else if (largestCore === 3) {
    return 1;
  } else if (largestCore === 2) {
    return -1;
  } else {
    return -3;
  }
}

function simulateEra() {
  if (team.length < 5) {
    alert("Draft 5 players first.");
    return;
  }

  let iglPlayer = null;
  let awperPlayer = null;
  let supportPlayer = null;
  let riflers = [];

  for (let i = 0; i < team.length; i++) {
    if (team[i].draftedSlot === "IGL") {
      iglPlayer = team[i];
    } else if (team[i].draftedSlot === "AWPer") {
      awperPlayer = team[i];
    } else if (team[i].draftedSlot === "Support") {
      supportPlayer = team[i];
    } else if (
      team[i].draftedSlot === "Rifler 1" ||
      team[i].draftedSlot === "Rifler 2"
    ) {
      riflers.push(team[i]);
    }
  }

  if (
    iglPlayer === null ||
    awperPlayer === null ||
    supportPlayer === null ||
    riflers.length < 2
  ) {
    alert("Something went wrong with the drafted roles.");
    return;
  }

  let riflerFirepower =
    (riflers[0].firepower + riflers[1].firepower) / 2;

  let firepowerScore =
    awperPlayer.firepower * 0.40 +
    riflerFirepower * 0.60;

  let iglScore = iglPlayer.igl || 0;
  let supportScore = supportPlayer.support || 0;

  let consistencyScore =
    (
      iglPlayer.consistency +
      awperPlayer.consistency +
      supportPlayer.consistency +
      riflers[0].consistency +
      riflers[1].consistency
    ) / 5;

  let eraScore =
    firepowerScore * 0.40 +
    iglScore * 0.20 +
    supportScore * 0.15 +
    consistencyScore * 0.25;

  let cohesionScore = getCohesionScore();
  if (cohesionScore > 0) {
    eraScore += cohesionScore;
  }

  let bestFirepower = Math.max(
    awperPlayer.firepower,
    riflers[0].firepower,
    riflers[1].firepower
  );

  if (bestFirepower < 90) {
    eraScore -= 5;
  }

  if (awperPlayer.firepower < 85) {
    eraScore -= 4;
  }

  eraScore = Math.round(eraScore);

  if (eraScore > 100) {
    eraScore = 100;
  }

  if (eraScore < 0) {
    eraScore = 0;
  }

  let resultText = "";

  if (eraScore >= 96) {
    resultText = "Generational era";
  } else if (eraScore >= 93) {
    resultText = "Back to back Majors";
  } else if (eraScore >= 86) {
    resultText = "Major champions";
  } else if (eraScore >= 76) {
    resultText = "Fluke run";
  } else if (eraScore >= 65) {
    resultText = "Playoff merchants";
  } else {
    resultText = "Disband immediately";
  }

  document.getElementById("result").textContent =
    "Era Score: " + eraScore + " - " + resultText;

  document.getElementById("play-again-button").style.display = "block";
}

function playAgain() {
  team = [];
  currentTeamYear = null;

  document.getElementById("team-list").innerHTML = "";
  document.getElementById("result").textContent = "";
  document.getElementById("play-again-button").style.display = "none";

  showPlayers();
}

function toggleHowToPlay() {
  const panel = document.getElementById("how-to-play-panel");

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

showPlayers();
