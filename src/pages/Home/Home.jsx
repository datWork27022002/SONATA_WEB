import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import SummarySale from './SumarySale';
import DaySaleDetail from './DaySaleDetail';
import ChartWeekly from './ChartWeekly';
import TableMonthlyGross from './TableMonthlyGross';
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Home() {
    const [currentDayRevenue, setCurrentDayRevenue] = useState({ date: new Date().toLocaleDateString() });
    return (
        <div className={cx('flex flex-col p-2')}>
            {/* Sumary sale */}
            <SummarySale />
            <div className={cx('flex max-lg:flex-col')}>
                <div className={cx('flex flex-[2] flex-col')}>
                    {/* Day sale Detail */}
                    <DaySaleDetail revenue={currentDayRevenue} />
                    {/* chart weekly sale */}
                    <ChartWeekly />
                </div>
                {/* Table monthly Gross */}
                <TableMonthlyGross currentDayRevenue={currentDayRevenue} setCurrentDayRevenue={setCurrentDayRevenue} />
            </div>
        </div>
    );
}

export default Home;
