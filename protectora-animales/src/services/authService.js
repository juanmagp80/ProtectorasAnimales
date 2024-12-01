// src/services/authService.js
import { supabase } from '../config/supabase'

export const authService = {
    login: async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) throw error
        return data
    },

    logout: async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    },

    getSession: async () => {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) throw error
        return session
    }
}