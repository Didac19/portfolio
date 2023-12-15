import Link from 'next/link'
import React from 'react'
import { CiMail } from "react-icons/ci";
const Footer = () => {
    return (
        <footer className="w-full py-52" id='contact'>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="mb-6 md:mb-0 text-center text-xl">
                        <h3 className="text-5xl font-bold mb-2">Contact Me</h3>
                        <div className='flex justify-between items-center gap-3'>
                            <CiMail className='text-4xl' />
                            <Link className="text-gray-500 hover:text-[#5640e7]" href='mailto:diegocastrog19@gmail.com'> diegocastrog19@gmail.com</Link>
                        </div>
                        <p className="text-gray-500">Colombia</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer