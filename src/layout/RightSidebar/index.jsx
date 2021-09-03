import React from "react";
// components
import AddFreind from "../../components/RightSidebarComponents/AddFreind";
import ConditionsButton from "../../components/RightSidebarComponents/ConditionsButton";
import ListFreindship from "../../components/RightSidebarComponents/ListFreindship";

const RightSidebar = (props) => {
  return (
    <>
      <div className={`right-sidebar ${props.className}`}>
        <div>
          <span className="close-menu-two" onClick={props.closeFunc}>
            <i className="fal fa-times" />
          </span>
          <ConditionsButton />
          <span className="border-bottom mt_20" />
          <ListFreindship />
          <span className="border-bottom mt_20" />
          <AddFreind />
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
