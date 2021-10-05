import React from 'react';
import {NavLink} from 'react-router-dom';
import aboutImg from '../../images/about.jpeg';

const About = () => {


 return (
  <div>
   <div className='container'>
    <h1>About <strong className='pulse'>who we are...</strong></h1>
     <div className='row justify-content-center align-items-center'>
      <div className='col-lg-5 col-md-6 order-1 order-md-2 mt-2'>
       <img src={aboutImg} className='img-fluid' alt=''/>
      </div>
      <div className='col-lg-5 col-md-6 order-2 order-md-1 mt-2'>
       <h4>Gym and Fitness was founded in 2002 as a family owned and operated business. The Gym and Fitness founders didn’t want it to be just another gym equipment retailer - they wanted to be the best in the industry and set their minds to doing so! Since its birth, Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers having helped over 50,000 customers live longer, happier and healthier lives</h4>
      </div>
      <div className='col-lg-10 order-3'>
       <NavLink className='btn btn-secondary fs-3 px-4 py-2 my-3' to='/contact'>Contact Us</NavLink>
      </div>
     </div>
    </div>
  </div>
 )

}
export default About;