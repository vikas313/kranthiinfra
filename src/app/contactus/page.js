"use client";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Navbar from "../components/navbar";
import DrawerAppBar from "../components/drawerAppbar";
import Footer from "../footer/page";
import ContactForm from "../components/form";

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
        <Box sx={{ pt: 15 }}>
          <ContactForm />
        </Box>
        {/* <Box sx={{backgroundColor:'#FFFFFF'}} >
          <Typography
            sx={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            Thanks for contacting us
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Box>
        </Box> */}

        <Footer />
      </Box>
    </>
  );
}
