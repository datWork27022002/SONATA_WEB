import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FaQuestion } from 'react-icons/fa';

import Modal from '../Modal/Modal';
import Button from '../Button';

const cx = classNames.bind();

const ModalConfirm = ({ content, onClose = () => {}, onSave = () => {}, isModal, setIsModal, title }) => {
    const handleClose = () => {
        setIsModal(false);
        onClose();
    };

    const handleSave = () => {
        setIsModal(false);
        onSave();
    };

    const CustomTitle = () => {
        return (
            <div
                className={cx(
                    'h-full w-full font-semibold text-text-color-secondnary',
                    'flex items-center gap-x-2 pl-2',
                    title === 'Confirm' && 'bg-green-500',
                )}
            >
                {title === 'Confirm' && <FaQuestion />}
                {title}
            </div>
        );
    };
    return (
        <Modal onClose={onClose} visibleModal={isModal} setVisibleModal={setIsModal} CustomTitle={CustomTitle}>
            <div className={cx('flex min-h-28 min-w-[400px] items-center justify-center text-lg font-semibold')}>
                {content}
            </div>
            <div className={cx('mt-4 flex justify-end gap-4')}>
                <Button green onClick={handleSave}>
                    Yes
                </Button>
                <Button red onClick={handleClose}>
                    No
                </Button>
            </div>
        </Modal>
    );
};

ModalConfirm.propTypes = {
    content: PropTypes.string,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    isModal: PropTypes.bool,
    setIsModal: PropTypes.func,
    title: PropTypes.string,
};

export default ModalConfirm;
