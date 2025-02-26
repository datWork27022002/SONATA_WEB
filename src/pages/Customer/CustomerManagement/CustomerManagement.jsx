import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import Button from '~/components/Button';
import FormGeneral from './FormGeneral';
import FormAdditon from './FormAdditon';
import FormDescription from './FormDescription';
import FormPoint from './FormPoint';
import Input from '~/components/Input';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listTypeForm = ['General', 'Additon', 'Description', 'Point'];
const listTypeSearch = ['Customer name', 'Phone number', 'Mobile', 'Address', 'Card No'];
const listDiplayCount = ['100', '300', '500', '1000'];

function ItemRecipeManager() {
    const [selectedRowDetail, setSelectedRowDetail] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const dataTable = [{ customerGroup: 'General' }, { customerGroup: 'Gold' }, { customerGroup: 'Vip' }];
    const columns = [{ name: 'Customer Group', selector: (row) => row.customerGroup, sortable: true }];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableDetail = [];

    const columnsDetail = [
        { name: 'Name', selector: (row) => row.item, sortable: true, width: '150px' },
        { name: 'Mobile', selector: (row) => row.unitPrice, sortable: true, width: '120px' },
        { name: 'Membership Card', selector: (row) => row.dateModified, sortable: true },
    ];

    const dataDetail = dataTableDetail.map((value, index) => ({ ...value, id: index + 1 }));

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.ITEM_RECEIPT_MANAGER.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[40%] pr-4 max-lg:!w-full max-lg:pr-0 lg:mr-4')}>
                    <div className={cx('mb-2 flex items-center justify-end gap-4')}>
                        <Input dropDown listOptions={listTypeSearch} />
                        <Input />
                        <Button blue>Search</Button>
                    </div>
                    <div className={cx('mb-4')}>
                        <TableCustom
                            className={cx('mb-4 h-[200px]')}
                            columns={columns}
                            data={data}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                        />
                    </div>
                    <div className={cx('')}>
                        <div className={cx('flex items-center justify-end gap-4')}>
                            <Input dropDown listOptions={listDiplayCount} />
                            <span className={cx('font-semibold')}>Display Count</span>
                        </div>
                        <TableCustom
                            className={cx('h-[300px]')}
                            columns={columnsDetail}
                            data={dataDetail}
                            showHideList
                            selectedRow={selectedRowDetail}
                            setSelectedRow={setSelectedRowDetail}
                        />
                    </div>
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <div className={cx('my-4 flex justify-end gap-4', typeForm === 'Point' && 'invisible')}>
                        <Button red>Excel Upload</Button>
                        <Button orange>New</Button>
                        <Button teal>Save</Button>
                    </div>
                    <div className={cx('flex flex-wrap')}>
                        {listTypeForm.map((value, index) => (
                            <Button
                                key={index}
                                onClick={() => changeTypeForm(value)}
                                className={cx(value === typeForm && '!bg-primary-color !text-text-color-secondnary')}
                                noBorderRadius
                            >
                                {value}
                            </Button>
                        ))}
                    </div>
                    <FormGeneral typeForm={typeForm} />
                    <FormAdditon typeForm={typeForm} />
                    <FormDescription typeForm={typeForm} />
                    <FormPoint typeForm={typeForm} />
                </div>
            </div>
        </TitleLayout>
    );
}

export default ItemRecipeManager;
