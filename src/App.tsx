import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { SmartPieChart } from "./components/SmartPieChart";
import { Login } from "./components/LoginScreen/Login";
import { theme } from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex w={"100%"} h={"100%"} alignItems={'center'} justifyContent={'center'} textAlign="center" fontSize="xl">
      <Login />
    </Flex>
  </ChakraProvider>
);
