"use client";
import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import DrawerAppBar from "../components/drawerAppbar";
import Footer from "../footer/page";

export default function AboutUs() {
  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          display: "grid",
          flexDirection: "row",
          WebkitAlignContent: "space-between",
          height: "100vh",
        }}
      >
        <DrawerAppBar />
        <Box >
          <Box sx={{ textAlign: "center" }}>WELCOME TO OUR STUDIO</Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
