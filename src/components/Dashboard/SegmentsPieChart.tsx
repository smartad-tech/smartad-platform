import { Flex, Text } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { fetchPieChartStats } from "../../services/DashboardService";
import { useEffect, useState } from "react";


interface PieChartData {
  name: string;
  value: number;
}

interface SegmentsPieChartProps {
  advertisingId: string;
}

export const SegmentsPieChart = ({ advertisingId }: SegmentsPieChartProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pieChartData, setPieChartData] = useState<PieChartData[]>([]);

  const loadData = async () => {
    const result = await fetchPieChartStats(advertisingId);
    result.unwrap((data) => {
      setPieChartData(data.totalViewsPerCategory.map((value) => {
        return {
          name: value.categoryName,
          value: value.views
        };
      }));
    }, () => {
      console.log("Error happened during fetching pie chart stats");
    });
  };

  useEffect(() => {
    void loadData();
  }, []);

  const COLORS = ["#0088FE", "#5800c4", "#FFBB28", "#FF8042"];
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
          data={pieChartData}
          cx={150}
          cy={125}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          // label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
        </Pie>
        <Tooltip/>
        <Legend wrapperStyle={{ fontSize: "12px" }}/>
      </PieChart>
    </Flex>
  );
};
