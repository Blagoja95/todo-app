import View from "./view.js";
import Model from "./model.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // init
    this.controleTheme(this.model.theme);

    // handlers
    view.bindThemeChange(this.handleThemeChange.bind(this));

    // callbacks
    model.bindThemeChangeModel(this.controleTheme.bind(this));
  }

  controleTheme(state) {
    this.view.changeTheme(state);
  }

  handleThemeChange() {
    this.model.themeChange();
    console.log("Btn is clicked");
  }
}

const app = new Controller(new Model(), new View());
