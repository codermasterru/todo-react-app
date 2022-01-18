import { Menu, MenuItem } from '@blueprintjs/core';
import styles from './index.module.scss';

const statuses = ['Все', 'В процессе', 'Выполненные']

const StatusSelector = ({ onselect }) => {
    const handleChange = e => onselect(e.target.name)
    return (
        <Menu>
            {statuses.map((status, index) => (
                <MenuItem
                    className={styles.status}
                    key={index}
                    text={status}
                    name={status}
                    onClick={handleChange} />
            ))}
        </Menu>
    )

}

export default StatusSelector;