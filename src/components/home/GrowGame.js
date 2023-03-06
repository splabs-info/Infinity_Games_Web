import { Box, Container, Hidden, Typography } from "@mui/material";
import { Color } from "../../constant/styled";
import useResponsive from "../../hooks/useResponsive";
import { growGame } from "./Content";
import {
  ImagesAccent,
  MultiChainBox,
  MultiChainTitle,
  TitleBox,
  TypographyShadow,
  VideoBox
} from "./HomeStyles";

export default function GrowGame() {
  const isDesktop = useResponsive("up", "md");
  const isMobile = useResponsive("down", "sm");

  return (
    <Box
      pt={isDesktop ? 10 : 3}
      pb={isDesktop ? 5 : 3}
      sx={{
        background: "url('/images/background/bg-3.jpg')",
        backgroundSize: "100% 100%",
        position: "relative",
      }}
    >
      <Hidden mdDown>
        <ImagesAccent
          component={"img"}
          src={"/images/home/left-1.png"}
          alt=""
          sx={{
            left: 0,
            top: "-4rem",
          }}
        />
        <ImagesAccent
          component={"img"}
          src={"/images/home/right-1.png"}
          alt=""
          sx={{
            right: 0,
            bottom: "4rem",
          }}
        />
      </Hidden>
      <Container>
        <TitleBox
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            marginTop: "0",
          }}
        >
          <TypographyShadow variant="h3">Previous Game</TypographyShadow>
          <img alt="infinity" src="/images/home/line-1.png" />
        </TitleBox>
        <VideoBox>
          <img alt="infinity" src="/images/multi-chain/img-video.jpg" />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              bottom: "10%",
              left: "10%",
              color: "white",
            }}
          >
            Infinity Angel Game
          </Typography>
        </VideoBox>

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
            Grow Game Project with Multi-Chain
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
            Infinity Games helps game projects expand their reach to new users
            and markets with a multi-chain approach.
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
          {growGame.map((item, index) => (
            <MultiChainBox key={index} sx={{ background: item.background }}>
              <img
                src={`./images/multi-chain/chain-${index + 1}.jpg`}
                alt={item.label}
              />
              <MultiChainTitle variant="h5">{item.label}</MultiChainTitle>
              <Box component={"p"} sx={{ textAlign: "center" }}>
                {item.description}
              </Box>
            </MultiChainBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
