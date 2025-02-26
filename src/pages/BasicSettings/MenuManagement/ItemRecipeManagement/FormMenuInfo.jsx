import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];
const listCategory = [
    '돼지고기 Thit Heo TD',
    '돼지고기 세트 Thit Heo SET TD',
    '사이드메뉴',
    '소고기 세트 Thit Bo SET TD',
    '점심특선메뉴 Thuc don dac biet bua trua TD',
    'them topping',
    'MEMBERSHIP',
    '음료 Do uong TD ',
];
const listApplyType = ['Regular', 'Modifier', 'Sub Menu', 'Group Menu'];
const listKitchenPrinter = ['KITCHEN1', 'KITCHEN2'];
const listTaxType = ['Tax 8', 'Tax 10', 'Tax 5'];
const listModifier = ['Not Used', 'Add'];
const listSalesAccountName = ['1011 Other store sale'];

function FormMenuInfo({ typeForm }) {
    const [category, setCategory] = useState(listCategory[0]);
    const [applyType, setApplyType] = useState(listApplyType[0]);
    const [inventoryStatus, setInventoryStatus] = useState(listYesNo[0]);
    const [openPrice, setOpenPrice] = useState(listYesNo[0]);
    const [applyPointRedemption, setApplyPointRedemption] = useState(listYesNo[0]);
    const [individualOutput, setIndividualOutput] = useState(listYesNo[0]);
    const [kitchenPrinter, setKitchenPrinter] = useState([false, false]);
    const [taxType, setTaxType] = useState([]);
    const [modifier, setModifier] = useState(listModifier[0]);
    const [salesAccountName, setSalesAccountName] = useState(listSalesAccountName[0]);
    const [labelPrint, setLabelPrint] = useState(listYesNo[0]);
    const [hide, setHide] = useState(listYesNo[0]);
    const [sellByWeight, setSellByWeight] = useState(listYesNo[0]);

    const changeValueKitchenPrinter = (index) => {
        const newKitchenPrinter = [...kitchenPrinter];
        newKitchenPrinter[index] = !newKitchenPrinter[index];
        setKitchenPrinter(newKitchenPrinter);
    };

    const inputKitchenPrinter = () => (
        <div className={cx('flex-1 rounded border border-solid border-primary-color p-1')}>
            {listKitchenPrinter.map((value, index) => (
                <div key={index} className={cx('my-1 flex items-center justify-between')}>
                    <span>{value}</span>
                    <div
                        className={cx(
                            'flex w-8 cursor-pointer items-center justify-center rounded py-1',
                            'border border-solid border-primary-color',
                            kitchenPrinter[index] && 'bg-primary-color',
                        )}
                        onClick={() => changeValueKitchenPrinter(index)}
                    >
                        Y
                    </div>
                </div>
            ))}
        </div>
    );
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap gap-6 overflow-hidden transition-all duration-300',
                typeForm === 'Menu Info' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1')}>
                <Input label="Store Name" disabled />
                <Input
                    label="Category"
                    dropDown
                    required
                    listOptions={listCategory}
                    seletedValue={category}
                    setSeletedValue={setCategory}
                />
                <Input label="Item code" disabled />
                <Input label="Item Name" required />
                <Input
                    label="Apply Type"
                    dropDown
                    required
                    listOptions={listApplyType}
                    seletedValue={applyType}
                    setSeletedValue={setApplyType}
                />
                <Input label="Price" required />
                <Input
                    label="Inventory Status"
                    required
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={inventoryStatus}
                    setSeletedValue={setInventoryStatus}
                />
                <Input
                    label="Open Price"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={openPrice}
                    setSeletedValue={setOpenPrice}
                />
                <Input
                    label="Apply Point Redemption"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={applyPointRedemption}
                    setSeletedValue={setApplyPointRedemption}
                />
                <Input
                    label="Individual output"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={individualOutput}
                    setSeletedValue={setIndividualOutput}
                />
                <Input label="Kitchen Printer" custom ComponentCustom={inputKitchenPrinter} />
                <Input
                    label="Tax Type"
                    checkboxInput
                    listOptions={listTaxType}
                    seletedValue={taxType}
                    setSeletedValue={setTaxType}
                />
            </div>
            <div className={cx('flex-1')}>
                <Input label="Kitchen Alias" />
                <Input label="Barcode" />
                <Input label="Cost" />
                <Input
                    label="Modifier"
                    dropDown
                    listOptions={listModifier}
                    seletedValue={modifier}
                    setSeletedValue={setModifier}
                />
                <Input
                    label="Sales Account Name"
                    dropDown
                    listOptions={listSalesAccountName}
                    seletedValue={salesAccountName}
                    setSeletedValue={setSalesAccountName}
                />
                <Input
                    label="Label Print"
                    dropDown
                    listOptions={listYesNo}
                    seletedValue={labelPrint}
                    setSeletedValue={setLabelPrint}
                />
                <Input
                    label="Description \n ※ POS and kiosk older versions only support up to 128 characters."
                    textarea
                />
                <Input label="Place of origin" />
                <Input label="Hide" radioInput listOptions={listYesNo} seletedValue={hide} setSeletedValue={setHide} />
                <Input
                    label="Sell by Weight"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={sellByWeight}
                    setSeletedValue={setSellByWeight}
                />
                <Input label="Cooking Time (Seconds)" />
            </div>
        </div>
    );
}

export default FormMenuInfo;
