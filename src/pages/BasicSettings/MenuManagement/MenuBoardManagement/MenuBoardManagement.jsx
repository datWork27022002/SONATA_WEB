import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './MenuBoardManagement.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listStoreName = ['Hyojung'];
const listType = ['All', 'POS', 'KIOSK'];

function MenuBoardManagement() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [storeName, setStoreName] = useState(listStoreName[0]);
    const [type, setType] = useState(listType[0]);

    const dataTable = [];

    const columns = [
        { name: 'Management Store', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Type', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Menu-Board Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Group Area', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Item Area', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Recommend Resolution', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Memo', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Group Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Item Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Pos Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Function', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.MENU_BOARD_MANAGEMENT.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input
                        label="Store Name"
                        paddingLabel
                        boldLabel
                        widthInput={'150px'}
                        dropDown
                        listOptions={listStoreName}
                        seletedValue={storeName}
                        setSeletedValue={setStoreName}
                    />
                    <Input
                        label="Type"
                        paddingLabel
                        boldLabel
                        widthInput={'150px'}
                        dropDown
                        listOptions={listType}
                        seletedValue={type}
                        setSeletedValue={setType}
                    />
                    <Input label="Menu-Board Name" paddingLabel boldLabel widthInput={'150px'} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button red>New</Button>
                    <Button red>Copy</Button>
                    <Button blue>Search</Button>
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

export default MenuBoardManagement;
