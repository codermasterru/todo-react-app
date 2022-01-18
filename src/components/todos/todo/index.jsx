import styles from './index.module.scss';
import Avatar from 'components/shared/Avatar'
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Button } from '@blueprintjs/core';

const Todo = ({ todo }) => {
    return (
        <div className={`${styles.root} ${todo.done ? styles.done : ''}`}>
            <Avatar icon={todo.icon} disabled={todo.done} />
            <div className={styles.content}>
                <div className={styles.title}>{todo.description}</div>
                <div className={styles.subtitle}>{todo.location}</div>
            </div>
            <div className={styles.details}>
                <span className={styles.date}>
                    {format(todo.date, 'PP', { addSuffix: true, locale: ru })}
                </span>
                <div className={styles.actions}>
                    {!todo.done && <Button icon={'tick'} minimal />}
                    <Button icon='trash' minimal />
                </div>
            </div>
        </div>

    )
}

export default Todo;