import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const RootStyle = styled('div')({
    background: '#060714',
});
const MainStyle = styled('div')(({ theme }) => ({}));

export default function ClientLayout() {
    return (
        <RootStyle>
            <Header />
            <MainStyle>
                <Outlet />
            </MainStyle>
            <Footer />
        </RootStyle>
    );
}
