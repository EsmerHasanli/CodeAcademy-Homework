import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryByID } from "../../../service/api/categoriesRequest";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const AdminDetailsPage = () => {
  const { id } = useParams();
  let [category, setCategory] = useState({});

  useEffect(() => {
    getCategoryByID(id).then((response) => {
      setCategory(response);
    });
  }, [id]);

  return (
    <>
      <Card
        sx={{ maxWidth: 345, flex: "1 1 300px", marginBottom: 2 }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminDetailsPage;
