import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Modal } from '~/components';

const ModalDeleteStore = ({ isOpen, setIsOpen, data }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Store' });

    const handleDelete = async () => {};

    return (
        <Modal
            title={t('Delete_Store')}
            visibleModal={isOpen}
            setVisibleModal={setIsOpen}
            onConfirm={handleDelete}
            className={cx('w-[1200x]')}
        >
            <div className={cx('flex justify-center gap-1 font-semibold')}>
                <div> {t('Are_you_sure_you_want_to_delete_the_store')}</div>
                <div className={cx('text-red-500')}>[{data?.Name}]</div> ?
            </div>
        </Modal>
    );
};

export default ModalDeleteStore;

ModalDeleteStore.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    data: PropTypes.object,
};
