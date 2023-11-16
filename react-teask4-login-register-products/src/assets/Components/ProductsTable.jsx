import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  getAllProducts,
  postProduct,
  putProductByID,
  deleteProductsByID,
} from "../script/productsrequests.js";
import PropTypes from 'prop-types';

const ProductsTable = ({ loggedInUser }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  const [newProduct, setNewProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
      setSortedProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );

    setSortedProducts(filteredProducts);
  };

  const handleSortByPrice = () => {
    const sortedByPrice = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sortedByPrice);
  };

  const handleOpenAddNewForm = () => {
    setAddForm(true);
    setEditForm(false);
  };

  const handleOpenEditForm = (product) => {
    setEditedProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      discountPercentage: product.discountPercentage,
    });
    setAddForm(false);
    setEditForm(true);
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    const updatedProduct = await putProductByID(
      editedProduct.id,
      editedProduct
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setSortedProducts((prevSortedProducts) =>
      prevSortedProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );

    setEditedProduct({
      id: null,
      name: "",
      price: "",
      discountPercentage: "",
    });

    setEditForm(false);
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProductsByID(productId);

    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
    setSortedProducts((prevSortedProducts) =>
      prevSortedProducts.filter((product) => product.id !== productId)
    );
  };

  const handleAddNewProduct = async (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.price) {
      console.error("Please fill in product name and price.");
      return;
    }

    const addedProduct = await postProduct(newProduct);

    setProducts((prevProducts) => [...prevProducts, addedProduct]);
    setSortedProducts((prevSortedProducts) => [
      ...prevSortedProducts,
      addedProduct,
    ]);

    setNewProduct({
      name: "",
      price: "",
      discountPercentage: "",
    });

    setAddForm(false);
  };

  return (
    <>
      {/* if admin */}
      {loggedInUser && loggedInUser.isAdmin && (
        <>
          <Input
            placeholder="Search product"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button onClick={handleSortByPrice}>Sort by price</Button>
          <Button onClick={handleOpenAddNewForm}>Add new product</Button>
          {addForm && (
            <form onSubmit={handleAddNewProduct}>
              <Input
                placeholder="Product name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Product price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Product discount percentage"
                value={newProduct.discountPercentage}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    discountPercentage: e.target.value,
                  })
                }
              />
              <Button type="submit">Add Product</Button>
            </form>
          )}

          {editForm && (
            <form onSubmit={handleEditProduct}>
              <Input
                placeholder="Product name"
                value={editedProduct.name}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    name: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Product price"
                value={editedProduct.price}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Product discount percentage"
                value={editedProduct.discountPercentage}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    discountPercentage: e.target.value,
                  })
                }
              />
              <Button type="submit">Edit Product</Button>
            </form>
          )}

          <TableContainer style={{ margin: "10px" }}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Discount Percentage</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedProducts.map((product, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.discountPercentage}</Td>
                    <Td>
                      <Button onClick={() => handleOpenEditForm(product)}>
                        Edit
                      </Button>
                    </Td>
                    <Td>
                      <Button onClick={() => handleDeleteProduct(product.id)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}

      {/* if not admin */}
      {loggedInUser && !loggedInUser.isAdmin && (
        <>
          {" "}
          <Input
            placeholder="Search product"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button onClick={handleSortByPrice}>Sort by price</Button>
          <TableContainer style={{ margin: "10px" }}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Discount Percentage</Th>
                </Tr>
              </Thead>
              <Tbody>
                {sortedProducts.map((product, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.discountPercentage}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}

      {/* if not logged in */}
      {!loggedInUser && (
        <TableContainer style={{ margin: "10px" }}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Discount Percentage</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <p>No products are aviable. You need to login first!</p>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

ProductsTable.propTypes = {
    isAdmin: PropTypes.bool,
};

export default ProductsTable;
