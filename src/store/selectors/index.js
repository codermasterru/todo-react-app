import { createSelector } from "reselect";
import { isPast, isToday } from 'date-fns'

export const todoNewSelector = createSelector(
    state => state.todos.newTodo,
    state => state.todos.todos.filter(todo => isToday(todo.date)).length,
    state => state.todos.isAllDay,
    (newTodo, totalTodosToday, isAllDay) => ({
        newTodo,
        totalTodosToday,
        isAllDay
    })
)

export const todosSummarySelector = createSelector(
    state => state.todos.todos.filter(todo => !isPast(todo.date) && !todo.done),
    pendingTodos => ({ pendingTodos })
)

export const todoListSelector = createSelector(
    state => state.todos.todos,
    state => state.todos.filters.date,
    state => state.todos.filters.status,
    (todos, dateFilter, statusFilter) => ({
        todos,
        dateFilter,
        statusFilter
    })
)

export const rootSelector = createSelector(
    state => state.root.viewAll,
    viewAll => ({ viewAll })
)

