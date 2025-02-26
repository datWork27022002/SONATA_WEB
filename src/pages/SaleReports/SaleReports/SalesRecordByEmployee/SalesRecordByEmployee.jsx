import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];
const listEmployee = ['All', '1', '2', '3'];

function SalesRecordByEmployee() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Employee', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'No of Transaction', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Person', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gross Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Transaction D/C', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Net Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Tip', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gratuity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cash', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Cash Receipt', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Card', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Check', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gift Card', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'House Account', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Point', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'User payment', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Others', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_RECORD_BY_EMPLOYEE.Visiblename}>
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
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
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

export default SalesRecordByEmployee;
