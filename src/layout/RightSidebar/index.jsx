import React from "react";
import AddFreind from "../../components/RightSidebarComponents/AddFreind";
import ConditionsButton from "../../components/RightSidebarComponents/ConditionsButton";
import ListFreindship from "../../components/RightSidebarComponents/ListFreindship";

const RightSidebar = () => {
  return (
    <>
      <div className="right-sidebar">
        <div>
          <span className="close-menu-two">
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
