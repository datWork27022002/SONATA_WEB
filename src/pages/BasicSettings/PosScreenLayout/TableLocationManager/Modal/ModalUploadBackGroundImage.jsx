import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import Button from '~/components/Button';

const cx = classNames.bind();

function ModalUploadBackGroundImage({ isModal, setIsModal }) {
    const handleCloseModal = () => {};

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Background Image ">
            <div className={cx('mt-4 flex justify-between')}>
                <div>
                    15 inch : 768 x 919
                    <br /> 21.5 inch : 1008 x 1445 (Max 10MB)
                </div>
                <div className={cx('flex items-center gap-2')}>
                    <Button green>Upload</Button>
                    <Button red>Delete</Button>
                </div>
            </div>
            <div className={cx('my-4 h-[450px] w-[400px] rounded border border-solid border-black')}></div>
        </Modal>
    );
}

ModalUploadBackGroundImage.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalUploadBackGroundImage;
