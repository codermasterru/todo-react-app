import Todos from 'components/todos';
import styles from './index.module.scss';

const Container = ({ todos }) => {
    return (
        <div className={styles.root}>
            <div>
                <Todos todos={todos} />
            </div>
        </div>

    )
}

export default Container;