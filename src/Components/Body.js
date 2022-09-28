import "./Body.css";
import React from "react";
import playVideoIcon from "../Assets/Icons/playVideoIcon.svg";
import instagramIcon from "../Assets/Icons/instagramIcon.svg";
import twitterIcon from "../Assets/Icons/twitterIcon.svg";
import facebookIcon from "../Assets/Icons/facebookIcon.svg";
import AirEdge270 from "../Assets/Images/AirEdge270.png";
import viewControlIcon from "../Assets/Icons/viewControlIcon.svg";

function Body() {
  const sizes = [
    {
      id: "size1",
      sizeNum: 8,
    },
    {
      id: "size2",
      sizeNum: 8.5,
    },
    {
      id: "size3",
      sizeNum: 9,
    },
    {
      id: "size4",
      sizeNum: 9.5,
    },
    {
      id: "size5",
      sizeNum: 10,
    },
    {
      id: "size6",
      sizeNum: 10.5,
    },
    {
      id: "size7",
      sizeNum: 11,
    },
    {
      id: "size8",
      sizeNum: 11.5,
    },
    {
      id: "size9",
      sizeNum: 12,
    },
    {
        id: "size10",
        sizeNum: 12.5,
    }
  ];
  const sizeContainer = sizes.map((size) => {
    return (
      <div className="size" key={size.id}>
        {size.sizeNum}
      </div>
    );
  });
  return (
    <div className="main">
      <div className="content">
        <div className="sneakers-info">
          <h4>men's shoe</h4>
          <h1>nike air edge 270</h1>
          <p>
            The Nike Air Edge 270 takes the look of retro <br />basketball and puts it
            through a modern lens.
          </p>
          <span>
            <img src={playVideoIcon} alt="play-video-icon" />
            <p>play video</p>
          </span>
        </div>
        <div className="sneakers-details">
          <div className="size-size">
            <h4>select size &#40;us&#41;</h4>
            <div className="sizes">{sizeContainer}</div>
          </div>
          <div className="color-color">
            <h4>select colour</h4>
            <div className="colors">
              <div className="color brown"></div>
              <div className="color black"></div>
              <div className="color blue"></div>
              <div className="color yellow"></div>
              <div className="color white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="sneakers-img">
        <img src={AirEdge270} alt="sneakers" className="airedge"/>
      </div>
      <div className="socials">
        <div className="scroll-text">
          <p>scroll down</p>
        </div>
        <div className="oval-space">
          <div className="oval"></div>
          <img src={viewControlIcon} alt="control-icon" className="control-icon"/>
        </div>
        <div className="social-icons">
          <img src={instagramIcon} alt="instagram-icon" />
          <img src={twitterIcon} alt="twitter-icon" />
          <img src={facebookIcon} alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default Body;
