import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme } from "@mui/styles";
import useStyles from "./styles";
import { Label } from "@mui/icons-material";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comdey" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animation", value: "animation" },
];

// const redLogo = "../assets/filmpire-logo.svg";
// const blueLogo = "../assets/filmpire-logo.svg";
const redLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qVtTrcfS83K6anLEw2c1xlbNntrU_0tJvQ&s";
const blueLogo =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qVtTrcfS83K6anLEw2c1xlbNntrU_0tJvQ&s";

const SideBar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="Flim Fire"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            className={classes.links}
            to={`/Categories/${value}`}
          >
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} alt={label} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to={`/Genres/${value}`}>
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} alt={label} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

SideBar.propTypes = {
  setMobileOpen: PropTypes.func.isRequired,
};

export default SideBar;
