// src/components/AnimalsList.jsx
import { useState } from 'react'

function AnimalsList({ animals, onDelete, onEdit }) {
    // Estado para controlar qué animal tiene el carrousel activo
    const [activeAnimal, setActiveAnimal] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const nextImage = (animal) => {
        if (activeIndex < animal.fotos.length - 1) {
            setActiveIndex(activeIndex + 1)
        } else {
            setActiveIndex(0)
        }
    }

    const prevImage = (animal) => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        } else {
            setActiveIndex(animal.fotos.length - 1)
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fotos</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Edad</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {animals.map(animal => (
                        <tr key={animal.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="relative w-24 h-24 group"
                                    onMouseEnter={() => setActiveAnimal(animal.id)}
                                    onMouseLeave={() => setActiveAnimal(null)}>
                                    {animal.fotos && animal.fotos.length > 0 ? (
                                        <>
                                            <img
                                                src={animal.fotos[activeAnimal === animal.id ? activeIndex : 0]}
                                                alt={animal.tipo}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                            {animal.fotos.length > 1 && activeAnimal === animal.id && (
                                                <div className="absolute inset-0 flex items-center justify-between">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            prevImage(animal);
                                                        }}
                                                        className="p-1 bg-black bg-opacity-50 text-white rounded-full mx-1 hover:bg-opacity-75"
                                                    >
                                                        ←
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            nextImage(animal);
                                                        }}
                                                        className="p-1 bg-black bg-opacity-50 text-white rounded-full mx-1 hover:bg-opacity-75"
                                                    >
                                                        →
                                                    </button>
                                                </div>
                                            )}
                                            <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-bl-lg">
                                                {animal.fotos.length} fotos
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-400">Sin foto</span>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="px-6 py-4">{animal.tipo}</td>
                            <td className="px-6 py-4">{animal.edad}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded-full text-xs
                  ${animal.estado === 'disponible' ? 'bg-green-100 text-green-800' :
                                        animal.estado === 'adoptado' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'}`}>
                                    {animal.estado}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => onEdit(animal)}
                                        className="text-blue-600 hover:text-blue-900 transition-colors"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => onDelete(animal.id)}
                                        className="text-red-600 hover:text-red-900 transition-colors"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AnimalsList