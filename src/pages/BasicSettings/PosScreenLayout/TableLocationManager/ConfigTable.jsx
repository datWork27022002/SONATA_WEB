import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { TbTableMinus, TbTablePlus } from 'react-icons/tb';
import { MdOutlineGridOn } from 'react-icons/md';
import { FaImage } from 'react-icons/fa6';
import { RxWidth, RxHeight } from 'react-icons/rx';

import Button from '~/components/Button';
import Input from '~/components/Input';
import ModalUploadBackGroundImage from './Modal/ModalUploadBackGroundImage';
import ModalSequenceAlignment from './Modal/ModalSequenceAlignment';
import ModalBatchTableNameChange from './Modal/ModalBatchTableNameChange';
import ModalStyleTable from './Modal/ModalStyleTable';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listSelectTabeOff = [
    require('~/assets/img/TableLocatioManager/select_all_off.png'),
    require('~/assets/img/TableLocatioManager/select_inverse_off.png'),
    require('~/assets/img/TableLocatioManager/select_cancel_off.png'),
];

const listImgOrderTable = [
    require('~/assets/img/TableLocatioManager/array_01_off.png'),
    require('~/assets/img/TableLocatioManager/array_03_off.png'),
    require('~/assets/img/TableLocatioManager/array_04_off.png'),
    require('~/assets/img/TableLocatioManager/array_06_off.png'),
    require('~/assets/img/TableLocatioManager/array_08_off.png'),
    require('~/assets/img/TableLocatioManager/array_07_off.png'),
];

function ConfigTable() {
    const [modalUploadBackGroundImage, setModalUploadBackGroundImage] = useState(false);
    const [modalSequenceAlignment, setModalSequenceAlignment] = useState(false);
    const [modalBatchTableNameChange, setModalBatchTableNameChange] = useState(false);
    const [modalStyleTable, setModalStyleTable] = useState(false);

    const OpenModalUploadBackGroundImage = () => {
        setModalUploadBackGroundImage(true);
    };

    const OpenModalSequenceAlignment = () => {
        setModalSequenceAlignment(true);
    };

    const OpenModalBatchTableNameChange = () => {
        setModalBatchTableNameChange(true);
    };

    const OpenModalStyleTable = () => {
        setModalStyleTable(true);
    };
    return (
        <div className={cx('rounded border border-solid border-gray-300 bg-gray-100 p-2')}>
            <div className={cx('flex items-center gap-4')}>
                <Input label="Name" paddingLabel boldLabel widthInput="120px" />
                <Button teal onClick={OpenModalUploadBackGroundImage}>
                    Background Image (kiosk)
                </Button>
            </div>
            <div className={cx('flex items-center gap-4')}>
                <Input label="X" paddingLabel boldLabel widthInput="40px" type="number" />
                <Input label="Y" paddingLabel boldLabel widthInput="40px" type="number" />
                <Button blue disable>
                    Create Table
                </Button>
                <Button blue>
                    <TbTablePlus size={20} />
                </Button>
                <Button blue>
                    <TbTableMinus size={20} />
                </Button>
                <Button blue onClick={OpenModalSequenceAlignment}>
                    <MdOutlineGridOn size={20} />
                </Button>
                <Button orange>Clear</Button>
                <Button green onClick={OpenModalBatchTableNameChange}>
                    ABC
                </Button>
                <Button green onClick={OpenModalStyleTable}>
                    <FaImage size={20} />
                </Button>
            </div>
            <div className={cx('flex items-center gap-4')}>
                <div className={cx('flex rounded border border-solid border-primary-color bg-white')}>
                    {listSelectTabeOff.map((value, index) => (
                        <img
                            key={index}
                            src={value}
                            alt=""
                            className={cx('cursor-pointer px-3 py-1 hover:bg-blue-300')}
                        />
                    ))}
                </div>
                <Input label="Table Name" paddingLabel boldLabel widthInput="80px" />
                <Input labelIcon={RxWidth} paddingLabel boldLabel widthInput="60px" />
                <Input labelIcon={RxHeight} paddingLabel boldLabel widthInput="60px" />
                <div className={cx('flex rounded border border-solid border-primary-color bg-white')}>
                    {listImgOrderTable.map((value, index) => (
                        <img
                            key={index}
                            src={value}
                            alt=""
                            className={cx('cursor-pointer px-1 py-1 hover:bg-blue-300')}
                        />
                    ))}
                </div>
                <Input label="" paddingLabel boldLabel widthInput="60px" type="color" />
            </div>
            <ModalUploadBackGroundImage
                isModal={modalUploadBackGroundImage}
                setIsModal={setModalUploadBackGroundImage}
            />
            <ModalSequenceAlignment isModal={modalSequenceAlignment} setIsModal={setModalSequenceAlignment} />
            <ModalBatchTableNameChange isModal={modalBatchTableNameChange} setIsModal={setModalBatchTableNameChange} />
            <ModalStyleTable isModal={modalStyleTable} setIsModal={setModalStyleTable} />
        </div>
    );
}

export default ConfigTable;
