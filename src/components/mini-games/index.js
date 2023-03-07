import { Box, Container, Hidden, Typography } from '@mui/material';
import { MiniGamesCard } from 'components/customized/MiniGamesCard';
import { ImagesAccent, TitleBox, TypographyShadow } from 'components/home/HomeStyles';
import { Color } from 'constant/styled';
import useResponsive from 'hooks/useResponsive';
import { miniGames } from './Content';
export const MiniGames = () => {
    const isDesktop = useResponsive('up', 'md');
    const isMobile = useResponsive('down', 'sm');

    return (
        <Box
            pt={isDesktop ? 28 : 20}
            pb={isDesktop ? 5 : 3}
            sx={{
                background: "url('/images/background/bg-3.jpg')",
                backgroundSize: '100% 100%',
                position: 'relative',
            }}
        >
            <Hidden mdDown>
                <ImagesAccent
                    component={'img'}
                    src={'/images/home/left-1.png'}
                    alt=""
                    sx={{
                        left: 0,
                        top: '10rem',
                    }}
                />
                <ImagesAccent
                    component={'img'}
                    src={'/images/home/right-1.png'}
                    alt=""
                    sx={{
                        right: 0,
                        bottom: '4rem',
                    }}
                />
            </Hidden>
            <TitleBox pb={isDesktop ? 5 : 2}>
                <TypographyShadow variant="h2">Our mini games</TypographyShadow>
                <img alt="infinity" src="/images/home/line-1.png" />
                <Typography
                    variant="p"
                    sx={{
                        textAlign: 'center',
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        paddingLeft: isDesktop ? '25%' : '10%',
                        paddingRight: isDesktop ? '25%' : '10%',
                        color: Color.text,
                    }}
                >
                    Infinity Games helps game projects expand their reach to new users and markets with a multi-chain
                    approach.
                </Typography>
            </TitleBox>
            <Container>
                {miniGames.map((game, index) => (
                    <MiniGamesCard
                        key={index}
                        url={game.url}
                        background={game.background}
                        name={game.name}
                        status={game.status}
                        description={game.description}
                    />
                ))}
            </Container>
        </Box>
    );
};
