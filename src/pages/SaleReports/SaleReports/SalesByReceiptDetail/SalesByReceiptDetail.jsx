import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listCategory = [
    '돼지고기 Thit Heo TD ',
    '돼지고기 세트 Thit Heo SET TD ',
    '사이드메뉴 ',
    '소고기 세트 Thit Bo SET TD ',
    '점심특선메뉴 Thuc don dac biet bua trua TD  ',
    'them topping  ',
    'MEMBERSHIP  ',
    '음료 Do uong TD  ',
];

const listStore = ['hyojung'];

function SalesByReceiptDetail() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [store, setStore] = useState(listStore[0]);

    const dataTable = [];

    const columns = [
        { name: 'Date/ Time', selector: (row) => row.groupCode, sortable: true, width: '200px' },
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Receipt Number', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category2', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category3', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Unit Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Order Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Amt.', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Net Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Refund Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Deposit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cash', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cash Receipt', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Credit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'CK', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Custom Payment 2', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Custom Payment 3', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'User Payment Extend', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Alipay', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Wechat', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'QR payment', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Electronic money', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_BY_RECEIPT_DETAIL.Visiblename}>
            {/* form */}

            <div className={cx('grid-cols-3 gap-x-5 lg:grid', 'max-lg:flex max-lg:flex-wrap')}>
                <div className={cx('flex items-center gap-1')}>
                    <Input label="Sales Date" boldLabel type="date" />
                    ~
                    <Input type="date" />
                </div>
                <Input
                    label="Store Name"
                    boldLabel
                    className={cx('w-[300px] max-lg:w-[300px]')}
                    dropDown
                    listOptions={listStore}
                    seletedValue={store}
                    setSeletedValue={setStore}
                />
                <Input label="Receipt No" boldLabel className={cx('w-[300px]')} />
                <Input label="Category" boldLabel className={cx('w-[300px]')} dropDown listOptions={listCategory} />
                <Input label="Category2" boldLabel className={cx('w-[300px]')} dropDown listOptions={listCategory} />
                <Input label="Category3" boldLabel className={cx('w-[300px]')} dropDown listOptions={listCategory} />
                <Input label="Item Name" boldLabel className={cx('w-[300px]')} />
                <Input label="Barcode" boldLabel className={cx('w-[300px]')} />
                <div className={cx('flex items-center gap-1')}>
                    <Input label="Payment Amount" boldLabel widthInput="120px" />
                    ~
                    <Input widthInput="120px" />
                </div>
            </div>
            <div className={cx('mb-4 flex justify-end gap-4')}>
                <Button blue>Search</Button>
                <Button teal>Export Excel</Button>
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

export default SalesByReceiptDetail;
