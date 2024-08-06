import classNames from 'classnames/bind';

import styles from './WebLogin.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function WebLogin() {
    const menuStructure = config.menuStructure.WEBLOGIN;

    return <InnerLayout menuStructure={menuStructure} title={'Web Login'} />;
}

export default WebLogin;
