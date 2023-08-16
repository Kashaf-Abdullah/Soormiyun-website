import React, { useEffect, useState } from "react";
import "./joinus.css";
import joinus from "../../img/img1.jpg";
import Form from "react-bootstrap/Form";
import { app, firestore } from "../auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const JoinUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [instituteError, setInstituteError] = useState("");
  const [experienceError, setExperienceError] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const firestoreAutoId = () => {
    const CHARS =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let autoId = "";
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    return autoId;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      phone: e.target.elements.phoneNumber.value,
      email: e.target.elements.email.value,
      institute: e.target.elements.institute.value,
      volunteer_work_exp: e.target.elements.experience.value,
      position_applying_for: selectedCategory,
    };

    // Perform additional validation checks
    let valid = true;

    // Validate name field
    if (!formData.name.trim()) {
      setNameError("Please enter your name");
      valid = false;
    } else if (formData.name.trim().length > 70) {
      setNameError("Name should be less than or equal to 70 characters");
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      setNameError("Name should only contain alphabets");
      valid = false;
    } else {
      setNameError("");
    }

    // Validate phone field
    if (!formData.phone.trim()) {
      setPhoneError("Please enter your phone number.");
      valid = false;
    } else if (!/^(\+|00)92\d{10}$|^\d{11}$/.test(formData.phone)) {
      setPhoneError("Please enter a valid phone number.");
      valid = false;
    } else {
      setPhoneError("");
    }

    // Validate email field
    if (!formData.email.trim()) {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validate institute field
    if (!formData.institute.trim()) {
      setInstituteError("Please enter your institute name");
      valid = false;
    } else if (formData.institute.trim().length > 200) {
      setInstituteError(
        "Institute name should be less than or equal to 200 characters."
      );
      valid = false;
    } else {
      setInstituteError("");
    }

    // Validate experience field
    if (!formData.volunteer_work_exp.trim()) {
      setExperienceError(
        "Please tell us about your experience with NGO or Volunteer Work"
      );
      valid = false;
    } else if (formData.volunteer_work_exp.trim().length > 3000) {
      setExperienceError(
        "Experience should be less than or equal to 3000 characters."
      );
      valid = false;
    } else {
      setExperienceError("");
    }

    if (!formData.position_applying_for || !valid) {
      setShowErrorModal(true);
      return;
    }

    try {
      setLoading(true);

      let uid = firestoreAutoId();
      await setDoc(doc(firestore, "Join MMF Form Responses", formData.email), {
        ...formData,
        timestamp: serverTimestamp(),
        status: "Unread",
        uid: uid,
      });
      setShowSuccessModal(true);
      e.target.reset();
      setSelectedCategory("");
    } catch (error) {
      console.error("Error saving form data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="joinus-Section" id="joinus-section" data-aos="fade-up">
      <div className="joinus container">
        <div className="left-joinus" data-aos="fade-right">
          <img src={joinus} alt="Join Us" />
        </div>
        <div className="right-joinus" data-aos="fade-left">
          <div className="right-joinusTxt">
            <span>Join Soormiyun Community</span>
            <span>
              Join us and become a part of a family that believes that every
              life matters, and everyone must get opportunities to make their
              lives better. Join us and help people around you! Help us in
              transforming lives through education in Pakistan
            </span>
            <Form className="container join-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <input type="text" placeholder="Name" name="name" required />
                {nameError && <p className="error-message">{nameError}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phoneNumber">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  required
                />
                {phoneError && <p className="error-message">{phoneError}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <input type="email" placeholder="Email" name="email" required />
                {emailError && <p className="error-message">{emailError}</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="institute">
                <input
                  type="text"
                  placeholder="Institute Name"
                  name="institute"
                  required
                />
                {instituteError && (
                  <p className="error-message">{instituteError}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="experience">
                <textarea
                  as="textarea"
                  rows={5}
                  placeholder="Tell us about your experience in volunteer work and how can you be a good fit for us? If you are applying for any creative/designer role, please add the link to your portfolio."
                  name="experience"
                  required
                />
                {experienceError && (
                  <p className="error-message">{experienceError}</p>
                )}
              </Form.Group>

              <div className="dropdown">
                <select
                  className="btn dropdown-toggle"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Designer">Designer</option>
                  <option value="Outreach">Outreach</option>
                  <option value="Operations">Operations</option>
                  <option value="Developers/Technicial Coordinators">
                    Developers/Technicial Coordinators
                  </option>
                  <option value="Campus Ambassador">Campus Ambassador</option>
                  <option value="Management">Management</option>
                  <option value="Volunteer">Volunteer</option>
                </select>
              </div>

              <button
                className="join-us-btn buttonc"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? (
                  <div class="loader-responsive" style={{ height: "25px" }} />
                ) : (
                  "SUBMIT"
                )}
              </button>
            </Form>
          </div>
        </div>
      </div>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for applying!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We appreciate your interest. We will get back to you soon.</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="joinusform-close-btn"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Form validation error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Please fill in all the required fields correctly before submitting
            the form.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="joinusform-close-btn"
            onClick={() => setShowErrorModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JoinUs;
