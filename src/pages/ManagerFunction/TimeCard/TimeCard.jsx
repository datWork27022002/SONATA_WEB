import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function TimeCard() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRow2, setSelectedRow2] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Employee', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Status', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Clock In', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Edited Clock In', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Clock Out', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Edited Clock Out', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Edit Note', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'T.Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Brk Time', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Real Time', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Edit Time', selector: (row) => row.groupName, sortable: true, width: '100px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '80px' },
        { name: 'Break In', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Break Out', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Edited Clock In', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Edited Clock Out', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Brk Time', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Brk Edited By', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Note', selector: (row) => row.groupName, sortable: true },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.TIME_CARD.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Search Date" paddingLabel boldLabel required type="date" />
                        ~
                        <Input type="date" />
                    </div>
                    <Input label="Employee Search" paddingLabel boldLabel iconRightInput={FaSearch} />
                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                </div>
                <div className={cx('flex flex-1 items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button orange>New</Button>
                    <Button red>Edit</Button>
                    <Button teal>Export Excel</Button>
                    <Button red>Clock InCCTV</Button>
                    <Button red>Clock OutCCTV</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[400px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>

            {/* form */}
            <div className={cx('mb-2 mt-8 flex flex-wrap items-center justify-end gap-4')}>
                <Button orange>New</Button>
                <Button red>Edit</Button>
                <Button teal>Export Excel</Button>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[300px]')}
                    columns={columns2}
                    data={data2}
                    selectedRow={selectedRow2}
                    setSelectedRow={setSelectedRow2}
                />
            </div>
        </TitleLayout>
    );
}

export default TimeCard;
