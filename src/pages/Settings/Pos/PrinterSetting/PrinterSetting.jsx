import React, { useState } from 'react';
import classNames from 'classnames';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames;

const listInterface = ['Serial Port', 'Printer Sharing', 'Printer Server', 'Image Print'];
const listType = ['Thermal Printer', 'Cat Printer'];
const listPrinterType = ['General', 'Woosim'];

function PrinterSetting() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [
        { classification: 'Receipt Printer' },
        { classification: 'Customer Order Print' },
        { classification: 'KITCHEN1' },
        { classification: '고객주문서' },
        { classification: 'KITCHEN3' },
        { classification: 'KITCHEN4' },
    ];

    const columns = [{ name: 'Classification', selector: (row) => row.classification, sortable: true }];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.PRINTER_SETTING.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[35%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <TableCustom
                        className={cx('mb-4 h-[500px]')}
                        columns={columns}
                        data={data}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                {/* form */}
                <div className={cx('sm:w-[450px]')}>
                    <Input label="Classification" disabled />
                    <Input label="Interface" checkboxInput listOptions={listInterface} />
                    <Input label="Path" />
                    <Input label="Type" checkboxInput listOptions={listType} />
                    <Input label="Printer Type" checkboxInput listOptions={listPrinterType} />
                    <Input label="Output end margin" />
                    <div className={cx('mt-8 flex gap-4')}>
                        <Button orange>Reset</Button>
                        <Button teal>Save</Button>
                    </div>
                </div>
                <div className={cx('flex-1')}></div>
            </div>
        </TitleLayout>
    );
}

export default PrinterSetting;
