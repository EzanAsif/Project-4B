import React from "react";
import StarRateIcon from '@material-ui/icons/StarRate';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Testimonials = (
  {PrimaryHeading,
  SecHeading,
  rating,
  message,
  author,
  company}
) => {

  AOS.init({
    duration : 800,
  })


  return (
    <div className="Testimonials">
      <div className="testimonial-primary-heading" data-aos = "flip-up">{PrimaryHeading}</div>
      <div className="testimonial-secondary-heading" data-aos = "flip-up" delay = "800">{SecHeading}</div>
      <div className="testimonial-box" data-aos="slide-up">
        <ul>
          {rating.map(() => {
            return <StarRateIcon/>;
          })}
        </ul>
        <div className="box-message"><q> {message} </q></div>
        <div className="box-auth-details">
          <h5 className="author">{author}.  •</h5>
          <h5 className="company">{company}</h5>
        </div>
      </div>
      <div className="clients-logo" data-aos = "zoom-out-left">
        <ul>
          <li><a href="#"><img src="https://junto.digital/wp-content/uploads/2018/08/Cardinal-Group-Logo-300x76.png"/></a></li>
          <li><a href="#"><img className = "no-filter" src="https://junto.digital/wp-content/uploads/logo-4-rivers.png"/></a></li>
          <li><a href="#"><img src="https://junto.digital/wp-content/uploads/2018/08/Emerson-Stone-Logo-300x152.png"/></a></li>
          <li><a href="#"><img src="https://junto.digital/wp-content/uploads/logo-brevite.png"/></a></li>
          <li><a href="#"><img src="https://junto.digital/wp-content/uploads/logo-denver-design-district.png"/></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
