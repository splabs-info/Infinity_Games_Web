import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  CircularProgress,
  Collapse,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { IconMenu2, IconWallet } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useResponsive from "../hooks/useResponsive";
import Languages from "./Languages";
import { WhitePaperButton, HeaderBox, IconLang, Navbar, ApplyButton, PriceBox } from "../components/header/HeaderStyles";
import { Color } from "../constant/styled";
import { SliderCustom } from "../components/home/HomeStyles";
import { buyOnSliderSettings, networksSliderSettings } from "../components/home/SliderSettings";
import axios from "axios";
import { whitepaper } from "../components/home/Content";
import { get } from "../utils/api";

const config = [

  { label: "MARKETPLACE", link: "", href: "https://marketplace.infinityangel.io/" },
  { label: "key_2", link: "/coming-soon" },
  { label: "key_5", link: "/coming-soon" },
  { label: "key_3", link: "/coming-soon" },
  { label: "key_4", link: "/coming-soon" },
  { label: "key_6", link: "/coming-soon" },
  { label: "key_7", link: "/coming-soon" },
];

const subMenus = [
  {
    label: "WHITEPAPER",
    items: [
      {
        label: "English",
        link: "https://infinityangel.gitbook.io/infinity-games-2.0/",
      },
      {
        label: "Korean",
        link: "https://infinityangel.gitbook.io/korea-infinity-games-2.0/",
      },
      {
        label: "Vietnamese",
        link: "https://infinityangel.gitbook.io/vietnam-infinity-games-2.0/",
      },
      {
        label: "Japanese",
        link: "https://infinityangel.gitbook.io/japan-infinity-games-2.0/",
      },
    ],
  },
  {
    label: "INFORMATION",
    items: [
      {
        link: "https://discord.gg/f4FEgmYTQF ",
        label: 'Discord',
      },
      {
        link: "https://t.me/infinityangel_global",
        label: 'Telegram',
      },
      {
        link: "https://twitter.com/InfinityAngelio",
        label: 'Twitter',
      },
      {
        link: "https://www.facebook.com/InfinityAngel.io/  ",
        label: 'Facebook',
      },
      {
        link: "https://www.youtube.com/channel/UCNPxb1l4SBWFTn106zjs4tg",
        label: 'Youtube',
      },
    ],
  },
];

const buyOns = [
  {
    label: "gate.io",
    link: "https://www.gate.io/vi/trade/ING_USDT",
  },
  {
    label: "phemex",
    link: "https://phemex.com/spot/trade/INGUSDT",
  },
  {
    label: "mexc",
    link: "https://www.mexc.com/exchange/ING_USDT",
  },
  {
    label: "hotbit",
    link: "https://www.hotbit.io/exchange?symbol=ING_USDT",
  },
  {
    label: "huobi",
    link: "https://www.huobi.com/en-us/exchange/ing_usdt",
  },

];

