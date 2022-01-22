import React, { Component } from 'react'

import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'
import { todoNewSelector } from 'store/selectors'
import { addTodo, toggleAllDayFlag, updateField } from 'store/actions/todo'
import { connect } from 'react-redux'

const mapStateToProps = state => todoNewSelector(state)

const mapDispatchToProps = dispatch => ({
    addTodo: newTodo => dispatch(addTodo(newTodo)),
    updateField: payload => dispatch(updateField(payload)),
    toggleAllDayFlag: () => dispatch(toggleAllDayFlag())
})

class TodosNew extends Component {
    render() {
        const {
            totalTodosToday,
            newTodo,
            isAllDay,
            addTodo,
            updateField,
            toggleAllDayFlag
        } = this.props

        const todoFormProps = {
            newTodo,
            isAllDay,
            addTodo,
            updateField,
            toggleAllDayFlag
        }

        return (
            <div>
                <Header
                    title={'Новое дело'}
                    subtitle={`${totalTodosToday} задач на сегодня`} />
                <TodoForm
                    {...todoFormProps} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosNew)