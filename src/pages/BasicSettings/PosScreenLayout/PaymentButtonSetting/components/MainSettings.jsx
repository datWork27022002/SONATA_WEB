import React from 'react';
import classNames from 'classnames/bind';
import { IoMdAdd } from 'react-icons/io';

import CardMenu from './CardMenu';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind();

const arrGrid = Array.from({ length: 12 }, (_, index) => index + 1);

export const MenuCardAdd = ({ value }) => (
    <CardMenu className={cx('!bg-[#555555] text-gray-300')} id={value?.id}>
        <IconCustom icon={IoMdAdd} size={24} />
    </CardMenu>
);

function MainSettings({ listMenuSetting }) {
    const handleRemoveItem = () => {};

    return (
        <div className={cx('flex flex-col items-center')}>
            <div className={cx('px-2 py-2 text-sm font-semibold')}>Use</div>
            <div className={cx('grid grid-cols-6')}>
                {arrGrid.map((_, index) => {
                    const value = listMenuSetting[index];
                    if (value)
                        return (
                            <CardMenu
                                remove
                                key={index}
                                id={value?.id}
                                className={cx('flex flex-col justify-between bg-[#434551] py-2 text-white')}
                                handleDelete={handleRemoveItem}
                            >
                                <IconCustom icon={value?.icon} size={24} />
                                <span>{value?.name}</span>
                            </CardMenu>
                        );
                    else return <MenuCardAdd key={index} />;
                })}
            </div>
        </div>
    );
}

export default MainSettings;
