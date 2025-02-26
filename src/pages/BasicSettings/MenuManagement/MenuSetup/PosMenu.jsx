import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { IoFileTray } from 'react-icons/io5';
import { FaTrashCan } from 'react-icons/fa6';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

import styles from './MenuSetup.module.scss';
import CardMenu from './CardMenu';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

const listPosMenu = [
    { name: 'Chocolate Scone초코 스콘', id: 1, price: '60.000.000' },
    { name: 'Plain Scone플레인 스콘', id: 2, price: '50.000.000' },
    { name: 'Salted Bagel소금빵 베이글', id: 3, price: '55.000.000' },
    { name: 'Cream Cheese Garlic Bread8쪽마늘빵', id: 4, price: '40.000.000' },
    { name: 'Moist Garlic Bread촉촉 마늘빵', id: 5, price: '66.000.000' },
    { name: 'Croissant크로와상', id: 6, price: '65.000.000' },
];

function PosMenu() {
    const [menuGroupSelecter, setPosMenuSelecter] = useState(-1);
    const [listMenu, setListMenu] = useState(listPosMenu);
    const [activeId, setActiveId] = useState(null);
    const handelClickPosMenu = (index) => {
        setPosMenuSelecter(index);
    };

    while (listPosMenu.length < 24) {
        // Thêm chuỗi rỗng vào cuối list
        listPosMenu.push({ id: listPosMenu.length + 1 });
    }

    const MenuCardAdd = ({ value }) => (
        <CardMenu className={cx('!bg-[#555555] text-gray-300')} id={value?.id}>
            <IconCustom icon={IoMdAdd} size={24} />
        </CardMenu>
    );

    const RenderGroupMenuCard = (index, value) => {
        if (!value?.name) return <MenuCardAdd key={index} value={value} />;
        return (
            <CardMenu
                key={index}
                check={menuGroupSelecter === index}
                edit
                onClick={() => handelClickPosMenu(index)}
                id={value.id}
            >
                {value?.name}
                <br />
                {value?.price}
            </CardMenu>
        );
    };

    const handelDragStart = ({ active }) => {
        setActiveId(active.id);
    };

    const handleDragEnd = ({ active, over }) => {
        if (active?.id !== over?.id) {
            setListMenu((listMenu) => {
                const newItems = [...listMenu];
                const itemsId = newItems.map((value) => value.id);
                const activeIndex = itemsId.indexOf(active?.id);
                const overIndex = itemsId.indexOf(over?.id);
                if (activeIndex < 1 || overIndex < 1) return newItems;
                [newItems[activeIndex], newItems[overIndex]] = [newItems[overIndex], newItems[activeIndex]];

                return newItems;
            });
        }
    };

    return (
        <div className={cx('flex flex-col items-center')}>
            <div className={cx('mt-4 overflow-hidden rounded border border-solid border-gray-400')}>
                <div className={cx('rounded bg-primary-color px-2 py-2 text-[13px] text-text-color-secondnary')}>
                    {'POS Menu'}
                </div>
                <div
                    className={cx(
                        'grid grid-rows-6 bg-[#f3f3f3] md:grid-cols-5',
                        'max-md:grid-cols-4',
                        'max-sm:grid-cols-3',
                    )}
                >
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                        onDragStart={handelDragStart}
                    >
                        {listMenu.map((value, index) => {
                            return RenderGroupMenuCard(index, value);
                        })}
                        <DragOverlay>
                            {activeId ? (
                                listMenu[activeId - 1]?.name ? (
                                    <CardMenu edit className={cx('z-40')}>
                                        {listMenu[activeId - 1]?.name}
                                    </CardMenu>
                                ) : (
                                    <MenuCardAdd />
                                )
                            ) : null}
                        </DragOverlay>
                    </DndContext>

                    {/* pagination */}
                    <CardMenu
                        className={cx(
                            '!bg-primary-color text-2xl text-text-color-secondnary',
                            //'col-start-5 row-start-5',
                            'flex justify-between px-2',
                        )}
                    >
                        <IconCustom icon={FaChevronLeft} />
                        <span>1</span>
                        <IconCustom icon={FaChevronRight} />
                    </CardMenu>

                    {/* Relocation tray */}
                    <CardMenu
                        className={cx(
                            'flex flex-col justify-center !bg-[#999] font-semibold text-text-color-secondnary',
                            //'col-start-1 row-start-6',
                        )}
                    >
                        <IconCustom icon={IoFileTray} size={20} />
                        <span className={cx('mt-1')}>Relocation tray</span>
                    </CardMenu>

                    {/* Delete */}
                    <CardMenu
                        className={cx(
                            'flex flex-col justify-center !bg-[#999] font-semibold text-text-color-secondnary',
                            //'col-start-2 row-start-6',
                        )}
                    >
                        <IconCustom icon={FaTrashCan} size={20} />
                        <span className={cx('mt-1')}> Delete</span>
                    </CardMenu>

                    <div
                        className={cx(
                            'flex flex-wrap items-center justify-center !bg-[#fff] font-semibold max-md:my-3',
                            'col-start-3 col-end-6 row-start-6',
                            'max-md:col-start-1 max-md:col-end-5 max-md:row-start-8',
                            'max-sm:col-start-1 max-sm:col-end-4 max-sm:row-start-11',
                        )}
                    >
                        <div className={cx('flex w-[50%] items-center justify-center')}>
                            <span className={cx('rounded bg-orange-500 px-1')}>S</span> Set Menu
                        </div>
                        <div className={cx('flex w-[50%] items-center justify-center')}>
                            <span className={cx('rounded bg-purple-500 px-1')}>O</span> Open Price Item
                        </div>
                        <div className={cx('flex w-[50%] items-center justify-center')}>
                            <span className={cx('rounded bg-blue-500 px-1')}>M</span> Modifier Item
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PosMenu;
