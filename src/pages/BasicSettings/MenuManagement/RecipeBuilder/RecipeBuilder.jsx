import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import styles from './RecipeBuilder.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import IconCustom from '~/components/IconCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listCategory = ['All', 'AnCategorized'];

function RecipeBuilder() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRowInventoryItem, setSelectedRowInventoryItem] = useState(null);
    const [category, setCategory] = useState(listCategory[0]);

    const dataTable = [];
    const columns = [
        { name: 'Inventory Item', selector: (row) => row.groupCode, sortable: true, width: '250px' },
        { name: 'Unit', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Conv Rate', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Input Costs', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Meno', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableInventoryItem = [];
    const columnsInventoryItem = [{ name: 'Inventory Item', selector: (row) => row.groupCode, sortable: true }];
    const dataInventoryItem = dataTableInventoryItem.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.RECIPE_BUILDER.Visiblename}>
            <div className={cx('flex justify-between')}>
                {/* Table  */}
                <div className={cx('w-[65%]')}>
                    {/* form */}
                    <div className={cx('mb-2 flex flex-wrap items-center justify-between')}>
                        <div className={cx('flex flex-wrap items-center gap-5')}>
                            <Input
                                label="Menu"
                                paddingLabel
                                boldLabel
                                widthInput={'150px'}
                                iconRightInput={FaSearch}
                                required
                            />
                            <span className={cx('font-semibold')}>* You need to save </span>
                        </div>
                        <Button green>Save</Button>
                    </div>
                    {/* table */}
                    <div className={cx('overflow-auto')}>
                        <TableCustom
                            className={cx('h-[480px]')}
                            columns={columns}
                            data={data}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            selectableRows
                        />
                    </div>
                </div>
                {/* Switch */}
                <div className={cx('flex flex-col items-center justify-center gap-6')}>
                    <IconCustom
                        icon={FaChevronLeft}
                        size={30}
                        className={cx('cursor-pointer hover:text-primary-color')}
                    />
                    <IconCustom
                        icon={FaChevronRight}
                        size={30}
                        className={cx('cursor-pointer hover:text-primary-color')}
                    />
                </div>
                {/* Table Inventory Item */}
                <div className={cx('w-[30%]')}>
                    {/* form */}
                    <div className={cx('mb-2 flex items-center justify-end')}>
                        <Input
                            label="Category"
                            paddingLabel
                            boldLabel
                            dropDown
                            listOptions={listCategory}
                            seletedValue={category}
                            setSeletedValue={setCategory}
                        />
                    </div>
                    {/* table */}
                    <div className={cx('overflow-auto')}>
                        <TableCustom
                            className={cx('h-[480px]')}
                            columns={columnsInventoryItem}
                            data={dataInventoryItem}
                            selectedRow={selectedRowInventoryItem}
                            setSelectedRow={setSelectedRowInventoryItem}
                            selectableRows
                        />
                    </div>
                </div>
            </div>
        </TitleLayout>
    );
}

export default RecipeBuilder;
