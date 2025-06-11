import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cyojceccgcstihqedybs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5b2pjZWNjZ2NzdGlocWVkeWJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MTYwNjAsImV4cCI6MjA2NTE5MjA2MH0.Zcq4Q_MtTF5s88kovSsxqYY4fHAOOKV5_p223fhQ1ZA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})