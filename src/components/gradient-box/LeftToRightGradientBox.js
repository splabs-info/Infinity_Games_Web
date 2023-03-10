import { Card, styled } from '@mui/material';

export const StyledLeftToRightGradientBox = styled(Card)(({ theme }) => ({
    background: 'transparent',
    color: 'white',
    transition: 'all 0.1s ease-in-out',
    boxShadow: 'unset',
    borderRadius: '16px',
    position: 'relative',
    minHeight: '100%',
    '&::before': {
        content: "''",
        position: 'absolute',
        inset: '0px',
        borderRadius: '16px',
        padding: ' 1px',
        background: 'linear-gradient(90.22deg, rgb(220, 102, 255), rgb(3, 170, 249))',
        WebkitMask:
            'linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px)',
        WebkitMaskComposite: 'xor',
    },
}));

export const LeftToRightGradientBox = ({ children, ...props }) => {
    return <StyledLeftToRightGradientBox {...props}>{children}</StyledLeftToRightGradientBox>;
};
