import React, { useEffect, useState } from 'react';
import '../UserProfile/UserProfile.css';
import UserProfileimg from '../../views/UserProfile/userprofileimg.png';
import linkedinimg from '../../views/UserProfile/linkedinimg.png';
import githubimg from '../../views/UserProfile/githubimg.png';
import facebookimg from '../../views/UserProfile/facebook (1).png';
import Instagramimg from '../../views/UserProfile/instagram (2).png';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserProfilecards from '../../components/UserProfilecards/UserProfilecards';

function UserProfile() {
  const [appliedjobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedjobs'));
    setAppliedJobs(appliedJobs);
  }, []);

  const USER = JSON.parse(localStorage.getItem('LOGINUSER')) || {};
  const SOCIALMEDIA = JSON.parse(localStorage.getItem('SOCIALMEDIA')) || {
  };
  
  return (
    <div className='container'>
       <Sidebar/>
      <img src={UserProfileimg} className='img1' alt='User Profile' />
      <div className='socialmedia'>

       <a href={SOCIALMEDIA.linkedinurl || '#'} target='_blank' rel='noopener noreferrer'>
          <img src={linkedinimg} className='img0' alt='LinkedIn' /></a>
        

        <a href={SOCIALMEDIA.githuburl || ''} target='_blank' rel='noopener noreferrer'>
          <img src={githubimg} className='img2' alt='GitHub' /> </a>

        <a href={SOCIALMEDIA.facebookurl || '#'} target='_blank' rel='noopener noreferrer'>
          <img src={facebookimg} className='img3' alt='Facebook' /></a>
       
        <a href={SOCIALMEDIA.instaurl || '#'} target='_blank' rel='noopener noreferrer'>
          <img src={Instagramimg} className='img5' alt='Instagram' /></a>
     
       </div>
      <span className='username'><b>Hello {USER.username || 'User'}!👋</b></span> 
      <span className='useremail'>{USER.email || 'No email found'}</span>
      <span className='jobrole'><b>JOB ROLE: </b>{USER.jobRole || 'Not specified'}</span>
      <h4 className='head4'><b>Your Applied Jobs:</b></h4>
      
      <div className='job-container'>
      {appliedjobs.length > 0 ? (
        appliedjobs.map((appliedjob, index) => {
          const { title, description, company, salary_max, salary_min, location } = appliedjob;
          return  (
           <div>
           <UserProfilecards
           title={title}
           description={description}
           salary_max={salary_max}
           salary_min={salary_min}
           company={company}
           location={location}/>
           </div>
          );
        })
      ) : (
        <p>No jobs applied yet.</p>
      )}
      </div>
      <div className="verticalliness"></div>
      <div className='Show'></div>
    </div>
  );
}

export default UserProfile;
