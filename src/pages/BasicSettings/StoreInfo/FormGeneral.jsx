import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './StoreInfo.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listGroupManagement = ['All', 'HQ'];
const listStoreType = ['Direct', 'Franchise'];
const listHide = ['YES', 'NO'];
const listOptionsGpsServices = ['ON', 'OFF'];

function FormGeneral({ className }) {
    const [groupManagement, setGroupManagement] = useState('');
    const [storeType, setStoreType] = useState('');
    const [hide, setHide] = useState(listHide[0]);
    const [gpsService, setGpsService] = useState(listOptionsGpsServices[0]);

    return (
        <div className={cx('mt-2 flex overflow-hidden transition-all duration-300', { [className]: className })}>
            <div className={cx('flex-1 border-r-[1px] border-solid border-r-gray-300 pr-4')}>
                <Input
                    label="Group Management"
                    dropDown
                    listOptions={listGroupManagement}
                    seletedValue={groupManagement}
                    setSeletedValue={setGroupManagement}
                />
                <Input
                    label="Store Type"
                    dropDown
                    listOptions={listStoreType}
                    seletedValue={storeType}
                    setSeletedValue={setStoreType}
                />
                <Input label="Store Name" required />
                <Input label="Store Name Alias" />
                <Input label="Store Code" disabled />
                <Input label="Business registration number" disabled />
                <Input label="CEO Name" />
                <Input label="Phone" required />
                <Input label="Fax" />
                <Input label="E-mail" />
            </div>
            <div className={cx('ml-4 flex-1')}>
                <Input label="Website" />
                <Input label="ZIP Code" iconRightInput={FaSearch} />
                <Input label="Address" />
                <Input label="Additional" />
                <Input
                    label="GPS Service"
                    radioInput
                    listOptions={listOptionsGpsServices}
                    seletedValue={gpsService}
                    setSeletedValue={setGpsService}
                />
                <Input label="Hide" radioInput listOptions={listHide} seletedValue={hide} setSeletedValue={setHide} />
                <Input label="Ext Code" />
                <Input label="Ext Server" />
                <Button className={cx('mt-8')} teal>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default FormGeneral;
