import React from 'react';
import classNames from 'classnames/bind';

import CardMenu from './CardMenu';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind();

function MainOptions({ listMenuOptions }) {
    return (
        <div className={cx('flex flex-col items-center')}>
            <div className={cx('px-2 py-2 text-sm font-semibold')}>Disable(X)</div>
            <div className={cx('grid grid-cols-3 grid-rows-8 bg-[#f3f3f3]')}>
                {listMenuOptions.map((value, index) => (
                    <CardMenu
                        key={index}
                        id={value.disable === false ? value.id : 0}
                        className={cx(
                            'h-[50px] w-[122px] bg-neutral-500 text-white',
                            value.disable === true && 'cursor-default opacity-50',
                            value.disable === false && 'hover:!bg-neutral-700',
                        )}
                        disabled={value.disable}
                    >
                        <div className={cx('flex w-full items-center justify-between px-1 text-left')}>
                            {value?.name}
                            <IconCustom icon={value?.icon} size={30} />
                        </div>
                    </CardMenu>
                ))}
            </div>
        </div>
    );
}

export default MainOptions;
