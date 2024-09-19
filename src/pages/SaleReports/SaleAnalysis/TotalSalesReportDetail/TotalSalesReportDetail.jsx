import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import CategorySummaryTable from './CategorySummaryTable';
import HourlySummaryTable from './HourlySummaryTable';
import PaymentSummaryTable from './PaymentSummaryTable';
import ItemSummaryTable from './ItemSummaryTable';
import WeekNameSummaryTable from './WeekNameSummaryTable';
import OtherSummaryTable from './OtherSummaryTable';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listStore = ['hyojung'];

function TotalSalesReportDetail() {
    const [store, setStore] = useState(listStore[0]);

    return (
        <TitleLayout title={config.nameMap.itemLevel3.TOTAL_SALES_REPORT_DETAIL.Visiblename}>
            {/* form */}

            <div className={cx('flex items-center gap-8', 'max-lg:flex max-lg:flex-wrap')}>
                <div className={cx('flex items-center gap-1')}>
                    <Input label="Sales Date" boldLabel paddingLabel type="date" />
                    ~
                    <Input type="date" />
                </div>
                <Input
                    label="Store Name"
                    boldLabel
                    paddingLabel
                    dropDown
                    listOptions={listStore}
                    seletedValue={store}
                    setSeletedValue={setStore}
                />

                <div className={cx('flex flex-1 items-center justify-end gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>

            {/* table */}
            <div className={cx('mt-4 flex flex-wrap justify-between gap-y-4')}>
                <div className={cx('w-[39%]')}>
                    <CategorySummaryTable />
                </div>
                <div className={cx('w-[39%]')}>
                    <HourlySummaryTable />
                </div>
                <div className={cx('w-[20%]')}>
                    <PaymentSummaryTable />
                </div>
                <div className={cx('w-[39%]')}>
                    <ItemSummaryTable />
                </div>
                <div className={cx('w-[39%]')}>
                    <WeekNameSummaryTable />
                </div>
                <div className={cx('w-[20%]')}>
                    <OtherSummaryTable />
                </div>
            </div>
        </TitleLayout>
    );
}

export default TotalSalesReportDetail;
