import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="London"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Mumbai"
          title="Mumbai"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Gujarat"
          title="Gujarat"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="bangalore"
          title="bangalore"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="pune"
          title="pune"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
