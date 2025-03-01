import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function VoidSummary() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Number of Cash Void', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Number of Card Void', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Number of Check Void', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Number of Gift Void', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Number of Other Void', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Total Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'User payment', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.VOID_SUMMARY.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[480px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default VoidSummary;
