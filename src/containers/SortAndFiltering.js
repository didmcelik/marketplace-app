import { Box } from "@mui/material";
import React from "react";
import SearchContainer from "./search/SearchContainer";

const SortAndFiltering = () => {
  return (
    <>
      <Box
        sx={{
          width: 296,
          height: 244,
          backgroundColor: "#FFFFFF",
          marginBottom: 15, //TODO margin
        }}
      >
        <SearchContainer searchBy="tags"></SearchContainer>
      </Box>
      <Box sx={{ width: 296, height: 244, backgroundColor: "#FFFFFF" }}>
        <SearchContainer searchBy="brand"></SearchContainer>
      </Box>
    </>
  );
};

export default SortAndFiltering;
