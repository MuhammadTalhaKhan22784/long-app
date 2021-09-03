import React from "react";

const ConditionsButton = () => {
  const data = [
    {
      className: "user-box mt_25",
      name: "Donte",
      text: "12 w",
      btnAccept: "Accept",
      btnReject: "Reject",
    },
    {
      className: "user-box mt_20",
      name: "Hoang",
      text: "1 y",
      btnAccept: "Accept",
      btnReject: "Reject",
    },
    {
      className: "user-box mt_20",
      name: "Sang",
      text: "21 w",
      btnAccept: "Accept",
      btnReject: "Reject",
    },
  ];
  return (
    <>
      <h2 className="head-text">Manage Friends</h2>
      <p className="color-one">List of pending friendship</p>
      <span className="border-bottom mt_20" />
      {data.map((d, index) => {
        return (
          <div key={index} className={d.className}>
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="head-sub-text">{d.name}</h3>
              <p>{d.text}</p>
            </div>
            <div className="request-btn mt_10">
              <button className="reject">{d.btnReject}</button>
              <button className="accept">{d.btnAccept}</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ConditionsButton;
