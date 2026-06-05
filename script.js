let team = [];
let currentTeamYear = null;

const requiredRoles = ["IGL", "AWPer", "Support", "Entry", "Rifler"];

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
      "Remaining Roles: " + getRemainingRoles().join(", ");
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
    let roleTaken = false;

    for (let j = 0; j < team.length; j++) {
      if (team[j].draftedRole === requiredRoles[i]) {
        roleTaken = true;
      }
    }

    if (roleTaken === false) {
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

  for (let i = 0; i < player.roles.length; i++) {
    if (remainingRoles.includes(player.roles[i])) {
      availableRoles.push(player.roles[i]);
    }
  }

  if (availableRoles.length === 0) {
    alert(player.name + " does not fit any remaining role slot.");
    return;
  }

  let chosenRole = "";

  if (availableRoles.length === 1) {
    chosenRole = availableRoles[0];
  } else {
    chosenRole = prompt(
      player.name + " can fit multiple roles. Choose one: " +
      availableRoles.join(", ")
    );

    if (!availableRoles.includes(chosenRole)) {
      alert("Invalid role choice.");
      return;
    }
  }

  const draftedPlayer = {
    ...player,
    team: teamYear.team,
    year: teamYear.year,
    draftedRole: chosenRole
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
      team[i].draftedRole + ": " +
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
    resultText = "Era-defining team";
  } else if (eraScore >= 90) {
    resultText = "Dynasty";
  } else if (eraScore >= 80) {
    resultText = "Elite contender";
  } else if (eraScore >= 70) {
    resultText = "Good team";
  } else {
    resultText = "Failed project";
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
