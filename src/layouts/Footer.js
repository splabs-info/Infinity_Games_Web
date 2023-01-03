import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoSPlabs from "../components/common/LogoSPlabs";
import { EndBox, FooterBox, SocialBox, FooterTitle, UlCustom } from "../components/footer/FooterStyles";
import useResponsive from "../hooks/useResponsive";
import { _changeLanguage } from "../store/setting/settingActions";



const joinInfinity = [
  {
    label: "key_15",
    link: "/coming-soon"
  },
  {
    label: "key_16",
    link: "/coming-soon"
  },
  {
    label: "key_17",
    link: "/coming-soon"
  },
  {
    label: "key_18",
    link: "/coming-soon"
  },
  {
    label: "key_19",
    link: "/coming-soon"
  },
]

const aboutInfinity = [

  {
    label: "WHITEPAPER",
    link: ""
  },
  {
    label: "MARKETPLACE",
    link: ""
  }, {
    label: "key_11",
    link: ""
  },
  {
    label: "key_12",
    link: ""
  },
  {
    label: "key_13",
    link: ""
  },

]

const socials = [
  {
    src: "/images/icon/icon-discord.png",
    link: "",
    label: 'Discord',
  },
  {
    src: "/images/icon/icon-telegram.png",
    link: "",
    label: 'Telegram',
  },
  {
    src: "/images/icon/icon-twitter.png",
    link: "",
    label: 'Twitter',
  },
  {
    src: "/images/icon/icon-medium.png",
    link: "",
    label: 'Medium',
  },

]

export default function Footer() {

  const dispatch = useDispatch()
  const { setting } = useSelector((state) => state);
  const { library } = setting;

  const isMobile = useResponsive("down", "sm");
  const isTablet = useResponsive("down", "md");

  useEffect(() => {
    dispatch(_changeLanguage(localStorage.getItem("lang")));
  }, [dispatch]);


  return (
    <FooterBox id='contact' sx={{
      backgroundSize: isMobile && "cover",
      backgroundPosition: isMobile && "center",
    }}>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            textAlign={isTablet && "center"}
          >
            <Box component='a' href="/"
              sx={{
                display: isTablet && 'flex',
                justifyContent: isTablet && 'center',
                '&:hover': {
                  borderBottom: '0px!important'
                }
              }}>
              <Box component={'img'} src="/logo.png" width={isMobile ? 150 : '100%'} maxWidth={200} />
            </Box>

            <Typography variant="body1" sx={{
              fontSize: ".9rem",
              textAlign: isMobile && 'center',
              paddingRight: !isMobile && '3rem',
              padding: isMobile && '0 10%',
              margin: '2rem 0',
            }}>
              Infinity Angel is an 'AOS-style real-time online
              battle arena' High quality free-to-play games
              with the added advantage of creating earning
              opportunities and blockchain technology.
            </Typography>
            <SocialBox>
              {socials.map((item, index) => (
                <Box key={index} component='a' href={item.link}>
                  <Box component='img' src={item.src} />
                </Box>
              ))}
            </SocialBox>
          </Grid>
          <Grid
            item
            xs={6}
            sm={3}
            md={2}
            mt={isTablet && 3}
            textAlign={isMobile && "center"}
          >
            <FooterTitle>
              {library.key_9}
            </FooterTitle>
            <UlCustom >
              <li >
                <a href='mailto:business@gate-keeper.io' target="_blank" rel="noreferrer">
                  info@infinitygames.io
                </a>
              </li>
            </UlCustom>
          </Grid>

          <Grid
            item
            xs={6}
            sm={3}
            md={2}
            mt={isTablet && 3}
            textAlign={isMobile && 'center'}
            pr={isMobile && 2}
            sx={{ height: "100%", wordBreak: "break-all" }}
          >
            <FooterTitle>
              {library.key_10}
            </FooterTitle>
            <UlCustom >
              {aboutInfinity.map(item => (
                <li key={item.label}>
                  <a href={item.link} >
                    {library[item.label]}
                  </a>
                </li>
              ))}
            </UlCustom>
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sm={3}
            mt={isTablet && 3}
            pl={isMobile && 2}
            sx={{ height: "100%", textAlign: isMobile ? 'center' : "start", wordBreak: "break-all" }}
          >
            <FooterTitle>
              {library.key_15}
            </FooterTitle>

            <UlCustom >
              {joinInfinity.map(item => (
                <li key={item.label} >
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {library[item.label]}
                  </a>
                </li>
              ))}
            </UlCustom>
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sm={3}
            mt={isTablet && 3}
            textAlign={useResponsive("down", "md") && "center"}
          >
            <FooterTitle>
              {library.key_20}
            </FooterTitle>
            <UlCustom >
              {socials.map(item => (
                <li key={item.label}>
                  <a href={item.link} >
                    {item.label}
                  </a>
                </li>
              ))}
            </UlCustom>
          </Grid>

        </Grid>
      </Container>
      <EndBox>
        <Typography>
          Copyright © 2022 SPLabs Co. LTD | All Rights Reserved
        </Typography>
      </EndBox>
    </FooterBox>
  );
}
