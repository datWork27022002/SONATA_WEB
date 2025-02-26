import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import IconCustom from '~/components/IconCustom';
import Input from '~/components/Input';
import MainSettings, { MenuCardAdd } from './components/MainSettings';
import MainOptions from './components/MainOptions';
import FormMain from './components/FormMain';
import CardMenu from './components/CardMenu';
import config from '~/config';
import { listFuntionSetting } from './components/constant';

const cx = classNames.bind();

const listPOSID = ['POS 1', 'POS 11', 'POS 12', 'KIM TEST', 'POS 14'];

function KioskFunctionSetting() {
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
        <TitleLayout title={config.nameMap.itemLevel3.KIOSK_FUNCTION_SETTING.Visiblename}>
            <div className={cx('flex flex-col sm:items-center')}>
                <div>
                    <Input
                        label="POS ID"
                        paddingLabel
                        boldLabel
                        widthInput={'100px'}
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
                                                'z-40 flex flex-col justify-between bg-[#434551] py-2 text-white opacity-80',
                                            )}
                                        >
                                            <IconCustom icon={listFuntionSetting[activeId - 1]?.icon} size={30} />
                                            {listFuntionSetting[activeId - 1]?.name}
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
            </div>
        </TitleLayout>
    );
}

export default KioskFunctionSetting;
