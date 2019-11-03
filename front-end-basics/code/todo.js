const todoListElement = document.getElementById("todo-list");

const createTodo = function(todoText) {  
    const element = document.createElement("li");
    element.innerHTML = `
        <input type="checkbox" />
        <span>${todoText}</span>
        <button>Delete</button>
    `;

    return element;
};

const renderTodo = function(todoText) {
    const element = createTodo(todoText);
    todoListElement.appendChild(element);
};
  