import React from 'react';
import classNames from 'classnames/bind';

import CardMenu from './CardMenu';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind();

function MainOptions({ listMenuOptions }) {
    return (
        <div className={cx('flex flex-col items-center')}>
            <div className={cx('px-2 py-2 text-sm font-semibold')}>Disable(X)</div>
            <div className={cx('grid grid-cols-3 bg-[#f3f3f3]')}>
                {listMenuOptions.map((value, index) => (
                    <CardMenu
                        key={index}
                        id={value.disable === false ? value.id : 0}
                        className={cx(
                            'flex flex-col justify-between bg-[#434551] py-2 text-white',
                            value.disable === true && 'cursor-default opacity-50',
                            value.disable === false && 'hover:!bg-neutral-700',
                        )}
                        disabled={value.disable}
                    >
                        <IconCustom icon={value?.icon} size={30} />
                        {value?.name}
                    </CardMenu>
                ))}
            </div>
        </div>
    );
}

export default MainOptions;
