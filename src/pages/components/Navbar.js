import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logo.svg'
const Navbar = () => {
  return (
    <Image
    className=''
    height='175px'
    width='175px'
    src={Logo}
    alt=''
    />
  )
}

export default Navbar