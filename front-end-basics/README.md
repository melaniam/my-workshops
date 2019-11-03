# Front End Basics
Creating the famous TODO app.

## Target group
This workshop is addressed to people that already know basic programming concepts (at least: variables, functions, selection and repetition structures), but never worked on Front-End Web.


## Objectives

* Know which are the three pillars of front-end web dev - HTML, CSS and JS - and understand what they are used for and how they are related to each other.
* Use basic HTML tags to define the structure of a web app.
* Use JS to add some functionality to your app.
* Learn how to store data in the browser.

## Steps

1. Create an HTML file and its basic structure.
2. Create a JS file and link it in the HTML.
3. Start thinking about the elements that you need on the page. Add these elements in HTML.
   * a heading - "My TODO list"
   * a container for the list of todos
   * an add (+) button
   * a form that handles the addition of one todo: clicking the + button triggers the display of a text input and a "Save" button. Take into account user experience (hide the + button when the form is displayed).
4. Now that the form is in place, start implementing the functionality of adding a todo. Keep it as simple as possible, for now:
   * The user enters some data in the text input
   * Upon clicking "Save"
      * that text is displayed inside the todo list container
      * the form is hidden
5. Great, the todo is displayed on the page! Now that we see it, it becomes clear that each todo will have more functionality, like marking it as done, and deleting it. This makes each todo more complex, so extract this functionality in its own file.
   * Create a todo.js file and link it in the HTML
   * Create a *renderTodo* function that
       * creates the HTML element corresponding to that todo
       * displays it inside the todo list container
6. None of the checkbox and the delete button work. Let's change this!
   * When clicking on the checkbox, besides the checkbox functionality, toggle a strikethrough line on the text
   * When clicking on the delete button, remove the todo from the list
7. The todo app seems to be working fine now! That's great, but what if we want to save the todos somewhere? We don't have an API for now, but we could store them in the browser. To start with that, it's important to think about an appropriate structure.
   * Since there are several todos, an array is a good structure for keeping them.
   * For each todo, we need to store not only the text, but also its status (done / not done).
   * Let's make sure we add each todo in the array when we create it.
8. 


