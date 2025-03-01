import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';

const cx = classNames.bind();

const listUseTimeService = ['YES', 'NO'];

function FormTimeService({ typeForm }) {
    const [useTimeService, setUseTimeService] = useState(listUseTimeService[0]);
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap overflow-hidden transition-all duration-300',
                typeForm === 'Time Service' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input
                    label="Use Time Service"
                    radioInput
                    listOptions={listUseTimeService}
                    seletedValue={useTimeService}
                    setSeletedValue={setUseTimeService}
                />
                <Input label="Default Time(Minutes)" disabled placeholder="0,00" />
                <Input label="Over Time(Minutes)" disabled placeholder="0,00" />
                <Input label="Excess Amount" disabled placeholder="0,00" />
            </div>
            <div className={cx('flex-1 max-sm:hidden')}></div>
        </div>
    );
}

export default FormTimeService;
