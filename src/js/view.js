export default class View {
  constructor() {
    this.body = document.querySelector("body");
    this.form = document.querySelector("form");
    this.input = document.querySelector(".input-container");
    this.themeBtn = document.querySelector(".btn--theme-switch");
  }

  get _taskInner() {
    return this.input.value;
  }

  _resetInner() {
    this.input.value = "";
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

  dispayTask() {}
}
