import { Spinner } from '@blueprintjs/core';

import styles from './index.module.scss';

const Progress = ({ todos }) => {
    const completed = todos.filter(t => t.done).length
    const percentage = completed
        ? parseFloat(completed / todos.length).toFixed(2)
        : 0

    return (
        <div className={styles.progress}>
            <Spinner
                size={25}
                value={percentage} />
            <span >{percentage * 100}% завершено</span>
        </div>)
}

export default Progress;