import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../reducers/profileSlice";
import "../styles/profilepage.css";
export default function Profilecard() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const [isEditable, setIsEditable] = useState(false);
  const [details, setDetails] = useState(profile);
  // console.log("profile DETAILS IN state", details);
  const handleChanges = (e) => {
    e.preventDefault();
    // console.log("event: ",e.target);
    setDetails({ ...details, [e.target.name]: e.target.value });
    // console.log("changes made",details);
  };
  const handleEditClick = (e) => {
    setIsEditable(!isEditable);
  };
  const handleSaveClick = (e) => {
    e.preventDefault();
    setIsEditable(!isEditable);
    // console.log("Save Clicked");
    // console.log("received from form", details);
    dispatch(changeProfile(details));
  };

  return (
    <>
    <div className="profile_container">
      <form onSubmit={handleSaveClick}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            defaultValue={profile.name}
            placeholder={profile.name}
            readOnly={!isEditable}
            onChange={handleChanges}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            defaultValue={profile.email}
            placeholder={profile.email}
            readOnly={!isEditable}
            onChange={handleChanges}
          />
        </label>
        {!isEditable && <button onClick={handleEditClick}>Edit</button>}
        {isEditable && <button type="submit">Save</button>}
      </form>
      </div>
    </>
  );
}
