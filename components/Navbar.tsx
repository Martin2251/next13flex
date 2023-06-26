import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image src="/logo.svg"
                width={115}
                height={43}
                alt="Logo"/>
            </Link>
        </div>
        </nav>
  )
}

export default Navbar