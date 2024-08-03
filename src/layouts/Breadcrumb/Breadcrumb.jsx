import classNames from 'classnames/bind';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import { RxSlash } from 'react-icons/rx';

import styles from './Breadcrumb.module.scss';
import IconCustom from '~/components/IconCustom';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const breadcrumbNameMap = {
    BasicSettings: 'Basic Settings',
};

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className={cx('bg-sixth-color px-1 py-2')}>
            <ol className={cx('flex')}>
                <li>
                    <Link to="/">
                        <IconCustom icon={FaHouse} className={cx('mx-2 text-third-color')} />
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <li key={to} className={cx('flex !text-[#8b8b8b]')}>
                            <IconCustom icon={RxSlash} />
                            <Link className={cx('px-1')} to={to}>
                                {breadcrumbNameMap[value] || value}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
