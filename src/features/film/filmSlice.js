import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createFilmThunk,
  deleteFilmThunk,
  getAllFilmsThunk,
  getFilmThunk,
  updateFilmThunk,
} from "./filmThunk";

const initialState = {
  isLoading: false,
  isEditing: false,
  films: [],
  film: {},
  count: 0,
  resultPerPage: 0,
};

export const getAllFilms = createAsyncThunk(
  "film/getAllFilms",
  getAllFilmsThunk
);
export const getFilm = createAsyncThunk("film/getFilm", getFilmThunk);
export const createFilm = createAsyncThunk("film/createFilm", createFilmThunk);
export const updateFilm = createAsyncThunk("film/updateFilm", updateFilmThunk);
export const deleteFilm = createAsyncThunk("film/deleteFilm", deleteFilmThunk);

const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setAddFilm: (state) => {
      state.isEditing = false;
    },
    setEditFilm: (state, action) => {
      state.isEditing = true;
      state.film = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.count = action.payload.count;
        state.resultPerPage = action.payload.resultPerPage;
        state.films = [...action.payload.response];
      })
      .addCase(getAllFilms.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.film = { ...action.payload };
      })
      .addCase(getFilm.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createFilm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFilm.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Add film successfully!");
      })
      .addCase(createFilm.rejected, (state) => {
        state.isLoading = false;
        toast.error("Add film fail!");
      })
      .addCase(updateFilm.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Update film successfully!");
      })
      .addCase(updateFilm.rejected, (state) => {
        state.isLoading = false;
        toast.error("Update film fail!");
      })
      .addCase(deleteFilm.fulfilled, (state) => {
        state.isLoading = false;
        toast.success("Delete film successfully!");
      })
      .addCase(deleteFilm.rejected, (state) => {
        toast.error("Delete film fail!");
      });
  },
});

export const { setAddFilm, setEditFilm } = filmSlice.actions;
export default filmSlice.reducer;
