import View from "./view.js";
import Model from "./model.js";

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // init
    this.controleTheme(this.model.theme);
    this.controlTask(this.model.tasks);
    // localStorage.clear();

    // handlers
    view.bindThemeChange(this.handleThemeChange.bind(this));
    view.bindAddTask(this.handleAddTask.bind(this));

    // callbacks
    model.bindThemeChangeModel(this.controleTheme.bind(this));
    model.bindAddTaskModel(this.controlTask.bind(this));
  }

  controleTheme(state) {
    this.view.changeTheme(state);
  }

  controlTask(task) {
    this.view.renderTask(task);
  }

  handleThemeChange() {
    this.model.themeChange();
    console.log("Btn is clicked");
  }

  handleAddTask(input) {
    console.log(input);
    this.model.addTask(input);
  }
}

const controller = new Controller(new Model(), new View());
