import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
import { firestore, app } from '../auth'; // Adjust the import path
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'; // Import Firestore functions
import './Subscription.css';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [showSubmittedModal, setShowSubmittedModal] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setValidationError('Email is required');
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setValidationError('Invalid email address');
      return;
    }

    try {
      const membersCollection = collection(firestore, 'Subscription');
      const newMemberDocRef = doc(membersCollection, email);

      await setDoc(newMemberDocRef, {
        email: email,
        createdAt: serverTimestamp(),
      });

      setShowSubmittedModal(true);
      setValidationError('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseSubmittedModal = () => {
    setShowSubmittedModal(false);
  };

  return (
    <div className='subscription-container'>
    <div className="container mt-5  subscription">
      <h1 className="mb-4 text-center"><strong>
      Sign up for our newsletter</strong></h1>
      <Form onSubmit={handleSubmit}>
        <div className='subs-container'>
          <div className='email-subs'>
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                isInvalid={!!validationError}
              />

              <Form.Control.Feedback type="invalid">
                {validationError}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className='button-subs'>
            <Button
              style={{
                backgroundColor: '#6D2E46',
                border: '2px solid #6D2E46',
              }}
              type="submit"
            >Subscribe
            </Button>
          </div>
        </div>
      </Form>

      <Modal show={showSubmittedModal} onHide={handleCloseSubmittedModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: '#6D2E46', fontWeight: 'bold' }}>
            Subscription Successful
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for subscribing! You will receive our newsletter soon.
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: '#A26769',
              border: '2px solid #A26769',
            }}
            onClick={handleCloseSubmittedModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default Subscription;
