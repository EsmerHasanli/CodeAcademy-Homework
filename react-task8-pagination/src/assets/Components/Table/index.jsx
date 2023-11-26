import React, { useState, useEffect } from "react";
import { Button, Divider, Table, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function TableSection() {
  let [beers, setBeers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  const handleDetailsClick = (record) => {
    console.log(record);
    setSelectedBeer(record);
    setShowModal(true);
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
      title: "TagLine",
      dataIndex: "tagline",
      sorter: (a, b) => a.tagline.localeCompare(b.tagline),
    },
    {
      title: "ABV",
      dataIndex: "abv",
      sorter: (a, b) => a.abv - b.tagline,
      filters: beers.map((item) => {
        return {
          text: item.abv,
          value: item.abv,
        };
      }),
      onFilter: (value, record) => {
        console.log("value", value);
        console.log("record: ", record);
        return record.abv == value;
      },
    },
    {
      title: "Details",
      render: (text, record) => (
        <Button onClick={() => handleDetailsClick(record)}>Info</Button>
      ),
    },
  ];

  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "30px 0" }}>
      {/* devider */}
      <Divider
        style={{ fontSize: "18px", color: "rgb(38,51,59)" }}
        orientation="left"
      >
        Beers Table
      </Divider>
      {/* table */}
      <Table columns={columns} dataSource={beers} onChange={onChange} />
      {/* modal */}
      {selectedBeer && (
        <Modal
          title={selectedBeer.name}
          visible={showModal}
          onCancel={() => setShowModal(false)}
          footer={[
            <Button key="close" onClick={() => setShowModal(false)}>
              Ok
            </Button>,
          ]}
        >
          <div
            style={{
              margin: "10px 0",
              padding: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <img
              style={{ width: "100px", height: "390px", objectFit: "cover" }}
              src={selectedBeer.image_url}
              alt=""
            />
            <div style={{ marginLeft: "10%" }}>
              <p>
                <b>Tag Name:</b>
                <span style={{ marginLeft: "2%" }}>{selectedBeer.tagline}</span>
              </p>
              <br />
              <p>
                <FontAwesomeIcon icon={faCoffee} /> <b> Alhocol Percentage:</b>
                <span style={{ marginLeft: "2%" }}>{selectedBeer.abv}</span>
              </p>
              <br />
              <p>
                <b>Description:</b>
                <span style={{ marginLeft: "2%" }}>
                  {selectedBeer.description}
                </span>
              </p>
              <br />
              <p>
                <b>Ingredients:</b>
                <span style={{ marginLeft: "2%" }}>
                  {selectedBeer.ingredients &&
                    selectedBeer.ingredients.malt &&
                    selectedBeer.ingredients.malt.map((malt) => (
                      <span key={malt.name}>{malt.name}, </span>
                    ))}
                </span>
              </p>
              <br />
              <p>
                <b>It's good with:</b>
                <span style={{ marginLeft: "2%" }}>
                  {selectedBeer.food_pairing &&
                    selectedBeer.food_pairing.join(", ")}
                </span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default TableSection;
