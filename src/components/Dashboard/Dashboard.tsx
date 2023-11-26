import { Flex, HStack, VStack, Button, Grid, GridItem } from "@chakra-ui/react";
import { SegmentsPieChart } from "./SegmentsPieChart";
import { DateViewsAreaChart } from "./DateViewsAreaChart";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
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
            <Button onClick={() => navigate("/")} variant={"secondary"}>
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
