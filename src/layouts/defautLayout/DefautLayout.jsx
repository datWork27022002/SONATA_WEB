import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './DefaultLayout.module.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Language from '../Language';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { shrinkSidebar } = useSelector((state) => state.theme);

    return (
        <div className={cx('relative')}>
            <Sidebar />
            <div className={cx('relative', shrinkSidebar ? 'sm:ml-[70px]' : 'sm:ml-[170px]')}>
                <Header />
                <div className={cx('max-lg:mb-4')}>{children}</div>
            </div>
            <Language />
        </div>
    );
}

export default DefaultLayout;
