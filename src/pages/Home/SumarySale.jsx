import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa6';
import { TbCurrencyDogecoin } from 'react-icons/tb';

import styles from './Home.module.scss';
import IconCustom from '~/components/IconCustom';
import { monthNames } from './constant';

const cx = classNames.bind(styles);

function SummarySale() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    const today = new Date();

    const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    const thisMonth = monthNames[today.getMonth()];

    const CardSummarySale = ({ title, revenue, quantity, noBorder }) => (
        <div
            className={cx(
                'flex flex-1 flex-col p-1',
                !noBorder && 'border-dotted border-r-secondnary-color sm:border-r-2',
            )}
        >
            <div className={cx('rounded bg-secondnary-color px-2 py-[0.5px] text-text-color-secondnary')}>{title}</div>
            <div className={cx('flex min-h-12 flex-1 items-center justify-between text-xl text-text-color-third')}>
                <div className={cx('ml-2 flex')}>
                    <IconCustom icon={TbCurrencyDogecoin} />
                    <div className={cx('ml-1')}>{revenue}</div>
                </div>
                <div className={cx('mr-2 flex items-center')}>
                    <IconCustom icon={FaUser} className={cx('text-secondnary-color')} />
                    <div className={cx('ml-1')}>{quantity}</div>
                </div>
            </div>
        </div>
    );

    return (
        <div
            className={cx('flex rounded border-2 border-solid border-secondnary-color max-sm:flex-col', 'summarySale')}
        >
            <div className={cx('flex flex-col items-center justify-center rounded bg-secondnary-color px-4 py-2')}>
                <span className={cx('mb-1 text-text-color-secondnary')}>{thisMonth}</span>
                <span className={cx('text-4xl text-[#436600]')}>{day}</span>
            </div>
            {/* Today */}
            <CardSummarySale title={t('Today')} revenue={'0,00'} quantity={2} />

            {/* This week */}
            <CardSummarySale title={t('This_week')} revenue={'0,00'} quantity={0} />
            {/* This Month */}
            <CardSummarySale title={t('This_month')} revenue={'0,00'} quantity={2} noBorder />
        </div>
    );
}

export default SummarySale;
