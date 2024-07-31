const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

const toDo = JSON.parse(localStorage.getItem('todos'))

if(toDo) {
    toDo.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText
        todoEl.addEventListener('click', () => {todoEl.classList.toggle('completed')
            udateLs()
    })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            
            todoEl.remove()

            udateLs()
        })
        todoUl.appendChild(todoEl)

        input.value = ''

        udateLs()
    }
}

function udateLs() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))

}
