import NewTodo from 'components/newTodo';
import Todos from 'components/todos';
import styles from './index.module.scss';

const Container = ({ todos }) => {
    return (
        <div className={styles.root}>
            <div className={styles.tempW}>
                <Todos todos={todos} />
            </div>
            <div className={styles.tempW}>
                <NewTodo />
            </div>
        </div>

    )
}

export default Container;