import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];
const listAnnouncementType = ['General Anoucement', 'Cost Infomation', 'Event Notice'];
const listTargetType = ['All', 'Store', 'Group'];

function FormAnnouncement() {
    return (
        <Fragment>
            <div className={cx('flex-1')}>
                <Input label="Announcement Type" dropDown required listOptions={listAnnouncementType} />
                <Input label="Title" required />
                <Input label="Content" required textarea />
                <Input label="Announcement Posting Date" required type="date" />
                <Input label="Announcement End Date" required type="date" />
                <Input label="External URL linkage" radioInput listOptions={listYesNo} />
                <Input label="Urgent" radioInput listOptions={listYesNo} />
                <Input label="Hide" radioInput listOptions={listYesNo} />
            </div>
            <div className={cx('flex-1')}>
                <Input label="Target Type" dropDown listOptions={listTargetType} />
                <Input label="External URL 1" />
                <Input label="External URL 2" />
                <Input label="External URL 3" />
                <div className={cx('mt-8 flex gap-4')}>
                    <Button orange>New</Button>
                    <Button teal>Save</Button>
                </div>
            </div>
        </Fragment>
    );
}

export default FormAnnouncement;
