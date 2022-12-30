
import { Box, Container, Typography, } from "@mui/material";
import { MultiChainBox, MultiChainTitle, TitleBox, TypographyShadow, VideoBox } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { growGame } from "./Content";
import { Color } from "../../constant";


export default function GrowGame() {
  const isDesktop = useResponsive("up", "md");

  return (
    <Box
      pt={isDesktop ? 10 : 3}
      pb={isDesktop ? 5 : 3}
      sx={{
        background: "url('/images/background/bg-3.jpg')",
        backgroundSize: isDesktop ? "100% 100%" : "cover",
      }}>
      <Container>
        <TitleBox
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: '0'
          }}>

          <TypographyShadow variant='h3' >
            Video by SPLabs
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
        </TitleBox>
        <VideoBox>
          <img alt="infinity" src="/images/multi-chain/img-video.jpg" />
        </VideoBox>

        <TitleBox
          sx={{
            marginTop: isDesktop ? '8rem' : '4rem'
          }}>

          <TypographyShadow variant='h3' >
            Grow Game Project with Multi-Chain
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-3.png" />
          <Typography variant="p" sx={{
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '25%',
            paddingRight: '25%',
            color: Color.text,
          }}>
            Infinity Games helps game projects expand their reach to new users
            and markets with a multi-chain approach.
          </Typography>
        </TitleBox>
        <Box
          mt={5}
          mb={5}
          display={isDesktop ? 'inline-flex' : 'flex'}
          justifyContent={'space-between'}
          flexDirection={!isDesktop && 'column'}
          alignItems={!isDesktop && 'center'}

        >
          {growGame.map((item, index) =>
            <MultiChainBox key={index} sx={{ background: item.background }}>
              <img
                src={`./images/multi-chain/chain-${index + 1}.jpg`}
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
