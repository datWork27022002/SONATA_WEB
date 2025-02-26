import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function SalesDiscountSummary() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Classification', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date / Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Receipt No', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Menu Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Bill Atm', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item D/C', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Bill Discount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Bill Sale Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_DISCOUNT_SUMMARY.Visiblename}>
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
                    className={cx('h-[200px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
            <div className={cx('mt-4 flex items-center justify-end')}>
                <Button teal>Export Excel</Button>
            </div>
            <div className={cx('mt-4 overflow-auto')}>
                <TableCustom className={cx('h-[240px]')} columns={columns2} data={data2} />
            </div>
        </TitleLayout>
    );
}

export default SalesDiscountSummary;
