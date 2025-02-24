import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { startOfMonth } from 'date-fns';
import { useSelector } from 'react-redux';

import styles from './Home.module.scss';
import Loading from '~/components/Loading';
import { getRevenueService } from '~/services/SaleBillService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';

const cx = classNames.bind(styles);

function ChartWeekly() {
    const [revenues, setRevenues] = useState([]);
    const [loading, setLoading] = useState(false);

    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    const { selectedStore } = useSelector((state) => state.dataStore);

    const callApi = useCallApiPrivate();

    const handleGetRevenue = async () => {
        const today = new Date();
        const firstDayOfMonth = startOfMonth(today).toLocaleDateString();
        const formattedToday = today.toLocaleDateString();
        const params = {
            cycle: 'Week',
            startDate: firstDayOfMonth,
            endDate: formattedToday,
        };

        setLoading(true);
        const res = await callApi(getRevenueService, params);
        setLoading(false);
        if (!res) return;
        const result = res?.data.map((value) => ({
            week: value?.week - res?.data[0]?.week + 1,
            revenue: value?.totalAmount,
        }));

        setRevenues(result);
    };

    useEffect(() => {
        handleGetRevenue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedStore]);

    return (
        <div className={cx('mt-3 flex flex-col rounded border-2 border-solid border-fourth-color', 'chartWeekly')}>
            <div className={cx('bg-fourth-color py-1 pl-2 text-sm text-text-color-secondnary')}>01/08/2024</div>
            <div className={cx('h-72 p-4')}>
                <Line
                    data={{
                        labels: revenues.map((value) => value.week),
                        datasets: [
                            {
                                label: t('Revenue'),
                                data: revenues.map((value) => value.revenue),
                                backgroundColor: '#f3764a',
                                borderColor: '#f3764a',
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false, // Cho phép bạn tùy chỉnh chiều rộng và chiều cao
                    }}
                />
            </div>

            {loading && <Loading />}
        </div>
    );
}

export default ChartWeekly;
