import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import TableCustom from '~/components/TableCustom';
import Dropdown from '~/components/Input/DropDown';
import IconCustom from '~/components/IconCustom';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listMenuGroup = [
    'Bakery',
    'Croissant Coffee Combo',
    '돼지고기 Thit Heo TD',
    'Dining Risotto',
    'Dining Risotto1',
    '점심특선메뉴 Thuc don dac biet',
    'FRIENDSGOLF',
    'Dining Pasta',
];

function ApplyTemplateMenu() {
    const [visibeApplyTemplateMenu, setVisibeApplyTemplateMenu] = useState(false);

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRowNotAppliedMenu, setSelectedRowNotAppliedMenu] = useState(null);
    const [menuGroup, setMenuGroup] = useState(listMenuGroup[0]);

    const dataTableAppliedMenu = [{ category: '1000', menu: 'HQ' }];
    const dataAppliedMenu = dataTableAppliedMenu.map((value, index) => ({ ...value, id: index + 1 }));
    const columnsAppliedMenu = [
        { name: 'Category', selector: (row) => row.category, sortable: true },
        { name: 'Menu', selector: (row) => row.menu, sortable: true },
    ];

    const dataTableNotAppliedMenu = [{ category: '1000', menu: 'HQ' }];
    const dataNotAppliedMenu = dataTableNotAppliedMenu.map((value, index) => ({ ...value, id: index + 1 }));
    const columnsNotAppliedMenu = [
        { name: 'Category', selector: (row) => row.category, sortable: true },
        { name: 'Menu', selector: (row) => row.menu, sortable: true },
    ];

    const changeVisibeApplyTemplateMenu = () => {
        setVisibeApplyTemplateMenu(!visibeApplyTemplateMenu);
    };

    return (
        <div className={cx('my-4 rounded-lg bg-slate-100 p-2')}>
            <div className={cx('flex justify-between')}>
                <label className={cx('text-base font-semibold')}>
                    <span className={cx('text-green-700')}>Add</span> Apply Template Menu : 1ea
                </label>
                <div onClick={changeVisibeApplyTemplateMenu}>
                    <IconCustom
                        icon={visibeApplyTemplateMenu ? MdKeyboardArrowUp : MdKeyboardArrowDown}
                        size={30}
                        className={cx('cursor-pointer hover:text-primary-color')}
                    />
                </div>
            </div>

            <div
                className={cx(
                    'flex origin-top justify-between transition-all duration-300',
                    visibeApplyTemplateMenu ? 'scale-y-1 mt-8' : 'h-0 scale-y-0',
                )}
            >
                {/* Applied Menu */}
                <div className={cx('')}>
                    <div className={cx('mb-2 flex h-[30px] items-center text-sm font-semibold')}>Applied Menu</div>
                    <div className={cx('w-[380px] overflow-auto')}>
                        <TableCustom
                            className={cx('h-[300px]')}
                            columns={columnsAppliedMenu}
                            data={dataAppliedMenu}
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
                {/*Not Applied Menu */}
                <div className={cx('')}>
                    <div className={cx('mb-2 flex items-center')}>
                        <div className={cx('mr-2 text-sm font-semibold')}>Not applied Menu</div>
                        <Dropdown listOptions={listMenuGroup} seletedValue={menuGroup} setSeletedValue={setMenuGroup} />
                    </div>
                    <div className={cx('w-[380px] overflow-auto')}>
                        <TableCustom
                            className={cx('h-[300px]')}
                            columns={columnsNotAppliedMenu}
                            data={dataNotAppliedMenu}
                            selectedRow={selectedRowNotAppliedMenu}
                            setSelectedRow={setSelectedRowNotAppliedMenu}
                            selectableRows
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyTemplateMenu;
