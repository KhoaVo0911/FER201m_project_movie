import axios from "axios";
import axiosClient from "../../api/axiosClient";
import { getAllFilms, getFilm } from "./filmSlice";

export const getAllFilmsThunk = async (
  { page, nation, sortBy, typeSort },
  thunkAPI
) => {
  try {
    const resultPerPage = 12;
    const url = new URL("https://647097ab3de51400f72493f6.mockapi.io/Login");
    url.searchParams.append("page", page);
    url.searchParams.append("limit", resultPerPage);
    url.searchParams.append("nation", nation);
    url.searchParams.append("sortBy", sortBy);
    url.searchParams.append("order", typeSort);

    const response = await axios.get(url);
    const allFilms = await axiosClient.getByUrl("/Login");
    return { count: allFilms.length, resultPerPage, response };
  } catch (error) {
    console.log(error);
  }
};

export const getFilmThunk = async (filmId, thunkAPI) => {
  try {
    const response = await axiosClient.getByUrl(`/Login/${filmId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createFilmThunk = async (params, thunkAPI) => {
  await axiosClient
    .post("/Login", params)
    .then((response) => {
      if (response) {
        thunkAPI.dispatch(getAllFilms());
        console.log("Create Movies successfully.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateFilmThunk = async ({ filmId, data }, thunkAPI) => {
  await axiosClient
    .put(`/Login/${filmId}`, data)
    .then((response) => {
      if (response) {
        thunkAPI.dispatch(getAllFilms());
        thunkAPI.dispatch(getFilm(filmId));
        console.log("Update Movies successfully.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteFilmThunk = async (filmId, thunkAPI) => {
  try {
    const response = await axiosClient.delete(`/Login/${filmId}`);
    if (response) {
      thunkAPI.dispatch(getAllFilms());
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
