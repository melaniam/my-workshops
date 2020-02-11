const todoListElement = document.getElementById("todo-list");

const createTodo = function(todoObject, todoStateFunctions) {
    const { text, done } = todoObject;
    const { addTodo, updateTodo, deleteTodo } = todoStateFunctions;
    
    const element = document.createElement("li");
    element.innerHTML = `
        <input class="checkbox" type="checkbox" ${done ? 'checked="checked"' : ""} />
        <span ${done ? 'class="done"' : ""} >${text}</span>
        <button id="delete_btn">Delete</button>
    `;
  
    const checkbox = element.querySelector("input");
    checkbox.addEventListener("change", event => {
        event.target.parentNode.querySelector("span").classList.toggle("done");
        const doneStatus = event.target.checked;
        // update the todo in state
        updateTodo({ text, done: doneStatus });
    });
  
    const deleteButton = element.querySelector("button");
    deleteButton.addEventListener("click", () => {
        element.remove();
        // delete the todo from state
        deleteTodo(todoObject);
    });

    // if all went well, add the todo to state
    addTodo(todoObject); 
    return element;
};

const renderTodo = function(todoObject, todoStateFunctions) {
    const element = createTodo(todoObject, todoStateFunctions);
    todoListElement.appendChild(element);
};
  