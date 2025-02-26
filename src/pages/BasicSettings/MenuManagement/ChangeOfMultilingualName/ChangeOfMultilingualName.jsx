import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './ChangeOfMultilingualName.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

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

const listClassification = [
    'Item',
    'Item Note',
    'Menu Group',
    'Menu-Board Group, Topping Group,Topping Name',
    'Set Menu Group',
    'Call Messeage',
];

function ChangeOfMultilingualName() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [category, setCategory] = useState(listCategory[0]);
    const [classification, setClassification] = useState(listClassification[0]);

    const dataTable = [];

    const columns = [
        { name: 'Classification', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Item Classification', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Code', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Korean', selector: (row) => row.groupName, sortable: true },
        { name: 'English', selector: (row) => row.groupName, sortable: true },
        { name: 'Chinese', selector: (row) => row.groupName, sortable: true },
        { name: 'Japanese', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CHANGE_OF_MULTILINGUAL_NAME.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-x-5')}>
                    <Input
                        label="Classification"
                        paddingLabel
                        boldLabel
                        dropDown
                        listOptions={listClassification}
                        seletedValue={classification}
                        setSeletedValue={setClassification}
                    />
                    <Input
                        label="Category"
                        paddingLabel
                        boldLabel
                        widthInput={'200px'}
                        dropDown
                        listOptions={listCategory}
                        seletedValue={category}
                        setSeletedValue={setCategory}
                    />
                    <Input label="Item" paddingLabel boldLabel widthInput={'150px'} iconRightInput={FaSearch} />
                    <Input label="Barcode" paddingLabel boldLabel widthInput={'150px'} />
                </div>
                <div className={cx('flex w-full items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button green>Save</Button>
                    <Button teal>Export Excel</Button>
                    <Button lime>Excel Upload</Button>
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

export default ChangeOfMultilingualName;
