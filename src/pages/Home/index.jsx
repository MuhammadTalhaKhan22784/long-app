import React from "react";
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
import ThanhLong from "../../components/HomeComponents/ThanhLong";
import HuePhuong from "../../components/HomeComponents/HuePhuong";
import Phuong from "../../components/HomeComponents/Phuong";

const Home = () => {
  return (
    <>
      <div>
        <div className="d-flex align-items-center overlay-overflow">
          <div className="overlay-one" />
          <div className="overlay-two" />
          {/*side bar*/}
          <LeftSidebar />
          <div className="main-content main-content-one main-content-two">
            <div className="news-feed-box">
              <div className="d-flex align-items-center justify-content-between d_none">
                <button className="menu-button-one">
                  <img src={menu} alt="" />
                </button>
                <button className="menu-button-two">
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
              <ThanhLong />
              <HuePhuong />
              <Phuong />
            </div>
          </div>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
