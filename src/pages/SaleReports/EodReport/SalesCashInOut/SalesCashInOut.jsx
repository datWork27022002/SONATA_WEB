import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const lisPOS = [
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

const listEmployee = ['All', '10', '20', '30'];

const listStatus = ['All', '10', '20', '30'];

function SalesCashInOut() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [store, setStore] = useState(listStore[0]);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '200px' },
        { name: 'Employee', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date/ Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Status', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Start Date/ Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'End Date/ Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cashier In Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Transaction', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Sales Amt', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cashier Out Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cash Different', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Note', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_CASH_IN_OUT.Visiblename}>
            {/* form */}

            <div className={cx('grid-cols-3 gap-x-5 lg:grid', 'max-lg:flex max-lg:flex-wrap')}>
                <div className={cx('flex items-center gap-1')}>
                    <Input label="Date" boldLabel type="date" />
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
                <Input label="POS" boldLabel className={cx('w-[300px]')} dropDown listOptions={lisPOS} />
                <Input label="Employee" boldLabel className={cx('w-[300px]')} dropDown listOptions={listEmployee} />
                <Input label="Status" boldLabel className={cx('w-[300px]')} dropDown listOptions={listStatus} />
                <div className={cx('flex items-center gap-2 text-[13px] font-semibold')}>
                    <input type="checkbox" />
                    <span>Cash Difference</span>
                </div>
            </div>
            <div className={cx('mb-2 flex items-center justify-end gap-4')}>
                <Button blue>Search</Button>
                <Button teal>Export Excel</Button>
                <Button red>Opent For Bussiness</Button>
                <Button red>Cash In/Out CC</Button>
            </div>

            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[400px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default SalesCashInOut;
