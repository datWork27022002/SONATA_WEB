import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';
import SummarySale from './SumarySale';
import DaySaleDetail from './DaySaleDetail';
import ChartWeekly from './ChartWeekly';
import TableMonthlyGross from './TableMonthlyGross';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Home() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'login' });

    return (
        <div className={cx('flex flex-col p-2')}>
            {/* Sumary sale */}
            <SummarySale />
            <div className={cx('flex max-lg:flex-col')}>
                <div className={cx('flex flex-[2] flex-col')}>
                    {/* Day sale Detail */}
                    <DaySaleDetail />
                    {/* chart weekly sale */}
                    <ChartWeekly />
                </div>
                {/* Table monthly Gross */}
                <TableMonthlyGross />
            </div>
        </div>
    );
}

export default Home;
