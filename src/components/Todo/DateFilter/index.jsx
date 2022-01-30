import PropTypes from 'prop-types'
import { Popover2 } from '@blueprintjs/popover2'
import { AnchorButton, Position } from '@blueprintjs/core'


import DateSelector from './DateSelector'
import styles from './index.module.scss'

const DateFilter = (props) => {
    return (
        <div>
            <Popover2
                content={
                    <DateSelector
                        todos={props.todos}
                        onSelect={props.onDateFilterChange} />}
                position={Position.BOTTOM_LEFT}
                minimal>
                <AnchorButton
                    minimal
                    rightIcon='caret-down'
                    icon='calendar'
                    className={styles.button}>
                    {props.value.key}
                </AnchorButton>
            </Popover2>
        </div>
    )
}

DateFilter.propTypes = {
    value: PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.object
    })
}

export default DateFilter