import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

const listEmployee = ['1', '2', '3'];

const listEmployeeGroup = ['1', '2', '3'];

function EmployeeSalesAnalysis() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'No', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Employee Group', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Employee Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'W.Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'C.Time', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Number of Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Guest', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Percent(%)', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Guest per hour', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Average CK', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Sales Per Hours', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'T Avg Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'By Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'By Category', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.EMPLOYEE_SALES_ANALYSIS.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <Input label="Employee" paddingLabel boldLabel dropDown listOptions={listEmployee} />
                    <Input label="Employee Group" paddingLabel boldLabel dropDown listOptions={listEmployeeGroup} />
                </div>
                <div className={cx('flex w-full items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                    <Button blue>By Item</Button>
                    <Button blue>By Category</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[460px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default EmployeeSalesAnalysis;
