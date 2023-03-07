import { Box, Button, Grid, Typography } from '@mui/material';
import { GradientBox } from 'components/gradient-box/DefaultGradient';
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
                    <Box sx={{ display: 'flex', justifyContent: 'left', width: '100%' }}>
                        <GradientBox
                            sx={{
                                width: '100%',
                                marginRight: 3,

                                borderRadius: '8px',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            {status}
                        </GradientBox>

                        <AppButton
                            onClick={() => navigate(url)}
                            sx={{ width: '100%', height: 48, fontSize: 16 }}
                        >
                            <img alt="infinity" src="/images/icon/icon-rocket.png" />
                            &nbsp;&nbsp;Play
                        </AppButton>
                    </Box>
                );
            default:
                return (
                    <Box sx={{ display: 'flex', justifyContent: 'left', width: '100%' }}>
                        <GradientBox
                            sx={{
                                width: '100%',
                                marginRight: 3,
                                fontWeight: 'bold',
                                borderRadius: '8px',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {status}
                        </GradientBox>

                        <Button
                            disabled
                            sx={{ width: '100%', height: 48, fontSize: 16 }}
                            variant="contained"
                        >
                            <img alt="infinity" src="/images/icon/icon-rocket.png" />
                            &nbsp;&nbsp;Play
                        </Button>
                    </Box>
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
                                <img
                                    alt={item.label}
                                    src={item}
                                    key={index}
                                    style={{ maxHeight: 336 }}
                                />
                            ))}
                        </SliderCustom>
                    </Grid>
                    <Grid item xs={12} md={5} pl={isDesktop && 4}>
                        <Box display="flex">
                            <Box width={'80%'} display="flex" mb={2}>
                                <Box width={'100%'} sx={{ color: 'white' }}>
                                    <Typography variant="h3">{name}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography
                            mt={2}
                            sx={{ color: 'white', marginBottom: 4 }}
                            variant="body1"
                            fontSize="1rem"
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
