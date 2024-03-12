import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import LemonDetails from "./lemonDetails";
import hero from "./../hero.jpg";

function Hero() {
  return (
    <Box
      id="home"
      h={"500px"}
      bgColor={"#494949"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w={"70%"}
        h={"70%"}
        bgColor={"#494949"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box
          w={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <LemonDetails />
          <Button maxW={"200px"} bgColor={"#F4CE14"}>
            Reserve a Table
          </Button>
        </Box>
        <Box
          w={"50%"}
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Image
            src={hero}
            height={"100%"}
            width={"auto"}
            borderRadius={"1rem"}
            position={"absolute"}
            top={"30%"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
