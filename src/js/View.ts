import Task from "./interface/Task";

export default class View {
  private body: HTMLBodyElement;
  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private stats: Element;
  private taskUl: HTMLUListElement;
  private filterMobile: Element;
  private itemCount: Element;
  private themeBtn: Element;
  private filterBtns: NodeListOf<Element>;

  public callCtrl = null;

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

  private get _taskInner() : string {
    return this.input.value.trim();
  }

  private _resetInner() : void{
    this.input.value = '';
  }

  renderTask(tasks: Task[]) {
    // clear all tasks
    while (this.taskUl.firstChild)
      this.taskUl.removeChild(this.taskUl.firstChild);

    // msg to user if there are no tasks
    if (tasks.length === 0) {
      setTimeout(() => {
        const p = document.createElement("p");

        p.setAttribute("class", "nomsg-paragraph ");
        p.innerHTML = "Have a task. Add it ...";

        if (!this.taskUl.firstChild)
          this.taskUl.append(p);
      }, 2000);
    }

    if (tasks.length > 0) {
      tasks.forEach((task: Task) => {
        this.createTaskNode(task);
      });
    }

    // task left count
    this.itemCount.innerHTML = `${
      tasks.length > 0
        ? tasks.length + ` item${tasks.length === 1 ? `` : `s`} left`
        : 0 + " items"
    }`;
  }

  createTaskNode (task: Task): void
  {
    const lClasses: string[] = ["task"];

    if(task.completed)
      lClasses.push("completed");

    const li: HTMLElement = document.createElement('li');
    li.classList.add(...lClasses);
    li.id = String(task.id);

    const btnChck: HTMLButtonElement =  document.createElement('button');
    btnChck.classList.add("btn", "btn--check-mark");

    const btnDel: HTMLButtonElement = document.createElement('button');
    btnDel.classList.add("btn", "btn--delete");

    const p: HTMLParagraphElement = document.createElement('p');
    p.classList.add("task__paragraph");
    p.textContent = task.content;
    p.contentEditable = String(!task.completed);

    p.addEventListener('blur', this.handleEdit.bind(this));
    p.addEventListener('keydown', (e) => {
      if(e.code === 'Enter') {
        this.handleEdit.bind(e, this);

        p.blur();
      }
    });

    li.append(btnChck, p, btnDel);
    this.taskUl.append(li);
  }

  public handleEdit(e)
  {
    this.callCtrl(e.target.innerHTML, +e.target.parentElement.id);
  }

  changeTheme(state: boolean) {
    if (state)
      this.body.classList.add("light");
    else
      this.body.classList.remove("light");
  }

  bindThemeChange(handler) {
    this.themeBtn.addEventListener("click", () => {
      handler();
    });
  }

  bindAddTask(handler) {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      // reset filter buttons to default all task button
      this.filterBtns.forEach((btn) => btn.classList.remove("btn--active"));
      this.filterBtns[0].classList.add("btn--active");

      if (this._taskInner.length >= 1)
        handler(this._taskInner);

      this._resetInner();
    });
  }

  bindDeleteTask(handler) {
    this.taskUl.addEventListener("click", (event:any) => {
      if (event.target.classList[1] === "btn--delete")
        handler(+event.target.parentElement.id);
    });
  }

  bindToggleComplete(handler) {
    this.taskUl.addEventListener("click", (event: any) => {
      if (event.target.classList[1] === "btn--check-mark") {
        handler(+event.target.parentElement.id);
      }
    });
  }

  bindFilterTasks(handler) {
    this.stats.addEventListener("click", (event: any) => {
      const input: string = event.target.innerHTML.toLowerCase().replace(" ", "");

      this.filterBtns.forEach((btn) => btn.classList.remove("btn--active"));

      if (input !== "clearcompleted")
        event.target.classList.add("btn--active");
      else
        this.filterBtns[0].classList.add("btn--active");

      handler(input);
    });
  }
}
