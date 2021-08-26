function changePage(newPageName) {
  model.router.currentPage = newPageName;
  updateView();
}
function mainView() {
  console.log("Main");
}
function gameModeView() {
  console.log("GameMode");
}
function gameView() {
  console.log("Game");
}
function leaderboardView() {
  console.log("Leaderboard");
}
function statisticsView() {
  console.log("Statistics");
}
function grabGameMode() {
  let arr = model.gameModes.mode;
  arr.forEach((el) => {
    return console.log(el);
  });
}
function grabPlayers() {
  let index = model.data.players;
  for (key in index) {
    return console.log(index[key]);
  }
}
