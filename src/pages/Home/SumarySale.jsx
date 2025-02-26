import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { startOfWeek, startOfMonth } from 'date-fns';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa6';
import { TbCurrencyDogecoin } from 'react-icons/tb';

import styles from './Home.module.scss';
import IconCustom from '~/components/IconCustom';
import Loading from '~/components/Loading';
import { monthNames } from './constant';
import { getRevenueService } from '~/services/SaleBillService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { formatNumberWithDots } from '~/utils/helpers';

const cx = classNames.bind(styles);

function SummarySale() {
    const [revenues, setRevenues] = useState();
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    const { selectedStore } = useSelector((state) => state.dataStore);

    const callApi = useCallApiPrivate();

    const today = new Date();

    const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    const thisMonth = monthNames[today.getMonth()];

    const handleGetRevenue = async () => {
        const firstDayOfWeek = startOfWeek(today).toLocaleDateString();
        const firstDayOfMonth = startOfMonth(today).toLocaleDateString();
        const formattedToday = today.toLocaleDateString();
        const paramsOfDay = {
            cycle: 'Date',
            startDate: formattedToday,
            endDate: formattedToday,
        };
        const paramsOfWeek = {
            cycle: 'Week',
            startDate: firstDayOfWeek,
            endDate: formattedToday,
        };
        const paramsOfMonth = {
            cycle: 'Month',
            startDate: firstDayOfMonth,
            endDate: formattedToday,
        };
        setLoading(true);
        const [resOfDay, resOfWeek, resOfMonth] = await Promise.all([
            callApi(getRevenueService, paramsOfDay),
            callApi(getRevenueService, paramsOfWeek),
            callApi(getRevenueService, paramsOfMonth),
        ]);
        setLoading(false);
        if (!resOfDay || !resOfWeek || !resOfMonth) return;
        const revenues = {
            thisDay: resOfDay?.data[0],
            thisWeek: resOfWeek?.data[0],
            thisMonth: resOfMonth?.data[0],
        };
        setRevenues(revenues);
    };

    useEffect(() => {
        handleGetRevenue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedStore]);

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
            <div className={cx('flex flex-col items-center justify-center rounded-sm bg-secondnary-color px-4 py-2')}>
                <span className={cx('mb-1 text-text-color-secondnary')}>{thisMonth}</span>
                <span className={cx('text-4xl text-[#436600]')}>{day}</span>
            </div>
            {/* Today */}
            <CardSummarySale
                title={t('Today')}
                revenue={formatNumberWithDots(revenues?.thisDay?.totalAmount ?? 0)}
                quantity={revenues?.thisDay?.totalCustomer ?? 0}
            />

            {/* This week */}
            <CardSummarySale
                title={t('This_week')}
                revenue={formatNumberWithDots(revenues?.thisWeek?.totalAmount ?? 0)}
                quantity={revenues?.thisWeek?.totalCustomer ?? 0}
            />
            {/* This Month */}
            <CardSummarySale
                title={t('This_month')}
                revenue={formatNumberWithDots(revenues?.thisMonth?.totalAmount ?? 0)}
                quantity={revenues?.thisMonth?.totalCustomer ?? 0}
                noBorder
            />

            {loading && <Loading />}
        </div>
    );
}

export default SummarySale;
