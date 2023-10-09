"use client";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import Image from "next/image";
import logo from "../../../public/resources/images/logoback.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          backgroundColor: "black",
          flexDirection: "row",
          WebkitAlignContent: "space-between",
        }}
      >
        <Box sx={{ pt: 3, pl: 5 }}>
          <Typography sx={{ display: { sm: "block", xs: "none" } }}>
            <Image alt="logo" src={logo} height={"100vh"} width={"100vh"} />
          </Typography>
          <Typography sx={{ display: { sm: "none", xs: "block" } }}>
            <Image alt="logo" src={logo} height={100} width={100} />
          </Typography>
        </Box>
        {/* <Box sx={{ color: "#FFFFFF", p: 5, display: { md: "block " } }}></Box> */}
        <Box sx={{ pt: 3, pl: 5 }}>
          <Typography
            sx={{ display: { sm: "block", xs: "none", color: "#C8C8C8" } }}
          >
            COPYRIGHT © 2023 . KRANTHI INFTARECH, ALL RIGHTS RESERVED.
          </Typography>
          <Typography
            sx={{ display: { sm: "block", xs: "none", color: "#C8C8C8" } }}
          >
            Connect with us on :
          </Typography>
          <Box>
            <Typography
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around", // This aligns the icons with space between them
                alignItems: "center", // This centers the icons vertically within the container
              }}
            >
              <WhatsAppIcon />
              <TwitterIcon />
              <FacebookIcon />
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* for mobile devices */}
      <Box
        sx={{
          display: { sm: "none", xs: "grid" },
          backgroundColor: "black",
          flexDirection: "column",
          WebkitAlignContent: "space-around",
        }}
      >
        <Box sx={{ textAlign: "center", pt: 5 }}>
          <Typography sx={{ display: { sm: "none", xs: "block" } }}>
            <Image alt="logo" src={logo} height={"100vh"} width={"100vh"} />
          </Typography>
        </Box>
        <Box
          sx={{
            
            textAlign: "center",
            display: { sm: "none", xs: "block", color: "#C8C8C8" },
          }}
        >
          <Typography>
            COPYRIGHT © 2023 . KRANTHI INFTARECH, ALL RIGHTS RESERVED.
          </Typography>
          <Typography>Connect with us on :</Typography>
          <Box sx={{ pb: 2 }}>
            <Typography
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around", // This aligns the icons with space between them
                alignItems: "center", // This centers the icons vertically within the container
              }}
            >
              <WhatsAppIcon />
              <TwitterIcon />
              <FacebookIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
