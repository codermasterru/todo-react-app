import { Button } from '@blueprintjs/core'
import styles from './index.module.scss'

const TodoAdd = ({ toggleView }) => {
  return (
    <>
      <h1>Привет!</h1>
      <p className={styles.description}>
        Если нет дел, добавь новое!
      </p>
      <Button large minimal className='panel-button' onClick={toggleView}>
        Добавить
      </Button>
    </>
  )
}

export default TodoAdd