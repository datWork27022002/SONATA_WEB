import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listSearchType = ['All', '1', '2'];

function Amount() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Classification', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Vendor', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Remaining Balance', selector: (row) => row.groupCode, sortable: true, width: '150px' },
        { name: 'Unpaid', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.AMOUNT.Visiblename}>
            {/* form */}

            <div className={cx('mb-2 flex flex-wrap justify-between')}>
                <div className={cx('flex flex-wrap gap-5')}>
                    <div className={cx('flex items-center gap-2')}>
                        <Input paddingLabel boldLabel dropDown listOptions={listSearchType} />
                        <Input paddingLabel boldLabel iconRightInput={FaSearch} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button green>Save</Button>
                </div>
            </div>

            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[480px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default Amount;
