"use client";
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Reveal = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const mainControls = useAnimation()
    const slideConrols = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
            slideConrols.start("visible")
        }
    })
    return (
        <div className='relative w-full' ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }} initial='hidden' animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}>
                {children}
            </motion.div>
            {/* <motion.div variants={{
                visible: { left: '100%' },
                hidden: { left: 0 },

            }} initial='hidden' transition={{ duration: 0.5, ease: 'easeIn' }} style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: '#5640e7',
                zIndex: 20
            }} animate={slideConrols} /> */}
        </div>
    )
}

export default Reveal