import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function TableMonthlyGross() {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('translation', { keyPrefix: 'login' });

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
                'border-text-color-third mt-3 flex flex-1 flex-col rounded border-2 border-solid md:ml-4',
                'tableMonthlyGross',
            )}
        >
            <div className={cx('bg-[#19bd9a] py-1 pl-2 text-sm text-text-color-secondnary')}>Mothly Gross</div>
            <div className={cx('h-[480px] w-full overflow-y-auto')}>
                <table className={cx('w-full')}>
                    <thead className={cx('bg-text-color-third sticky top-0 text-text-color-secondnary')}>
                        <tr>
                            <th className={cx('border-[1px] border-solid border-white p-2')}>Date</th>
                            <th className={cx('border-[1px] border-solid border-white p-2')}>Gross</th>
                            <th className={cx('border-[1px] border-solid border-white p-2')}>Total Ticket</th>
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
