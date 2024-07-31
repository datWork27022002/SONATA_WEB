import classNames from 'classnames/bind';
import { useState } from 'react';
import { IoGrid } from 'react-icons/io5';
import Tippy from '@tippyjs/react/headless';

import IconCustom from '~/components/IconCustom';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const listColor = ['#4d9ce9', '#19bd9a', '#96c92c', '#6cacec', '#f3764a'];

function ChooseColor() {
    const [visibleColor, setVisibleColor] = useState(false);

    const openPopupChooseColor = () => {
        setVisibleColor(!visibleColor);
    };

    const handleChooseColor = (item) => {
        document.documentElement.style.setProperty('--primary', item);
        openPopupChooseColor();
    };

    const RenderChooseColor = () => (
        <div
            className={cx(
                ' border-primary-color text-text-color border-solid border-[1px] flex mt-2 rounded overflow-hidden',
            )}
        >
            {listColor.map((value, index) => {
                const stylesColor = { backgroundColor: value };
                return (
                    <div
                        key={index}
                        style={stylesColor}
                        className={cx(`h-8 w-8  m-1`)}
                        onClick={() => handleChooseColor(value)}
                    ></div>
                );
            })}
        </div>
    );

    return (
        <div onClick={openPopupChooseColor} className={cx('item-card', 'card-right')}>
            <Tippy render={RenderChooseColor} interactive visible={visibleColor} onClickOutside={openPopupChooseColor}>
                <div>
                    <IconCustom icon={IoGrid} />
                </div>
            </Tippy>
        </div>
    );
}

export default ChooseColor;
