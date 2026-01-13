import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { Mail, Lock, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Login() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const { user, error } = await login(formData.email.trim(), formData.password)

            if (error) throw error

            toast.success('Welcome back!')

            // Redirect based on role
            // We need to fetch role from the profile which is now in context, 
            // but login returns user object. We can check user.role directly in mock data for simplicity
            // or rely on context update. 
            // Since context updates might be async, we'll check the returned user object.

            if (user.role === 'vendor') {
                navigate('/vendor/dashboard')
            } else if (user.role === 'admin') {
                navigate('/admin/dashboard')
            } else {
                navigate('/')
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex bg-slate-50 min-h-[calc(100vh-64px)] overflow-hidden">
            {/* --- Left Side (Visuals) --- */}
            <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden bg-slate-900">
                <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
                >
                <img
                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1976&auto=format&fit=crop"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    alt="Water Background"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 via-indigo-900/40 to-slate-900/10" />
                </motion.div>

                <div className="relative z-10 flex flex-col justify-center p-16 text-white w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                    Empower Your <br />
                    <span className="text-blue-400">Business Journey</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-md leading-relaxed">
                    Join Go-Neer to seamlessly connect, trade, and grow.
                    The future of local commerce starts here.
                    </p>
                </motion.div>

                <div className="mt-12 flex items-center gap-4">
                    <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        className="w-10 h-10 rounded-full border-2 border-slate-900"
                        alt="User"
                        />
                    ))}
                    </div>
                    <p className="text-sm font-medium text-slate-300">
                    Trusted by 10,000+ users
                    </p>
                </div>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-[55%] flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
                <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-lg space-y-8"
                >
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
                        <p className="text-slate-500 mt-2">Log in to your account to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="user@test.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-slate-700">Password</label>
                                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    placeholder="password123"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Create an account</Link>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg text-xs text-yellow-800 border border-yellow-200">
                        <p className="font-bold mb-1">Demo Credentials:</p>
                        <p>User: user@test.com / password123</p>
                        <p>Vendor: vendor@test.com / password123</p>
                        <p>Admin: admin@test.com / password123</p>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    )
}
