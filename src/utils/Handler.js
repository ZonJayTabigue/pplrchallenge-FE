import axios from 'axios'

const baseUrl = 'https://todo-app-be-y4lg.onrender.com'

const getTodosApi =  (setTodo) => {
    axios.get(baseUrl)
    .then(({data}) => {
        setTodo(data);
    })
}

const addTodoApi = (text, setTodo) => {
    axios.post(`${baseUrl}/save`, {text})
    .then(() => {
        getTodosApi(setTodo)
    })
}
const toggleCompleteApi = (id, completed, setTodo) => {
    axios.post(`${baseUrl}/completed`, {_id: id, completed: completed})
    .then(() => {
        getTodosApi(setTodo)
    }) 
}

const editTodoApi = (id, text, setTodo) => {
    axios.post(`${baseUrl}/update`, {_id: id, text: text})
    .then(() => {
        getTodosApi(setTodo)
    })
} 

const deleteTodoApi = (id, setTodo) => {
    const payload = { '_id': id}
    axios.delete(`${baseUrl}/delete`, { data: payload })
    .then(() => {
        getTodosApi(setTodo)
    })
}


export {getTodosApi, addTodoApi, toggleCompleteApi, editTodoApi, deleteTodoApi}