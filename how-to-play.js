function showHowToTab(tabName) {
  const instructionsTab =
    document.getElementById("instructions-tab");

  const teamsTab =
    document.getElementById("teams-tab");

  if (tabName === "instructions") {
    instructionsTab.style.display = "block";
    teamsTab.style.display = "none";
  }
  else {
    instructionsTab.style.display = "none";
    teamsTab.style.display = "block";

    renderTeamPool();
  }
}

function renderTeamPool() {
  const teamPoolList =
    document.getElementById("team-pool-list");

  teamPoolList.innerHTML = "";

  for (let i = 0; i < teamYears.length; i++) {
    const teamBlock =
      document.createElement("div");

    teamBlock.className = "team-pool-card";

    const title =
      document.createElement("h3");

    title.textContent =
      teamYears[i].team +
      " - " +
      teamYears[i].year;

    teamBlock.appendChild(title);

    teamPoolList.appendChild(teamBlock);
  }
}
