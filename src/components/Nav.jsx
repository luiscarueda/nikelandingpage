import React from 'react'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className  = 'padding-x py-8 w-full absolute z-10'>
        <nav>
            <a href="/">
                <img src={headerLogo} alt="Logo" 
                width={130}
                height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((item)=>(
                <li key={item.label}>
                  <a href={item.href}
                  className='font-monserrat leading-normal text-lg text-slate-gray'
                  >
                  {item.label}
                  </a>
                </li>
              ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav