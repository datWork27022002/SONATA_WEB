import classNames from 'classnames/bind';

import WrapperForm from './WrapperForm';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

function TablesStatusBackgroundOptions() {
    const classes = cx('w-[150px] flex-none flex justify-center items-center gap-x-1');
    return (
        <WrapperForm title="Tables status background options">
            <div className={cx('flex gap-2 bg-gray-100 px-2 py-1 text-center')}>
                <div className={classes}></div>
                <div className={classes}>Font Color</div>
                <div className={classes}></div>
            </div>
            <div className={cx('p-2')}>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes}>Order status</div>
                    <input className={classes} type="color" />
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes}>Serving completed</div>
                    <input className={classes} type="color" />
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes}>Tender completed</div>
                    <input className={classes} type="color" />
                </div>
            </div>
        </WrapperForm>
    );
}

export default TablesStatusBackgroundOptions;
