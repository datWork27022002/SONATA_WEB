import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function NoTaxSaleReport() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date Placed', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Table Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Menu Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Unit Price', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Item', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Menu Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Placed By', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Manager Approval', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Note', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.NO_TAX_SALE_REPORT.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
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

export default NoTaxSaleReport;
