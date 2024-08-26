import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listSecurityLevel = ['Cashier', 'Manager', 'Owner', 'Server'];

function FormSecurity({ className }) {
    const [securityLevel, setSecurityLeveler] = useState(listSecurityLevel[0]);
    return (
        <div
            className={cx('mt-2 flex flex-wrap overflow-hidden transition-all duration-300', {
                [className]: className,
            })}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input
                    label="Security Level"
                    dropDown
                    listOptions={listSecurityLevel}
                    seletedValue={securityLevel}
                    setSeletedValue={setSecurityLeveler}
                />
                <Input label="User PW" />
                <Input label="Confirm" />

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

export default FormSecurity;
