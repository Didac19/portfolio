import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ name, imageUrl, description }) => {
    return (
        <div className="border text-card-foreground bg-white rounded-lg overflow-hidden shadow-lg" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-bold">{name}</h3>
            </div>
            <div className="p-4">
                <Image
                    src={imageUrl}
                    alt="Project 1"
                    className="w-full h-[200px] object-cover"
                    width="400"
                    height="200"
                // style="aspect-ratio:400/200;object-fit:cover"
                />
                <p className="mt-4 text-gray-500">{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard