import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listMonth = [
    '1 Months',
    '2 Months',
    '3 Months',
    '4 Months',
    '5 Months',
    '6 Months',
    '7 Months',
    '8 Months',
    '9 Months',
    '10 Months',
    '11 Months',
    '12 Months',
];

function FormMembershipList() {
    return (
        <Fragment>
            <div className={cx('flex flex-wrap justify-between md:gap-12')}>
                <div className={cx('flex-1 pr-12')}>
                    <Input label="Customer Search" boldLabel />
                    <Input label="Category 2" boldLabel dropDown />
                    <div className={'flex items-center gap-2'}>
                        <Input label="Count Visited" boldLabel widthInput="100px" />~
                        <Input widthInput="100px" />
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <Input label="Date Visited" boldLabel widthInput="100px" type="date" />~
                        <Input widthInput="100px" type="date" />
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <Input label="Anniversary (Month)" boldLabel dropDown listOptions={listMonth} />~
                        <Input dropDown listOptions={listMonth} />
                    </div>
                </div>
                <div className={cx('flex-1 pr-12')}>
                    <Input label="Member Group" boldLabel dropDown />
                    <Input label="Category 3" boldLabel dropDown />
                    <div className={'flex items-center gap-2'}>
                        <Input label="Date Added" boldLabel widthInput="100px" type="date" />~
                        <Input widthInput="100px" type="date" />
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <Input label="Anniversary (Date)" boldLabel widthInput="100px" type="date" />~
                        <Input widthInput="100px" type="date" />
                    </div>
                    <Input label="Number of displays" boldLabel dropDown />
                </div>
                <div className={cx('flex-1 pr-12')}>
                    <Input label="Category 1" boldLabel dropDown />
                    <div className={'flex items-center gap-2'}>
                        <Input label="Point Balance" boldLabel widthInput="100px" />~
                        <Input widthInput="100px" />
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <Input label="Birthday (Date)" boldLabel widthInput="100px" type="date" />~
                        <Input widthInput="100px" type="date" />
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <Input label="Birthday (Month)" boldLabel dropDown listOptions={listMonth} />~
                        <Input dropDown listOptions={listMonth} />
                    </div>
                </div>
            </div>
            <div className={cx('mb-4 flex items-center justify-end gap-4')}>
                <Button blue>Search</Button>
                <Button orange>Point</Button>
                <Button red>Bond Deposit</Button>
                <Button teal>Export Excel</Button>
            </div>
        </Fragment>
    );
}

export default FormMembershipList;
