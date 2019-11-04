const TODOS_KEY = 'todos';

const storeTodos = todos => {
    const jsonString = JSON.stringify(todos);
    localStorage.setItem(TODOS_KEY, jsonString);
};
  
const getTodos = () => {
    const todosAsString = localStorage.getItem(TODOS_KEY);
    return JSON.parse(todosAsString) || [];
};
