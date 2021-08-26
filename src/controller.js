function changePage(newPageName) {
  model.router.currentPage = newPageName;
  updateView();
}
function pageChange(get, set, val) {
  let index = set.indexOf(get);
  let tmp;
  index == 0 && val == "-"
    ? (tmp = set[set.length - 1])
    : index == set.length - 1 && val == "+"
    ? (tmp = set[0])
    : val == "-"
    ? ((index -= 1), (tmp = set[index]))
    : val == "+"
    ? ((index += 1), (tmp = set[index]))
    : (tmp = set[val]);
  model.router.currentPage = tmp;
  updateView();
  //return model.router.currentPage;
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
