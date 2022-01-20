import { combineReducers } from "redux";
import rootReducer from "./root.reducer";
import todoReducer from "./todo.reducer";

export default combineReducers({
    root: rootReducer,
    todos: todoReducer
})