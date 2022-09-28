import "./Footer.css";
import React from "react";
import leftArrow from "../Assets/Icons/leftArrow.svg";
import rightArrow from "../Assets/Icons/rightArrow.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="pagination">
                <span className="prev">
                    <p>prev</p>
                    <img src={leftArrow} alt="Previous-icon" className="arrow-icon"/>
                </span>
                <span>
                    <p>next</p>
                    <img src={rightArrow} alt="Next-icon" className="arrow-icon"/>
                </span>
            </div>
            <div className="price">
                <span>
                    <p>add to cart</p>
                    <p className="amount">$95.97</p>
                </span>
            </div>
        </div>
    )
};

export default Footer;