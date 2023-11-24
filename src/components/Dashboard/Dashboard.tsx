import { Flex, HStack, VStack, Button } from "@chakra-ui/react";
import { SmartPieChart } from "./SmartPieChart";

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
        w={"100vh"}
        mt={"1vh"}
        h={"98vh"}
        p={"20px"}
        bgColor={"gray.100"}
        boxShadow={"xl"}
        rounded={"xl"}
      >
        <VStack w={'100%'} h={'100%'}>
          <HStack w={'100%'} h={'auto'} justifyContent={'right'}>
            <Button variant={'secondary'}>Logout</Button>
          </HStack>
          <SmartPieChart />
        </VStack>
      </Flex>
    </Flex>
  );
};
