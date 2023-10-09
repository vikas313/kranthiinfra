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
import { usePathname } from "next/navigation";

export default function ContactUs() {
  const pathname = usePathname();
  const isContactUs = pathname === "/contactus";

  console.log(pathname);
  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          display: isContactUs ? "grid" : "initial",
          flexDirection: isContactUs ? "row" : "initial",
          WebkitAlignContent: isContactUs ? "space-between" : "initial",
          height: isContactUs ? "100vh" : "initial",
        }}
      >
        {/* <DrawerAppBar /> */}
        {pathname === "/contactus" && <DrawerAppBar />}
        <Box sx={{ pt: 15 }}>
          <ContactForm />
        </Box>
        {pathname === "/contactus" && <Footer />}
      </Box>
    </>
  );
}
