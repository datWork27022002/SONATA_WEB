import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';

import styles from './Modal.module.scss';
import IconCustom from '~/components/IconCustom';
import Button from '../Button';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

const Modal = ({
    children,
    onClose = () => {},
    onConfirm = () => {},
    visibleModal,
    setVisibleModal,
    title,
    CustomTitle,
    className,
    btnConfirmClassName,
    confirmText,
}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Modal' });

    const handleClose = () => {
        onClose();
        setVisibleModal(!visibleModal);
    };
    if (!visibleModal) return <></>;
    return (
        <div
            className={cx(
                'inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 px-4',
                'fixed left-0 top-0 h-screen w-screen',
            )}
        >
            <div
                className={cx('min-w-[300px] rounded-lg bg-white p-4 shadow-lg', 'flex flex-col justify-between', {
                    [className]: className,
                })}
            >
                <div
                    className={cx(
                        'flex h-10 items-center justify-between text-xl',
                        'border-b-[1px] border-solid border-b-primary-color',
                    )}
                >
                    {title && (
                        <Fragment>
                            <span className={cx('font-semibold text-primary-color')}> {title}</span>{' '}
                            <span className={cx('cursor-pointer rounded p-2 hover:bg-red-400')} onClick={handleClose}>
                                <IconCustom icon={IoMdClose} />
                            </span>
                        </Fragment>
                    )}
                    {CustomTitle && <CustomTitle />}
                </div>
                <div className={cx('max-h-[85vh] flex-1 overflow-scroll py-4')}>{children}</div>
                <div className="flex justify-end gap-4">
                    <Button className="" onClick={handleClose} type="button" red>
                        {t('cancel')}
                    </Button>
                    <Button
                        onClick={() => {
                            onConfirm();
                            onClose(); // Đóng modal sau khi xác nhận
                        }}
                        type="button"
                        green
                        className={cx({ [btnConfirmClassName]: btnConfirmClassName })}
                    >
                        {confirmText || t('apply')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    visibleModal: PropTypes.bool,
    setVisibleModal: PropTypes.func,
    title: PropTypes.string,
    CustomTitle: PropTypes.func,
    className: PropTypes.string,
    btnConfirmClassName: PropTypes.string,
    confirmText: PropTypes.string,
};

export default Modal;
