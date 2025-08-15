import { createClient } from "@supabase/supabase-js";

const projectURL = 'https://mspytmyfbwrxifxabdtc.supabase.co';
const APIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHl0bXlmYndyeGlmeGFiZHRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNTQwODYsImV4cCI6MjA3MDgzMDA4Nn0.KZhDK0ZYe-4Nfs-UwDKmo49vtBWdNumln8MZmkFi4tU'

export const dbName = 'Tweets';
export const supabaseDB = createClient(projectURL, APIKey)
