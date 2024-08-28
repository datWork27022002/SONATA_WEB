import React from 'react';
import classNames from 'classnames/bind';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần biểu đồ cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);
const cx = classNames.bind();

const listColor = [
    '#6b7280',
    '#ef4444',
    '#f97316',
    '#eab308',
    '#84cc16',
    '#22c55e',
    '#14b8a6',
    '#0ea5e9',
    '#6366f1',
    '#a855f7',
    '#ec4899',
    '#334155',
    '#b91c1c',
    '#b45309',
    '#4d7c0f',
    '#047857',
    '#0e7490',
    '#4338ca',
    '#a21caf',
    '#be123c',
];

function DoughnutChartSale({ labelChart, dataChart }) {
    const data = {
        labels: labelChart,
        datasets: [
            {
                label: '',
                data: dataChart,
                backgroundColor: listColor,
                borderColor: listColor,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'left',
            },
            title: {
                display: true,
                text: 'Store Name',
                font: {
                    size: 20,
                    weight: 'bold',
                },
            },
        },
    };

    return (
        <div className={cx('flex items-center justify-center')}>
            <div className={cx('w-[400px] max-md:w-[300px]')}>
                <Doughnut data={data} options={options} cir />
            </div>
        </div>
    );
}

export default DoughnutChartSale;
