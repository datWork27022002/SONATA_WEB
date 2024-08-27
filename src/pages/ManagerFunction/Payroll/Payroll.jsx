import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listPaymentType = ['Time Pay'];

function Payroll() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Employee', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Time pay', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Start Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'End Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Pay Type', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Pay Rate', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'CT.Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'T.Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Brk Time', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Reg Time', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Total Pay', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.PAYROLL.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Search Date" paddingLabel boldLabel required type="date" />
                        ~
                        <Input type="date" />
                    </div>
                    <Input label="Employee Search" paddingLabel boldLabel iconRightInput={FaSearch} />
                    <Input label="Payment Type" paddingLabel boldLabel dropDown listOptions={listPaymentType} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[500px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default Payroll;
