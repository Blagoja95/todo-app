class Todo {
  themeState = false;
  themeBTN = document.querySelector(".btn--theme-switch");
  body = document.querySelector("body");

  changeTheme(handler) {
    if (!this.themeState) {
      this.body.classList.add("light");
      handler((this.themeState = true));
    } else {
      this.body.classList.remove("light");
      handler((this.themeState = false));
    }
  }

  addHandlerClickThemeBtn(handler) {
    this.themeBTN.addEventListener(
      "click",
      this.changeTheme.bind(this, handler)
    );
  }

  addhandlerLoadTheme(handler) {
    this.themeBTN.addEventListener(
      "click",
      this.changeTheme.bind(this, handler)
    );
  }
}

export default new Todo();
