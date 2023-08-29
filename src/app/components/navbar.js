"use client";
import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/resources/images/logo.png";
import Footer from "../footer/page";
// import logo from "../../public/resources/images/logo.png";
export default function Navbar() {
  const path = usePathname();
  return (
    <>
      <Box sx={{ height: 300, backgroundColor: "#9BE2DF" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pt: 1, pl: 5, justifyContent: "center" }}>
            <Typography>
              <Image alt="logo" src={logo} width={50} height={50} />
            </Typography>
          </Box>
          <Box sx={{ pt: 2 }}>
            <Button sx={{ color: "black" }}>
              <Link href="/home">Home</Link>
            </Button>
            <Button sx={{ color: "black" }}>
              <Link href="/aboutus">About us</Link>
            </Button>
            <Button sx={{ color: "black", transform: "none" }}>
              <Link href="/aboutus">Contact us</Link>
            </Button>
          </Box>
        </Box>
        {/* <Typography sx={{ textAlign: "center", pt: 8, color: "" }}>
          {path === "/" ? "home" : path}
        </Typography> */}
      </Box>
      {/* <Footer/> */}
    </>
  );
}
