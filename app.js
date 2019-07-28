const addRecord = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generatetemplate = (todo) => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`;

    todoList.innerHTML += html;  
};

addRecord.addEventListener('submit', event => {

    event.preventDefault();
    const todo = addRecord.add.value.trim();
 
    if(todo.length) {
        generatetemplate(todo);
        addRecord.reset();
    }
    //console.log(todo);

});

/* Delete ToDo's */

todoList.addEventListener('click', event => {
    //console.log(event.target)
    if(event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});

/* Filtering */

const searchFilter = (typed) => {
    Array.from(todoList.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(typed))
        .forEach((todo) => todo.classList.add('filtered'));
    Array.from(todoList.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(typed))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', event => {
   let typed = event.target.value.toLowerCase().trim();

   searchFilter(typed);
    //console.log(typed);
});
