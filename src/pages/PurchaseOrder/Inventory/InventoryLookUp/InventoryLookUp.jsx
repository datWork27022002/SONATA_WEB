import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listStore = ['hyojung'];

const listWarehouse = ['1', '2', '3'];

const listCategory = ['1', '2', '3'];

function InventoryLookUp() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'warehouse', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'On Hand', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Restock Level', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'E.S. Stock', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Inventory Unit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cost', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Cost', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Memo', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.INVENTORY_LOOK_UP.Visiblename}>
            {/* form */}

            <div className={cx('grid-cols-4 gap-x-5 lg:grid', 'max-lg:flex max-lg:flex-wrap')}>
                <Input
                    label="Store Name"
                    boldLabel
                    className={cx('w-[300px] max-lg:w-[300px]')}
                    dropDown
                    listOptions={listStore}
                />
                <Input label="Warehouse" boldLabel className={cx('w-[300px]')} dropDown listOptions={listWarehouse} />
                <Input label="Category" boldLabel className={cx('w-[300px]')} dropDown listOptions={listCategory} />
                <Input label="Inventory Item" boldLabel className={cx('w-[300px]')} />
                <Input label="Barcode" boldLabel className={cx('w-[300px]')} />
                <div className={cx('flex items-center gap-2 text-[13px] font-semibold')}>
                    <input type="checkbox" />
                    <span>Show Out of stock item</span>
                </div>
                <div className={cx('flex items-center gap-2 text-[13px] font-semibold')}>
                    <input type="checkbox" />
                    <span>Show item(s) below restock level</span>
                </div>
                <div className={cx('col-start-4 flex items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>

            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[440px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default InventoryLookUp;
