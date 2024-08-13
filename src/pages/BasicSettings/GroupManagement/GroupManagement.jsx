import classNames from 'classnames/bind';

import styles from './GroupManagement.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function GroupManagement() {
    return <div className={cx('text-2xl font-bold')}>GroupManagement</div>;
}

export default GroupManagement;
