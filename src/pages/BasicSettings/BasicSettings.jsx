import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './BasicSettings.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function BasicSettings() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'login' });

    return (
        <div className={cx('bg-red px-3 py-4')}>
            <div className={cx('my-2 py-2 text-xl')}>Basic Settings</div>
        </div>
    );
}

export default BasicSettings;
