import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './RecipeSearch.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function RecipeSearch() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '60px' },
        { name: 'Item Name', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Inventory Item', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true, width: '140px' },
        { name: 'Unit', selector: (row) => row.groupName, sortable: true, width: '140px' },
        { name: 'Conv Rate', selector: (row) => row.groupName, sortable: true, width: '140px' },
        { name: 'Input costs', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Memo', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.RECIPE_SEARCH.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap')}>
                    <Input label="Item" paddingLabel boldLabel iconRightInput={FaSearch} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
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

export default RecipeSearch;
