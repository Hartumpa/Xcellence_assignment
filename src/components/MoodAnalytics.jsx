import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import "./style.css";

const MoodAnalytics = ({ pdata }) => {
  return (
    <>
      <div className="head">
        <h1 className="text-heading">Team Mood</h1>
        <div>
          <p>The Team is feeling good Today 😊</p>
        </div>
      </div>

      <h2>MoodAnalytics Chart</h2>
      <ResponsiveContainer width="100%" aspect={3} className="chart">
        <LineChart data={pdata} margin={{ right: 300 }} className="lineChart">
          <CartesianGrid />
          <XAxis dataKey="created_at" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="emoji_point" stroke="black" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default MoodAnalytics;
