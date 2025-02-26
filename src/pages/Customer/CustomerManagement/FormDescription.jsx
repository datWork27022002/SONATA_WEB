import React from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';

const cx = classNames.bind();

function FormDescription({ typeForm }) {
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap overflow-hidden transition-all duration-300',
                typeForm === 'Description' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input label="Description" textarea />
                <Input label="Extended Description" textarea />
            </div>
            <div className={cx('flex-1 max-sm:hidden')}></div>
        </div>
    );
}

export default FormDescription;
