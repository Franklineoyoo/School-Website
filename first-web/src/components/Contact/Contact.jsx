import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import admission_icon from "../../assets/admission-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7087c1fb-9776-437d-844c-68df61ebc880");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message<img src={msg_icon} alt=""></img>
        </h3>
        <p>
          Whether you're exploring our academic programs, curious about the
          admissions process, or looking to learn more about student life on
          campus, our dedicated team is here to provide the information and
          support you need. From helping you choose the right course to guiding
          you through scholarship opportunities and campus housing, we're
          committed to making your university experience smooth and enriching.
          Don’t hesitate to reach out — we’re just a message or call away.
        </p>

        <ul>
          <li>
            <img src={phone_icon} alt="" />
            <strong>Phone:</strong> +254 712 345678
          </li>
          <li>
            <img src={mail_icon} alt="" />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@universityname.ac.ke">
              info@universityname.ac.ke
            </a>
          </li>
          <li>
            <img src={admission_icon} alt="" />
            <strong>Admissions Office:</strong>{" "}
            <a href="mailto:admissions@universityname.ac.ke">
              admissions@universityname.ac.ke
            </a>
          </li>

          <li>
            <img src={location_icon} alt="" />
            <strong>Main Campus Address:</strong> University Way, Nairobi, Kenya
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Ente Your Full Names"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile  Number"
            required
          />

          <label>Write Your Message Here</label>
          <textarea
            name="message"
            row="6"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
