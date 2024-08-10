import classNames from 'classnames/bind';
import Breadcrumb from '../Breadcrumb';
import DefautLayout from '../defautLayout';

import styles from './BreadcrumbLayout.module.scss';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function BreadcrumbLayout({ children }) {
    return (
        <DefautLayout>
            <Breadcrumb />
            <div className={cx('max-w-[950px] px-3')}> {children}</div>
        </DefautLayout>
    );
}

export default BreadcrumbLayout;
