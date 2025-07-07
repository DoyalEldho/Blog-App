'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname();
    const isApiRoute = pathname.startsWith('/pages');

  return (
    <div>
        <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>

      {isApiRoute && (
       <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
      </div>
      )}
   
    </nav>
    </div>
  )
}

export default Navbar
