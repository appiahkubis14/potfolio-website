import React, { useEffect, useState } from "react";

const Contact = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("active"); // Changed classNameList to classList
      });

      input.addEventListener("focusout", () => {
        if (input.value === "") {
          input.parentElement.classList.remove("active"); // Changed classNameList to classList
        } else {
          input.parentElement.classList.add("active");
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => { });
        input.removeEventListener("focusout", () => { });
      });
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputState),
      });

      const data = await response.json();

      if (data.success) {
        alert("Email sent successfully!");
        setInputState({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      alert("Error sending email.");
    }
  };


  return (
    <>
      {/* Section Contact */}
      <section className="contact-section" id="contact">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Get In Touch.
          </h2>
          <div className="line"></div>
        </div>
        <p className="services-product-text fade_up">
          TAKE A COFFEE & CHAT WITH ME
        </p>
        <div className="main-box-contact">
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M6 6H42C43.1046 6 44 6.89544 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89544 42 4 41.1046 4 40V8C4 6.89544 4.89544 6 6 6ZM24.1212 23.3658L11.2944 12.4754L8.70556 15.5246L24.1462 28.6342L39.3088 15.5123L36.6912 12.4877L24.1212 23.3658Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">EMAIL</p>
              <p className="contact-email">
                <a href="mailto:appiakubis14@gmail.com">
                  appiakubis14@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M14 4H36C37.1046 4 38 4.89544 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V0H14V4ZM14 8V18H34V8H14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">PHONE</p>
              <p className="contact-email">
                <a href="tel:+233593778113">(+233) 59 377 8113</a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="form">
              <label htmlFor="name" className="form__label">NAME</label>
              <input
                type="text"
                className="form__input"
                placeholder="Your name"
                id="name"
                required
                autoComplete="off"
                value={inputState.name}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="email" className="form__label">EMAIL</label>
              <input
                type="email"
                className="form__input"
                placeholder="Your email"
                id="email"
                required
                autoComplete="off"
                value={inputState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form subject-input-main">
              <label htmlFor="subject" className="form__label">SUBJECT</label>
              <input
                type="text"
                className="form__input"
                placeholder="Your subject"
                id="subject"
                required
                autoComplete="off"
                value={inputState.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="message" className="form__label">MESSAGE</label>
              <textarea
                className="form__input"
                placeholder="Write your text..."
                id="message"
                required
                autoComplete="off"
                value={inputState.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="wrapper blog-btn">
            <button type="submit" className="btn-hover">Submit Now</button>
          </div>
        </form>
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.953925941509!2d-0.2833242374495092!3d5.689555907790582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9fe4a171ffa1%3A0x5c8c33702991df80!2sPokuase%20Overhead%20Accra%20side!5e1!3m2!1sen!2sgh!4v1738410383655!5m2!1sen!2sgh" 
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.953925941509!2d-0.2833242374495092!3d5.689555907790582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9fe4a171ffa1%3A0x5c8c33702991df80!2sPokuase%20Overhead%20Accra%20side!5e1!3m2!1sen!2sgh!4v1738410383655!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

        <div className="footer">
          © 2025 | All rights reserved by
          <span>
            <a href="#"> Samuel Appiah Kubi</a>
          </span>
        </div>
      </section>
      {/* Section Contact End */}
    </>
  );
};
export default Contact;
