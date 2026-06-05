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
  } else {
    const choice = prompt(
      player.name + " can fit multiple slots. Choose one: " +
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

function simulateEra() {
  if (team.length < 5) {
    alert("Draft 5 players first.");
    return;
  }

  let firepowerTotal = 0;
  let consistencyTotal = 0;
  let supportTotal = 0;
  let iglTotal = 0;
  let chemistryTotal = 0;

  for (let i = 0; i < team.length; i++) {
    firepowerTotal += team[i].firepower;
    consistencyTotal += team[i].consistency;
    supportTotal += team[i].support;
    iglTotal += team[i].igl;
    chemistryTotal += team[i].chemistry;
  }

  let firepowerScore = firepowerTotal / 5;
  let consistencyScore = consistencyTotal / 5;
  let supportScore = supportTotal / 5;
  let iglScore = iglTotal / 5;
  let chemistryScore = chemistryTotal / 5;

  let eraScore =
    firepowerScore * 0.30 +
    consistencyScore * 0.25 +
    supportScore * 0.15 +
    iglScore * 0.20 +
    chemistryScore * 0.10;

  eraScore = Math.round(eraScore);

  let resultText = "";

  if (eraScore >= 95) {
    resultText = "Generational era";
  } else if (eraScore >= 90) {
    resultText = "Back to back Majors";
  } else if (eraScore >= 80) {
    resultText = "Major champions";
  } else if (eraScore >= 70) {
    resultText = "Fluke run";
  } else if (eraScore >= 60) {
    resultText = "Playoff merchants"
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

showPlayers();
