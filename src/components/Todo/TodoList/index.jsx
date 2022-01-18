import TodoListItem from '../TodoListItem';
import styles from './index.module.scss';


const TodoList = ({ todos, onScroll }) => {
    return (
        <div className={styles.list} onScroll={onScroll}>
            {todos.map(todo => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList