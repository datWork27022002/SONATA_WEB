import React, { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import { MdCancel } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';

import IconCustom from '~/components/IconCustom';
import ModalConfirm from '~/components/ModalConfirm';

const cx = classNames.bind();

const listGroupTable = ['Group 1', 'Group 2'];

function HeaderGroupTable({ groupTableSelected, setGroupTableSelected }) {
    const [modalAddGroupTable, setModalAddGroupTable] = useState(false);

    const changeGroupTable = (index) => {
        setGroupTableSelected(index);
    };

    const OpenModalAddGroupTable = () => {
        setModalAddGroupTable(true);
    };

    return (
        <Fragment>
            <ul className={cx('flex border-b border-solid border-b-gray-300')}>
                {listGroupTable.map((value, index) => (
                    <li
                        key={index}
                        className={cx(
                            'w-24 cursor-pointer border border-solid border-white bg-blue-200 px-2 py-1',
                            'flex items-center justify-between rounded hover:bg-blue-400',
                            groupTableSelected === index && '!bg-blue-400',
                        )}
                        onClick={() => changeGroupTable(index)}
                    >
                        {value}

                        <IconCustom icon={MdCancel} />
                    </li>
                ))}
                <li
                    className={cx(
                        'cursor-pointer rounded border border-solid border-white bg-blue-200 p-2',
                        'hover:bg-blue-500',
                    )}
                    onClick={OpenModalAddGroupTable}
                >
                    <IconCustom icon={IoMdAdd} />
                </li>
            </ul>
            <ModalConfirm
                isModal={modalAddGroupTable}
                setIsModal={setModalAddGroupTable}
                title={'Confirm'}
                content="Do you want to add a group?"
            />
        </Fragment>
    );
}

export default HeaderGroupTable;
