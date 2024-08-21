import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './MenuSearch.module.scss';
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

function MenuSearch() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [category, setCategory] = useState(listCategory[0]);

    const dataTable = [];

    const columns = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '60px' },
        { name: 'Store Code', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Category', selector: (row) => row.groupName, sortable: true },
        { name: 'Item', selector: (row) => row.groupName, sortable: true },
        { name: 'Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cost', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Barcode', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.MENU_SEARCH.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap')}>
                    <Input
                        label="Category"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        widthInput={'300px'}
                        dropDown
                        listOptions={listCategory}
                        seletedValue={category}
                        setSeletedValue={setCategory}
                    />
                    <Input
                        label="Item"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        widthInput={'150px'}
                        iconRightInput={FaSearch}
                    />
                    <Input label="Barcode" paddingLabel boldLabel className={cx('mr-5')} widthInput={'150px'} />
                </div>
                <div className={cx('flex items-center')}>
                    <Button className={cx('mr-4')} blue>
                        Search
                    </Button>
                    <Button teal>Export Excel</Button>
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

export default MenuSearch;
