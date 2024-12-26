import React from 'react'

export default function Footer() {
    return (
      <div className="w-full bg-primary h-[30rem] text-white flex mt-24">
        {/* Kontainer Kiri */}
        <div className="flex flex-col py-14 px-32 w-[44rem]">
          <img src="logo.png" alt="" className="w-32" />
          <p className="text-justify">
            Soillessmart is a website where you can buy courses that have been made by hydroponic farmers. With the community feature, 
            it will help you solve problems that you will encounter when farming hydroponics.
          </p>
          <p className="pt-52">Copyright © Soillessmart 2024.</p>
          <p>All Rights reserved.</p>
        </div>
  
        {/* Kontainer Kanan */}
        <div className="flex flex-col py-20 px-60">
          <h3 className='text-lg pb-4 font-bold'>Our Contacts</h3>
          <p>+62 1234 5678<br/>soillessmart@gmail.com</p>
          <h3 className='text-lg pt-10 pb-4 font-bold'>Location</h3>
          <p>23187, East Jakarta<br/>Myasnitskaya 22/2/5, Office 4</p>
        </div>
      </div>
    )
  }  