import React from 'react';
import classNames from 'classnames/bind';
import { GrEdit } from 'react-icons/gr';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const CardTable = () => {
    return (
        <div
            className={cx(
                'relative h-[118px] w-[168px] rounded',
                'border border-dashed border-primary-color',
                'flex items-center justify-center',
            )}
        >
            <img
                src={require('~/assets/img/TableLocatioManager/square_maple_6.png')}
                alt=""
                className={cx('h-[60%]')}
            />
            <GrEdit className={cx('absolute left-1 top-1 cursor-pointer hover:text-primary-color')} size={16} />
            <input
                type="checkbox"
                className={cx('absolute right-1 top-1 h-4 w-4 cursor-pointer border-primary-color')}
            />
        </div>
    );
};

const arrGrid = Array.from({ length: 20 }, (_, index) => index + 1);

function DisplayTable() {
    return (
        <div className={cx('my-2 rounded border border-solid border-gray-300 bg-gray-100 p-2')}>
            <div className={cx('mb-2 grid grid-cols-5 grid-rows-4 gap-2')}>
                {arrGrid.map((_, index) => (
                    <CardTable key={index} />
                ))}
            </div>
            <span className={cx('text-[13px]')}>
                *After adding(create table, '+' button) and deleting ('-' button) tables, please click save to reflect.
            </span>
        </div>
    );
}

export default DisplayTable;
