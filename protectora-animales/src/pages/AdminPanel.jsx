// src/pages/AdminPanel.jsx
import { useEffect, useState } from 'react'
import AddAnimalForm from '../components/AddAnimalForm'
import AnimalsList from '../components/AnimalsList'
import { animalService } from '../services/animalService'

function AdminPanel() {
    const [animals, setAnimals] = useState([])
    const [stats, setStats] = useState({
        total: 0,
        adoptados: 0,
        disponibles: 0,
        perros: 0,
        gatos: 0
    })
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [animalToEdit, setAnimalToEdit] = useState(null)



    const handleEdit = (animal) => {
        setAnimalToEdit(animal)
        setShowForm(true)
    }

    useEffect(() => {
        loadAnimals()
    }, [])

    useEffect(() => {
        calculateStats()
    }, [animals])

    const calculateStats = () => {
        setStats({
            total: animals.length,
            adoptados: animals.filter(a => a.estado === 'adoptado').length,
            disponibles: animals.filter(a => a.estado === 'disponible').length,
            perros: animals.filter(a => a.tipo === 'perro').length,
            gatos: animals.filter(a => a.tipo === 'gato').length
        })
    }

    const loadAnimals = async () => {
        try {
            const data = await animalService.getAll()
            setAnimals(data)
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (formData) => {
        console.log('Recibiendo datos en AdminPanel:', formData)
        try {
            if (animalToEdit) {
                await animalService.update(animalToEdit.id, formData)
            } else {
                await animalService.create(formData)
            }
            await loadAnimals()
            setShowForm(false)
            setAnimalToEdit(null)
        } catch (error) {
            console.error('Error al guardar:', error)
            throw error
        }
    }
    const handleDelete = async (id) => {
        try {
            if (window.confirm('¿Estás seguro de eliminar este animal?')) {
                await animalService.delete(id)
                // Recargar la lista después de eliminar
                loadAnimals()
            }
        } catch (error) {
            console.error('Error al eliminar:', error)
            alert('No se pudo eliminar el animal')
        }
    }

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Dashboard Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-full">
                                <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500 font-medium">Total Animales</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                            </div>
                        </div>
                    </div>

                    {/* Adoptados Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-full">
                                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500 font-medium">Adoptados</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.adoptados}</p>
                            </div>
                        </div>
                    </div>

                    {/* Disponibles Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
                        <div className="flex items-center">
                            <div className="p-3 bg-yellow-100 rounded-full">
                                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-500 font-medium">En Espera</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.disponibles}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Distribución por tipo */}
                <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4">Distribución por tipo</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-500">Perros</p>
                            <p className="text-3xl font-bold text-blue-600">{stats.perros}</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <p className="text-sm text-gray-500">Gatos</p>
                            <p className="text-3xl font-bold text-purple-600">{stats.gatos}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de Gestión */}
            <div className="mt-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Gestión de Animales</h2>
                    <button
                        onClick={() => {
                            setAnimalToEdit(null)
                            setShowForm(true)
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Añadir Animal
                    </button>
                </div>

                <AnimalsList
                    animals={animals}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />

                {showForm && (
                    <AddAnimalForm
                        onSubmit={handleSubmit}
                        onClose={() => {
                            setShowForm(false)
                            setAnimalToEdit(null)
                        }}
                        animalToEdit={animalToEdit}
                    />
                )}
            </div>
        </div>
    )
}
export default AdminPanel