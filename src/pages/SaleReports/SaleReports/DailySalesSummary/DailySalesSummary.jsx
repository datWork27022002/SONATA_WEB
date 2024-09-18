import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];
const listClassification = ['All', '1', '2', '3'];

function DailySalesSummary() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRow2, setSelectedRow2] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Guest', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'No of Transaction', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Gross Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Transaction D/C', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Net Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Sales Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'General Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Delivery Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Deposit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tip', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'Date/ Time', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Receipt No', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Classification', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Menu Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Unit Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Menu Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gross Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Transaction D/C', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Net Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Deposit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tip Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.DAILY_SALES_SUMMARY.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <Input label="Receipt Number" paddingLabel boldLabel />
                    <Input label="Classification" paddingLabel boldLabel dropDown listOptions={listClassification} />
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
            <div className={cx('mt-6 overflow-auto')}>
                <TableCustom
                    className={cx('h-[280px]')}
                    columns={columns2}
                    data={data2}
                    selectedRow={selectedRow2}
                    setSelectedRow={setSelectedRow2}
                />
            </div>
        </TitleLayout>
    );
}

export default DailySalesSummary;
