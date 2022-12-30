import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const RootStyle = styled("div")({
  background: '#060714'
});
const MainStyle = styled("div")(({ theme }) => ({}));

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
