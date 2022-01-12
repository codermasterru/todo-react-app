import { Spinner } from '@blueprintjs/core';
import Header from 'components/header';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './index.module.scss';
import Todo from './todo';

const Todos = ({ todos }) => {
    const progress = (
        <div className={styles.progress}>
            <Spinner size={45} value={0.7} />
            <span>70%</span>
        </div>
    )

    return (
        <div className={styles.root}>
            <Header
                title={'Моё расписание'}
                subtitle={format(new Date(), 'Pp', { locale: ru })}
                action={progress} />
            <div className={styles.list}>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>

        </div>

    )
}

export default Todos;