import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';
import { payment, sumamry } from './constant';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

function DaySaleDetail() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'login' });

    return (
        <div className={cx('border-third-color mt-3 flex flex-col rounded border-2 border-solid', 'daySaleDetail')}>
            <div className={cx('bg-third-color py-1 pl-2 text-sm text-text-color-secondnary')}>01/08/2024</div>
            <div className={cx('flex justify-between px-3 text-sm font-thin text-[#6a6a6a]', 'max-lg:flex-col')}>
                <ul className={cx('flex-1 lg:pr-4')}>
                    {payment.map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'my-1 flex items-center justify-between py-1',
                                'border-b-text-color-third border-b-[1px] border-solid',
                            )}
                        >
                            <div className={cx('flex flex-1')}>
                                <IconCustom icon={value.icon} size={20} className={cx('text-third-color')} />
                                <span className={cx('ml-3')}>{value.type}</span>
                            </div>
                            <span className={cx('text-center xl:flex-1')}>{value.quantity}</span>
                            <span className={cx('flex-1 text-end')}>{value.revenue}</span>
                        </li>
                    ))}
                </ul>
                <ul className={cx('flex-1 lg:pl-4')}>
                    {sumamry.map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'my-1 flex items-center justify-between py-1',
                                'border-b-text-color-third border-b-[1px] border-solid',
                            )}
                        >
                            <div className={cx('flex flex-1')}>
                                <IconCustom icon={value.icon} size={20} className={cx('text-third-color')} />
                                <span className={cx('ml-3')}>{value.type}</span>
                            </div>
                            <span>{value.revenue}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DaySaleDetail;
