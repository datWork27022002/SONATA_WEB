import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './InventoryItemSearch.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listCategory = ['All', 'UnCategorized'];
const listVendor = ['All', 'TPBank'];

function InventoryItemSearch() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [category, setCategory] = useState(listCategory[0]);
    const [vendor, setVendor] = useState(listVendor[0]);

    const dataTable = [];

    const columns = [
        { name: 'Supplier', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Warehose Management', selector: (row) => row.groupName, sortable: true, width: '250px' },
        { name: 'Purchase Unit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Supplier', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Order Unit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Order Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Description', selector: (row) => row.groupName, sortable: true },
        { name: 'Extended Description', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.INVENTORY_ITEM_SEARCH.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input
                        label="Category"
                        paddingLabel
                        boldLabel
                        widthInput={'150px'}
                        dropDown
                        listOptions={listCategory}
                        seletedValue={category}
                        setSeletedValue={setCategory}
                    />
                    <Input
                        label="Ventor"
                        paddingLabel
                        boldLabel
                        widthInput={'150px'}
                        dropDown
                        listOptions={listVendor}
                        seletedValue={vendor}
                        setSeletedValue={setVendor}
                    />
                    <Input label="Inventory Item" paddingLabel boldLabel widthInput={'150px'} />
                    <Input label="Barcode" paddingLabel boldLabel widthInput={'150px'} />
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

export default InventoryItemSearch;
