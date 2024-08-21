import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TableCustom from '~/components/TableCustom';
import Button from '~/components/Button';
import Input from '~/components/Input';
const cx = classNames.bind();

function TableInventoryItem({ typeForm }) {
    const [selectedRowMenu, setSelectedRowMenu] = useState(null);
    const [selectedRowCategory, setSelectedRowCategory] = useState(null);

    const dataTableCategory = [
        { category: ' 돼지고기 Thit Heo TD ' },
        { category: ' 돼지고기 세트 Thit Heo SET TD ' },
        { category: ' 사이드메뉴 ' },
        { category: ' 소고기 세트 Thit Bo SET TD ' },
        { category: '  점심특선메뉴 Thuc don dac biet bua trua TD  ' },
        { category: '  them topping  ' },
        { category: '  MEMBERSHIP  ' },
        { category: '  음료 Do uong TD  ' },
    ];
    const columnsCategory = [{ name: 'Category', selector: (row) => row.category, sortable: true }];
    const dataCategory = dataTableCategory.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableMenu = [
        { menu: 'TriangleFruitCake과일생크림조각케익' },
        { menu: '망고요거트케익Banhkemxoaisuachua' },
        { menu: '바스크치즈케이크Banhphomaichay' },
        { menu: 'mangoCreamCheeseTart' },
        { menu: 'Banhkemsuachuavietquat' },
        { menu: 'GrapefruitCreamCheeseTart' },
        { menu: '티라미슈Tiramisu' },
    ];
    const columnsMenu = [{ name: 'Menu', selector: (row) => row.menu, sortable: true }];
    const dataMenu = dataTableMenu.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <div
            className={cx(
                'mt-2 overflow-hidden transition-all duration-300',
                typeForm === 'Inventory Item' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('mb-4')}>
                <TableCustom
                    className={cx('mb-4 h-[200px]')}
                    columns={columnsCategory}
                    data={dataCategory}
                    selectedRow={selectedRowCategory}
                    setSelectedRow={setSelectedRowCategory}
                />
            </div>
            <div className={cx('')}>
                <div className={cx('flex items-center justify-end')}>
                    <Input className={cx('mr-2')} />
                    <Button blue>Search</Button>
                </div>
                <TableCustom
                    className={cx('h-[200px]')}
                    columns={columnsMenu}
                    data={dataMenu}
                    selectableRows
                    selectedRow={selectedRowMenu}
                    setSelectedRow={setSelectedRowMenu}
                />
            </div>
        </div>
    );
}

export default TableInventoryItem;
