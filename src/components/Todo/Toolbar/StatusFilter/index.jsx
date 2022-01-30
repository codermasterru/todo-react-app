import PropTypes from 'prop-types'

import { Button, ButtonGroup } from '@blueprintjs/core';
import styles from './index.module.scss';

const statuses = ['Все', 'В процессе', 'Выполненные']

const StatusFilter = ({ value, onSelect }) => {
    const handleChange = e => onSelect(e.target.name)
    return (
        <ButtonGroup minimal>
            {statuses.map((status, index) => (
                <Button
                    className={`${styles.button} 
                    ${value === status ? styles.active : ''}`}
                    key={index}
                    text={status}
                    name={status}
                    onClick={handleChange} />
            ))}
        </ButtonGroup>
    )
}

StatusFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}
export default StatusFilter;