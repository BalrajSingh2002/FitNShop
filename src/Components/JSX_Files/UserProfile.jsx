import React from "react";
import "../CSS_Files/UserProfile.css";
import { useUser } from "../../userContext";
import { imagefrombuffer } from "imagefrombuffer";
import { Link } from "react-router-dom";
const UserProfile = ({ globalUser }) => {
  const { userData, setUserData } = useUser();
  console.log("user set to ", userData);
  return (
    <>
      <div className="userProfile">
        <div className="userDp">
          <img
            src={imagefrombuffer({
              type: userData.profilePicture?.contentType,
              data: userData.profilePicture?.data?.data,
            })}
            alt=""
          />
        </div>
        <div className="userDetails">
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
          <p>{userData.email}</p>
        </div>
      </div>
      <Link to="/signin">
        <button
          onClick={() => {
            setUserData(null);
          }}
        >
          LOGOUT
        </button>
      </Link>
    </>
  );
};

export default UserProfile;
