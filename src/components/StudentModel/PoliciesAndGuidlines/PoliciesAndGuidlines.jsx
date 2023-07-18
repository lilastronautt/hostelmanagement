import React from "react";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import Card from "../../lib/Card/Card";

const Policies = [
  {
    id: 0,
    content:
      "Students should ensure that all the electric appliances (fans, lights etc) fitted in the hostel room are to be switched off before leaving the rooms.",
  },
  {
    id: 1,
    content:
      "Any act of manhandling, group fighting, intimidation or violence, willful damage to property or drunken behavior constitutes a serious offence. Students should behave with restraint, proper decorum and should show the highest level of social etiquette.",
  },
  {
    id: 2,
    content:
      "Any manner of festivities and noise making/celebrations will not be entertained. All recreational facilities to be turned off at 2200hrs.",
  },
  {
    id: 3,
    content:
      "No form of ragging is allowed, on misconduct, defaulters will be severely punished.",
  },
  {
    id: 4,
    content:
      "Expensive items &amp; personal belongings like jewelry, electronic gadget to be kept at own risk, Hostel authorities shall not be responsible for any theft/burglary or damage of any items.",
  },
  {
    id: 5,
    content:
      "The boarders are not allowed to gamble, consume intoxicants (narcotics, alcoholic beverages, smoking etc.) in the hostel premises. Random rounds and checking of student's rooms will be carried out by the hostel staff.",
  },
  {
    id: 6,
    content:
      "No electrical appliances (i.e. kettle, iron, induction cooker, immersion rods, coolers, etc.) to be used in rooms without prior permission.",
  },
  {
    id: 7,
    content:
      "The boarders are not allowed to stay overnight out of their hostels without prior permission of the Hostel Authority.",
  },
  {
    id: 8,
    content:
      "The boarders shall not indulge in any act of theft, immoral acts, misbehavior with University staffs, spread of regionalism, communalism and casteism etc. Appropriate disciplinary action will be taken against the defaulters.",
  },
  {
    id: 9,
    content:
      "Students are not allowed to convene any meeting/ party in the hostel premises without the prior permission of Hostel wardens.",
  },
  {
    id: 10,
    content:
      "No student should take law into his/her own hand and indulge in indiscipline, physical fights, abusive language, teasing, insulting gestures etc. Students found indulging in such activities will be liable to be punished/ expelled from the hostel.",
  },
  {
    id: 11,
    content:
      "Students should not paste or make objectionable articles or pictures in the hostel premises.",
  },
  {
    id: 12,
    content:
      "Students should have to show their identity card at every entry/ exit at the Campus main gate.",
  },
];

const PoliciesAndGuidlines = () => {
  return (
    <SectionContainer>
      <Card heading="Hostels Polices and Guidelines">
        <ul>
          {Policies.map((policy) => (
            <>
              <li key={policy.id}>{policy.content}</li>
              <br />
            </>
          ))}
        </ul>
      </Card>
    </SectionContainer>
  );
};

export default PoliciesAndGuidlines;
