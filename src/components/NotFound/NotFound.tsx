import { Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
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
        mt={"30vh"}
        p={"20px"}
        bgColor={"gray.100"}
        boxShadow={"xl"}
        rounded={"xl"}
      >
        <VStack>
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Page is not found
          </Heading>
          <Text>
            It looks like the page you are trying to access doesn't exist.{" "}
            <Text fontSize={"5xl"}>
              {String.fromCodePoint(Number("0x1F937"))}
            </Text>
          </Text>
          <Button
            mt={"20px"}
            variant={"primary"}
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            Main Page
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
