import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { startOfMonth } from 'date-fns';
import { useSelector } from 'react-redux';

import Loading from '~/components/Loading';
import { getRevenueService } from '~/services/SaleBillService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { formatNumberWithDots } from '~/utils/helpers';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function TableMonthlyGross({ currentDayRevenue, setCurrentDayRevenue }) {
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
            cycle: 'Date',
            startDate: firstDayOfMonth,
            endDate: formattedToday,
        };

        setLoading(true);
        const res = await callApi(getRevenueService, params);
        setLoading(false);
        if (!res) return;
        res?.data.forEach((value) => {
            value.date = value.saleDate.split('T')[0];
            value.amount = value.totalAmount;
            value.customerQuantity = value.totalCustomer;
        });
        setCurrentDayRevenue(res?.data[0]);
        setRevenues(res?.data);
    };

    useEffect(() => {
        handleGetRevenue();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedStore]);

    return (
        <div
            className={cx(
                'mt-3 flex flex-1 flex-col rounded border-2 border-solid border-text-color-third md:ml-4',
                'tableMonthlyGross',
            )}
        >
            <div className={cx('bg-[#19bd9a] py-1 pl-2 text-sm text-text-color-secondnary')}>{t('Mothly_sales')}</div>
            <div className={cx('h-[480px] w-full overflow-y-auto')}>
                <table className={cx('w-full')}>
                    <thead className={cx('sticky top-0 w-full bg-text-color-third text-text-color-secondnary')}>
                        <tr className={cx('')}>
                            <th className={cx('w-[40%] border-[1px] border-solid border-white p-2')}>{t('Date')}</th>
                            <th className={cx('w-[40%] border-[1px] border-solid border-white p-2')}>{t('Sales')}</th>
                            <th className={cx('w-[20%] border-[1px] border-solid border-white p-2')}>
                                {t('Quantity')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {revenues.map((row, index) => (
                            <tr
                                key={index}
                                onClick={() => setCurrentDayRevenue(row)}
                                className={cx(currentDayRevenue.date === row.date && 'bg-blue-500')}
                            >
                                <td className={cx('border-[1px] border-solid border-gray-300 p-2')}>{row.date}</td>
                                <td className={cx('border-[1px] border-solid border-gray-300 p-2')}>
                                    {formatNumberWithDots(row.amount) + 'đ'}
                                </td>
                                <td className={cx('border-[1px] border-solid border-gray-300 p-2')}>
                                    {row.customerQuantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {loading && <Loading />}
        </div>
    );
}

export default TableMonthlyGross;
