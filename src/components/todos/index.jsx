
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Component } from 'react';
import Header from 'components/header';
import Todo from './todo';
import styles from './index.module.scss';
import Progress from 'components/progress';
import Toolbar from './toolbar';

export default class Todos extends Component {

    state = {
        scrolled: false,
        show: 'Все'
    }

    handleStatusFilterChange = status => this.setState({ show: status })

    handleScroll = e => {
        if (e.target.scrollTop > 10) this.setState({ scrolled: true })
        else this.setState({ scrolled: false })
    }

    render() {

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
                    todos = {this.state.todos}
                />
                <div className={styles.list} onScroll={this.handleScroll}>
                    {this.props.todos.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </div>

            </div>

        )
    }


}