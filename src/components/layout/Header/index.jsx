import styles from './index.module.scss';

const Header = props => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1>{props.title}</h1>
                {!props.children && <span>{props.subtitle}</span>}
                {props.children}
            </div>
            {props.action}
        </div>
    )
}

export default Header;