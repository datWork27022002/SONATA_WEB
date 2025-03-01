import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './SubMenu.module.scss';
import TitleLayout from '~/components/TitleLayout';
import Button from '~/components/Button';
import TableMenu from './TableMenu';
import TableInventoryItem from './TableInventoryItem';
import Input from '~/components/Input';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function SubMenu() {
    const listTypeForm = ['Menu', 'Inventory Item'];

    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SUB_MENU.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[40%] pr-4 max-lg:!w-full max-lg:pr-0 max-sm:mb-8 lg:mr-4')}>
                    <div className={cx('flex flex-wrap')}>
                        {listTypeForm.map((value, index) => (
                            <Button
                                key={index}
                                onClick={() => changeTypeForm(value)}
                                className={cx(value === typeForm && '!bg-primary-color !text-text-color-secondnary')}
                            >
                                {value}
                            </Button>
                        ))}
                    </div>

                    <TableMenu typeForm={typeForm} />
                    <TableInventoryItem typeForm={typeForm} />

                    <div className={cx('mt-2 flex justify-end')}>
                        <Button red>+Add Level</Button>
                        <Button green>Save</Button>
                    </div>
                </div>
                {/* form */}
                <div className={cx('flex flex-1')}>
                    <div className={cx('flex-1')}>
                        <div className={cx('mb-4 rounded bg-primary-color p-2 text-[13px] text-text-color-secondnary')}>
                            Sub Menu Setting Board
                        </div>

                        <Input label="Sub Menu" iconRightInput={FaSearch} />
                        <Input label="Price" disabled />
                    </div>

                    <div className={cx('flex-1 max-sm:hidden')}></div>
                </div>
            </div>
        </TitleLayout>
    );
}

export default SubMenu;
