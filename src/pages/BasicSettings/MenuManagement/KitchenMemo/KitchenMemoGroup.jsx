import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';
import TableCustom from '~/components/TableCustom';

const cx = classNames.bind();

const listHide = ['YES', 'NO'];

function KitchenMemoGroup({ typeForm }) {
    const [hideList, setHideList] = useState(listHide[0]);
    const [selectedRowMenu, setSelectedRowMenu] = useState(null);

    const dataTableMenu = [{ kitchenMemoGroup: 'Memo1' }];
    const columnsMenu = [{ name: 'Kitchen Memo Group', selector: (row) => row.kitchenMemoGroup, sortable: true }];
    const dataMenu = dataTableMenu.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <div
            className={cx(
                'mt-2 overflow-hidden transition-all duration-300',
                typeForm === 'Kitchen Memo Group' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[40%] pr-4 max-lg:!w-full max-lg:pr-0')}>
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
                    <Input label="Kitchen Memo Group" required />
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

export default KitchenMemoGroup;
