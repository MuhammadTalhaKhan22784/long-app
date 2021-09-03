import React from "react";

const AddFreind = () => {
  return (
    <>
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
    </>
  );
};

export default AddFreind;
