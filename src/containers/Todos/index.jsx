import { ContentLayout, Overlay } from 'components/layout';
import { TodoAdd, Summary } from 'components/Todo';
import TodoAll from 'containers/Todos/All';
import { Component } from "react"
import TodoNew from './New';

export default class Todos extends Component {

    render() {
        return (
            <>
                <ContentLayout
                    activeRight={this.props.state.addNew}
                    left={<TodoAll todos={this.props.state.todos} />}
                    right={<TodoNew />}
                    overlay={
                        <Overlay
                            left={<Summary todos={this.props.state.todos} />}
                            right={<TodoAdd />} />
                    }
                />
                <button onClick={this.props.handleClick}>Переключить</button>
            </>

        )
    }
}



