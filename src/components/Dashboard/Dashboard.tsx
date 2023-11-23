import { Flex, VStack } from "@chakra-ui/react";
import { SmartPieChart } from "../SmartPieChart";

export const Dashboard = () => {
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
        mt={"30vh"}
        p={"20px"}
        bgColor={"gray.100"}
        boxShadow={"xl"}
        rounded={"xl"}
      >
        <VStack>
          <SmartPieChart />
        </VStack>
      </Flex>
    </Flex>
  );
};
