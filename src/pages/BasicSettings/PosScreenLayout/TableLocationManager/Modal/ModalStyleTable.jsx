import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Button from '~/components/Button';

const cx = classNames.bind();

const listTable = [
    require('~/assets/img/TableLocatioManager/circle_maple_2.png'),
    require('~/assets/img/TableLocatioManager/circle_maple_4.png'),
    require('~/assets/img/TableLocatioManager/circle_maple_6.png'),
    require('~/assets/img/TableLocatioManager/circle_maple_8.png'),
    require('~/assets/img/TableLocatioManager/square_maple_2.png'),
    require('~/assets/img/TableLocatioManager/square_maple_4.png'),
    require('~/assets/img/TableLocatioManager/square_maple_6.png'),
    require('~/assets/img/TableLocatioManager/square_maple_vertical_2.png'),
    require('~/assets/img/TableLocatioManager/square_maple_vertical_4.png'),
    require('~/assets/img/TableLocatioManager/square_maple_vertical_6.png'),
];

const listColor = [
    '#ff8900',
    '#6963c8',
    '#2fb6e6',
    '#ab66cd',
    '#f259a2',
    '#6bc51e',
    '#ddb984',
    '#99612f',
    '#643e1f',
    '#433f3f',
];

function ModalStyleTable({ isModal, setIsModal }) {
    const [tableSelected, setTableSelected] = useState(-1);
    const [colorSelected, setColorSelected] = useState(-1);

    const handleClickTable = (index) => {
        setTableSelected(index);
    };

    const handleChooseColor = (index) => {
        setColorSelected(index);
    };

    return (
        <Modal visibleModal={isModal} setVisibleModal={setIsModal} title="Table">
            {/* choose color */}
            <span className={cx('font-semibold')}>Color:</span>
            <div className={cx('flex')}>
                <div className={cx('mt-2 grid grid-cols-5 gap-1')}>
                    {listColor.map((value, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: value }}
                            className={cx(
                                `h-8 w-8 cursor-pointer border-2 border-solid`,
                                colorSelected === index && '!border-gray-600',
                            )}
                            onClick={() => handleChooseColor(index)}
                        ></div>
                    ))}
                </div>
            </div>

            {/* choose table */}
            <div className={cx('mt-4 grid grid-cols-4 gap-4')}>
                {listTable.map((value, index) => (
                    <div
                        key={index}
                        className={cx(
                            'flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded bg-gray-200',
                            'border-2 border-solid hover:border-gray-400',
                            tableSelected === index && '!border-primary-color',
                        )}
                        onClick={() => handleClickTable(index)}
                    >
                        <img src={value} alt="" />
                    </div>
                ))}
            </div>
            <div className={cx('my-4 flex justify-end')}>
                <Button green>Apply</Button>
            </div>
        </Modal>
    );
}

ModalStyleTable.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalStyleTable;
