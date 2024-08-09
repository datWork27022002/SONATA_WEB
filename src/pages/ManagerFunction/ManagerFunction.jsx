import classNames from 'classnames/bind';

import styles from './ManagerFunction.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function ManagerFunction() {
    const menuStructure = config.menuStructure.MANAGERFUNCTION;

    return <InnerLayout menuStructure={menuStructure} title={'Manager Function'} />;
}

export default ManagerFunction;
