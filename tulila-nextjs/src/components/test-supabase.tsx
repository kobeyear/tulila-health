"use client"

import { useEffect, useState } from 'react'
import { getSupabase, isSupabaseConfigured } from '@/lib/supabase'

export function TestSupabase() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Testing...')

  useEffect(() => {
    async function testConnection() {
      if (!isSupabaseConfigured()) {
        setConnectionStatus('❌ Supabase not configured')
        return
      }

      const supabase = getSupabase()
      if (!supabase) {
        setConnectionStatus('❌ Could not create Supabase client')
        return
      }

      try {
        // Simple test - try to connect to Supabase
        const { error } = await supabase.from('_test_table_that_does_not_exist').select('*').limit(1)
        
        // We expect an error here since the table doesn't exist
        // But if we get a specific "table does not exist" error, it means connection works!
        if (error && error.message.includes('does not exist')) {
          setConnectionStatus('✅ Supabase connected successfully!')
        } else if (error) {
          setConnectionStatus(`❌ Connection error: ${error.message}`)
        } else {
          setConnectionStatus('✅ Supabase connected successfully!')
        }
      } catch (err) {
        setConnectionStatus(`❌ Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
      <h3 className="font-semibold text-gray-900 mb-2">🔧 Supabase Connection Test</h3>
      <p className="text-sm text-gray-600">{connectionStatus}</p>
    </div>
  )
}