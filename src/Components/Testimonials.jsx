import React from "react";

const Testimonials = (
  {PrimaryHeading,
  SecHeading,
  rating,
  message,
  author,
  company}
) => {
  return (
    <div className="Testimonials">
      <div className="testimonial-primary-heading">{PrimaryHeading}</div>
      <div className="testimonial-secondary-heading">{SecHeading}</div>
      <div className="testimonial-box">
        <ul>
          {rating.map(() => {
            return <li>0</li>;
          })}
        </ul>
        <div className="box-message">"{message}"</div>
        <div className="box-auth-details">
          <h5 className="author">{author}</h5>
          <h5 className="company">{company}</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
