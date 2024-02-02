import React, { useState } from "react";
import "./HomePortfolio.css";
import { Container, Col, Row } from "react-bootstrap";
import HomePortfolioSlider from "../../Slider/HomePortfolioSlider";

function HomePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Project");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="homePortfolioPart d-flex justify">
      <Container>
        <Row>
          <Col lg="6" className="homePortfolioPart1">
            <p className="p-design ">Our Portfolio</p>
            <h2>Where Imagination Takes Center Stage</h2>
            <div className="d-flex justify-content-between mt-4 mb-4">
              <a
                href="#home"
                className={`category-btn ${selectedCategory === "All Project" ? "active" : ""}`}
                onClick={() => handleCategoryClick("All Project")}
              >
                All Project
              </a>
              <a
                href="#home"
                className={`category-btn ${selectedCategory === "Marketing" ? "active" : ""}`}
                onClick={() => handleCategoryClick("Marketing")}
              >
                Marketing
              </a>
              <a
                href="#home"
                className={`category-btn ${selectedCategory === "Development" ? "active" : ""}`}
                onClick={() => handleCategoryClick("Development")}
              >
                Development
              </a>
              <a
                href="#home"
                className={`category-btn ${selectedCategory === "OtherCategory" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick("OtherCategory");
                }}
              >
                OtherCategory
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero mass egestas malesuada viverra gravida libero cursus
              nulla leo pulvinar. Lorem ipsum dolor sit amet, consectetur
              adipiscing cursus nulla leo pulvinar.
            </p>
          </Col>
          <Col lg="6" className="homePortfolioPart2">
            <HomePortfolioSlider selectedCategory={selectedCategory} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePortfolio;
