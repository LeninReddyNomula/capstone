import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Confirmation() {
  const [booking, setBooking] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    setBooking(JSON.parse(booking));
  }, []);
  const bookingDetails = localStorage.getItem("Bookings");
  console.log(booking);
  return (
    <Box m={"1rem"}>
      <Box>
        <Heading>Your Booking is Confirmed </Heading>
        <Text>Please find booking deatils below</Text>
        <Text>
          <strong>Occasion : </strong>
          {booking.occasion}
        </Text>
        <Text>
          <strong>OccasionBooking Date : </strong>
          {booking.date}
        </Text>
        <Text>
          <strong>OccasionBooking Time : </strong>
          {booking.time}
        </Text>
        <Text>
          <strong>OccasionNo. of guests : </strong>
          {booking.guests}
        </Text>
        <Button
          onClick={() => {
            navigate("/booking");
          }}
        >
          Return to Booking
        </Button>
      </Box>
    </Box>
  );
}

export default Confirmation;
