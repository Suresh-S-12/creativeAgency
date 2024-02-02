import React, { useEffect, useState } from "react";
import "./PortfolioDetailHeader.css";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { portfolioItems } from "../../../../mock";

function PortfolioDetailHeader() {
  const { urlTitle } = useParams();
  const [data, setData] = useState([
    {
      urlTitle: "",
      image: "",
      title: "",
      content: "",
      category: "",
      Tools: "",
      mainImage: "",
      Duration: "",
      mainImage: "",
      mainImageContent: [],
    },
  ]);

  useEffect(() => {
    console.log("form hitted");
    if (urlTitle) {
      const item = portfolioItems.find((ele) => ele.urlTitle === urlTitle);
      console.log("item", item);
      item && setData(item);
    }
  }, []);

  return (
    <div>
      <Container>
        <Row className="portfolioDetailHeader  ">
          <Col>
            <h6>Project Name</h6>
            <p>{data.urlTitle}</p>
          </Col>
          <Col>
            <h6>Category</h6>
            <p>{data.category}</p>
          </Col>
          <Col>
            <h6>Tools</h6>
            <p>{data.Tools}</p>
          </Col>
          <Col>
            <h6>Duration</h6>
            <p>{data.Duration}</p>
          </Col>
        </Row>
        <img
          src={data.mainImage}
          alt=""
          className="img-fluid portfolioDetailMainImage"
        />
        {data.mainImageContent &&
          data.mainImageContent.map((x, i) => {
            return (
              <div key={i} style={{ marginTop: "10px" }}>
                {x}
              </div>
            );
          })}
        {/* <p>{data.mainImageContent1}</p>
        <p>{data.mainImageContent2}</p> */}
        <Row className="portfolioSectionDetail">
          <Col lg="6" className="portfolioSectionDetailLeft">
            <div className="imgContainer">
              <img src={data.designImg1} alt="" className="img-fluid" />
            </div>
            <p>
              Some high level Sketching for how all the pieces would fit
              together{" "}
            </p>
            <div className="d-flex">
              <div className="imgContainerSmall"></div>
              <div className="imgContainerSmall"></div>
            </div>
          </Col>
          <Col lg="6" className="portfolioSectionDetailRight">
            <h2>Designing the details</h2>
            <p>
              Scrambled it to make a type specimen book. It has survived not
              only five centuriesbut also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem ipsum.
            </p>
            <p>
              Scrambled it to make a type specimen book. It has survived not
              only five centuriesbut also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem ipsum.
            </p>
            <p>
              Scrambled it to make a type specimen book. It has survived not
              only five centuriesbut also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem ipsum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PortfolioDetailHeader;
