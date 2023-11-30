import { useContext, useEffect, useState } from "react";
import { Button, Table } from "antd";
import { getAllCategories } from "../services/api/categoriesrequest";
import Swal from "sweetalert2";
import { BasketContext } from "../services/context/basketContext";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Categories = () => {
  const { basket, setBasket } = useContext(BasketContext);

  const [categories, setCategories] = useState([]);

  const addToBasket = (record) => {
    setBasket((prevBasket) => {
      const newBasket = [...prevBasket, record];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return newBasket;
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: `${record.name} added to basket`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      console.log(categories);
    });
  }, []);

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
      filters: categories.map((category) => {
        return {
          text: category.description,
          value: category.description,
        };
      }),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Basket",
      render: (value, record) => (
        <Button onClick={() => addToBasket(record)} type="primary">
          add
        </Button>
      ),
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Categories</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={categories}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default Categories;
