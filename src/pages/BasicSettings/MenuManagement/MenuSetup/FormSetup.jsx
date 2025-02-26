import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './MenuSetup.module.scss';
import RadioInput from '~/components/Input/RadioInput';
import Dropdown from '~/components/Input/DropDown';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const listStyleTextMenu = ['N', 'B', 'I', 'U', 'C'];
const listFontFamily = [
    'Arial ',
    'Verdana',
    'Tahoma ',
    'Trebuchet ',
    'Times New Roman',
    'Georgia ',
    'Garamond ',
    'Courier New ',
    'Brush Script MT',
];

function FormSetup() {
    const [stylePosMenuGroup, setStylePosMenuGroup] = useState(listStyleTextMenu[0]);
    const [stylePosMenu, setStylePosMenu] = useState(listStyleTextMenu[0]);
    const [styleKIOSKMenuGroup, setStyleKIOSKMenuGroup] = useState(listStyleTextMenu[0]);
    const [styleKIOSKMenu, setStyleKIOSKMenu] = useState(listStyleTextMenu[0]);
    const [fontPosMenuGroup, setFontPosMenuGroup] = useState(listFontFamily[0]);
    const [fontPosMenu, setFontPosMenu] = useState(listFontFamily[0]);
    const [fontKIOSKMenuGroup, setFontKIOSKMenuGroup] = useState(listFontFamily[0]);
    const [fontKIOSKMenu, setFontKIOSKMenu] = useState(listFontFamily[0]);
    const [quantityPosMenuGroup, setQuantityPosMenuGroup] = useState(10);
    const [quantityPosMenu, setQuantityPosMenu] = useState(10);
    const [quantityKIOSKMenuGroup, setQuantityKIOSKMenuGroup] = useState(10);
    const [quantityKIOSKMenu, setQuantityKIOSKMenu] = useState(10);

    const RenderForm = ({ style, setStyle, font, setFont, quantity, setQuantity, label }) => {
        return (
            <div
                className={cx(
                    'flex rounded max-lg:my-4 max-md:flex-wrap sm:items-center md:mx-4',
                    'max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-1',
                    'max-sm: border-primary-color max-sm:border max-sm:border-solid max-sm:p-2',
                )}
            >
                <label className={cx('mr-2 font-semibold sm:w-20')}>{label}</label>
                <RadioInput
                    listOptions={listStyleTextMenu}
                    seletedRadio={style}
                    setSeletedRadio={setStyle}
                    className={cx('mr-2 !w-40')}
                />
                <Dropdown
                    listOptions={listFontFamily}
                    seletedValue={font}
                    setSeletedValue={setFont}
                    className={cx('mr-2 !w-32')}
                    top
                />
                <input
                    className={cx('w-12 rounded border border-solid border-slate-400 p-1 text-[13px]')}
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
        );
    };

    return (
        <div>
            <div className={cx('my-2 grid-cols-2 grid-rows-2 gap-y-2 lg:grid')}>
                <RenderForm
                    label="POS Menu Group"
                    style={stylePosMenuGroup}
                    setStyle={setStylePosMenuGroup}
                    font={fontPosMenuGroup}
                    setFont={setFontPosMenuGroup}
                    quantity={quantityPosMenuGroup}
                    setQuantity={setQuantityPosMenuGroup}
                />
                <RenderForm
                    label="KIOSK Menu Group"
                    style={styleKIOSKMenuGroup}
                    setStyle={setStyleKIOSKMenuGroup}
                    font={fontKIOSKMenuGroup}
                    setFont={setFontKIOSKMenuGroup}
                    quantity={quantityKIOSKMenuGroup}
                    setQuantity={setQuantityKIOSKMenuGroup}
                />
                <RenderForm
                    label="POS Menu"
                    style={stylePosMenu}
                    setStyle={setStylePosMenu}
                    font={fontPosMenu}
                    setFont={setFontPosMenu}
                    quantity={quantityPosMenu}
                    setQuantity={setQuantityPosMenu}
                />
                <RenderForm
                    label="POS Menu"
                    style={styleKIOSKMenu}
                    setStyle={setStyleKIOSKMenu}
                    font={fontKIOSKMenu}
                    setFont={setFontKIOSKMenu}
                    quantity={quantityKIOSKMenu}
                    setQuantity={setQuantityKIOSKMenu}
                />
            </div>
            <div className={cx('my-2 flex justify-start')}>
                <Button teal>Save</Button>
            </div>
        </div>
    );
}

export default FormSetup;
