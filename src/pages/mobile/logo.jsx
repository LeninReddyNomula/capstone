import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../image.jpg";

function Logo() {
  return (
    <Box w={"150px"} m={"auto"}>
      <Image src={logo} objectFit={"cover"} />
    </Box>
  );
}

export default Logo;
