import * as Actions from 'store/actions/todo/action-types'


const initialState = {
    todos: [
        {
            id: 1,
            icon: 'highlight',
            category: '1',
            description: 'Доделать проект',
            location: 'Офис',
            date: new Date(2025, 10, 5),
            done: false
        }
    ],
    filters: {
        date: {
            key: 'Сегодня',
            value: new Date()
        },
        status: {
            key: 'Все',
            value: null
        }
    }
}

const reducer = {
    [Actions.DELETE_TODO]: (state, payload) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id)
    }),

    [Actions.TOGGLE_TODO_STATUS]: (state, payload) => ({
        ...state,
        todos: state.todos.map(todo =>
            todo.id === payload.id ? { ...todo, done: !todo.done } : todo
        )
    }),
}


export default (state = initialState, { type, payload }) =>
    reducer[type] ? reducer[type](state, payload) : state