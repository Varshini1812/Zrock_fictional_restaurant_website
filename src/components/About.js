import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          why <span> Thy_Fiesta</span>
        </h1>

        <div className="row">
          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
              It's not just about the ingredients—it's about the passion and
              expertise of our culinary team. Our chefs are masters of their
              craft, blending traditional techniques with innovative twists to
              create dishes that delight the senses and leave a lasting
              impression.
            </p>
            <p>
              At our restaurant, every dish is a work of art, thoughtfully
              prepared to tantalize your taste buds and ignite your culinary
              imagination. Whether you're savoring a classic favorite or daring
              to try something new, each bite is an invitation to embark on a
              culinary journey like no other. From our kitchen to your table, we
              invite you to experience the magic of our food and discover what
              makes dining with us truly special.
            </p>
          </div>
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
