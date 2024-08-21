import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];

function ModalTemplate({ isModal, setIsModal }) {
    const [hide, setHide] = useState(listYesNo[0]);
    const handleCloseModal = () => {};

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Template">
            <Input label="Modifier Template" required />
            <Input label="Hide" radioInput listOptions={listYesNo} seletedValue={hide} setSeletedValue={setHide} />

            <div className={cx('mt-8 flex justify-end gap-2')}>
                <Button teal>New</Button>
                <Button green>Save</Button>
            </div>
        </Modal>
    );
}

ModalTemplate.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalTemplate;
