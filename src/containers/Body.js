import React from "react";
import Basket from "./basket/Basket";
import SortAndFiltering from "./SortAndFiltering";
import ProductListing from "./ProductListing";
import { Grid } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import ItemTypeSelect from "./ItemTypeSelect";
import ItemPagination from "./pagination/ItemPagination";

const useStyles = makeStyles({
  Body: {
    marginTop: "38.36px",
    width: 1232,
  },
  Button: {
    border: " none",
    borderRadius: 2,
  },
});
const Body = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Grid container className={classes.Body}>
      <Grid
        item
        xs={3}
        container
        justifyContent={"start"}
        alignItems="center"
        direction={"column"}
      >
        <SortAndFiltering></SortAndFiltering>
      </Grid>

      <Grid
        item
        xs={6}
        container
        direction={"column"}
        justifyContent={"start"}
        alignItems="start"
      >
        <ItemTypeSelect></ItemTypeSelect>
        <ProductListing></ProductListing>
        <ItemPagination />
      </Grid>

      <Grid
        item
        xs={3}
        container
        justifyContent={"start"}
        alignItems="start"
        fullwidth
      >
        <Basket></Basket>
      </Grid>
    </Grid>
  );
};

export default Body;
