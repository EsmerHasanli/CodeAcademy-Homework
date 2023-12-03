import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import {
  getAllProducts,
  getProductByID,
} from "../../../services/api/products/index";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { add_to_basket } from "../../../redux/slices/basketSlice";
import { useDispatch } from "react-redux";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Products = () => {
  
  const navigate = useNavigate();
  let [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);
  //columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      filters: products.map((product) => {
        return {
          text: product.description,
          value: product.description,
        };
      }),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Info",
      render: (text, record) =>
        JSON.parse(localStorage.getItem("user")) ? (
          <Link to={`${record.id}`}>
            <Button type="primary">
              <SettingsIcon />
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "warning",
                text: "Please log in to add items to your basket.",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: "Go to Sign In",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login");
                }
              });
            }}
            type="primary"
          >
            <SettingsIcon />
          </Button>
        ),
    },
    {
      title: "Basket",
      render: (text, record) => {
        console.log(record);
        return (
          <Button
            onClick={() => {
              if (localStorage.getItem("user")) {
                dispatch(add_to_basket({name: record.name, price: record.price}));
                Swal.fire({
                  position: "bottom-end",
                  icon: "success",
                  title: `${record.name} added to basket`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                Swal.fire({
                  position: "center",
                  icon: "warning",
                  text: "Please log in to add items to your basket.",
                  showConfirmButton: true,
                  showCancelButton: true,
                  confirmButtonText: "Go to Sign In",
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/login");
                  }
                });
              }
            }}
            type="primary"
          >
            <ShoppingCartIcon />
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Products</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={products}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default Products;
