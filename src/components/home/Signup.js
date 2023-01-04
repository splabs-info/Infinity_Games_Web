
import { Box, Container, Grid, TextField, Typography, alpha, } from "@mui/material";
import { useSelector } from "react-redux";
import { ApplyGameButton, MilestonesTitle, SignUpGrid, TitleBox, TypographyShadow } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { Color } from "../../constant/styled";

export default function Signup() {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");
  const { setting } = useSelector((state) => state);
  const { library } = setting;
  return (
    <Box pt={isDesktop ? 5 : 2} pb={isDesktop ? 10 : 5}
      sx={{
        background: "url('/images/background/bg-7.jpg')",
        backgroundSize: "100% 100%",
      }}>
      <Container>
        <TitleBox>
          <TypographyShadow variant='h3'>
            Sign Up for Project
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
          <Typography variant="p" sx={{
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '25%',
            paddingRight: '25%',
            color: Color.text,
          }}>
            Keep up with the latest project deployments and network updates!
          </Typography>
        </TitleBox>
        <SignUpGrid container>
          <Grid item xs={12} sm={12} md={6}
            sx={{
              backgroundImage: (!isDesktop && !isMobile) && 'url(/images/home/signup.jpg)',
              backgroundSize: (!isDesktop && !isMobile) && 'cover',
              backgroundPosition: (!isDesktop && !isMobile) && 'center',
              borderRadius: (!isDesktop && !isMobile) && '0 0 20px 20px',
              backgroundColor: (!isDesktop && !isMobile) && alpha('#000', 0.5),
              backgroundBlendMode: (!isDesktop && !isMobile) && 'color'
            }}>
            <MilestonesTitle sx={{ color: '#01E8C6', display: 'block', textAlign: 'center' }}>
              Apply for Gamefund
            </MilestonesTitle>
            <Box component="form"
              noValidate
              autoComplete="off"
              sx={{
                mt: 1,
                '& .MuiTextField-root': {
                  mt: 1.5,
                  mb: 1,
                },
                '& .MuiInputBase-root': {
                  borderRadius: '0',
                  color: alpha('#fff', 0.7)
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: alpha('#00FFFB', 0.1),
                },
              }}>
              <TextField
                label="Studio's name"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Website"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                type={'email'}
              />
              <TextField
                label="Game Description"
                variant="outlined"
                fullWidth
              />
              <Box display={'flex'} justifyContent='center' mt={3}>
                <ApplyGameButton>
                  SUBMIT
                </ApplyGameButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            {(isDesktop || isMobile) && <img alt="" src="/images/home/signup.jpg" width={'100%'} height={'100%'} />}
          </Grid>
        </SignUpGrid>

      </Container>
    </Box>
  );
}
