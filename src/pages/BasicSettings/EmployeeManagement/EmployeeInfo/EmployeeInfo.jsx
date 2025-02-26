import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './EmployeeInfo.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import Button from '~/components/Button';
import FormGeneral from './FormGeneral';
import FormSecurity from './FormSecurity';
import FormPayRoll from './FormPayRoll';
import FormSchedule from './FormSchedule';
import FormDescription from './FormDescription';
import FormCommission from './FormCommission';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function EmployeeInfo() {
    const listTypeForm = ['General', 'Security', 'Payroll', 'Schedule', 'Description', 'Commission'];

    const [selectedRowEmployInfo, setSelectedRowEmployInfo] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

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

    const dataTableEmployInfo = [{ firstName: 'tesois111', fullName: 'tesois111', mobile: '23435246346' }];

    const columnsEmployInfo = [
        { name: 'First Name', selector: (row) => row.firstName, sortable: true },
        { name: 'Full Name', selector: (row) => row.fullName, sortable: true },
        { name: 'Mobile', selector: (row) => row.mobile, sortable: true },
    ];

    const dataEmployInfo = dataTableEmployInfo.map((value, index) => ({ ...value, id: index + 1 }));

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.EMPLOYEE_INFO.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[40%] pr-4 max-lg:!w-full max-lg:pr-0 lg:mr-4')}>
                    <div className={cx('mb-4')}>
                        <TableCustom
                            className={cx('mb-4 h-[200px]')}
                            columns={columns}
                            data={data}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                        />
                    </div>
                    <div className={cx('')}>
                        <TableCustom
                            className={cx('h-[300px]')}
                            columns={columnsEmployInfo}
                            data={dataEmployInfo}
                            showHideList
                            selectedRow={selectedRowEmployInfo}
                            setSelectedRow={setSelectedRowEmployInfo}
                        />
                    </div>
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <div className={cx('flex flex-wrap')}>
                        {listTypeForm.map((value, index) => (
                            <Button
                                key={index}
                                onClick={() => changeTypeForm(value)}
                                className={cx(value === typeForm && '!bg-primary-color !text-text-color-secondnary')}
                            >
                                {value}
                            </Button>
                        ))}
                    </div>
                    <FormGeneral className={cx(typeForm === 'General' ? 'opacity-100' : 'mt-0 h-0 opacity-0')} />
                    <FormSecurity className={cx(typeForm === 'Security' ? 'opacity-100' : 'mt-0 h-0 opacity-0')} />
                    <FormPayRoll className={cx(typeForm === 'Payroll' ? 'opacity-100' : 'mt-0 h-0 opacity-0')} />
                    <FormSchedule className={cx(typeForm === 'Schedule' ? 'opacity-100' : 'mt-0 h-0 opacity-0')} />
                    <FormDescription
                        className={cx(typeForm === 'Description' ? 'opacity-100' : 'mt-0 h-0 opacity-0')}
                    />
                    <FormCommission className={cx(typeForm === 'Commission' ? 'opacity-100' : 'mt-0 h-0 opacity-0')} />
                </div>
            </div>
        </TitleLayout>
    );
}

export default EmployeeInfo;
