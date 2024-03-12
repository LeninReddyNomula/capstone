import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import LemonDetails from "./lemonDetails";
import image1 from "../images/restaurant.jpg";
import image2 from "../images/chefs.jpg";

function About() {
  return (
    <Box
      id="about"
      h={"500px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#494949"}
    >
      <HStack w={"70%"} h={"70%"}>
        <VStack w={"50%"} paddingBlock={"2rem"} paddingInlineEnd={"2rem"}>
          <LemonDetails />
        </VStack>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"50%"}
          position={"relative"}
        >
          <Image src={image2} h={"250px"} w={"250px"} />
          <Image
            src={image1}
            h={"250px"}
            w={"250px"}
            position={"absolute"}
            top={"30%"}
            left={"10%"}
          />
        </Box>
      </HStack>
    </Box>
  );
}

export default About;
