import React from "react";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import Card from "../../lib/Card/Card";
import twinsharing from "./hfAssets/twinsharing.svg";
import cupboard from "./hfAssets/cupboard.svg";
import hotwater from "./hfAssets/hotwater.svg";
import wifi from "./hfAssets/wifi.svg";
import mattress from "./hfAssets/mattress.svg";
import family from "./hfAssets/family.svg";
import water from "./hfAssets/water.svg";
import table from "./hfAssets/table.svg";
import housekeeping from "./hfAssets/housekeeping.svg";
import cctv from "./hfAssets/cctv.svg";
import bio from "./hfAssets/bio.svg";
import SvgComponent from "./SvgComponent";
import "./HostelFacilities.css";

const HostelFacilities = () => {
  return (
    <SectionContainer>
      <Card heading="Hostel Facilities">
        <section className="HF_flex__creator">
          <SvgComponent path={twinsharing} text="Twin Sharing Room" />
          <SvgComponent path={cupboard} text="Cupboard" />
          <SvgComponent path={hotwater} text="hotwater" />
          <SvgComponent path={mattress} text="Beds With Mattress" />
          <SvgComponent path={wifi} text="40 Mbps" />
          <SvgComponent path={family} text="24x7 Parents fresponse Live" />
          <SvgComponent path={water} text="RO Drinking Water" />
          <SvgComponent path={table} text="Study table" />
          <SvgComponent path={housekeeping} text="House Keeping staff" />
          <SvgComponent path={cctv} text="24x7 Under CCTV" />
          <SvgComponent path={bio} text="BioMetric Entrance" />
          {/* <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div>
          <div>
            <img src="" alt="HF"></img>
          </div> */}
        </section>
      </Card>
    </SectionContainer>
  );
};

export default HostelFacilities;
