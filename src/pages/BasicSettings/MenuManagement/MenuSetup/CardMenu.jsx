import React from 'react';
import classNames from 'classnames/bind';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

import styles from './MenuSetup.module.scss';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

function CardMenu({ children, className, edit, check, id, ...props }) {
    const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            className={cx(
                'relative h-16 w-28 cursor-pointer rounded bg-[#ececec] text-center',
                'border border-solid border-[#c4c4c6]',
                'flex items-center justify-center hover:opacity-80',
                { [className]: className },
            )}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            {...props}
        >
            {children}
            {edit && (
                <IconCustom
                    icon={MdEdit}
                    className={cx('absolute left-1 top-1 text-gray-500 hover:text-primary-color')}
                />
            )}
            {check && <IconCustom icon={FaCheck} className={cx('absolute right-1 top-1 text-primary-color')} />}
        </div>
    );
}

CardMenu.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    edit: PropTypes.bool,
    check: PropTypes.bool,
    id: PropTypes.number,
};

export default CardMenu;
