import React from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import Input from '~/components/Input';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];

function FormAdditon({ typeForm }) {
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap overflow-hidden transition-all duration-300',
                typeForm === 'Additon' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input label="Send SMS" radioInput listOptions={listYesNo} />
                <Input label="Anniversary" type="date" />
                <Input label="Send DM" radioInput listOptions={listYesNo} />
                <Input label="E-mail" />
                <Input label="Send E-mail" radioInput listOptions={listYesNo} />
                <Input label="Birthday" type="date" />
                <Input label="Lunar Calendar" radioInput listOptions={listYesNo} />
                <Input label="Employee in-charge" iconRightInput={FaSearch} />
                <Input label="Use Primary Address" radioInput listOptions={listYesNo} />
            </div>
            <div className={cx('flex-1 max-sm:hidden')}></div>
        </div>
    );
}

export default FormAdditon;
