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

    const [selected, setSelected] = useState(0);

    const { language } = config;

    const handleChangeLauage = (index, value) => {
        i18n.changeLanguage(value);
        setSelected(index);
    };

    return (
        <div>
            {!shrinkSidebar && (
                <ul className={cx('w-sidebar fixed bottom-2 z-10 flex justify-between px-2 max-md:hidden')}>
                    {Object.values(language).map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'rounded-lg border-[1px] border-solid border-primary-color uppercase text-primary-color',
                                'mr-[0.5px] px-2 py-1 text-[12px] font-bold',
                                'cursor-pointer hover:bg-primary-color hover:text-white',
                                'transition-all duration-300 ease-in-out',
                                selected === index && 'bg-primary-color text-white',
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
