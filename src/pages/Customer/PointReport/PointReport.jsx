import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function PointReport() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Total Transaction', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Earn Total', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Use Total', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Subtraction(Earn-Use)', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'Member Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Transaction date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Add Point', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Redeemed Point', selector: (row) => row.groupName, sortable: true },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.POINT_REPORT.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <Input label="Fixed Date" boldLabel type="date" />
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('flex flex-wrap justify-between')}>
                <div className={cx('w-[47%] overflow-auto')}>
                    <TableCustom
                        className={cx('h-[500px]')}
                        columns={columns}
                        data={data}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                <div className={cx('w-[47%] overflow-auto')}>
                    <TableCustom className={cx('h-[500px]')} columns={columns2} data={data2} />
                </div>
            </div>
        </TitleLayout>
    );
}

export default PointReport;
