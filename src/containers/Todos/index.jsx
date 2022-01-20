import { ContentLayout, Overlay } from 'components/layout';
import { TodoAdd, Summary } from 'components/Todo';
import TodosAll from 'containers/Todos/All';
import { Component } from "react"
import { connect } from 'react-redux';

import { toggleView } from 'store/actions/root';
import { rootSelector } from 'store/selectors';
import TodosNew from './New';

const mapStateToProps = state => rootSelector(state);

const mapDispathToProps = dispath => ({
    changeView: () => dispath(toggleView())
})

export class Todos extends Component {

    render() {
        return (
            <ContentLayout
                activeRight={!this.props.viewAll}
                left={<TodosAll />}
                right={<TodosNew />}
                overlay={
                    <Overlay
                        left={<Summary todos={[]} toggleView={this.props.changeView} />}
                        right={<TodoAdd toggleView={this.props.changeView} />} />
                }
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Todos)



