// import React from 'react'
import "./Zero.css";
import Human1 from "../../images/media/human1.png";
import Human2 from "../../images/media/human2.png";
import Human3 from "../../images/media/human3.png";
import Human4 from "../../images/media/human4.png";
const Zero = () => {
  return (
    <div>
      <div className="zero">
        <div className="right">
          <div className="title">
            <h1>Welcome to</h1>
            <h1>LearnEnglish</h1>
          </div>
          <div className="line"></div>
          <div className="desc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              temporibus repellat maiores ab itaque eveniet similique odio quam
              necessitatibus! Architecto impedit facere qui nesciunt ratione ea
              veritatis aperiam maxime quidem.
            </p>
          </div>
          <div className="btns">
            <a href="#" className="join-course">
              Join Course
            </a>
            <a href="#" className="how-it-work">
              <i className="fa-solid fa-play"></i>
              How it work
            </a>
          </div>
        </div>
        <div className="left">
          <div className="top">
            <div className="cover firstCover">
              <img src={Human1} alt="top-left" className="human1" />
            </div>
            <div className="cover" id="secondCover">
              <img src={Human2} alt="top-right" className="human2" />
            </div>
          </div>
          <div className="bottom">
            <div className="cover">
              <img src={Human3} alt="bottom-left" className="human3" />
            </div>
            <div className="cover">
              <img src={Human4} alt="bottom-right" className="human4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zero;
