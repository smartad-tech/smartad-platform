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

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const userId = getGlobalUserId().unwrap(
      (userId) => {
        return userId;
      },
      (error) => {
        navigate("/", { replace: true });
        return "";
      }
    );

    const adId = getGlobalAdId().unwrap(
      (adId) => {
        return adId;
      },
      (error) => {
        navigate("/", { replace: true });
        return "";
      }
    );
    setIsLoaded(true);
  }, [navigate]);

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
            <SegmentsPieChart />
            <DateViewsAreaChart />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};
