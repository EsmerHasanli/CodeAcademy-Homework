import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getAllCategories } from "../../../service/api/categoriesRequest";

const UserHomePage = () => {
  const [categories, setCategories] = React.useState([]);

  const fetchData = async () => {
    const categoriesData = await getAllCategories();
    setCategories(categoriesData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{marginTop:'50px', display: 'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center', gap: 2 }}>
      {categories.map((category, idx) => (
        <Card key={idx} sx={{ maxWidth: 345, flex: '1 1 300px', marginBottom: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {category.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {category.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserHomePage;
