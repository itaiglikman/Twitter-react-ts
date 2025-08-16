import { createClient } from "@supabase/supabase-js";
import  { SUPABASE_URL,SUPABASE_ANON_KEY } from "../src/env";

export const dbName = 'Tweets';
export const supabaseDB = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
