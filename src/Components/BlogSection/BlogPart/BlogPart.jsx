import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import blog1 from "../../../Assets/Images/BlogPage/blog-1.svg";

function BlogPart() {
  const blogs = [
    {
      image: blog1,
      title:'Lorem Ipsum is simply dummy' ,
      content: 'It is a long established fact desing that reader will be distracted by the Content of a page.'
    },
    {
        image: blog1,
        title:'Lorem Ipsum is simply dummy' ,
        content: 'It is a long established fact desing that reader will be distracted by the Content of a page.'
      },
      {
        image: blog1,
        title:'Lorem Ipsum is simply dummy' ,
        content: 'It is a long established fact desing that reader will be distracted by the Content of a page.'
      },
      {
        image: blog1,
        title:'Lorem Ipsum is simply dummy' ,
        content: 'It is a long established fact desing that reader will be distracted by the Content of a page.'
      },
  ];
  return (
    <div className="blogPart">
      <Container>
        <Row>
          <Col lg="8">
            <p className="p-design">Our Blogs</p>
            <h2>Latest News and Blogs For Making Brand</h2>
            <div className="row">
              {blogs.map((blog, index) => (
                <div className="col-lg-6" key={index}>
                  <Card className="">
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <Card.Title style={{marginTop:'1.87rem'}}>
                        <h4>{blog.title}</h4>
                      </Card.Title>
                      <Card.Text>
                        <p>{blog.content}</p>{" "}
                        {/* Add the content from the blog object */}
                      </Card.Text>
                      <hr />
                      <Row>
                        
                      </Row>

                      <hr />
                      <a href={blog.link} className="c-btn" style={{marginTop:'1.25rem'}}>
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogPart;
