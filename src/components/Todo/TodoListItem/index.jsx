import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Button } from '@blueprintjs/core';
import Avatar from 'components/UI/Avatar'
import styles from './index.module.scss';

const TodoListItem = ({ todo, onToggle, onDelete }) => {
    const handleToggle = () => {
        onToggle(todo.id)
    }

    const handleDelete = () => {
        onDelete(todo.id)
    }

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
                    {!todo.done && <Button icon={'tick'} minimal onClick={handleToggle} />}
                    <Button icon='trash' minimal onClick={handleDelete} />
                </div>
            </div>
        </div>

    )
}

export default TodoListItem;