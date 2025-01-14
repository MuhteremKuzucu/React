import React from "react";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import  Grid  from "@mui/material/Grid";
import FirmCard from "./../components/FirmCard";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  console.log(firms);

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" sx={{ color: "red", marginBottom: "1rem" }}>
        Firms
      </Typography>

      <Button
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          padding: "0.2rem 1rem",
          marginBottom: "1rem",
          "&:hover":{
            backgroundColor: "secondary.main",

          }
        }}
      >
        New Firm
      </Button>

      <Grid container sx={{marginLeft:"1rem"}} >
        {firms.map((firm, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <FirmCard firm={firm}  />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
