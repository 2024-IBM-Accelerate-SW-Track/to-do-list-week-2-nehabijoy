import React, { Component } from 'react';

import "./About.css";

import profileImage from "../assets/profile_pic_name.jpg";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
              className="profile_image"
            
              src = {profileImage}
              alt="Profile Pic"
              ></img>
            </div>
            </div>
             <div className="split right"> 
              <div className="centered">
              <div className="name_title">Neha Bijoy</div>
              <div className="brief_description">
              Hi! I'm Neha and I'm a rising Junior at Virginia Tech. I'm majoring in Computer Science and minoring in Human Computer Interaction. 
              I'm super excited to be a part of IBM's Accelerate, I can't wait to meet new friends and grow both professionally and technically.
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}