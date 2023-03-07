import { Card, styled } from '@mui/material';

export const StyledGradientBox = styled(Card)(({ theme }) => ({
    background: 'transparent',
    color: 'white',
    transition: 'all 0.1s ease-in-out',
    borderRadius: '8px',
    position: 'relative',
    minHeight: '100%',
    border: '1px solid #00FFF9',
    '&::before': {
        content: "''",
        position: 'absolute',
        inset: '0px',
        borderRadius: '8px',
        padding: ' 1px',
        // background: 'linear-gradient(rgb(3, 170, 249), rgb(220, 102, 255))',
        WebkitMask:
            'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
        WebkitMaskComposite: 'xor',
    },
}));

export const GradientBox = ({ children, ...props }) => {
    return <StyledGradientBox {...props}>{children}</StyledGradientBox>;
};
