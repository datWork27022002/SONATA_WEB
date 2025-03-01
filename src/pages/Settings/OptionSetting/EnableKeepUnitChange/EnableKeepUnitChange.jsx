import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const { listUseOrNotUse } = config.inputOptions;

function EnableKeepUnitChange() {
    const inputCommonProps = { radioInput: true, listOptions: listUseOrNotUse, labelClassName: cx('w-[200px]') };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.ENABLE_KEEP_UNIT_CHANGE.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Enable Keep Unit Change" {...inputCommonProps} />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default EnableKeepUnitChange;
