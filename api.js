// api.js
import { CONFIG } from './supabaseConfig.js';
import { createClient } from '@supabase/supabase-js';  // Make sure you have this installed or imported

const supabase = createClient(CONFIG.supabaseUrl, CONFIG.supabaseAnonKey);

// Example function to sign in a user
export async function signIn(email, password) {
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) throw error;
  return user;
}

// Example function to fetch data
export async function fetchPosts() {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) throw error;
  return data;
}

export default supabase;
