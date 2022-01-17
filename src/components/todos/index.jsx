import { AnchorButton, Button, ButtonGroup, Position, Spinner } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Component } from 'react';
import Header from 'components/header';
import Todo from './todo';
import StatusSelector from './statusSellector';
import styles from './index.module.scss';

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
        const completed = this.props.todos.filter(t => t.done).length
        const percentage = completed
            ? parseFloat(completed / this.props.todos.length).toFixed(2)
            : 0

        const progress = (
            <div className={styles.progress}>
                <Spinner size={55} value={percentage} />
                <span>{percentage * 100}% выполнено</span>
            </div>
        )
        return (
            <div className={styles.root}>
                <Header
                    title={'Моё расписание'}
                    subtitle={format(new Date(), 'Pp', { locale: ru })}
                    action={progress} />

                <div className={`${styles.toolbar} 
                ${this.state.scrolled ? styles.scrolled : ''}`}>
                    <div className={styles.filter}>
                        <ButtonGroup minimal>
                            <Popover2 position={Position.BOTTOM_LEFT} minimal>
                                <AnchorButton rightIcon='caret-down' icon='calendar'>
                                    Завтра
                                </AnchorButton>
                            </Popover2>
                            <Popover2
                                content={
                                    <StatusSelector onselect={this.handleStatusFilterChange} />
                                }
                                position={Position.BOTTOM_LEFT}
                                minimal>
                                <AnchorButton rightIcon='caret-down' icon='eye-open'>
                                    {this.state.show}
                                </AnchorButton>
                            </Popover2>
                        </ButtonGroup>

                    </div>
                    <div className={styles.actions}>
                        <ButtonGroup minimal>
                            <Button icon='tick' />
                            <Button icon='trash' />
                        </ButtonGroup>
                    </div>
                </div>
                <div className={styles.list} onScroll={this.handleScroll}>
                    {this.props.todos.map(todo => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
                </div>

            </div>

        )
    }


}