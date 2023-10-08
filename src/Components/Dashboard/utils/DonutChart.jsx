import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
    // Define your data and options for the donut chart
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ['#FF5733', '#3366FF', '#FFD700'],
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
