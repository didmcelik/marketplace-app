import React from "react";
import { Grid } from "@mui/material";

const Header = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        width: "1440px",
        height: "76.64px",
        backgroundColor: "#1EA4CE",
        marginBottom: "38.36px",
      }}
    >
      <img
        style={{ width: "141.25px", height: "40.32px" }}
        src={"Logo.png"}
      ></img>
    </Grid>
  );
};

export default Header;
