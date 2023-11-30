import React, { useContext, useEffect } from "react";
import { Table, Button } from "antd";
import { BasketContext } from "../services/context/basketContext";

const Basket = () => {
  const basketContext = useContext(BasketContext);

  const { basket, setBasket } = basketContext;

  useEffect(() => {
    const updatedBasket = basket.map((item) => ({
      ...item,
      quantity: "quantity" in item ? item.quantity : 1,
    }));
    setBasket(updatedBasket);

    const saveToLocal = (newBasket) => {
      localStorage.setItem("basket", JSON.stringify(newBasket));
    };
    saveToLocal(updatedBasket);
  }, [basket, setBasket]);

  const handleIncrease = (itemId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecraese = (itemId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Increase",
      key: "increase",
      render: (text, record) => (
        <Button type="danger" onClick={() => handleIncrease(record.id)}>
          +
        </Button>
      ),
    },
    {
      title: "Decrease",
      key: "decrease",
      render: (text, record) => (
        <Button type="danger" onClick={() => handleDecraese(record.id)}>
          -
        </Button>
      ),
    },
    {
      title: "Remove",
      key: "remove",
      render: (text, record) => (
        <Button type="danger" onClick={() => handleDelete(record.id)}>
          delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Basket</h2>
      <Table dataSource={basket} columns={columns} rowKey="id" />
    </div>
  );
};

export default Basket;
