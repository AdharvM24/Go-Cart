'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ product }) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

    // calculate the average rating of the product
    const rating = Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className='max-xl:mx-auto'
        >
            <Link href={`/product/${product.id}`} className='group'>
                <div className='bg-[#F5F5F5] h-40 sm:w-60 sm:h-68 rounded-2xl flex items-center justify-center overflow-hidden relative'>
                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className='w-full h-full flex items-center justify-center'
                    >
                        <Image width={500} height={500} className='max-h-30 sm:max-h-40 w-auto' src={product.images[0]} alt="" />
                    </motion.div>
                    <div className='absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                </div>
                <div className='flex justify-between gap-3 text-sm text-slate-800 pt-3 max-w-60 px-1'>
                    <div>
                        <p className='font-medium group-hover:text-green-600 transition-colors'>{product.name}</p>
                        <div className='flex gap-0.5 mt-1'>
                            {Array(5).fill('').map((_, index) => (
                                <StarIcon key={index} size={14} className='text-transparent' fill={rating >= index + 1 ? "#00C950" : "#D1D5DB"} />
                            ))}
                        </div>
                    </div>
                    <p className='font-semibold text-green-600'>{currency}{product.price}</p>
                </div>
            </Link>
        </motion.div>
    )
}

export default ProductCard