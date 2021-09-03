import React from "react";

const RightSidebar = () => {
  return (
    <>
      <div className="right-sidebar">
        <div>
          <span className="close-menu-two">
            <i className="fal fa-times" />
          </span>
          <h2 className="head-text">Manage Friends</h2>
          <p className="color-one">List of pending friendship</p>
          <span className="border-bottom mt_20" />
          <div className="user-box mt_25">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="head-sub-text">Donte</h3>
              <p>1 2 w</p>
            </div>
            <div className="request-btn mt_10">
              <button className="reject">Reject</button>
              <button className="accept">Accept</button>
            </div>
          </div>
          <div className="user-box mt_20">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="head-sub-text">Hoang</h3>
              <p>1 y</p>
            </div>
            <div className="request-btn mt_10">
              <button className="reject">Reject</button>
              <button className="accept">Accept</button>
            </div>
          </div>
          <div className="user-box mt_20">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="head-sub-text">Sang</h3>
              <p>21 w</p>
            </div>
            <div className="request-btn mt_10">
              <button className="reject">Reject</button>
              <button className="accept">Accept</button>
            </div>
          </div>
          <span className="border-bottom mt_20" />
          <p className="color-one mt_20">List friendship</p>
          <div className="mt_20 d-flex align-items-start justify-content-between">
            <div>
              <h3 className="head-sub-text">Thi</h3>
            </div>
          </div>
          <div className="mt_20 d-flex align-items-start justify-content-between">
            <div>
              <h3 className="head-sub-text">Dat</h3>
            </div>
          </div>
          <div className="mt_20 d-flex align-items-start justify-content-between">
            <div>
              <h3 className="head-sub-text">Simon</h3>
            </div>
          </div>
          <span className="border-bottom mt_20" />
          <div className="search-box mt_15 position-relative">
            <input type="text" placeholder="Hoa" />
            <button className="search-btn">
              <i className="far fa-search" />
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-between mt_20">
            <h3 className="head-sub-text">Hoa </h3>
            <button className="accept add-btn">
              <i className="far fa-plus mr_5" /> Add Friend
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
