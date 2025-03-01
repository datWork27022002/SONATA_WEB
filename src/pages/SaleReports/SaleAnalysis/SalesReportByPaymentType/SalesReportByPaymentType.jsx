import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function SalesReportByPaymentType() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRow2, setSelectedRow2] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Payment Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'No Of Transaction', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Payment Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Percents', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'No', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Sales date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Payment amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Percents', selector: (row) => row.groupName, sortable: true },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_REPORT_BY_PAYMENT_TYPE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
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
                    className={cx('h-[200px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
            <div className={cx('mt-4 overflow-auto')}>
                <TableCustom
                    className={cx('h-[250px]')}
                    columns={columns2}
                    data={data2}
                    selectedRow={selectedRow2}
                    setSelectedRow={setSelectedRow2}
                />
            </div>
        </TitleLayout>
    );
}

export default SalesReportByPaymentType;
