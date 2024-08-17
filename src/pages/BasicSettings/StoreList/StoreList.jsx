import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa';

import styles from './StoreList.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listGroupName = ['All', 'HQ'];
const listStoreType = ['All', 'Direct', 'Franchise'];

function StoreList() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [groupName, setGroupName] = useState('');
    const [storeType, setStoreType] = useState('');

    const dataTable = [{ groupCode: '1000', groupName: 'HQ' }];

    const columns = [
        { name: 'No.', selector: (row) => row.groupCode, sortable: true, width: '60px' },
        { name: 'Type', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Group Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Store Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Company Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Business registration number', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'CEO Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Representative mobile phone', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Representative email', selector: (row) => row.groupName, sortable: true, width: '250px' },
        { name: 'Phone Number', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Address', selector: (row) => row.groupName, sortable: true, width: '300px' },
        { name: 'City / State', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'ZIP Code', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.STORE_LIST.Visiblename}>
            {/* form */}
            <div className={cx('flex justify-between')}>
                <div className={cx('flex')}>
                    <Input
                        label="Type"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        dropDown
                        listOptions={listGroupName}
                        seletedValue={groupName}
                        setSeletedValue={setGroupName}
                    />
                    <Input
                        label="Group Name"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        dropDown
                        listOptions={listStoreType}
                        seletedValue={storeType}
                        setSeletedValue={setStoreType}
                    />
                    <Input
                        label="Store Name"
                        paddingLabel
                        boldLabel
                        className={cx('mr-5')}
                        widthInput={'100px'}
                        iconRightInput={FaSearch}
                    />
                    <Input label="Phone Number" paddingLabel boldLabel className={cx('mr-5')} widthInput={'164px'} />
                </div>
                <div className={cx('flex items-center')}>
                    <Button className={cx('mr-4')} blue>
                        Search
                    </Button>
                    <Button teal>Export Excel</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[500px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default StoreList;
