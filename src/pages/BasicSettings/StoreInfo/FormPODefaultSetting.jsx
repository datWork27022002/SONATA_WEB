import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './StoreInfo.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listDefautWarehouse = ['DefaultWareHose', 'CustomWareHose'];

function FormPODefaultSetting({ className }) {
    const [wareHouse, setWareHouse] = useState('');

    return (
        <div
            className={cx('mt-2 flex origin-top-left overflow-hidden transition-all duration-300', {
                [className]: className,
            })}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input label="Person in Charge" />
                <Input label="Mobile" />
                <Input
                    label="Default Delivery Warehouse"
                    dropDown
                    listOptions={listDefautWarehouse}
                    seletedValue={wareHouse}
                    setSeletedValue={setWareHouse}
                />
                <Button className={cx('mt-8')} teal>
                    Save
                </Button>
            </div>
            <div className={cx('lg:flex-1')}></div>
        </div>
    );
}

export default FormPODefaultSetting;
