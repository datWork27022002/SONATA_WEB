import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listSizeSetting = ['Manual input', 'Automatic input', 'No change'];

function ModalSequenceAlignment({ isModal, setIsModal }) {
    const [sizeSetting, setSizeSetting] = useState(listSizeSetting[0]);

    return (
        <Modal visibleModal={isModal} setVisibleModal={setIsModal} title="Sequence Alignment">
            <div className={cx('mt-4 px-4')}>
                <Input label="Horizontal" type="number" widthInput="60px" />
                <Input label="Vertical" type="number" widthInput="60px" />
                <Input
                    label="Size Setting"
                    dropDown
                    listOptions={listSizeSetting}
                    seletedValue={sizeSetting}
                    setSeletedValue={setSizeSetting}
                />
                <Input label="Width" />
                <Input label="Height" />
            </div>
            <div className={cx('my-4 flex justify-end')}>
                <Button green>Apply All</Button>
            </div>
        </Modal>
    );
}

ModalSequenceAlignment.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalSequenceAlignment;
