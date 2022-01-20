import { createSelector } from "reselect";

export const todoSelector = createSelector(
    state => state.todos.todos,
    (todos) => ({
        todos
    })
)

export const rootSelector = createSelector(
    state => state.root.viewAll,
    viewAll => ({ viewAll })
)

