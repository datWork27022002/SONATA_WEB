import classNames from 'classnames/bind';

import styles from './BIZSMS.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function BIZSMS() {
    const menuStructure = config.menuStructure.BIZSMS;

    return <InnerLayout menuStructure={menuStructure} title={'BIZ SMS'} />;
}

export default BIZSMS;
