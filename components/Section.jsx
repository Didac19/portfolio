import exp from 'constants'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp, FaPython } from "react-icons/fa";
import ViewButton from './ViewButton'
export const ExpSection = () => {
    return (
        <section id="exp" className='mb-4 py-8'>
            <h2 className="text-2xl font-bold mt-12 mb-6">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd] p-4">
                    <CardHeader>
                        <CardTitle>Reactiva</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-[#d7d9fd]">6 months working as a web developer</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
export const AboutSection = () => {
    return (
        <section id='about' className='lg:px-60 lg:py-40 px-12 py-24'>
            <h1 className='text-4xl'>
                Hey, I&apos;m Diego. <span className='text-[#8bb2ff]'>Junior web developer</span>
            </h1>
            <p className='text-xl mt-4'>
                I am a junior software developer passionate about programming and learning. I enjoy creating innovative and efficient solutions to problems faced by users and clients. I have experience in web development with HTML, CSS, JavaScript, PHP and frameworks like React, Next JS and Laravel. I have also worked with SQL and NoSQL databases, as well as version control tools like Git and GitHub. I consider myself a responsible, creative and proactive professional, always looking to improve my skills and knowledge.
            </p>
        </section>
    )
}
export const ProjectSection = () => {
    return <section id='projects' className='py-8'>
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd]">
                <CardContent className="backdrop-blur-md m-4">
                    <Image src="/shiny.png" alt='' width={500} height={500} className='w-full hover:scale-110 transition-transform rounded-md' />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl text-start">Shiny Desk</CardTitle>
                </CardHeader>
                <CardFooter className='flex flex-col items-start'>
                    <CardDescription className='mb-2 text-[#d7d9fd] text-md'>A web application designed for dentists. It enables them to schedule appointments, manage patients, and use odontograms</CardDescription>
                    <ViewButton name="ShinyDesk" url="https://shinydesk.vercel.app/auth/login" />
                </CardFooter>
            </Card>
            <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd]">
                <CardContent className="backdrop-blur-md m-4">
                    <Image src="/genius.png" alt='' width={500} height={500} className='w-full hover:scale-110 transition-transform rounded-md' />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl text-start">AI SaaS</CardTitle>
                </CardHeader>
                <CardFooter className='flex flex-col items-start'>
                    <CardDescription className='mb-2 text-[#d7d9fd] text-md'>Web application using Open Ai and Replicate API</CardDescription>
                    <ViewButton name="AI SaaS" url="#" />
                </CardFooter>
            </Card>
            <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd]">
                <CardContent className="backdrop-blur-md m-4">
                    <Image src="/blog-app.png" alt='' width={500} height={500} className='w-full hover:scale-110 transition-transform rounded-md' />
                </CardContent>
                <CardHeader>
                    <CardTitle className="text-2xl text-start">Blog</CardTitle>
                </CardHeader>
                <CardFooter className='flex flex-col items-start'>
                    <CardDescription className='mb-2 text-[#d7d9fd] text-md'>Simple blog applicatioon with image upload</CardDescription>
                    <ViewButton name="Blog" url="#" />
                </CardFooter>
            </Card>
        </div>
    </section>
}
export const SkillSection = () => {
    return <section id="skills" className='py-8'>
        <h2 className="text-2xl font-bold mt-12 mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <SkillCard title="Programming Languages" description='' /> */}
            <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd]">
                <CardHeader>
                    <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid grid-cols-3 gap-3'>
                        <IoLogoJavascript className='w-full h-full' />
                        <FaPhp className='w-full h-full' />
                        <FaPython className='w-full h-full' />
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd]">
                <CardHeader>
                    <CardTitle>Frameworks & libraries</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2">
                    <ul className='list-none'>
                        <li>Next JS</li>
                        <li>Laravel</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Node JS</li>
                        <li>Tailwind CSS</li>
                        <li>Typescript</li>
                    </ul>
                    <ul>
                        <p className='text-[#5640e7]'>Other skills</p>
                        <li>Cloudinary</li>
                        <li>Resend</li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-b from-[#b7b9fb] to-[#5640e7] text-[#d7d9fd]">
                <CardHeader>
                    <CardTitle>Databases</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='list-none'>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Prisma</li>
                        <li>Sequelize</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    </section>
}

