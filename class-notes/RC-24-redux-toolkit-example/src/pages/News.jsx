import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif"

const News = () => {
  const { loading, haberler } = useSelector((state) => state.haberSlice);
  console.log(haberler);

  return (
    <>
      {loading ? (
        <img src={loadingGif} alt="" />
      ) : (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          <Card sx={{ maxWidth: 345, maxHeight: 600, m: 5 }}>
            <CardMedia component="img" image="" height="250" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              ></Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <Button size="small">CLEAR</Button>

              <Button size="small" target="_blank">
                DETAIL
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
};

export default News;
