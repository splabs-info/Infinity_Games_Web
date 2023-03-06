import { Box, Container, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import { miniGames } from "./Content";
import { Color } from "../../constant/styled";
import {
  MultiChainBox,
  MultiChainTitle,
  TitleBox,
  TypographyShadow,
} from "./HomeStyles";

const MiniGames = () => {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");
  return (
    <Container>
      <TitleBox
        sx={{
          marginTop: isDesktop ? "8rem" : "4rem",
        }}
      >
        <TypographyShadow
          variant="h3"
          sx={{
            paddingLeft: isMobile && "calc(50% - 150px)",
            paddingRight: isMobile && "calc(50% - 150px)",
          }}
        >
          Our mini games
        </TypographyShadow>
        <img alt="infinity" src="/images/home/line-3.png" />
        <Typography
          variant="p"
          sx={{
            textAlign: "center",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            paddingLeft: isDesktop ? "25%" : "10%",
            paddingRight: isDesktop ? "25%" : "10%",
            color: Color.text,
          }}
        >
          Infinity Games helps game projects expand their reach to new users and
          markets with a multi-chain approach.
        </Typography>
      </TitleBox>
      <Box
        mt={5}
        mb={5}
        display={isMobile ? "flex" : "inline-flex"}
        justifyContent={"space-between"}
        flexDirection={isMobile && "column"}
        alignItems={!isDesktop && "center"}
      >
        {miniGames.map((item, index) => (
          <a href={item.url} target="_blank" rel="noreferrer">
            <MultiChainBox key={index} sx={{ background: item.background }}>
              <img src={item.src} alt={item.name} height={280} />
              <MultiChainTitle variant="h5">{item.name}</MultiChainTitle>
              <Box component={"p"} sx={{ textAlign: "center" }}>
                {item.description}
              </Box>
            </MultiChainBox>
          </a>
        ))}
      </Box>
    </Container>
  );
};

export default MiniGames;
