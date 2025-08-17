import { createClient } from "@supabase/supabase-js";
// import  { SUPABASE_URL,SUPABASE_ANON_KEY } from "../src/env";

export const dbName = 'Tweets';
export const supabaseDB = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)
// export const supabaseDB = createClient(import.meta.SUPABASE_URL, SUPABASE_ANON_KEY)
