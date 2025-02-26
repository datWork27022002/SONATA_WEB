import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listCommission = ['YES', 'NO'];

function FormCommission({ className }) {
    const [commission, setCommission] = useState(listCommission[0]);
    return (
        <div
            className={cx('mt-2 flex flex-wrap overflow-hidden transition-all duration-300', {
                [className]: className,
            })}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input
                    label="Employee Group"
                    radioInput
                    listOptions={listCommission}
                    seletedValue={commission}
                    setSeletedValue={setCommission}
                />

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

export default FormCommission;
