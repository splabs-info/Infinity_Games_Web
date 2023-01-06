import { alpha, Box, Button, Grid, styled, Typography } from "@mui/material";
import { Background, BoxStyled, Color } from "../../constant/styled";
import { LoadingButton } from "@mui/lab";
import Slider from "react-slick";

export const TitleBox = styled(Box)(({ theme }) => ({
  paddingBottom: "2rem",
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  alignItems: 'center',
}));

export const TypographyGradient = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  background: "linear-gradient(to right, #D0C4FC 0%, #9CEAF0 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textTransform: 'uppercase',
  lineHeight: '1.3',
}));
export const TypographyShadow = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "initial",
  textShadow: '0 0 8px rgba(111,255,251,0.8)',
  lineHeight: '1.3',
  fontFamily: "SVN-Gilroy-heavy",
  marginBottom: '1rem',
}));
export const TypographyOutline = styled(Typography)(({ theme }) => ({
  display: "initial",
  lineHeight: '1.3',
  WebkitTextStroke: '1px rgba(111,255,251,0.8)',
  WebkitTextFillColor: alpha('#EBEBEB', 0.07),
}));

export const ImagesAccent = styled(Box)(({ theme }) => ({
  position: "absolute",
}));

export const SliderCustom = styled(Slider)(() => ({

  "& .slick-slide": {
    transition: "all 0.3s ease-in-out",
    padding: "15px 10px!important",
    "&.slick-active": {
      opacity: "1",
    },
    "&.slick-current": {
      opacity: "1",
    },
    "&.slick-center": {
      marginTop: "-3rem",
    },
    "&.slick-prev": {
      height: "3rem",
    },
  },
  "& .slick-dots": {
    bottom: '-16px',
    "& li": {
      width: 'unset'
    },
    "& li button": {
      width: '8px'
    },
    "& li button:before": {
      content: '""',
      background: Color.primary,
      padding: 0,
      opacity: 0.25,
      borderRadius: '8px',
      height: '8px',
      width: '8px',
      transition: '0.5s',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
    "& li.slick-active button:before": {
      borderRadius: '10px',
      width: '32px',
      transition: '0.5s'
    },
    "& li.slick-active button": {
      width: '32px',
    },

  },
}));

// Title

export const ButtonTitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '1rem',
  '& button': {
    borderRadius: "2rem",
    padding: "1rem 2rem",
    marginRight: "1.5rem",
    width: "fit-content",
    alignSelf: "center",
    fontFamily: "SVN-Gilroy-heavy",
    minWidth: '200px',
    fontSize: '1rem',
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: 'center',
    '& button': {
      minWidth: 'unset',
      fontSize: '0.85rem',
      marginRight: "0.5rem",
      padding: "0.5rem 1.25rem",
    }
  },
  [theme.breakpoints.down("sm")]: {
  },

}));


export const ApplyButton = styled(Button)(({ theme }) => ({
  position: "relative",
  background: "white",
  color: 'black',
  minWidth: '200px',
  transition: '0.5s,background 1s',
  "&:hover": {
    background:
      "linear-gradient(270deg, #11ADA9 0%, #25CAC6 50%, #2AD8D3 100%)",
    color: 'white',
    transition: '0.5s, background 1s',
    boxShadow: BoxStyled.boxShadow,
  },
  [theme.breakpoints.down("md")]: {

    minWidth: '200px',
  },
  [theme.breakpoints.down("sm")]: {

  },

}));

export const AppButton = styled(Button)(({ theme }) => ({
  position: "relative",
  color: 'white',
  background:
    "linear-gradient(45deg, #11ADA9 0%, #25CAC6 50%, #2AD8D3 100%)",
  transition: '0.5s,background 1s',
  "&:hover": {
    background:
      "linear-gradient(270deg, #11ADA9 0%, #25CAC6 50%, #2AD8D3 100%)",

    boxShadow: BoxStyled.boxShadow,
    transition: '0.5s,background 1s',

  },
}));

