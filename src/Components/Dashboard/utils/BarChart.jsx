import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ guestData, userData }) => {
    const chartRef = useRef(null);
    let chartInstance = null; // Store the Chart instance

    useEffect(() => {
        const myChartRef = chartRef.current.getContext('2d');

        // Destroy the previous chart instance if it exists
        if (chartInstance) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['week1', 'week2', 'week3', 'week4'],
                datasets: [
                    {
                        label: 'Guest',
                        data: guestData,
                        backgroundColor: '#98D89E',
                    },
                    {
                        label: 'User',
                        data: userData,
                        backgroundColor: '#EE8484',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        min: 0,
                        max: 500,
                        stepSize: 100
                    },
                },
            },
        });
    }, [guestData, userData]);

    return (
        <div>
            <canvas id="myChart" ref={chartRef} />
        </div>
    );
};

export default BarChart;
