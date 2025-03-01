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

const listSortOrder = ['QTY Descending', 'QTY Ascending'];

const listRowSize = ['All', '10', '20', '30'];

function SalesRanking() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [store, setStore] = useState(listStore[0]);

    const dataTable = [];

    const columns = [
        { name: 'Rank', selector: (row) => row.groupCode, sortable: true, width: '200px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Sales Qty', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Percent(%)', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_RANKING.Visiblename}>
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
                <Input label="Category" boldLabel className={cx('w-[300px]')} dropDown listOptions={listCategory} />
                <Input label="Item Name" boldLabel className={cx('w-[300px]')} />
                <Input label="Barcode" boldLabel className={cx('w-[300px]')} />
                <Input
                    label="Sort Order"
                    boldLabel
                    className={cx('w-[350px]')}
                    radioInput
                    listOptions={listSortOrder}
                />
                <Input label="Row Size" boldLabel className={cx('w-[300px]')} dropDown listOptions={listRowSize} />
                <div className={cx('col-start-3 flex items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
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

export default SalesRanking;
