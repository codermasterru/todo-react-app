import { Component } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import Header from 'components/layout/Header';
import { Progress, Toolbar, TodoList } from 'components/Todo';

import styles from './index.module.scss';

export default class Todos extends Component {

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
        const todos =
            this.state.show === 'All'
                ? this.props.todos
                : this.props.todos.filter(todo =>
                    this.state.show === 'Done' ? todo.done : !todo.done
                )
        return (
            <div className={styles.root}>
                <Header
                    title={'Моё расписание'}
                    subtitle={format(new Date(), 'Pp', { locale: ru })}
                    action={<Progress todos={this.props.todos} />} />
                <Toolbar
                    scrolled={this.state.scrolled}
                    onStatusFilterChange={this.handleStatusFilterChange}
                    show={this.state.show}
                    todos={this.props.todos}
                />
                <TodoList todos={todos} onScroll={this.handleScroll} />

            </div>

        )
    }


}