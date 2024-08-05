import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './BasicSettings.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function BasicSettings() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'login' });

    const menuCategories = Object.keys(config.menuStructure.BASICSETTINGS);

    return <InnerLayout menuCategories={menuCategories} title={'Basic Settings'} />;
}

export default BasicSettings;
