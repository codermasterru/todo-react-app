import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core'
import {
    format,
    isToday,
    isTomorrow,
    isThisWeek,
    isThisYear,
    isAfter,
    isBefore,
    endOfWeek
} from 'date-fns'

import styles from './index.module.scss'
import { ru } from 'date-fns/locale'

const formatDate = date => {
    if (isToday(date)) return 'Сегодня'
    if (isTomorrow(date)) return 'Завтра'
    if (isThisWeek(date)) return format(date, 'dddd')
    return format(date, `Pp${!isThisYear(date) ? ', yyyy' : ''}`, { locale: ru })
}

const groupByDate = (list, filterBy) =>
    list.filter(filterBy).reduce((r, acc) => {
        const key = formatDate(acc.date)
        r[key] = [...(r[key] || []), acc]
        return r
    }, {})

const getFilters = (obj, onSelect) =>
    Object.keys(obj).map(key => (
        <MenuItem
            key={key}
            text={key}
            label={obj[key].length}
            name={key}
            className={styles.date}
            onClick={onSelect} />
    ))

const getStats = list => ({
    totalToday: list.filter(todo => isToday(todo.date)).length,
    thisWeek: groupByDate(
        list,
        todo =>
            isAfter(todo.date, new Date()) &&
            isBefore(todo.date, endOfWeek(new Date()))
    ),
    upcoming: groupByDate(list, todo => !isThisWeek(todo.date))
})

const DateSelector = props => {
    const { totalToday, thisWeek, upcoming } = getStats(props.todos)
    const { onSelect } = props

    const handleTodayFilter = () => onSelect({ key: 'Сегодня', value: new Date() })
    const handleAnyOtherFilter = e => {
        const [firstTodo] = thisWeek[e.target.name] || upcoming[e.target.name]
        onSelect({
            key: e.target.name,
            value: firstTodo.date
        })
    }

    return (
        <Menu className={styles.root}>
            <MenuItem
                text='Сегодня'
                label={totalToday}
                onClick={handleTodayFilter} />
            {getFilters(thisWeek, handleAnyOtherFilter)}
            <MenuDivider
                title='Предстоящие' />
            {getFilters(upcoming, handleAnyOtherFilter)}
            {!Object.entries(upcoming).length && (
                <MenuItem
                    text='Ничего нет!'
                    disabled />
            )}
        </Menu>
    )
}

DateSelector.propTypes = {
    todos: PropTypes.array.isRequired
}

export default memo(DateSelector)