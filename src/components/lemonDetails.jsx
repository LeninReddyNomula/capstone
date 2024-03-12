import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { loremIpsum } from "lorem-ipsum";

function LemonDetails() {
  const desc = loremIpsum({
    count: 30,
    units: "words",
  });
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      marginBlockStart={"20px"}
    >
      <Heading color={"#F4CE14"} letterSpacing={"10px"}>
        Little Lemon
      </Heading>
      <Text color={"white"} size={"xs"} marginBlockStart={"10px"}>
        Chicago
      </Text>
      <Text textAlign={"left"} color={"white"} paddingBlock={"2rem"}>
        {desc}
      </Text>
    </Box>
  );
}

export default LemonDetails;
