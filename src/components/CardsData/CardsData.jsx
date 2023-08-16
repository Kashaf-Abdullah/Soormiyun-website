// import React,{useState,useEffect} from 'react';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
// import firebase from '../../config/firebase.js';
// import './CardsData.css'
// const CardsData = () => {
//     const [blogs,setBlogs]=useState([])
//     useEffect(() => {
//         fetchBlogs();
//       }, []);
//       const fetchBlogs = async () => {
//         const db = getFirestore(firebase);
//         const querySnapshot = await getDocs(collection(db, 'multiFormData'));
    
//         const blogsData = [];
//         querySnapshot.forEach((doc) => {
//             blogsData.push(doc.data());
//         });
    
//         setBlogs(blogsData);
//     }
//     return (
//     <div>
//     <div class="container">
//     <div class="row">
//     {
//       blogs && blogs.map(blog=>{
//         return(
          
// <div className='col-3 mt-5 mb-6'>
//              <div class="card p-2">
//              <div className='card-profile-intro'>
//              <div className='card-profile-img'>
//              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jRXkbXW1h1l_a0qcDzuMfa4yRs1coU5Bxg&usqp=CAU" class="card-img-top" alt="..."/>
// </div>
         
//              <div className='card-profile-name'>
//              <span>   <h6><strong>CODE</strong></h6></span>  
//              <span>Status:{blog.martial_status}</span>
//                <span>Age:{blog.age}</span>
//                 </div> 

//              </div>


//              <div class="card-body">

//                <div className='card-profile'>
//                <span>Status:{blog.martial_status}</span>
//                <span>Age:{blog.age}</span>
//                 </div> 

//                <div className='card-profile'>
//                <span>City:{blog.city}</span>
//                <span>job:{blog.job}</span>
//                </div>

//                <div className='card-profile'>
//                <span>Country:{blog.location}</span>
//                <span>Caste:{blog.cast}</span>
//                </div>
//                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//              </div>
//            </div>
//            </div>
          
//         )
//       })
//     }

       
     
       
//     </div>
// </div>
//     </div>
//   )
// }

// export default CardsData




import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../auth'; // Adjust the import path
import './CardsData.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const CardsData = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, 'Members'));

    const blogsData = [];
    querySnapshot.forEach((doc) => {
      blogsData.push(doc.data());
    });

    setBlogs(blogsData);
  };

  return (
    <div>
    <Tabs
      defaultActiveKey="all"
      id="uncontrolled-tab-example"
      className="tabs-main mb-1"
    >
    <Tab eventKey="female" title="Female">
    <div className="container">
      <div className="row">
        {blogs.map((blog, index) => (
          blog.gender === "female" && (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mb-4" key={index}>
              <div className="card p-2">
                <div className="card-profile-intro">
                  <div className="card-profile-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmhmUw9DYmhTVjpCfeQ56xpQew0LAycjDDka6-7ZQHw&s"
                      className="card-img-top"
                      alt="Female Image"
                    />
                  </div>
  
                  <div className="card-profile-name">
                    <h6>
                      <strong>XYZ.. {blog.lastName}</strong>
                    </h6>
                    <span>Code: {blog.code}</span>
                    <span>Age: {blog.age}</span>
                  </div>
                </div>
  
                <div className="card-body">
                  <div className="card-profile">
                    <span>Status: {blog.martial_status}</span>
                    <span>Age: {blog.age}</span>
                  </div>
  
                  <div className="card-profile">
                    <span>Qualifications: {blog.qualification}</span>
                    <span>Job: {blog.job}</span>
                  </div>
  
                  <div className="card-profile">
                    <span>City: {blog.city}</span>
                    <span>Caste: {blog.caste}</span>
                  </div>
  
                  <div className="card-profile">
                    <span>Country: {blog.country}</span>
                    <span>Gender: {blog.gender}</span>
                  </div>
  
                  <p className="card-text">{blog.intro}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  </Tab> 
       <Tab eventKey="male" title="Male">
     
  <div className="container">
  <div className="row">
    {blogs.map((blog, index) => (
      blog.gender === "male" && (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mb-4" key={index}>
    
        <div className="card p-2">
            <div className="card-profile-intro">
              <div className="card-profile-img">
                <img
                  src="data:image/png;base64,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"
                  className="card-img-top"
                  alt="Female Image"
                />
              </div>

              <div className="card-profile-name">
                <h6>
                  <strong>XYZ.. {blog.lastName}</strong>
                </h6>
                <span>Code: {blog.code}</span>
                <span>Age: {blog.age}</span>
              </div>
            </div>

            <div className="card-body">
              <div className="card-profile">
                <span>Status: {blog.martial_status}</span>
                <span>Age: {blog.age}</span>
              </div>

              <div className="card-profile">
                <span>Qualifications: {blog.qualification}</span>
                <span>Job: {blog.job}</span>
              </div>

              <div className="card-profile">
                <span>City: {blog.city}</span>
                <span>Caste: {blog.caste}</span>
              </div>

              <div className="card-profile">
                <span>Country: {blog.country}</span>
                <span>Gender: {blog.gender}</span>
              </div>

              <p className="card-text">{blog.intro}</p>
            </div>
          </div>
        </div>
      )
    ))}
  </div>
</div>
      </Tab>
      <Tab eventKey="all" title="All">
      <div className="container">
        <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mb-4" key={index}>
    
            <div className="card p-2">
                <div className="card-profile-intro">
                <div className="card-profile-img">
                {blog.gender === "female" ? (
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmhmUw9DYmhTVjpCfeQ56xpQew0LAycjDDka6-7ZQHw&s'
                         className="card-img-top"
                    alt="Female Image"
                  />
                ) : (
                  <img
                    src='data:image/png;base64,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'
                    className="card-img-top"
                    alt="Male Image"
                  />
                )}
              </div>
        
              
              
              
              

                  <div className="card-profile-name">
                    <h6>
                      <strong>
                       XYZ.. {blog.lastName}
                      </strong>
                    </h6>
                    <span>Code: {blog.code}</span>
                    <span>Age: {blog.age}</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-profile">
                    <span>Status: {blog.martial_status}</span>
                    <span>Age: {blog.age}</span>
                  </div>

                  <div className="card-profile">
                    <span>Qualifications: {blog.qualification}</span>
                    <span>Job: {blog.job}</span>
                  </div>

                  <div className="card-profile">
                    <span>City: {blog.city}</span>
                    <span>Caste: {blog.caste}</span>
                  </div>
                  
                  <div className="card-profile">
                    <span>Country: {blog.country}</span>
                    <span>Gender: {blog.gender}</span>
                  </div>

                  <p className="card-text">
                    {blog.intro}
                  </p>
                </div>
              </div>
         
             
            </div>
          ))}
        </div>
      </div>
      </Tab>
     
    </Tabs>
    
    </div>
  );
};

export default CardsData;