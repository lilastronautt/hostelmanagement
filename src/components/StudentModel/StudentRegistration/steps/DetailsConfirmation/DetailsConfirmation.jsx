// import React from "react";
import { useNavigate } from "react-router-dom";

const formData = {
  name: "S. Utkarsh Rao",
  institute: "School of Computing",
  department: "Computer Science Engineering",
  email: "utkarshrao1177@gmail.com",
  phone_no: 6204644100,
  gender: "Male",
  apply_id: "MITApply2020abc",
  year_of_admission: 2020,
  enrolment_no: "",
};

const DetailsConfirmation = () => {
  const {
    name,
    institute,
    department,
    email,
    phone_no,
    gender,
    apply_id,
    year_of_admission,
    enrolment_no,
  } = formData;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('/set-password');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "50px auto" }}
    >
      <label>
        Name:
        <br />
        <input
          type="text"
          size="30"
          value={name}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Institute:
        <br />
        <input
          type="text"
          size="30"
          value={institute}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Department:
        <br />
        <input
          type="text"
          size="30"
          value={department}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type="email"
          size="30"
          value={email}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <br />
        <input
          type="tel"
          size="30"
          value={phone_no}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Gender:
        <br />
        <input
          type="text"
          size="30"
          value={gender}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Apply ID:
        <br />
        <input
          type="text"
          size="30"
          value={apply_id}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <label>
        Year of Admission:
        <br />
        <input
          type="number"
          size={1000}
          value={year_of_admission}
          disabled
          style={{ backgroundColor: "#f2f2f2", border: "1px solid #ccc", margin: "0 0 10px 0", padding:" 0 70px 0 0" }}
        />
      </label>
      <br />
      <label>
        Enrolment No (Optional):
        <br />
        <input
          type="text"
          size="30"
          value={enrolment_no}
          onChange={(e) => (formData.enrolment_no = e.target.value)}
          style={{ border: "1px solid #ccc", margin: "0 0 10px 0" }}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DetailsConfirmation;
