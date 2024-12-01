// src/config/supabase.js
import { createClient } from '@supabase/supabase-js'

if (!import.meta.env.VITE_SUPABASE_URL) {
    throw new Error('Falta VITE_SUPABASE_URL en variables de entorno')
}

if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
    throw new Error('Falta VITE_SUPABASE_ANON_KEY en variables de entorno')
}

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)