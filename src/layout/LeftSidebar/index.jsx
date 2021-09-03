import React from "react";
import editProfileIcon from "../../assets/images/edit-profile-icon.svg";

const LeftSidebar = (props) => {
  return (
    <>
      <div className={`sidebar ${props.className}`}>
        <div className="sidebar-content">
          <span className="close-menu-one" onClick={props.closeFunc}>
            <i className="fal fa-times" />
          </span>
          <h2 className="head-text">Manage Account</h2>
          <p className="color-one">Account functionality</p>
          <a className="menu-text mt_30" href="#">
            <img src={editProfileIcon} alt="..." /> Edit Profile Page
          </a>
          <a
            href="#"
            // th:href="@{/delete}"
            className="manage-btn delete-account-btn"
          >
            Delete Account
          </a>
          <a
            href="#"
            // th:href="@{/logout}"
            className="manage-btn log-out-btn"
          >
            Log Out
          </a>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
