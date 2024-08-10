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
        <div className={cx('relative flex')}>
            <Sidebar />
            <div className={cx('relative flex-1', shrinkSidebar ? 'sm:ml-[70px]' : 'sm:ml-[150px]')}>
                <Header />
                <div className={cx('')}>{children}</div>
            </div>
            <Language />
        </div>
    );
}

export default DefaultLayout;
