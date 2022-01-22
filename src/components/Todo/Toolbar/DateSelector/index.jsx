import React, { memo } from 'react'
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
    if (isToday(date)) return 'Today'
    if (isTomorrow(date)) return 'Tomorrow'
    if (isThisWeek(date)) return format(date, 'dddd')
    return format(date, `Pp${!isThisYear(date) ? ', yyyy' : ''}`,{locale: ru})
}

const groupByDate = (list, filterBy) =>
    list.filter(filterBy).reduce((r, acc) => {
        const key = formatDate(acc.date)
        r[key] = [...(r[key] || []), acc]
        return r
    }, {})

const getFilters = obj =>
    Object.keys(obj).map(key => (
        <MenuItem key={key} text={key} label={obj[key].length} />
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

    return (
        <Menu className={styles.root}>
            <MenuItem text='Сегодня' label={totalToday} />
            {getFilters(thisWeek)}
            <MenuDivider title='Предстоящие' />
            {getFilters(upcoming)}
            {!Object.entries(upcoming).length && (
                <MenuItem text='Нет дел!' disabled />
            )}
        </Menu>
    )
}

DateSelector.propTypes = {}

export default memo(DateSelector)