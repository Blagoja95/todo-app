export default class View {
  constructor() {
    this.body = document.querySelector("body");
    this.form = document.querySelector("form");
    this.input = document.querySelector(".input-field");
    this.themeBtn = document.querySelector(".btn--theme-switch");
    this.taskUl = document.querySelector(".tasks");
  }

  get _taskInner() {
    return this.input.value;
  }

  _resetInner() {
    this.input.value = "";
  }

  renderTask(tasks) {
    // clear all tasks
    while (this.taskUl.firstChild)
      this.taskUl.removeChild(this.taskUl.firstChild);

    if (tasks.length === 0) {
      const p = document.createElement("p");
      p.innerHTML = "Have a task. Add it ...";
      this.taskUl.append(p);
    }

    if (tasks.length > 0) {
      tasks.forEach((task) => {
        const html = `
        <li class="task ${task.complete ? "completed" : ""}" id=${task.id}>
        <button class="btn btn--check-mark"></button>
        <p class="task__paragraph">${task.content}</p>
        <button class="btn btn--delete"></button>
        </li>
        `;

        this.taskUl.insertAdjacentHTML("afterbegin", html);
      });
    }
  }

  changeTheme(state) {
    if (state) this.body.classList.add("light");
    else this.body.classList.remove("light");
  }

  bindThemeChange(handler) {
    this.themeBtn.addEventListener("click", () => {
      handler();
    });
  }

  bindAddTask(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      handler(this.input.value);
      this.input.value = "";
    });
  }

  dispayTask() {}
}
