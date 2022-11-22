import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ["10/1/22", '10/12/21', '10/1/22', '10/2/22', '10/3/22', '10/5/22', '10/6/22', '10/8/22', '10/9/22', '10/10/22', '10/4/22', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: "0.9",
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: "1.0",
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: "1.5",
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 4',
      data: "1.5",
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

export default function Graph() {
  return <Bar options={options} data={data} />;
}
