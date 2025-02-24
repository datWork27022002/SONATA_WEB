import classNames from 'classnames/bind';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PiMoneyWavyFill } from 'react-icons/pi';
import { FaFilePowerpoint, FaRegCommentDots } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6';
import { TbGiftCard } from 'react-icons/tb';
import { GrMoney } from 'react-icons/gr';
import { BiSolidDiscount } from 'react-icons/bi';
import { HiReceiptTax } from 'react-icons/hi';
import { GiMoneyStack } from 'react-icons/gi';

import styles from './Home.module.scss';
import IconCustom from '~/components/IconCustom';
import { formatNumberWithDots } from '~/utils/common';

const cx = classNames.bind(styles);

function DaySaleDetail({ revenue }) {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });
    const payment = useMemo(
        () => [
            { type: t('Cash'), icon: GiMoneyStack, quantity: 0, revenue: formatNumberWithDots(revenue?.cash) ?? 0 },
            {
                type: t('Credit_card'),
                icon: FaCreditCard,
                quantity: 0,
                revenue: formatNumberWithDots(revenue?.creditCard) ?? 0,
            },
            {
                type: t('Gift_card'),
                icon: TbGiftCard,
                quantity: 0,
                revenue: formatNumberWithDots(revenue?.otherGiftCertificates) ?? 0,
            },
            {
                type: t('Point'),
                icon: FaFilePowerpoint,
                quantity: 0,
                revenue: formatNumberWithDots(revenue?.points) ?? 0,
            },
            {
                type: t('Others'),
                icon: FaRegCommentDots,
                quantity: 0,
                revenue: formatNumberWithDots(revenue?.otherPayments) ?? 0,
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [revenue],
    );

    const sumary = useMemo(
        () => [
            { type: t('Total'), icon: GrMoney, revenue: formatNumberWithDots(revenue?.totalAmount) ?? 0 },
            { type: t('Discount'), icon: BiSolidDiscount, revenue: formatNumberWithDots(revenue?.discount) ?? 0 },
            { type: t('Tip'), icon: PiMoneyWavyFill, revenue: 0 },
            { type: t('Tax'), icon: HiReceiptTax, revenue: formatNumberWithDots(revenue?.taxAmount) ?? 0 },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [revenue],
    );

    return (
        <div className={cx('mt-3 flex flex-col rounded border-2 border-solid border-third-color', 'daySaleDetail')}>
            <div className={cx('bg-third-color py-1 pl-2 text-sm text-text-color-secondnary')}>{revenue?.date}</div>
            <div className={cx('flex justify-between px-3 text-sm font-thin text-[#6a6a6a]', 'max-lg:flex-col')}>
                <ul className={cx('flex-1 lg:pr-4')}>
                    {payment.map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'my-1 flex items-center justify-between py-1',
                                'border-b-[1px] border-solid border-b-text-color-third',
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
                    {sumary.map((value, index) => (
                        <li
                            key={index}
                            className={cx(
                                'my-1 flex items-center justify-between py-1',
                                'border-b-[1px] border-solid border-b-text-color-third',
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
