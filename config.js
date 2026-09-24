// supabaseConfig.js
export const CONFIG = {
  supabaseUrl: 'https://your-project-url.supabase.co',
  supabaseAnonKey: 'your-anon-public-key'
};
import { CONFIG } from './supabaseConfig.js';

const supabase = createClient(CONFIG.supabaseUrl, CONFIG.supabaseAnonKey);
