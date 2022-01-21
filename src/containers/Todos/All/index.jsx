import { Component } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import Header from 'components/layout/Header';
import { Progress, Toolbar, TodoList } from 'components/Todo';

import styles from './index.module.scss';
import { todoListSelector } from 'store/selectors';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodoStatus } from 'store/actions/todo';

const mapStateToProps = state => todoListSelector(state)

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodoStatus: id => dispatch(toggleTodoStatus(id))
})

export class TodosAll extends Component {

    state = {
        scrolled: false,
        show: 'Все',
        date: new Date()
    }

    handleStatusFilterChange = status => this.setState({ show: status })

    handleScroll = e => {
        if (e.target.scrollTop > 10) this.setState({ scrolled: true })
        else this.setState({ scrolled: false })
    }

    render() {
        const toolbarProps = {}
        const listProps = {}

            ; ({
                statusFilter: toolbarProps.statusFilter,
                dateFilter: toolbarProps.dateFilter,
                toggleTodoStatus: listProps.toggleTodoStatus,
                deleteTodo: listProps.deleteTodo
            } = this.props)

        const { todos } = this.props
        return (
            <div className={styles.root}>
                <Header
                    title={'Моё расписание'}
                    subtitle={format(new Date(), 'Pp', { locale: ru })}
                    action={<Progress todos={this.props.todos} />} />
                <Toolbar
                    todos={todos}
                    {...toolbarProps}
                    scrolled={this.state.scrolled}
                    onStatusFilterChange={this.handleStatusFilterChange}
                />
                <TodoList
                    todos={todos}
                    onScroll={this.handleScroll}
                    {...listProps} />

            </div>

        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosAll)