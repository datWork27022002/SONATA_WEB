import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';
import TableCustom from '~/components/TableCustom';

const cx = classNames.bind();

const listHide = ['YES', 'NO'];
const listKitchenMemoGroup = ['Memo'];

function KitchenMemoList({ typeForm }) {
    const [hideList, setHideList] = useState(listHide[0]);
    const [kitchenMemoGroup, setKitchenMemoGroup] = useState(listHide[0]);
    const [selectedRowMenu, setSelectedRowMenu] = useState(null);

    const dataTableMenu = [{ kitchenMemo: 'khong co nuoc canh' }, { kitchenMemo: 'khong co hanh la' }];
    const columnsMenu = [{ name: 'Kitchen Memo', selector: (row) => row.kitchenMemo, sortable: true }];
    const dataMenu = dataTableMenu.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <div
            className={cx(
                'mt-2 overflow-hidden transition-all duration-300',
                typeForm === 'Kitchen Memo List' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[40%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <Input
                        label="Kitchen Memo Group"
                        dropDown
                        required
                        paddingLabel
                        listOptions={listKitchenMemoGroup}
                        seletedValue={kitchenMemoGroup}
                        setSeletedValue={setKitchenMemoGroup}
                        className={cx('w-[300px]')}
                    />
                    <TableCustom
                        className={cx('h-[400px]')}
                        columns={columnsMenu}
                        data={dataMenu}
                        showHideList
                        selectedRow={selectedRowMenu}
                        setSelectedRow={setSelectedRowMenu}
                    />
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <Input label="Kitchen Memo " required />
                    <Input
                        label="Hide"
                        radioInput
                        listOptions={listHide}
                        seletedValue={hideList}
                        setSeletedValue={setHideList}
                    />

                    <div className={cx('mt-8 flex gap-4')}>
                        <Button orange>New</Button>
                        <Button teal>Save</Button>
                    </div>
                </div>
                <div className={cx('flex-1')}></div>
            </div>
        </div>
    );
}

export default KitchenMemoList;
