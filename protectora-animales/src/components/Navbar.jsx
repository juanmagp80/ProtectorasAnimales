// src/components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-blue-500">
                        Protectora
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">
                            Inicio
                        </Link>
                        <Link to="/animals" className="text-gray-700 hover:text-blue-500 transition-colors">
                            Adoptar
                        </Link>
                        <Link to="/how-to-adopt" className="text-gray-700 hover:text-blue-500 transition-colors">
                            Cómo Adoptar
                        </Link>
                        <Link to="/admin" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                            Admin
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Inicio
                            </Link>
                            <Link
                                to="/animals"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Adoptar
                            </Link>
                            <Link
                                to="/how-to-adopt"
                                className="text-gray-700 hover:text-blue-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Cómo Adoptar
                            </Link>
                            <Link
                                to="/admin"
                                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors inline-block text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Admin
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar