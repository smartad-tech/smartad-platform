import { ImageProps, chakra, forwardRef } from "@chakra-ui/react";
import logo from "./logo.svg";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} ref={ref} {...props} />;
});
