import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { Grid } from "@mui/material";
import { setCurrentPageIndex } from "../redux/actions/paginationActions";
import { setFilteredProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const productType = useSelector((state) => state.productType.type);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const shirtsMemoized = useMemo(() => {
    return products.filter((prod) => prod.itemType === "shirt"); //JSON.stringify(data || {});
  }, [products]);

  const mugsMemoized = useMemo(() => {
    return products.filter((prod) => prod.itemType === "mug"); //JSON.stringify(data || {});
  }, [products]);

  const currenPageIndex = useSelector((state) => state.currenPageIndex);
  const selectedBrandFilter = useSelector(
    (state) => state.selectedBrands.brands
  );
  const selectedTagFilter = useSelector((state) => state.selectedTags.tags);

  const ManipulateProducts = () => {
    let array = productType === "mug" ? mugsMemoized : shirtsMemoized;

    if (selectedBrandFilter.length > 0) {
      array = array.filter(({ manufacturer }) =>
        selectedBrandFilter.some((x) => x == manufacturer)
      );
    }
    if (selectedTagFilter.length > 0) {
      array = array.filter(({ tags }) =>
        selectedTagFilter.some((x) => tags.includes(x))
      );
    }
    dispatch(setFilteredProducts(array));
  };

  useEffect(() => {
    if (productType === "shirt") {
      dispatch(setFilteredProducts(shirtsMemoized));
    } else {
      dispatch(setFilteredProducts(mugsMemoized));
    }
  }, [products, productType]);

  useEffect(() => {
    dispatch(setCurrentPageIndex(1));
    ManipulateProducts();
  }, [selectedBrandFilter, selectedTagFilter, productType]);

  useEffect(() => {
    ManipulateProducts();
  }, [currenPageIndex]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        minWidth: 608,
        minHeight: 1008,
        backgroundColor: "#FFFFFF",
        marginTop: "16px",
      }}
    >
      <ProductComponent></ProductComponent>
    </Grid>
  );
};

export default ProductListing;
