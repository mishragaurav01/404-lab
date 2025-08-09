import { Client, Account, Avatars } from 'react-native-appwrite'

export const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1') // Appwrite Cloud
  .setProject('6890f37b002af1579d14')              // Your project ID
  .setPlatform('dev.gaurav.learning')           // Your platform

export const account = new Account(client)
export const avatars = new Avatars(client)





// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://gjsgbfxndqbwoynzfyio.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdqc2diZnhuZHFid295bnpmeWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzgwODEsImV4cCI6MjA3MDI1NDA4MX0.w4Lzbtg3vt0Mj9YbT_O1w2z5C98Fu-zXpfASzTaLiLs'


// const supabase = createClient(supabaseUrl, supabaseKey)