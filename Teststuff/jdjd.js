function pageChange(get, set, val) {
  let index = set.indexOf(get);
  index == 0 && val == "-"
    ? (model.router.currentPage =
        model.router.pages[model.router.pages.length - 1])
    : index == model.router.pages.length - 1 && val == "+"
    ? (model.router.currentPage = model.router.pages[0])
    : val == "-"
    ? ((index -= 1), (model.router.currentPage = model.router.pages[index]))
    : val == "+"
    ? ((index += 1), (model.router.currentPage = model.router.pages[index]))
    : console.log("Wrong input");
  return model.router.currentPage;
}

// med mulighet for å passe inn value til å gå direkte
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
  return model.router.currentPage;
}
