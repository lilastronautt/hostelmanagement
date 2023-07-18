import React from "react";
import Card from "../../lib/Card/Card";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";

const AboutMit = () => {
  return (
    <SectionContainer>
      <Card heading="About">
        <p style={{ margin: "10px 0 0 0" }}>
          MIT Art Design and Technology University has been making concerted
          efforts for taking a leap towards the world class education. It is
          among st the leading Government recognized Private University within
          the ambit of the renowned MIT Group of Institutions, Pune. MIT ADT
          University is a multi-disciplinary university which is famous for its
          sprawling lush green campus of 125 acres and picturesque location,
          spanning over the large area of 125 acres. University is the
          manifestation of the serenity of Mother Nature and aesthetically built
          on the banks of Mula-Mutha river. 
          </p>
          <p style={{ margin: "10px 0 0 0" }}>The University is driven by the
          vision of delivering the world - class value-based education and
          Holistic development of the student's personality, enabling them to
          transform themselves into a Future Global Leaders.
        </p>
      </Card>
    </SectionContainer>
  );
};

export default AboutMit;
