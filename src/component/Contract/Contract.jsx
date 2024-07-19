import React, { useState } from "react";
import "./Contract.scss";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contract = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message : "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "54d12029-e53f-4813-b851-8121ab63b382");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div class="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div class="contact-details">
            <div class="contact-detail">
              <img src={mail_icon} alt="" />
              <p>greatstackdev@gmail.com</p>
            </div>
            <div class="contact-detail">
              <img src={call_icon} alt="" />
              <p>+772-825-524</p>
            </div>
            <div class="contact-detail">
              <img src={location_icon} alt="" />
              <p>CA, United States</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            name="email"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
          type="text"
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
                    onChange={handleChange}
          ></textarea>

          <button type="submit" class="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contract;
