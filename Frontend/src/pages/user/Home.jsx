import { Link } from 'react-router-dom'
import { MapPin, Search, ArrowRight, Loader2, Droplets, Truck, ShieldCheck, Clock, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MOCK_VENDORS } from '../../data/mockData'
import VendorCard from '../../components/user/VendorCard'
import { motion } from 'framer-motion'

export default function Home() {
    const [vendors, setVendors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate fetch delay to show off loading state or just transition
        setTimeout(() => {
            setVendors(MOCK_VENDORS)
            setLoading(false)
        }, 800)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <div className="flex flex-col min-h-[calc(100vh-64px)] pb-20 bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            x: [0, 100, 0],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px] opacity-20"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white drop-shadow-sm">
                            Pure Water. <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                                Instant Delivery.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light text-blue-100">
                            Connect with verified local vendors and get premium quality water delivered to your doorstep in minutes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full shadow-2xl max-w-xl mx-auto flex items-center"
                    >
                        <MapPin className="ml-4 text-cyan-300 w-6 h-6 animate-bounce" />
                        <input
                            type="text"
                            placeholder="Enter your location to find vendors..."
                            className="flex-grow p-4 bg-transparent outline-none text-white placeholder-blue-200/70 font-medium"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('vendors-grid').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-lg flex items-center hover:bg-blue-50 transition-colors"
                        >
                            Find Water <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Stats / Trust Section */}
            <section className="py-10 bg-white border-b border-slate-100 shadow-sm relative z-20 -mt-8 mx-4 md:mx-20 rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600 mb-1">10k+</h3>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Liters Delivered</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600 mb-1">500+</h3>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Happy Families</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600 mb-1">50+</h3>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Verified Vendors</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600 mb-1">15m</h3>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Avg Delivery Time</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Why Go-Neer?</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-4">Hydration made simple.</h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We don't just deliver water; we deliver peace of mind. Here is why thousands trust us every day.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Droplets, title: "100% Pure & Verified", desc: "Every vendor is vetted for quality compliance. We ensure you get only the safest mineral water." },
                        { icon: Clock, title: "Lighting Fast Delivery", desc: "Our local network ensures delivery within 30 minutes. No more waiting for your water." },
                        { icon: ShieldCheck, title: "Secure Payments", desc: "Pay via UPI, Cards, or Cash on Delivery. Your transactions are safe and transparent." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Vendors Section */}
            <section id="vendors-grid" className="py-20 bg-slate-100/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Vendors Near You</h2>
                            <p className="text-slate-500 mt-2">We found {vendors.length} vendors ready to serve you.</p>
                        </div>
                        <button className="hidden md:flex items-center text-blue-600 font-bold hover:underline mt-4 md:mt-0">
                            View All <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                        </div>
                    ) : vendors.length > 0 ? (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {vendors.map((vendor) => (
                                <motion.div key={vendor.id} variants={itemVariants}>
                                    <VendorCard vendor={vendor} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl text-slate-600 font-bold mb-2">No Vendors Found</h3>
                            <p className="text-slate-500">Try changing your location or check back later.</p>
                        </div>
                    )}

                    <button className="md:hidden w-full mt-8 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl shadow-sm">
                        View All Vendors
                    </button>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 container mx-auto px-4">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to quench your thirst?</h2>
                        <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Join thousands of happy customers and experience the easiest way to order water today.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <Link to="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all">
                                Get Started
                            </Link>
                            <button className="bg-blue-700/50 border border-blue-400 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center">
                                <Phone className="w-4 h-4 mr-2" /> Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
