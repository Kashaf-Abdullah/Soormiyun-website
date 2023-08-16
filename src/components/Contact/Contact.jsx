import React, { useEffect, useState } from "react";
import "./contact.css";
import contact from "../../img/contactus.svg";
import { app, firestore } from "../auth";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    where_heard: "",
    email: "",
    query: "",
  });

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [queryError, setQueryError] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
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
    if (isFormValid()) {
      try {
        setLoading(true);

        let uid = firestoreAutoId();
        const docRef = doc(
          collection(firestore, "Contact Form Responses"),
          formData.email + ":" + uid
        );
        await setDoc(docRef, {
          ...formData,
          timestamp: serverTimestamp(),
          status: "Unread",
          uid: uid,
        });
        console.log("Form data saved successfully. Document ID: ", docRef.id);
        // Reset the form after successful submission
        setFormData({
          name: "",
          phone: "",
          where_heard: "",
          email: "",
          query: "",
        });
        setShowSuccessModal(true);
      } catch (error) {
        console.error(
          "Error! Please double check the information provided.",
          error
        );
        setShowErrorModal(true);
      } finally {
        setLoading(false);
      }
    } else {
      setShowErrorModal(true);
    }
  };

  const isFormValid = () => {
    const { name, phone, email, query } = formData;
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^(\+|00)92\d{10}$|^\d{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else if (!nameRegex.test(name)) {
      setNameError("Invalid name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (phone.trim() === "") {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (query.trim() === "") {
      setQueryError("Query is required");
      isValid = false;
    } else {
      setQueryError("");
    }

    return isValid;
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="contact-Section" id="contact-section" data-aos="fade-up">
      <div className="contact container">
        <div className="left-contact" data-aos="fade-left">
          <div className="left-contactTxt">
            <span>Contact Us</span>
            <span>
            Soormiyun is a dynamic alliance focused on uplifting Sindhi women by providing them a platform to acquire knowledge and expertise, fostering connections and cooperation, advocating for their rights and interests, and actively engaging with communities to bring about positive societal change.   </span>
            <span/>
            <Form className="container contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {phoneError && <p className="error-message">{phoneError}</p>}
              </Form.Group>

              

              <Form.Group className="mb-3" controlId="email">
                <input
                  className="input-field"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="query">
                <textarea
                  className="input-field"
                  rows="5"
                  placeholder="Tell us your query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
                {queryError && <p className="error-message">{queryError}</p>}
              </Form.Group>

              <button className="contact-us-btn button-send" type="submit">
                {isLoading ? (
                  <div class="loader-responsive" style={{ height: "25px" }} />
                ) : (
                  "SEND"
                )}
              </button>
            </Form>
          </div>
        </div>
        <div className="right-contact">
          <img src={contact} alt="" />
        </div>
      </div>

      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Thank you for reaching out to us. Expect to hear from us soon!❤️
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="contactform-close-btn"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showErrorModal}
        onHide={() => setShowErrorModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Error! Please double check the information provided.</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="contactform-close-btn"
            onClick={() => setShowErrorModal(false)}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
