import { useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilm";
import "../App.css";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, CardContent } from "@mui/material";
import ModalCase from "./ModalCase";
import { useModal } from "../hooks/useModal";
import { ThemeContext } from "./ThemeContext";
import { useContext, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import { getFilm, setEditFilm } from "../features/film/filmSlice";


export default function Detail() {
  

  const { toogleOpen: toogleOpenAddFilm, isOpen: isOpenAddFilm } = useModal();

  const VideoButton = styled(Button)({
    marginTop: "10px",
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "white",
    height: "fit-content",
    backgroundColor: "cadetblue",
    "&:hover": {
      backgroundColor: "cadetblue",
    },
  });
  const { toogleOpen, isOpen } = useModal();
  const filmName = useParams();
  const { theme } = useContext(ThemeContext);
  const DetailBox = styled(Box)({
    backgroundColor: theme.backgroundColor,
    width: "100%",
    height: "fit-content",
    boxShadow:
      "0px 1px 4px 3px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 4px 10px 0px rgb(0 0 0 / 12%)",
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const { film } = useSelector((state) => state.film);
  useEffect(() => {
    dispatch(getFilm(id));
  }, []);

  const TextTitle = styled(Typography)({
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "capitalize",
    color: theme.color,
    textDecoration: "underline",
    textDecorationColor: "cadetblue",
    marginBottom: "10px",
  });

  const TitleContent = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "cadetblue",
  });

  const Text = styled(Typography)({
    height: "2.2rem",
    color: theme.color,
  });

  const TextBold = styled(Typography)({
    display: "inline-block",
    fontWeight: "bold",
    color: theme.color,
  });

  const TextContent = styled(Typography)({
    textAlign: "justify",
    color: theme.color,
  });



  return (
    <>
      <DetailBox
        sx={{ m: "0 0 17px 0", height: "100vh", paddingTop: "2px" }}
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
          <div
            className="popup"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <img src={film.img} alt={film.title} sx={{height: "100%"}} />
            <TextTitle variant="h4">{film.title}</TextTitle>
              <Text>
                Year: <TextBold>{film.year}</TextBold>
              </Text>
              <Text>
                Nation: <TextBold>{film.nation}</TextBold>
              </Text>
              <Box sx={{ p: "5px 10px", border: "1px solid cadetblue" }}>
                <TitleContent>Movie content:</TitleContent>
                <TextContent>{film.info}</TextContent>
              </Box>
            <VideoButton
              variant="contained"
              startIcon={<PlayArrowIcon />}
              onClick={toogleOpen}
            >
              Watch video
            </VideoButton>
          </div>
        {isOpen && (
          <ModalCase isOpen={isOpen} toogleOpen={toogleOpen} film={film} />
        )}
      </DetailBox>
    </>
  );
}
