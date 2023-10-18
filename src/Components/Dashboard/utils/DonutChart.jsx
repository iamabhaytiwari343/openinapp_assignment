import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
    const data = {
        // labels: ['Basic Tees', 'Custom Short Pants', 'super hoodies'],
        datasets: [
            {
                data: [55, 31, 14],
                backgroundColor: ['#98D89E', '#EE8484', '#FFD700'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="donut-chart">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonutChart;
