export let theme = {
  state: false,
};

export const saveThemeState = function (data) {
  theme.state = data;
  localStorage.setItem("theme", JSON.stringify(theme.state));
};

export const checkThemeStatus = function () {
  const data = localStorage.getItem("theme");
  if (data) return JSON.parse(data);
};
