function pageChange(get, set, val) {
  let index = set.indexOf(get);
  if (index == 0 && val == "-") {
    model.router.currentPage =
      model.router.pages[model.router.pages.length - 1];
  } else if (index == model.router.pages.length - 1 && val == "+") {
    model.router.currentPage = model.router.pages[0];
  } else if (val == "-") {
    index -= 1;
    model.router.currentPage = model.router.pages[index];
  } else if (val == "+") {
    index += 1;
    model.router.currentPage = model.router.pages[index];
  }
  return model.router.currentPage;
}
pageChange(model.router.currentPage, model.router.pages, "-");
pageChange(model.router.currentPage, model.router.pages, "+");

function pageChange(get, set, val) {
  let tmp;
  let index = set.indexOf(get);
  if (val === "-" && index == 0) {
    index = set.length;
    tmp = set[index];
    console.log(index);
  } else if (val === "+" && index == set.length - 1) tmp = set[0];
  if (val == "-" && index != 0) {
    index--;
    tmp = set[index];
  } else if (val == "+" && index != set.length - 1) {
    index++;
    tmp = set[index];
    console.log(index);
  } else tmp = set[val];
  model.router.currentPage = tmp;
  return tmp;
}

function pageChange(get, set, val) {
  let index = set.indexOf(get);
  let tmp;
  if (index == 0 && val == "-") {
    tmp = set[set.length - 1];
  } else if (index == set.length - 1 && val == "+") {
    tmp = set[0];
  } else if (val == "-") {
    index -= 1;
    tmp = set[index];
  } else if (val == "+") {
    index += 1;
    tmp = set[index];
  } else {
    tmp = set[val];
  }
  model.router.currentPage = tmp;
  return tmp;
}
pageChange(model.router.currentPage, model.router.pages, "-");
