import { isSameDay } from 'date-fns'
import * as Actions from 'store/actions/todo/action-types'

const newTodo = {
    category: '1',
    description: '',
    location: '',
    date: null,
    icon: ''
}

const initialState = {
    newTodo,
    isAllDay: false,
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

const updateFilter = filterName => (state, payload) => ({
    ...state,
    filters: {
        ...state.filters,
        [filterName]: {
            key: payload.key,
            value: payload.value
        }
    }
})

const reducer = {
    [Actions.ADD_TODO]: (state, payload) => ({
        ...state,
        todos: [...state.todos, { ...payload }],
        newTodo
    }),

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
    [Actions.COMPLETE_ALL_TODOS]: (state, payload) => ({
        ...state,
        todos: state.todos.map(todo =>
            !todo.done && isSameDay(todo.date, payload.date)
                ? { ...todo, done: true }
                : todo
        ),

    }),
    [Actions.DELETE_ALL_TODOS]: (state, payload) => ({
        ...state,
        todos: state.todos.filter(todo => isSameDay(todo.date, payload.date))
    }),
    [Actions.UPDATE_TODO_DATE_FILTER]: updateFilter('date'),
    [Actions.UPDATE_TODO_STATUS_FILTER]: updateFilter('status'),
    [Actions.UPDATE_NEW_TODO_FIELD]: (state, payload) => ({
        ...state,
        newTodo: {
            ...state.newTodo,
            [payload.field]: payload.value
        }
    }),
    [Actions.TOGGLE_ALL_DAY_FLAG]: state => ({
        ...state,
        isAllDay: !state.isAllDay
    })
}


export default (state = initialState, { type, payload }) =>
    reducer[type] ? reducer[type](state, payload) : state