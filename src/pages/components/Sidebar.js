import Image from 'next/image'
import React from 'react'
import {RiKeyboardFill } from 'react-icons/ri'
import {CgNotes} from 'react-icons/cg'
import {BiSearch, BiMapAlt} from 'react-icons/bi'

const Navbar = () => {
  return (
    <section id="sidebar">
        <section id="title-container" className="text-3xl text-gray-500">
          BAT DASH
        </section>
        <section id="links-container">
          <div id="links" >
            <div id="icon" className='cursor-pointer'>
              <RiKeyboardFill />
            </div>
            <span id="link-span" className='cursor-pointer'>Dashboard</span>
          </div>
        </section>

        <section id="links-container">
          <div id="links" >
            <div id="icon" className='cursor-pointer'>
              <CgNotes />
            </div>
            <span id="link-span" className='cursor-pointer'>Logs</span>
          </div>
        </section>

        <section id="links-container">
          <div id="links" >
            <div id="icon" className='cursor-pointer'>
              <BiMapAlt />
            </div>
            <span id="link-span" className='cursor-pointer'>Map</span>
          </div>
        </section>
      </section>
  )
}

export default Navbar