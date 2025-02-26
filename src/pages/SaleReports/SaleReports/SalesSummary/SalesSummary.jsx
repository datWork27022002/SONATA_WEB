import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];
const listRadio = ['Total', 'Store'];

function SalesSummary() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRow2, setSelectedRow2] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Date', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Guest', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Average Amount per Persion', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'Date', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Guest', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Average Amount per Persion', selector: (row) => row.groupName, sortable: true },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_SUMMARY.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>

                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <Input label="Receipt Number" paddingLabel boldLabel />
                    <Input label="" radioInput listOptions={listRadio} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('flex justify-between')}>
                <div className={cx('w-[48%] overflow-auto')}>
                    <TableCustom
                        className={cx('h-[500px]')}
                        columns={columns}
                        data={data}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                <div className={cx('w-[48%] overflow-auto')}>
                    <TableCustom
                        className={cx('h-[500px]')}
                        columns={columns2}
                        data={data2}
                        selectedRow={selectedRow2}
                        setSelectedRow={setSelectedRow2}
                    />
                </div>
            </div>
        </TitleLayout>
    );
}

export default SalesSummary;
