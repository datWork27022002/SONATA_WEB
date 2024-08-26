import React from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind();

function FormSetup() {
    return (
        <div className={cx('mt-4 flex justify-between gap-40')}>
            <div className={cx('flex items-center gap-x-2')}>
                <Button blue>Preview</Button>
                <span>* You need to save</span>
            </div>
            <div className={cx('flex gap-x-2')}>
                <Button red>Custom Button</Button>
                <Button orange>Default</Button>
                <Button green>Save</Button>
            </div>
        </div>
    );
}

export default FormSetup;
