import React, { useState } from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';
import FormGeneral from './FormGeneral';
import FormDescription from './FormDescription';

// eslint-disable-next-line no-unused-vars
const cx = classNames;

function SupplierSetting() {
    const listTypeForm = ['General', 'Description'];

    const [selectedRow, setSelectedRow] = useState(null);
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const dataTable = [];
    const columns = [{ name: 'Vendor Group', selector: (row) => row.group, sortable: true }];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableDetail = [];
    const columnsDetail = [
        { name: 'Vendor Name', selector: (row) => row?.name, sortable: true },
        { name: 'Phone Number', selector: (row) => row.type, sortable: true },
    ];
    const dataDetail = dataTableDetail.map((value, index) => ({ ...value, id: index + 1 }));

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.SUPPLIER_SETTING.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[35%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <div className={cx('mb-2 flex items-center justify-start')}>
                        <Button red>Vendor Group Add</Button>
                    </div>
                    <div className={cx('mb-4')}>
                        <TableCustom
                            columns={columns}
                            data={data}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            className={cx('h-[200px]')}
                        />
                    </div>
                    <div>
                        <TableCustom
                            columns={columnsDetail}
                            data={dataDetail}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            className={cx('h-[270px]')}
                            showHideList
                        />
                    </div>
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <div>
                        <div className={cx('mb-4 flex items-center gap-4')}>
                            <Button orange>New</Button>
                            <Button green>Save</Button>
                            <Button blue>Excel Upload</Button>
                            <Button red>Supplier Cost</Button>
                        </div>
                        <div className={cx('flex')}>
                            {listTypeForm.map((value, index) => (
                                <Button
                                    key={index}
                                    onClick={() => changeTypeForm(value)}
                                    className={cx(
                                        value === typeForm && '!bg-primary-color !text-text-color-secondnary',
                                    )}
                                >
                                    {value}
                                </Button>
                            ))}
                        </div>
                        <FormGeneral typeForm={typeForm} />
                        <FormDescription typeForm={typeForm} />
                    </div>
                </div>
            </div>
        </TitleLayout>
    );
}

export default SupplierSetting;
