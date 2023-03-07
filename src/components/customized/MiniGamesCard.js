import { Box, Button, Grid, Typography } from '@mui/material';
import { AppButton, SliderCustom, VideoBox } from 'components/home/HomeStyles';
import { ecosystemAngleSliderSettings } from 'components/home/SliderSettings';
import useResponsive from 'hooks/useResponsive';
import { Link, useNavigate } from 'react-router-dom';
export const MiniGamesCard = ({ background, name, status, description, url }) => {
    const isDesktop = useResponsive('up', 'md');
    const isMobile = useResponsive('down', 'sm');

    const navigate = useNavigate();

    const renderPlayButton = () => {
        switch (status) {
            case 'ACTIVE':
                return (
                    <AppButton onClick={() => navigate(url)} sx={{ width: '100%', height: 40, fontSize: 16 }}>
                        <img alt="infinity" src="/images/icon/icon-rocket.png" />
                        &nbsp;&nbsp;Play
                    </AppButton>
                );
            default:
                return (
                    <Button disabled sx={{ width: '100%' }} variant="contained">
                        <img alt="infinity" src="/images/icon/icon-rocket.png" />
                        &nbsp;&nbsp;Play
                    </Button>
                );
        }
    };

    return (
        <Link to={url}>
            <VideoBox sx={{ marginBottom: 10, width: '100%' }}>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <SliderCustom {...ecosystemAngleSliderSettings}>
                            {background.map((item, index) => (
                                <img alt={item.label} src={item} key={index} />
                            ))}
                        </SliderCustom>
                    </Grid>
                    <Grid item xs={12} md={5} pl={isDesktop && 4}>
                        <Box display="flex">
                            <Box width={'80%'} display="flex" mb={2}>
                                <Box width={'100%'} sx={{ color: 'white' }}>
                                    <Box
                                        sx={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(270deg, #43DDDA 0%,  #1CC2BF 100%)',
                                            display: 'inline-block',
                                            marginBottom: 2,
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{ width: 108, textAlign: 'center', fontWeight: 'bold' }}
                                        >
                                            {status}
                                        </Typography>
                                    </Box>
                                    <Typography variant="h3">{name}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography
                            mt={2}
                            sx={{ color: 'white', marginBottom: 4 }}
                            variant="body1"
                            fontSize="0.9rem"
                            textAlign={'justify'}
                        >
                            {description}
                        </Typography>
                        <Box display="flex" mt={2} flexWrap="wrap">
                            {renderPlayButton()}
                        </Box>
                    </Grid>
                </Grid>
            </VideoBox>
        </Link>
    );
};
