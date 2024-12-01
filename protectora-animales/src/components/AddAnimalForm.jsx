// src/components/AddAnimalForm.jsx
import { useEffect, useState } from 'react'

function AddAnimalForm({ onSubmit, onClose, animalToEdit }) {
    const initialVacunas = [
        { nombre: 'Rabia', fecha: '', estado: false },
        { nombre: 'Polivalente', fecha: '', estado: false },
        { nombre: 'Leucemia', fecha: '', estado: false },
        { nombre: 'Triple Felina', fecha: '', estado: false },
    ]
    const [formData, setFormData] = useState({

        // Información Básica
        nombre: '',
        tipo: '',
        raza: '',
        genero: '',
        edad: '',
        peso: '',
        color: '',
        tamanio: '',

        // Salud
        // Salud
        estadoSalud: '',
        vacunas: initialVacunas,
        esterilizado: false,
        condicionesEspeciales: '',
        medicacionActual: '',
        tieneChip: false,
        numeroChip: '',
        fechaChip: '',

        // Ingreso
        fechaIngreso: '',
        procedencia: '',
        motivoIngreso: '',
        estadoIngreso: '',

        // Comportamiento
        temperamento: '',
        sociableAnimales: false,
        sociableNinos: false,
        notasComportamiento: '',

        // Estado y Fotos
        estado: '',
        fotos: []
    })


    useEffect(() => {
        if (animalToEdit) {
            setFormData(animalToEdit)
        }
    }, [animalToEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await onSubmit(formData)
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                        {animalToEdit ? 'Editar Animal' : 'Nuevo Animal'}
                    </h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Información Básica */}
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4">Información Básica</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input
                                    type="text"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Tipo</label>
                                <select
                                    value={formData.tipo}
                                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="">Seleccionar tipo</option>
                                    <option value="perro">Perro</option>
                                    <option value="gato">Gato</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Raza</label>
                                <input
                                    type="text"
                                    value={formData.raza}
                                    onChange={(e) => setFormData({ ...formData, raza: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Género</label>
                                <select
                                    value={formData.genero}
                                    onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="">Seleccionar género</option>
                                    <option value="macho">Macho</option>
                                    <option value="hembra">Hembra</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Edad</label>
                                <input
                                    type="text"
                                    value={formData.edad}
                                    onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                                <input
                                    type="number"
                                    value={formData.peso}
                                    onChange={(e) => setFormData({ ...formData, peso: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Información Sanitaria */}
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4">Información Sanitaria</h4>

                        {/* Control de Vacunas */}
                        <div className="mb-6">
                            <h5 className="text-md font-medium mb-3">Vacunas</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {formData.vacunas.map((vacuna, index) => (
                                    <div key={vacuna.nombre} className="flex items-center space-x-4">
                                        <input
                                            type="checkbox"
                                            checked={vacuna.estado}
                                            onChange={(e) => {
                                                const newVacunas = [...formData.vacunas]
                                                newVacunas[index].estado = e.target.checked
                                                setFormData({ ...formData, vacunas: newVacunas })
                                            }}
                                            className="h-4 w-4 text-blue-600 rounded"
                                        />
                                        <span className="text-sm">{vacuna.nombre}</span>
                                        <input
                                            type="date"
                                            value={vacuna.fecha}
                                            onChange={(e) => {
                                                const newVacunas = [...formData.vacunas]
                                                newVacunas[index].fecha = e.target.value
                                                setFormData({ ...formData, vacunas: newVacunas })
                                            }}
                                            className="text-sm border rounded px-2 py-1"
                                            disabled={!vacuna.estado}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Información del Microchip */}
                        <div className="border-t pt-6">
                            <h5 className="text-md font-medium mb-3">Microchip</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="checkbox"
                                        checked={formData.tieneChip}
                                        onChange={(e) => setFormData({ ...formData, tieneChip: e.target.checked })}
                                        className="h-4 w-4 text-blue-600 rounded"
                                    />
                                    <span className="text-sm">Tiene microchip</span>
                                </div>
                                {formData.tieneChip && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Número de chip</label>
                                            <input
                                                type="text"
                                                value={formData.numeroChip}
                                                onChange={(e) => setFormData({ ...formData, numeroChip: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Fecha de implantación</label>
                                            <input
                                                type="date"
                                                value={formData.fechaChip}
                                                onChange={(e) => setFormData({ ...formData, fechaChip: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Estado de Salud y Esterilización */}
                        <div className="border-t pt-6 mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Estado de Salud</label>
                                    <select
                                        value={formData.estadoSalud}
                                        onChange={(e) => setFormData({ ...formData, estadoSalud: e.target.value })}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    >
                                        <option value="">Seleccionar estado</option>
                                        <option value="saludable">Saludable</option>
                                        <option value="en_tratamiento">En tratamiento</option>
                                        <option value="cronico">Crónico</option>
                                    </select>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="checkbox"
                                        checked={formData.esterilizado}
                                        onChange={(e) => setFormData({ ...formData, esterilizado: e.target.checked })}
                                        className="h-4 w-4 text-blue-600 rounded"
                                    />
                                    <span className="text-sm">Esterilizado</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comportamiento */}
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4">Comportamiento</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Temperamento</label>
                                <select
                                    value={formData.temperamento}
                                    onChange={(e) => setFormData({ ...formData, temperamento: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="">Seleccionar temperamento</option>
                                    <option value="tranquilo">Tranquilo</option>
                                    <option value="activo">Activo</option>
                                    <option value="nervioso">Nervioso</option>
                                </select>
                            </div>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="checkbox"
                                    checked={formData.sociableAnimales}
                                    onChange={(e) => setFormData({ ...formData, sociableAnimales: e.target.checked })}
                                    className="h-4 w-4 text-blue-600 rounded"
                                />
                                <span className="text-sm">Sociable con otros animales</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="checkbox"
                                    checked={formData.sociableNinos}
                                    onChange={(e) => setFormData({ ...formData, sociableNinos: e.target.checked })}
                                    className="h-4 w-4 text-blue-600 rounded"
                                />
                                <span className="text-sm">Sociable con niños</span>
                            </div>
                        </div>
                    </section>

                    {/* Estado y Fotos */}
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold mb-4">Estado y Fotos</h4>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Estado</label>
                                <select
                                    value={formData.estado}
                                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="">Seleccionar estado</option>
                                    <option value="disponible">Disponible</option>
                                    <option value="adoptado">Adoptado</option>
                                    <option value="en_proceso">En proceso</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Fotos</label>
                                <input
                                    type="file"
                                    multiple
                                    onChange={(e) => {
                                        const files = Array.from(e.target.files)
                                        setFormData({ ...formData, fotos: files })
                                    }}
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-md hover:bg-gray-50"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            {animalToEdit ? 'Actualizar' : 'Guardar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddAnimalForm