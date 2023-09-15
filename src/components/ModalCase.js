import React, { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "./ThemeContext";

const CloseButton = styled(Button)({
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

function ModalCase({ isOpen, toogleOpen, film }) {
  const { theme } = useContext(ThemeContext);

  const TextTitle = styled(DialogTitle)({
    fontSize: "2rem",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "capitalize",
    color: theme.color,
  });

  return (
    <Dialog
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          width: "1000px",
          maxWidth: "1000px",
        },
      }}
      open={isOpen}
      onClose={toogleOpen}
    >
      <TextTitle>{film.Title}</TextTitle>
      <DialogContent >
        <iframe
          width="100%"
          height={600}
          src={film.clip}
          title={film.Title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
      <DialogActions>
        <CloseButton onClick={toogleOpen}>Close</CloseButton>
      </DialogActions>
    </Dialog>
  );
}

export default ModalCase;
