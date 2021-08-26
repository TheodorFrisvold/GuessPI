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
