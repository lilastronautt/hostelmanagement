import React from "react";
import Card from "../../lib/Card/Card";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";

const MissionMit = () => {
  return (
    <SectionContainer>
      <Card heading="Mission">
        <p style={{ margin: "10px 0 0 0" }}>
          The Mission of MIT Art, Design and Technology University is to provide
          impetus to faculty, learners, and staff by developing their innate
          intellectual capabilities, creative abilities and entrepreneurial
          mind-set for the socio-economic development of the nation.
        </p>
        <p style={{ margin: "10px 0 0 0" }}>
          We empower learners to become adaptive and agile global professionals
          through unique specialized programs building academia-industrial
          partnership.
        </p>
        <p style={{ margin: "10px 0 0 0" }}>
          We nurture learners to be intellectually curious, technologically
          equipped, mentally sound, physically fit, spiritually elevated,
          socio-culturally sensitive, environmentally conscious through
          continuous holistic education for the ever-evolving world.
        </p>
        <p style={{ margin: "10px 0 0 0" }}>
          We provide technology-enabled learner-driven curriculum, value added
          courses, simulated learning environments, state-of-the-art
          infrastructure and opportunities for community engagement.
        </p>
      </Card>
    </SectionContainer>
  );
};

export default MissionMit;
