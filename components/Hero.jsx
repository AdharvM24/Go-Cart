'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import { motion } from 'framer-motion'

const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

    return (
        <div className='mx-6 pt-24'>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'
            >
                <motion.div 
                    variants={itemVariants}
                    className='relative flex-1 flex flex-col bg-green-200 rounded-3xl xl:min-h-100 group overflow-hidden'
                >
                    <div className='p-5 sm:p-16 z-10'>
                        <motion.div 
                            variants={itemVariants}
                            className='inline-flex items-center gap-3 bg-green-300 text-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm'
                        >
                            <span className='bg-green-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs'>NEWS</span> Free Shipping on Orders Above $50! <ChevronRightIcon className='group-hover:ml-2 transition-all' size={16} />
                        </motion.div>
                        <motion.h2 
                            variants={itemVariants}
                            className='text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs  sm:max-w-md'
                        >
                            Gadgets you'll love. Prices you'll trust.
                        </motion.h2>
                        <motion.div 
                            variants={itemVariants}
                            className='text-slate-800 text-sm font-medium mt-4 sm:mt-8'
                        >
                            <p>Starts from</p>
                            <p className='text-3xl'>{currency}4.90</p>
                        </motion.div>
                        <motion.button 
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-slate-800 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12 mt-4 sm:mt-10 rounded-md hover:bg-slate-900 transition relative overflow-hidden group/btn'
                        >
                            <span className="relative z-10">LEARN MORE</span>
                            <motion.div 
                                className="absolute inset-0 bg-green-500"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ type: 'tween' }}
                            />
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm'
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Image src={assets.hero_model_img} alt="" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className='flex-1 flex items-center justify-between w-full bg-orange-200 rounded-3xl p-6 px-8 group cursor-pointer'
                    >
                        <div>
                            <p className='text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#FFAD51] bg-clip-text text-transparent max-w-40'>Best products</p>
                            <p className='flex items-center gap-1 mt-4'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35 group-hover:scale-110 transition-transform duration-500' src={assets.hero_product_img1} alt="" />
                    </motion.div>
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className='flex-1 flex items-center justify-between w-full bg-blue-200 rounded-3xl p-6 px-8 group cursor-pointer'
                    >
                        <div>
                            <p className='text-3xl font-medium bg-gradient-to-r from-slate-800 to-[#78B2FF] bg-clip-text text-transparent max-w-40'>20% discounts</p>
                            <p className='flex items-center gap-1 mt-4'>View more <ArrowRightIcon className='group-hover:ml-2 transition-all' size={18} /> </p>
                        </div>
                        <Image className='w-35 group-hover:scale-110 transition-transform duration-500' src={assets.hero_product_img2} alt="" />
                    </motion.div>
                </div>
            </motion.div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero
