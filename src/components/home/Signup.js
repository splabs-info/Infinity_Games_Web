
import { Box, Container, FormControl, Grid, TextField, Typography, alpha, } from "@mui/material";
import { useSelector } from "react-redux";
import { ApplyGameButton, MilestonesTitle, SignUpGrid, TitleBox, TypographyShadow } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { Color } from "../../constant/styled";

export default function Signup() {
  const isDesktop = useResponsive("up", "md");
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
          <Grid item xs={12} sm={8} md={6}>
            <MilestonesTitle sx={{ color: '#01E8C6', display: 'block', textAlign: 'center' }}>
              Sign Up
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
                label="Platform"
                variant="outlined"
                fullWidth
              />
              <Box display={'flex'} justifyContent='center' mt={3}>
                <ApplyGameButton>
                  APPLY GAME
                </ApplyGameButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6}
          // sx={{ background: 'url(/images/home/signup.jpg)'}}
          >
            {/* {!isDesktop && <img alt="" src="/images/home/signup.jpg" width={'100%'} />} */}
            <img alt="" src="/images/home/signup.jpg" width={'100%'} />

          </Grid>
        </SignUpGrid>

      </Container>
    </Box>
  );
}
