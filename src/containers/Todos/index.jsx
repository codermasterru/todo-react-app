import { ContentLayout, Overlay } from 'components/layout';
import { TodoAdd, Summary } from 'components/Todo';
import TodosAll from 'containers/Todos/All';
import { Component } from "react"
import { connect } from 'react-redux';

import { toggleView } from 'store/actions/root';
import { rootSelector } from 'store/selectors';
import { todosSummarySelector } from 'store/selectors';
import TodosNew from './New';

const mapStateToProps = state => ({
    ...rootSelector(state),
    ...todosSummarySelector(state)
})

const mapDispathToProps = dispath => ({
    changeView: () => dispath(toggleView())
})

export class Todos extends Component {
    render() {
        const { viewAll, pendingTodos, changeView } = this.props
        return (
            <ContentLayout
                activeRight={!viewAll}
                left={<TodosAll />}
                right={<TodosNew />}
                overlay={
                    <Overlay
                        left={<Summary todos={pendingTodos} toggleView={changeView} />}
                        right={<TodoAdd toggleView={changeView} />} />
                }
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Todos)



