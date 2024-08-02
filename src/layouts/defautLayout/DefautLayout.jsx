import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from '../Sidebar';

import styles from './DefaultLayout.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('flex')}>
            <Sidebar />
            <div className={cx('relative flex-1')}>
                <Header />
                <div className={cx('bg-blue-50', 'max-md:mt-10')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
