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
![General layout plan of html](./readmeAssets/Screenshot%202022-03-21%20at%2014-44-16%20Figma.png)

- Made a main element with 4 sections: title, input, to-do and manage sections;
- The footer is just one modified attribute that you get with every starter file.
- All elements got classes by BEM methodology, where all buttons have common class `btn` and each iteration of button element has a modifier class like `btn--active`.

**Second step was styling:**

- I used CSS preprocessor SASS
- Made few .scss files to brake my sass code into smaller, more manageable partial files and one main. scss file where all partials will be imported;
- Pike \_colors where a placed all color values provided by starter files.
- Provided design files are made for mobile 375px and desktop 1440px, so I used queries and brake points to make the app look good on different viewports.
- Because I used mobile first workflow when making look of the app, I used min-width in my brakepoints.

**Next and hardest step was JS:**

- First, I started whit flowchart that will help me visualise general work of the app [Figma flowchart](./readmeAssets/Screenshot%202022-03-21%20at%2019-14-06%20Figma.png)

[Figma file online version](https://www.figma.com/file/2FnGzcn2D6cnNJan2Bco5v/Todo-app-flowchart)

- I made in js file MVC type structure of an app, where M witch stand for Model will do all logic and work with a data, V for View will register all user actions and represent visually given data to a user.
  The middle man here is C, Controller who handles View and get/send data to the Model

**Model <==> Controler <==> View**

- The best way for me is to start whit View where I'll bind event listeners that will wait for user action, when something happened, the View will notify Controler about the event and send user input.
- Controller will send input to the Model who will work with data, save a change and then will call back Controller, notify him that something new happened with the data.
- Controller will then call View's method that render data or notify user with responses to the user action.

**Example:**

- When a user submits his task, event listener will detect user action that will be read, and that input will be sent to to the handler.

`bindAddTask(handler): this.form.addEventListener("submit", (e) => { e.preventDefault(); const input = this.input.value; this.input.value = ""; if (input !== "") handler(input); `

- Handler witch is Controller will be called, get input data and send it to the Model

`handleAddTask(input) { this.model.addTask(input); }`

- Model will create a task object whit his dynamically created, id number, task content is sent from the controller, and all tasks are created uncompleted.
- Model will then push that newly created object to the tasks array that is in this app main task messenger.

`addTask(taskContent) { const task = { id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1, content: taskContent, complete: false, }; `

- Than model will store data in local storage that will save user task inside browser that he is using even when he close it.
- Every time app start model will read local storage and look if there are any task. If yes store that array if not, then initialize an empty array to the tasks variable.

- When new data are stored, deleted or tempered in any other way, the Model will notify Controler that there was some change, the model will send tasks and tasks variable, the controller will then call the method in View with tasks as parameter;
- The view will make html with template literal and then insert it inside the UL element.

  **Simular workflow will happen with other methods and user actions.**

### What I learned

- I learned how to implement MVC architecture, how each component is working and communicating with other components, and how data and events flow.

### Continued development

- I'll try to use more MVC in the future, especially for large projects because this gives a structure to the js script and allow easy implementation of new ideas and functionalities.

## Demo gif

![DEMO](./readmeAssets/screen-recording.gif)

## Author

- Website - [Boris Blagojevic](https://github.com/Blagoja95)
- Frontend Mentor - [@Blagoja95](https://www.frontendmentor.io/profile/Blagoja95)
- Linkedin - [boris-blagojevic](https://www.linkedin.com/in/boris-blagojevic/)
