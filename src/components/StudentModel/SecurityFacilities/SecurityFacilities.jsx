import React from "react";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import Card from "../../lib/Card/Card";
import SvgComponent from "../../lib/SvgComp/SvgComponent";
import "../Hostelfacilities/HostelFacilities.css";
import cctv from "./sfAssets/cctv.png";
import gate from "./sfAssets/gate.png";
import security from "./sfAssets/security.png";
import ambulance from "./sfAssets/ambulance.png";

const SecurityFacilities = () => {
  return (
    <SectionContainer>
      <Card heading="Security Facilities">
        <section className="HF_flex__creator">
          <SvgComponent path={gate} text="Gate Community" />
          <SvgComponent path={ambulance} text="24 x 7 Ambulance" />
          <SvgComponent path={security} text="Security Staff" />
          <SvgComponent path={cctv} text="24 x 7 Under CCTV" />
        </section>
      </Card>
    </SectionContainer>
  );
};

export default SecurityFacilities;
