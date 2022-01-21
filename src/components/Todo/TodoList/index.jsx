import TodoListItem from '../TodoListItem';
import styles from './index.module.scss';


const TodoList = ({ todos, onScroll, toggleTodoStatus, deleteTodo }) => {
    return (
        <div className={styles.list} onScroll={onScroll}>
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodoStatus}
                    onDelete={deleteTodo} />
            ))}
        </div>
    )
}

export default TodoList