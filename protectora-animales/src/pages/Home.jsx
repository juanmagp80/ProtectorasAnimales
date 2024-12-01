// src/pages/Home.jsx
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center min-h-screen px-6">
                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center py-12 order-2 md:order-1">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 hover:text-blue-500 transition-colors duration-300">
                            Encuentra tu
                            <span className="text-blue-500 hover:text-gray-900 transition-colors duration-300"> compañero</span>
                            <br /> perfecto
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg hover:text-blue-500 transition-colors duration-300">
                            Cada animal merece un hogar lleno de amor. Descubre a tu nuevo mejor amigo y cambia una vida para siempre.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="/animals"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Adoptar ahora
                            </Link>
                            <Link
                                to="/how-to-adopt"
                                className="bg-gray-100 hover:bg-blue-500 text-gray-900 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Cómo funciona
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="order-1 md:order-2">
                        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1444212477490-ca407925329e"
                                alt="Hero"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:opacity-0 transition-opacity duration-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                                <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <p className="text-5xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">150+</p>
                            <p className="text-lg text-gray-600 group-hover:text-blue-500 transition-colors duration-300">Animales adoptados</p>
                        </div>

                        <div className="text-center p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                                <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <p className="text-5xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">50+</p>
                            <p className="text-lg text-gray-600 group-hover:text-blue-500 transition-colors duration-300">Animales disponibles</p>
                        </div>

                        <div className="text-center p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                            <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                                <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-5xl font-bold text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">10+</p>
                            <p className="text-lg text-gray-600 group-hover:text-blue-500 transition-colors duration-300">Años de experiencia</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home