import view from "./view.js";
import * as model from "./model.js";

const clickThemeBtn = function (data) {
  model.saveThemeState(data);
};

// model.checkThemeStatus();

const init = function () {
  view.addHandlerClickThemeBtn(clickThemeBtn);
  //   view.addhandlerLoadTheme(loadTheme);
};

init();
