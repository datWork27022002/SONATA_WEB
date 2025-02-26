import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';

const cx = classNames.bind();

const listCommissionType = ['Disable(X)', 'Item '];

function FormItemPolicy({ typeForm }) {
    const [commissionType, setCommissionType] = useState(listCommissionType[0]);
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap overflow-hidden transition-all duration-300',
                typeForm === 'Item Policy' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input
                    label="Commission Type"
                    dropDown
                    listOptions={listCommissionType}
                    seletedValue={commissionType}
                    setSeletedValue={setCommissionType}
                />
                <Input label="Fixed Amount" disabled placeholder="0,00" />
                <Input label="Rate(%)" disabled placeholder="0,00" />
                <Input label="Max. Amt." disabled placeholder="0,00" />
            </div>
            <div className={cx('flex-1 max-sm:hidden')}></div>
        </div>
    );
}

export default FormItemPolicy;
