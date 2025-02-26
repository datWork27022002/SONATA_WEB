import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listHide = ['YES', 'NO'];
const listCashier = ['YES', 'NO'];
const listEmployeeGroup = ['Cashier', 'Manager', 'Owner', 'Server'];

function FormGeneral({ className }) {
    const [employeeGroup, setEmployeeGroup] = useState(listEmployeeGroup[0]);
    const [hide, setHide] = useState(listHide[0]);
    const [cashier, setCashier] = useState(listCashier[0]);
    return (
        <div
            className={cx('mt-2 flex flex-wrap overflow-hidden transition-all duration-300', {
                [className]: className,
            })}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input
                    label="Employee Group"
                    dropDown
                    required
                    listOptions={listEmployeeGroup}
                    seletedValue={employeeGroup}
                    setSeletedValue={setEmployeeGroup}
                />
                <Input label="Name" required />
                <Input label="Phone Number" />
                <Input label="Mobile" />
                <Input label="ZIP Code" />
                <Input label="Address" />
                <Input label="Additional" />
                <Input label="Employee Card No" />
                <Input
                    label="Cashier"
                    radioInput
                    listOptions={listCashier}
                    seletedValue={cashier}
                    setSeletedValue={setCashier}
                />
                <Input label="Hide" radioInput listOptions={listHide} seletedValue={hide} setSeletedValue={setHide} />
                <div className={cx('mt-4 flex')}>
                    <Button orange className={cx('mr-4')}>
                        New
                    </Button>
                    <Button teal>Save</Button>
                </div>
            </div>
            <div className={cx('flex-1')}></div>
        </div>
    );
}

export default FormGeneral;
