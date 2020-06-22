const initialState = {
    todos: [
        {
            id: 'default',
            name: 'Clean the house',
            active: true
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO': 
            const newtodo = {
                id: Math.random(),
                name: action.todoData.name,
                active: true
            }
            return {
                ...state,
                todos: state.todos.concat(newtodo)
            }
        case 'DELETE_TODO': 
            const updatedArray = state.todos.filter(todo => todo.id !== action.id)
            return{
                ...state,
                todos : updatedArray 
            }
        default: return state
    }
}

export default reducer