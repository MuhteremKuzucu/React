import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const CardGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  },[]);

  return (
    <Container>
      <Typography variant="h4" align="center" color="error">
        CARD-GRİD
      </Typography>
      {/* spacing={2} card lar arası 2 birim boşluk */}
      <Grid container spacing={2}>
        {products.map((a) => (
          <Grid key={a.id} item xs={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={a.images[0]}
                title="urun"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {a.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small">Share</Button>
                <Button variant="outlined" size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardGrid;
