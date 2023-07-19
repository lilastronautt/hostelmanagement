import React from "react";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import Card from "../../lib/Card/Card";
import SvgComponent from "../../lib/SvgComp/SvgComponent";
import "../Hostelfacilities/HostelFacilities.css";
import breakfast from "./mpAssets/breakfast.png";
import lunch from "./mpAssets/lunch.png";
import snacks from "./mpAssets/snacks.png";
import dinner from "./mpAssets/dinner.png";

const SecurityFacilities = () => {
  return (
    <SectionContainer>
      <Card heading="Mess Provides">
        <section className="HF_flex__creator">
          <SvgComponent
            path={breakfast}
            text="BreakFast"
            time="07:30AM - 09:30AM"
          />
          <SvgComponent path={lunch} text="Lunch" time="12:00PM - 01:45PM" />
          <SvgComponent path={snacks} text="Snacks" time="05:00PM - 05:30PM" />
          <SvgComponent path={dinner} text="Dinner" time="07:30PM - 08:45PM" />
        </section>
      </Card>
    </SectionContainer>
  );
};

export default SecurityFacilities;
