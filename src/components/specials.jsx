import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { menu } from "./../data/menu";

function Specials() {
  return (
    <Box
      id="menu"
      height={"750px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"70%"} h={"70%"}>
        <VStack>
          <Box display={"flex"} w={"100%"} justifyContent={"space-between"}>
            <Heading size={"md"} alignSelf={"center"}>
              This Weeks Specials !
            </Heading>
            <Button maxW={"200px"} bgColor={"#F4CE14"}>
              Online Menu
            </Button>
          </Box>
          <Box width={"100%"}>
            <HStack
              h={"400px"}
              display={"grid"}
              gridTemplateColumns={"repeat(3,1fr)"}
              gridAutoRows={"auto"}
              gap={"1rem"}
              marginBlockStart={"1rem"}
              justifyItems={"center"}
            >
              {menu.map((item) => {
                return (
                  <Card
                    name={item.name}
                    desc={item.desc}
                    price={item.price}
                    src={item.src}
                  />
                );
              })}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Specials;

function Card(props) {
  return (
    <VStack h={"100%"} bgColor={"#AAA5A5"} borderRadius={"1rem"}>
      <Image
        src={props.src}
        h={"200px"}
        w={"100%"}
        objectFit={"cover"}
        borderRadius={"1rem 1rem 0 0"}
      />
      <Box
        bgColor={"#D9D9D9"}
        margin={"1rem"}
        borderRadius={"1rem"}
        h={"200px"}
      >
        <VStack
          padding={"10px"}
          textAlign={"left"}
          justifyContent={"space-evenly"}
          height={"100%"}
        >
          <HStack display={"flex"} w={"100%"} justifyContent={"space-between"}>
            <Text fontSize={"sm"} fontWeight={"600"}>
              {props.name}
            </Text>
            <Text color={"red"} fontWeight={"700"}>
              {props.price}
            </Text>
          </HStack>
          <Text fontSize={"xs"} fontWeight={"light"}>
            {props.desc}
          </Text>
          <Text fontSize={"xs"} alignSelf={"flex-start"} fontWeight={"700"}>
            Order for delivery <Icon as={MdDeliveryDining} />
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}
