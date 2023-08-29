"use client";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../footer/page";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Box sx={{backgroundColor: "#9BE2DF" }}>
        <Typography sx={{ textDecoration: "underline", p: 4, fontSize: 20 }}>
          We value your money and time
        </Typography>
        <Box
          sx={{
            p: 4,
            mr: 40,
            fontSize: 16,
            display: { sm: "block", xs: "none" },
          }}
        >
          <Typography>
          The Success of bhoomi Infra structure is established on the
            hardships of our CEO Kranthi Goud Where he evolved himself to
            achieve best market for his Customers.
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
            He understands the value of the money and time. so he never fails in
            providing best investment options for his customers
          </Typography>
          <Box>
            <Button sx={{ backgroundColor: "#FFFFFF", borderRadius: 2 }}>
              About Us
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            display: { sm: "none", xs: "block" },
          }}
        >
          <Typography>
            The Success of bhoomi Infra structure is established on the
            hardships of our CEO Kranthi Goud Where he evolved himself to
            achieve best market for his Customers.
          </Typography>
          <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
            He understands the value of the money and time. so he never fails in
            providing best investment options for his customers
          </Typography>
          <Box>
            <Button sx={{ backgroundColor: "#FFFFFF", borderRadius: 2 }}>
              About Us
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </>
  );
}
