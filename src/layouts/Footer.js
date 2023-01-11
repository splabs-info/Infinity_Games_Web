import {
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useEffect, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EndBox, FooterBox, SocialBox, FooterTitle, UlCustom, WhitePaperButton } from "../components/footer/FooterStyles";
import useResponsive from "../hooks/useResponsive";
import { _changeLanguage } from "../store/setting/settingActions";
import { IconLang } from "../components/header/HeaderStyles";
import { whitepaper } from "../components/home/Content";



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
    label: "MARKETPLACE",
    link: "https://marketplace.infinityangel.io/"
  },
  {
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
    link: "https://discord.gg/f4FEgmYTQF ",
    label: 'Discord',
  },
  {
    src: "/images/icon/icon-telegram.png",
    link: "https://t.me/infinityangel_global",
    label: 'Telegram',
  },
  {
    src: "/images/icon/icon-twitter.png",
    link: "https://twitter.com/InfinityAngelio",
    label: 'Twitter',
  },
  {
    src: "/images/icon/icon-fb.png",
    link: "https://www.facebook.com/InfinityAngel.io/  ",
    label: 'Facebook',
  },
  {
    src: "/images/icon/icon-youtube.png",
    link: "https://www.youtube.com/channel/UCNPxb1l4SBWFTn106zjs4tg",
    label: 'Youtube',
  },

]

export default function Footer() {

  const dispatch = useDispatch()
  const { setting } = useSelector((state) => state);
  const { library } = setting;

  const isMobile = useResponsive("down", "sm");
  const isTablet = useResponsive("down", "md");

  // const [anchorEl2, setAnchorEl2] = useState(null);
  // const open = Boolean(anchorEl2);

  // const handleCloseMenu = () => {
  //   setAnchorEl2(null);
  // };
  // const handleClick = (event) => {
  //   setAnchorEl2(event.currentTarget);
  // };

  useEffect(() => {
    dispatch(_changeLanguage(localStorage.getItem("lang")));
  }, [dispatch]);


  return (
    <>
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
                Infinity Games is a multi-game platform that supports various blockchains and is a game studio that can dramatically evolve Web 2.0 games into Web 3.0 games.
              </Typography>
              <SocialBox>
                {socials.map((item, index) => (
                  <Box key={index} component='a' href={item.link} target="_blank">
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
                  <a href='mailto:info@infinitygames.io' target="_blank" rel="noreferrer">
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
              {/* <WhitePaperButton onClick={handleClick}>
                {library.WHITEPAPER}&nbsp;&nbsp;
                <span
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "6px solid #fee8e2",
                  }}
                ></span>
              </WhitePaperButton> */}
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
                    <a href={item.link} target="_blank" rel="noreferrer">
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
      {/* <Box>
        <Menu
          anchorEl={anchorEl2}
          open={open}
          onClose={handleCloseMenu}
        >
          {whitepaper.map((item) => (
            <MenuItem
              key={item.url}
              onClick={handleCloseMenu}
              sx={{
                "& a": {
                  color: "#0a0a0a",
                  textDecoration: "none",
                  display: "inline-flex",
                },
              }}
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <IconLang component={"img"} src={item.icon} />
                {item.lang}
              </a>
            </MenuItem>
          ))}
        </Menu>
      </Box> */}
    </>
  );
}
