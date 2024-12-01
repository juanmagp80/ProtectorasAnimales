// src/services/uploadService.js
export const uploadImage = async (file) => {
    try {
        if (!file) {
            throw new Error('No file provided')
        }

        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'protectora_preset') // Usar el nombre del preset creado

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData
            }
        )

        if (!response.ok) {
            const errorData = await response.json()
            console.error('Error response from Cloudinary:', errorData)
            throw new Error(`Cloudinary error: ${errorData.error?.message || 'Unknown error'}`)
        }

        const data = await response.json()
        return data.secure_url
    } catch (error) {
        console.error('Error detallado:', error)
        throw error
    }
}