import { Button, Table, Modal, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import {
  getAllProducts,
  putProduct,
  deleteProduct,
} from "../../../services/api/products/index";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../services/context/UserContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Dashboard = () => {
  const navigate = useNavigate();
  const{user} = useContext(UserContext);
  useEffect(()=>{
    if (user===null) {
      navigate('/admin');
    }
  },[]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [deleteProductId, setDeleteProductId] = useState(null);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);

  const showEditModal = (record) => {
    setEditedProduct(record);
    setEditModalVisible(true);
  };

  const handleEditModalClose = () => {
    setEditModalVisible(false);
    setEditedProduct({});
  };

  const handleEditProduct = async () => {
    try {
      await putProduct(editedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === editedProduct.id ? editedProduct : product
        )
      );
      handleEditModalClose();
    } catch (error) {
      console.error(error);
    }
  };

  const showDeleteConfirmation = (record) => {
    setDeleteProductId(record.id);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteProductId(null);
  };

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(deleteProductId);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== deleteProductId)
      );
      handleDeleteConfirmationClose();
    } catch (error) {
      console.error(error);
    }
  };

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
      filters: products.map((product) => ({
        text: product.description,
        value: product.description,
      })),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Edit",
      render: (text, record) => (
        <Button onClick={() => showEditModal(record)}>Edit</Button>
      ),
    },
    {
      title: "Delete",
      render: (text, record) => (
        <Button onClick={() => showDeleteConfirmation(record)}>Delete</Button>
      ),
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{ height: "100vh" }}>
        <Table
          style={{ width: "70%", margin: "60px auto" }}
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={products}
          loading={loading}
        />
        <Modal
          title="Edit Product"
          visible={isEditModalVisible}
          onCancel={handleEditModalClose}
          onOk={handleEditProduct}
        >
          <Input
            placeholder="Product Name"
            value={editedProduct.name}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
          />

          <Input
            placeholder="Product price"
            value={editedProduct.price}
            type="number"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
          />

          <Input
            placeholder="Product description"
            value={editedProduct.description}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, description: e.target.value })
            }
          />

        </Modal>
        <Modal
          title="Confirm Deletion"
          visible={!!deleteProductId}
          onCancel={handleDeleteConfirmationClose}
          onOk={handleDeleteProduct}
        >
          Are you sure you want to delete this product?
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
