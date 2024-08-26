import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { IoMdAdd } from 'react-icons/io';

import styles from './MenuSetup.module.scss';
import TableCustom from '~/components/TableCustom';
import Dropdown from '~/components/Input/DropDown';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const listMenuGroup = [
    'Bakery',
    'Croissant Coffee Combo',
    '돼지고기 Thit Heo TD',
    'Dining Risotto',
    'Dining Risotto',
    '점심특선메뉴 Thuc don dac biet',
    'FRIENDSGOLF',
    'Dining Pasta',
];

function MenuTable() {
    const [menuGroup, setMenuGroup] = useState('');

    const dataTable = [
        { name: 'Chocolate Scone초코 스콘', price: '60.000.000', barcode: '10164', add: '' },
        { name: 'Plain Scone플레인 스콘', price: '50.000.000', barcode: '101158', add: '' },
        { name: 'Salted Bagel소금빵 베이글', price: '55.000.000', barcode: '101159', add: '' },
        { name: 'Cream Cheese Garlic Bread8쪽마늘빵', price: '40.000.000', barcode: '101160', add: '' },
        { name: 'Moist Garlic Bread촉촉 마늘빵', price: '66.000.000', barcode: '101150', add: '' },
        { name: 'Croissant크로와상', price: '65.000.000', barcode: '101152', add: '' },
    ];
    const columns = [
        { name: 'Menu', selector: (row) => row.name, sortable: true, width: '200px' },
        { name: 'Barcode', selector: (row) => row.barcode, sortable: true },
        { name: 'Price', selector: (row) => row.price, sortable: true },
        { name: 'Add', selector: (row) => row.add, sortable: true, width: '60px', cell: (row) => <RenderCellAdd /> },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const RenderCellAdd = () => (
        <div className={cx('flex h-full w-full cursor-pointer items-center justify-center hover:text-primary-color')}>
            <IoMdAdd size={20} />
        </div>
    );

    return (
        <div className={cx('max-lg:my-4 max-lg:mt-8 max-lg:pr-0')}>
            <div className={cx('mb-4 flex max-sm:flex-col max-sm:items-start')}>
                <Dropdown
                    listOptions={listMenuGroup}
                    seletedValue={menuGroup}
                    setSeletedValue={setMenuGroup}
                    className={cx('w-48 max-sm:mb-2 max-sm:w-52')}
                />
                <input
                    placeholder="You can search Category Name or Item Name"
                    className={cx('flex-1 border border-solid border-slate-400 p-1 max-sm:w-56 sm:ml-4')}
                />
            </div>
            <div className={cx('mb-2 flex justify-end')}>
                <Button blue className={cx('mr-2')}>
                    Search
                </Button>
                <Button blue>Arrange Menu</Button>
            </div>
            <div className={cx('overflow-auto')}>
                <TableCustom className={cx('mb-4 h-[580px]')} columns={columns} data={data} />
            </div>
        </div>
    );
}

export default MenuTable;
