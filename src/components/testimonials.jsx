import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { reviews } from "../data/reviews";

function Testimonials() {
  return (
    <Box
      h={"500px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#494949"}
    >
      <VStack w={["100%", "70%"]} h={"70%"} display={"flex"}>
        <Heading size={"md"} color={"#F4CE14"}>
          Testimonials
        </Heading>
        <HStack
          marginBlockStart={["0", "3rem"]}
          width={"100%"}
          justifyContent={"space-evenly"}
          overflowX={["scroll", "hidden"]}
        >
          {reviews.map((item) => {
            return (
              <Card name={item.name} image={item.image} review={item.review} />
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
}

export default Testimonials;

function Card({ name, image, review }) {
  return (
    <Box w={"200px"} h={"200px"}>
      <VStack padding={"10px"} alignItems={"baseline"}>
        <Text fontSize={"medium"} fontWeight={"600"} color={"white"}>
          Rating
        </Text>
        <HStack>
          <Box boxSize={"100px"} bgColor={"#494949"}>
            <Image src={image} objectFit={"inherit"} borderRadius={"50%"} />
          </Box>
          <Text fontSize={"large"} fontWeight={"700"} color={"white"}>
            {name}
          </Text>
        </HStack>
        <Text>{review}</Text>
      </VStack>
    </Box>
  );
}
