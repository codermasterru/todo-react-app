import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Categories from 'mock/categories'
import { Button, Icon } from '@blueprintjs/core'

const Summary = ({ todos, toggleView }) => {
    const countByCategory = categoryId => {
        return todos.filter(todo => todo.category === categoryId).length
    }
    return (
        <>
            <h1>Мои дела</h1>
            <div className={styles.summary}>
                <div>
                    <div className={styles.label}>Все дела</div>
                    <div className={styles.value}>
                        {todos.filter(todo => !todo.done).length}
                    </div>
                </div>
                {Object.keys(Categories).map(key => (
                    <div key={key}>
                        <div className={styles.label}>{Categories[key]}</div>
                        <div className={`${styles.category} ${styles[key]}`}>
                            <Icon icon='symbol-circle' />
                        </div>
                        <div className={styles.value}>{countByCategory(key)}</div>
                    </div>
                ))}
            </div>
            <Button large minimal className='panel-button' onClick={toggleView}>
                ПОСМОТРЕТЬ ДЕЛА
            </Button>
        </>
    )
}

Summary.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Summary