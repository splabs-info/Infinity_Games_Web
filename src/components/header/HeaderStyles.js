
import {
    Box,
    Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { Color } from "../../constant/styled";

export const HeaderBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: 'column',
    position: "fixed",
    width: "100vw",
    zIndex: "10",
    borderBottom: '1px solid rgba(71,193,190,0.1)',
    '& .sticky-scroll': {
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        transition: '0.5s',
        '& .logo': {
            transition: '0.65s',
            width: '150px',
        }
    },
    '& .not-scroll': {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        transition: '0.5s',
        '& .logo': {
            transition: '0.65s',
            width: '250px',
        }
    }
}));

export const PriceBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: '100vw',
    paddingLeft: '0.75rem',
    borderTop: '1px solid rgba(71,193,190,0.1)',
    color: Color.text,
    '& .MuiBox-root': {
        marginRight: '1rem',
        display: 'inline-flex',
        '& .MuiTypography-root': {
            marginRight: '0.5rem',
            whiteSpace: 'nowrap'
        }
    },

    '& .Change': {
        color: 'white',
        fontWeight: 600,
        padding: '0.25rem 1.5rem 0.25rem 0.75rem',
        borderRadius: '8px',
        position: 'relative',
        "&::after ": {
            content: '"‣"',
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            fontSize: '1.25rem',
        }
    },
    '& .Down': {
        background: Color.red,
        "&::after ": {
            transform: 'translate(50%, -50%) rotate(90deg)',
        }
    },
    '& .Up': {
        background: Color.secondary,
        "&::after ": {
            transform: 'translate(50%, -50%) rotate(-90deg)',
        }
    }


}));

export const Navbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    padding: ".5rem 0 ",
    fontFamily: "SVN-Gilroy-regular",
    textTransform: 'uppercase',
    "& a": {
        padding: "0 0.3rem",
        margin: "0 0.3em",
        display: 'block',
        fontSize: '0.95rem',
        "&:last-child": {
            marginRight: "0",
        },
    },
    "& a:hover": {
        borderBottom: "1px solid #01E8C6",
        borderRadius: '0px',
        color: "#01E8C6",
        background: 'transparent',
        fontWeight: 700,
    },
    "& a.logo": {
        padding: '0',
        margin: '0',
        marginLeft: '1rem'
    },
    "& a.logo:hover": {
        borderBottom: "0px solid #01E8C6",
    },
    "& .active": {
        fontWeight: 700,
        color: "#01E8C6",
    },
    "& .minting": {
        fontWeight: 700,
        color: "#fff",
        display: "initial",
        background: "linear-gradient(to right, #fc935f 0%, #FEAD4C 100%)!important",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
        position: "relative",
        "& svg": {
            position: "absolute",
            top: "-7px",
            right: "-7px",
        },
        "&:hover": {
            WebkitTextFillColor: "white",
        },
    },
    [theme.breakpoints.down("md")]: {
        padding: "10px",
    },
}));

export const WhitePaperButton = styled(Button)(() => ({
    color: "white",
    lineHeight: "1",
    marginRight: "0rem",
    background: 'transparent',
    fontFamily: "SVN-Gilroy-regular",
    fontSize: '1rem',
    textTransform: 'uppercase',
    fontWeight: 500,
    "&:hover": {
        borderBottom: "1px solid #01E8C6",
        borderRadius: '0px',
        color: "#01E8C6",
        background: 'transparent',
        fontWeight: 700,
    },
}));


export const ApplyButton = styled(Button)(({ theme }) => ({
    position: "relative",
    background: "transparent",
    color: 'white',
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    margin: "0 1.5rem",
    width: "fit-content",
    alignSelf: "center",
    "&::before": {
        content: "''",
        position: "absolute",
        inset: "0px",
        borderRadius: "2rem",
        padding: " 1px",
        background:
            "linear-gradient(45deg, #406C80 0%, #47C1BE 100%)",
        WebkitMask:
            "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
        WebkitMaskComposite: "xor",
        zIndex: "1",
    },
    "&:hover": {
        background:
            "linear-gradient(45deg, #11ADA9 0%, #25CAC6 50%, #2AD8D3 100%)",

    },
}));

export const AppButton = styled(Button)(({ theme }) => ({
    position: "relative",
    background: "transparent",
    color: 'white',
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    margin: "0 1.5rem",
    width: "fit-content",
    alignSelf: "center",
    "&::before": {
        content: "''",
        position: "absolute",
        inset: "0px",
        borderRadius: "2rem",
        padding: " 1px",
        background:
            "linear-gradient(45deg, #406C80 0%, #47C1BE 100%)",
        WebkitMask:
            "linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)",
        WebkitMaskComposite: "xor",
        zIndex: "1",
    },
    "&:hover": {
        background:
            "linear-gradient(45deg, #11ADA9 0%, #25CAC6 50%, #2AD8D3 100%)",

    },
}));

export const IconLang = styled(Box)(() => ({
    height: "25px",
    paddingRight: "10px",
}));