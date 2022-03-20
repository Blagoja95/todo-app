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
    view.bindToggleComplete(this.handleToggle.bind(this));

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

  controlToggle() {}

  handleThemeChange() {
    this.model.themeChange();
  }

  handleAddTask(input) {
    console.log(input);
    this.model.addTask(input);
  }

  handleToggle(input) {
    this.model.toggleTask(+input);
  }
}

const controller = new Controller(new Model(), new View());