export const ApplyGameButton = styled(LoadingButton)(({ theme }) => ({
  color: Color.text_2,
  background: Color.accent,
  padding: '0.75rem 3rem',
  transition: '0.5s',
  borderRadius: '15px',
  "&:hover": {
    transform: 'scale(1.1)',
    color: Color.text_2,
    background: Color.accent,
    transition: '0.5s',
    boxShadow: BoxStyled.boxShadow,
  },
}));

//Networks

export const NetworkBox = styled(Box)(({ theme }) => ({
  "& a": {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.5rem',
  },

}));


// MultiChain
export const MultiChainBox = styled(Box)(({ theme }) => ({
  background: "#141B22",
  padding: '1.5rem',
  display: 'flex!important',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  border: '1px solid #00FFF9',
  boxShadow: '0 0 10px rgba(0,255,249,0.5)',
  color: '#7780A1',
  width: '30%',
  position: 'relative',
  marginBottom: '2rem',
  height: '100%',
  minHeight: '500px',
  transition: '0.5s',
  "&::before": {
    content: "url(/images/home/border-square-long.png)",
    position: "absolute",
    transform: 'scaleX(-1) scaleY(-1)',
    top: '-18px',
    left: '-12px',
    zIndex: "1",
  },
  "&::after": {
    content: "url(/images/home/border-square-long.png)",
    position: "absolute",
    bottom: '-18px',
    right: '-12px',
    zIndex: "1",
  },

  "&:hover": {
    transform: 'scale(1.1) ',
    transition: '0.5s',
    boxShadow: BoxStyled.boxShadow2,
  },

  [theme.breakpoints.down("md")]: {
    width: '32%',
    minHeight: '450px',
  },
  [theme.breakpoints.down("sm")]: {
    width: '90%',
    "&:hover": {
      transform: 'scale(1) ',
      boxShadow: BoxStyled.boxShadow
    },

  },
}));

export const MultiChainTitle = styled(Typography)(({ theme }) => ({
  color: "#00FFF9",
  textAlign: "center",
  lineHeight: '1.3',
  fontFamily: "SVN-Gilroy-semi-bold",
  margin: '1.5rem 0 1rem',
}));

//Box radius
export const VideoBox = styled(Box)(({ theme }) => ({
  background: "transparent",
  padding: '1.5rem',
  display: 'flex!important',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  border: '1px solid #00FFF9',
  borderRadius: '20px',
  position: 'relative',
  marginBottom: '2rem',
  marginTop: '2rem',
  height: '100%',
  minHeight: '400px',
  "&::before": {
    content: "url(/images/home/border-radius-long.png)",
    position: "absolute",
    transform: 'scaleX(-1) scaleY(-1)',
    top: '-20px',
    left: '-13px',
    zIndex: "1",
  },
  "&::after": {
    content: "url(/images/home/border-radius-long.png)",
    position: "absolute",
    bottom: '-20px',
    right: '-13px',
    zIndex: "1",
  },
  "& img": {
    borderRadius: '20px',
  },
  "&:hover": {
    transition: '0.5s',
    boxShadow: BoxStyled.boxShadow2,
  },
  [theme.breakpoints.down("md")]: {

    minHeight: '420px',
  },
  [theme.breakpoints.down("sm")]: {

    padding: '.75rem',
    minHeight: '200px',
  },
}));


// RoadMap

