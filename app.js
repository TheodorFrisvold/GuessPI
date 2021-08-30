const app = document.getElementById("app");
let html;

updateView();
function updateView() {
  let curPage = model.router.currentPage + "View()";
  eval(curPage);

  app.innerHTML = html;
  addEventListenerChanges(p1, p2);
  // addEventListenerChanges();
  console.log(model.main.playerName);
}

// ${viewHer}
