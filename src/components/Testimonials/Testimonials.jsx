import React from "react";
import "./Testimonials.css";
import { useRef } from "react";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.jpg";
import user_2 from "../../assets/user-2.jpg";
import user_3 from "../../assets/user-3.jpg";
import user_4 from "../../assets/user-4.jpg";

const Testimonials = () => {
  //Adding logic for the back and next button;

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sophia Martinez</h3>
                  <span>Los Angeles, USA</span>
                </div>
              </div>
              <p>
                The online learning system is incredibly intuitive and
                user-friendly.
                <br /> I've been able to balance my studies with a full-time job
                thanks to the flexible scheduling.
                <br /> I couldn't ask for a better experience.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Emily Thompson</h3>
                  <span>Chicago, USA</span>
                </div>
              </div>
              <p>
                <p>
                  What sets this university apart is the sense of community.
                  <br /> From day one, I felt supported by both peers and staff.
                  <br /> This journey has been academically enriching and
                  personally fulfilling.
                </p>
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>David Chen</h3>
                  <span>Seattle, USA</span>
                </div>
              </div>
              <p>
                I was amazed at how practical and hands-on the curriculum is.
                <br /> The projects we worked on actually mirror real-world
                challenges, which has boosted my confidence.
                <br /> Highly recommend it for future professionals.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Grace Lee</h3>
                  <span>San Francisco, USA</span>
                </div>
              </div>
              <p>
                From the moment I enrolled, the support team has been
                incredible.
                <br /> Whether it’s academic advising or career services, I
                always felt like someone had my back.
                <br /> This program helped me grow both professionally and
                personally.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
