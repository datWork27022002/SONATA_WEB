import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ToppingSettings.module.scss';
import TitleLayout from '~/components/TitleLayout';
import { CardModifier, CardPagination } from './Card';
import ApplyTemplateMenu from './ApplyTemplateMenu';
import ModalModifierGroup from './ModalModifierGroup';
import ModalModifierItem from './ModalModifierItem';
import ModalTemplate from './ModalTemplate';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listModifierTemplate = ['add'];
const listModifierGroup = ['Thêm bia'];
const listModifierItem = [];

function ToppingSettings() {
    const [modifierTemplate, setModifierTemplat] = useState(listModifierTemplate[0]);
    const [isModalModifierGroup, setIsModalModifierGroup] = useState(false);
    const [isModalModifierItem, setIsModalModifierItem] = useState(false);
    const [isModalTemplate, setIsModalTemplate] = useState(false);

    while (listModifierGroup.length < 4) {
        // Thêm chuỗi rỗng vào cuối list
        listModifierGroup.push('');
    }

    while (listModifierItem.length < 10) {
        // Thêm chuỗi rỗng vào cuối list
        listModifierItem.push('');
    }

    const openModalModifierGroup = () => {
        setIsModalModifierGroup(true);
    };

    const openModalModifierItem = () => {
        setIsModalModifierItem(true);
    };

    const openModalTemplate = () => {
        setIsModalTemplate(true);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.TOPPING_SETTINGS.Visiblename}>
            <div className={cx('flex')}>
                <div>
                    <div className={cx('my-4 flex items-center gap-8')}>
                        <Input
                            label="Modifier Template"
                            paddingLabel
                            dropDown
                            listOptions={listModifierTemplate}
                            seletedValue={modifierTemplate}
                            setSeletedValue={setModifierTemplat}
                        />
                        <Button red onClick={openModalTemplate}>
                            Add/Delete
                        </Button>
                        <Button green>Save</Button>
                    </div>
                    {/* Modifier Group */}
                    <div className={cx('flex')}>
                        {listModifierGroup.map((value, index) => (
                            <CardModifier
                                title={value}
                                key={index}
                                className={cx('h-[65px] w-[135px] bg-yellow-100')}
                                handeClickItem={openModalModifierGroup}
                            />
                        ))}
                        {/* paginantion */}
                        <CardPagination className={cx('h-[65px] w-[135px]')} />
                    </div>
                    {/* Modifier Item */}
                    <div className={cx('my-4 flex')}>
                        <div className={cx('grid grid-cols-5')}>
                            {listModifierItem.map((value, index) => (
                                <CardModifier
                                    title={value}
                                    key={index}
                                    className={cx('h-[140px] w-[135px]')}
                                    handeClickItem={openModalModifierItem}
                                />
                            ))}
                            <CardPagination className={cx('col-start-5 row-start-3 h-[65px] w-[135px]')} />
                            <div className={cx('col-start-1 col-end-5 row-start-3 rounded bg-gray-100')}></div>
                        </div>

                        <div className={cx('relative ml-4 flex flex-col')}>
                            <div className={cx('flex-1 rounded border border-solid border-gray-300')}></div>
                            <CardPagination className={cx('h-[65px] w-[135px]')} />
                            <span className={cx('absolute left-[40%] top-[-30px] text-sm font-semibold')}>ADD</span>
                        </div>
                    </div>
                    {/* Apply Template Menu */}
                    <ApplyTemplateMenu />
                </div>
            </div>
            <ModalModifierGroup isModal={isModalModifierGroup} setIsModal={setIsModalModifierGroup} />
            <ModalModifierItem isModal={isModalModifierItem} setIsModal={setIsModalModifierItem} />
            <ModalTemplate isModal={isModalTemplate} setIsModal={setIsModalTemplate} />
        </TitleLayout>
    );
}

export default ToppingSettings;
