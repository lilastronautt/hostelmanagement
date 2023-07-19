import React from "react";
import HostelLifeSlider from "../../../components/StudentModel/StudentDashboard/HostelLifeSlider/HostelLifeSlider";
import HeroHostelSlider from "../../../components/StudentModel/StudentDashboard/HeroHostelSlider/HeroHostelSlider";
import AboutMit from "../../../components/StudentModel/AboutMit/AboutMit";
import MissionMit from "../../../components/StudentModel/MissionMit/MissionMit";
import PoliciesAndGuidlines from "../../../components/StudentModel/PoliciesAndGuidlines/PoliciesAndGuidlines";
import StudentQuery from "../../../components/StudentModel/StudentQuery/StudentQuery";
import HostelFacilities from "../../../components/StudentModel/Hostelfacilities/HostelFacilities";
import SecurityFacilities from "../../../components/StudentModel/SecurityFacilities/Securityfacilities";
import MessFacilities from "../../../components/StudentModel/MessFacilities/MessFacilities";
import MessProvides from "../../../components/StudentModel/MessProvides/MessProvides";
import TranportationFacilities from "../../../components/StudentModel/TransportationFacilities/TransportationFacilities";
import FAQ from "../../../components/StudentModel/FAQ/FAQ/"
const studentHome = () => {
  return (
    <div>
      <HeroHostelSlider />
      <AboutMit />
      <MissionMit />
      {/* <HostelLifeSlider /> */}
      <HostelFacilities />
      <SecurityFacilities />
      <MessFacilities />
      <MessProvides />
      <TranportationFacilities />
      <PoliciesAndGuidlines />
      <FAQ></FAQ>
      <StudentQuery />
    </div>
  );
};

export default studentHome;
