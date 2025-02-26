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

const listClassification = ['Menu', 'Inventory Item'];

const listHide = ['Normal', 'Hide', 'All'];

function ItemManagementByStrore() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [category, setCategory] = useState(listCategory[0]);
    const [classification, setClassification] = useState(listClassification[0]);
    const [hide, setHide] = useState(listHide[0]);
    const [store, setStore] = useState(listStore[0]);

    const dataTable = [];

    const columns = [
        { name: 'Item Name', selector: (row) => row.groupCode, sortable: true, width: '200px' },
        { name: 'BarCode', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Price', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Inventory Status', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Point Redemption', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tax Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Apply Discount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Account Code', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Ext Code', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'HQ gratutity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gratutity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Kitchen Alias', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item setting criteria', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Whether categories are hidden', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Hide menus and items', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cooking Time(Seconds)', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.ITEM_MANAGEMENT_BY_STRORE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('grid-cols-3 gap-x-5 lg:grid', 'max-lg:flex max-lg:flex-wrap')}>
                    <Input
                        label="Store"
                        paddingLabel
                        boldLabel
                        className={cx('w-[220px] max-lg:w-[300px]')}
                        dropDown
                        listOptions={listStore}
                        seletedValue={store}
                        setSeletedValue={setStore}
                    />
                    <Input
                        label="Category"
                        paddingLabel
                        boldLabel
                        className={cx('w-[300px]')}
                        dropDown
                        listOptions={listCategory}
                        seletedValue={category}
                        setSeletedValue={setCategory}
                    />
                    <Input
                        label="Classification"
                        paddingLabel
                        boldLabel
                        className={cx('w-[300px]')}
                        dropDown
                        listOptions={listClassification}
                        seletedValue={classification}
                        setSeletedValue={setClassification}
                    />
                    <Input label="Item" paddingLabel boldLabel className={cx('w-[220px] max-lg:w-[300px]')} />
                    <Input label="Barcode" paddingLabel boldLabel className={cx('w-[300px]')} />
                    <Input
                        label="View hidden data"
                        paddingLabel
                        boldLabel
                        className={cx('w-[300px]')}
                        radioInput
                        listOptions={listHide}
                        seletedValue={hide}
                        setSeletedValue={setHide}
                    />
                </div>

                <div className={cx('flex items-end gap-4')}>
                    <Button orange>Clear</Button>
                    <Button blue>Search</Button>
                    <Button green>Save</Button>
                    <Button teal>Export Down</Button>
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

export default ItemManagementByStrore;
