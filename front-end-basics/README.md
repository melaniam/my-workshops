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
8. This works well, but the array does not change when a todo is updated or deleted. To do that, we would need to update todo.js file. But in that way, we would mix the rendering part of the todo (what we currently do in todo.js) with the changes that we make to the array. For a better code maintainance, that's something that we should avoid. Let's see how we can do it, then.
   * Before going further, there is an important concept that we need to "name" here: the **state**. 
      * *In any given point in time, there is a different information stored in the memory of your web application that you can access via your variables, classes, data structures, etc. **All the stored information, at a given instant in time, is called the application state.*** (source: [quora question](https://www.quora.com/Whats-state-in-a-web-application))
      * Further reading: [egghead article](https://egghead.io/articles/what-is-state-why-do-i-need-to-manage-it) and [w3c state definition](https://www.w3.org/2001/tag/doc/state.html#whatisstate)
   * Based on the definition above, the array that stores all the todos is exactly our application state.
   * Rewording the problem described above, regarding the maintainance of the app: we should **separate the rendering part from the application state**.
   * Let's create a new file, called state.js, and move the array and the function that adds a todo in that file.
9. Perfect, now the state and the rendering parts are separate. But the update and delete parts are still not connected. Let's first implement the array manipulation functions, and think about how to use them in the next step.
   * Create a "updateTodo" function that finds a todo (by text) in the array and updates its "done" status.
   * Create a "deleteTodo" function that finds a todo (by text) in the array and deletes it.
0. Now, let's use them!
   * Group all todo-state-related functions in an object (think of this as an "interface" to your state).
   * Even if in this implementation we have access from todo.js to each method in state.js, take into account the possibility of having them implemented in an external library (or *module*). Consider that you have access to them in script.js (because it's the entry file for your application), and pass them as parameters in todo.js.
   * Remember to call each function after the rendering part for its associated functionality is done.
1. Our TODO app is almost fully functional now. What's missing? You guessed it: storing the data in the browser. Follow these steps to also have that:
   * If you don't know anything about data storage in the browser, or if you need a refresh:
      * [MDN's Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
      * [Local Storage on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
   * Create a new file, storage.js, to take care of reading and saving the data from and in local storage. Don't worry about using it in the TODO app now, that will be done in the following step.
   * Be sure to test that the functions you created (getTodos and storeTodos) are working correctly.
   * Keep in mind that: 
      * the data is read using localStorage.getItem({your_key}), and the data returned from this is a string
      * the data is saved using localStorage.setItem({your_key}, {your_data}), and {your_data} also needs to be a string
2. We've set the stage, now we need to use these functions. It's easier to start with storing the data: whenever we're updating the state, we should also save the changes in local storage.
3. Still, when refreshing the page, we need to start over with writing our todos. Let's use the ones that we already saved.
   * When initialing the app, read the todos saved in local storage.
   * Render each todo on the page.
   * Take into account the "done" status for each todo.

This it it! Congrats, you've reached the end of this workshop, and you now have a not-so-good-looking but functioning TODO app. I hope you've enjoyed this! 

If you'd like to continue, here are two things you can try:
   * style the app and learn some CSS by doing it
   * understand more about how state is used in modern web libraries & frameworks
      * Currently, the state is "actually" kept in two places: todos array in state.js AND the DOM 
      * Modern web libraries & frameworks (like React, Vue, Angular etc.) only keep the state in one place, and the DOM reacts to state changes. These makes it easier to write declarative code (maybe it's time to read again the egghead article above).
      * The code could be updated to do that:
         * the existing todos should be read from local storage in state.js
         * renderTodo should not trigger createTodo (even logically, rendering something should not trigger "creating" it in the state), but it should be the other way around
         * each state change should be followed by a call to renderTodos - the function does not exist yet, feel free to add it; this is not optimal when we do it, but this is very similar to how the modern libraries work (note that they optimize the DOM manipulation operations)
