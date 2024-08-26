import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { IoMdAdd } from 'react-icons/io';

import CardMenu from './CardMenu';
import IconCustom from '~/components/IconCustom';
import ModalMenuSettingsOption from './ModalMenuSettingsOption';

const cx = classNames.bind();

const arrGrid = Array.from({ length: 24 }, (_, index) => index + 1);

export const MenuCardAdd = ({ value }) => (
    <CardMenu className={cx('h-[50px] w-[122px] !bg-[#555555] text-gray-300')} id={value?.id}>
        <IconCustom icon={IoMdAdd} size={24} />
    </CardMenu>
);

function MainSettings({ listMenuSetting }) {
    const [isModalMenuSettingOption, setIsModalMenuSettingOption] = useState(false);

    const openModalMenuSettingsOption = () => {
        console.log('hello');
        setIsModalMenuSettingOption(true);
    };

    return (
        <div className={cx('flex flex-col items-center')}>
            <div className={cx('px-2 py-2 text-sm font-semibold')}>Use</div>
            <div className={cx('grid grid-cols-3 grid-rows-8 bg-[#f3f3f3]')}>
                {arrGrid.map((_, index) => {
                    const value = listMenuSetting[index];
                    if (value)
                        return (
                            <CardMenu
                                edit
                                key={index}
                                id={value?.id}
                                className={cx('relative h-[50px] w-[122px] bg-blue-600 text-white')}
                                handleEdit={openModalMenuSettingsOption}
                            >
                                <span className={cx('absolute left-1 top-5 text-left')}>{value?.name}</span>
                                <IconCustom
                                    icon={value?.icon}
                                    size={30}
                                    className={cx('absolute bottom-[10%] right-1')}
                                />
                            </CardMenu>
                        );
                    else return <MenuCardAdd key={index} />;
                })}
            </div>
            <ModalMenuSettingsOption isModal={isModalMenuSettingOption} setIsModal={setIsModalMenuSettingOption} />
        </div>
    );
}

export default MainSettings;
