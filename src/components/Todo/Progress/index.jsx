import { Spinner } from '@blueprintjs/core';

import styles from './index.module.scss';

const Progress = ({ todos }) => {
    const completed = todos.filter(t => t.done).length
    const percentage = completed
        ? parseFloat(completed / todos.length).toFixed(2)
        : 0

    return (
        <div className={styles.progress}>
            <span>Завершено</span>
            <div className={styles.spinnerContainer}>
                <Spinner
                    size={65}
                    value={percentage} />
                <span className={styles.value}>{percentage * 100}%</span>
            </div>
        </div>)
}

export default Progress;