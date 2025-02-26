import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './PosMenuBoard.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listStoreName = ['Hyojung'];
const listType = ['All', 'POS', 'KIOSK'];

function PosMenuBoard() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [storeName, setStoreName] = useState(listStoreName[0]);
    const [type, setType] = useState(listType[0]);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'POS Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS Dine-in', selector: (row) => row.groupName, sortable: true },
        { name: 'POS Take Out', selector: (row) => row.groupName, sortable: true },
        { name: 'POS Delivery', selector: (row) => row.groupName, sortable: true },
        { name: 'KIOSK Take Out', selector: (row) => row.groupName, sortable: true },
        { name: 'KIOSK Take In', selector: (row) => row.groupName, sortable: true },
        { name: 'Function', selector: (row) => row.groupName, sortable: true, width: '150px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.POS_MENU_BOARD.Visiblename}>
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
                        label="Menu-Board Type"
                        paddingLabel
                        boldLabel
                        widthInput={'150px'}
                        dropDown
                        listOptions={listType}
                        seletedValue={type}
                        setSeletedValue={setType}
                    />
                    <Input label="Menu-Board " paddingLabel boldLabel widthInput={'150px'} />
                </div>
                <div className={cx('flex items-center gap-4')}>
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

export default PosMenuBoard;
