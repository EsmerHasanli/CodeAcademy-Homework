import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllCategories } from "../../../service/api/categoriesRequest";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AdminTable = () => {
  const [categories, setCategories] = React.useState([]);

  const fetchData = async () => {
    const categoriesData = await getAllCategories();
    setCategories(categoriesData);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div  style={{display:'flex', justifyContent:'center', alignItems:'center',  margin: "20px" }}>
      <Button>
        <Link  to='/category/add' style={{textDecoration:'none', padding:'5px 10px', backgroundColor:'blue', color:'white'}}>add new category</Link>
      </Button>
    </div>
      <TableContainer
        component={Paper}
        sx={{ width: 1000, margin: "20px auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Desctiption</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{idx + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell align="left">{category.description}</TableCell>
                <TableCell align="left">
                  <Button>
                    <Link to={`/category/${category.id}`}> go to details </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminTable;
