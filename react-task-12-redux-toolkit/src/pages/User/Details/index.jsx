import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductByID } from "../../../services/api/products";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { add_to_basket } from "../../../redux/slices/basketSlice";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const { id } = useParams();
  let [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    getProductByID(id).then((response) => {
      setProduct(response);
    });
  }, [id]);

  return (
    <Container>
      <h1 style={{ margin: "20px 0 40px 0", textAlign: "center" }}>
        Detail Page
      </h1>

      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={product.image}
            alt="product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              dispatch(
                add_to_basket({ name: product.name, price: product.price })
              );
              Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: `${product.name} added to basket`,
                showConfirmButton: false,
                timer: 1500,
              });
            }}
            variant="contained"
            type="primary"
          >
            <ShoppingCartIcon />
            add to cart
          </Button>

          <Link style={{ marginLeft: 10 }} to="/products">
            <Button size="small" variant="outlined" color="primary">
              go back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default DetailsPage;
