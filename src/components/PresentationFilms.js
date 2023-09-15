// import React from "react";
// import { Films } from "../shared/ListOfFilm";
// import { ThemeContext } from "./ThemeContext";
// import { useContext } from "react";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import "../App.css";
// import { Link } from "react-router-dom";
// // import Box from '@mui/material/Box';
// import styled from "styled-components";
// import { Typography } from "@mui/material";
// // import Intro from "./intro/intro";


// const Container = styled.div({
//   display: "flex",
//   flexDirection: "column",
//   minHeight: "100vh",
// });

// const PresentationFilmsContainer = styled.div({
//   flex: "1",
//   paddingBottom: "100px", // Khoảng cách phía dưới để không đè lên Footer
// });

// export default function PresentationFilms() {
//   const [films, setFilms] = useState([]);
//   const TextTitle = styled(Typography)({
//     padding: "20px 30px",
//     marginTop: "50px",
//     width: "fit-content",
//     fontSize: "2rem",
//     fontWeight: "600",
//     letterSpacing: "3px",
//     textTransform: "capitalize",
//     color: "white",
//     background: "#ff6500",
//     borderRadius: "5px",
//     boxShadow: "2px 3px 2px 2px rgb(0 0 0 / 20%)",
//   });
//   const { theme } = useContext(ThemeContext)
//   return (
//     <>
//       <Container>
//         {/* <Intro /> */}
//         <TextTitle>List Movies</TextTitle>
//         <PresentationFilmsContainer>
//           <Swiper
//             slidesPerView={4}
//             spaceBetween={30}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination]}
//             className="mySwiper"
//           >
//             {Films.map((film, index) => (
//               <SwiperSlide key={index}>
//                 <div className="item" style={{border: '3px solid cadetblue', backgroundColor: theme.backgroundColor, color: theme.color}}>
//                   <img src={film.img} alt="" className="filmItem" />
//                   <h3>{film.Title} </h3>
//                   <p className="year">{film.Year}</p>
//                   <p className="nation">{film.Nation}</p>
//                   <Link
//                     to={`detail/${film.id}`}
//                     style={{ height: "100%", width: "100%" }}
//                   >
//                     <p>
//                       <button
//                         onClick={() => {
//                           setFilms(film);
//                         }}
//                       >
//                         Detail
//                       </button>
//                     </p>
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </PresentationFilmsContainer>
//       </Container>
//     </>
//   );
// }


import React, { useContext, useEffect, useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ExploreIcon from "@mui/icons-material/Explore";
import SortIcon from "@mui/icons-material/Sort";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Pagination as PaginationSwiper } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllFilms, setAddFilm } from "../features/film/filmSlice";
import { useModal } from "../hooks/useModal";
import { ListOfNations } from "../shared/ListOfNation";
import Films from './Films';
import AddFilms from "./AddFilms";
import { FormInput, IconWrapper, InputWrapper } from "./style";
import { ThemeContext } from "./ThemeContext";


function PresentationFilms() {
  const { theme } = useContext(ThemeContext);
  const TextTitle = styled(Typography)({
    padding: "5px 10px",
    width: "fit-content",
    fontSize: "2rem",
    fontWeight: "600",
    letterSpacing: "3px",
    textTransform: "capitalize",
    color: "white",
    background: "cadetblue",
    borderRadius: "5px",
    boxShadow: "2px 3px 2px 2px cadetblue",
  });
  
  const BoxTitle = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });
  
  const BoxLoading = styled(Box)({
    width: "100%",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const ModalButton = styled(Button)({
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "white",
    height: "fit-content",
    backgroundColor: "cadetblue",
    "&:hover": {
      backgroundColor: "cadetblue",
    },
  });
  
  const BoxFilter = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "40px 0 40px 0",
    padding: "10px",
    backgroundColor: theme.backgroundColor,
    borderRadius: "5px",
    boxShadow:
      "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 1.5px rgba(0, 0, 0, 0.1), 0 0.5px 0.5px rgba(0, 0, 0, 0.1), 0 0.25px 0.25px rgba(0, 0, 0, 0.1)",
  });

  const TextFilter = styled(Typography)({
    padding: "5px 10px",
    fontSize: "1.1rem",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "capitalize",
    color: theme.color,
    textDecoration: "underline",
    textDecorationColor: "cadetblue",
  });

  const dispatch = useDispatch();
  const { toogleOpen, isOpen } = useModal();
  const { isLoading, films, count, resultPerPage } = useSelector(
    (state) => state.film
  );
  const { isLoading: loadingLogin } = useSelector((state) => state.login);

  const [isLogin, setIsLogin] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nation, setNation] = useState("");
  const [select, setSelect] = useState("");

  const setCurrentPageNo = (_e, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const arrSort = select.split("/");
    console.log(arrSort);
    const params = {
      page: currentPage,
      nation,
      sortBy: arrSort[0],
      typeSort: arrSort[1],
    };
    dispatch(getAllFilms(params));
  }, [currentPage, nation, select]);

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("userLogin")));
  }, [loadingLogin]);

  return (
    <Container>
      {isLoading ? (
        <BoxLoading>
          <CircularProgress color="inherit" />
        </BoxLoading>
      ) : (
        <>
          <Box sx={{ pt: 8 }} styled={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <BoxTitle>
              <TextTitle>List Movies</TextTitle>
              {isLogin && (
                <ModalButton
                  startIcon={<ControlPointIcon />}
                  onClick={() => {
                    toogleOpen();
                    dispatch(setAddFilm());
                  }}
                >
                  Add new movie
                </ModalButton>
              )}
              {isOpen && (
                <AddFilms toogleOpen={toogleOpen} isOpen={isOpen} />
              )}
            </BoxTitle>

            <BoxFilter>
              <FormInput sx={{ width: "25%" }}>
                <TextFilter>Nation</TextFilter>
                <InputWrapper>
                  <IconWrapper>
                    <ExploreIcon />
                  </IconWrapper>
                  <select
                    value={nation}
                    onChange={(e) => setNation(e.target.value)}
                  >
                    <option value="">All nations</option>
                    {ListOfNations?.map((nation) => {
                      return (
                        <option key={nation.id} value={nation.name}>
                          {nation.name}
                        </option>
                      );
                    })}
                  </select>
                </InputWrapper>
              </FormInput>
            </BoxFilter>

            <Grid container rowSpacing={3} sx={{ pt: 2 }}>
              {films.map((film) => (
                <Grid key={film.id} item xs={12} sm={6} md={3}>
                  <Films film={film} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                mt: 5,
                mb: 4,
              }}
            >
              <Stack spacing={2} sx={{ mr: "auto", ml: "auto" }}>
                <Pagination
                  count={Math.ceil(
                    nation
                      ? films.length / resultPerPage
                      : count / resultPerPage
                  )}
                  page={currentPage}
                  onChange={setCurrentPageNo}
                  // variant="outlined"
                  style={{background: theme.backgroundColor, color: theme.backgroundColor}}
                />
              </Stack>
            </Box>
          </Box>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </Container>
  );
}

export default PresentationFilms;
