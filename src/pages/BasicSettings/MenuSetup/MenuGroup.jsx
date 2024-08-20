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

const listMenuGroup = [
    { id: 1, name: 'Bakery' },
    { id: 2, name: 'Croissant Coffee Combo' },
    { id: 3, name: '돼지고기 Thit Heo TD' },
    { id: 4, name: 'Dining Risotto' },
    { id: 5, name: 'Dining Risotto1' },
    { id: 6, name: '점심특선메뉴 Thuc don dac biet' },
    { id: 7, name: 'FRIENDSGOLF' },
    { id: 8, name: 'Dining Pasta' },
];

function MenuGroup() {
    const [menuGroupSelecter, setMenuGroupSelecter] = useState(-1);
    const [listMenu, setListMenu] = useState(listMenuGroup);
    const [activeId, setActiveId] = useState(null);
    const handelClickMenuGroup = (index) => {
        setMenuGroupSelecter(index);
    };

    while (listMenuGroup.length < 9) {
        // Thêm chuỗi rỗng vào cuối list
        listMenuGroup.push({ id: listMenuGroup.length + 1 });
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
                onClick={() => handelClickMenuGroup(index)}
                id={value.id}
            >
                {value.name}
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
            <div className="overflow-hidden rounded border border-solid border-gray-400">
                <div className={cx('rounded bg-primary-color px-2 py-2 text-[13px] text-text-color-secondnary')}>
                    {'Menu Group [Headquater]'}
                </div>

                <div
                    className={cx(
                        'grid bg-[#f3f3f3] md:grid-cols-5 md:grid-rows-3',
                        'max-md:grid-cols-4',
                        'max-sm:grid-cols-3',
                    )}
                >
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                        onDragStart={handelDragStart}
                    >
                        {/* <SortableContext items={listMenu}> */}
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
                            // 'col-start-5 row-start-2',
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
                            // 'col-start-1 row-start-3',
                        )}
                    >
                        <IconCustom icon={IoFileTray} size={20} />
                        <span className={cx('mt-1')}>Relocation tray</span>
                    </CardMenu>

                    {/* Delete */}
                    <CardMenu
                        className={cx(
                            'flex flex-col justify-center !bg-[#999] font-semibold text-text-color-secondnary',
                            // 'col-start-2 row-start-3',
                        )}
                    >
                        <IconCustom icon={FaTrashCan} size={20} />
                        <span className={cx('mt-1')}> Delete</span>
                    </CardMenu>
                </div>
            </div>
        </div>
    );
}

export default MenuGroup;
