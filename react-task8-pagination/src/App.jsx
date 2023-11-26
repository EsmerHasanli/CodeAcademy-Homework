import "./App.css";

import HeroSection from "./assets/Components/HeroSection";
import TableSection from "./assets/Components/Table";
import Cards from "./assets/Components/Cards";
import Sliders from "./assets/Components/Sliders";
import { Col, Row } from "antd";

function App() {
  return (
    <>
      <HeroSection />
      <TableSection />

      {/* <div style={{ width: "90%", margin: "0 auto", padding: "30px 0"}}>
        <Row style={{justifyContent:'space-between', alignItems:'flex-start'}} >
          <Col lg={4}>
            <Sliders  lg={4} />
          </Col>
          <Col lg={8}>
            <Cards lg={8}/>
          </Col>
        </Row>
      </div> */}

      <Cards/>
    </>
  );
}

export default App;
