import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "18.11.23",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "19.11.23",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "20.11.23",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "21.11.23",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "22.11.23",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "23.11.23",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "24.11.23",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const DateViewsAreaChart = () => {
  return (
    <Flex
      ml={"10px"}
      alignItems="center"
      direction="column"
      textAlign="center"
      border={"1px"}
      borderColor="gray.300"
      bg="white"
      padding={"10px"}
      rounded={"xl"}
      height="380px"
      w={"auto"}
      boxShadow="xl"
      justifyContent="center"
    >
      <Text mb={"5px"}>Daily views</Text>
      <AreaChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={"15px"} />
        <YAxis fontSize={"15px"} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </Flex>
  );
};
