import { indigo, orange, red, teal } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Cell, Legend, Pie, PieChart as RePieChart, Tooltip } from "recharts";
import getRandomInt from "../utils/getRandomInt";
import ChartContainer from "./ChartContainer";

const generateData = () => {
  const data = [
    {
      name: "Page A",
      value: getRandomInt(100)
    },
    {
      name: "Page B",
      value: getRandomInt(100)
    },
    {
      name: "Page C",
      value: getRandomInt(100)
    },
    {
      name: "Page D",
      value: getRandomInt(100)
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
        <Pie animationDuration={200} data={data} dataKey="value" nameKey="name">
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
