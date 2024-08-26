import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import Input from '~/components/Input';

const cx = classNames.bind();

const listType = ['Warehouse', 'Customer', 'Direct deal'];

function FormPurchaseOrderInfo({ typeForm }) {
    const [type, setType] = useState(listType[0]);
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap overflow-hidden transition-all duration-300',
                typeForm === 'Purchase Order Info' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input label="Restock Level" disabled />
                <Input label="Type" dropDown listOptions={listType} seletedValue={type} setSeletedValue={setType} />

                <Input label="Supplier" iconRightInput={FaSearch} />
                <Input label="Min. Order Qty" disabled placeholder="0" />
                <Input label="Order Unit" disabled placeholder="0" />
                <Input label="Cost" disabled placeholder="0,00" />
                <Input label="Description" textarea />
                <Input label="Extended Description" textarea />
            </div>
            <div className={cx('flex-1 max-sm:hidden')}></div>
        </div>
    );
}

export default FormPurchaseOrderInfo;
