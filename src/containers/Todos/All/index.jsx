import { Component } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import Header from 'components/layout/Header';
import { Progress, Toolbar, TodoList } from 'components/Todo';

import styles from './index.module.scss';
import { todoSelector } from 'store/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => todoSelector(state)
const mapDispatchToProps = dispatch => ({

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
        const { todos } = this.props
        return (
            <div className={styles.root}>
                <Header
                    title={'Моё расписание'}
                    subtitle={format(new Date(), 'Pp', { locale: ru })}
                    action={<Progress todos={this.props.todos} />} />
                <Toolbar
                    todos={this.props.todos}
                    show={this.state.show}
                    scrolled={this.state.scrolled}
                    onStatusFilterChange={this.handleStatusFilterChange}
                />
                <TodoList todos={todos} onScroll={this.handleScroll} />

            </div>

        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosAll)