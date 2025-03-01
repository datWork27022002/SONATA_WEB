import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listWidth = [1, 2, 3, 4];
const listHeight = [1, 2, 3, 4, 5, 6, 7, 8];
const listFontName = [
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
const listIconColor = ['White ', 'Purple', 'Orange', 'Red', 'Blue', 'Green'];

const listIconSize = ['Big', 'Small'];

const listFontStyle = ['N', 'B', 'I', 'U', 'C'];

function ModalMenuSettingsOption({ isModal, setIsModal }) {
    const [width, setWidth] = useState(listWidth[0]);
    const [height, setHeight] = useState(listHeight[0]);
    const [fontName, setFontName] = useState(listFontName[0]);
    const [fontStyle, setFontStyle] = useState(listFontStyle[0]);
    const [iconColor, seticonColor] = useState(listIconColor[0]);
    const [iconSize, seticonSize] = useState(listIconSize[0]);
    const handleCloseModal = () => {};

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Add Category">
            <div className={cx('mt-6 flex justify-center gap-8')}>
                <div className={cx('flex-1')}>
                    <Input
                        label="Width"
                        dropDown
                        listOptions={listWidth}
                        seletedValue={width}
                        setSeletedValue={setWidth}
                    />
                    <Input
                        label="Height"
                        dropDown
                        listOptions={listHeight}
                        seletedValue={height}
                        setSeletedValue={setHeight}
                    />
                    <Input
                        label="Font Name"
                        dropDown
                        listOptions={listFontName}
                        seletedValue={fontName}
                        setSeletedValue={setFontName}
                    />
                    <Input label="Font Size" type="number" />
                    <Input label="Font Color" type="color" />
                </div>

                <div className={cx('flex-1')}>
                    <Input label="Background Color" type="color" />
                    <Input
                        label="Font Style"
                        radioInput
                        listOptions={listFontStyle}
                        seletedValue={fontStyle}
                        setSeletedValue={setFontStyle}
                    />
                    <Input
                        label="Icon Color"
                        dropDown
                        listOptions={listIconColor}
                        seletedValue={iconColor}
                        setSeletedValue={seticonColor}
                    />
                    <Input
                        label="Icon Size"
                        radioInput
                        listOptions={listIconSize}
                        seletedValue={iconSize}
                        setSeletedValue={seticonSize}
                    />

                    <div className={cx('mt-8 flex justify-end gap-2')}>
                        <Button green>Apply</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ModalMenuSettingsOption.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalMenuSettingsOption;
