'use client'
import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'

const Newsletter = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className='flex flex-col items-center mx-4 my-36'
        >
            <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200 focus-within:ring-green-400 transition-all shadow-lg hover:shadow-xl'
            >
                <input className='flex-1 pl-5 outline-none bg-transparent' type="text" placeholder='Enter your email address' />
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='font-medium bg-green-500 text-white px-7 py-3 rounded-full shadow-md hover:bg-green-600 transition'
                >
                    Get Updates
                </motion.button>
            </motion.div>
        </motion.div>
    )
}

export default Newsletter