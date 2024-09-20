import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listSearchType = ['All', '1', '2'];

function ReceivableReport() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Supplier/ Store', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Previous Carryover', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Previous Balance', selector: (row) => row.groupCode, sortable: true, width: '150px' },
        { name: 'Previous Payment', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Current Carryover', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Current Balance', selector: (row) => row.groupCode, sortable: true, width: '150px' },
        { name: 'Current Payment', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Receiveable Total', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.RECEIVABLE_REPORT.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input label="Date" paddingLabel boldLabel type="date" />
                    <div className={cx('flex items-center gap-2')}>
                        <Input label="Search Type" paddingLabel boldLabel dropDown listOptions={listSearchType} />
                        <Input paddingLabel boldLabel iconRightInput={FaSearch} />
                    </div>
                    <div className={cx('flex items-center gap-1 text-[12px] font-semibold')}>
                        <input type="checkbox" />
                        <span> Show list w/ balance only</span>
                    </div>
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

export default ReceivableReport;
