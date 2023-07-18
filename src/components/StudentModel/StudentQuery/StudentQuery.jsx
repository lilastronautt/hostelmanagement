import React, { useState } from "react";
import "./StudentQuery.css";
import Card from "../../lib/Card/Card";
import SectionContainer from "../../lib/SectionContainer/SectionContainer";
import contactUs from "./sqAssets/ContactUs.png";

const StudentQuery = () => {
  const [queryInputs, setqueryInputs] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  const StudentQueryFormHandler = (event) => {
    event.preventDefault();
    console.log(queryInputs);
  };

  const queryNameH = (e) => {
    setqueryInputs((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const queryEmailH = (e) => {
    setqueryInputs((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const queryMobileH = (e) => {
    setqueryInputs((prev) => {
      return { ...prev, mobile: e.target.value };
    });
  };
  const queryCommentH = (e) => {
    setqueryInputs((prev) => {
      return { ...prev, comment: e.target.value };
    });
  };

  return (
    <SectionContainer>
      <Card>
        <div className="SQ_flexCreator">
          <form onSubmit={StudentQueryFormHandler} className="SQ_form">
            <h3>Submit Your Query</h3>
            <label>Name *</label>
            <input type="text" value={queryInputs.name} onChange={queryNameH} />
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={queryInputs.email}
              onChange={queryEmailH}
            />
            <label>Mobile *</label>
            <input
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              value={queryInputs.mobile}
              onChange={queryMobileH}
            />
            <label>Comment *</label>
            <input
              type="text"
              value={queryInputs.comment}
              onChange={queryCommentH}
            />
            <button type="submit" className="form_action__btn">
              Submit
            </button>
          </form>
          <div className="SQ_img__container">
            <img src={contactUs}></img>
          </div>
        </div>
      </Card>
    </SectionContainer>
  );
};

export default StudentQuery;
