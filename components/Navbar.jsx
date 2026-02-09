'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const cartCount = useSelector(state => state.cart.total);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/shop?search=${search}`);
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism py-2 shadow-sm' : 'bg-white py-4'}`}>
            <div className="mx-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto transition-all">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="relative text-4xl font-semibold text-slate-700">
                            <span className="text-green-600">go</span>cart<span className="text-green-600 text-5xl leading-0">.</span>
                            <motion.p 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                                className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-green-500"
                            >
                                plus
                            </motion.p>
                        </Link>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex items-center gap-4 lg:gap-8 text-slate-600">
                        {['Home', 'Shop', 'About', 'Contact'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link 
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                                    className="hover:text-green-600 transition-colors relative group"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}

                        <motion.form 
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            onSubmit={handleSearch} 
                            className="hidden xl:flex items-center w-xs text-sm gap-2 bg-slate-100 px-4 py-3 rounded-full focus-within:ring-2 focus-within:ring-green-400 transition-all"
                        >
                            <Search size={18} className="text-slate-600" />
                            <input 
                                className="w-full bg-transparent outline-none placeholder-slate-600" 
                                type="text" 
                                placeholder="Search products" 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                                required 
                            />
                        </motion.form>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            <Link href="/cart" className="relative flex items-center gap-2 text-slate-600 hover:text-green-600 transition-colors">
                                <ShoppingCart size={18} />
                                Cart
                                <AnimatePresence>
                                    {cartCount > 0 && (
                                        <motion.button 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute -top-1 left-3 text-[8px] text-white bg-green-600 size-3.5 rounded-full"
                                        >
                                            {cartCount}
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </Link>
                        </motion.div>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition shadow-md hover:shadow-lg text-white rounded-full"
                        >
                            Login
                        </motion.button>
                    </div>

                    {/* Mobile User Button  */}
                    <div className="sm:hidden">
                        <motion.button 
                            whileTap={{ scale: 0.9 }}
                            className="px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full"
                        >
                            Login
                        </motion.button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
