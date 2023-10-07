// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';

// const Chart1 = () => {
//     const [chartData, setChartData] = useState({});

//     useEffect(() => {
//         // Fetch dummy data from your API here and format it for the chart.
//         // Replace this with your actual API call.
//         const fetchDataFromAPI = async () => {
//             try {
//                 const response = await fetch('YOUR_API_ENDPOINT');
//                 const data = await response.json();

//                 // Format your data to match the Chart.js data structure.
//                 const formattedData = {
//                     labels: data.labels, // Your x-axis labels
//                     datasets: [
//                         {
//                             label: 'Dummy Data',
//                             data: data.values, // Your y-axis data
//                             fill: false,
//                             borderColor: 'rgb(75, 192, 192)',
//                         },
//                     ],
//                 };

//                 setChartData(formattedData);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchDataFromAPI();
//     }, []);

//     return (
//         <div className="chart">
//             <Line data={chartData} />
//         </div>
//     );
// };

// export default Chart1;

import React from 'react'

const chart = () => {
    return (
        <div>chart1</div>
    )
}

export default chart