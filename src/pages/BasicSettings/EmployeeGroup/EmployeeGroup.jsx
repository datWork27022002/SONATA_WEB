import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EmployeeGroup.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function EmployeeGroup() {
    const listHide = ['YES', 'NO'];
    const listPayBasic = ['Time Pay'];
    const listPOSSecurityLevel = ['Cashier', 'Manager', 'Owner', 'Server'];
    const listCloudSecurityLevel = ['Level 0', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];
    const [selectedRow, setSelectedRow] = useState(null);
    const [hideList, setHideList] = useState(listHide[0]);
    const [payBasic, setPayBasic] = useState(listPayBasic[0]);
    const [POSSecurityLeve, setPOSSecurityLevel] = useState(listPOSSecurityLevel[0]);
    const [cloudSecurityLevel, setCloudSecurityLevel] = useState(listCloudSecurityLevel[0]);

    const dataTable = [
        { employeeGroup: 'Cashier', cloudSecurityLevel: '', payBasic: 'Time pay' },
        { employeeGroup: 'Manager', cloudSecurityLevel: '', payBasic: 'Time pay' },
        { employeeGroup: 'Owner', cloudSecurityLevel: '', payBasic: 'Time pay' },
        { employeeGroup: 'Server', cloudSecurityLevel: '', payBasic: 'Time pay' },
    ];

    const columns = [
        { name: 'Employee Group', selector: (row) => row.employeeGroup, sortable: true },
        { name: 'Cloud Security Level', selector: (row) => row.cloudSecurityLevel, sortable: true },
        { name: 'Pay Basic', selector: (row) => row.payBasic, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.EMPLOYEE_GROUP.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[45%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <TableCustom
                        className={cx('mb-4 h-[500px]')}
                        columns={columns}
                        data={data}
                        showHideList
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <Input label="Employee Group" required />
                    <Input
                        label="Pay Basic"
                        required
                        dropDown
                        listOptions={listPayBasic}
                        seletedValue={payBasic}
                        setSeletedValue={setPayBasic}
                    />
                    <Input label="Pay Rate" required />
                    <Input
                        label="POS Security Level"
                        dropDown
                        listOptions={listPOSSecurityLevel}
                        seletedValue={POSSecurityLeve}
                        setSeletedValue={setPOSSecurityLevel}
                    />
                    <Input
                        label="Cloud Security Level"
                        dropDown
                        listOptions={listCloudSecurityLevel}
                        seletedValue={cloudSecurityLevel}
                        setSeletedValue={setCloudSecurityLevel}
                    />

                    <Input
                        label="Hide"
                        radioInput
                        listOptions={listHide}
                        seletedValue={hideList}
                        setSeletedValue={setHideList}
                    />
                    <div className={cx('mt-8 flex')}>
                        <Button orange className={cx('mr-4')}>
                            New
                        </Button>
                        <Button teal>Save</Button>
                    </div>
                </div>
                <div className={cx('flex-1')}></div>
            </div>
        </TitleLayout>
    );
}

export default EmployeeGroup;
