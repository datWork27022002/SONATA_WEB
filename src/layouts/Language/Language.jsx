import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import styles from './Language.module.scss';
import config from '~/config';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Language() {
    // eslint-disable-next-line no-unused-vars
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'login' });
    const { shrinkSidebar } = useSelector((state) => state.theme);

    const [selected, setSelected] = useState(-1);

    const { language } = config;

    const handleChangeLauage = (index, value) => {
        i18n.changeLanguage(value);
        setSelected(index);
    };

    return (
        <div>
            {!shrinkSidebar && (
                <ul className={cx('absolute bottom-2 left-1 z-10 flex max-md:hidden')}>
                    {Object.values(language).map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'border-[1px] border-solid border-primary-color text-white',
                                'mr-[0.5px] px-[2px] text-[10px]',
                                'cursor-pointer hover:bg-primary-color',
                                selected === index && 'bg-primary-color',
                            )}
                            onClick={() => handleChangeLauage(index, value)}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Language;
