let team = [];
let currentTeamYear = null;

function showPlayers() {
  const optionsDiv = document.getElementById("player-options");
  const title = document.getElementById("draft-title");

  optionsDiv.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * teamYears.length);
  currentTeamYear = teamYears[randomIndex];

  title.textContent = currentTeamYear.team + " - " + currentTeamYear.year;

  for (let i = 0; i < currentTeamYear.players.length; i++) {
    const player = currentTeamYear.players[i];

    const button = document.createElement("button");
    button.textContent = player.name + " | " + player.role;

    button.onclick = function () {
      draftPlayer(player, currentTeamYear);
    };

    optionsDiv.appendChild(button);
  }
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

  const draftedPlayer = {
    ...player,
    team: teamYear.team,
    year: teamYear.year
  };

  team.push(draftedPlayer);
  updateTeam();

  if (team.length < 5) {
    showPlayers();
  } else {
    document.getElementById("player-options").innerHTML = "";
    document.getElementById("draft-title").textContent = "Team complete";
  }
}

function updateTeam() {
  const teamList = document.getElementById("team-list");
  teamList.innerHTML = "";

  for (let i = 0; i < team.length; i++) {
    const item = document.createElement("li");
    item.textContent =
      team[i].name + " - " +
      team[i].role + " - " +
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

  let awperCount = 0;
  let iglCount = 0;
  let supportCount = 0;

  for (let i = 0; i < team.length; i++) {
    firepowerTotal += team[i].firepower;
    consistencyTotal += team[i].consistency;
    supportTotal += team[i].support;
    iglTotal += team[i].igl;
    chemistryTotal += team[i].chemistry;

    if (team[i].role === "AWPer") {
      awperCount++;
    }

    if (team[i].role === "IGL") {
      iglCount++;
    }

    if (team[i].role === "Support") {
      supportCount++;
    }
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

  if (iglCount === 0) {
    eraScore -= 15;
  }

  if (supportCount === 0) {
    eraScore -= 10;
  }

  if (awperCount > 1) {
    eraScore -= 8;
  }

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

  document.getElementById("team-list").innerHTML = "";
  document.getElementById("result").textContent = "";
  document.getElementById("play-again-button").style.display = "none";

  showPlayers();
}
  showPlayers();