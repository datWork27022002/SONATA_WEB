import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listEmployeeGroup = ['Cashier', 'Manager', 'Owner', 'Server'];
const listStoreName = ['hyojung'];

function EmployeeList() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [employeeGroup, setEmployeeGroup] = useState(listEmployeeGroup[0]);
    const [storeName, setStoreName] = useState('');

    const dataTable = [{ groupCode: '1000', groupName: 'HQ' }];

    const columns = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '60px' },
        { name: 'EmployeeGroup', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Pay Basic', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Phone Number', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Secondnary Number', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'ZIP Code', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Address', selector: (row) => row.groupName, sortable: true, width: '250px' },
        { name: 'Additional', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Security Level', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Hired Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Termination Date', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Note', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.EMPLOYEE_LIST.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap')}>
                    <Input
                        label="Employee Group"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        widthInput={'150px'}
                        dropDown
                        listOptions={listEmployeeGroup}
                        seletedValue={employeeGroup}
                        setSeletedValue={setEmployeeGroup}
                    />
                    <Input label="Name" paddingLabel boldLabel className={cx('mr-5')} widthInput={'150px'} />
                    <Input
                        label="Store Name"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        widthInput={'150px'}
                        dropDown
                        listOptions={listStoreName}
                        seletedValue={storeName}
                        setSeletedValue={setStoreName}
                    />
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

export default EmployeeList;
