import React from 'react'

const SkillCard = ({
    title,
    skills
}) => {
    return (
        <div className="border text-card-foreground bg-white rounded-lg overflow-hidden shadow-lg" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-bold">{title}</h3>
            </div>
            <div className="p-4">
                <p className="mt-4 text-gray-500">{skills}</p>
            </div>
        </div>
    )
}

export default SkillCard