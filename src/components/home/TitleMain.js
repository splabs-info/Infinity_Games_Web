import { Box, Container, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { ButtonTitleBox, ApplyButton, AppButton, TypographyOutline } from "./HomeStyles";

const Title = [
  'Journey Games Web3',
  'on the Multi-Chain!',
]
const SubTitle = [
  'Join our multi-chain gaming world, which connects people ',
  'from different blockchain communities.',
]


export default function TitleMain() {
  const isDesktop = useResponsive("up", "md");
  const isTablet = useResponsive("down", "md");
  const isMobile = useResponsive("down", "sm");
  return (
    <Box
      sx={{
        background: "url('/images/background/bg-1.jpg')",
        backgroundSize: isDesktop ? "100% 100%" : "100% 100%",
        backgroundPosition: 'center',
        minHeight: isTablet ? 'unset' : "100vh",
      }}
      pt={isDesktop ? 10 : 5}
      pb={isDesktop ? 6 : 3}
    >
      <Container maxWidth={'lg'} sx={{ minHeight: isTablet ? 'unset' : "85vh", }}>
        <Grid container sx={{ minHeight: isTablet ? 'unset' : "85vh", flexDirection: isTablet && 'column-reverse' }}>
          <Grid item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
            <Box mt={isDesktop ? 5 : 0} textAlign={!isDesktop && 'center'}>
              <Typography
                fontSize={isDesktop ? "2rem" : '1.5rem'}
                fontFamily='SVN-Gilroy-heavy'
                variant="h2"
                color={'white'}
              >
                {Title[0]}<br />
              </Typography>
              <TypographyOutline
                fontSize={isDesktop ? "2rem" : '1.5rem'}
                fontFamily='SVN-Gilroy-heavy'
                variant="h2"
              >
                {Title[1]}<br />
              </TypographyOutline>

            </Box>
            <Box sx={{
              margin: "1rem 0"
            }}>
              {SubTitle.map((item) => (
                <Box key={item} component={'p'}
                  sx={{
                    color: 'white',
                    fontSize: isMobile && '14px',
                    textAlign: !isDesktop && 'center',
                  }}>
                  {item}
                </Box>
              ))}
            </Box>

            <ButtonTitleBox>
              <AppButton>
                <img alt="infinity" src="/images/icon/icon-rocket.png" />&nbsp;&nbsp;Apply for Guilds
              </AppButton>
              <ApplyButton>
                <img alt="infinity" src="/images/icon/icon-note.png" />&nbsp;&nbsp;Contact us
              </ApplyButton>
            </ButtonTitleBox>
          </Grid>
          <Grid item
            xs={12}
            md={6}
            mt={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
            }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            >
              <img alt="infinity" src="/images/home/home-1.png" width={isDesktop ? '100%' : '75%'}
                className={isDesktop ? 'imgGames' : ''} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
}
