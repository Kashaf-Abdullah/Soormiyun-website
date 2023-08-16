
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
// import { firestore, app } from './components/auth'; // Adjust the import path
// import {
//   collection,
//   doc,
//   setDoc,
//   serverTimestamp,
// } from 'firebase/firestore'; // Import Firestore functions
// const CombineForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     age: '',
//     height: '',
//     caste: '',
//     motherName: '',
//     fatherName: '',
    
//     qualification: '',
//     job: '',
//     contact: '',
//     city: '',
//     gender: 'male',
//     country: '',
//     intro: '',    
//     imageUrl: '',
//   });

//   const [showModal, setShowModal] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit =async (event) => {
//     event.preventDefault();
//     const errors = {};

//     // Validate First Name
//     if (!formData.firstName.trim()) {
//       errors.firstName = 'First Name is required';
//     }

//     // Validate Last Name
//     if (!formData.lastName.trim()) {
//       errors.lastName = 'Last Name is required';
//     }

//     // Validate Email
//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
//       errors.email = 'Invalid email address';
//     }

//     // Validate Age
//     if (!formData.age.trim()) {
//       errors.age = 'Age is required';
//     } else if (isNaN(formData.age) || parseInt(formData.age) < 1) {
//       errors.age = 'Age must be a valid positive number';
//     }

//     // Validate Height
//     if (!formData.height.trim()) {
//       errors.height = 'Height is required';
//     }

//     // Validate Caste
//     if (!formData.caste.trim()) {
//       errors.caste = 'Caste is required';
//     }

//     // Validate Mother's Name
//     if (!formData.motherName.trim()) {
//       errors.motherName = "Mother's Name is required";
//     }

//     // Validate Father's Name
//     if (!formData.fatherName.trim()) {
//       errors.fatherName = "Father's Name is required";
//     }

    
//     // Validate Job
//     if (!formData.job.trim()) {
//       errors.job = "Job";
//     }

//     // Validate Qualification
//     if (!formData.qualification.trim()) {
//       errors.qualification = "Qualification";
//     }

//     // Validate Contact
//     if (!formData.contact.trim()) {
//       errors.contact = 'Contact is required';
//     }

//     // Validate City
//     if (!formData.city.trim()) {
//       errors.city = 'City is required';
//     }

//     // Validate Country
//     if (!formData.country.trim()) {
//       errors.country = 'Country is required';
//     }
    
//     // Validate intro
//     if (!formData.intro.trim()) {
//       errors.country = 'Intro is required';
//     }

//     // Validate Image URL
//     if (!formData.imageUrl.trim()) {
//       errors.imageUrl = 'Image URL is required';
//     } else if (!isValidUrl(formData.imageUrl)) {
//       errors.imageUrl = 'Invalid image URL';
//     }

//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       setShowModal(true);
//     } else {
//         try{
//       // console.log(formData);
//       // console.log(formData);
//       const code = new Date().getTime() + Math.floor(Math.random() * 10000);
//       const membersCollection = collection(firestore, 'Members'); // Reference the 'Members' collection
//       const newMemberDocRef = doc(membersCollection, `${formData.email}:${code}`); // Create a new document reference

//       await setDoc(newMemberDocRef, {
//         ...formData,
//         code,
//         createdAt: serverTimestamp(), // Use 'serverTimestamp' for timestamp
//       });
//     console.log('Data saved to Firestore:', formData);

