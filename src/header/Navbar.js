// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import { NavLink } from "react-router-dom";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { ThemeContext } from "../components/ThemeContext";
// import { useContext } from "react";
// import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
// import { MdDarkMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";
// import { FaHome } from "react-icons/fa";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import { IoNewspaperOutline } from "react-icons/io5";
// import LoginGoogle from "../components/LoginGoogle";
// import { setLoading } from "../features/login/loginSlide";
// import { useDispatch, useSelector } from "react-redux";

// const pages = [
//   { title: "Home", icon: <FaHome fontSize="medium" />, link: "/" },
//   {
//     title: "About",
//     icon: <InfoOutlinedIcon fontSize="medium" />,
//     link: "/about",
//   },
//   {
//     title: "New",
//     icon: <IoNewspaperOutline fontSize="medium" />,
//     link: "/news",
//   },
//   {
//     title: "Contact",
//     icon: <BsFillPersonFill fontSize="medium" />,
//     link: "/contact",
//   },
// ];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Navbar() {
//   const dispatch = useDispatch();
//   const { theme, toggle, dark } = useContext(ThemeContext);
//   const { isLoading } = useSelector((state) => state.login);
//   const [anchorElNav, setAnchorElNav] = React.useState(null);


//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   useEffect(() => {
//     setIsLogin(JSON.parse(localStorage.getItem("userLogin")));
//   }, [isLoading]);

//   return (
//     <AppBar
//       position="sticky"
//       style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
//     >
//       <Container maxWidth="x2">
        // <Toolbar disableGutters>
        //   <LocalMoviesOutlinedIcon
        //     sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        //   />
          // <Typography
          //   variant="h6"
          //   noWrap
          //   component="a"
          //   href="/"
          //   sx={{
          //     mr: 2,
          //     display: { xs: "none", md: "flex" },
          //     fontFamily: "monospace",
          //     fontWeight: 700,
          //     letterSpacing: ".3rem",
          //     color: "inherit",
          //     textDecoration: "none",
          //   }}
          // >
          //   MOVIES
          // </Typography>

//           <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}></MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Box
//             sx={{
//               display: { xs: "none", md: "flex" },
//               ml: "auto",
//               mr: "auto",
//             }}
//           >
//             {pages.map((page, index) => (
//               <NavLink
//                 key={index}
//                 to={page.link}
//                 className={({ isActive }) => (isActive ? "active" : undefined)}
//                 style={{ textDecoration: "none" }}
//               >
//                 <Button
//                   startIcon={page.icon}
//                   onClick={handleCloseNavMenu}
//                   className="btn-menu"
//                   sx={{ color: theme.color, display: "flex", mr: 2, ml: 2 }}
//                 >
//                   {page.title}
//                 </Button>
//               </NavLink>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
//             <IconButton onClick={toggle} sx={{ color: theme.icon }}>
//               {!dark ? <MdDarkMode /> : <MdLightMode />}
//             </IconButton>
//             {isLogin ? (
//               <IconButton
//                 sx={{ p: 0, ml: 2, mr: 2 }}
//                 aria-controls={open ? "basic-menu" : undefined}
//                 aria-haspopup="true"
//                 aria-expanded={open ? "true" : undefined}
//                 onClick={(event) => {
//                   setAnchorEl(event.currentTarget);
//                 }}
//               >
//                 <Avatar alt={isLogin.name} src={isLogin.imageUrl} />
//               </IconButton>
//             ) : (
//               <LoginGoogle />
//             )}
//           </Box>
//           {/* <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar
//                     alt=""
//                     src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/345845009_1226587921323643_4602192060073473710_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YqtC7ucwgiYAX_aEeg5&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDf7qRmgq6t0LTJjB1N975HQTab-a0w6-LU69RnR1g6JA&oe=64837BED"
//                   />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;


import React, { useContext, useEffect, useState } from "react";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMoviesOutlinedIcon from "@mui/icons-material/LocalMoviesOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,  
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginGoogle from '../components/LoginGoogle';
import {ThemeContext} from '../components/ThemeContext';
import { setLoading } from "../features/login/loginSlide";

const pages = [
  { title: "Home", icon: <HomeIcon fontSize="medium" />, link: "/" },
  {
    title: "About",
    icon: <InfoOutlinedIcon fontSize="medium" />,
    link: "/about",
  },
  {
    title: "New",
    icon: <NewspaperOutlinedIcon fontSize="medium" />,
    link: "/news",
  },
  {
    title: "Contact",
    icon: <ContactMailIcon fontSize="medium" />,
    link: "/contact",
  },
];

function Navbar() {
  const dispatch = useDispatch();
  const { theme, toggle, dark } = useContext(ThemeContext);
  const { isLoading } = useSelector((state) => state.login);

  const [isLogin, setIsLogin] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setIsLogin(JSON.parse(localStorage.getItem("userLogin")));
  }, [isLoading]);

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    dispatch(setLoading());
  };

  return (
    <AppBar
      position="relative"
      sx={{
        backgroundColor: theme.backgroundColor,
        color: "cadetblue",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMoviesOutlinedIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "2rem",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "cadetblue",
              textDecoration: "none",
            }}
          >
            MOVIES
          </Typography>
         

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="cadetblue"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                p: 0,
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ backgroundColor: theme.backgroundColor }}
                >
                  <NavLink
                    to={page.link}
                    className={({ isActive }) =>
                      isActive ? "active" : undefined
                    }
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      startIcon={page.icon}
                      onClick={handleCloseNavMenu}
                      className="btn-menu"
                      sx={{ color: theme.color, display: "flex" }}
                    >
                      {page.title}
                    </Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalMoviesOutlinedIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              fontSize: "1.5rem",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontSize: "1.5rem",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FILMS
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto", mr: "auto" }}
          >
            {pages.map((page, index) => (
              <NavLink
                key={index}
                to={page.link}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                style={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={page.icon}
                  onClick={handleCloseNavMenu}
                  className="btn-menu"
                  sx={{ color: theme.color, display: "flex", mr: 2, ml: 2 }}
                >
                  {page.title}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggle}>
              {!dark ? (
                <DarkModeOutlinedIcon sx={{ color: theme.icon }} />
              ) : (
                <LightModeOutlinedIcon sx={{ color: theme.icon }} />
              )}
            </IconButton>
            {isLogin ? (
              <IconButton
                sx={{ p: 0, ml: 2, mr: 2 }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <Avatar alt={isLogin.name} src={isLogin.imageUrl} />
              </IconButton>
            ) : (
              <LoginGoogle />
            )}
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem sx={{ p: 1 }} onClick={handleClose}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleLogout()}
              >
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
