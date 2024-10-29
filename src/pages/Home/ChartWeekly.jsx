import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function ChartWeekly() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    const data = [
        { week: 1, revenue: 18000 },
        { week: 2, revenue: 28000 },
        { week: 3, revenue: 8000 },
        { week: 4, revenue: 20000 },
    ];

    return (
        <div className={cx('mt-3 flex flex-col rounded border-2 border-solid border-fourth-color', 'chartWeekly')}>
            <div className={cx('bg-fourth-color py-1 pl-2 text-sm text-text-color-secondnary')}>01/08/2024</div>
            <div className={cx('h-72 p-4')}>
                <Line
                    data={{
                        labels: data.map((value) => value.week),
                        datasets: [
                            {
                                label: t('Revenue'),
                                data: data.map((value) => value.revenue),
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
        </div>
    );
}

export default ChartWeekly;
