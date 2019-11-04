const TODOS_KEY = 'todos';

const storeTodos = todos => {
    const jsonString = JSON.stringify(todos);
    localStorage.setItem(TODOS_KEY, jsonString);
};
  
const getTodos = () => {
    const todosAsString = localStorage.getItem(TODOS_KEY);
    return JSON.parse(todosAsString) || [];
};

// test
const testTodos = [{text: "todo 1", done: false}, {text: "todo 2", done: true}, {text: "todo 3", done: false}];
storeTodos(testTodos);

const storedTodos = getTodos();
console.log("storedTodos", storeTodos);
