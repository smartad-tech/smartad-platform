import { Flex, Text } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { CategoryViews } from "../../services/DashboardService";

interface SegmentsPieChartProps {
  data: CategoryViews[];
}

interface SmartAdPieChartData {
  name: string;
  value: number;
}

export const SegmentsPieChart = ({ data }: SegmentsPieChartProps) => {
  const formattedData: SmartAdPieChartData[] = data.map((value) => {
    return {
      name: value.categoryName,
      value: value.views,
    };
  });

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
          data={formattedData}
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
