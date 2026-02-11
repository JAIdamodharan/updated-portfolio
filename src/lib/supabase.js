import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isValidUrl = (url) => {
    try {
        new URL(url)
        return true
    } catch {
        return false
    }
}

// Ensure the app doesn't crash if credentials are missing or invalid
const finalUrl = isValidUrl(supabaseUrl) ? supabaseUrl : 'https://placeholder-project.supabase.co'
const finalKey = (supabaseAnonKey && supabaseAnonKey !== 'your_supabase_anon_key') ? supabaseAnonKey : 'eyJhY2Nlc3NfdG9rZW4iOiJwcm94eSJ9'

if (!isValidUrl(supabaseUrl) || !supabaseAnonKey || supabaseAnonKey === 'your_supabase_anon_key') {
    console.warn('Supabase credentials missing or invalid. Using fallback mock client.')
}

export const supabase = createClient(finalUrl, finalKey)
