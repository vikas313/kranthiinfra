"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/resources/images/logo.png";
import Navbar from "./components/navbar";
import Homepage from "./home/page";
import Footer from "./footer/page";
import SinglePage from "./flowTwo/page";

export default function Home() {
  const path = usePathname();
  return (
    <Box>
      {/* <Homepage /> */}
      {/* <Footer/> */}
      <SinglePage />
    </Box>
  );
}
