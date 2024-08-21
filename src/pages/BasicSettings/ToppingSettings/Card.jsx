import React from 'react';
import classNames from 'classnames/bind';
import { IoMdAdd } from 'react-icons/io';
import { GrEdit } from 'react-icons/gr';
import { FaRegTrashAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IconCustom from '~/components/IconCustom';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const Card = ({ className, children, handeClickItem }) => {
    return (
        <div
            className={cx(
                'relative flex cursor-pointer items-center rounded px-2 hover:opacity-80',
                'justify-center border border-solid border-gray-300 text-sm font-semibold',
                {
                    [className]: className,
                },
            )}
            onClick={handeClickItem}
        >
            {children}
        </div>
    );
};

export const CardPagination = ({ className }) => {
    return (
        <Card className={className}>
            <div className={cx('flex w-full justify-between')}>
                <IconCustom icon={FaChevronLeft} />
                <span>1</span>
                <IconCustom icon={FaChevronRight} />
            </div>
        </Card>
    );
};

export const CardModifier = ({ className, title, handeClickItem }) => {
    return (
        <Card className={className} handeClickItem={handeClickItem}>
            {title ? title : <IconCustom icon={IoMdAdd} size={24} />}
            {title && <IconCustom className={cx('absolute left-1 top-1 hover:text-primary-color')} icon={GrEdit} />}
            {title && (
                <IconCustom className={cx('absolute bottom-1 left-1 hover:text-primary-color')} icon={FaRegTrashAlt} />
            )}
        </Card>
    );
};
