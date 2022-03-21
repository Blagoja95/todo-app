# Frontend Mentor - Todo app

## Live app url

[Todo app](https://blagoja95.github.io/todo-app/)

## Welcome! 👋

![Design preview for the Todo app coding challenge](./readmeAssets/desktop-preview.jpg)

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Demo gif](#demo-gif)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## The challenge

Your challenge is to build out this todo app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size ✅
- See hover states for all interactive elements on the page ✅
- Add new todos to the list ✅
- Mark todos as complete ✅
- Delete todos from the list ✅
- Filter by all/active/complete todos ✅
- Clear all completed todos ✅
- Toggle light and dark mode ✅
- Edit tasks (✖️ todo)
- **Bonus**: Drag and drop to reorder items on the list (✖️ todo)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- JavaScript
- BEM
- MVC Architecture
- Mobile-first workflow

**First step was planing:**
![General plane of html file](./readmeAssets/Screenshot%202022-03-21%20at%2014-44-16%20Figma.png)

- made a main with 4 sections: title, input, todo and manage sections;
- Footer is just one modified attributon that you get with evrey starter file.
- All elements got classes by BEM methodology, where all buttons have comon class `btn` and each iteration of button element have modifier class like `btn--active`.

**Second step was styling:**

- I used CSS preprocessor SASS
- Made few .scss files to brake my sass code into smaller, more managable partial files and one main.scss file where all partials will be imported;
- Pike \_colors wher a placed all color values provided by starter files.
- Provided desing files are made for mobile 375px and desktop 1440px, so I used queries and brakepoints to make app look good on different viewports.
- Becouse I used mobile first workflow when making look of the app, I used min-width in my brakepoints.

**Next and hardest step was JS:**

- First i started whit flowchart that will help me visualise general work of the app [link and img of flowchart]
- I made in js file MVC type structure of app, wher M witch stand for Model will do all logic and work with a data, V for View will register all user actions and represent visualy given data to a user.
  The middle man here is C, Controller who handle View and get/send data to the Model

**Model <==> Controler <==> View**

- Best way for me is to start whit View wher I'll bind event listeners that will wait for user action, when something happend, View will notify Controler about event and send user input.
- Controller will send input to the Model who will work with data, save a change and then will callback Controller, notify him that somethin new happend with data.
- Controler will then call View's method that render data or notify user with respond to the users action.

**Example:**

- When user submit his task, event listener will detect user action that will be reed, and that input will be send to to the handler.

`bindAddTask(handler) { this.form.addEventListener("submit", (e) => { e.preventDefault(); const input = this.input.value; this.input.value = ""; if (input !== "") handler(input); }); } `

### What I learned

### Continued development

## Demo gif

![DEMO](./readmeAssets/screen-recording.gif)

## Author

- Website - [Boris Blagojevic](https://github.com/Blagoja95)
- Frontend Mentor - [@Blagoja95](https://www.frontendmentor.io/profile/Blagoja95)
- Linkedin - [boris-blagojevic](https://www.linkedin.com/in/boris-blagojevic/)
