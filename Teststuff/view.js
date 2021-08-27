const app = document.getElementById("app");
updateView();
function updateView() {
  let html;
  //   if (model.router.currentPage == "main") html = mainView();

  //  model.router.pages[model.router.currentPage]

  let curPage = model.router.currentPage + "View()";
  eval(curPage);

  html = `
<button onclick="pageChange(2)">New Game</button>
<button onclick="pageChange(3)">Leaderboard</button>
<button onclick="pageChange(4)">Statistics</button>
${pageStuff}
  `;
  app.innerHTML = html;
}

//model.router.indexPages = 0
//let curPage = model.router.pages[model.router.indexPages] + "View()"
//eval(curPage);
//
