//import { ArgumentAxis, Chart, SplineSeries, ValueAxis } from "@devexpress/dx-react-chart-material-ui";

import { indigo, orange, red, teal } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Cell, Legend, Pie, PieChart as RePieChart, Tooltip } from "recharts";
import getRandomInt from "../utils/getRandomInt";
import ChartContainer from "./ChartContainer";

const generateData = () => {
  const data = [
    {
      name: "Page A",
      value: getRandomInt(4000)
    },
    {
      name: "Page B",
      value: getRandomInt(4000)
    },
    {
      name: "Page C",
      value: getRandomInt(4000)
    }
  ];

  return data;
};
export default function PieChart({ title }) {
  const COLORS = [indigo[800], orange[600], red[400], teal[200]];
  let [data, setData] = useState(generateData());

  return (
    <ChartContainer title={title} onRefresh={() => setData(generateData())}>
      <RePieChart>
        <Pie isAnimationActive={false} data={data} dataKey="value" nameKey="name">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </RePieChart>
    </ChartContainer>
  );
}
