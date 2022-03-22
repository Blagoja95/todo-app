export default class Model {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.theme = JSON.parse(localStorage.getItem("theme")) || false;
    this.tasksTemp = [];
    this.tempTaskList;
  }

  themeChange() {
    localStorage.setItem("theme", !this.theme);
    this.controleTheme(this.theme);
    window.location.reload();
  }

  addTask(taskContent) {
    const task = {
      id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
      content: taskContent,
      complete: false,
    };

    this.tasks.push(task);
    this.addToLocalStorage(this.tasks);
  }

  editTask(id, updatedContent) {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? { id: task.id, content: updatedContent, complete: task.complete }
        : task
    );

    this.controleTask(this.tasks);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    this.addToLocalStorage(this.tasks);
  }

  toggleTask(id) {
    this.tasks = this.tasks.map((task) =>
      task.id === id
        ? { id: task.id, content: task.content, complete: !task.complete }
        : task
    );
    this.addToLocalStorage(this.tasks);
  }

  addToLocalStorage(tasks) {
    this.controleTask(this.tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  filterTasks(data) {
    // debugger;
    switch (data) {
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
        this.tasks = this.tasks.filter((task) => task.complete === false);
        this.addToLocalStorage(this.tasks);
        break;
    }
  }

  addTaskByFilter(state) {
    this.tasksTemp = JSON.parse(localStorage.getItem("tasks")) || [];
    this.tasksTemp = this.tasks?.filter((task) => task.complete === state);
  }

  // callbacks
  bindThemeChangeModel(callback) {
    this.controleTheme = callback;
  }

  bindAddTaskModel(callback) {
    this.controleTask = callback;
  }
}
