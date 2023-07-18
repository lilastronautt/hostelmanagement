import React from "react";
import HostelLifeSlider from "../../../components/StudentModel/StudentDashboard/HostelLifeSlider/HostelLifeSlider";
import HeroHostelSlider from "../../../components/StudentModel/StudentDashboard/HeroHostelSlider/HeroHostelSlider";
import AboutMit from "../../../components/StudentModel/AboutMit/AboutMit";
import MissionMit from "../../../components/StudentModel/MissionMit/MissionMit";
import PoliciesAndGuidlines from "../../../components/StudentModel/PoliciesAndGuidlines/PoliciesAndGuidlines";
import StudentQuery from "../../../components/StudentModel/StudentQuery/StudentQuery";
import HostelFacilities from "../../../components/StudentModel/Hostelfacilities/HostelFacilities";

const studentHome = () => {
  return (
    <div>
      <HeroHostelSlider />
      <AboutMit />
      <MissionMit />
      {/* <HostelLifeSlider /> */}
      <HostelFacilities />
      <PoliciesAndGuidlines />
      <StudentQuery />
    </div>
  );
};

export default studentHome;
