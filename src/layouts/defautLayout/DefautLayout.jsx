import classNames from 'classnames/bind';
import Header from './Header';
import Sidebar from './Sidebar';

import styles from './DefaultLayout.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('flex')}>
            <Sidebar />
            <div className={cx('flex-1 relative')}>
                <Header />
                <div className={cx(' bg-blue-50')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
