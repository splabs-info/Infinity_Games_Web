// import { Close } from '@mui/icons-material';
// import { Box, Drawer, IconButton } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { ChooseWalletModal, LoggedComponent } from 'components';
// import { Background } from 'constant/styled';
// import { WalletContext } from 'hooks/use-connect';
// import { useContext } from 'react';

// const CustomDrawer = styled(Drawer)(({ theme }) => ({
//     zIndex: '9998!important',
//     ' .MuiDrawer-paperAnchorRight': {
//         color: '#fff',
//         background: 'url(/images/background/bg-1.jpg)',
//         // 'linear-gradient(45deg, rgba(17, 173, 169) 0%, rgba(37, 202, 198) 48.96%, rgba(42, 216, 211) 100%)',
//         backdropFilter: 'blur(10px)',
//         width: '420px !important',
//         boxShadow: 'none',
//         borderLeft: '1px solid #0A3042',
//     },
//     [theme.breakpoints.down('sm')]: {
//         ' .MuiDrawer-paperAnchorRight': {
//             width: '100%!important',
//         },
//     },
// }));

// export const WalletDrawer = ({ open, handleClose }) => {
//     console.log('open', open);
//     const { address } = useContext(WalletContext);

//     return (
//         <CustomDrawer anchor={'right'} open={open} onClose={() => handleClose(!open)}>
//             <Box>
//                 <IconButton
//                     sx={{
//                         position: 'absolute',
//                         right: 0,
//                         top: 0,
//                         color: 'white',
//                     }}
//                     onClick={() => handleClose(!open)}
//                 >
//                     <Close color="#fff" />
//                 </IconButton>
//                 {address ? (
//                     <LoggedComponent address={address} _onClose={handleClose} />
//                 ) : (
//                     <ChooseWalletModal />
//                 )}
//             </Box>
//         </CustomDrawer>
//     );
// };
export {}