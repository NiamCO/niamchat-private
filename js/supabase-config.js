// js/supabase-config.js
const SUPABASE_URL = 'https://zfxyjvuadrhlborbwige.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmeHlqdnVhZHJobGJvcmJ3aWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzAwMjUsImV4cCI6MjA4MTMwNjAyNX0.8RDKHD45xqr5Nz5FqXpF5fjRbZrVqrT6pCi4s-k2zvM';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Make it globally available
window.supabaseClient = supabase;
console.log('Supabase initialized successfully!');
