"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { IoLogoJavascript, IoLogoPython, IoLogoReact, IoLogoNodejs } from "react-icons/io5"
import { FaPhp, FaLaravel, FaDatabase } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiExpress, SiNextdotjs, SiPostgresql, SiMysql, SiPrisma, SiSequelize } from "react-icons/si"
import ViewButton from './ViewButton'
import { TypeAnimation } from 'react-type-animation'

export const ExpSection = () => {
    return (
        <section id="exp" className='space-y-6'>
            <h2 className="text-3xl font-bold text-[#8bb2ff]">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-none bg-transparent text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Reactiva</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-[#b3e5fc] text-lg">Spearheaded the design and implementation of bespoke web applications tailored to meet the company&apos;s unique specifications, ensuring a seamless and functional user experience. Leveraged advanced proficiency in Python and SQL for robust data analysis, optimizing operations and informing strategic decisions through insightful data interpretation and management.</CardDescription>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export const AboutSection = () => {
    return (
        <section id='about' className='space-y-6 lg:px-44 lg:py-40 px-4 py-24'>
            <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8bb2ff] to-[#5640e7]'>
                Hey, I&apos;m Diego.
            </h1>
            <p className='text-3xl text-[#8bb2ff]'>Junior web developer</p>
            <Card className="bg-transparent border-none text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="">
                    <TypeAnimation
                        sequence={[
                            'I am a junior software developer passionate about programming and learning. I enjoy creating innovative and efficient solutions to problems faced by users and clients. I have experience in web development with HTML, CSS, JavaScript, PHP and frameworks like React, Next JS and Laravel. I have also worked with SQL and NoSQL databases, as well as version control tools like Git and GitHub. I consider myself a responsible, creative and proactive professional, always looking to improve my skills and knowledge.',
                            1000,
                        ]}
                        wrapper="p"
                        speed={80}
                        style={{ fontSize: '1.15rem', lineHeight: '1.75rem' }}
                        repeat={Infinity}
                        className="text-[#b3e5fc]"
                    />
                </CardContent>
            </Card>
        </section>
    )
}

export const ProjectSection = () => {
    return (
        <section id='projects' className='space-y-6'>
            <h2 className="text-3xl font-bold text-[#8bb2ff]">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    image="/shiny.png"
                    title="Shiny Desk"
                    description="A web application designed for dentists. It enables them to schedule appointments, manage patients, and use odontograms"
                    url="https://shinydesk.vercel.app/auth/login"
                />
                <ProjectCard
                    image="/genius.png"
                    title="AI SaaS"
                    description="Web application using Open Ai and Replicate API"
                    url="#"
                />
                <ProjectCard
                    image="/blog-app.png"
                    title="Blog"
                    description="Simple blog application with image upload"
                    url="#"
                />
            </div>
        </section>
    )
}

const ProjectCard = ({ image, title, description, url }) => (
    <Card className="bg-gradient-to-br from-[#1a237e] to-[#3949ab] text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
        <CardContent className="p-0">
            <div className="relative h-48 overflow-hidden">
                <Image src={image} alt={title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-300" />
            </div>
        </CardContent>
        <CardHeader>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardFooter className='flex flex-col items-start space-y-4'>
            <CardDescription className='text-[#b3e5fc] text-md'>{description}</CardDescription>
            <ViewButton name={title} url={url} />
        </CardFooter>
    </Card>
)

export const SkillSection = () => {
    return (
        <section id="skills" className='space-y-6 mt-4'>
            <h2 className="text-3xl font-bold text-[#8bb2ff]">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SkillCard
                    title="Programming Languages"
                    skills={[
                        { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-400' },
                        { name: 'PHP', icon: FaPhp, color: 'text-blue-400' },
                        { name: 'Python', icon: IoLogoPython, color: 'text-green-400' },
                        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
                    ]}
                />
                <SkillCard
                    title="Frameworks & Libraries"
                    skills={[
                        { name: 'React', icon: IoLogoReact, color: 'text-blue-500' },
                        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
                        { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
                        { name: 'Express', icon: SiExpress, color: 'text-green-500' },
                        { name: 'Node.js', icon: IoLogoNodejs, color: 'text-green-600' },
                        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
                    ]}
                />
                <SkillCard
                    title="Databases"
                    skills={[
                        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
                        { name: 'MySQL', icon: SiMysql, color: 'text-orange-500' },
                        { name: 'Prisma', icon: SiPrisma, color: 'text-teal-500' },
                        { name: 'Sequelize', icon: SiSequelize, color: 'text-blue-600' },
                    ]}
                />
            </div>
        </section>
    )
}

const SkillCard = ({ title, skills }) => (
    <Card className="border-none bg-transparent text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 group">
                        <skill.icon className={`w-12 h-12 ${skill.color} transition-transform duration-300 ease-in-out group-hover:scale-110`} />
                        <span className="text-sm font-medium text-center text-[#b3e5fc]">{skill.name}</span>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
)