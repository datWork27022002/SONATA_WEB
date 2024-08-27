import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listHide = ['YES', 'NO'];

function CustomerGroup() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [hideList, setHideList] = useState(listHide[0]);

    const dataTable = [{ customerGroup: 'General' }, { customerGroup: 'Gold' }, { customerGroup: 'Vip' }];
    const columns = [{ name: 'Customer Group', selector: (row) => row.customerGroup, sortable: true }];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.CUSTOMER_GROUP.Visiblename}>
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
                    <span className={cx('font-semibold text-red-600')}>
                        ※ It applies as a member group of our headquarters.
                    </span>
                    <Input label="Customer Group" />
                    <Input
                        label="Hide"
                        radioInput
                        listOptions={listHide}
                        seletedValue={hideList}
                        setSeletedValue={setHideList}
                    />
                    <Input label="Edited By" disabled />
                    <div className={cx('mt-8 flex gap-4')}>
                        <Button orange>New</Button>
                        <Button teal>Save</Button>
                    </div>
                </div>
                <div className={cx('flex-1')}></div>
            </div>
        </TitleLayout>
    );
}

export default CustomerGroup;
