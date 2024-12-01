// src/components/AnimalDetailModal.jsx
function AnimalDetailModal({ animal, onClose }) {
    if (!animal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{animal.nombre || 'Sin nombre'}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Información Básica */}
                    <section className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Información Básica</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <p><span className="font-medium">Tipo:</span> {animal.tipo || 'No especificado'}</p>
                            <p><span className="font-medium">Raza:</span> {animal.raza || 'No especificada'}</p>
                            <p><span className="font-medium">Género:</span> {animal.genero || 'No especificado'}</p>
                            <p><span className="font-medium">Edad:</span> {animal.edad || 'No especificada'}</p>
                            <p><span className="font-medium">Peso:</span> {animal.peso ? `${animal.peso} kg` : 'No especificado'}</p>
                        </div>
                    </section>

                    {/* Salud */}
                    <section className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Información Sanitaria</h4>
                        <div className="space-y-3">
                            <p><span className="font-medium">Estado de Salud:</span> {animal.estadoSalud || 'No especificado'}</p>
                            <p><span className="font-medium">Esterilizado:</span> {animal.esterilizado ? 'Sí' : 'No'}</p>
                            <p><span className="font-medium">Chip:</span> {animal.tieneChip ? `Sí - ${animal.numeroChip}` : 'No'}</p>
                            {animal.vacunas && animal.vacunas.length > 0 && (
                                <div>
                                    <span className="font-medium">Vacunas:</span>
                                    <ul className="mt-1 space-y-1">
                                        {animal.vacunas.map((vacuna, index) => (
                                            <li key={index} className="text-sm">
                                                {vacuna.nombre}: {vacuna.estado ? `Sí (${vacuna.fecha || 'fecha no especificada'})` : 'No'}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Comportamiento */}
                    <section className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Comportamiento</h4>
                        <div className="space-y-2">
                            <p><span className="font-medium">Temperamento:</span> {animal.temperamento || 'No especificado'}</p>
                            <p><span className="font-medium">Sociable con animales:</span> {animal.sociableAnimales ? 'Sí' : 'No'}</p>
                            <p><span className="font-medium">Sociable con niños:</span> {animal.sociableNinos ? 'Sí' : 'No'}</p>
                        </div>
                    </section>

                    {/* Fotos */}
                    {animal.fotos && animal.fotos.length > 0 && (
                        <section className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-3">Fotos</h4>
                            <div className="grid grid-cols-3 gap-4">
                                {animal.fotos.map((foto, index) => (
                                    <img
                                        key={index}
                                        src={foto}
                                        alt={`${animal.nombre || 'Animal'} foto ${index + 1}`}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AnimalDetailModal;