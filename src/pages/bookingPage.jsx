import { Box } from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import Forms from "../components/form";

function isWeekDayOrWeekEnd(date) {
  const selectedDate = new Date(date);

  const dayOfWeek = selectedDate.getDay();

  return dayOfWeek === 5 || dayOfWeek === 6 ? "weekend" : "weekday";
}

const reducer = (action, payload) => {
  const checkDay = isWeekDayOrWeekEnd(payload);

  if (checkDay === "weekday") {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  } else {
    return [
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
  }
};

function BookingPage() {
  const [date, setDate] = useState("");
  const timings = ["19:00", "20:00", "21:00"];
  const [state, dispatch] = useReducer(reducer, timings);

  return (
    <Box>
      <Forms
        date={date}
        setDate={setDate}
        availableTimes={state}
        dispatch={dispatch}
      />
    </Box>
  );
}

export default BookingPage;
