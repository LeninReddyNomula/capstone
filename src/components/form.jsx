import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { fetchAPI, submitAPI } from "../utils/temp";
import { useNavigate } from "react-router";
import * as Yup from "yup";

function Forms(props) {
  const [times, setTimes] = useState([]);
  //formik init
  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: times[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      console.log(values);
      const response = submitAPI(values);
      if (response) {
        localStorage.setItem("Bookings", JSON.stringify(values));
        navigate("/confirmation");
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["birthday", "engagement", "anniversary"])
        .required("Occasion is required"),
    }),
  });
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const validationMessageStyle = {
    color: "red",
    textAlign: "left",
  };

  document.title = "Reserve a table";
  useEffect(() => {
    let r_times = fetchAPI(formik.values.date);
    setTimes(r_times);
  }, [formik.values.date]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const formDataJSON = {};
  //   formData.forEach((value, key) => {
  //     formDataJSON[key.replace("-", "")] = value;
  //   });
  //   console.log(formDataJSON);
  //   const response = submitAPI(formData);
  //   if (response) {
  //     localStorage.setItem("Bookings", JSON.stringify(formDataJSON));
  //     navigate("/confirmation");
  //   }
  // };
  return (
    <Box display={"flex"} justifyContent={"center"} m={"1rem"}>
      <Stack w={"70%"}>
        <Heading> Reserve a Table</Heading>
        <form onSubmit={formik.handleSubmit}>
          <Stack direction={["column"]} justifyContent={"center"}>
            <Stack direction={["column", "column", "row"]}>
              <FormControl>
                <FormLabel htmlFor="res-date">Choose Date</FormLabel>
                <Input
                  type="date"
                  name="res-date"
                  {...formik.getFieldProps("date")}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div style={validationMessageStyle}>
                    *{formik.errors.date}
                  </div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="res-time">Choose Time</FormLabel>
                <Select
                  placeholder="Select a Time"
                  name="res-time"
                  {...formik.getFieldProps("time")}
                >
                  {times.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                {formik.touched.time && formik.errors.time ? (
                  <div style={validationMessageStyle}>
                    * {formik.errors.time}
                  </div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="guests">No. of guests</FormLabel>
                <Input
                  name="guests"
                  type="number"
                  placeholder="1"
                  min={1}
                  max={10}
                  {...formik.getFieldProps("guests")}
                />
                {formik.touched.guests && formik.errors.guests ? (
                  <div style={validationMessageStyle}>
                    * {formik.errors.date}
                  </div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Choose occasion</FormLabel>
                <Select
                  placeholder="Select the occasion"
                  name="occasion"
                  {...formik.getFieldProps("occasion")}
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">engagement</option>
                </Select>
                {formik.touched.occasion && formik.errors.occasion ? (
                  <div style={validationMessageStyle}>
                    {" "}
                    *{formik.errors.occasion}
                  </div>
                ) : null}
              </FormControl>
            </Stack>
            <Box>
              <Button type="submit">Book Now</Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}

export default Forms;

/**
 * <Formik
        initialValues={{ resDate: "", resTime: "", guests: "", occasion: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Box width={"70%"} display={"flex"} justifyContent={"center"}>
            <Form>
              <Stack direction={"row"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"200px"}
                  alignItems={"baseline"}
                  p={"10px"}
                >
                  <label htmlFor="resDate" style={labelStyle}>
                    Reservation Date
                  </label>
                  <Field type="date" name="resDate" />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"200px"}
                  alignItems={"baseline"}
                  p={"10px"}
                >
                  <label htmlFor="resTime" style={labelStyle}>
                    Reservation Time
                  </label>
                  <Field as="select" name="resTime">
                    {timings.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </Field>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"200px"}
                  alignItems={"baseline"}
                  p={"10px"}
                >
                  <label htmlFor="guests" style={labelStyle}>
                    No. of guests
                  </label>
                  <Field
                    type="number"
                    as="input"
                    name="guests"
                    min="1"
                    max="10"
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  width={"200px"}
                  alignItems={"baseline"}
                  p={"10px"}
                >
                  <label htmlFor="occasion" style={labelStyle}>
                    No. of guests
                  </label>
                  <Field as="select" name="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </Field>
                </Box>
              </Stack>
              <Box>
                <center>
                  <Button type="submit">Submit</Button>
                </center>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
 */
