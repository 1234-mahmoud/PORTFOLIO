import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si"; 
import '../style/Contact.css'
export default function Contact() {
  return (
    <div className="contact navlink" id="contact">
   <h1>Contact Me</h1>
    <div className='contact_links'> 
      <div className="icon">
        <a target="blank_" href="https://github.com/1234-mahmoud">
        <BsGithub />
        </a>
      </div>
      <div className="icon">
        <a target="blank_" href="https://www.linkedin.com/in/mahmoud-elbalhi/">
        <GrLinkedinOption />
        </a>
      </div>
      <div className="icon">
        <a target="blank_" href="https://wa.me/+201064218085">
        <BsWhatsapp />
        </a>
      </div>
      <div className="icon">
        <a target="blank_" href="mailto:mahmoud01234elbalhi@gmail.com?subject=Hello&body=I%20wanted%20to%20get%20in%20touch%20with%20you.">
       <SiGmail />
        </a>
      </div>
    </div>
  </div>
  )
}
