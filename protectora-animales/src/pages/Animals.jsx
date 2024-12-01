// src/pages/Animals.jsx
import { useEffect, useState } from 'react'
import AnimalDetailModal from '../components/AnimalDetailModal'
import { animalService } from '../services/animalService'

function Animals() {
    const [animals, setAnimals] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('todos')
    const [selectedAnimal, setSelectedAnimal] = useState(null)

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const data = await animalService.getAll()
                console.log('Datos recibidos:', data) // Debug
                setAnimals(data)
            } catch (error) {
                console.error('Error:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchAnimals()
    }, [])

    const handleFilterChange = async (tipo) => {
        setLoading(true)
        try {
            const data = tipo === 'todos'
                ? await animalService.getAll()
                : await animalService.getByTipo(tipo)
            setAnimals(data)
            setFilter(tipo)
        } catch (error) {
            console.error('Error filtrando:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="relative bg-white py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Encuentra tu nuevo amigo
                    </h1>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {['todos', 'perro', 'gato'].map(tipo => (
                            <button
                                key={tipo}
                                onClick={() => handleFilterChange(tipo)}
                                className={`
                      px-6 py-3 rounded-lg text-sm font-medium transition-all
                      ${filter === tipo
                                        ? 'bg-gray-900 text-white shadow-lg transform -translate-y-0.5'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                                    }
                    `}
                            >
                                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {animals.map(animal => (
                        <div
                            key={animal.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedAnimal(animal)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={Array.isArray(animal.fotos) && animal.fotos.length > 0 ? animal.fotos[0] : animal.foto}
                                    alt={animal.nombre}
                                    className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                            {animal.nombre}
                                        </h3>
                                        <p className="text-sm text-gray-600">{animal.raza}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                                        {animal.edad}
                                    </span>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Género:</span> {animal.genero}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <span className="font-medium">Temperamento:</span> {animal.temperamento}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className={`px-2 py-1 rounded-full text-xs
                    ${animal.estado === 'disponible' ? 'bg-green-100 text-green-800' :
                                            animal.estado === 'adoptado' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'}`}>
                                        {animal.estado}
                                    </span>
                                    <button className="text-blue-500 hover:text-blue-700">
                                        Ver más →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal de Detalles */}
            {selectedAnimal && (
                <AnimalDetailModal
                    animal={selectedAnimal}
                    onClose={() => setSelectedAnimal(null)}
                />
            )}
        </div>
    )
}

export default Animals