import React, { useState } from "react";
import "./Portfolio.css";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import portfolio1 from "../../Assets/Images/PortfolioPage/portfolio1.svg";
import portfolio2 from "../../Assets/Images/PortfolioPage/portfolio2.svg";
import portfolio3 from "../../Assets/Images/PortfolioPage/portfolio3.svg";
import portfolio4 from "../../Assets/Images/PortfolioPage/portfolio4.svg";
import portfolio5 from "../../Assets/Images/PortfolioPage/portfolio5.svg";
import portfolio6 from "../../Assets/Images/PortfolioPage/portfolio6.svg";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    urlTitle:'Mobile-App-Design',
    image: portfolio1,
    title: "Mobile App Design",
    content: "Lorem ipsum dolor sit amet.",
    category: "Design",
    Tools: 'Figma ,Photoshop,Adobe Illustrate',
    Duration: "October - September 2022"
  },
  {
    id: 2,
    image: portfolio2,
    urlTitle: 'Software-Development',
    title: 'Software Development',
    content: 'Lorem ipsum dolor sit amet.',
    category: 'Marketing',
  },
  
  {
    id: 3,
    urlTitle:'Web-Designer',
    image: portfolio3,
    title: "Web Designer",
    content: "Lorem ipsum dolor sit amet.",
    category: "Business",
  },
  {
    id: 4,
    urlTitle:'Creative-Agency',
    image: portfolio4,
    title: "Creative Agency",
    content: "Lorem ipsum dolor sit amet.",
    category: "Design",
  },
  {
    id: 5,
    urlTitle:'Digital-Marketing',
    image: portfolio5,
    title: "Digital Marketing",
    content: "Lorem ipsum dolor sit amet.",
    category: "Design",
  },
  {
    id: 6,
    urlTitle:'Web-Development',
    image: portfolio6,
    title: "Web Development",
    content: "Lorem ipsum dolor sit amet.",
    category: "Business",
  },
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to show all projects

  const filteredPortfolios =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (portfolio) => portfolio.category === selectedCategory
        );

  return (
    <div className="portfolio">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="p-0">
            <p className="p-design">Our Project</p>
            <h2>Latest News and portfolios For Making Brand</h2>
          </Col>
          <Col lg="6">
            <div className="d-flex justify-content-end gap-4 ms-auto">
              <a
                href="#home"
                onClick={() => setSelectedCategory("All")}
                className={`category-btn col-auto ${
                  selectedCategory === "All" ? "active" : ""
                }`}
              >
                All Project
              </a>
              <a
                href="#home"
                onClick={() => setSelectedCategory("Marketing")}
                className={`category-btn col-auto ${
                  selectedCategory === "Marketing" ? "active" : ""
                }`}
              >
                Marketing
              </a>
              <a
                href="#home"
                onClick={() => setSelectedCategory("Design")}
                className={`category-btn col-auto ${
                  selectedCategory === "Design" ? "active" : ""
                }`}
              >
                Design
              </a>
              <a
                href="#home"
                onClick={() => setSelectedCategory("Business")}
                className={`category-btn col-auto ${
                  selectedCategory === "Business" ? "active" : ""
                }`}
              >
                Business
              </a>
            </div>
          </Col>

          {filteredPortfolios.map((portfolio, index) => (
            <div className="col-lg-4 g-4" key={index}>
              <Link to={`/portfolio/${portfolio.urlTitle}`}>
                <Card className="">
                  <Card.Img variant="top" src={portfolio.image} />
                  <Card.Body>
                    <Card.Title style={{ marginTop: "1.87rem" }}>
                      <h4>{portfolio.title}</h4>
                    </Card.Title>
                    <Card.Text>
                      <p>{portfolio.content}</p>{" "}
                      {/* Add the content from the portfolio object */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
          <Pagination className="portfolioPagination" id="page-item">
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>

            <Pagination.Next className="portfolioPaginationnext" />
          </Pagination>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
