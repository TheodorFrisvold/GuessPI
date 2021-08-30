function mainView() {
  html = `
    <h1>${model.router.currentPage}</h1>
    <input type="text" id="playerNameInput" />
    <button onclick="pageChange(2)">New Game</button>
    <button onclick="pageChange(3)">Leaderboard</button>
    <button onclick="pageChange(4)">Statistics</button>
  `;
  console.log(`main ${model.main.playerName}`);
  p1 = model.main.playerName;
  p2 = "playerNameInput";
}
