import { Classes } from '@blueprintjs/core';
import styles from './index.module.scss';



const ContentLayout = (props) => {
    const rootClasses = [
        styles.root,
        Classes.ELEVATION_2,
        props.activeRight ? 'right-active' : ''
    ].join(' ');

    return (
        <div className={rootClasses}>
            <div className={styles.leftContainer}>{props.left}</div>
            <div className={styles.rightContainer}>{props.right}</div>
            <div className={styles.overlayContainer}>{props.overlay}</div>
        </div>

    )
}

export default ContentLayout;