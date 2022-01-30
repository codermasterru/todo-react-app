import { Component } from 'react';

import Header from 'components/layout/Header';
import { Progress, Toolbar, TodoList } from 'components/Todo';

import styles from './index.module.scss';
import { todoListSelector } from 'store/selectors';
import { connect } from 'react-redux';
import { completeAll, deleteAll, deleteTodo, toggleTodoStatus, updateDateFilter, updateStatusFilter } from 'store/actions/todo';
import DateFilter from 'components/Todo/DateFilter';

const mapStateToProps = state => todoListSelector(state)

const mapDispatchToProps = dispatch => ({
    completeAll: () => dispatch(completeAll()),
    deleteAll: () => dispatch(deleteAll()),
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodoStatus: id => dispatch(toggleTodoStatus(id)),
    updateDateFilter: filter => dispatch(updateDateFilter(filter)),
    updateStatusFilter: status => dispatch(updateStatusFilter(status))
})

export class TodosAll extends Component {

    state = {
        scrolled: false,
        show: 'Все',
        date: new Date()
    }

    handleStatusFilterChange = status => this.props.updateStatusFilter(status)
    handleDateFilterChange = filter => this.props.updateDateFilter(filter)
    handleScroll = e => {
        if (e.target.scrollTop > 10) this.setState({ scrolled: true })
        else this.setState({ scrolled: false })
    }

    render() {
        const toolbarProps = {
            onStatusFilterChange: this.handleStatusFilterChange
        }
        const listProps = {}

            ; ({
                statusFilter: toolbarProps.statusFilter,
                completeAll: toolbarProps.completeAll,
                deleteAll: toolbarProps.deleteAll,
                toggleTodoStatus: listProps.toggleTodoStatus,
                deleteTodo: listProps.deleteTodo
            } = this.props)

        const { todos } = this.props
        return (
            <div className={styles.root}>
                <Header title='Моё расписание'>
                    <div className={styles.subtitleWrapper}>
                        <DateFilter
                            todos={todos}
                            value={this.props.dateFilter}
                            onDaetFilterChange={this.handleDateFilterChange} />
                        <Progress todos={todos} />
                    </div>
                </Header>
                <Toolbar
                    todos={todos}
                    {...toolbarProps}
                    scrolled={this.state.scrolled}
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