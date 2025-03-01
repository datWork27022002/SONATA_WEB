import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './CategoryManager.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listType = ['Menu ', 'Inventory Item '];
const listShow = ['Show All', 'Hide', 'Unhide'];

function CategoryManager() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [type, setType] = useState(listType[0]);
    const [show, setShow] = useState(listShow[0]);

    const dataTable = [];

    const columns = [
        { name: 'Category 1', selector: (row) => row.groupCode, sortable: true, width: '300px' },
        { name: 'Seq No', selector: (row) => row.groupName, sortable: true },
        { name: 'Hide', selector: (row) => row.groupName, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CATEGORY_MANAGER.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap items-center')}>
                    {/* filter type */}
                    <div className={cx('flex')}>
                        {listType.map((value, index) => (
                            <Button
                                key={index}
                                noBorderRadius
                                className={cx(
                                    '!border border-solid border-primary-color bg-background-color-secondnary',
                                    type === value && '!bg-primary-color',
                                )}
                                onClick={() => setType(value)}
                            >
                                {value}
                            </Button>
                        ))}
                    </div>
                    {/* filter show */}
                    <div className={cx('mx-8 flex')}>
                        {listShow.map((value, index) => (
                            <Button
                                key={index}
                                noBorderRadius
                                className={cx(
                                    '!border border-solid border-primary-color bg-background-color-secondnary',
                                    show === value && '!bg-primary-color',
                                )}
                                onClick={() => setShow(value)}
                            >
                                {value}
                            </Button>
                        ))}
                    </div>
                    <p className={cx('text-[13px] font-semibold')}>
                        Based on icon, add, delete and save functions are applied.
                    </p>
                </div>

                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button red>Add</Button>
                    <Button green>Save</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('w-[500px] overflow-auto')}>
                <TableCustom
                    className={cx('h-[480px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default CategoryManager;
