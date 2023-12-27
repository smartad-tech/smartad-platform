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
import { loginToDashboard, LoginData } from "../../services/LoginService";
import { setGlobalAdId, setGlobalUserId } from "../../services/SmartAdStorage";

export const Login = () => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  const login = async (pin: string) => {
    const userDataResult = await loginToDashboard(pin);
    userDataResult.unwrap(
      (loginData: LoginData) => {
        setIsInvalid(false);
        setGlobalUserId(loginData.userId);
        setGlobalAdId(loginData.advertisingId);
        navigate("/dashboard", { replace: true });
      },
      () => {
        setIsInvalid(true);
      }
    );
    setIsLoading(false);
  };

  const onSubmit = () => {
    setIsLoading(true);
    login(pin);
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
        mt={"25vh"}
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
              isInvalid={isInvalid}
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
    </Flex>
  );
};
