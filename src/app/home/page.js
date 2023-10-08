"use client";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../footer/page";
import logo from "../../../public/resources/images/logo.png";
import Image from "next/image";
import { styled } from "@mui/system";
import DrawerAppBar from "../components/drawerAppbar";
import AboutUs from "../aboutus/page";
import Link from "next/link";
export default function Homepage() {
  const StyledBox = styled(Box)`
    background-image: url(${logo}); /* Replace with the actual path to your image */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* You can add more CSS properties as needed */
  `;

  return (
    <Box
      sx={{
        display: "grid",
        flexDirection: "column",
        WebkitAlignContent: "space-between",
        height: "100vh",
      }}
    >
      <DrawerAppBar />
      <Box sx={{ textAlign: "center", pt: 10 }}>
        <Typography>WELCOME TO KRANTHI INFRATECH PVT LTD</Typography>
        <Image alt="logo" src={logo} height={"100vh"} width={"100vh"} />
      </Box>
      <Box>
        <Typography sx={{ p: 1, fontSize: 20, textAlign: "center" }}>
          We build your dreams.
        </Typography>
        <Box
          sx={{
            p: 4,
            fontSize: 7,
            display: { sm: "block", xs: "none" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            The Success of Kranthi InfraTech is established on the hardships of
            our CEO Kranthi Goud Where he evolved himself to achieve best market
            for his Customers.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button sx={{ backgroundColor: "#FFFFFF", borderRadius: 2 }}>
              <Link href="/contactus">GET FREE QUOTE</Link>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            p: 2,
            display: { sm: "none", xs: "block" },
          }}
        >
          <Typography sx={{ textAlign: "center" }}>
            The Success of Kranthi InfraTech is established on the hardships of
            our CEO Kranthi Goud Where he evolved himself to achieve best market
            for his Customers.
          </Typography>
          {/* <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
            He understands the value of the money and time. so he never fails in
            providing best investment options for his customers
          </Typography> */}
          <Box sx={{ textAlign: "center" }}>
            <Button
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Link href="/contactus">GET FREE QUOTE</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <AboutUs/> */}
      <Footer />
    </Box>
  );
}
