import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];
const listPOS = ['All', '1', '2', '3'];

function SalesByReceipt() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Date/ Time', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Receipt No', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Guest', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gross Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Transaction D/C', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Net Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gross Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Refund Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Sales Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Deposit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tip', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cash', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Card', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Check', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gift Card', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'House Account', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Point', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'CK', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'User Payment', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'User Payment Electtronic', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Other', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Employee', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Customer Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Memo', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_BY_RECEIPT.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <Input label="POS" paddingLabel boldLabel dropDown listOptions={listPOS} />
                    <Input label="Receipt No" paddingLabel boldLabel />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                    <Button red>CCTV</Button>
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
                />
            </div>
        </TitleLayout>
    );
}

export default SalesByReceipt;
