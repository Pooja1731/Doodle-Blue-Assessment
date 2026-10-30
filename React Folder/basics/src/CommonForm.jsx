import { useState } from "react";
import Button from "./common components/Button.jsx";
import FormInput from "./common components/FormInput.jsx";
import Dropdown from "./common components/Dropdown.jsx";
import './CommonForm.css'

function CommonForm() {
  const [course, setCourse] = useState("");

  const courseOptions = [
    { value: "AI&DS", label: "AI & Data Science" },
    { value: "CSE", label: "Computer Science" },
    { value: "IT", label: "Information Technology" },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
  }

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <FormInput label="Student Name" type="text" />

        <FormInput label="Email Address" type="email" />

        <FormInput label="Password" type="password" />

        <Dropdown
          label="Select Course"
          options={courseOptions}
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CommonForm;