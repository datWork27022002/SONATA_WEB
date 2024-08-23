import React from 'react';
import classNames from 'classnames/bind';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';

import IconCustom from '~/components/IconCustom';

const cx = classNames.bind();

function CardMenu({ children, className, edit, handleEdit = () => {}, id, disabled = false, ...props }) {
    const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

    const handleClickEdit = (e) => {
        handleEdit();
    };

    const style = {
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            className={cx(
                'relative cursor-pointer rounded bg-[#ececec] text-center',
                'border border-solid border-[#c4c4c6]',
                'flex items-center justify-center',
                { [className]: className },
            )}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...(!disabled && listeners)}
            {...props}
        >
            {children}
            {edit && (
                <div
                    className={cx('absolute left-1 top-1 text-white hover:text-text-color')}
                    onClick={handleClickEdit}
                    onPointerDown={(e) => {
                        // Prevent drag and drop events from starting when this button is pressed
                        e.stopPropagation();
                    }}
                >
                    <IconCustom icon={MdEdit} size={20} />
                </div>
            )}
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
