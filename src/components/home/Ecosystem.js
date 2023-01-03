
import { Box, Container, Grid, Hidden, Typography, } from "@mui/material";
import { useSelector } from "react-redux";
import { GameBox, GameTextBox, ImagesAccent, SliderCustom, TitleBox, TypographyShadow, VideoBox } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { contentEcosystem, gamesEcosystem, imgPartnersEcosystem, socialMembersEcosystem } from "./Content";
import { ecosystemSliderSettings } from "./SliderSettings";
import { BoxStyled } from "../../constant/styled";

export default function Ecosystem() {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");
  const { setting } = useSelector((state) => state);
  const { library } = setting;
  return (
    <Box pt={isDesktop ? 5 : 2} pb={isDesktop ? 5 : 2}
      sx={{
        background: "url('/images/background/bg-6.jpg')",
        // backgroundSize: "100% 100%",
        backgroundSize: "100% 100%",
        position: 'relative'
      }}>
      <Hidden mdDown>
        <ImagesAccent component={'img'}
          src={'/images/home/left-3.png'}
          alt=""
          sx={{
            left: 0,
            bottom: '0',
          }}
        />
      </Hidden>
      <Container>
        <TitleBox pb={isDesktop ? 5 : 2}>
          <TypographyShadow variant='h3'>
            Ecosystem
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
        </TitleBox>
        <VideoBox >
          <Grid container>
            <Grid item xs={12} md={7}>
              <img alt="infinity" src="/images/ecosystem/pic-1.jpg" />
              <Box display='flex' justifyContent='center' alignItems={'center'} mt={2} mb={!isDesktop && 2}>
                {imgPartnersEcosystem.map((item, index) =>
                  <img src={`/images/ecosystem/${item.label}.png`} alt={item.label} key={index} style={{ maxWidth: '25%' }} />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} pl={isDesktop && 4}>
              <Box display='flex'>
                <Box width={'80%'} display='flex' mb={2}>
                  <Box width={'30%'}>
                    <img src={`/images/ecosystem/logo-square.jpg`} alt={''} style={{ borderRadius: '5px' }} />
                  </Box>
                  <Box width={'70%'}
                    sx={{ color: 'white', paddingLeft: '1rem', }}>
                    <Box sx={{
                      padding: '0.5rem 1rem',
                      borderRadius: '10px',
                      background:
                        "linear-gradient(270deg, #43DDDA 0%,  #1CC2BF 100%)",
                      display: 'inline-block'
                    }}>
                      <Typography variant='body2'>PAST PROJECTS</Typography>
                    </Box>
                    <Typography variant="h4">Infinity Angel</Typography>
                  </Box>
                </Box>
                <Box width={'20%'}>
                  <img src={`/images/ecosystem/qr-code.jpg`} alt={''} style={{ borderRadius: '5px' }} />
                </Box>
              </Box>
              {contentEcosystem.map((item, index) =>
                <Typography key={index} mt={2} sx={{ color: 'white', }} variant='body1' fontSize='0.9rem' textAlign={'justify'}>
                  {item}
                </Typography>
              )}

              <Box display='flex' mt={2} flexWrap='wrap'>
                {socialMembersEcosystem.map((item, index) =>
                  <Box key={index} sx={{
                    display: 'inline-flex',
                    width: '50%',
                    color: 'white',
                    fontSize: '0.85rem',
                    marginTop: '1.5rem',
                    paddingRight: '0.5rem',
                    '& img': {
                      marginRight: '5px',
                    }
                  }}>
                    <img src={item.icon} alt={item.label} width={'25px'} height={'25px'} />
                    {item.label}
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </VideoBox>
        <SliderCustom {...ecosystemSliderSettings}>
          {gamesEcosystem.map((item, index) =>
            <GameBox key={index}>
              <Box component={'img'}
                alt=''
                src={item.src}
              />
              <GameTextBox>
                <Typography>
                  {item.label}
                </Typography>
                <Typography>
                  {item.status}
                </Typography>
              </GameTextBox>
            </GameBox>
          )}
        </SliderCustom>


        <TitleBox pt={isDesktop ? 10 : 5}>
          <TypographyShadow variant='h3'>
            Guild Games
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
          <Typography variant="p" sx={{
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '25%',
            paddingRight: '25%',
            color: 'white',
          }}>
            COMING SOON
          </Typography>
        </TitleBox>

        <TitleBox pt={isDesktop ? 5 : 2}>
          <TypographyShadow variant='h3'>
            Secured By
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
          <Box sx={{
            background: '#026B69',
            border: '1px solid white',
            borderRadius: '30px',
            padding: '1rem',
            marginTop: '2rem',
            "&:hover": {
              transition: '0.5s',
              boxShadow: BoxStyled.boxShadow,
            },
          }}>
            <img alt="" src="/images/ecosystem/certik.png" />
          </Box>
        </TitleBox>


      </Container>
    </Box>
  );
}
