import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function CustomerSalesTotal() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Membership No.', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Customer Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Gross', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Add Point', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Redeemed Point', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Remaining Point', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Count Visited', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Email', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CUSTOMER_SALES_TOTAL.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <Input label="Membership No." paddingLabel boldLabel />
                    <Input label="Customer Name" paddingLabel boldLabel />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[450px]')}
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

export default CustomerSalesTotal;
