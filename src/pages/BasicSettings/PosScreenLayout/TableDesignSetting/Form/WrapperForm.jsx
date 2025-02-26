import React from 'react';
import classNames from 'classnames/bind';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

function WrapperForm({ title, children, className }) {
    return (
        <div className={cx('flex w-[500px] flex-col', { [className]: className })}>
            <div
                className={cx(
                    'flex items-center justify-center rounded bg-primary-color py-1 text-[13px] text-text-color-secondnary',
                )}
            >
                {title}
            </div>
            <div className={cx('mt-1 flex-1 rounded border border-solid border-gray-300', '')}>{children}</div>
        </div>
    );
}

export default WrapperForm;
