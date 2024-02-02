import React from "react";
import "./TeamPart.css";
import Card from "react-bootstrap/Card";
import { Link,useNavigate } from "react-router-dom";
import teamMember1 from "../../Assets/Images/TeamPage/teamMember1.jpg";
import teamMember2 from "../../Assets/Images/TeamPage/teamMember2.jpg";
import teamMember3 from "../../Assets/Images/TeamPage/teamMember3.jpg";
import teamMember4 from "../../Assets/Images/TeamPage/teamMember4.jpg";
import teamMember5 from "../../Assets/Images/TeamPage/teamMember5.jpg";
import teamMember6 from "../../Assets/Images/TeamPage/teamMember6.jpg";
import teamInsta from "../../Assets/Images/TeamPage/Instagram.svg";
import teamFacebook from "../../Assets/Images/TeamPage/Facebook.svg";
import teamTwitter from "../../Assets/Images/TeamPage/Twitter.svg";

import "./TeamPart.css";
import { Container, Row } from "react-bootstrap";
const teamDetail = [
  {
    id: 1,
    image: teamMember1,
    title: "Sarah Jasmine",
    content:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    id: 2,
    image: teamMember2,
    title: "Sarah Jasmine",
    content:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    id: 3,
    image: teamMember3,
    title: "Sarah Jasmine",
    content:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    id: 4,
    image: teamMember4,
    title: "Sarah Jasmine",
    content:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    id: 5,
    image: teamMember5,
    title: "Sarah Jasmine",
    content:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
  {
    id: 6,
    image: teamMember6,
    title: "Sarah Jasmine",
    content:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
  },
];

function TeamPart() {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    // Navigate to TeamDetail page with the selected team member
    navigate(`/team/${teamDetail.id}`, { state: { teamMember: teamDetail } });
  };


  return (
    <div className="teamPart">
      <Container>
        <Row>
          {teamDetail.map((teamDetail, index) => (
            <div className="col-lg-4 g-4 justify-content-center" key={index}>
              <Card className="text-center" onClick={() => handleCardClick(index)}>
                <Link
                  to={{
                    pathname: `/team/${teamDetail.id}`, // Accessing the specific team member by index
                    state: { teamMember: teamDetail }, // Passing the specific team member in the state
                  }}
                  className="teamMemberLink"
                >
                  <Card.Img
                    variant="top"
                    src={teamDetail.image}
                    className="teamMember"
                  />
                </Link>

                <Card.Body className="d-flex flex-column align-items-center">
                  <a
                    href={teamDetail.link}
                    className="teamCateogry text-center col-auto"
                    style={{ marginTop: "1.25rem" }}
                  >
                    CEO at Company
                  </a>
                  <Card.Title style={{ marginTop: "1.87rem" }}>
                    <Link
                      to={`/team/${teamDetail.id}`}
                      className="breadcrumb-title"
                    >
                      <h4>{teamDetail.title}</h4>
                    </Link>
                  </Card.Title>
                  <Card.Text>
                    <p>{teamDetail.content}</p>{" "}
                  </Card.Text>

                  <div
                    className="d-flex justify-content-center"
                    style={{ gap: "1.81rem" }}
                  >
                    <img
                      src={teamInsta}
                      alt="Instagram"
                      className="teamSocial"
                    />
                    <img
                      src={teamFacebook}
                      alt="Facebook"
                      className="teamSocial"
                    />
                    <img
                      src={teamTwitter}
                      alt="Twitter"
                      className="teamSocial"
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TeamPart;
export { teamDetail };
