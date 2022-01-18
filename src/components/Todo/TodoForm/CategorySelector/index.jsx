import { Icon, Menu, MenuItem } from '@blueprintjs/core';
import Categories from 'mock/categories';
import styles from './index.module.scss';


const CategorySelector = ({ field, onSelect }) => {

  const handleChange = (e) => {
    onSelect({
      target: {
        value: e.target.name,
        name: field
      }
    })
  }

  return (
    <Menu>
      {Object.keys(Categories).map(key => (
        <MenuItem
          key={key}
          text={Categories[key]}
          name={key}
          labelElement={<Icon icon='symbol-circle' />}
          className={`${styles.category} ${styles[key]}`}
          onClick={handleChange}
        />
      ))}
    </Menu>
  )
}

export default CategorySelector