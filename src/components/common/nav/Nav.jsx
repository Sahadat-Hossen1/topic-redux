import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <>
        <nav className=" flex justify-center items-center uppercase font-bold p-4 bg-gray-200 mb-4">
            {/* Navigation items go here */}
            <ul className="flex gap-4">
                <li className='hover:text-amber-100'><NavLink to='/counter' className={({isActive})=> isActive ? 'text-amber-100' : ''}>
                    counter
                    </NavLink></li>
                <li className='hover:text-amber-100'><NavLink to='/tasks' className={({isActive})=> isActive ? 'text-amber-100' : ''}>
                    tasks
                    </NavLink></li>
                <li className='hover:text-amber-100'><NavLink to='/employees' className={({isActive})=> isActive ? 'text-amber-100' : ''}>
                    employees
                    </NavLink></li>
                <li className='hover:text-amber-100'><NavLink to='/add-employees' className={({isActive})=> isActive ? 'text-amber-100' : ''}>
                    AddEmployees
                    </NavLink></li>
            </ul>
        </nav>
    </>
  )
}
