import React from 'react';
import classNames from 'classnames/bind';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';

import IconCustom from '~/components/IconCustom';

const cx = classNames.bind();

function CardMenu({ children, className, remove, handleDelete = () => {}, id, disabled = false, ...props }) {
    const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

    const handleClickDelete = (e) => {
        handleDelete();
    };

    const style = {
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            className={cx(
                'relative h-[78px] w-[93px] cursor-pointer rounded text-center',
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
            {remove && (
                <div
                    className={cx('absolute right-1 top-1 text-white hover:text-text-color')}
                    onClick={handleClickDelete}
                    onPointerDown={(e) => {
                        // Prevent drag and drop events from starting when this button is pressed
                        e.stopPropagation();
                    }}
                >
                    <IconCustom icon={IoMdClose} />
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
