import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listStore = ['hyojung'];

const listClassification = ['1', '2', '3'];

const listTransaction = ['1', '2', '3'];

function CashReceiptApprovalCancelationReport() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date/ Time', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Receipt Number', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Classification', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Transaction Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Count', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Approval Number', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Approval Date', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CASH_RECEIPT_APPROVAL_CANCELATION_REPORT.Visiblename}>
            {/* form */}

            <div className={cx('grid-cols-3 gap-x-5 lg:grid', 'max-lg:flex max-lg:flex-wrap')}>
                <div className={cx('flex items-center gap-1')}>
                    <Input label="Date" boldLabel type="date" />
                    ~
                    <Input type="date" />
                </div>
                <Input
                    label="Store Name"
                    boldLabel
                    className={cx('w-[300px] max-lg:w-[300px]')}
                    dropDown
                    listOptions={listStore}
                />
                <Input
                    label="Classification"
                    boldLabel
                    className={cx('w-[300px]')}
                    dropDown
                    listOptions={listClassification}
                />
                <Input
                    label="Transaction Type"
                    boldLabel
                    className={cx('w-[300px]')}
                    dropDown
                    listOptions={listTransaction}
                />
                <Input label="Approval Number" boldLabel className={cx('w-[300px]')} />
                <div className={cx('mb-4 flex items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                    <Button red>CCTV</Button>
                </div>
            </div>

            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[440px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default CashReceiptApprovalCancelationReport;
