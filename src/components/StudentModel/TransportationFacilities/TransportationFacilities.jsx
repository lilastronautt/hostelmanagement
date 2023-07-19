import React from "react";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import Card from "../../lib/Card/Card";
import SvgComponent from "../../lib/SvgComp/SvgComponent";
import "../Hostelfacilities/HostelFacilities.css";
import bus from "./tfAssets/bus.png";
import "./Transportation.css";

const SecurityFacilities = () => {
  return (
    <SectionContainer>
      <Card heading="Transportation Facilities">
        <section>
          <SvgComponent
            path={bus}
            text="Shuttle (Bus) facility to the College & Mess (i.e. Breakfast, Lunch, Snacks and Dinner) as per the Schedule"
            t={"update_flex__creator"}
          />
        </section>
      </Card>
    </SectionContainer>
  );
};

export default SecurityFacilities;
