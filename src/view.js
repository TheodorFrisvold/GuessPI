const app = document.getElementById("app");
updateView();
function updateView() {
  let html;
  //   if (model.router.currentPage == "main") html = mainView();

  //  model.router.pages[model.router.currentPage]

  let curPage = model.router.currentPage + "View()";
  eval(curPage);

  html = `
<button onclick="changePage('game')">New Game</button>
<button onclick="changePage('leaderboard')">Leaderboard</button>
<button onclick="changePage('statistics')">Statistics</button>
  `;
  app.innerHTML = html;
}

//model.router.indexPages = 0
//let curPage = model.router.pages[model.router.indexPages] + "View()"
//eval(curPage);
//
