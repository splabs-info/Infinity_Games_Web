
import { Box, Container, } from "@mui/material";
import { alpha, styled } from "@mui/system";
import { MultiChainBox, MultiChainTitle, NetworkBox, TitleBox, TypographyGradient, TypographyShadow } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import Slider from "react-slick";
import { networksSliderSettings } from "./SliderSettings";
import { futureMultiChain } from "./Content";

const CustomLogo = styled("img")(() => ({
  transition: "transform 150ms ease-in-out",
  padding: 0,
  display: "block",
  maxHeight: '45px',
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const networks = [
  {
    label: "network-bnb",
    link: "/",
  },
  {
    label: "network-etherum",
    link: "/",
  },
  {
    label: "network-polygon",
    link: "/",
  },
  {
    label: "network-klaytn",
    link: "/",
  },
  {
    label: "network-avalanche",
    link: "/",
  },

];

const SliderCustom = styled(Slider)(() => ({
  '&.slick-slide': {
    padding: "10px!important",
  },
  "& .slick-slide": {
    transition: "all 0.3s ease-in-out",
    padding: "10px!important",
    "&.slick-active": {
      opacity: "1",
      color: "red",

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
    "& li.slick-active button::before": {
      color: "red",
    },
    "& li": {
      color: "red",
    },
  },
}));

export default function Networks() {
  const isDesktop = useResponsive("up", "md");

  return (
    <Box pb={5}
      sx={{
        background: "url('/images/background/bg-2.jpg')",
        backgroundSize: isDesktop ? "100% 100%" : "cover",
      }} >
      <Box id="Network" sx={{
        background: alpha('#051540', 0.15),
        padding: '0rem 0',
        marginBottom: '2rem',
      }}>
        <Container>
          <SliderCustom {...networksSliderSettings}>
            {networks.map((network, index) =>
              <NetworkBox key={index}>
                <a
                  href={network.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <CustomLogo
                    src={`./images/networks/${network.label}.png`}
                    alt={network.label}
                  />
                </a>
              </NetworkBox>
            )}
          </SliderCustom>
        </Container>
      </Box>
      <Container>
        <TitleBox
          sx={{
            marginTop: isDesktop ? '8rem' : '4rem',
            marginBottom: '2rem'
          }}>

          <TypographyShadow variant='h3'>
            Multi-Chain is the Future
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
        </TitleBox>
        <Box
          mt={5}
          mb={5}
          display={isDesktop ? 'inline-flex' : 'flex'}
          justifyContent={'space-between'}
          flexDirection={!isDesktop && 'column'}
          alignItems={!isDesktop && 'center'}
        >
          {futureMultiChain.map((item, index) =>
            <MultiChainBox key={index} sx={{ background: item.background }}>
              <img
                src={`./images/multi-chain/future-${index + 1}.jpg`}
                alt={item.label}
              />
              <MultiChainTitle variant="h5">
                {item.label}
              </MultiChainTitle>
              <Box component={'p'} sx={{ textAlign: 'center' }}>
                {item.description}
              </Box>
            </MultiChainBox>
          )}
        </Box>
      </Container>
    </Box>
  );
}
