import classNames from 'classnames/bind';
import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import { RxSlash } from 'react-icons/rx';

import styles from './Breadcrumb.module.scss';
import IconCustom from '~/components/IconCustom';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const { itemLevel1, itemLevel3, itemLevel2 } = config.nameMap;

    const RenderPath1 = () => {
        const itemfilter = Object.values(itemLevel1).filter((value) => value.pathKey === pathnames[0]);
        const to = `/${pathnames[0]}`;
        return (
            <li className={cx('flex !text-[#8b8b8b] hover:!text-primary-color')}>
                <IconCustom icon={RxSlash} />
                <Link className={cx('px-1')} to={to}>
                    {itemfilter[0]?.Visiblename || pathnames[0]}
                </Link>
            </li>
        );
    };

    const RenderPath2 = () => {
        const itemfilter = Object.values(itemLevel3).filter((value) => value.pathKey === pathnames[1])[0];

        if (itemfilter?.parent) {
            const item1 = itemLevel2[itemfilter.parent];
            const to1 = `/${pathnames[0]}/${item1.pathKey}`;
            const to2 = `/${pathnames.slice(0, 2).join('/')}`;
            return (
                <Fragment>
                    <li className={cx('flex !text-[#8b8b8b] hover:!text-primary-color')}>
                        <IconCustom icon={RxSlash} />
                        <Link className={cx('px-1')} to={to1}>
                            {item1?.Visiblename}
                        </Link>
                    </li>
                    <li className={cx('flex !text-[#8b8b8b] hover:!text-primary-color')}>
                        <IconCustom icon={RxSlash} />
                        <Link className={cx('px-1')} to={to2}>
                            {itemfilter?.Visiblename || pathnames[1]}
                        </Link>
                    </li>
                </Fragment>
            );
        }

        const to2 = `/${pathnames.slice(0, 2).join('/')}`;

        return (
            <li className={cx('flex !text-[#8b8b8b] hover:!text-primary-color')}>
                <IconCustom icon={RxSlash} />
                <Link className={cx('px-1')} to={to2}>
                    {itemfilter?.Visiblename || pathnames[1]}
                </Link>
            </li>
        );
    };

    return (
        <nav className={cx('bg-sixth-color px-1 py-2')}>
            <ol className={cx('flex')}>
                <li className={cx('hover:text-primary-color')}>
                    <Link to="/">
                        <IconCustom icon={FaHouse} className={cx('mx-2 text-third-color')} />
                    </Link>
                </li>
                <RenderPath1 />
                <RenderPath2 />
            </ol>
        </nav>
    );
}

export default Breadcrumb;
