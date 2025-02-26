import React from 'react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

function UploadVideo({ typeForm }) {
    return (
        <div
            className={cx(
                'overflow-hidden transition-all duration-300',
                typeForm === 'Video' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('my-4 flex flex-wrap gap-4')}>
                <div className={cx('mb-4 rounded bg-gray-100 p-2')}>
                    <div className={cx('my-2 flex items-center justify-between')}>
                        <span>{}</span>
                        <div className={cx('flex gap-2')}>
                            <Button border>Upload</Button>
                            <Button red>Delete</Button>
                        </div>
                    </div>
                    <img
                        src={''}
                        alt=""
                        className={cx('h-[200px] w-[500px] overflow-hidden rounded bg-white object-fill')}
                    />
                </div>
            </div>{' '}
        </div>
    );
}

export default UploadVideo;
