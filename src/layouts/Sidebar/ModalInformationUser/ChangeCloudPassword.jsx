import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../Sidebar.module.scss';
import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ChangeCloudPassword({ isModal, setIsModal }) {
    const handleCloseModal = () => {};

    return (
        <Modal
            onClose={handleCloseModal}
            visibleModal={isModal}
            setVisibleModal={setIsModal}
            title="Change Cloud Password"
        >
            {/* form */}
            <div className={cx('mt-6')}>
                <Input label="Original Password" />
                <Input label=" New Password" />
                <Input label="Confirm" />
                <div className={cx('mt-2 flex w-full justify-end')}>
                    <Button green>Save</Button>
                </div>
            </div>
        </Modal>
    );
}

ChangeCloudPassword.propTypes = {
    modalUser: PropTypes.bool.isRequired,
    setModalUser: PropTypes.func.isRequired,
};

export default ChangeCloudPassword;
