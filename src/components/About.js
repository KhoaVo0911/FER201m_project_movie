import React, { useContext, useState } from "react";
import {
  Container,
  AccordionSummary,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { ThemeContext } from "./ThemeContext";
import { ListOfAbout } from "../shared/ListOfAbout";

function About() {
  const { theme, dark } = useContext(ThemeContext);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${!dark ? "#000" : "#fff"}`,
    backgroundColor: "cadetblue",
    marginBottom: "20px",
    borderRadius: "10px",
    transition: "0.4s all linear",

    "&:before": {
      display: "none",
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    backgroundColor: dark ? "#000" : "#fff",
  }));

  const BoxTitle = styled(Box)({
    padding: "20px 0",
    margin: "10px 0 40px 0",
    textAlign: "center",
    borderRadius: "20px",
    backgroundColor: theme.backgroundColor,
    boxShadow: " 0 15px 40px 5px rgba(132, 132, 133, 0.15)",

  });

  const BoxInner = styled(Box)({
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: theme.backgroundInnner,
    borderRadius: "10px",
  });

  const TextTitle = styled(Typography)({
    fontSize: "2rem",
    fontWeight: "800",
    letterSpacing: "2px",
    color: theme.color,
    textTransform: "uppercase",
  });

  const Paragraph = styled(Typography)({
    marginBottom: "0.5rem",
    lineHeight: 1.8,
    height: "auto",
    textAlign: "justify",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 8,
    WebkitBoxOrient: "vertical",
    color: theme.color,
  });

  const Title = styled(Typography)({
    lineHeight: 1.2,
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: theme.color,

    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#ff6500",
      textUnderlineOffset: "3px",
      textDecorationThickness: "2px",
    },
  });

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{height: "80vh"}}>
      <BoxTitle>
        <BoxInner>
          <TextTitle>ABOUT US</TextTitle>
          <Typography sx={{ color: theme.color }}>
            Xin chào, chúng mình là MOVIES FILMS !
          </Typography>
        </BoxInner>
      </BoxTitle>
      <Grid container columnSpacing={3}>
        <Grid item md={12}>
          <Box sx={{ background: "none" }}>
            {ListOfAbout.map((about) => (
              <Accordion
                key={about.id}
                expanded={expanded === `panel${about.id}`}
                onChange={handleChange(`panel${about.id}`)}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                  }}
                >
                  <ExpandCircleDownIcon />
                  <Typography sx={{ ml: 1 }}>{about.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container columnSpacing={2}>
                    <Grid item sm={12} md={12}>
                      <Paragraph>{about.description}</Paragraph>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
