import React from 'react'
import BannerImage from '../assets/banner.jpg'
import '../styles/Contact.css'


function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}>
      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' placeholder='lütfen adınızı soyadınızı giriniz...'/>
          <label>Email Giriniz</label>
          <input type='email' placeholder='lütfen emalinizi giriniz...'/>
          <label>Mesajınız</label>
          <textarea placeholder='lütfen mesajınızı giriniz...' rows={6}></textarea>
          <button>Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact