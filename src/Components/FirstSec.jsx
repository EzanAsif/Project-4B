import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import '../App.css';


const FirstSec = () => {
  return (
    <div className="first-sec">
        {/* <source src="https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.mp4" type="video/mp4;" />       */}
        <div className="first-sec-heading">
        <h5 className="first-sec-name">HI, WE'RE JUNTO</h5>
        <Typewriter className = "first-sec-type-writter"
          onInit={(typewriter) => {
            typewriter
              // .pauseFor(2500)
              .pasteString("We're here to help you ")
              .typeString(
                "<br> <strong>Generate more leads</strong>"
              )
              .pauseFor(300)
              .deleteChars(20)
              .typeString("<strong>To grow your business</strong>")
              .deleteChars(21)
              .typeString("<strong>Close more deals.</strong>")
              .pauseFor(Infinity)
              .start();
          }}
        />
        <div className="first-sec-call-to-aciton">
            <a href="#" className = "primary">Let's make it happen</a>   

            <a href="#" className = "secondary">How we work <ArrowRightAltIcon /></a>
        </div>
      </div>
    </div>
  );
};

export default FirstSec;
