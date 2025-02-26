import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function ModalBatchTableNameChange({ isModal, setIsModal }) {
    return (
        <Modal visibleModal={isModal} setVisibleModal={setIsModal} title="Batch Table Name Change">
            <div className={cx('mt-4 px-4')}>
                <Input label="Prefix string" />
                <Input label="Starting number" type="number" widthInput="60px" />
                <Input label="Increase" type="number" widthInput="60px" />
                <Input label="Suffix string" />
            </div>
            <div className={cx('my-4 flex justify-end')}>
                <Button green>Apply All</Button>
            </div>
        </Modal>
    );
}

ModalBatchTableNameChange.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalBatchTableNameChange;
