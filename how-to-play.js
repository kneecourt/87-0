function showHowToTab(tabName) {
  const instructionsTab =
    document.getElementById("instructions-tab");

  const teamsTab =
    document.getElementById("teams-tab");

  if (tabName === "instructions") {
    instructionsTab.style.display = "block";
    teamsTab.style.display = "none";
  } else {
    instructionsTab.style.display = "none";
    teamsTab.style.display = "block";

    renderTeamPool();
  }
}

function renderTeamPool() {
  const teamPoolList =
    document.getElementById("team-pool-list");

  teamPoolList.innerHTML = "";

  const sortedTeams = [...teamYears];

  sortedTeams.sort(function(a, b) {
    const yearA = isNaN(Number(a.year))
      ? 9999
      : Number(a.year);

    const yearB = isNaN(Number(b.year))
      ? 9999
      : Number(b.year);

    const yearDifference = yearA - yearB;

    if (yearDifference !== 0) {
      return yearDifference;
    }

    return a.team.localeCompare(b.team);
  });

  for (let i = 0; i < sortedTeams.length; i++) {
    const teamBlock =
      document.createElement("div");

    teamBlock.className = "team-pool-card";

    const title =
      document.createElement("h3");

    if (
      sortedTeams[i].year === undefined ||
      sortedTeams[i].year === null ||
      sortedTeams[i].year === ""
    ) {
      title.textContent = sortedTeams[i].team;
    } else {
      title.textContent =
        sortedTeams[i].team +
        " - " +
        sortedTeams[i].year;
    }

    teamBlock.appendChild(title);

    teamPoolList.appendChild(teamBlock);
  }
}
