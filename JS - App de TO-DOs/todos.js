/*
   transcrição do códio da aula de Rocketseat:
   Módulo STARTER
   Curso de JS
   App de TO-DOs
   https://skylab.rocketseat.com.br/dashboard
*/


var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos_inicial = [
    'Fazer café',
    'Estudar',
    'Fazer curso'
];

// pega da var storage armazenada OU inicia da var inicial
var todos = JSON.parse(localStorage.getItem('list_todos')) || todos_inicial;

function renderTodos(){
    listElement.innerHTML = ''; // inicia com vazio
    
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#'); // link nulo

        var pos = todos.indexOf(todo); //pega a posição da string todo;
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText); // atribui um texto de link ao elemento de link
        todoElement.appendChild(todoText); // atribui o item todo ao texto 
        todoElement.appendChild(linkElement); // atribui o link do elemento ao todo elemento
        listElement.appendChild(todoElement); // 
    };
    console.log(todos);
    saveToStorage();
};
renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ''; // depois de add, apagar do campo 
    renderTodos();
};
buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1); // remove 1 ite na posição pos
    renderTodos();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

saveToStorage();

