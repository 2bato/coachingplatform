import { Chart } from 'chart.js';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import './WeightChart.css'


export default function WeightChart() {
    const data = [
        { name: 'Page A', weight: 93, pv: 2400, amt: 2400 },
        { name: 'Page B', weight: 91.2, pv: 2400, amt: 2400 },
        { name: 'Page C', weight: 90.7, pv: 2400, amt: 2400 },
      ];
  return (
    <ResponsiveContainer width="95%" height={300} className={Chart}>
<LineChart
      width={400}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
    </ResponsiveContainer>
  );
}
