import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            title="Google Map"
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96350.89619860986!2d80.12354294869989!3d12.980814002730716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52612e6504f695%3A0x127f60241ebc9e82!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1707814095763!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="Name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="Email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="text" placeholder="Mobile number" maxLength={10} />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
        </section>
    </>
  );
};

export default Contact;
