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

export const Login = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
  };

  return (
    <Flex
      mt={"30vh"}
      p={"20px"}
      bgColor={"gray.100"}
      boxShadow={"xl"}
      rounded={"xl"}
    >
      <VStack>
        <Logo maxH={"25vh"} />
        <Heading mb={'20px'} size={"md"}> Login to SmartAd</Heading>
        <HStack>
          <PinInput
            onChange={(input: string) => setPin(input)}
            value={pin}
            size={"lg"}
            type="number"
            placeholder=""
            mask
            autoFocus={false}
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
          isLoading={isLoading}
        >
          Submit
        </Button>
      </VStack>
    </Flex>
  );
};
