import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client-side Supabase client (uses anon key)
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Server-side Supabase client (uses service role key)
export const supabaseAdmin = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey && supabase !== null
}

// Safe function to use Supabase - returns null if not configured
export const getSupabase = () => {
  if (!isSupabaseConfigured()) {
    console.warn('Supabase not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local')
    return null
  }
  return supabase
}

// Safe function to use Supabase admin - returns null if not configured
export const getSupabaseAdmin = () => {
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase admin not configured. Please add SUPABASE_SERVICE_ROLE_KEY to .env.local')
    return null
  }
  return supabaseAdmin
}