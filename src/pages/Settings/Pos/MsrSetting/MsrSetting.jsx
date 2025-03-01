import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Switch from '~/components/Switch';

const cx = classNames;

function MsrSetting() {
    const subFormStyles = cx('my-1 flex items-center gap-[10px] text-[13px]');
    return (
        <TitleLayout title={config.nameMap.itemLevel3.MSR_SETTING.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="MSR Model" dropDown listOptions={[]} />
                        <div className={subFormStyles}>
                            <label className={cx('w-24')}>Track Selection</label>
                            <div className={cx('flex w-[90px] items-center gap-1')}>
                                <span>Track1 </span>
                                <Switch />
                            </div>
                            <div className={cx('flex w-[90px] items-center gap-1')}>
                                <span>Track2 </span>
                                <Switch />
                            </div>
                            <div className={cx('flex w-[90px] items-center gap-1')}>
                                <span>Track3 </span>
                                <Switch />
                            </div>
                        </div>
                        <div className={subFormStyles}>
                            <label className={cx('w-24')}>Initial String</label>
                            <Input widthInput={'90px'} />
                            <Input widthInput={'90px'} />
                            <Input widthInput={'90px'} />
                        </div>
                        <div className={subFormStyles}>
                            <label className={cx('w-24')}>Ending String</label>
                            <Input widthInput={'90px'} />
                            <Input widthInput={'90px'} />
                            <Input widthInput={'90px'} />
                        </div>
                        <div className={subFormStyles}>
                            <label className={cx('w-24')}>Field Seperator</label>
                            <Input widthInput={'90px'} />
                            <Input widthInput={'90px'} />
                            <Input widthInput={'90px'} />
                        </div>
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default MsrSetting;
