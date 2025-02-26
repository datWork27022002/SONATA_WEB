import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function SupplierLedger() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Bill Date', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Related Bill', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Price', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Total', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Paid', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Balance', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SUPPLIER_LEDGER.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Bill Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>
                    <Input label="Search Type" paddingLabel boldLabel iconRightInput={FaSearch} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button lime>Export Excel</Button>
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

export default SupplierLedger;
