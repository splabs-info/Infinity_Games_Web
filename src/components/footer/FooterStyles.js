
import {
    Box,
    Button,
    Menu,
} from "@mui/material";
import { styled } from "@mui/system";

export const FooterBox = styled(Box)(({ theme }) => ({
    background: "url('/images/background/bg-8.jpg')",
    backgroundSize: "100% 100%",
    padding: "5rem 0 1rem",
    color: 'white',
    "& a": {
        paddingBottom: '0.25rem'
    },
    "& a:hover": {
        borderBottom: "2px solid #01E8C6",
        fontWeight: 700,
    },
}));

export const UlCustom = styled(Box)(({ theme }) => ({
    color: "white",
    "& li": {
        listStyle: 'none',
        paddingBottom: '10px',
        fontSize: '0.9rem',

    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.6rem",
    },
}));

export const FooterTitle = styled(Box)(({ theme }) => ({
    color: "white",
    fontSize: '1.25rem',
    paddingBottom: '0.75rem',
    fontFamily: "SVN-Gilroy-semi-bold",
    [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
    },
}));

export const SocialBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    "& img": {
        width: '90%',

    },
    "& a": {
        marginRight: '0.5rem',

    },
    "& a:hover": {
        borderBottom: '0px',
        "& img": {
            boxShadow: '0 0 10px white',
            borderRadius: '16px',
        }
    },
    [theme.breakpoints.down("md")]: {
        justifyContent: 'center',
    },
}));


export const EndBox = styled(Box)(() => ({
    color: "white",
    textAlign: 'center',
    padding: '1.5rem 1rem 1rem',
    marginTop: '3rem',
    "& p": {
        fontSize: '0.85rem',
        fontWeight: 500,
        fontFamily: "SVN-Gilroy-regular",
    },
}));



export const MenuCustom = styled(Menu)(() => ({
    "&.MuiPopover-root": {
        border: 'none',
    },
    "& .MuiPaper-root": {
        background: '#0a0a0a!important',
        boxShadow: "none",
        border: "1px solid #98cafe",
        color: "white",
    }
}));

export const WhitePaperButton = styled(Button)(() => ({
    color: "white",
    lineHeight: "1",
    marginRight: "2rem",
    background: 'transparent',
    fontFamily: "SVN-Gilroy-regular",
    fontSize: '1rem',
    fontWeight: 500,
    "&:hover": {
        borderBottom: "1px solid #01E8C6",
        borderRadius: '0px',
        color: "#01E8C6",
        background: 'transparent',
        fontWeight: 700,
    },
}));