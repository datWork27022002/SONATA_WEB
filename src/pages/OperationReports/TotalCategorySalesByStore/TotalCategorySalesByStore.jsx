import React from 'react';
import classNames from 'classnames/bind';
import { FaSearch, FaTrash } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import DoughnutChartSale from './DoughnutChartSale';
import MixedChartSale from './MixedChartSale';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function TotalCategorySalesByStore() {
    const dataTable = [];
    const columns = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '60px' },
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '300px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTable2 = [];
    const columns2 = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '60px' },
        { name: 'Category Name', selector: (row) => row.groupName, sortable: true, width: '300px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true },
    ];
    const data2 = dataTable2.map((value, index) => ({ ...value, id: index + 1 }));

    const labelChart = [
        'Bakery',
        'Croissant Coffee Combo',
        '돼지고기 Thit Heo TD',
        'Dining Risotto',
        'Dining Risotto1',
        '점심특선메뉴 Thuc don dac biet',
        'FRIENDSGOLF',
        'Dining Pasta',
    ];

    const dataChart = [12, 19, 3, 5, 2, 3];
    const dataQuantity = [80];
    const dataAmount = [110000];
    const labelMixedChart = [''];

    return (
        <TitleLayout title={config.nameMap.itemLevel3.TOTAL_CATEGORY_SALES_BY_STORE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap items-center justify-between')}>
                <div className={cx('flex flex-wrap gap-4')}>
                    <div className={cx('flex items-center gap-2')}>
                        <Input label="Sales Date" boldLabel paddingLabel type="date" />
                        ~
                        <Input type="date" />
                    </div>
                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                    <div className={cx('flex items-center gap-1')}>
                        <Input label="Item Name" paddingLabel boldLabel iconRightInput={FaSearch} />
                        <div
                            className={cx(
                                'flex cursor-pointer items-center rounded bg-gray-300 p-2 hover:bg-primary-color',
                            )}
                        >
                            <FaTrash size={13} />
                        </div>
                    </div>
                </div>

                <Button blue>Search</Button>
            </div>

            <div className={cx('flex justify-between max-lg:flex-col')}>
                <div className={cx('overflow-auto lg:w-[49%]')}>
                    <DoughnutChartSale dataChart={dataChart} labelChart={labelChart} />
                </div>
                <div className={cx('overflow-auto lg:w-[49%]')}>
                    <MixedChartSale
                        dataQuantity={dataQuantity}
                        dataAmount={dataAmount}
                        labelMixedChart={labelMixedChart}
                    />
                </div>
            </div>

            {/* table */}
            <div className={cx('mb-4 flex justify-between max-lg:flex-col')}>
                <div className={cx('overflow-auto lg:w-[49%]')}>
                    <div className={cx('mb-2 flex justify-end')}>
                        <Button teal>Export Excel</Button>
                    </div>
                    <TableCustom className={cx('h-[350px]')} columns={columns} data={data} />
                </div>
                <div className={cx('overflow-auto lg:w-[49%]')}>
                    <div className={cx('mb-2 flex justify-end')}>
                        <Button teal>Export Excel</Button>
                    </div>
                    <TableCustom className={cx('h-[350px]')} columns={columns2} data={data2} />
                </div>
            </div>
        </TitleLayout>
    );
}

export default TotalCategorySalesByStore;
