import React from 'react';
import classNames from 'classnames/bind';

import styles from './MenuSetup.module.scss';
import TitleLayout from '~/components/TitleLayout';
import MenuGroup from './MenuGroup';
import PosMenu from './PosMenu';
import MenuTable from './MenuTable';
import FormSetup from './FormSetup';
import config from '~/config';

const cx = classNames.bind(styles);

function MenuSetup() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.MENU_SETUP.Visiblename}>
            <div className={cx('mb-2 flex flex-col sm:items-center')}>
                {/* form */}
                <div className={cx('flex max-lg:flex-col')}>
                    <div className={cx('lg:mr-4')}>
                        <MenuGroup />
                        <PosMenu />
                    </div>
                    {/* table */}
                    <MenuTable />
                </div>
                {/* Form Setup */}
                <FormSetup />
            </div>
        </TitleLayout>
    );
}

export default MenuSetup;
