import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import styles from './MainMenuSetting.module.scss';
import TitleLayout from '~/components/TitleLayout';
import IconCustom from '~/components/IconCustom';
import Input from '~/components/Input';
import MainSettings, { MenuCardAdd } from './MainSettings';
import MainOptions from './MainOptions';
import FormMain from './FormMain';
import CardMenu from './CardMenu';
import config from '~/config';
import { listFuntionSetting } from './constant';

const cx = classNames.bind(styles);

const listPOSID = ['POS 1', 'POS 11', 'POS 12', 'KIM TEST', 'POS 14'];

function MainMenuSetting() {
    const [POSID, setPOSID] = useState(listPOSID[0]);
    const [listMenuSetting, setListMenuSettings] = useState(
        listFuntionSetting.filter((value) => value.disable === true),
    );
    const [listMenuOptions, setListMenuOptions] = useState(listFuntionSetting);
    const [activeId, setActiveId] = useState(null);

    const handelDragStart = ({ active }) => {
        setActiveId(active.id);
        console.log('active: ', active);
    };

    const handleDragEnd = ({ active, over }) => {
        if (active?.id !== over?.id) {
            const newItems = [...listMenuSetting];
            const newItemsMainOptions = [...listMenuOptions];
            const itemsId = newItems.map((value) => value.id);
            const itemsIdMainOptions = newItemsMainOptions.map((value) => value.id);
            const activeIndexMainOptions = itemsIdMainOptions.indexOf(active?.id);
            const overIndexMainOptions = itemsIdMainOptions.indexOf(over?.id);
            const activeIndex = itemsId.indexOf(active?.id);
            const overIndex = itemsId.indexOf(over?.id);
            console.log('activeIndex: ', activeIndex, ', overIndex: ', overIndex);
            if (activeIndex >= 0 && overIndex >= 0) {
                [newItems[activeIndex], newItems[overIndex]] = [newItems[overIndex], newItems[activeIndex]];
                setListMenuSettings(newItems);
                return;
            }
            if (activeIndex < 0 && overIndex >= 0) {
                newItemsMainOptions[activeIndexMainOptions].disable = true;
                newItemsMainOptions[overIndexMainOptions].disable = false;
                newItems[overIndex] = newItemsMainOptions[activeIndexMainOptions];
                setListMenuSettings(newItems);
                setListMenuOptions(newItemsMainOptions);
                return;
            }

            if (activeIndex >= 0 && overIndex < 0 && overIndexMainOptions >= 0) {
                newItems.splice(activeIndex, 1);
                newItemsMainOptions[activeIndexMainOptions].disable = false;
                setListMenuSettings(newItems);
                setListMenuOptions(newItemsMainOptions);
                return;
            }
        }
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.MAIN_MENU_SETTING.Visiblename}>
            <div className={cx('flex flex-col sm:items-center')}>
                <Input
                    label="POS ID"
                    paddingLabel
                    boldLabel
                    widthInput={'200px'}
                    dropDown
                    listOptions={listPOSID}
                    seletedValue={POSID}
                    setSeletedValue={setPOSID}
                />
                <div className={cx('flex gap-x-4')}>
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                        onDragStart={handelDragStart}
                    >
                        <MainSettings listMenuSetting={listMenuSetting} />
                        {/* Switch */}
                        <div className={cx('flex flex-col items-center justify-center gap-6 text-primary-color')}>
                            <IconCustom icon={FaArrowAltCircleLeft} size={30} />
                            <IconCustom icon={FaArrowAltCircleRight} size={30} />
                        </div>
                        <MainOptions listMenuOptions={listMenuOptions} />
                        {/* drag and drop images */}
                        <DragOverlay>
                            {activeId ? (
                                listFuntionSetting[activeId - 1]?.name ? (
                                    <CardMenu
                                        className={cx(
                                            'z-40 h-[50px] w-[122px] justify-between bg-[#999] px-1 text-white',
                                        )}
                                    >
                                        {listFuntionSetting[activeId - 1]?.name}
                                        <IconCustom icon={listFuntionSetting[activeId - 1]?.icon} size={30} />
                                    </CardMenu>
                                ) : (
                                    <MenuCardAdd />
                                )
                            ) : null}
                        </DragOverlay>
                    </DndContext>
                </div>
                {/* Form Setup */}
                <FormMain />
            </div>
        </TitleLayout>
    );
}

export default MainMenuSetting;
