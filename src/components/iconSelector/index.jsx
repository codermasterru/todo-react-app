import { Button } from '@blueprintjs/core';
import styles from './index.module.scss';

const availableIcons = [
    'chat',
    'highlight',
    'path-search',
    'print',
    'airplane',
    'drive-time',
    'envelope',
    'people',
    'camera',
    'headset',
    'mobile-video',
    'briefcase',
    'calculator',
    'heart',
    'office',
    'shop',
    'shopping-cart',
    'tree',
    'wrench',
    'dollar'
]

const IconSelector = props => {

    return (
        <div className={styles.root}>
            {availableIcons.map(name => (
                <div>
                    <Button icon={name} large />
                </div>
            ))}
        </div>
    )
}
export default IconSelector;
