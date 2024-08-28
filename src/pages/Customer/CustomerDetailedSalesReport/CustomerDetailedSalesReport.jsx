import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function CustomerDetailedSalesReport() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Membership No.', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Customer Name', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Ordered Time', selector: (row) => row.groupName, sortable: true, width: '200px' },
        { name: 'Receipt No.', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Menu', selector: (row) => row.groupName, sortable: true, width: '200px' },
        { name: 'Qty', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Gross', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Email', selector: (row) => row.groupName, sortable: true, width: '150px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CUSTOMER_DETAILED_SALES_REPORT.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('grid grid-cols-3 gap-x-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" boldLabel dropDown listOptions={listStoreName} />
                    <Input label="Customer Name" boldLabel />
                    <Input label="Receipt No." boldLabel />
                    <Input label="Membership No." boldLabel />
                    <Input label="Email" boldLabel />
                </div>
                <div className={cx('flex flex-1 items-end justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
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
                    showHideList
                />
            </div>
        </TitleLayout>
    );
}

export default CustomerDetailedSalesReport;
