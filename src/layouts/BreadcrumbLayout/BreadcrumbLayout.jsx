import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb';
import Language from '../Language';

import styles from './BreadcrumbLayout.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function BreadcrumbLayout({ children }) {
    return (
        <div className={cx('relative flex')}>
            <Sidebar />
            <div className={cx('relative flex-1')}>
                <Header />
                <Breadcrumb />
                <div className={cx('max-w-[950px] px-3', 'max-md:mt-10')}>{children}</div>
            </div>
            <Language />
        </div>
    );
}

export default BreadcrumbLayout;