export const MilestonesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',

  '& .ContentBox': {
    marginBottom: '-1rem',
    marginTop: '-1rem',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',

  },

  '& .Milestones-Content': {
    width: '100%',
    marginBottom: '-1rem',
    marginTop: '-1rem',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'end',
    background: "#141B22",
    padding: '3rem',
    // border: '1px solid #00FFF9',
    boxShadow: '0 0 10px rgba(0,255,249,0.5)',
    position: 'relative',
    "&::before": {
      content: "url(/images/home/border-square-short.png)",
      position: "absolute",
      transform: 'scaleX(-1) scaleY(-1)',
      top: '-21px',
      left: '-14px',
      zIndex: "1",
    },
    "&::after": {
      content: "url(/images/home/border-square-short.png)",
      position: "absolute",
      bottom: '-21px',
      right: '-14px',
      zIndex: "1",
    },
  },
  '&:nth-of-type(2n+1)': {
    flexDirection: 'row-reverse',
    '& .Milestones-Content': {
      alignSelf: 'start',
    }
  },
  '&:nth-of-type(3)': {
    margin: '-6rem 0'
  },
  '&:nth-of-type(2n+1) img': {
    transform: 'rotate(180deg)',
  },
  [theme.breakpoints.down("md")]: {
    '& .Milestones-Content': {
      marginBottom: '1rem',
      marginTop: '1rem',
      width: '100%',
    },
    '&:nth-of-type(3)': {
      margin: '0'
    },
  },

}));

export const MilestonesTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "SVN-Gilroy-semi-bold",
  fontSize: '1.75rem',
  color: Color.primary,
  textShadow: 'rgba(0,0,0,0.25) 0 0 4px ',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const MilestonesList = styled('ul')(({ theme }) => ({
  padding: '0.5rem 1rem',
  color: Color.text,
}));

// Ecosystem
export const EcosystemBox = styled(Box)(({ theme }) => ({
  background: "#04051E",
  margin: "1rem",
  padding: '2rem',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '1rem',
  position: 'relative',
  "&::before": {
    content: "''",
    position: "absolute",
    inset: "0px",
    borderRadius: "1rem",
    padding: " 1px",
    background:
      "linear-gradient(90deg, #96E0DA 0%, #EACCF8 50%, #937EF3 100%)",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
    zIndex: "0",
  },
}));


export const GameBox = styled(Box)(({ theme }) => ({
  background: Color.background,
  borderRadius: '10px',
  border: BoxStyled.border,
  padding: '1rem',
  "& img": {
    borderRadius: '10px',
    width: '100%'
  },
  "&:hover": {
    transition: '0.5s',
    boxShadow: BoxStyled.boxShadow,
  },

}));

export const GameTextBox = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: "center",
  justifyContent: 'space-between',
  width: '100%',
  paddingTop: '1rem',
  color: 'white',
  "& p:first-of-type": {
    fontSize: '0.85rem',
    fontWeight: '800'
  },
  "& p:last-of-type": {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    background: Background.gradientDark,
    borderRadius: '10px',
    padding: '0.1rem 0.35rem'
  },
  [theme.breakpoints.down("sm")]: {
    display: 'flex',
    flexDirection: 'column',
    "& p:last-of-type": {
      marginTop: '0.5rem',
    },
  },
}));

export const LoadMoreButton = styled(Button)(({ theme }) => ({

}));

//SignUp
export const SignUpGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  background: "linear-gradient(to bottom, #061224 0%, #0A172B 100%)",
  borderRadius: '0 20px 20px 20px',
  marginTop: 42,
  "&::before": {
    content: "url(/images/home/pleat-signup.png)",
    position: "absolute",
    top: '-42px',
    left: '0',
    zIndex: "1",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    inset: "0px",
    borderRadius: "20px",
    padding: " 2px",
    background:
      "linear-gradient(to bottom, transparent 25%, #153851 70%)",
    WebkitMask:
      "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
    WebkitMaskComposite: "xor",
    zIndex: "1",
  },
  '& img': {
    borderRadius: '0 20px 20px 0',
    zIndex: 0
  },

  '& .MuiGrid-item:first-of-type': {
    padding: '4rem',
    zIndex: "2",
  },
  [theme.breakpoints.down("sm")]: {
    '& img': {
      borderRadius: '0 0 20px 20px',
      zIndex: 0
    },
  },

}));
