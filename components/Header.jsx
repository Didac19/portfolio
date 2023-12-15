"use client"
// import Link from 'next/link'
import { Link } from 'react-scroll';
import React, { useState } from 'react'
import Menu from './Menu'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const menuItems = [
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Projects',
        href: '#projects',
    },
    {
        name: 'Skills',
        href: '#skills',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
]
const Header = ({ name, lastName }) => {
    const [activeItem, setActiveItem] = useState('');

    return (
        <header className="flex h-20 w-full items-center px-4 md:px-12 justify-between z-10 backdrop-blur-md fixed">
            <div className="w-[150px]">
                <h1 className="text-xl font-bold">{name} {lastName}</h1>
            </div>
            <div className='lg:hidden'>
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent side='left' className="w-[60%] text-start text-[#5640e7]">
                        <SheetHeader>
                            <ul className='mt-4 flex flex-col'>
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.name.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setActiveItem(item.name)}
                                        className={`text-lg font-medium transition-colors px-4 py-2 hover:bg-[#dae8ff] rounded-md cursor-pointer${item.name === activeItem ? 'text-gray-500 bg-[#dae8ff] rounded-md' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))
                                }
                            </ul>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="lg:flex hidden">
                <nav
                    aria-label="Main"
                    data-orientation="horizontal"
                    dir="ltr"
                    className="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:flex"
                >
                    <div
                        data-orientation="horizontal"
                        className="group flex flex-1 list-none items-center justify-center space-x-1"
                        dir="ltr"
                    >
                        {/* {
                            menuItems.map((item, index) => (
                                <Link key={index} onClick={() => setActiveItem(item.name)} className={`text-lg font-medium transition-colors px-4 py-2 hover:bg-[#dae8ff] rounded-md${item.name === activeItem ? 'text-gray-500 bg-[#dae8ff] rounded-md' : ''}`} href={item.href}>

                                    {item.name}

                                </Link>
                            ))
                        } */}
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.name.toLowerCase()}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setActiveItem(item.name)}
                                className={`text-lg font-medium transition-colors px-4 py-2 hover:bg-[#dae8ff] rounded-md cursor-pointer${item.name === activeItem ? 'text-gray-500 bg-[#dae8ff] rounded-md' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header