import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../services/context/UserContext";
import { Container } from "@mui/material";
import { Button, Table } from "antd";

const Basket = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id-b.id
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localCompare(b.name),
    },
    {
      title: "Quanity",
      dataIndex: "quanity",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Increase",
      dataIndex: "increase",
      render: (text, record) => {
        return <Button type="primary">+</Button>;
      },
    },
    {
      title: "Decrease",
      dataIndex: "decrease",
      render: (text, record) => {
        return <Button type="primary">-</Button>;
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      render: (text, record) => {
        return <Button type="primary">delete</Button>;
      },
    },
  ];
  const data = [
    {
      key: "1",
      id: "1",
      name: "name 3",
      quanity: 1,
      price: 48,
      totalPrice: 48
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Container>
      <div style={{ marginTop: "30px" }}>
        <h1 style={{ textAlign: "center" }}>Basket</h1>

        <Table
          style={{ marginTop: "20px" }}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </Container>
  );
};

export default Basket;
