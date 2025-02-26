import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './KitchenMemo.module.scss';
import TitleLayout from '~/components/TitleLayout';
import KitchenMemoGroup from './KitchenMemoGroup';
import KitchenMemoList from './KitchenMemoList';
import config from '~/config';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listTypeForm = ['Kitchen Memo Group', 'Kitchen Memo List'];

function KitchenMemo() {
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.KITCHEN_MEMO.Visiblename}>
            <div className={cx('my-2 flex flex-wrap')}>
                {listTypeForm.map((value, index) => (
                    <Button
                        key={index}
                        onClick={() => changeTypeForm(value)}
                        className={cx(value === typeForm && '!bg-primary-color !text-text-color-secondnary')}
                        noBorderRadius
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <KitchenMemoGroup typeForm={typeForm} />
            <KitchenMemoList typeForm={typeForm} />
        </TitleLayout>
    );
}

export default KitchenMemo;
