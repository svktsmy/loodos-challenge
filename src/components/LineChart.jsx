import { orange } from "@material-ui/core/colors";
import React, { useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import getRandomInt from "../utils/getRandomInt";
import ChartContainer from "./ChartContainer";

const generateData = () => {
  const data = [
    {
      name: "Page A",
      uv: getRandomInt(100)
    },
    {
      name: "Page B",
      uv: getRandomInt(100)
    },
    {
      name: "Page C",
      uv: getRandomInt(100)
    },
    {
      name: "Page D",
      uv: getRandomInt(100)
    }
  ];

  return data;
};

export default function LineChart({ title }) {
  let [data, setData] = useState(generateData());

  return (
    <ChartContainer title={title} onRefresh={() => setData(generateData())}>
      <AreaChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="2 2" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" animationDuration={200} stroke={orange[400]} fill={orange[400]} />
      </AreaChart>
    </ChartContainer>
  );
}
