import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listStoreName = ['hyojung'];
const listPosType = ['Cashier POS', 'Order POS', 'Window Kiosk', 'Android POS', 'Android'];

function ListOfInformationByForce() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'POS Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'POS Type', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Device Number', selector: (row) => row.groupName, sortable: true, width: '200px' },
        { name: 'SW Version', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'VAN Company', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'VAN Version', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'UP Order Operation Status', selector: (row) => row.groupName, sortable: true, width: '200px' },
        { name: 'UP Order Battery Status', selector: (row) => row.groupName, sortable: true, width: '200px' },
        { name: 'Tablet Firmware Version', selector: (row) => row.groupName, sortable: true, width: '300px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.LIST_OF_INFORMATION_BY_FORCE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <Input label="POS Type" paddingLabel boldLabel dropDown listOptions={listPosType} />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[500px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default ListOfInformationByForce;
