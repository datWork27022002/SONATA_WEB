import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';

import styles from './Modal.module.scss';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

const Modal = ({ children, onClose = () => {}, visibleModal, setVisibleModal, title }) => {
    const handleClose = () => {
        onClose();
        setVisibleModal(!visibleModal);
    };
    return (
        <div
            className={cx(
                'bg-red fixed left-0 top-0 z-30 h-full w-full bg-[rgba(0,0,0,0.5)]',
                !visibleModal && 'invisible',
                'flex items-center justify-center',
            )}
        >
            <div
                className={cx(
                    'max-h-[90%] min-h-36 min-w-72  rounded-lg bg-background-color',
                    'border-[1px] border-solid border-primary-color',
                    !visibleModal && 'translate-y-[-60px] opacity-0',
                    'duration-400 transition',
                )}
            >
                <div
                    className={cx(
                        'flex h-10 items-center justify-between px-2 text-xl',
                        'border-b-[1px] border-solid border-b-primary-color',
                    )}
                >
                    <span className={cx('font-semibold text-primary-color')}> {title}</span>
                    <span className={cx('cursor-pointer rounded p-2 hover:bg-red-400')} onClick={handleClose}>
                        <IconCustom icon={IoMdClose} />
                    </span>
                </div>
                <div className={cx('p-4')}>{children}</div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    visibleModal: PropTypes.bool,
    setVisibleModal: PropTypes.func,
};

export default Modal;
