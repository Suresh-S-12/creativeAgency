import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Common/Header/Header';
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter';
import Footer from '../Components/Common/Footer/Footer';
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs';
import { teamDetail } from '../Components/TeamSection/TeamPart';
import TeamCommon from '../Components/TeamSection/TeamCommon/TeamCommon';

function TeamDetail() {
  // Use useLocation hook to get the current location
  const location = useLocation();

  // Check if location and location.state exist'
  console.log('Location:', location);
  const teamMember = location && location.state ? location.state.teamMember : null;
  
  // Check if teamMember is defined before using it
  const selectedTeamMember = teamMember
    ? teamDetail.find((member) => member.title === teamMember.title)
    : null;

  return (
    <div>
      <Header />
      <BreadCrumbs />
      {selectedTeamMember ? (
        <>
          <h1>{selectedTeamMember.title}</h1>
          {/* Additional details for the selected team member */}
          <img src={selectedTeamMember.image} alt={selectedTeamMember.title} />
          <p>{selectedTeamMember.content}</p>
        </>
      ) : (
        <p>Team member not found</p>
      )}
      <TeamCommon/>
      <HomeNewsLetter />
      <Footer />
    </div>
  );
}

export default TeamDetail;
