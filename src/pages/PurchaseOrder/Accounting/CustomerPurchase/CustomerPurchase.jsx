import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStatus = ['All', '1', '2'];

function InventoryTransfer() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'No', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Bill No', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Customer', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Total Amount', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Status', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Detail', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Note', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CUSTOMER_PURCHASE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>
                    <Input label="Customer" paddingLabel boldLabel />
                    <Input label="Status" paddingLabel boldLabel dropDown listOptions={listStatus} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button orange>New</Button>
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

export default InventoryTransfer;
