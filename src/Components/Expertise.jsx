import React, { useState, useRef } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Expertise = () => {
  // const [section, setSection] = useState(false)

  AOS.init({
    duration : 800,
  })

  const showSection = () => {};

  const logos = useWebAnimations({
    keyframes: { transform: ["translateY(500px)","translateY(0px)"], opacity: [0,1] },
    timing: { duration: 1000, fill: "forwards", delay : 2},
  });

  // function animateLogos(){
  //   if (window.scrollY == 1190){
  //     console.log("TIHS IS CONTAINER");
  //     logos.getAnimation().play()
  //   }
  //   else{
  //     console.log("NOT IN DIV")
  //   }
  // }

  // window.addEventListener("scroll",
  //     animateLogos
  // )

  // const { ref, playState, getAnimation } = 

  // window.addEventListener("scroll", () => {
  //   if (window.screenY >= 1190){
  //     const animation = getAnimation()
  //     animation.play()
  //   }
  //   else{
  //     const animation = getAnimation()
  //     animation.stop()
  //   }

  // });

  return (
    <div className="Expertise">
      <div className="expertise-logos" data-aos="flip-up" data-offset = "200" >
        <div className="logos-col-a">
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-facebook.png"
              alt="facebook"
            />
          </div>
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-hubspot.png"
              alt="Wordpress"
            />
          </div>
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-analytics.png"
              alt="Wordpress"
            />
          </div>
        </div>
        <div className="logos-col-b">
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-databox.png"
              alt="facebook"
            />
          </div>
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-sem-rush.png"
              alt="Wordpress"
            />
          </div>
        </div>
        <div className="logos-col-c">
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-adwords-1.png"
              alt="facebook"
            />
          </div>
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-wordpress.png"
              alt="Wordpress"
            />
          </div>
          <div className="expertise-logo">
            <img
              src="https://junto.digital/wp-content/uploads/2018/09/logo-ahrefs.png"
              alt="Wordpress"
            />
          </div>
        </div>
      </div>
      <div className="expertise-text">
        <div className="expertise-subHeading" data-aos="fade-down" data-offset = "200">constantly innovating</div>
        <div className="expertise-heading" data-aos = "fade-left">
          Our toolbox helps businesses grow.
        </div>
        <div className="expertise-desc" data-aos = "fade-left">
          We are always looking for ways to provide more value to our clients by
          experimenting with the most advanced tools in digital marketing.
        </div>
        <div className="expertise-button" data-aos = "fade-down-left">
          <a href="#" className="getStarted">
            Let's get started
          </a>
          <a href="#" className="How_we_work">
            How we work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
