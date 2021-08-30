//  function controller() {
function changePage(newPageName) {
  model.router.currentPage = newPageName;
  // updateView();
}
//pageChange(model.router.currentPage, model.router.pages, "-");
function pageChange(
  val,
  get = model.router.currentPage,
  set = model.router.pages
) {
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
function getPlayerName(val) {
  console.log(this.value);
  val = model.main.playerName;
  updateView();
}
function addEventListenerChanges(parameter, id) {
  console.log(id);
  inId = document.getElementById(id);
  console.log(inId);
  inId.addEventListener("change", (e) => {
    //"change" = change on deselect, "input" = oneach input
    eval(parameter[e.target.value]);
    console.log(model.main.playerName);
  });
}
