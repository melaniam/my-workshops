const todoListElement = document.getElementById("todo-list");

const createTodo = function(todoText) {  
    const element = document.createElement("li");
    element.innerHTML = `
        <input type="checkbox" />
        <span>${todoText}</span>
        <button>Delete</button>
    `;
  
    const checkbox = element.querySelector("input");
    checkbox.addEventListener("change", event => {
        event.target.parentNode.querySelector("span").classList.toggle("done");
    });
  
    const deleteButton = element.querySelector("button");
    deleteButton.addEventListener("click", () => {
        element.remove();
    });
  
    return element;
};

const renderTodo = function(todoText) {
    const element = createTodo(todoText);
    todoListElement.appendChild(element);
};
  