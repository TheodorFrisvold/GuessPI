import controller from "/src/controller.js";
import model from "/src/model.js";

const app = document.getElementById("app");

updateView();
function updateView() {
  let html;
  //   if (model.router.currentPage == "main") html = mainView();

  //  model.router.pages[model.router.currentPage]

  let curPage = "controller." + model.router.currentPage + "View()";
  eval(curPage);

  html = `
<button onclick="${controller.pageChange(2)}">New Game</button>
<button onclick="${controller.pageChange(3)}">Leaderboard</button>
<button onclick="${controller.pageChange(4)}">Statistics</button>

  `;
  app.innerHTML = html;
}
