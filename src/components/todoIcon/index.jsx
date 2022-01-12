import { Icon } from '@blueprintjs/core';
import styles from './index.module.scss';

const TodoIcon = ({ icon }) => {
    return (
        <div className={styles.root}>
            <Icon className={styles.icon} icon={icon} />
        </div>
    )
}

export default TodoIcon;