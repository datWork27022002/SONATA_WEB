import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listFont = ['1', '2'];
const listScreenResolution = ['Fulled Screen', 'Fixed Screen'];
const listYesOrNo = ['YES', 'NO'];
const listScreenOption = ['Show Order State', 'Hide Order State', 'Show Pager Info'];
const listFontSize = ['24', '32', '64', '100'];
const listLocation = ['Top', 'Bottom', 'Left', 'Right'];
const listWide = ['1', '2', '3', '4'];
const listLong = ['1', '2', '3', '4'];

function PosDisplaySetting() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.POS_DISPLAY_SETTING.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[500px]')}>
                        <Input
                            label="Screen Resolution"
                            radioInput
                            listOptions={listScreenResolution}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Screen Change"
                            radioInput
                            listOptions={listYesOrNo}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Second display customer number input"
                            radioInput
                            listOptions={listYesOrNo}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Second display AlimTalk number input"
                            radioInput
                            listOptions={listYesOrNo}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input label="Refresh Image Every" required labelClassName={cx('w-[150px]')} />
                        <Input
                            label="Screen Option"
                            radioInput
                            listOptions={listScreenOption}
                            labelClassName={cx('w-[150px]')}
                        />
                        <div
                            className={cx(
                                'h-16 rounded border border-solid border-[#ccc] p-2',
                                'flex items-center justify-center',
                            )}
                        >
                            Sample
                        </div>
                        <Input label="Font" dropDown listOptions={listFont} labelClassName={cx('w-[150px]')} />
                        <Input
                            label="FontSize"
                            radioInput
                            listOptions={listFontSize}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Location"
                            radioInput
                            listOptions={listLocation}
                            labelClassName={cx('w-[150px]')}
                        />
                        <div className={cx('flex gap-4')}>
                            <Input label="Count" dropDown listOptions={listWide} labelClassName={cx('w-[150px]')} />
                            <Input dropDown listOptions={listLong} />
                        </div>
                    </div>
                </div>
                <div className={cx('my-8 flex justify-end gap-4')}>
                    <Button orange>Clear</Button>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default PosDisplaySetting;
