import React from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];
const listCustomerGroup = ['Vip', 'Gold', 'General'];
const listGender = ['Male', 'Female'];

function FormGeneral({ typeForm }) {
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap gap-6 overflow-hidden transition-all duration-300',
                typeForm === 'General' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1')}>
                <Input label="Customer Group" disabled dropDown listOptions={listCustomerGroup} />
                <Input label="First Name" />
                <Input label="Last Name" />
                <Input label="Nick Name" />
                <Input label="Fhone Number" />
                <Input label="Mobile" />
                <Input label="Gender" radioInput listOptions={listGender} />
                <Input label="Membership Card" />
                <Input label="Address" />
                <Input label="City/State" />
            </div>
            <div className={cx('flex-1')}>
                <Input label="ZIP Code" />
                <Input label="Hide" radioInput listOptions={listYesNo} />
            </div>
        </div>
    );
}

export default FormGeneral;
