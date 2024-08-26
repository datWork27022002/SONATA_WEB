import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listPayBasic = ['Timepay'];

function FormPayRoll({ className }) {
    const [payBasic, setPayBasic] = useState(listPayBasic[0]);
    return (
        <div
            className={cx('mt-2 flex flex-wrap overflow-hidden transition-all duration-300', {
                [className]: className,
            })}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input label="Pay Rate" />
                <Input
                    label="Pay Basic"
                    dropDown
                    listOptions={listPayBasic}
                    seletedValue={payBasic}
                    setSeletedValue={setPayBasic}
                />
                <Input label="Hired Date" type="date" />
                <Input label="Termination Date" type="date" />

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

export default FormPayRoll;
