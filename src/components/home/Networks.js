
import { Box, Container, Grid, Hidden, Typography, } from "@mui/material";
import { alpha, styled } from "@mui/system";
import { ImagesAccent, MultiChainBox, MultiChainTitle, NetworkBox, SliderCustom, TitleBox, TypographyShadow, VideoBox } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { networksSliderSettings } from "./SliderSettings";
import { futureMultiChain } from "./Content";
import { Color } from "../../constant/styled";

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


export default function Networks() {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");

  return (
    <Box pb={5}
      sx={{
        background: "url('/images/background/bg-2.jpg')",
        backgroundSize: "100% 100%",
        position: 'relative',
      }} >
      <Hidden mdDown>
        <ImagesAccent component={'img'}
          src={'/images/home/right-0.png'}
          alt=""
          sx={{
            right: 0,
            top: '5rem',
            zIndex: 0
          }}
        />
      </Hidden>
      <Box id="Network" sx={{
        background: alpha('#051540', 0.15),
        padding: '0rem 0',
        marginBottom: isDesktop ? '2rem' : '0.5rem',
        position: 'relative',
        zIndex: 1,
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
        <Grid container>
          <Grid item xs={12} md={6} pt={!isDesktop && '1.5rem'}>
            <VideoBox sx={{
              m: 0,

            }}>
              <img alt="infinity" src="/images/home/signup.jpg" style={{ border: '1px solid rgb(0, 255, 249,0.25)' }} />
            </VideoBox>
          </Grid>
          <Grid item xs={12} md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              paddingLeft: isDesktop && '4rem',
              paddingTop: !isDesktop && '2rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Box display='inline-block' fontSize={isDesktop ? '4.5rem' : '2.5rem'} textAlign={!isDesktop && 'center'}>
              <Typography variant='span' sx={{
                textShadow: '0 0 8px rgba(111,255,251,0.8)',
                lineHeight: '1.3',
                fontFamily: "SVN-Gilroy-heavy",
                WebkitTextStroke: '1px rgb(255,255,255)',
              }}>
                Node&nbsp;
              </Typography>
              <TypographyShadow variant='span'>
                NFT
              </TypographyShadow>
            </Box>
            <Typography variant="p" sx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              color: Color.text,
              textAlign: !isDesktop && 'center'
            }}>
              If you want to get a special NFT that can be used in each game, choose Node NFT. You will be able to enjoy the game by owning game NFTs that no one else can get. In addition, along with $ING and $ISG, which are currencies to be used within the ecosystem
            </Typography>
          </Grid>
        </Grid>

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
          display={isMobile ? 'flex' : 'inline-flex'}
          justifyContent={'space-between'}
          flexDirection={isMobile && 'column'}
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
