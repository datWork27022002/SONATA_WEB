import React from 'react';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';

import Input from '~/components/Input';

// eslint-disable-next-line no-unused-vars
const cx = classNames;

const listVendorGroup = ['All', 'VendorGroup1', 'VendorGroup2'];
const listHide = ['YES', 'NO'];

function FormGeneral({ typeForm }) {
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap gap-6 overflow-hidden transition-all duration-300',
                typeForm === 'General' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 border-solid border-r-gray-300 pr-4 lg:border-r')}>
                <Input label="Vendor Group" dropDown listOptions={listVendorGroup} required />
                <Input label="Vendor Name" required />
                <Input label="Owner Name" />
                <Input label="Phone Number" />
                <Input label="Mobile" />
                <Input label="E-mail" />
                <Input label="Address" />
                <Input label="City/State" />
                <Input label="ZIP Code" iconRightInput={FaSearch} />
            </div>
            <div className={cx('flex-1 lg:ml-4')}>
                <Input label="Send SMS" radioInput listOptions={listHide} />
                <Input label="Send DM" radioInput listOptions={listHide} />
                <Input label="Send E-mail" radioInput listOptions={listHide} />
                <Input label="Hide" radioInput listOptions={listHide} />
            </div>
        </div>
    );
}

export default FormGeneral;
