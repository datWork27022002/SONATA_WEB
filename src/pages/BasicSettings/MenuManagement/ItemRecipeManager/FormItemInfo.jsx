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
const listTaxType = ['Tax 8', 'Tax 10', 'Tax 5'];
const listAvailability = ['Available', 'Out of Stock', 'Discontinued'];
const listInventoryUnit = ['Ea', 'Kg', 'Oz', 'Ib'];
const listSupplier = ['tpBank'];
const listLocation = ['Default Warehose'];

function FormItemInfo({ typeForm }) {
    const [category, setCategory] = useState(listCategory[0]);
    const [openPrice, setOpenPrice] = useState(listYesNo[0]);
    const [applyPointRedemption, setApplyPointRedemption] = useState(listYesNo[0]);
    const [taxType, setTaxType] = useState([]);
    const [hide, setHide] = useState(listYesNo[0]);
    const [sellByWeight, setSellByWeight] = useState(listYesNo[0]);
    const [POSRegister, setPOSRegister] = useState(listYesNo[0]);
    const [applyDiscount, setApplyDiscount] = useState(listYesNo[0]);
    const [availability, setAvailability] = useState(listAvailability[0]);
    const [inventoryUnit, setInventoryUnit] = useState(listInventoryUnit[0]);
    const [supplier, setSupplier] = useState(listSupplier[0]);
    const [location, setLocation] = useState(listLocation[0]);

    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap gap-6 overflow-hidden transition-all duration-300',
                typeForm === 'Item Info' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
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
                <Input
                    label="POS register"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={POSRegister}
                    setSeletedValue={setPOSRegister}
                />
                <Input label="Item code" disabled />
                <Input label="Item Name" required disabled />
                <Input label="Barcode" disabled />
                <Input label="Price" disabled required />
                <Input label="Cost" disabled required />
                <Input
                    label="Tax Type"
                    checkboxInput
                    listOptions={listTaxType}
                    seletedValue={taxType}
                    setSeletedValue={setTaxType}
                />
                <Input
                    label="Apply Point Redemption"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={applyPointRedemption}
                    setSeletedValue={setApplyPointRedemption}
                />
            </div>
            <div className={cx('flex-1')}>
                <Input
                    label="Apply Discount"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={applyDiscount}
                    setSeletedValue={setApplyDiscount}
                />

                <Input
                    label="Availability"
                    radioInput
                    listOptions={listAvailability}
                    seletedValue={availability}
                    setSeletedValue={setAvailability}
                />
                <Input
                    label="Inventory Unit"
                    dropDown
                    listOptions={listInventoryUnit}
                    seletedValue={inventoryUnit}
                    setSeletedValue={setInventoryUnit}
                />
                <Input
                    label="Supplier"
                    dropDown
                    listOptions={listSupplier}
                    seletedValue={supplier}
                    setSeletedValue={setSupplier}
                />
                <Input
                    label="Location"
                    dropDown
                    listOptions={listLocation}
                    seletedValue={location}
                    setSeletedValue={setLocation}
                />
                <Input
                    label="Open Price"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={openPrice}
                    setSeletedValue={setOpenPrice}
                />
                <Input label="Hide" radioInput listOptions={listYesNo} seletedValue={hide} setSeletedValue={setHide} />
                <Input
                    label="Sell by Weight"
                    radioInput
                    listOptions={listYesNo}
                    seletedValue={sellByWeight}
                    setSeletedValue={setSellByWeight}
                />
                <Input label="Place of origin" />
            </div>
        </div>
    );
}

export default FormItemInfo;
