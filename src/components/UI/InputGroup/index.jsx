import styles from './index.module.scss';
import { Button } from '@blueprintjs/core';

const getHTMLProps = ({
    readOnly,
    name,
    placeholder,
    value,
    autoComplete
}) => ({
    readOnly,
    name,
    placeholder,
    value,
    autoComplete
})

const InputGroup = props => {
    const handleClear = () => {
        props.onClear(props.name)
    }

    return (
        <div className={`${styles.inputGroup} ${props.className} || ''`}>
            <input {...getHTMLProps(props)} onChange={props.onChange} />
            {props.canClear && props.value && (
                <Button icon={'cross'} minimal onClick={handleClear} />
            )}
            {props.children}
        </div>
    )
}

export default InputGroup;