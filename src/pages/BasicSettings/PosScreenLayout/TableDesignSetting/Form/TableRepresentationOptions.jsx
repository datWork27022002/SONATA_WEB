import classNames from 'classnames/bind';

import WrapperForm from './WrapperForm';
import RadioInput from '~/components/Input/RadioInput';
import Dropdown from '~/components/Input/DropDown';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];
const listFontFamily = [
    'Arial ',
    'Verdana',
    'Tahoma ',
    'Trebuchet ',
    'Times New Roman',
    'Georgia ',
    'Garamond ',
    'Courier New ',
    'Brush Script MT',
];

const listFontStyle = ['Regular', 'Bold'];

function TableRepresentationOptions() {
    const classes150 = cx('w-[150px] flex justify-center items-center gap-x-1');
    const classes100 = cx('w-[100px] flex justify-center items-center gap-x-1');

    return (
        <WrapperForm title="Table representation options" className={cx('max-lg:w-[1000px] lg:w-full')}>
            <div className={cx('flex gap-2 bg-gray-100 px-2 py-1 text-center')}>
                <div className={classes150}></div>
                <div className={classes150}>Use</div>
                <div className={classes100}>Fixed</div>
                <div className={classes150}>Font Name</div>
                <div className={classes100}>Size</div>
                <div className={classes100}>Font Color</div>
                <div className={classes150}>Font</div>
            </div>
            <div className={cx('p-2')}>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Table Name</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>In Time</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Ordered menu</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Employee</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Customer Count</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Total amount</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Customer Name</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes150}>Items elapsed time</div>
                    <div className={classes150}>
                        <RadioInput listOptions={listYesNo} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes150}>
                        <Dropdown listOptions={listFontFamily} />
                    </div>
                    <div className={classes100}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                    <div className={classes100}>
                        <input type="color" className={cx('w-20')} />
                    </div>
                    <div className={classes150}>
                        <RadioInput listOptions={listFontStyle} />
                    </div>
                </div>
            </div>
        </WrapperForm>
    );
}

export default TableRepresentationOptions;
