import { Box, Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import { setBasket } from "../../redux/actions/basketActions";
import AddIcon from "@mui/icons-material/Add";
function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basketProducts.products);
  const prodsAndCounts = basket.reduce(function(sums, entry) {
    sums[entry.slug] = (sums[entry.slug] || 0) + 1;
    return sums;
  }, {});

  useEffect(() => {
    console.log("prodsAndCounts", prodsAndCounts);
  }, [basket]);

  const calculateTotal = () => {
    let total = 0;

    for (const slug of Object.keys(prodsAndCounts)) {
      const items = basket.filter((word) => word.slug === slug);
      const { price } = items[0];
      total = total + prodsAndCounts[slug] * price;
    }
    return parseFloat(total).toFixed(2);
    // Object.keys(prodsAndCounts).map((slug)=>{

    // })
  };

  const basketItems = Object.keys(prodsAndCounts).map((slug) => {
    const count = prodsAndCounts[slug];
    console.log("slug", slug);
    const items = basket.filter((word) => word.slug === slug);
    const { name, price } = items[0];

    return (
      <Grid
        fullwidth
        item
        container
        sx={{ height: 40.88, my: 3 }}
        justifyContent={"center"}
      >
        <Grid item xs={6} container direction="column">
          <Box sx={{ p: 1 }}>
            <h1 style={{ fontSize: "12px" }}>{name}</h1>
            <h1 style={{ fontSize: "12px", color: "#1EA4CE" }}>{price}</h1>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent="center"
        >
          <IconButton
            onClick={() => {
              const index = basket.findIndex((i) => i.slug === slug);
              basket.splice(index, 1);
              dispatch(setBasket([...basket]));
            }}
          >
            <RemoveIcon fontSize="small"></RemoveIcon>
          </IconButton>
          <Grid
            sx={{ width: 32, height: 32.7, backgroundColor: "#1EA4CE" }}
            container
            alignItems={"center"}
            justifyContent="center"
          >
            <h1
              style={{
                fontSize: "12px",
                color: "#FFFFFF",
              }}
            >
              {count}
            </h1>
          </Grid>
          <IconButton
            fontSize="small"
            onClick={() => {
              dispatch(setBasket([...basket, items[0]]));
            }}
          >
            <AddIcon fontSize="small"></AddIcon>
          </IconButton>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid
      fullwidth
      sx={{
        minHeight: 388,
        // backgroundColor: "#FFFFFF",
        //   marginBottom: 15, //TODO margin
      }}
      container
      direction="column"
      alignItems={"center"}
      justifyContent="center"
    >
      <Grid
        item
        container
        sx={{
          width: 296,
          minHeight: 238,
          backgroundColor: "#FFFFFF",
        }}
      >
        {basketItems}
      </Grid>

      <Grid
        item
        sx={{
          width: 296,
          height: 51.1,
          backgroundColor: "#FFFFFF",
          // borderColor: "#1EA4CE",
          // border: 2,
          // borderRadius: 2,
          marinTop: 3,
        }}
        container
        justifyContent={"flex-end"}
        direction={"row"}
      >
        <Grid item xs={6}>
          <h1
            style={{
              fontSize: "12px",
              color: "#1EA4CE",
              textAlign: "center",
              textJustify: "center",
              marginTop: "14px",
            }}
          >
            ₺ {calculateTotal()}
          </h1>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Basket;
