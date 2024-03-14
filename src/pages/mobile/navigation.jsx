import React, { useEffect, useState } from "react";
import HamburgerMenu from "./hamburger";
import { Box } from "@chakra-ui/react";
import Logo from "./logo";

function Navgation() {
  /**------for mobile navigation----- */

  return (
    <Box
      w={"100%"}
      h={"4rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      onClick={() => {
        alert("clicked");
      }}
    >
      <Logo />
      <HamburgerMenu />
    </Box>
  );
}

export default Navgation;
