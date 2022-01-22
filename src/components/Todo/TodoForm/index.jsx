import { Popover2 } from '@blueprintjs/popover2';
import { Button, Switch, Position, Icon } from '@blueprintjs/core';
import { DateInput, TimePrecision } from '@blueprintjs/datetime';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Avatar, InputGroup } from 'components/UI';
import AvatarSelector from 'components/Todo/TodoForm/AvatarSelector';
import CategorySelector from 'components/Todo/TodoForm/CategorySelector';
import Categories from 'mock/categories';

import styles from './index.module.scss';

const TodoForm = ({
    newTodo,
    isAllDay,
    addTodo,
    updateField,
    toggleAllDayFlag
}) => {

    const formatDate = date =>
        format(date, `Pp${isAllDay ? '' : ' hh:mm a'}`, { locale: ru })

    const handleChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        updateField({ field: target.name, value })
    }

    const handleClear = field => updateField({ field, value: '' })

    const handleDateChange = (date, isUserChange) => {
        if (isUserChange) updateField({ field: 'date', value: date })
    }

    const handleAddTodo = () => addTodo(newTodo)


    const { icon, description, location, date, category } = newTodo;
    const canSave = description && location && date && icon;
    const timePrecision = isAllDay ? undefined : TimePrecision.MINUTE
    const timePickerProps = isAllDay ? undefined : { minTime: new Date() }

    return (
        <form className={styles.form}>
            <div className={styles.todoIcon}>
                <Popover2
                    minimal
                    canEscapeKeyClose
                    content={
                        <AvatarSelector
                            onSelect={handleChange}
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
                                    size={'12'}
                                    className={styles.badge} />)} />
                </Popover2>
            </div>
            <div className={styles.category}>
                <Popover2
                    minimal
                    canEscapeKeyClose
                    content={
                        <CategorySelector
                            onSelect={handleChange}
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
                    placeholder='Описание'
                    value={description}
                    onChange={handleChange}
                    onClear={handleClear} />
            </div>
            <div>
                <InputGroup
                    name='location'
                    placeholder='Место'
                    value={location}
                    autoComplete='off'
                    onChange={handleChange}
                    onClear={handleClear} />
            </div>
            <div className={styles.date}>
                <div>
                    <DateInput
                        closeOnSelection={isAllDay}
                        placeholder='Когда'
                        minDate={new Date()}
                        inputProps={{ readOnly: true }}
                        formatDate={formatDate}
                        parseDate={str => new Date(str)}
                        timePrecision={timePrecision}
                        timePickerProps={timePickerProps}
                        popoverProps={{ position: Position.TOP }}
                        onChange={handleDateChange}
                        value={date}
                    />
                </div>
                <div className={styles.allDay}>
                    <Switch
                        label='Все дни'
                        checked={isAllDay}
                        name='isAllDay'
                        onChange={toggleAllDayFlag} />
                </div>
            </div>
            <label className={styles.hint}>* Обязательное поле</label>
            <Button
                large
                minimal
                fill
                className={styles.saveButton}
                disabled={!canSave}
                onClick={handleAddTodo}>
                ДОБАВИТЬ ДЕЛО
            </Button>
        </form>
    )
}


export default TodoForm;

