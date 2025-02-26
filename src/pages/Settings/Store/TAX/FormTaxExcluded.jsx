import React from 'react';
import classNames from 'classnames';
import Switch from '~/components/Switch';

import Input from '~/components/Input';

const cx = classNames;

function FormTaxExcluded({ typeForm }) {
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap gap-6 overflow-hidden transition-all duration-300',
                typeForm === 'Tax Excluded' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 border-solid border-r-gray-300 pr-4 lg:border-r')}>
                <div className={cx('flex items-center gap-4')}>
                    <div className={'w-[72px]'}></div>
                    <div className={'w-[80px] text-center'}>Tax type</div>
                    <div className={'w-[80px] text-center'}>Tax Rate</div>
                    <div className={'w-[30px] text-center'}>Tip</div>
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Switch />
                    <label>Tax 1</label>
                    <Input widthInput={'80px'} />
                    <Input widthInput={'80px'} />
                    <Switch />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Switch />
                    <label>Tax 2</label>
                    <Input widthInput={'80px'} />
                    <Input widthInput={'80px'} />
                    <Switch />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Switch />
                    <label>Tax 3</label>
                    <Input widthInput={'80px'} />
                    <Input widthInput={'80px'} />
                    <Switch />
                </div>
            </div>
        </div>
    );
}

export default FormTaxExcluded;
