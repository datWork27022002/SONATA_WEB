import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './GroupManagement.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function GroupManagement() {
    const listHide = ['YES', 'NO'];
    const [selectedRow, setSelectedRow] = useState(null);
    const [hideList, setHideList] = useState(listHide[0]);

    const dataTable = [{ groupCode: '1000', groupName: 'HQ' }];

    const columns = [
        {
            name: 'Group Code',
            selector: (row) => row.groupCode,
            sortable: true,
        },
        {
            name: 'Group Name',
            selector: (row) => row.groupName,
            sortable: true,
        },
    ];

    const data =
        dataTable.length !== 0
            ? dataTable.map((value, index) => ({ ...value, id: index + 1 }))
            : [{ id: 1, groupCode: '', groupName: '' }];

    return (
        <TitleLayout title={config.nameMap.itemLevel3.GROUP_MANAGEMENT.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[45%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    <TableCustom
                        className={cx('mb-4 h-[500px]')}
                        columns={columns}
                        data={data}
                        showHideList
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <Input label="Group Name" required />
                    <Input
                        label="Hide"
                        radioInput
                        listOptions={listHide}
                        seletedValue={hideList}
                        setSeletedValue={setHideList}
                    />
                    <div className={cx('mt-8 flex')}>
                        <Button orange className={cx('mr-4')}>
                            New
                        </Button>
                        <Button teal>Save</Button>
                    </div>
                </div>
                <div className={cx('flex-1')}></div>
            </div>
        </TitleLayout>
    );
}

export default GroupManagement;
