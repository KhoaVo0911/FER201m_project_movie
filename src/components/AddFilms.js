import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createFilm, updateFilm } from "../features/film/filmSlice";
import { ListOfNations } from "../shared/ListOfNation";

const CloseButton = styled(Button)({
  marginTop: "10px",
  textTransform: "capitalize",
  fontWeight: "bold",
  height: "fit-content",
});

const SubmitButton = styled(Button)({
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

const TextTitle = styled(DialogTitle)({
  fontSize: "2rem",
  fontWeight: "600",
  letterSpacing: "2px",
  textTransform: "capitalize",
  color: "#000",
  textDecoration: "underline",
  textDecorationColor: "cadetblue",
});

function AddFilms({ isOpen, toogleOpen }) {
  const dispatch = useDispatch();
  const { isEditing, film } = useSelector((state) => state.film);

  const formik = useFormik({
    initialValues: {
      img: isEditing ? film.img : "",
      title: isEditing ? film.title : "",
      year: isEditing ? film.year : "",
      nation: isEditing ? film.nation : "",
      info: isEditing ? film.info : "",
      clip: isEditing ? film.clip : "",
    },
    onSubmit: (values, formikHelpers) => {
      if (isEditing) {
        const filmUpdate = {
          filmId: film.id,
          data: formik.values,
        };
        dispatch(updateFilm(filmUpdate));
      } else {
        dispatch(createFilm(formik.values));
      }
      formikHelpers.resetForm();
      toogleOpen();
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Required"),
      title: Yup.string()
        .required("Required")
        .min(2, "Must be 2 characters or more"),
      year: Yup.string()
        .required("Required")
        .typeError("Please enter a valid year."),
      nation: Yup.string().typeError("Please select a nation."),
      info: Yup.string()
        .required("Required")
        .min(10, "Must be 10 characters or more."),
      clip: Yup.string().required("Required"),
    }),
  });

  return (
    <Dialog
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          width: "600px",
          maxWidth: "600px",
          // background: theme.backgroundColor,
        },
      }}
      open={isOpen}
      onClose={toogleOpen}
    >
      <TextTitle>{isEditing ? "Update film" : "Add new film"}</TextTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent sx={{ width: "90%" }}>
          <FormControl fullWidth sx={{ mb: "15px" }}>
            <TextField
              fullWidth
              name="img"
              variant="outlined"
              color="primary"
              size="small"
              label="Image"
              value={formik.values.img}
              onChange={formik.handleChange}
            />
            {formik.errors.img && (
              <Typography
                sx={{ ml: "5px", minHeight: "5px" }}
                variant="caption"
                color="red"
              >
                {formik.errors.img}
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: "15px" }}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              size="small"
              color="primary"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            {formik.errors.title && (
              <Typography sx={{ ml: "5px" }} variant="caption" color="red">
                {formik.errors.title}
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: "15px" }}>
            <TextField
              name="year"
              label="Year"
              variant="outlined"
              size="small"
              color="primary"
              value={formik.values.year}
              onChange={formik.handleChange}
            />
            {formik.errors.year && (
              <Typography sx={{ ml: "5px" }} variant="caption" color="red">
                {formik.errors.year}
              </Typography>
            )}
          </FormControl>

          <FormControl
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: "15px" }}
            color="primary"
          >
            <InputLabel id="demo-simple-select-standard-label">
              Choose nation
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="nation"
              value={formik.values.nation}
              onChange={formik.handleChange}
              label="Choose your favorite nation"
            >
              {ListOfNations.map((nation) => (
                <MenuItem key={nation.id} value={nation.name}>
                  {nation.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {formik.values.nation === 0 && (
            <Typography sx={{ ml: "5px" }} variant="caption" color="red">
              {formik.errors.nation}
            </Typography>
          )}
          <FormControl fullWidth sx={{ mb: "15px" }}>
            <TextField
              label="Film's Info"
              variant="outlined"
              multiline
              fullWidth
              size="small"
              color="primary"
              minRows={3}
              name="info"
              value={formik.values.info}
              onChange={formik.handleChange}
            />
            {formik.errors.info && (
              <Typography sx={{ ml: "5px" }} variant="caption" color="red">
                {formik.errors.info}
              </Typography>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: "15px" }}>
            <TextField
              fullWidth
              name="clip"
              variant="outlined"
              color="primary"
              size="small"
              label="Clip"
              value={formik.values.clip}
              onChange={formik.handleChange}
            />
            {formik.errors.clip && (
              <Typography
                sx={{ ml: "5px", minHeight: "5px" }}
                variant="caption"
                color="red"
              >
                {formik.errors.clip}
              </Typography>
            )}
          </FormControl>
        </DialogContent>
        <DialogActions>
          <CloseButton variant="contained" onClick={toogleOpen}>
            Close
          </CloseButton>
          <SubmitButton type="submit">
            {isEditing ? "Update" : "Add"}
          </SubmitButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddFilms;
