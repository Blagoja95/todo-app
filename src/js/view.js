export default class View {
  constructor() {
    this.body = document.querySelector("body");
    this.form = document.querySelector("form");
    this.input = document.querySelector(".input-field");

    // event targer elements
    this.stats = document.querySelector(".stats");
    this.taskUl = document.querySelector(".tasks");
    this.filterMobile = document.querySelector(".filters-mobile");

    this.itemCount = document.querySelector(".stat__item-count");
    this.themeBtn = document.querySelector(".btn--theme-switch");
    this.filterBtns = document.querySelectorAll(".btn--filter");
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

    // msg to user if there are no tasks
    if (tasks.length === 0) {
      setTimeout(() => {
        const p = document.createElement("p");
        p.setAttribute("class", "nomsg-paragraph ");
        p.innerHTML = "Have a task. Add it ...";
        if (!this.taskUl.firstChild) this.taskUl.append(p);
      }, 2000);
    }

    // create li insert task data and then insert it
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

    // task left count
    this.itemCount.innerHTML = `${
      tasks.length > 0
        ? tasks.length + ` item${tasks.length === 1 ? `` : `s`} left`
        : 0 + " items"
    }`;
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
      this.filterBtns.forEach((btn) => btn.classList.remove("btn--active"));
      this.filterBtns[0].classList.add("btn--active");
      const input = this.input.value;
      this.input.value = "";
      if (input !== "") handler(input);
      // reset filter btns
    });
  }

  bindDeleteTask(handler) {
    this.taskUl.addEventListener("click", (event) => {
      if (event.target.classList[1] === "btn--delete")
        handler(event.target.parentElement.id);
    });
  }

  bindToggleComplete(handler) {
    this.taskUl.addEventListener("click", (event) => {
      if (event.target.classList[1] === "btn--check-mark") {
        handler(event.target.parentElement.id);
      }
    });
  }

  bindFilterTasks(handler) {
    this.stats.addEventListener("click", (event) => {
      const input = event.target.innerHTML.toLowerCase().replace(" ", "");
      this.filterBtns.forEach((btn) => btn.classList.remove("btn--active"));
      if (input !== "clearcompleted") event.target.classList.add("btn--active");
      else this.filterBtns[0].classList.add("btn--active");
      handler(input);
    });
  }
}
