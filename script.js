let team = [];
let currentTeamYear = null;
let rerollUsed = false;

const requiredRoles = [
  { slot: "IGL", role: "IGL" },
  { slot: "AWPer", role: "AWPer" },
  { slot: "Support", role: "Support" },
  { slot: "Rifler 1", role: "Rifler" },
  { slot: "Rifler 2", role: "Rifler" }
];

function updateSimulateButton() {
  const simulateButton = document.getElementById("simulate-button");

  if (team.length < 5) {
    simulateButton.style.display = "none";
  } else {
    simulateButton.style.display = "block";
  }
}

function showPlayers(useCurrentTeamYear = false) {
  const optionsDiv = document.getElementById("player-options");
  const title = document.getElementById("draft-title");
  const roleNeeded = document.getElementById("role-needed");

  optionsDiv.innerHTML = "";

  if (useCurrentTeamYear === false || currentTeamYear === null) {
    let validTeams = [];

    for (let i = 0; i < teamYears.length; i++) {
      if (canTeamProvideUsefulPlayer(teamYears[i])) {
        validTeams.push(teamYears[i]);
      }
    }

    if (validTeams.length === 0) {
      alert("No valid teams remain. Starting a new draft.");
      playAgain();
      return;
    }

    const randomIndex = Math.floor(Math.random() * validTeams.length);
    currentTeamYear = validTeams[randomIndex];
  }

  title.style.display = "flex";
  title.textContent = currentTeamYear.team + " - " + currentTeamYear.year;

  if (roleNeeded) {
    const remainingRoles = getRemainingRoles();
    let displayRoles = [];
    updateRemainingRolesDisplay();

    for (let i = 0; i < remainingRoles.length; i++) {
      if (
        remainingRoles[i].slot === "Rifler 1" ||
        remainingRoles[i].slot === "Rifler 2"
      ) {
        displayRoles.push("Rifler");
      } else {
        displayRoles.push(remainingRoles[i].slot);
      }
    }

    roleNeeded.textContent =
      "Remaining Roles: " + displayRoles.join(", ");
  }

  for (let i = 0; i < currentTeamYear.players.length; i++) {
    const player = currentTeamYear.players[i];

    const button = document.createElement("button");
      button.textContent = player.name + " | " + player.roles.join(" / ");

      if (!canPlayerFillRemainingRole(player)) {
        button.disabled = true;
        button.classList.add("disabled-role-button");
      } else {
        button.onclick = function () {
          showRoleChoices(player, currentTeamYear);
        };
      }

      optionsDiv.appendChild(button);
  }

  updateSimulateButton();
}

function updateTeamSection() {
  const teamSection = document.getElementById("team-section");

  if (teamSection) {
    if (team.length > 0) {
      teamSection.style.display = "block";
    } else {
      teamSection.style.display = "none";
    }
  }
}

function rerollTeam() {
  if (rerollUsed) {
    alert("You already used your reroll.");
    return;
  }

  if (team.length >= 5) {
    alert("You cannot reroll after your team is complete.");
    return;
  }

  rerollUsed = true;
  currentTeamYear = null;

  spinForTeam();

  const rerollButton = document.getElementById("reroll-button");
  if (rerollButton) {
    rerollButton.style.display = "none";
  }
}

