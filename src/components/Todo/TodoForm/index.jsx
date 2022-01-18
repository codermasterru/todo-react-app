import { Component } from 'react';
import { Popover2 } from '@blueprintjs/popover2';
import { Button, Switch, Position, Icon } from '@blueprintjs/core';
import { DateInput, TimePrecision } from '@blueprintjs/datetime';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import Header from 'components/layout/Header';
import { Avatar, InputGroup } from 'components/UI';
import AvatarSelector from 'components/Todo/TodoForm/AvatarSelector';
import CategorySelector from 'components/Todo/TodoForm/CategorySelector';
import Categories from 'mock/categories';

import styles from './index.module.scss';

export default class TodoForm extends Component {

    state = {
        category: '1',
        icon: '',
        description: '',
        location: '',
        date: null,
        isAllDay: false,
        minTime: new Date(),
        mimDate: new Date()
    }

    handleChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [target.name]: value })
    }

    formatDate = date => format(date, `Pp${this.state.isAllDay ? '' : ' hh:mm a'}`, { locale: ru })

    handleDateChange = (date, isUserChange) => {
        if (isUserChange) this.setState({ date: date })
    }

    handleClear = field => this.setState({ [field]: '' })

    render() {
        const { icon, description, location, date, category } = this.state;
        const canSave = description && location && date && icon;

        return (
            <div >
                <Header
                    title='Новое дело'
                    subtitle='3 дела на сегодня' />
                <div className={styles.todoIcon}>
                    <Popover2
                        minimal
                        canEscapeKeyClose
                        content={
                            <AvatarSelector
                                onSelect={this.handleChange}
                                field='icon' />}
                        position={Position.BOTTOM}>
                        <Avatar
                            icon={icon || 'plus'}
                            large
                            disabled={!icon}
                            badge={
                                icon && (
                                    <Icon
                                        icon='edit'
                                        size={12}
                                        className={styles.badge} />)} />
                    </Popover2>
                </div>
                <form className={styles.form}>
                    <div className={styles.category}>
                        <Popover2
                            minimal
                            canEscapeKeyClose
                            content={
                                <CategorySelector
                                    onSelect={this.handleChange}
                                    field='category' />}
                            position={Position.BOTTOM_LEFT}>
                            <InputGroup
                                className={styles[category]}
                                value={Categories[category]}
                                canClear={false}
                                readOnly>
                                <Icon icon='symbol-circle' />
                            </InputGroup>
                        </Popover2>
                    </div>

                    <div>
                        <InputGroup
                            name='description'
                            placeholder='Название'
                            value={description}
                            onChange={this.handleChange}
                            onClear={this.handleClear} />
                    </div>
                    <div>
                        <InputGroup
                            name='location'
                            placeholder='Где?'
                            value={location}
                            autoComplete='off'
                            onChange={this.handleChange}
                            onClear={this.handleClear} />
                    </div>
                    <div className={styles.date}>
                        <div>
                            <DateInput
                                closeOnSelection={this.state.isAllDay}
                                placeholder='Когда'
                                minDate={this.state.mimDate}
                                inputProps={{ readOnly: true }}
                                formatDate={this.formatDate}
                                parseDate={str => new Date(str)}
                                timePrecision={
                                    this.state.isAllDay ? undefined : TimePrecision.MINUTE
                                }
                                timePickerProps={
                                    this.state.isAllDay
                                        ? undefined
                                        : { minTime: this.state.minTime }}
                                popoverProps={{ position: Position.TOP }}
                                onChange={this.handleDateChange}
                                value={date}
                            />
                        </div>
                        <div className={styles.allDay}>
                            <Switch
                                label='Все дни'
                                checked={this.state.isAllDay}
                                name='isAllDay'
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <label className={styles.hint}>* Обязательное поле</label>
                    <Button
                        large
                        minimal
                        fill
                        className={styles.saveButton}
                        disabled={!canSave}>
                        ДОБАВИТЬ ДЕЛО
                    </Button>
                </form>
            </div>
        )
    }
}

