import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function TableMonthlyGross() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'Home' });

    const data = [
        { date: '2024-07-29', gross: '$1,200', totalTicket: 100 },
        { date: '2024-07-28', gross: '$1,500', totalTicket: 120 },
        { date: '2024-07-27', gross: '$900', totalTicket: 80 },
        { date: '2024-07-29', gross: '$1,200', totalTicket: 100 },
        { date: '2024-07-28', gross: '$1,500', totalTicket: 120 },
        { date: '2024-07-27', gross: '$900', totalTicket: 80 },
        { date: '2024-07-29', gross: '$1,200', totalTicket: 100 },
        { date: '2024-07-28', gross: '$1,500', totalTicket: 120 },
        { date: '2024-07-27', gross: '$900', totalTicket: 80 },
        { date: '2024-07-29', gross: '$1,200', totalTicket: 100 },
        { date: '2024-07-28', gross: '$1,500', totalTicket: 120 },
        { date: '2024-07-27', gross: '$900', totalTicket: 80 },
        { date: '2024-07-29', gross: '$1,200', totalTicket: 100 },
        { date: '2024-07-28', gross: '$1,500', totalTicket: 120 },
        { date: '2024-07-27', gross: '$900', totalTicket: 80 },
    ];

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
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className={cx('border-[1px] border-solid border-gray-300 p-2')}>{row.date}</td>
                                <td className={cx('border-[1px] border-solid border-gray-300 p-2')}>{row.gross}</td>
                                <td className={cx('border-[1px] border-solid border-gray-300 p-2')}>
                                    {row.totalTicket}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableMonthlyGross;
