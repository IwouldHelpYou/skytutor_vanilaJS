const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-form input');
todoForm.addEventListener('submit',onTodoSubmit);

function onTodoSubmit(e) {
    e.preventDefault();
    alert('된당!');
}
