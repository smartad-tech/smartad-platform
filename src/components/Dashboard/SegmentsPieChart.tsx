import { Flex, Text } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

export const SegmentsPieChart = () => {
  const data = [
    { name: "Senior Men", value: 400 },
    { name: "Senior Women", value: 300 },
    { name: "Adult Women", value: 300 },
    { name: "Adult Men", value: 200 },
    { name: "Young Men", value: 200 },
    { name: "Young Women", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <Flex
      mr={"10px"}
      alignItems="center"
      direction="column"
      border={"1px"}
      borderColor="gray.300"
      bg="white"
      padding={"3"}
      rounded={"xl"}
      height="380px"
      boxShadow="xl"
      justifyContent="center"
    >
      <Text mb={"10px"}>Segment distribution</Text>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: "13px" }} />
      </PieChart>
    </Flex>
  );
};
