import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  imageLink: {
    display: "flex",
    justifyContent: "center",
    padding: "10% 0",
  },
  image: {
    width: "70%",
  },
  links: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    display: "block",
    padding: "8px 16px",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  genreImage: {
    filter: theme.palette.mode === "dark" ? "dark" : "invert(1)",
    width: 24,
    height: 24,
    objectFit: "contain",
  },
  listItem: {
    padding: "4px 16px",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));
