// import { WalletProvider } from 'hooks/use-connect';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundJob from './components/common/BackgroundJob';
import ScrollToTop from './components/common/ScrollToTop';
import ShowErrorComponent from './components/common/ShowErrorComponent';
import Routers from './routes';
import { _changeLanguage } from './store/setting/settingActions';
import './styles/Animation.css';
import './styles/index.css';
import ThemeProvider from './theme';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(_changeLanguage(localStorage.getItem('lang')));
        console.log('Infinity - ver 0.0.1 - Layout');
    }, [dispatch]);

    return (
        <ThemeProvider>
            {/* <WalletProvider> */}
            <ScrollToTop />
            <Routers />
            <ShowErrorComponent />
            <BackgroundJob />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
            />
            {/* </WalletProvider> */}
        </ThemeProvider>
    );
}
