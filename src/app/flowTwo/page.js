"use client";
import { Box, Paper, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import logo from "../../../public/resources/images/logo.png";
import vikas from "../../../public/resources/images/vikas.JPG";
import karthik from "../../../public/resources/images/karthik.jpg";
import venkat from "../../../public/resources/images/venkat.jpg";
import kranthi from "../../../public/resources/images/kranthi.jpg";
import Image from "next/image";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import DescriptionIcon from "@mui/icons-material/Description";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

export default function SinglePage() {
  const pathname = usePathname();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Paper sx={{ color: "black" }}>
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Image alt="logo" src={logo} height={"100vh"} width={"100vh"} />
        </Box>
      </Paper>
      <Paper
        sx={{
          color: "black",
          display: "flex",
          justifyContent: "space-evenly",
          p: 3,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <RemoveRedEyeIcon sx={{ color: "blue" }} />
          <Typography>COMPANY VISION</Typography>
          <Typography sx={{ fontSize: 10 }}>
            "REVOLUTION” (TO BRING A CHANGE IN INFRASTRUCTURE)
          </Typography>
        </Box>
        <hr />
        <Box sx={{ textAlign: "center" }}>
          <TrackChangesIcon sx={{ color: "red" }} />
          <Typography>COMPANY MISSION</Typography>
          <Typography sx={{ fontSize: 10 }}>
            Our mission is to understand our client needs to deliver high
            quality projects on time and on budget
          </Typography>
        </Box>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ m: 1 }}>
          <DescriptionIcon sx={{ color: "green" }} />
          <Typography>SERVICE DESCRIPTION</Typography>
          <Typography sx={{ ml: 1, fontSize: 14 }}>
            To carry out civil work, such as building roads, approach roads,
            streets, circles, squares, parks, gardens, statues, parking spaces,
            bridges, dams, watercourses, and reservoirs, as well as earthworks,
            sewers, tanks, drains, sewage, and lighting for any purpose.
            locomotive ties Whether turnkey, through labor agreements, or in any
            other way, railway sidings, runways, shipyards, culverts, and canals
          </Typography>
        </Box>
      </Paper>
      <Paper sx={{ p: 2, textAlign: "center" }}>
        <Diversity3Icon sx={{ color: "pink" }} />
        <Typography>CORE TEAM</Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <Item>
                <Box>
                  <Image
                    alt="logo"
                    src={kranthi}
                    height={"100"}
                    width={"100"}
                  />
                  <Typography>KOTTAGOUNI KRANTHI</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF EXECUTIVE OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                {" "}
                <Box>
                  <Image alt="logo" src={venkat} height={"100"} width={"100"} />
                  <Typography> R VENKAT GOUD</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF FINANCIAL OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                {" "}
                <Box>
                  <Image
                    alt="logo"
                    src={karthik}
                    height={"100"}
                    width={"100"}
                  />
                  <Typography>Y KARTHIK REDDY</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF OPERATION OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                <Box>
                  <Image alt="logo" src={vikas} height={"100"} width={"100"} />
                  <Typography>B VIKAS REDDY</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF ADMINISTRATIVE OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12}>
              <Item>
                <Box>
                  <Image
                    alt="logo"
                    src={kranthi}
                    height={"100"}
                    width={"100"}
                  />
                  <Typography>KOTTAGOUNI KRANTHI</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF EXECUTIVE OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                {" "}
                <Box>
                  <Image alt="logo" src={venkat} height={"100"} width={"100"} />
                  <Typography> R VENKAT GOUD</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF FINANCIAL OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                {" "}
                <Box>
                  <Image
                    alt="logo"
                    src={karthik}
                    height={"100"}
                    width={"100"}
                  />
                  <Typography>Y KARTHIK REDDY</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF OPERATION OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item>
                <Box>
                  <Image alt="logo" src={vikas} height={"100"} width={"100"} />
                  <Typography>B VIKAS REDDY</Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    CHIEF ADMINISTRATIVE OFFICER
                  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Paper>
        <Typography sx={{ textAlign: "center", fontSize: 16 }}>
          KRANTHI INFRATECH PRIVATE LIMITED
        </Typography>
        <Box
          sx={{
            color: "black",
            display: "flex",
            justifyContent: "space-evenly",
            p: 3,
          }}
        >
          <Box>
            <Typography sx={{ fontSize: 14 }}>
              Key People : KOTTAGOUNI KRANTHI (CEO )
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Product :- INFRASTRUCTURE
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Established date :- 10-08-2023
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Type of Industry :- Public Sector
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Annual Sales :- ON GOING
            </Typography>
            <Typography sx={{ fontSize: 14 }}>No of Employees : 18</Typography>
          </Box>
          <hr />
          <Box>
            <Typography sx={{ fontSize: 14 }}>Founded :- 25-09-2022</Typography>
            <Typography sx={{ fontSize: 14 }}>
              Founder:- KOTTAGOUNI KRANTHI
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Head office :- Hyderabad Telangana
            </Typography>
            <Typography sx={{ fontSize: 14 }}>Area Served :- India</Typography>
            <Typography sx={{ fontSize: 14 }}>Contact : 832850718</Typography>
            <Typography sx={{ fontSize: 14 }}>
              Gmail: kranthinfratech@gmail.com
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography sx={{ textAlign: "center" }}>CONTACT US</Typography>
        <Box
          sx={{
            color: "black",
            display: "flex",
            justifyContent: "space-evenly",
            p: 3,
          }}
        >
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=+918639453702"
          >
            <WhatsAppIcon sx={{ color: "green" }} />
          </a>

          <a
            target="blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDnFllNBxQfnKvwXgzLxXrMdDXtzwxjwMxDwZBQrkKnFbwbpphZRFnLpsxXXbxdxBxrmWlq"
          >
            {" "}
            <EmailIcon sx={{ color: "orange" }} />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/kranthi_infratech/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
          >
            <InstagramIcon sx={{ color: "orange" }} />
          </a>
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=100013427070170&&mibextid=ZbWKwLhttps://www.facebook.com/profile.php?id=100013427070170&&mibextid=ZbWKwL"
          >
            {" "}
            <FacebookIcon sx={{ color: "blue" }} />
          </a>

          {/* <LanguageIcon sx={{ color: "pink" }} /> */}
        </Box>
      </Paper>
    </>
  );
}
