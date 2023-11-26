import React, { useEffect, useState } from "react";
import { Card, Col, Input, Row, Pagination} from "antd";
import { Box, Button, Slider } from "@mui/material";

function valuetext(value) {
  return `${value}°C`;
}

const Cards = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState([]);
  const [value, setValue] = React.useState([20, 37]);
  const [searchedBeer, setSearchedBeer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    const filteredBeers = beers.filter(
      (beer) =>
        beer.name.toLowerCase().includes(searchedBeer.toLowerCase()) &&
        beer.abv >= value[0] &&
        beer.abv <= value[1]
    );
    setSearch(filteredBeers);
  };

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${pageSize}`)
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, [currentPage, pageSize]);

  const onShowSizeChange = (current, pageSize) => {
    setCurrentPage(current)
    setPageSize(pageSize)
  };

  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: 'center' }}>
        <Input
          style={{ width: '30%', marginRight: '20px' }}
          placeholder="Search"
          value={searchedBeer}
          onChange={(e) => setSearchedBeer(e.target.value)}
        />
        <Box style={{ marginRight: '20px' }} sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Alchocol range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <Button style={{ marginRight: '20px' }} onClick={handleSearch}>
          Search
        </Button>
        <Button
          style={{ marginRight: '20px' }}
          onClick={() => {
            setSearchedBeer("");
            setValue([20, 37]);
            setSearch([]);
          }}
        >
          Show All
        </Button>
      </div>

      <div style={{ margin: '0 auto', maxWidth: '1228px' }}>
        <Row gutter={[16, 16]} justify="center">
          {(search.length > 0 ? search : beers).map((beer) => (
            <Col key={beer.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: 240, marginBottom: 20, padding: 10 }}
                cover={
                  <img
                    style={{
                      height: "300px",
                      width: "100px",
                      display: "block",
                      margin: "0 auto",
                      borderRadius: "8px"
                    }}
                    alt="example"
                    src={beer.image_url}
                  />
                }
              >
                <h3 style={{ color: "rgb(236,171,165)" }}>{beer.name}</h3>
                <p>
                  <span style={{ color: "rgb(17,36,50)" }}>
                    Alcohol Percentage:
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      color:
                        beer.abv < 5
                          ? "green"
                          : beer.abv >= 5 && beer.abv <= 10
                          ? "orange"
                          : "red",
                    }}
                  >
                    {beer.abv}
                  </span>
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
     <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'20px 0'}}>
     <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
     </div>
    </>
  );
};

export default Cards;