export default function Header() {
  const { setting } = useSelector((state) => state);
  const { library } = setting;
  const isTablet = useResponsive(`down`, `md`);
  const isMobile = useResponsive(`down`, `sm`);


  const [changeINGData, setChangeINGData] = useState('');

  const [showSidebar, setShowSidebar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const scroll = (id) => {
    const section = document.querySelector(`${id}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpen = () => {
    setShowSidebar(true);
  };

  const handleClose = () => {
    setShowSidebar(false);
  };

  const [scrollPositionToggle, setScrollPositionToggle] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 75) {
      setScrollPositionToggle(true);
    } else {
      setScrollPositionToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    get(`/data/ticker`
      , ((getData) => {
        setChangeINGData(getData);
      }))
    const timer = setInterval(() => {
      get(`/data/ticker`
        , ((getData) => {
          setChangeINGData(getData);
        }))
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeaderBox >
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          className={scrollPositionToggle ? "sticky-scroll" : "not-scroll"}
        >
          <Navbar>
            <Box component={Link} to="/" className="logo">
              <Box
                component="img"
                src="/logo.png"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Hidden lgDown>

                {config.map((item, index) => {
                  if (item.link && item.link.indexOf("#") <= -1) {
                    return (
                      <Link
                        to={item.link}
                        key={index}
                        className={item.customStyle || ""}
                      >
                        {library[item.label]}
                        {item.icon}
                      </Link>
                    );
                  } else
                    return (
                      <a
                        href={item.href}
                        target='_blank'
                        key={index} rel="noreferrer"
                      >
                        {library[item.label]}
                      </a>
                    );
                })}

                <ApplyButton>
                  <img src="/images/icon/icon-wallet.png" alt="" />&nbsp;&nbsp; {library.Connect_Wallet}
                </ApplyButton>
                {/* <Languages sx={{ color: "white" }} /> */}
              </Hidden>

              {/* <AccountPopover /> */}

              <Hidden lgUp>
                <IconButton
                  sx={{
                    padding: "4px",
                    marginLeft: "1.5rem",
                    "& svg": {
                      color: Color.primary,
                      padding: '0',
                    }
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                >
                  <IconMenu2 size="30px" />
                </IconButton>
              </Hidden>
            </Box>
          </Navbar>
        </Container>
        <Hidden smDown>
          <PriceBox spacing={3} sx={{ display: scrollPositionToggle ? 'none' : 'block' }}>
            <Container
              maxWidth={"xl"}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: 'center',
                position: 'relative'
              }}
            >
              <Box>
                <Typography>ING:</Typography>
                <Typography minWidth={100} color={Color.accent}>
                  {changeINGData?.last ? <>$ {changeINGData?.last}</> : <CircularProgress size={15} color="primary" />}
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: 'center',
              }}>
                <Typography>Historical change:</Typography>
                <Typography className={changeINGData?.percentChange > 0 ? "Up Change" : "Down Change"} minWidth={70}>
                  {changeINGData?.percentChange ? Math.abs(changeINGData?.percentChange) : <CircularProgress size={15} color="primary" />}
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row'
              }}>
                <Typography color={Color.text} ml={2}> Buy On </Typography>
                <SliderCustom {...buyOnSliderSettings} sx={{ maxWidth: '100px' }}>
                  {buyOns.map((item, index) =>
                    <Stack
                      flexDirection={'row'}
                      alignItems={'center'}
                      spacing={2}
                      key={index}
                      display={'flex!important'}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'row'
                        }}
                      >
                        <Box component={'img'}
                          src={`./images/icon/icon-${item.label}.png`}
                          alt={item.label}
                          mr={'8px!important'}
                        />
                        {item.label === 'gate.io' ?
                          <Typography>Gate.io</Typography>
                          :
                          <Typography textTransform={'capitalize'}>{item.label}</Typography>}

                        <Box component={'img'}
                          src={`./images/icon/icon-arrow-up.png`}
                          alt={item.label}
                        />

                      </a>
                    </Stack>
                  )}
                </SliderCustom>
              </Box>
              <Hidden lgDown>
                <Box sx={{
                  position: 'absolute',
                  right: '2rem'
                }}>
                  <WhitePaperButton onClick={handleClick}>
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
                  </WhitePaperButton>
                </Box>
              </Hidden>
            </Container>
          </PriceBox>
        </Hidden>

      </HeaderBox>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
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
      <Drawer open={showSidebar} anchor="right" onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            background: "url('/images/background/bg-2.jpg')",
          }
        }}>
        <Box sx={{ width: isTablet ? 300 : 300, color: 'white' }} >
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              aria-label="CLose menu list"
              onClick={handleClose}
              sx={{ color: "#25CAC6" }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Languages sx={{ "& span": { color: "#637381" } }} />
          </Box>
          <List>
            <Hidden lgUp>
              <Divider />
              {config.map((item, index) => {
                if (item.link && item.link.indexOf("#") <= -1) {
                  return (
                    <Link
                      to={item.link}
                      style={{ textDecoration: "none", color: "white" }}
                      key={index}
                    >
                      <ListItemButton
                        onClick={() => {
                          handleClose();
                        }}
                        key={index}
                      >
                        <ListItemText>{library[item.label]}</ListItemText>
                      </ListItemButton>
                    </Link>
                  );
                }
                return (
                  <ListItemButton key={index}>
                    <ListItemText
                      onClick={() => {
                        scroll(item.link);
                        setTimeout(() => {
                          handleClose();
                        }, 1000);
                      }}
                    >
                      <a
                        href={item.href}
                        target='_blank'
                        key={index} rel="noreferrer"
                      >
                        {library[item.label]}
                      </a>
                    </ListItemText>
                  </ListItemButton>
                );
              })}
            </Hidden>
            <Divider />

            {subMenus.map((menu, index) => (
              <SubMenu menu={menu} key={index} library={library} />
            ))}

            <Divider />
          </List>
        </Box>
      </Drawer>
    </>
  );
}

const SubMenu = ({ menu, library }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (menu.items) {
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={library[menu.label]} />
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menu?.items?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "unset",
                  textDecoration: "unset",
                }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 20,
                    }}
                  >
                    <div
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgb(145, 158, 171)",
                        transition:
                          "transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </a>
            ))}
          </List>
        </Collapse>
      </>
    );
  } else {
    return (
      <a
        href={menu.link}
        style={{ textDecoration: "none", color: "#212b36" }}
        target="_blank"
        rel="noreferrer"
      >
        <ListItemButton>
          <ListItemText primary={library[menu.label]} />
        </ListItemButton>
      </a>
    );
  }
};