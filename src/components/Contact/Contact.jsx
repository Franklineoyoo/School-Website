import React from "react";
import "./Contact.css";
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
        <ul>
          <li>
            <i className="fas fa-phone"></i> <strong>Call Us:</strong> (510)
            555-1234
          </li>
          <li>
            <i className="fas fa-envelope"></i> <strong>General Email: </strong>{" "}
            <a href="mailto:info@universityname.ac.ke"> info@inspiracore.com</a>
          </li>
          <li>
            <i className="fas fa-user-graduate"></i>{" "}
            <strong>Admissions:</strong>{" "}
            <a href="mailto:admissions@universityname.ac.ke">
              admissions.inspiracore.com
            </a>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> <strong>Location:</strong>{" "}
            University Avenue, Berkeley, California, USA
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
