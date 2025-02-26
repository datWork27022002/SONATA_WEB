import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function SalesAmountByStore() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'No of transaction', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Price', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Tax', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Sales Amount', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SALES_AMOUNT_BY_STORE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Sales Date" paddingLabel boldLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
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

export default SalesAmountByStore;
