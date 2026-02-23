import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import type { ComplexityType } from '../../types/ComplexityType';

type ChartData = {
  n: number;
} & Partial<Record<ComplexityType, number>>;

type Props = {
  data: ChartData[];
  selectedComplexities: ComplexityType[];
};

export const ComplexityChart = ({
  data,
  selectedComplexities,
}: Props) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='n' />
        <YAxis />
        <Tooltip />
        <Legend />

        {selectedComplexities.map((complexity) => (
          <Line
            key={complexity}
            type='monotone'
            dataKey={complexity}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
