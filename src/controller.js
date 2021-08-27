import * as model from "./model.js";

//  function controller() {
const controller = {
  changePage(newPageName) {
    model.router.currentPage = newPageName;
    // updateView();
  },
  //pageChange(model.router.currentPage, model.router.pages, "-");
  pageChange(val, get = model.router.currentPage, set = model.router.pages) {
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
    // updateView();
    //return model.router.currentPage;
  },
  grabGameMode() {
    let arr = model.gameModes.mode;
    arr.forEach((el) => {
      return console.log(el);
    });
  },
  grabPlayers() {
    let index = model.data.players;
    for (key in index) {
      return console.log(index[key]);
    }
  },
  mainView() {
    console.log("Main");
  },
  gameModeView() {
    console.log("GameMode");
  },
  gameView() {
    console.log("Game");
  },
  leaderboardView() {
    console.log("Leaderboard");
  },
  statisticsView() {
    console.log("Statistics");
  },
};

export default controller;
