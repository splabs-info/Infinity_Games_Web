import { Box, Link, Button, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { GradientBox } from 'components/gradient-box/DefaultGradient';
import { AppButton, SliderCustom, VideoBox } from 'components/home/HomeStyles';
import { ecosystemAngleSliderSettings } from 'components/home/SliderSettings';
import { Background } from 'constant/styled';
import useResponsive from 'hooks/useResponsive';
import { useNavigate } from 'react-router-dom';
export const MiniGamesCard = ({ background, name, status, description, url }) => {
  const isDesktop = useResponsive('up', 'md');
  const isMobile = useResponsive('down', 'sm');

  return (
    <VideoBox sx={{ marginBottom: 10, width: '100%', background: 'rgb(15,19,32,0.5)' }}>
      <Grid container>
        <Grid item xs={12} md={7} sx={{ '& img': { maxHeight: '330px' } }}>
          <SliderCustom {...ecosystemAngleSliderSettings}>
            {background.map((item, index) => (
              <img
                alt={item.label}
                src={item}
                key={index}
              />
            ))}
          </SliderCustom>
        </Grid>
        <Grid item xs={12} md={5} pl={isDesktop && 4} mt={!isDesktop && 4}>
          <Stack height={'100%'} justifyContent='center' spacing={3} alignItems={isMobile && 'center'}>
            <Typography variant="h3" color={'white'}>{name}</Typography>
            <Typography
              mt={2}
              sx={{ color: 'white', marginBottom: 4 }}
              variant="body1"
              textAlign={'justify'}
            >
              {description}
            </Typography>
            <Box display="flex" pb={!isDesktop && 2}>
              {status ?
                <Link href={url} target='_blank'
                  sx={{
                    textDecoration: 'none',
                    color: 'white',
                    padding: '0.75rem 4rem',
                    background: Background.gradient45,
                    borderRadius: 1,
                    '&:hover': {
                      boxShadow: '0 0 8px #388798',
                    }
                  }} >
                  <Typography fontWeight={'bolder'}>Play</Typography>
                </Link>
                :
                <GradientBox sx={{ padding: '0.75rem 2rem' }}>
                  <Typography fontWeight={'bolder'}>Coming Soon</Typography>
                </GradientBox>
              }
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </VideoBox>
  );
};
