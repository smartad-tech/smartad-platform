import {
  Flex,
  HStack,
  PinInput,
  PinInputField,
  VStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    setIsLoading(true);
    if (pin === "1337") {
      navigate("/dashboard", { replace: true });
    }
    setIsLoading(false);
  };

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
          <Logo maxH={"25vh"} />
          <Heading mb={"20px"} size={"md"}>
            {" "}
            Login to SmartAd
          </Heading>
          <HStack>
            <PinInput
              onChange={(input: string) => setPin(input)}
              value={pin}
              size={"lg"}
              type="number"
              placeholder=""
              mask
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button
            mt={"20px"}
            variant={"primary"}
            onClick={onSubmit}
            formNoValidate={true}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};
