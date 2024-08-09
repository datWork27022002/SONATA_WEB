import classNames from 'classnames/bind';

import styles from './BasicSettings.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function BasicSettings() {
    const menuStructure = config.menuStructure.BASICSETTINGS;

    return <InnerLayout menuStructure={menuStructure} title={'Basic Settings'} />;
}

export default BasicSettings;
