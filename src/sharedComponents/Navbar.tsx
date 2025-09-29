import React from 'react'
import { Button } from '../components/ui/button'
import Image from 'next/image'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <div>
      <div>
        <Image
        src={logo}
        alt='logo'
        width={150}
        height={150}
        />
      </div>
    </div>
  )
}
