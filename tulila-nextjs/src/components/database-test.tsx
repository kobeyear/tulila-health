"use client"

import { useState, useEffect } from 'react'
import { getSupabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { SetupInstructions } from './setup-instructions'

interface Contact {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export function DatabaseTest() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [tableExists, setTableExists] = useState<boolean | null>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const supabase = getSupabase()

  const checkTableExists = async () => {
    if (!supabase) return
    
    try {
      const { error } = await supabase.from('contacts').select('count').limit(1)
      if (error) {
        if (error.message.includes('does not exist') || error.code === 'PGRST205') {
          setTableExists(false)
          setError('Table does not exist yet - click "Create Table" to set it up!')
        } else {
          setError(`Database error: ${error.message}`)
        }
      } else {
        setTableExists(true)
        loadContacts()
      }
    } catch (err) {
      setError(`Connection error: ${err instanceof Error ? err.message : 'Unknown error'}`)
    }
  }

  // Removed createTable function - using SetupInstructions component instead

  const loadContacts = async () => {
    if (!supabase || !tableExists) return
    
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        setError(`Error loading contacts: ${error.message}`)
      } else {
        setContacts(data || [])
        setError('')
      }
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase || !tableExists) return
    
    if (!formData.name || !formData.email) {
      setError('Name and email are required')
      return
    }

    setLoading(true)
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData])

      if (error) {
        setError(`Error submitting: ${error.message}`)
      } else {
        setFormData({ name: '', email: '', message: '' })
        setError('')
        loadContacts() // Refresh list
      }
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkTableExists()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!supabase) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-semibold text-red-900">❌ Supabase Not Configured</h3>
        <p className="text-red-700">Please check your environment variables.</p>
      </div>
    )
  }

  // Show setup instructions if table doesn't exist
  if (tableExists === false) {
    return (
      <div className="space-y-6">
        <SetupInstructions />
        <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-900">🗄️ Database Status</h3>
            <Button onClick={checkTableExists} size="sm" variant="outline">
              ✅ Check Again
            </Button>
          </div>
          <p className="text-yellow-600 mt-2">Table not created yet - follow instructions above!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-gray-900 mb-4">🗄️ Database Test</h3>
      
      {/* Status */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium">Table Status:</span>
          {tableExists === null && <span className="text-yellow-600">Checking...</span>}
          {tableExists === true && <span className="text-green-600">✅ Ready</span>}
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={checkTableExists} 
            disabled={loading}
            size="sm"
            variant="outline"
          >
            Check Table
          </Button>
        </div>
      </div>

      {/* Error display */}
      {error && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <pre className="whitespace-pre-wrap text-yellow-800">{error}</pre>
        </div>
      )}

      {/* Contact form */}
      {tableExists && (
        <form onSubmit={submitForm} className="mb-6 space-y-4">
          <h4 className="font-semibold">Add Test Contact</h4>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded"
              rows={3}
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Add Contact'}
            </Button>
          </div>
        </form>
      )}

      {/* Contacts list */}
      {tableExists && (
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold">Recent Contacts ({contacts.length})</h4>
            <Button onClick={loadContacts} size="sm" variant="outline" disabled={loading}>
              Refresh
            </Button>
          </div>
          
          {contacts.length === 0 ? (
            <p className="text-gray-500 text-sm">No contacts yet. Add one above!</p>
          ) : (
            <div className="space-y-2">
              {contacts.map((contact) => (
                <div key={contact.id} className="p-3 bg-gray-50 rounded text-sm">
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-gray-600">{contact.email}</div>
                  {contact.message && (
                    <div className="text-gray-700 mt-1">{contact.message}</div>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(contact.created_at).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}