// src/services/animalService.js
import { supabase } from '../config/supabase'

export const animalService = {
    // Obtener todos los animales
    getAll: async () => {
        try {
            const { data, error } = await supabase
                .from('animales')
                .select('*')

            if (error) throw error
            return data
        } catch (error) {
            console.error('Error en getAll:', error)
            throw error
        }
    },

    // Obtener un animal por ID
    getById: async (id) => {
        try {
            const { data, error } = await supabase
                .from('animales')
                .select('*')
                .eq('id', id)
                .single()

            if (error) throw error
            return data
        } catch (error) {
            console.error('Error en getById:', error)
            throw error
        }
    },

    // Crear nuevo animal
    create: async (animalData) => {
        try {
            const dataToSend = {
                nombre: animalData.nombre || '',
                tipo: animalData.tipo || '',
                raza: animalData.raza || '',
                genero: animalData.genero || '',
                edad: parseInt(animalData.edad) || 0,
                peso: parseFloat(animalData.peso) || null,
                color: animalData.color || '',
                tamanio: animalData.tamanio || '',
                estado: animalData.estado || 'disponible',
                estado_salud: animalData.estado_salud || '',
                condiciones_especiales: animalData.condiciones_especiales || '',
                medicacion_actual: animalData.medicacion_actual || '',
                esterilizado: Boolean(animalData.esterilizado),
                tiene_chip: Boolean(animalData.tiene_chip),
                numero_chip: animalData.numero_chip || '',
                fecha_chip: animalData.fecha_chip || null,
                vacunas: Array.isArray(animalData.vacunas) ? animalData.vacunas : [],
                fecha_ingreso: animalData.fecha_ingreso || new Date().toISOString(),
                procedencia: animalData.procedencia || '',
                motivo_ingreso: animalData.motivo_ingreso || '',
                temperamento: animalData.temperamento || '',
                sociable_animales: Boolean(animalData.sociable_animales),
                sociable_ninos: Boolean(animalData.sociable_ninos),
                notas_comportamiento: animalData.notas_comportamiento || '',
                fotos: Array.isArray(animalData.fotos) ? animalData.fotos : []
            };

            const { data, error } = await supabase
                .from('animales')
                .insert([dataToSend])
                .select();

            if (error) throw error;
            return data[0];
        } catch (error) {
            console.error('Error en create:', error);
            throw error;
        }
    },
    // Actualizar animal existente
    update: async (id, animalData) => {
        try {
            const { error } = await supabase
                .from('animales')
                .update(animalData)
                .eq('id', id)

            if (error) throw error
        } catch (error) {
            console.error('Error en update:', error)
            throw error
        }
    },

    // Eliminar animal
    delete: async (id) => {
        try {
            const { error } = await supabase
                .from('animales')
                .delete()
                .eq('id', id)

            if (error) throw error
        } catch (error) {
            console.error('Error en delete:', error)
            throw error
        }
    },

    // Filtrar por tipo
    getByTipo: async (tipo) => {
        try {
            const { data, error } = await supabase
                .from('animales')
                .select('*')
                .eq('tipo', tipo)

            if (error) throw error
            return data
        } catch (error) {
            console.error('Error en getByTipo:', error)
            throw error
        }
    }
}

export default animalService