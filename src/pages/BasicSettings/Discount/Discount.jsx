import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Discount.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Discount() {
    const listHide = ['YES', 'NO'];
    const listDiscountType = ['Discount Rate', 'Discount Amount'];
    const listApplyType = ['All', 'Item'];
    const [selectedRow, setSelectedRow] = useState(null);
    const [hideList, setHideList] = useState(listHide[0]);
    const [discountType, setDiscountType] = useState(listDiscountType[0]);
    const [applyType, setApplyType] = useState(listApplyType[0]);

    const dataTable = [
        { discountName: '10% D/C', registeredStore: 'Headquarter' },
        { discountName: '20% D/C', registeredStore: 'Headquarter' },
        { discountName: '10$ D/C', registeredStore: 'Headquarter' },
        { discountName: '20$ D/C', registeredStore: 'Headquarter' },
    ];

    const columns = [
        { name: 'Discount Name', selector: (row) => row.discountName, sortable: true },
        { name: 'Registered Store', selector: (row) => row.registeredStore, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CASH_DRAWER.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[45%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <TableCustom
                        className={cx('mb-4 h-[500px]')}
                        columns={columns}
                        data={data}
                        showHideList
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <Input label="Discount Name" required />
                    <Input
                        label="Discount Type"
                        radioInput
                        listOptions={listDiscountType}
                        seletedValue={discountType}
                        setSeletedValue={setDiscountType}
                    />
                    <Input label="Discount Rate" />
                    <Input label="Discount Amount" />
                    <Input
                        label="Apply Type"
                        radioInput
                        listOptions={listApplyType}
                        seletedValue={applyType}
                        setSeletedValue={setApplyType}
                    />
                    <Input
                        label="Hide"
                        radioInput
                        listOptions={listHide}
                        seletedValue={hideList}
                        setSeletedValue={setHideList}
                    />
                    <div className={cx('mt-8 flex')}>
                        <Button orange className={cx('mr-4')}>
                            New
                        </Button>
                        <Button teal>Save</Button>
                    </div>
                </div>
                <div className={cx('flex-1')}></div>
            </div>
        </TitleLayout>
    );
}

export default Discount;
