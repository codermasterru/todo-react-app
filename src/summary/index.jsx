import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Categories from 'mock/categories'

const Summary = ({ todos }) => {
    const countByCategory = categoryId => {
        return todos.filter(todo => todo.category === categoryId).length
    }

    return (
        <React.Fragment>
            <h1>Мои дела</h1>
            <div className={styles.summary}>
                <div>
                    <div className={styles.label}>Все дела</div>
                    <div className={styles.value}>
                        {todos.filter(todo => !todo.done).length}
                    </div>
                </div>
                {Categories.map(category => (
                    <div key={category.id}>
                        <div className={styles.label}>{category.name}</div>
                        <div className={styles.category}>
                            <div className={`category-dot ${category.id}`} />
                        </div>
                        <div className={styles.value}>{countByCategory(category.id)}</div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

Summary.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Summary