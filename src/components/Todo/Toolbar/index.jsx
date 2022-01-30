import PropTypes from 'prop-types'
import { Button, ButtonGroup, Position } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';
import StatusFilter from './StatusFilter';

import styles from './index.module.scss';

const Toolbar = props => {
    const { statusFilter, completeAll, deleteAll, onStatusFilterChange } = props
    return (
        <div className={`${styles.toolbar} 
        ${props.scrolled ? styles.scrolled : ''}`}>
            <div className={styles.filter}>
                <StatusFilter
                    value={statusFilter}
                    onSelect={onStatusFilterChange} />
            </div>
            <div className={styles.actions}>

                <ButtonGroup minimal>
                    <Tooltip2
                        content={'Завершить все'}
                        position={Position.BOTTOM}
                        onClick={completeAll}>
                        <Button icon={'tick'} />
                    </Tooltip2>
                    <Tooltip2
                        content={'Удалить все'}
                        position={Position.BOTTOM}
                        onClick={deleteAll}>
                        <Button icon={'trash'} />
                    </Tooltip2>
                </ButtonGroup>
            </div>
        </div>
    )
}


Toolbar.propTypes = {
    statusFilter: PropTypes.string.isRequired
}


export default Toolbar;