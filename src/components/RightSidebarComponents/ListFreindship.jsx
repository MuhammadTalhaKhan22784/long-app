import React from "react";

const ListFreindship = () => {
  const freindshipList = [
    {
      name: "Thi",
    },
    {
      name: "Dat",
    },
    {
      name: "Simon",
    },
  ];
  return (
    <>
      <p className="color-one mt_20">List friendship</p>
      {freindshipList.map((d, index) => {
        return (
          <div
            key={index}
            className="mt_20 d-flex align-items-start justify-content-between"
          >
            <div>
              <h3 className="head-sub-text">{d.name}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListFreindship;
