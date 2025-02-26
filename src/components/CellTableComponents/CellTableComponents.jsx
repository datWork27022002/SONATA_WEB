import React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { FaTrashCan, FaPenToSquare } from 'react-icons/fa6';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { IconColor } from '~/crema/constant/Color';

export const OperationCell = ({ data, handleDelete = () => {}, handleEdit = () => {}, isDelete, isEdit }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'Operation' });
    return (
        <div className={cx('flex items-center gap-4 text-base')}>
            {isEdit && (
                <Tippy content={t('edit')}>
                    <div
                        className={cx('cursor-pointer')}
                        style={{ color: IconColor.edit }}
                        onClick={() => handleEdit(data)}
                    >
                        <FaPenToSquare />
                    </div>
                </Tippy>
            )}

            {isDelete && (
                <Tippy content={t('delete')}>
                    <div
                        className={cx('cursor-pointer')}
                        style={{ color: IconColor.delete }}
                        onClick={() => handleDelete(data)}
                    >
                        <FaTrashCan />
                    </div>
                </Tippy>
            )}
        </div>
    );
};

OperationCell.propTypes = {
    data: PropTypes.object,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    isDelete: PropTypes.bool,
    isEdit: PropTypes.bool,
};
