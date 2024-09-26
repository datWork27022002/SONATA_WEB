import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function WebLoginFunction() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '150px' },
        { name: 'Employee', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Login ID', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Password', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Security Level Cloud', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Use', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Last Login', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.WEB_LOGIN.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input label="Employee" paddingLabel boldLabel />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button green>Save</Button>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[450px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    showHideList
                />
            </div>
        </TitleLayout>
    );
}

export default WebLoginFunction;
