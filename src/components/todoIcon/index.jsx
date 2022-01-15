import PropTypes from 'prop-types'
import { Icon } from '@blueprintjs/core';
import styles from './index.module.scss';

const TodoIcon = ({ icon, large, disabled, badge }) => {
    return (
        <div className={styles.root}>
            <Icon
                className={`${styles.icon} ${large ? styles.large : ''}
                ${disabled ? styles.disabled : ''}`}
                icon={icon} />
            {badge && <div className={styles.badge}>{badge}</div>}
        </div>
    )
}

TodoIcon.defaultProps = {
    large: false,
    disabled: false,
    badge: null
}

TodoIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    badge: PropTypes.node
}
export default TodoIcon;