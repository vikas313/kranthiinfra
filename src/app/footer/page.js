"use client";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import logo from "../../../public/resources/images/logo.png";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "black" }}>
        <Box sx={{ pt: 1, pl: 5, justifyContent: "center" }}>
          <Typography>
            <Image alt="logo" src={logo} width={50} height={50} />
          </Typography>
        </Box>
        <Box sx={{color:"#FFFFFF",p:5,display: { md: "block" }}}  >
            <Typography>
                Head office
            </Typography>
        </Box>
        <hr></hr>
      </Box>
    </>
  );
}
