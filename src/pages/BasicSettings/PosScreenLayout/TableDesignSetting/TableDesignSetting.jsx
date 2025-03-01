import React from 'react';
import classNames from 'classnames/bind';

import styles from './TableDesignSetting.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TablesStatusBackgroundOptions from './Form/TablesStatusBackgroundOptions';
import TableOrderTimeOptions from './Form/TableOrderTimeOptions';
import TableMotionFunction from './Form/TableMotionFunction';
import TableScreenFunctionButton from './Form/TableScreenFunctionButton';
import TableRepresentationOptions from './Form/TableRepresentationOptions';
import config from '~/config';
import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function TableDesignSetting() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.TABLE_DESIGN_SETTING.Visiblename}>
            <div className={cx('flex justify-center text-[13px]')}>
                <div className={cx('max-lg:w-full')}>
                    <div className={cx('mb-4 flex gap-4 overflow-auto max-lg:flex-wrap')}>
                        <TablesStatusBackgroundOptions />
                        <TableOrderTimeOptions />
                    </div>
                    <div className={cx('mb-4 flex gap-4 overflow-auto max-lg:flex-wrap')}>
                        <TableMotionFunction />
                        <TableScreenFunctionButton />
                    </div>
                    <div className={cx('my-4 justify-center overflow-auto')}>
                        <TableRepresentationOptions />
                    </div>
                    <div className={cx('my-4 flex justify-end')}>
                        <Button green>Save</Button>
                    </div>
                </div>
            </div>
        </TitleLayout>
    );
}

export default TableDesignSetting;
