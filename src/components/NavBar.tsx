import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} width="100px" height='60px' ml={{lg:"50px"}}/>
        <ColorModeSwitch/>
      </HStack>
    </>
  );
};

export default NavBar;
