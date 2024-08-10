import View from "./View";
import Model from "./Model";
import "../sass/main.scss";

class Controller{

  constructor(private model: Model, private view: View) {
    this.model = model;
    this.view = view;

    // init
    this.controleTheme(this.model.theme);
    this.controlTask(this.model.tasks);

    view.bindThemeChange(this.handleThemeChange.bind(this));
    view.bindAddTask(this.handleAddTask.bind(this));
    view.bindToggleComplete(this.handleToggle.bind(this));
    view.bindDeleteTask(this.handleDeleteTask.bind(this));
    view.bindFilterTasks(this.handleFilters.bind(this));
    view.callCtrl = this.handleEdit.bind(this);

    model.bindThemeChangeModel(this.controleTheme.bind(this));
    model.bindAddTaskModel(this.controlTask.bind(this));
  }

  controleTheme(state: boolean): void {
    this.view.changeTheme(state);
  }

  controlTask(task) {
    this.view.renderTask(task);
  }

  handleThemeChange() {
    this.model.themeChange();
  }

  handleAddTask(input: string) {
    this.model.addTask(input);
  }

  handleToggle(input: number) {
    this.model.toggleTask(input);
  }

  handleDeleteTask(input) {
    this.model.deleteTask(+input);
  }

  handleFilters(input: string) {
    this.model.filterTasks(input);
  }

  handleEdit(val: string, id: number){
    this.model.editTask(id, val);
  }
}

const controller: Controller = new Controller(new Model(), new View());
