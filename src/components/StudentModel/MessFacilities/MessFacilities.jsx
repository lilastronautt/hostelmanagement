import React from "react";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import Card from "../../lib/Card/Card";
import SvgComponent from "../../lib/SvgComp/SvgComponent";
import "../Hostelfacilities/HostelFacilities.css";
import food from "./mfAssets/food.png";
import fssai from "./mfAssets/fssai.png";
import mess from "./mfAssets/mess.png";
import water from "./mfAssets/water.png";

const SecurityFacilities = () => {
  return (
    <SectionContainer>
      <Card heading="Mess Facilities">
        <section className="HF_flex__creator">
          <SvgComponent path={mess} text="Mess and Canteen Setup Services" />
          <SvgComponent path={water} text="RO Drinking Water" />
          <SvgComponent path={food} text="Food Facilities" />
          <SvgComponent path={fssai} text="FSSAI Certified" />
        </section>
      </Card>
    </SectionContainer>
  );
};

export default SecurityFacilities;
