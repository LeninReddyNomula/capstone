import { Box, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import image from "./../image.jpg";

function Navbar() {
  const style = {
    display: "flex",
    alignItems: "center",
    width: "70%",
    height: "100%",
  };
  return (
    <Box h={"100px"} display={"flex"} justifyContent={"center"}>
      <nav style={style}>
        <Box flexGrow={0}>
          <Image w={"100px"} src={image} />
        </Box>
        <Box
          flexGrow={"1"}
          justifyContent={"space-evenly"}
          fontSize={"large"}
          fontWeight={"600"}
        >
          <UnorderedList
            listStyleType={"none"}
            display={"flex"}
            justifyContent={"space-evenly"}
          >
            <ListItem>
              <NavLink to={"#home"}>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"#about"}>About</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"#menu"}>Menu</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"#"}>Reservations</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"#"}>Order Online</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"#"}>Login</NavLink>
            </ListItem>
          </UnorderedList>
        </Box>
      </nav>
    </Box>
  );
}

export default Navbar;
