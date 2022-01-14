import styles from './index.module.scss';

const Overlay = props => {
    return (
        <div className={styles.overlay}>
            <div className={styles.left}>{props.left}</div>
            <div className={styles.right}>{props.right}</div>
        </div>
    )
}

export default Overlay;