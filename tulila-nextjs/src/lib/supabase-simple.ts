// Simplified Supabase client for production debugging
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gsqzqjsdwwiffproqhge.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzcXpxanNkd3dpZmZwcm9xaGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjY4NDMsImV4cCI6MjAyODEwMjg0M30.KUrXzF6-VChzY3XlxgCNSA_OVhmeIid'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
