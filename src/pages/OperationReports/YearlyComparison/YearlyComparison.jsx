import React, { useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import ModalDetailSales from './ModalDetailSales';

const cx = classNames.bind();

const listStoreName = ['hyojung'];

function YearlyComparison() {
    const [modalDetailSales, setModalDetailSales] = useState(false);
    const [selectedYear, setSelectedYear] = useState(new Date());

    const openModalDetailSales = () => {
        setModalDetailSales(true);
    };

    const RenderLinkSalesDetail = () => {
        return (
            <span className={cx('cursor-pointer text-blue-700 underline')} onClick={openModalDetailSales}>
                Detail
            </span>
        );
    };

    const dataTableFirstMonth = [];
    const columnsFirstMonth = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Month', selector: (row) => row.groupName, sortable: true, width: '60px' },
        { name: 'Operation Days', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'No.of Transaction', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Sales Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Customer Count', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Average Amount Per Persion', selector: (row) => row.groupName, sortable: true, width: '150px' },
        {
            name: 'Detailed Sales',
            selector: (row) => row.groupName,
            width: '100px',
            cell: (row) => <RenderLinkSalesDetail />,
        },
    ];
    const dataFirstMonth = dataTableFirstMonth.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableSecondeMonth = [];
    const columnsSecondeMonth = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Month', selector: (row) => row.groupName, sortable: true, width: '60px' },
        { name: 'Operation Days', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'No.of Transaction', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Sales Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Customer Count', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Average Amount Per Persion', selector: (row) => row.groupName, sortable: true, width: '150px' },
        {
            name: 'Detailed Sales',
            selector: (row) => row.groupName,
            width: '100px',
            cell: (row) => <RenderLinkSalesDetail />,
        },
    ];
    const dataSecondeMonth = dataTableSecondeMonth.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableCompare = [];
    const columnsCompare = [
        { name: 'Store Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Day', selector: (row) => row.groupName, sortable: true, width: '60px' },
        { name: 'Sales Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Customer Count', selector: (row) => row.groupName, sortable: true, width: '80px' },
        { name: 'Date', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Average Amount Per Persion', selector: (row) => row.groupName, sortable: true, width: '150px' },
    ];
    const dataCompare = dataTableCompare.map((value, index) => ({ ...value, id: index + 1 }));

    const InputYear = () => {
        return (
            <DatePicker
                showYearPicker
                dateFormat="yyyy"
                selected={selectedYear}
                onChange={(date) => setSelectedYear(date)}
                className={cx('p-1')}
            />
        );
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.YEARLY_COMPARISON.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex gap-4')}>
                    <Input label="Sales Date" boldLabel custom ComponentCustom={InputYear} />
                    <Input label="Store Name" paddingLabel boldLabel dropDown listOptions={listStoreName} />
                </div>

                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('flex flex-wrap justify-between')}>
                <div className={cx('w-[49%] overflow-auto')}>
                    <span className={cx('text-base font-semibold')}>{selectedYear.getFullYear().toString() - 1}</span>
                    <TableCustom className={cx('h-[350px]')} columns={columnsFirstMonth} data={dataFirstMonth} />
                </div>
                <div className={cx('w-[49%] overflow-auto')}>
                    <span className={cx('text-base font-semibold')}>{selectedYear.getFullYear().toString()}</span>
                    <TableCustom className={cx('h-[350px]')} columns={columnsSecondeMonth} data={dataSecondeMonth} />
                </div>
            </div>
            <div className={cx('my-4 flex flex-wrap justify-center')}>
                <div className={cx('overflow-auto')}>
                    <span className={cx('text-base font-semibold')}>Compared to last year</span>
                    <TableCustom columns={columnsCompare} data={dataCompare} className={cx('h-[350px]')} />
                </div>
            </div>
            <ModalDetailSales isModal={modalDetailSales} setIsModal={setModalDetailSales} />
        </TitleLayout>
    );
}

export default YearlyComparison;
