import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/gameshublogo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logo} width="auto" height="60px" ml={{ lg: "50px" }} />
        <SearchInput/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
