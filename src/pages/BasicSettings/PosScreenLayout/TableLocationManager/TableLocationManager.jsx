import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './TableLocationManager.module.scss';
import TitleLayout from '~/components/TitleLayout';
import Button from '~/components/Button';
import config from '~/config';
import HeaderGroupTable from './HeaderGroupTable';
import ConfigTable from './ConfigTable';
import DisplayTable from './DisplayTable';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function TableLocationManager() {
    const [groupTableSelected, setGroupTableSelected] = useState(0);

    return (
        <TitleLayout title={config.nameMap.itemLevel3.TABLE_LOCATION_MANAGER.Visiblename}>
            <div className={cx('flex justify-center')}>
                <div>
                    <HeaderGroupTable
                        groupTableSelected={groupTableSelected}
                        setGroupTableSelected={setGroupTableSelected}
                    />
                    <div className={cx('my-2 flex justify-end')}>
                        <Button green>Save</Button>
                    </div>
                    <ConfigTable />
                    <DisplayTable />
                </div>
            </div>
        </TitleLayout>
    );
}

export default TableLocationManager;
