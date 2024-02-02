import React from "react";
import "./ContactUs.css";
import { Col, Container, Row } from "react-bootstrap";
import contactUsMap from "../../../Assets/Images/ContactPage/contactUsMap.png";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import * as formik from "formik";
import * as yup from "yup";

function ContactUs() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <div className="contactUs">
      <Container>
        <Row>
          <Col lg="6">
            <p className="p-design">Contact Us</p>
            <h2>Contact Us. It’s Easy.</h2>
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "Mark",
                lastName: "Otto",
                username: "",
                city: "",
                state: "",
                zip: "",
                terms: false,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      lg="6"
                      controlId="validationFormik01"
                    >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      lg="6"
                      controlId="validationFormik02"
                    >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} lg="6" controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group as={Col} md="3" lg='6' controlId="validationFormik04">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="State"
                        name="state"
                        value={values.state}
                        onChange={handleChange}
                        isInvalid={!!errors.state}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.state}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formHorizontalCheck"
                    >
                        <h6>What Services do you need?</h6>
                      <Col lg='auto'>
                        <Form.Check label="Remember me" />
                      </Col>
                      <Col lg='auto'>
                        <Form.Check label="Remember me" />
                      </Col>
                      <Col lg='auto'>
                        <Form.Check label="Remember me" />
                      </Col>
                      <Col lg='auto'>
                        <Form.Check label="Remember me" />
                      </Col>
                      <Col lg='auto'>
                        <Form.Check label="Remember me" />
                      </Col>
                      <Col lg='auto'>
                        <Form.Check label="Remember me" />
                      </Col>
                    </Form.Group>
                  </Row>

                  <a href="#home" className="c-btn col-auto">
                    Submit
                  </a>
                </Form>
              )}
            </Formik>
          </Col>
          <Col lg="6">
            <img src={contactUsMap} alt="" className="img-fluid contactUsMap" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
