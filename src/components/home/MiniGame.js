import { Container, Typography } from '@mui/material';
import { Color } from '../../constant/styled';
import useResponsive from '../../hooks/useResponsive';
import { TitleBox, TypographyShadow } from './HomeStyles';


const MiniGames = () => {
    const isDesktop = useResponsive('up', 'md');
    const isMobile = useResponsive('down', 'sm');
    return (
        <Container>
            <TitleBox
                sx={{
                    marginTop: isDesktop ? '8rem' : '4rem',
                }}
            >
                <TypographyShadow
                    variant="h3"
                    sx={{
                        paddingLeft: isMobile && 'calc(50% - 150px)',
                        paddingRight: isMobile && 'calc(50% - 150px)',
                    }}
                >
                    Our mini games
                </TypographyShadow>
                <img alt="infinity" src="/images/home/line-3.png" />
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
        </Container>
    );
};

export default MiniGames;
