import classNames from 'classnames/bind';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Tippy from '@tippyjs/react/headless';

import styles from './Settings.module.scss';
import IconCustom from '~/components/IconCustom';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const listPos = ['POS1', 'POS2', 'POS3', 'POS4', 'POS5', 'POS6'];

function ChoosePos() {
    const [POS, setPos] = useState(listPos[0]);
    const [visiblePOS, setVisiblePOS] = useState(false);

    const openPopupChoosePOS = () => {
        setVisiblePOS(!visiblePOS);
    };

    const handleClickPOS = (item) => {
        setPos(item);
        openPopupChoosePOS();
    };

    const RenderChoosePOS = () => (
        <div
            className={cx(
                'min-w-[140px] overflow-hidden rounded bg-background-color text-text-color',
                'absolute top-[-10px] border-[1px] border-solid border-primary-color',
                'max-h-32 overflow-y-auto',
            )}
        >
            <ul className={''}>
                {listPos.map((item, index) => (
                    <li
                        key={index}
                        className={cx('cursor-pointer px-2 py-1 hover:bg-primary-color')}
                        onClick={() => handleClickPOS(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className={cx('mb-4 ml-4 mt-5 flex items-center text-[#2e2e2e]')}>
            <span>POS Name</span>
            <Tippy
                render={RenderChoosePOS}
                interactive
                visible={visiblePOS}
                onClickOutside={openPopupChoosePOS}
                placement="bottom-start"
            >
                <div
                    onClick={openPopupChoosePOS}
                    className={cx(
                        'ml-2 flex w-36 justify-between p-1',
                        'border-[1px] border-solid border-primary-color',
                    )}
                >
                    <span className={cx('ml-1')}> {POS}</span>
                    <IconCustom icon={IoIosArrowDown} />
                </div>
            </Tippy>
        </div>
    );
}

export default ChoosePos;
