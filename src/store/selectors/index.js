import { createSelector } from "reselect";
import { isPast } from 'date-fns'

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

