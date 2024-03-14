import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import LemonDetails from "./lemonDetails";
import hero from "./../hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Box
      id="home"
      h={"500px"}
      bgColor={"#494949"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      w={["100%", "100%", "100%"]}
    >
      <Box
        w={["100%", "70%"]}
        h={"70%"}
        bgColor={"#494949"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box
          w={["100%", "50%"]}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          p={["1rem", ""]}
        >
          <LemonDetails />
          <Button maxW={"200px"} bgColor={"#F4CE14"}>
            <Link to={"/booking"}>Reserve a table</Link>
          </Button>
        </Box>
        <Box
          w={["0", "50%"]}
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          visibility={["hidden", "visible", "visible"]}
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
