import { Box, Image, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      h={["auto", "500px"]}
      alignItems={"center"}
    >
      <Box
        w={["100%", "70%"]}
        h={"80%"}
        bgColor={"tomato"}
        display={"grid"}
        gridTemplateColumns={"repeat(4,1fr)"}
      >
        <Box display={"flex"} justifyContent={"center"} paddingBlock={"3rem"}>
          <Image
            src={logo}
            objectFit={"contain"}
            w={"50%"}
            h={["50%", "60%"]}
          />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingBlock={"3rem"}
        >
          <Text fontSize={["sm", "md", "xl"]} fontWeight={["700", "800"]}>
            Navigation
          </Text>
          <UnorderedList
            listStyleType={"none"}
            fontSize={["xs", "md", "xl"]}
            margin={0}
          >
            <li>
              <Link to={"#"}>Home</Link>
            </li>
            <li>
              <Link to={"#"}>About</Link>
            </li>
            <li>
              <Link to={"#"}>Menu</Link>
            </li>
            <li>
              <Link to={"#"}>Reservations</Link>
            </li>
            <li>
              <Link to={"#"}>Order Online</Link>
            </li>
            <li>
              <Link to={"#"}>Login</Link>
            </li>
          </UnorderedList>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingBlock={"3rem"}
        >
          <Text fontSize={["sm", "md", "xl"]} fontWeight={["700", "800"]}>
            Contact
          </Text>
          <UnorderedList
            listStyleType={"none"}
            fontSize={["xs", "md", "xl"]}
            margin={0}
          >
            <li>
              <Link to={"#"}>Address</Link>
            </li>
            <li>
              <Link to={"#"}>Phone Number</Link>
            </li>
            <li>
              <Link to={"#"}>Email</Link>
            </li>
          </UnorderedList>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          paddingBlock={"3rem"}
        >
          <Text fontSize={["sm", "md", "xl"]} fontWeight={["700", "800"]}>
            Social Links
          </Text>
          <UnorderedList
            listStyleType={"none"}
            fontSize={["xs", "md", "xl"]}
            margin={0}
          >
            <li>
              <Link to={"#"}>twitter</Link>
            </li>
            <li>
              <Link to={"#"}>instagram</Link>
            </li>
            <li>
              <Link to={"#"}>facebook</Link>
            </li>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
