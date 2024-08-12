import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Fragment, useState } from 'react';

import styles from '../Sidebar.module.scss';
import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';
import ChangePosPassword from './ChangePosPassword';
import ChangeCloudPassword from './ChangeCloudPassword';

const cx = classNames.bind(styles);

function ModalInformationUser({ avatar, modalUser, setModalUser }) {
    const [modalChangePosPassword, setModalChangePosPassword] = useState(false);
    const [modalChangeCloudPassword, setModalChangeCloudPassword] = useState(false);

    const OpenModalChangePosPassword = () => {
        setModalChangePosPassword(true);
    };

    const OpenModalChangeCloudPassword = () => {
        setModalChangeCloudPassword(true);
    };

    const handleCloseModalUser = () => {};

    return (
        <Fragment>
            <Modal
                onClose={handleCloseModalUser}
                visibleModal={modalUser}
                setVisibleModal={setModalUser}
                title="Information User"
            >
                {/* avatar */}
                <div className={cx('mt-4 flex justify-center')}>
                    <img
                        src={avatar || require('~/assets/img/avatar.jpg')}
                        alt=""
                        className={cx('cursor-pointer', 'h-24 w-24 border-2 border-solid border-primary-color')}
                    />
                </div>
                {/* form */}
                <div className={cx('mt-6')}>
                    <Input label="Name" disabled />
                    <Input label="Security Level" disabled />
                    <Input label="Security Level Cloud" disabled />
                    <div className={cx('flex items-center')}>
                        <Input label="POS Password" disabled />
                        <Button teal className={cx('ml-4')} onClick={OpenModalChangePosPassword}>
                            Change
                        </Button>
                    </div>
                    <div className={cx('flex items-center')}>
                        <Input label="Cloud Password" disabled />
                        <Button teal className={cx('ml-4')} onClick={OpenModalChangeCloudPassword}>
                            Change
                        </Button>
                    </div>
                </div>
            </Modal>
            <ChangePosPassword isModal={modalChangePosPassword} setIsModal={setModalChangePosPassword} />
            <ChangeCloudPassword isModal={modalChangeCloudPassword} setIsModal={setModalChangeCloudPassword} />
        </Fragment>
    );
}

ModalInformationUser.propTypes = {
    avatar: PropTypes.object.isRequired,
    modalUser: PropTypes.bool.isRequired,
    setModalUser: PropTypes.func.isRequired,
};

export default ModalInformationUser;
