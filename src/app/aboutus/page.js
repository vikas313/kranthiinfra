"use client";
import { Box } from "@mui/material";
import Navbar from "../components/navbar";
import DrawerAppBar from "../components/drawerAppbar";
import Footer from "../footer/page";
import { usePathname } from "next/navigation";

export default function AboutUs() {
  const pathname = usePathname();
  const statusStyle = (status) => {
    switch (status) {
      case "aborted":
        return "#D66460";
        break;
      case "queue":
        return "#6685F0";
        break;
      case "processing":
        return "#F0E666";
        break;
      default:
        return "#60D660";
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          display: pathname === "/aboutus" && "grid",
          flexDirection: pathname === "/aboutus" && "row",
          WebkitAlignContent: pathname === "/aboutus" && "space-between",
          height: pathname === "/aboutus" && "100vh",
          color: "black",
        }}
      >
        {/* <DrawerAppBar /> */}
        {pathname === "/aboutus" && <DrawerAppBar />}
        <Box>
          <Box sx={{ textAlign: "center" }}>WELCOME TO OUR STUDIO</Box>
        </Box>
        {pathname === "/aboutus" && <Footer />}
      </Box>
    </>
  );
}
