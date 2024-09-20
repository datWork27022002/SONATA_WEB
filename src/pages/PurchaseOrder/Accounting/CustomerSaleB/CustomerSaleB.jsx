import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function CustomerSaleB() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'No', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Out Warehouse', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'On hand', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Restock Level', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Price', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Total Amount', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Memo', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CUSTOMER_SALE_B.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input label="Customer" paddingLabel boldLabel iconRightInput={FaSearch} />
                    <Input label="Shipped on" paddingLabel boldLabel type="date" />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button orange>New</Button>
                    <Button blue>Search</Button>
                    <Button red>Add</Button>
                    <Button lime>Delete</Button>
                    <Button green>Save</Button>
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

export default CustomerSaleB;