//     // Clear the form fields after submission
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       age: '',
//       height: '',
//       caste: '',
//       motherName: '',
//       fatherName: '',
//       job: '',
//       qualification: '',
//       contact: '',
//       city: '',
//       gender: 'male',
//       country: '',
//       imageUrl: '',
//     });
// }catch(err){
//     console.log(err)
// }
//   }
    
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch (error) {
//       return false;
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4">Registration Form</h1>
//       <Form onSubmit={handleSubmit}>
//         <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
//           <Col md={6}>
//             <Form.Group controlId="firstName">
//               <Form.Label>First Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.firstName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.firstName}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="lastName">
//               <Form.Label>Last Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.lastName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.lastName}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
//           <Col md={6}>
//             <Form.Group controlId="email">
//               <Form.Label>Email:</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.email}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.email}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="age">
//               <Form.Label>Age:</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.age}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.age}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
//           <Col md={6}>
//             <Form.Group controlId="height">
//               <Form.Label>Height:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="height"
//                 value={formData.height}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.height}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.height}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="caste">
//               <Form.Label>Caste:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="caste"
//                 value={formData.caste}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.caste}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.caste}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
//           <Col md={6}>
//             <Form.Group controlId="motherName">
//               <Form.Label>Mother's Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="motherName"
//                 value={formData.motherName}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.motherName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.motherName}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="fatherName">
//               <Form.Label>Father's Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="fatherName"
//                 value={formData.fatherName}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.fatherName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.fatherName}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
//         <Col md={6}>
//           <Form.Group controlId="qualification">
//             <Form.Label>Qualification:</Form.Label>
//             <Form.Control
//               type="text"
//               name="qualification"
//               value={formData.qualification}
//               onChange={handleInputChange}
//               required
//               isInvalid={!!validationErrors.qualification}
//             />
//             <Form.Control.Feedback type="invalid">
//               {validationErrors.qualification}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group controlId="job">
//             <Form.Label>Job:</Form.Label>
//             <Form.Control
//               type="text"
//               name="job"
//               value={formData.job}
//               onChange={handleInputChange}
//               required
//               isInvalid={!!validationErrors.job}
//             />
//             <Form.Control.Feedback type="invalid">
//               {validationErrors.job}
//             </Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>
//         <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
//           <Col md={6}>
//             <Form.Group controlId="contact">
//               <Form.Label>Contact:</Form.Label>
//               <Form.Control
//                 type="tel"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.contact}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.contact}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="city">
//               <Form.Label>City:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.city}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.city}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row style={{marginTop:"2rem",marginBottom:"2rem",}}>
//           <Col md={6}>
//             <Form.Group controlId="country">
//               <Form.Label>Country:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.country}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.country}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="gender">
//               <Form.Label>Gender:</Form.Label>
//               <Form.Check
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 label="Male"
//                 checked={formData.gender === 'male'}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.gender}
//               />
//               <Form.Check
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 label="Female"
//                 checked={formData.gender === 'female'}
//                 onChange={handleInputChange}
//                 required
//                 isInvalid={!!validationErrors.gender}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {validationErrors.gender}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
        
//         <Form.Group controlId="intro">
//           <Form.Label>Introduction:</Form.Label>
//           <Form.Control
//             type="intro"
//             name="intro"
//             value={formData.intro}
//             onChange={handleInputChange}
//             required
//             isInvalid={!!validationErrors.intro}
//           />
//           <Form.Control.Feedback type="invalid">
//             {validationErrors.intro}
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group controlId="imageUrl">
//           <Form.Label>Image URL:</Form.Label>
//           <Form.Control
//             type="url"
//             name="imageUrl"
//             value={formData.imageUrl}
//             onChange={handleInputChange}
//             required
//             isInvalid={!!validationErrors.imageUrl}
//           />
//           <Form.Control.Feedback type="invalid">
//             {validationErrors.imageUrl}
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button style={{
//           marginTop:"12px",
//           backgroundColor:"#6D2E46",
//           border:"2px solid #6D2E46 "
//         }}  type="submit">
//           Submit
//         </Button>
//       </Form>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Validation Errors</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {Object.values(validationErrors).map((error, index) => (
//             <p key={index}>{error}</p>
//           ))}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary"  onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default CombineForm;


















import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { firestore, app } from './components/auth'; // Adjust the import path
import {
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore'; // Import Firestore functions
const CombineForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    height: '',
    caste: '',
    motherName: '',
    fatherName: '',
    qualification: '',
    job: '',
    contact: '',
    city: '',
    gender: 'male',
    country: '',
    intro: '',    
    imageUrl: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [modalFormData, setModalFormData] = useState({});
  
  const [modalData, setModalData] = useState({}); // Separate state for modal data
  const [showSubmittedModal, setShowSubmittedModal] = useState(false); // Control modal visibility

  const [validationErrors, setValidationErrors] = useState({});
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit =async (event) => {

    event.preventDefault();
    setModalData(formData); // Store the data for modal display
    setShowSubmittedModal(true);

    const errors = {};
    // event.preventDefault();



    // Validate First Name
    if (!formData.firstName.trim()) {
      errors.firstName = 'First Name is required';
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }

    // Validate Email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate Age
    if (!formData.age.trim()) {
      errors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) < 1) {
      errors.age = 'Age must be a valid positive number';
    }

    // Validate Height
    if (!formData.height.trim()) {
      errors.height = 'Height is required';
    }

    // Validate Caste
    if (!formData.caste.trim()) {
      errors.caste = 'Caste is required';
    }

    // Validate Mother's Name
    if (!formData.motherName.trim()) {
      errors.motherName = "Mother's Name is required";
    }

    // Validate Father's Name
    if (!formData.fatherName.trim()) {
      errors.fatherName = "Father's Name is required";
    }

    
    // Validate Job
    if (!formData.job.trim()) {
      errors.job = "Job";
    }

    // Validate Qualification
    if (!formData.qualification.trim()) {
      errors.qualification = "Qualification";
    }

    // Validate Contact
    if (!formData.contact.trim()) {
      errors.contact = 'Contact is required';
    }

    // Validate City
    if (!formData.city.trim()) {
      errors.city = 'City is required';
    }

    // Validate Country
    if (!formData.country.trim()) {
      errors.country = 'Country is required';
    }
    
    // Validate intro
    if (!formData.intro.trim()) {
      errors.country = 'Intro is required';
    }

    // Validate Image URL
    if (!formData.imageUrl.trim()) {
      errors.imageUrl = 'Image URL is required';
    } else if (!isValidUrl(formData.imageUrl)) {
      errors.imageUrl = 'Invalid image URL';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      
    } else {
        try{
      // console.log(formData);
      // console.log(formData);
      const code = new Date().getTime() + Math.floor(Math.random() * 10000);
      const membersCollection = collection(firestore, 'Members'); // Reference the 'Members' collection
      const newMemberDocRef = doc(membersCollection, `${formData.email}:${code}`); // Create a new document reference

      await setDoc(newMemberDocRef, {
        ...formData,
        code,
        createdAt: serverTimestamp(), // Use 'serverTimestamp' for timestamp
      });
    console.log('Data saved to Firestore:', formData);

    // Clear the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      height: '',
      caste: '',
      motherName: '',
      fatherName: '',
      job: '',
      qualification: '',
      contact: '',
      city: '',
      gender: 'male',
      country: '',
      imageUrl: '',
   
   
    });
  // Store submitted data
     
}catch(err){
    console.log(err)
}
  }
    
  };

 
  const handleCloseSubmittedModal = () => {
    setShowSubmittedModal(false); // Close the submitted modal
  };
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  const handleConfirmModal = async () => {
    setShowModal(false); // Close the modal

    // Store data in Firestore
    try {
      const code = new Date().getTime() + Math.floor(Math.random() * 10000);
      const membersCollection = collection(firestore, 'Members'); // Reference the 'Members' collection
      // const newMemberDocRef = doc(membersCollection, `${formData.email}:${code}`); // Create a new document reference
      const memberDocRef = doc(firestore, 'Members', `${formData.email}:${modalData.code}`);

      await setDoc(memberDocRef, {
        ...formData,
        updatedAt: serverTimestamp(), // Add an updatedAt timestamp
      });

      // Clear the form fields after submission
      setFormData({
        // Reset your form fields
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Form</h1>
      <Form onSubmit={handleSubmit} style={{marginLeft:"2rem",marginRight:"2rem"}}>
        <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="age">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.age}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.age}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
          <Col md={6}>
            <Form.Group controlId="height">
              <Form.Label>Height:</Form.Label>
              <Form.Control
                type="text"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.height}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.height}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="caste">
              <Form.Label>Caste:</Form.Label>
              <Form.Control
                type="text"
                name="caste"
                value={formData.caste}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.caste}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.caste}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
          <Col md={6}>
            <Form.Group controlId="motherName">
              <Form.Label>Mother's Name:</Form.Label>
              <Form.Control
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.motherName}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.motherName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="fatherName">
              <Form.Label>Father's Name:</Form.Label>
              <Form.Control
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.fatherName}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.fatherName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
        <Col md={6}>
          <Form.Group controlId="qualification">
            <Form.Label>Qualification:</Form.Label>
            <Form.Control
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              required
              isInvalid={!!validationErrors.qualification}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.qualification}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="job">
            <Form.Label>Job:</Form.Label>
            <Form.Control
              type="text"
              name="job"
              value={formData.job}
              onChange={handleInputChange}
              required
              isInvalid={!!validationErrors.job}
            />
            <Form.Control.Feedback type="invalid">
              {validationErrors.job}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
        <Row style={{marginTop:"1rem",marginBottom:"1rem",}}>
          <Col md={6}>
            <Form.Group controlId="contact">
              <Form.Label>Contact:</Form.Label>
              <Form.Control
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.contact}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.contact}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.city}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.city}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{marginTop:"2rem",marginBottom:"2rem",}}>
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country:</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.country}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.country}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="gender">
              <Form.Label>Gender:</Form.Label>
              <Form.Check
                type="radio"
                name="gender"
                value="male"
                label="Male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.gender}
              />
              <Form.Check
                type="radio"
                name="gender"
                value="female"
                label="Female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
                required
                isInvalid={!!validationErrors.gender}
              />
              <Form.Control.Feedback type="invalid">
                {validationErrors.gender}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group controlId="intro">
          <Form.Label>Introduction:</Form.Label>
          <Form.Control
            type="intro"
            name="intro"
            value={formData.intro}
            onChange={handleInputChange}
            required
            isInvalid={!!validationErrors.intro}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.intro}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="imageUrl">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
            isInvalid={!!validationErrors.imageUrl}
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.imageUrl}
          </Form.Control.Feedback>
        </Form.Group>
        <Button style={{
          marginTop:"12px",
          backgroundColor:"#6D2E46",
          border:"2px solid #6D2E46 "
        }}  
        type="submit">
          Submit
        </Button>
      </Form>
      <Modal 
      show={showSubmittedModal} onHide={handleCloseSubmittedModal}>
        <Modal.Header closeButton>
          <Modal.Title   style={{color:'#6D2E46',fontWeight:"bold"}}>Submitted Data</Modal.Title>
        </Modal.Header>
        <Modal.Body 
        style={{backgroundColor:'#6D2E46',color:'#fff'}}>
        <div className="row">
    {Object.keys(modalData).map((key, index) => (
      <div key={key} className="col-md-6">
        <strong>{key}:</strong>{" "}
        {key === "imageUrl" ? (
          <img src={modalData[key]} alt="User's Image" />
        ) : (
          modalData[key]
        )}
      </div>
    ))}
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          style={{
            marginTop:"12px",
            backgroundColor:"#6D2E46",
            border:"2px solid #6D2E46 "
          }}  onClick={handleCloseSubmittedModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {/* Your edit modal content */}
      </Modal>
    </div>
  );
};

export default CombineForm;