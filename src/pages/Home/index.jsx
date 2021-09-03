import React, { useState } from "react";
// css
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/helper.css";
import "../../assets/css/fontawesome.min.css";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

// assets
import menu from "../../assets/images/menu.svg";

// components
import LeftSidebar from "../../layout/LeftSidebar";
import RightSidebar from "../../layout/RightSidebar";
import CommentCard from "../../components/HomeComponents/CommentCard";

const Home = () => {
  // states
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  // function to close right side bar
  const handleCloseRight = () => {
    setShowRight(false);
  };
  // function to open right side bar
  const handleOpenRight = () => {
    setShowRight(true);
  };
  // function to close left side bar
  const handleCloseLeft = () => {
    setShowLeft(false);
  };
  // function to open left side bar
  const handleOpenLeft = () => {
    setShowLeft(true);
  };
  return (
    <>
      <div>
        <div className="d-flex align-items-center overlay-overflow">
          <div className={!showLeft ? "overlay-one" : "overlay-one right-ab"} />
          <div className={!showRight ? "overlay-two" : "overlay-two left-ab"} />

          {/* left sidebar*/}
          <LeftSidebar
            className={!showLeft ? "" : "active"}
            closeFunc={handleCloseLeft}
          />
          <div className="main-content main-content-one main-content-two">
            <div className="news-feed-box">
              <div className="d-flex align-items-center justify-content-between d_none">
                <button className="menu-button-one" onClick={handleOpenLeft}>
                  <img src={menu} alt="" />
                </button>
                <button className="menu-button-two" onClick={handleOpenRight}>
                  <img src={menu} alt="" />
                </button>
              </div>
              <h2 className="head-text post-mt">Posts/News Feed</h2>
              <p className="mt_10 color-two">
                Welcome!
                <br />
              </p>
              {/* <p th:text="${currentUser}" /> */}
              <form action="#">
                <textarea
                  className="post-box mt_30"
                  placeholder="What’s on your mind Thanh Long?"
                  defaultValue={""}
                />
              </form>
              <CommentCard />
            </div>
          </div>
          {/* right sidebar */}
          <RightSidebar
            className={!showRight ? "" : "active"}
            closeFunc={handleCloseRight}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
