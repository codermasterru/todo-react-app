import React, { Component } from 'react'

import { Header } from 'components/layout'
import { TodoForm } from 'components/Todo'

class TodoNew extends Component {


    render() {
        return (
            <div>
                <Header title={'Новое дело'} subtitle={'5 задач на сегодня'} />
                <TodoForm />
            </div>
        )
    }
}

export default TodoNew