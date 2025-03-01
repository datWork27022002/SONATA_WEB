import React from 'react';
import classNames from 'classnames/bind';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần biểu đồ cần thiết
ChartJS.register(ArcElement, Tooltip, Legend);
const cx = classNames.bind();

const colorYAmount = 'blue';
const colorYQuantity = 'green';

function MixedChartSale({ dataQuantity, labelMixedChart, dataAmount }) {
    const data = {
        labels: labelMixedChart,
        datasets: [
            {
                type: 'line',
                label: 'Quantity',
                data: dataQuantity,
                backgroundColor: '#22c55e',
                borderColor: '#22c55e',
                borderWidth: 1,
                yAxisID: 'y',
            },
            {
                type: 'bar',
                label: 'Ammount',
                data: dataAmount,
                fill: false,
                borderColor: '#99f6e4',
                backgroundColor: '#99f6e4',
                yAxisID: 'y1',
                barThickness: 100, // Đặt chiều rộng của cột bar
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Category',
                font: {
                    size: 20,
                    weight: 'bold',
                },
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Quantity',
                    color: colorYQuantity,
                    font: {
                        size: 14,
                        weight: 'normal',
                    },
                    padding: {
                        top: 10,
                    },
                },
                ticks: {
                    color: colorYQuantity,
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'Amount',
                    color: colorYAmount,
                    font: {
                        size: 14,
                        weight: 'normal',
                    },
                    padding: {
                        top: 10,
                    },
                },
                ticks: {
                    callback: function (value) {
                        // Định dạng giá trị với dấu phân cách là dấu .
                        return new Intl.NumberFormat('de-DE', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(value);
                    },
                    color: colorYAmount,
                },
                suggestedMin: 0,
                suggestedMax: 120000,
            },
            x: {
                grid: {
                    drawOnChartArea: false, // Ẩn các đường phân cách nằm dọc
                    drawBorder: false, // Ẩn đường viền của trục x
                },
            },
        },
    };

    return (
        <div className={cx('flex h-full items-center justify-center')}>
            <div className={cx('flex w-full items-center justify-center max-md:w-[350px]')}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default MixedChartSale;
