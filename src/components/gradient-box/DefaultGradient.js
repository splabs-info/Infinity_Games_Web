import { Card, styled } from '@mui/material';
import { Background } from 'constant/styled';

export const StyledGradientBox = styled(Card)(({ theme }) => ({
    background: 'rgb(11,29,46,0.5)',
    color: 'white',
    transition: 'all 0.1s ease-in-out',
    borderRadius: '8px',
    position: 'relative',
    minHeight: '100%',
    boxShadow: '0 0 8px #388798',
    transition: '0.5s',
    '&::before': {
        content: "''",
        position: 'absolute',
        inset: '0px',
        borderRadius: '8px',
        padding: ' 1px',
        background: Background.gradientGreen,
        WebkitMask:
            'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
        WebkitMaskComposite: 'xor',
    },
    '&:hover': {
        background: Background.gradient45,
        boxShadow: '0 0 0 #388798',
        '&::before': {
            background: 'transparent',
        },
    }
}));

export const GradientBox = ({ children, ...props }) => {
    return <StyledGradientBox {...props}>{children}</StyledGradientBox>;
};
