import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
    
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => [22,444,6666,343443,34433443,3443]),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Graphic() {
  return <div style={graphicGroupStyle}>
      <h2>Ticket médio</h2>
     <Line options={options} data={data} />
      </div>;
}

const graphicGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  marginBottom: '10px',
  position: 'relative',
  top: '20px',
  marginLeft: '10px',
  marginRight: '10px'
};
