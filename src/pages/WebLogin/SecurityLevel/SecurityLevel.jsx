import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import Input from '~/components/Input';
import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind();

const listSecurityLevel = ['level 1', 'level 2', 'level 3', 'level 4', 'level 5'];

function SecurityLevel() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [{ topMenu: 'Web Login', middleMenu: '', workUnit: 'Web Login' }];

    const columns = [
        { name: 'Top Menu', selector: (row) => row.topMenu, sortable: true, width: '200px' },
        { name: 'Middle Menu', selector: (row) => row.middleMenu, sortable: true, width: '200px' },
        { name: 'Work Unit', selector: (row) => row.workUnit, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SECURITY_LEVEL.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input label="Security Level" paddingLabel boldLabel dropDown listOptions={listSecurityLevel} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button green>Save</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[500px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    selectableRows
                />
            </div>
        </TitleLayout>
    );
}

export default SecurityLevel;
