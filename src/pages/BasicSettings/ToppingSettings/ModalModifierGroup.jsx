import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function ModalModifierGroup({ isModal, setIsModal }) {
    const handleCloseModal = () => {};

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Modifier Group">
            <div className={cx('mt-6')}>
                <Input label="Modifier Group Name" />
                <Input label="Min. Quantity" type="number" />
                <Input label="Max. Quantity" type="number" />

                <div className={cx('mt-8 flex justify-end gap-2')}>
                    <Button green>Save</Button>
                </div>
            </div>
        </Modal>
    );
}

ModalModifierGroup.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalModifierGroup;
