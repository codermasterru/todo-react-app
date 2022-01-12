import React from 'react'
import { Menu, MenuItem } from '@blueprintjs/core'
import Categories from 'mock/categories'

const CategorySelector = props => {
  return (
    <Menu>
      {Categories.map(category => (
        <MenuItem key={category.id} text={category.name} icon={'dot'} />
      ))}
    </Menu>
  )
}

export default CategorySelector