import { Box, VStack } from "@chakra-ui/react";
import React from "react";

function HamburgerIcon() {
  const styles = {};
  return (
    <Box
      w={"50px"}
      h={"50px"}
      display={"flex"}
      alignItems={"center"}
      marginInlineEnd={"1rem"}
      cursor={"pointer"}
    >
      <VStack p={"10px"} gap={"0.3rem"} w={"100%"}>
        <HamLines />
        <HamLines />
        <HamLines />
      </VStack>
    </Box>
  );
}

function HamLines() {
  return (
    <Box w={"100%"} h={"0.3rem"} bg={"#494949"} borderRadius={"50rem"}></Box>
  );
}

export default HamburgerIcon;
