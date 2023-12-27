import { Flex, HStack, VStack } from "@chakra-ui/react";
import { SegmentsPieChart } from "./SegmentsPieChart";
import { DateViewsAreaChart } from "./DateViewsAreaChart";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getGlobalAdId,
  getGlobalUserId,
} from "../../services/SmartAdStorage";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(true);

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
        w={"98vw"}
        h={"93vh"}
        p={"20px"}
        bgColor={"bg.100"}
        boxShadow={"md"}
        rounded={"xl"}
      >
        <VStack w={"100%"} h={"100%"}>
          <HStack w={"100%"} justifyContent={"left"}>
            <SegmentsPieChart advertisingId={"123"} />
            <DateViewsAreaChart adId="123" />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};
