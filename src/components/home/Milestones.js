import {
  Box, Container,
} from "@mui/material";
import { MilestonesBox, MilestonesList, MilestonesTitle, TitleBox, TypographyShadow } from "./HomeStyles";
import useResponsive from "../../hooks/useResponsive";
import { milestonesContent } from "./Content";




export default function Milestones() {
  const isDesktop = useResponsive("up", "md");


  return (
    <Box id="Milestones"
      pt={isDesktop ? 6 : 3} pb={10}
      sx={{
        background: "url('/images/background/bg-4.jpg')",
        backgroundSize: isDesktop ? "100% 100%" : "cover",
      }}
    >
      <Container>
        <TitleBox>
          <TypographyShadow variant='h3' >
            Infinity Games Milestones
          </TypographyShadow>
          <img alt="infinity" src="/images/home/line-2.png" />

        </TitleBox>
        {milestonesContent.map((item, index) => (
          isDesktop ?
            (<MilestonesBox key={index}>
              <Box sx={{ width: '40%' }} className='ContentBox'>
                <Box className='Milestones-Content' >
                  <MilestonesTitle>
                    {item.title}  {item.status && <img src="/images/home/check.png" width='40px' alt="" />}
                  </MilestonesTitle>
                  <MilestonesList>
                    {item.content.map((text, j) => (
                      <li key={j}> {text}</li>
                    ))}
                  </MilestonesList>
                </Box></Box>
              <Box sx={{ width: '20%' }}>
                <img src="/images/home/line-map.png" alt="" />
              </Box>
              <Box sx={{ width: '40%' }} />
            </MilestonesBox>)
            : (
              <MilestonesBox key={index}>
                <Box sx={{ width: '100%' }} className='Milestones-Content' >
                  <MilestonesTitle>
                    {item.title}
                  </MilestonesTitle>
                  <MilestonesList>
                    {item.content.map((text, j) => (
                      <li key={j}> {text}</li>
                    ))}
                  </MilestonesList>
                </Box>
              </MilestonesBox>
            )
        ))}
      </Container>
    </Box>
  );
}


