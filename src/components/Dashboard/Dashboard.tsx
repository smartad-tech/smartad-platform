import { Flex, HStack, VStack, Button } from "@chakra-ui/react";
import { SegmentsPieChart } from "./SegmentsPieChart";
import { DateViewsAreaChart } from "./DateViewsAreaChart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  clearGlobalStorage,
  getGlobalAdId,
  getGlobalUserId,
} from "../../services/SmartAdStorage";
import {
  StatisticsData,
  fetchStatistics,
} from "../../services/DashboardService";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [statisticsData, setStatisticsData] = useState<
    StatisticsData | undefined
  >(undefined);

  const loadStats = async () => {
    const userId = getGlobalUserId().unwrap(
      (userIdVal) => {
        return userIdVal;
      },
      () => {
        navigate("/", { replace: true });
        return "";
      }
    );

    const adId = getGlobalAdId().unwrap(
      (adIdVal) => {
        return adIdVal;
      },
      () => {
        navigate("/", { replace: true });
        return "";
      }
    );

    (await fetchStatistics(adId)).unwrap(
      (stats) => {
        setStatisticsData(stats);
        setIsLoaded(true);
      },
      () => {
        console.log("ERROR: Unable to fetch statistics");
        setIsLoaded(false);
      }
    );
  };

  useEffect(() => {
    loadStats();
  }, []);

  return !isLoaded ? (
    <></>
  ) : (
    <Flex
      w={"100%"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign="center"
      fontSize="xl"
    >
      <Flex
        w={"96vw"}
        mt={"3vh"}
        h={"94vh"}
        p={"20px"}
        bgColor={"bg.100"}
        boxShadow={"md"}
        rounded={"xl"}
      >
        <VStack w={"100%"} h={"100%"}>
          <HStack mb={"20px"} w={"100%"} h={"auto"} justifyContent={"right"}>
            <Button
              onClick={() => {
                clearGlobalStorage();
                navigate("/");
              }}
              variant={"secondary"}
            >
              Logout
            </Button>
          </HStack>
          <HStack w={"100%"} justifyContent={"left"}>
            <SegmentsPieChart data={statisticsData!.totalViewsPerCategory} />
            <DateViewsAreaChart />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};
