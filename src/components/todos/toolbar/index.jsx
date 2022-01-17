import { AnchorButton, Button, ButtonGroup, Position } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import StatusSelector from './statusSellector';

import styles from './index.module.scss';
import DateSelector from './dateSelector';

const Toolbar = (props) => {
    return (
        <div className={`${styles.toolbar} 
        ${props.scrolled ? styles.scrolled : ''}`}>
            <div className={styles.filter}>
                <ButtonGroup minimal>
                    <Popover2
                        content={<DateSelector todos={props.todos} />}
                        position={Position.BOTTOM_LEFT}
                        minimal>
                        <AnchorButton rightIcon='caret-down' icon='calendar'>
                            Сегодня
                        </AnchorButton>
                    </Popover2>
                    <Popover2
                        content={
                            <StatusSelector onselect={props.onStatusFilterChange} />
                        }
                        position={Position.BOTTOM_LEFT}
                        minimal>
                        <AnchorButton rightIcon='caret-down' icon='eye-open'>
                            {props.show}
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
    )
}



export default Toolbar;