function updateRemainingRolesDisplay() {
  const roleNeeded = document.getElementById("role-needed");

  if (!roleNeeded) {
    return;
  }

  const remainingRoles = getRemainingRoles();
  let displayRoles = [];

  for (let i = 0; i < remainingRoles.length; i++) {
    if (
      remainingRoles[i].slot === "Rifler 1" ||
      remainingRoles[i].slot === "Rifler 2"
    ) {
      displayRoles.push("Rifler");
    } else {
      displayRoles.push(remainingRoles[i].slot);
    }
  }

  roleNeeded.textContent =
    "Remaining Roles: " + displayRoles.join(", ");
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

function playerCanFillRole(player, role) {
  return (
    player.roles.includes(role) ||
    player.roles.includes("Wildcard")
  );
}

function isPlayerAlreadyDrafted(player) {
  for (let i = 0; i < team.length; i++) {
    if (team[i].name === player.name) {
      return true;
    }
  }

  return false;
}

function canPlayerFillRemainingRole(player) {
  const remainingRoles = getRemainingRoles();

  for (let i = 0; i < remainingRoles.length; i++) {
    if (playerCanFillRole(player, remainingRoles[i].role)) {
      return true;
    }
  }

  return false;
}

function canTeamProvideUsefulPlayer(teamYear) {
  for (let i = 0; i < teamYear.players.length; i++) {
    const player = teamYear.players[i];

    if (
      isPlayerAlreadyDrafted(player) === false &&
      canPlayerFillRemainingRole(player) === true
    ) {
      return true;
    }
  }

  return false;
}

function showRoleChoices(player, teamYear) {
  const optionsDiv = document.getElementById("player-options");
  const title = document.getElementById("draft-title");
  const roleNeeded = document.getElementById("role-needed");

  if (isPlayerAlreadyDrafted(player)) {
    alert("You already drafted " + player.name + " from another year.");
    return;
  }

  const remainingRoles = getRemainingRoles();
  let availableRoles = [];

  for (let i = 0; i < remainingRoles.length; i++) {
    if (playerCanFillRole(player, remainingRoles[i].role)) {
      availableRoles.push(remainingRoles[i]);
    }
  }

  if (availableRoles.length === 0) {
    alert(player.name + " does not fit any remaining role slot.");
    return;
  }

  if (availableRoles.length === 1) {
    draftPlayerWithRole(player, teamYear, availableRoles[0]);
    return;
  }

  if (
    availableRoles.length > 1 &&
    availableRoles.every(role => role.role === "Rifler")
  ) {
    draftPlayerWithRole(player, teamYear, availableRoles[0]);
    return;
  }

  optionsDiv.innerHTML = "";
  title.textContent = "Choose a role for " + player.name;

  if (roleNeeded) {
    roleNeeded.textContent =
      "Available Slots: " + availableRoles.map(role => role.slot).join(", ");
  }

  for (let i = 0; i < requiredRoles.length; i++) {
  const playerCanPlayRole =
    playerCanFillRole(player, requiredRoles[i].role);

  if (!playerCanPlayRole) {
    continue;
  }

  const roleButton = document.createElement("button");

  let roleAlreadyFilled = false;

  for (let j = 0; j < team.length; j++) {
    if (team[j].draftedSlot === requiredRoles[i].slot) {
      roleAlreadyFilled = true;
      break;
    }
  }

  let displayName = requiredRoles[i].slot;

  if (
    displayName === "Rifler 1" ||
    displayName === "Rifler 2"
  ) {
    displayName = "Rifler";
  }

  roleButton.textContent = displayName;

  if (roleAlreadyFilled) {
    continue;
  }

  roleButton.onclick = function () {
    draftPlayerWithRole(
      player,
      teamYear,
      requiredRoles[i]
    );
  };

  optionsDiv.appendChild(roleButton);
}

  const backButton = document.createElement("button");
  backButton.textContent = "Back";

  backButton.onclick = function () {
    showPlayers(true);
  };

  optionsDiv.appendChild(backButton);
}

function draftPlayerWithRole(player, teamYear, chosenSlot) {
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

  let validRole = false;

  for (let i = 0; i < remainingRoles.length; i++) {
    if (
      remainingRoles[i].slot === chosenSlot.slot &&
      playerCanFillRole(player, chosenSlot.role)
    ) {
      validRole = true;
    }
  }

  if (!validRole) {
    alert(player.name + " does not fit that role slot.");
    return;
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
    spinForTeam();
  } else {
    document.getElementById("player-options").innerHTML = "";
    document.getElementById("draft-title").textContent = "Team complete";

    const roleNeeded = document.getElementById("role-needed");
    const rerollButton = document.getElementById("reroll-button");
    if (rerollButton) {
      rerollButton.style.display = "none";
    }

    if (roleNeeded) {
      roleNeeded.textContent = "All roles filled";
    }
  }
}

function getValidTeams() {
  let validTeams = [];

  for (let i = 0; i < teamYears.length; i++) {
    if (canTeamProvideUsefulPlayer(teamYears[i])) {
      validTeams.push(teamYears[i]);
    }
  }

  return validTeams;
}

function spinForTeam() {
  const optionsDiv = document.getElementById("player-options");
  const title = document.getElementById("draft-title");
  const rerollButton = document.getElementById("reroll-button");

  const validTeams = getValidTeams();

  if (validTeams.length === 0) {
    alert("No valid teams remain. Starting a new draft.");
    playAgain();
    return;
  }

  optionsDiv.innerHTML = "";

  title.style.display = "flex";
  title.textContent = "Selecting Team...";

  updateRemainingRolesDisplay();

  if (rerollButton) {
    rerollButton.style.display = "none";
  }

  let spins = 0;
  const maxSpins = 50;

  const spinInterval = setInterval(function () {
    const randomIndex = Math.floor(Math.random() * validTeams.length);
    const randomTeam = validTeams[randomIndex];

    title.textContent =
      randomTeam.team + " - " + randomTeam.year;

    spins++;

    if (spins >= maxSpins) {
      clearInterval(spinInterval);

      const finalIndex = Math.floor(Math.random() * validTeams.length);
      currentTeamYear = validTeams[finalIndex];

      title.textContent =
        currentTeamYear.team + " - " + currentTeamYear.year;

      setTimeout(function () {
        showPlayers(true);

        if (!rerollUsed && rerollButton && team.length < 5) {
          rerollButton.style.display = "inline-flex";
        }
      }, 500);
    }
  }, 40);
}

function updateTeam() {
  const teamList = document.getElementById("team-list");
  teamList.innerHTML = "";

  for (let i = 0; i < team.length; i++) {
    const item = document.createElement("li");

    let displaySlot = team[i].draftedSlot;

    if (
      displaySlot === "Rifler 1" ||
      displaySlot === "Rifler 2"
    ) {
      displaySlot = "Rifler";
    }

    item.textContent =
      displaySlot + ": " +
      team[i].name + " - " +
      team[i].team + " " +
      team[i].year;

        teamList.appendChild(item);
      }

  updateSimulateButton();
  updateTeamSection();
}

function updateSimulateButton() {
  const simulateButton = document.getElementById("simulate-button");

  if (team.length < 5) {
    simulateButton.style.display = "none";
  } else {
    simulateButton.style.display = "block";
  }
}

function startGame() {
  document.getElementById("launch-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  spinForTeam();
  updateSimulateButton();
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
  eraScore += cohesionScore;

  let bestFirepower = Math.max(
    iglPlayer.firepower,
    awperPlayer.firepower,
    supportPlayer.firepower,
    riflers[0].firepower,
    riflers[1].firepower
  );

  if (bestFirepower < 80) {
    eraScore -= 15;
  }
  else if (bestFirepower < 85) {
    eraScore -= 10;
  }
  else if (bestFirepower < 90) {
    eraScore -= 5;
  }
  if (bestFirepower < 92) {
    eraScore -= 5;
  }

  if (iglPlayer.igl < 85) {
    eraScore -= 5;
  }

  let firepowerValues = [
    iglPlayer.firepower,
    awperPlayer.firepower,
    supportPlayer.firepower,
    riflers[0].firepower,
    riflers[1].firepower
  ];

  firepowerValues.sort(function(a, b) {
    return b - a;
  });

  bestFirepower = firepowerValues[0];
  let secondBestFirepower = firepowerValues[1];

  if (secondBestFirepower < 85) {
    eraScore -= 10;
  }
  else if (secondBestFirepower < 90) {
    eraScore -= 5;
  }

  let topFirepowerCount = 0;

  for (let i = 0; i < firepowerValues.length; i++) {
    if (firepowerValues[i] >= 95) {
      topFirepowerCount++;
    }
  }

  if (
    bestFirepower >= 100 &&
    secondBestFirepower >= 96 &&
    topFirepowerCount >= 3 &&
    iglScore >= 95 &&
    supportScore >= 90
  ) {
    eraScore += 4;
  }
  else if (
    bestFirepower >= 100 &&
    secondBestFirepower >= 94 &&
    topFirepowerCount >= 2 &&
    iglScore >= 90 &&
    supportScore >= 85
  ) {
    eraScore += 2;
  }

  eraScore = Math.round(eraScore);

  if (eraScore > 100) {
    eraScore = 100;
  }

  if (eraScore < 0) {
    eraScore = 0;
  }

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
    resultText = "Playoff merchants";
  } else {
    resultText = "Disband immediately";
  }

  document.getElementById("result").textContent =
    "Era Score: " + eraScore + " - " + resultText;

  document.getElementById("score-breakdown").innerHTML =
    "<h3>Score Breakdown</h3>" +
    "<p>Firepower Score: " + firepowerScore.toFixed(1) + "</p>" +
    "<p>IGL Score: " + iglScore.toFixed(1) + "</p>" +
    "<p>Support Score: " + supportScore.toFixed(1) + "</p>" +
    "<p>Consistency Score: " + consistencyScore.toFixed(1) + "</p>" +
    "<p>Cohesion Modifier: " + cohesionScore + "</p>" +
    "<p>Best Firepower: " + bestFirepower + "</p>" +
    "<p>Second Best Firepower: " + secondBestFirepower + "</p>";

  document.getElementById("play-again-button").style.display = "block";
  const simulateButton = document.getElementById("simulate-button");

  if (simulateButton) {
    simulateButton.style.display = "none";
  }
}

function startGame() {
  document.getElementById("launch-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";

  spinForTeam();
  updateSimulateButton();
}

function getValidTeams() {
  let validTeams = [];

  for (let i = 0; i < teamYears.length; i++) {
    if (canTeamProvideUsefulPlayer(teamYears[i])) {
      validTeams.push(teamYears[i]);
    }
  }

  return validTeams;
}

function playAgain() {
  team = [];
  currentTeamYear = null;
  rerollUsed = false;

  document.getElementById("team-list").innerHTML = "";
  document.getElementById("result").textContent = "";
  document.getElementById("score-breakdown").innerHTML = "";
  document.getElementById("play-again-button").style.display = "none";

  updateTeam();
  updateTeamSection();
  updateSimulateButton();

  const rerollButton = document.getElementById("reroll-button");
  if (rerollButton) {
    rerollButton.style.display = "none";
  }

  const simulateButton = document.getElementById("simulate-button");
  if (simulateButton) {
    simulateButton.style.display = "none";
  }

  spinForTeam();
}

function toggleHowToPlay() {
  const panel = document.getElementById("how-to-play-panel");

  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

window.testRoster = function () {
  team = [
    {
      name: "s1mple",
      draftedRole: "AWPer",
      draftedSlot: "AWPer",
      firepower: 100,
      consistency: 95,
      team: "Natus Vincere",
      year: 2019
    },
    {
      name: "olofmeister",
      draftedRole: "Rifler",
      draftedSlot: "Rifler 1",
      firepower: 95,
      consistency: 90,
      team: "LGB eSports",
      year: 2014
    },
    {
      name: "gla1ve",
      draftedRole: "IGL",
      draftedSlot: "IGL",
      firepower: 78,
      consistency: 92,
      igl: 99,
      team: "Astralis",
      year: 2018
    },
    {
      name: "Stewie2K",
      draftedRole: "Rifler",
      draftedSlot: "Rifler 2",
      firepower: 87,
      consistency: 86,
      team: "Team Liquid",
      year: 2019
    },
    {
      name: "Dosia",
      draftedRole: "Support",
      draftedSlot: "Support",
      firepower: 85,
      consistency: 91,
      support: 92,
      team: "Gambit",
      year: 2017
    }
  ];

  updateTeam();
  updateTeamSection();
  updateSimulateButton();
};

updateSimulateButton();
