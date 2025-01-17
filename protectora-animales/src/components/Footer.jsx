// src/components/Footer.jsx
function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-16 relative overflow-hidden">
            {/* Elemento decorativo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Sección Principal */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="w-8 h-8 bg-blue-500 rounded-lg"></span>
                            <h3 className="text-white font-bold text-2xl">Protectora</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Dedicados al bienestar animal desde 2010. Transformando vidas, una pata a la vez.
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-xl border-b border-gray-700 pb-2">Contacto</h3>
                        <div className="space-y-4">
                            <a href="mailto:info@protectora.com"
                                className="flex items-center group">
                                <svg className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-400 group-hover:text-white transition-colors">info@protectora.com</span>
                            </a>
                            <a href="tel:+34123456789"
                                className="flex items-center group">
                                <svg className="w-5 h-5 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-400 group-hover:text-white transition-colors">+34 123 456 789</span>
                            </a>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-xl border-b border-gray-700 pb-2">Síguenos</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-all hover:scale-110">
                                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all hover:scale-110">
                                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-all hover:scale-110">
                                <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-sm text-gray-500">&copy; 2024 Protectora de Animales. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer