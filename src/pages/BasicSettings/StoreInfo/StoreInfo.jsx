import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './StoreInfo.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';
import FormGeneral from './FormGeneral';
import FormPODefaultSetting from './FormPODefaultSetting';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function StoreInfo() {
    const listTypeForm = ['General', 'PO default Setting'];

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedRowGroup, setSelectedRowGroup] = useState(null);
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const dataTableGroup = [{ group: 'All' }, { group: 'HQ' }];
    const columnsGroup = [
        {
            name: 'Group',
            selector: (row) => row.group,
            sortable: true,
        },
    ];
    const dataGroup = dataTableGroup.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableDetail = [];
    const columnsDetail = [
        {
            name: 'Store Name',
            selector: (row) => row.storeName,
            sortable: true,
        },
        {
            name: 'Type',
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: 'CEO Name',
            selector: (row) => row.ceoName,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: (row) => row.phone,
            sortable: true,
        },
    ];
    const dataDetail = dataTableDetail.map((value, index) => ({ ...value, id: index + 1 }));

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.STORE_INFO.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[45%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <div className={cx('mb-4')}>
                        <TableCustom
                            columns={columnsGroup}
                            data={dataGroup}
                            selectedRow={selectedRowGroup}
                            setSelectedRow={setSelectedRowGroup}
                            className={cx('h-[200px]')}
                        />
                    </div>
                    <div>
                        <TableCustom
                            columns={columnsDetail}
                            data={dataDetail}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            className={cx('h-[300px]')}
                            showHideList
                        />
                    </div>
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <div>
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
                        <FormGeneral className={cx(typeForm === 'General' ? 'opacity-100' : 'h-0 opacity-0')} />
                        <FormPODefaultSetting
                            className={cx(typeForm === 'PO default Setting' ? 'opacity-100' : 'h-0 opacity-0')}
                        />
                    </div>
                </div>
            </div>
        </TitleLayout>
    );
}

export default StoreInfo;
