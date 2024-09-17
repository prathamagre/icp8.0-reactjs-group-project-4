import React, { useEffect, useState } from 'react'
import '../UserProfile/UserProfile.css'
import UserProfileimg from '../../views/UserProfile/userprofileimg.png'
import linkedinimg from '../../views/UserProfile/linkedinimg.png'
import githubimg from '../../views/UserProfile/githubimg.png'
import facebookimg from '../../views/UserProfile/facebook (1).png'
import wave from '../../views/UserProfile/wave.png'
import Sidebar from '../../components/Sidebar/Sidebar'


function UserProfile() {
 const [appliedjobs,setappliedjobs] = useState([]);
 useEffect(()=>{
  const appliedjobs=JSON.parse(localStorage.getItem("appliedjobs"))|| [];
  setappliedjobs(appliedjobs);
 }, []);
 
 /*const[user,setuserdetails] = useState([])
useEffect(()=>{
  const userDetails=JSON.parse(localStorage.getItem("LOGINUSER"))||[];
  setuserdetails(userDetails);
},[])*/

const USER=JSON.parse(localStorage.getItem("LOGINUSER"))||[];

  return (
    
    <div className='container'>
        <img src={UserProfileimg} className='img1'/>
        <h4 className='head4'>Your Applied Jobs:</h4>
        <span className='userdetails'>
        <div className='username'><b>Hello {USER.username}!</b></div>
        <div className='useremail'>{USER.email}</div>
        <div className='jobrole'><b>JOB ROLE : </b>{USER.jobRole}</div>
        </span>
        
       {
        appliedjobs.map((appliedjob)=>{
          const{title,description,company,salary_max,salary_min,location}=appliedjob;
             return(
              
              <div className='jobs'> 
              <span className='titles'><b>Title :</b>  </span>{title}
               <br></br>
               <br></br>
               <span className='jobdetails'>Job Description : </span><span className='description'>{description}</span>
               <br></br>
               <br></br>
               <span className='company'><b>Company name :</b> </span>{company.dispay_name}
               <br></br>
               <br></br>
               <span className='salary'><b>Maximum Salary : </b></span>{salary_max}
               <br></br>
               <br></br>
               <span className='salary'><b>Minimum Salary : </b></span>{salary_min}
               <br></br>
               <br></br>
               <span className='salary'><b>Location : </b></span>{location.display_name}
              </div>
             )
})
}


        <Sidebar/>
      

<div className="verticalline"></div>
<div className='Show'></div>
</div>
)
}


export default UserProfile