import * as Types from './action-types'

export const deleteTodo = id => ({
    type: Types.DELETE_TODO,
    payload: { id }
})

export const toggleTodoStatus = id => ({
    type: Types.TOGGLE_TODO_STATUS,
    payload: { id }
})