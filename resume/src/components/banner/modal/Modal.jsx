import React from 'react'
import './modal.css'
const Modal = ({setOpenModal}) => {
  return (
    <div className='modal'>
      <div className="head">
        <h2>Conatct Details</h2>
      <button className="close" onClick={()=>setOpenModal(false)}>X</button>
      </div>
      <div className="modal-content">
        <div className="modal-left">
        <div className="modal-data">
          <span><i class="ri-phone-line"></i>:</span>
          <p>+91 9198452018</p>
        </div>
        <div className="modal-data">
          <span><i class="ri-mail-line"></i>:</span>
          <p>shivamup4545@gmail.com</p>
        </div>
        <div className="modal-data">
          <span><i class="ri-map-pin-line"></i>:</span>
          <p>Hinjewadi, Pune, India, 411057  </p>
        </div>
        <div className="modal-data">
          <span><i class="ri-map-pin-user-line"></i>:</span>
          <p>Sultanpur karaudia niralangr, Sultanpur, India , 228101</p>
        </div>
        </div>
        <div className="modal-right">
        <div className="modal-data">
          <span><i class="ri-github-fill"></i>:</span>
          <a href='https://github.com/Shivamup99?tab=repositories' target='_blank'>github.com/Shivamup99</a>
        </div>
        <div className="modal-data">
          <span><i class="ri-linkedin-box-fill"></i>:</span>
          <a href='https://www.linkedin.com/in/shivamup' target='_blank'>linkdin.com/shivamup</a>
        </div>
        <div className="modal-data">
          <span><i class="ri-instagram-line"></i>:</span>
          <a href='https://instagram.com/whoshivam45' target='_blank'>instagram.com/whoshivam45 </a>
        </div>
        <div className="modal-data">
          <span><i class="ri-double-quotes-l"></i>:</span>
          <a href='https://www.quora.com/profile/Shivam-Upadhyay-238'>www.quora.com/profile/Shivam</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Modal