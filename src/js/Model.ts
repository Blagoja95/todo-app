import Task from "./interface/Task";

export default class Model {
  public tasks: Task[];
  public theme: boolean;
  private tasksTemp: Task[];
  private controleTheme: any;
  private controleTask: any;

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.theme = JSON.parse(localStorage.getItem("theme")) || false;
    this.tasksTemp= [];
  }

  themeChange() {
    this.theme = !this.theme;

    localStorage.setItem("theme", String(this.theme));

    this.controleTheme(this.theme);
  }

  addTask(taskContent: string) {
    const task : Task = {
      id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      content: taskContent,
      completed: false,
    };

    this.tasks.push(task);
    this.addToLocalStorage(this.tasks);
  }

  editTask(id: number, updatedContent: string) {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? { id: task.id, content: updatedContent, completed: task.completed }
        : task
    );

    this.addToLocalStorage(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    this.addToLocalStorage(this.tasks);
  }

  toggleTask(id: number) {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    this.addToLocalStorage(this.tasks);
  }

  addToLocalStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));

    this.controleTask(this.tasks);
  }

  filterTasks(mode: string) {
    switch (mode) {
      case "all":
        this.tasksTemp = JSON.parse(localStorage.getItem("tasks")) || [];
        this.controleTask(this.tasksTemp);
        break;

      case "active":
        this.addTaskByFilter(false);
        this.controleTask(this.tasksTemp);
        break;

      case "completed":
        this.addTaskByFilter(true);
        this.controleTask(this.tasksTemp);
        break;

      case "clearcompleted":
        this.tasks = JSON.parse(localStorage.getItem("tasks"));
        this.tasks = this.tasks.filter((task) => task.completed === false);
        this.addToLocalStorage(this.tasks);
        break;
    }
  }

  addTaskByFilter(state: boolean) {
    this.tasksTemp = JSON.parse(localStorage.getItem("tasks")) || [];
    this.tasksTemp = this.tasks?.filter((task) => task.completed === state);
  }

  // callbacks
  bindThemeChangeModel(callback) {
    this.controleTheme = callback;
  }

  bindAddTaskModel(callback) {
    this.controleTask = callback;
  }
}
