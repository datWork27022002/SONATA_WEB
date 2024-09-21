import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];
const listOrderQty = ['Include', 'Exclude'];

function OperationsManagement() {
    const headerFormStyles = cx('rounded bg-blue-500 py-1 text-center text-[14px] font-semibold text-white mb-2');
    const wrapperFormStyles = cx(
        'sm:w-[400px] rounded border border-solid border-primary-color p-2 bg-[#f3f5f7]',
        'max-sm:w-full ',
    );
    return (
        <TitleLayout title={config.nameMap.itemLevel3.OPERATIONS_MANAGEMENT.Visiblename}>
            <form className={cx('inline-block pb-[32px]')}>
                <div className={cx('mb-8 flex justify-start')}>
                    <Button teal>Save</Button>
                </div>
                {/* form */}
                <div className={cx('flex w-[900px] flex-wrap md:gap-8')}>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Category Operational Information</div>
                        <Input label="Category 1" radioInput listOptions={listYesOrNo} />
                        <Input label="Category 2" radioInput listOptions={listYesOrNo} />
                        <Input label="Category 3" radioInput listOptions={listYesOrNo} />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Present Option</div>
                        <Input label="Order Qty" radioInput listOptions={listOrderQty} />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Use Head office item settings</div>
                        <Input label="Use Head office item settings" radioInput listOptions={listYesOrNo} />
                        <span className={cx('text-red-500')}>
                            ※ 본사 품목설정 사용 옵션을 '예'로 변겅시 모든 품목의 매장별 설정값은 삭제됩니다.
                        </span>
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Order Options</div>
                        <Input
                            label="Confirmation of waiting for receipt before ordering"
                            radioInput
                            listOptions={listYesOrNo}
                            labelClassName={cx('w-[200px]')}
                        />
                        <span className={cx('italic')}>* Need to re-login after the setting changes.</span>
                    </div>
                </div>
            </form>
        </TitleLayout>
    );
}

export default OperationsManagement;
